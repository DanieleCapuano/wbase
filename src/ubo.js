//see https://gist.github.com/jialiang/2880d4cc3364df117320e8cb324c2880 as a reference

import { isSystemLittleEndian } from "./utils";

export const get_ubo = _get_ubo;
export const get_uniforms_in_ubo = _get_uniforms_in_ubo;
export const set_unique_ubo_in_program = _set_unique_ubo_in_program;
export const update_ubo_buffer = _update_ubo_buffer;


//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

function _get_ubo(gl, program, ubo_name, bind_base) {
    // Get the index of the Uniform Block from any program
    const uboIndex = gl.getUniformBlockIndex(program, ubo_name);

    // Get the size of the Uniform Block in bytes
    const blockSize = gl.getActiveUniformBlockParameter(
        program,
        uboIndex,
        gl.UNIFORM_BLOCK_DATA_SIZE
    );

    // Create Uniform Buffer to store our data
    const uboBuffer = gl.createBuffer();

    // Bind it to tell WebGL we are working on this buffer
    gl.bindBuffer(gl.UNIFORM_BUFFER, uboBuffer);

    // Allocate memory for our buffer equal to the size of our Uniform Block
    // We use dynamic draw because we expect to respecify the contents of the buffer frequently
    gl.bufferData(gl.UNIFORM_BUFFER, blockSize, gl.DYNAMIC_DRAW);

    const ubo_conf = { uboIndex, uboBuffer, blockSize, uboUniqueBind: bind_base };

    if (bind_base !== undefined) {
        // Bind the buffer to a binding point
        // Think of it as storing the buffer into a special UBO ArrayList
        // The second argument is the index you want to store your Uniform Buffer in
        // Let's say you have 2 unique UBO, you'll store the first one in index 0 and the second one in index 1
        gl.bindBufferBase(gl.UNIFORM_BUFFER, bind_base, uboBuffer);
        set_unique_ubo_in_program(gl, program, ubo_conf);
    }

    // Unbind buffer when we're done using it for now
    // Good practice to avoid unintentionally working on it
    gl.bindBuffer(gl.UNIFORM_BUFFER, null);

    return ubo_conf;
}

function _get_uniforms_in_ubo(gl, program, ubo_conf) {
    const { uboIndex, uboBuffer, uboUniqueBind, ubo_variable_names } = ubo_conf;

    // ubo_variable_names contains names of the member variables inside of our Uniform Block
    // e.g. ubo_variable_names = ["u_PointSize", "u_Color"];

    // Get the respective index of the member variables inside our Uniform Block
    const uboVariableIndices = gl.getUniformIndices(
        program,
        ubo_variable_names
    );

    // Get the offset of the member variables inside our Uniform Block in bytes
    const uboVariableTypes = gl.getActiveUniforms(
        program,
        uboVariableIndices,
        gl.UNIFORM_TYPE
    );
    const uboVariableOffsets = gl.getActiveUniforms(
        program,
        uboVariableIndices,
        gl.UNIFORM_OFFSET
    );
    const uboVariableSizes = gl.getActiveUniforms(
        program,
        uboVariableIndices,
        gl.UNIFORM_SIZE
    );
    const uboVariableStrides = gl.getActiveUniforms(
        program,
        uboVariableIndices,
        gl.UNIFORM_ARRAY_STRIDE
    );

    return Object.assign(ubo_conf, {
        ubo_variable_info: ubo_variable_names.reduce((uboVariableInfo, name, index) => Object.assign(uboVariableInfo, {
            [name]: {
                index: uboVariableIndices[index],
                type: uboVariableTypes[index],
                size: uboVariableSizes[index],
                offset: uboVariableOffsets[index],
                stride: uboVariableStrides[index]
            }
        }), {})
    });
}

function _set_unique_ubo_in_program(gl, program, ubo_conf) {
    const { uboIndex, uboUniqueBind } = ubo_conf;
    gl.uniformBlockBinding(program, uboIndex, uboUniqueBind);
}


function _update_ubo_buffer(gl, ubo_conf, uniforms_data, uniforms_desc) {
    const { uboBuffer, ubo_variable_info, blockSize } = ubo_conf;

    gl.bindBuffer(gl.UNIFORM_BUFFER, uboBuffer);

    // Push some data to our Uniform Buffer
    const d = _build_data_for_buffer(gl, blockSize, ubo_variable_info, uniforms_data, uniforms_desc);
    gl.bufferSubData(
        gl.UNIFORM_BUFFER,
        0,
        d,
        0,
        d.length
    );

    gl.bindBuffer(gl.UNIFORM_BUFFER, null);
}

const ////////////////////////////////////////////
    littleEndian = isSystemLittleEndian(),
    bytesMap = {
        "1i": Int16Array.BYTES_PER_ELEMENT,
        "1iv": Int16Array.BYTES_PER_ELEMENT,
        "2iv": Int16Array.BYTES_PER_ELEMENT,
        "3iv": Int16Array.BYTES_PER_ELEMENT,
        "1f": Float32Array.BYTES_PER_ELEMENT,
        "1fv": Float32Array.BYTES_PER_ELEMENT,
        "2fv": Float32Array.BYTES_PER_ELEMENT,
        "3fv": Float32Array.BYTES_PER_ELEMENT,
        "Matrix2fv": Float32Array.BYTES_PER_ELEMENT,
        "Matrix3fv": Float32Array.BYTES_PER_ELEMENT,
        "Matrix4fv": Float32Array.BYTES_PER_ELEMENT
    },
    setMapFn = {
        "1i": "setInt16",
        "1iv": "setInt16",
        "2iv": "setInt16",
        "3iv": "setInt16",
        "1f": "setFloat32",
        "1fv": "setFloat32",
        "2fv": "setFloat32",
        "3fv": "setFloat32",
        "Matrix2fv": "setFloat32",
        "Matrix3fv": "setFloat32",
        "Matrix4fv": "setFloat32"
    };
function _build_data_for_buffer(gl, blockSize, varsinfo, udata, udesc) {
    const buf = new ArrayBuffer(blockSize),
        dv = new DataView(buf),
        varKeys = Object.keys(varsinfo);

    for (let i = 0; i < varKeys.length; i++) {
        const /////////////////////////
            varname = varKeys[i],
            varinfo = varsinfo[varname],
            uopts = udesc[varname].opts,
            d = udata[varname],
            data = d.buffer || Array.isArray(d) ? d : [d],
            bpe = bytesMap[uopts.fn],
            groupEl = (
                varinfo.type === gl.FLOAT_VEC2 ||
                varinfo.type === gl.INT_VEC2
            ) ? 2 : (
                varinfo.type === gl.FLOAT_VEC3 ||
                varinfo.type === gl.INT_VEC3
            ) ? 3 : 1,
            setFn = setMapFn[uopts.fn];

        if (varinfo.stride === 0) {
            for (let j = 0; j < data.length; j++) {
                const dv_i = varinfo.offset + (j * bpe);
                dv[setFn](dv_i, data[j], littleEndian);
            }
        }
        else {
            let loopn = 0;
            for (let j = 0; j < data.length; j += groupEl) {
                const istart = varinfo.offset + loopn * varinfo.stride;
                for (let k = 0; k < groupEl; k++) {
                    dv[setFn](istart + bpe * k, data[j + k], littleEndian);
                }

                loopn++;
            }
        }
    }

    return dv;
}