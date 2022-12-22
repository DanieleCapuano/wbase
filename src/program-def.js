import { init_vertex_data } from './vertex-common';
import { get_program_uniforms } from './uniforms-common';
import { createProgramFromSources } from './utils';
import { textureData } from './texture-common';

export const init_program = _init_program;
export const init_program_fbos = _init_program_fbos;
export const get_program_data = _get_program_data;

function _init_program(gl, opts) {
    let p_o = {};
    try {
        // setup GLSL program
        let shaders_src = [opts.vertex_shader, opts.fragment_shader].map(sh => _decorate_source(sh));
        if (opts.build_program) {
            p_o = opts.build_program(gl, shaders);
        }
        else {
            let ///////////////////////////////
                pands = createProgramFromSources(
                    gl,
                    shaders_src
                ),
                program = pands.program,
                shaders = pands.shaders;

            p_o = _init_program_fbos(
                Object.assign({ program, shaders }, _get_program_data(gl, program)),
                gl,
                opts
            );
        }
    }
    catch (e) {
        console.warn("PROGRAM ERROR FOR CURRENT PROGRAM");
        console.warn(e);
    }

    if (opts.add_program_configuration) {
        p_o = opts.add_program_configuration(p_o, gl, opts);
    }

    return p_o;
}

function _get_program_data(gl, program) {
    let vertex_data = init_vertex_data(gl, program),
        uniforms = get_program_uniforms(gl, program);

    return {
        vertex_data,
        uniforms,
        start_time: performance.now()
    };
}

function _init_program_fbos(current_program, gl, opts) {
    const { canvas, framebuffers_n, framebuffers_offset } = opts;
    let fbo_n = framebuffers_n || 1,
        fbo_offset = framebuffers_offset || 1;

    current_program.has_framebuffer = opts.has_framebuffer;
    if (!opts.dont_create_base_texture) {
        current_program.base_texture = current_program.base_texture || textureData.init_texture(gl, 0);
    }
    current_program.fbo_data = textureData.create_fbo_textures(current_program, gl, fbo_n, fbo_offset, canvas.clientWidth, canvas.clientHeight);

    return current_program;
}

function _decorate_source(source) {
    return eval("`" + source + "`");
}