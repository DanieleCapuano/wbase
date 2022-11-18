import {
    init_program,
    init_program_fbos,
    get_program_data
} from './program-def';

import {
    textureData
} from './texture-common';

import {
    get_program_uniforms
} from './uniforms-common';

import {
    set_rectangle_coords,
    bind_attribute,
    loadShader,
    createProgram,
    createProgramFromSources,
    resizeCanvasToDisplaySize,
    draw_shapes,
    get_program_elements
} from './utils';

import {
    init_vertex_data
} from './vertex-common';


export const API = {
    init_program,
    init_program_fbos,
    get_program_data,
    textureData,
    get_program_uniforms,
    set_rectangle_coords,
    bind_attribute,
    loadShader,
    createProgram,
    createProgramFromSources,
    resizeCanvasToDisplaySize,
    draw_shapes,
    get_program_elements,
    init_vertex_data
};
export default API;