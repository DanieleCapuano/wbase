//a list of utilities for wod-based applications (to be merged)

import { get_ubo, get_uniforms_in_ubo, update_ubo_buffer } from "./ubo";
import { loadShader, createProgram } from "./utils";

export const create_program = _create_program;
export const init_vao = _init_vao;
export const generate_attributes_from_config = _generate_attributes_from_config;
export const fill_position_buffer = _fill_position_buffer;
export const setup_indices = _setup_indices;
export const buffer_data = _buffer_data;
export const set_uniforms = _set_uniforms;


function _create_program(gl, vert, frag) {
    // Attach pre-existing shaders
    let vertexShader = loadShader(gl, vert, gl.VERTEX_SHADER);
    let fragmentShader = loadShader(gl, frag, gl.FRAGMENT_SHADER);

    return createProgram(gl, [vertexShader, fragmentShader]);
}

function _generate_attributes_from_config(gl, shad_data, coords_dim) {
    return Object.assign(shad_data, {
        attributes: Object.keys(shad_data.attributes).reduce((a_obj, attr_key) => {
            let ////////////////
                attr_def = shad_data.attributes[attr_key],
                opts = attr_def.opts;

            attr_def.opts = [
                opts.size || coords_dim || 3,         //size
                gl[opts.data_type],                 //type
                opts.normalized,                    //normalized
                opts.stride,                        //stride
                opts.offset                         //offset
            ];
            return Object.assign(a_obj, {
                [attr_key]: attr_def
            });
        }, {})
    })
}

function _fill_position_buffer(gl, program_info, data) {
    const { attributes } = program_info;
    Object.keys(attributes)
        .filter(attr_key => attributes[attr_key].is_position)
        .forEach((attr_name) => {
            _buffer_data(gl, {
                [attr_name]: data  //it usually contains normals as well
            }, program_info);
        });
    return program_info;
}

function _init_vao(gl, program_info) {
    const { program, attributes, uniforms } = program_info;
    const vao = program_info.vao || gl.createVertexArray();

    gl.useProgram(program);
    gl.bindVertexArray(vao);

    const buffer = gl.createBuffer(),
        buffer_bind = gl.ARRAY_BUFFER;
    gl.bindBuffer(buffer_bind, buffer);

    Object.keys(attributes).forEach((attr_name) => {
        let attr_desc = attributes[attr_name];
        let location = gl.getAttribLocation(program, attr_desc.name);
        gl.vertexAttribPointer.apply(gl, [location].concat(attr_desc.opts));
        gl.enableVertexAttribArray(location);

        Object.assign(program_info.attributes[attr_desc.name], {
            location,
            buffer,
            buffer_bind
        }, {
            is_position: attr_desc.is_position
        });
    });

    Object.keys(uniforms).forEach((uniform_name) => {
        if (!program_info.uniforms[uniform_name].ubo) {
            Object.assign(
                program_info.uniforms[uniform_name],
                {
                    location: gl.getUniformLocation(program, uniform_name)
                }
            );
        }
    });
    program_info = _setup_ubos(gl, program_info);

    gl.bindVertexArray(null);
    gl.bindBuffer(buffer_bind, null);
    gl.useProgram(null);

    return { vao };
}

function _setup_ubos(gl, program_info) {
    const { program, uniforms } = program_info;

    let ubo_id = 0;
    const ubos = Object.keys(uniforms)
        .reduce((ubos_list, uniform_name) => {
            if (uniforms[uniform_name].ubo) {
                const ubo_name = uniforms[uniform_name].ubo;

                if (!ubos_list[ubo_name]) {
                    let ubo_conf = get_ubo(gl, program, ubo_name, ubo_id);
                    ubo_conf.ubo_variable_names = [uniform_name];
                    ubos_list[ubo_name] = ubo_conf;
                    ubo_id++;
                }
                else {
                    ubos_list[ubo_name].ubo_variable_names.push(uniform_name);
                }
            }
            return ubos_list;
        }, {});

    Object.keys(ubos).forEach(ubo_name => {
        program_info.ubos = program_info.ubos || {};
        program_info.ubos[ubo_name] = get_uniforms_in_ubo(gl, program, ubos[ubo_name]);
    });

    return program_info;
}

function _setup_indices(gl, indices_data) {
    const indexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);

    // This array defines each face as two triangles, using the
    // indices into the vertex array to specify each triangle's
    // position.

    const indices = indices_data;

    // Now send the element array to GL

    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,
        new Uint16Array(indices), gl.STATIC_DRAW);

    return indexBuffer;
}

function _buffer_data(gl, attrs_values, program_info) {
    gl.bindVertexArray(program_info.vao);
    Object.keys(attrs_values)
        .forEach((attr_name) => {
            const ///////////////////////
                { buffer, buffer_bind } = program_info.attributes[attr_name],
                val = attrs_values[attr_name];

            gl.bindBuffer(buffer_bind, buffer);
            gl.bufferData(buffer_bind, val, gl.STATIC_DRAW, 0);
            gl.bindBuffer(buffer_bind, null);
        });
    gl.bindVertexArray(null);
}

function _set_uniforms(gl, uniforms_values, object_info) {
    const { program_info } = object_info;
    const { ubos } = program_info;

    // Object.keys(ubos || {}).forEach(ubo_name => {
    //     update_ubo_buffer(gl, ubos[ubo_name], uniforms_values);
    //     uniforms_in_ubos = uniforms_in_ubos.concat(ubos[ubo_name].ubo_variable_names);
    // });
    let uniforms_in_ubos = [];
    Object.keys(uniforms_values).forEach((uniform_name) => {
        if (uniforms_in_ubos.indexOf(uniform_name) !== -1) return;  //we've already wrote it using an ubo

        let uniform_wrote = false;
        Object.keys(ubos || {}).forEach(ubo_name => {
            if (ubos[ubo_name].ubo_variable_names.indexOf(uniform_name) === -1) return;
            update_ubo_buffer(gl, ubos[ubo_name], uniforms_values);
            uniform_wrote = true;

            //here we're assuming all the variable inside an ubo will be always updated together...
            uniforms_in_ubos = uniforms_in_ubos.concat(ubos[ubo_name].ubo_variable_names);
        });

        if (!uniform_wrote) {
            const /////////////////////////
                uniform_desc = program_info.uniforms[uniform_name],
                { opts, location } = uniform_desc;

            if (location === null) return;

            let val = uniforms_values[uniform_name],
                args = opts.fn.indexOf('Matrix') === -1 ? [location, val] : [location, false, val];

            gl['uniform' + opts.fn].apply(gl, args);
        }
    });
}