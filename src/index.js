import {
    init_program,
    init_program_fbos,
    get_program_data
} from './program-def';

import {
    textureData as texture_data
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

import {
    create_program,
    init_vao,
    generate_attributes_from_config,
    fill_position_buffer,
    setup_indices,
    buffer_data,
    set_uniforms
} from './wod';

import {
    get_ubo,
    get_uniforms_in_ubo,
    set_unique_ubo_in_program,
    update_ubo_buffer,
} from "./ubo";


export {
    init_program,
    init_program_fbos,
    get_program_data,
    texture_data,
    get_program_uniforms,
    set_rectangle_coords,
    bind_attribute,
    loadShader,
    createProgram,
    createProgramFromSources,
    resizeCanvasToDisplaySize,
    draw_shapes,
    get_program_elements,
    init_vertex_data,
    create_program,
    init_vao,
    generate_attributes_from_config,
    fill_position_buffer,
    setup_indices,
    buffer_data,
    set_uniforms,
    get_ubo,
    get_uniforms_in_ubo,
    set_unique_ubo_in_program,
    update_ubo_buffer
};
export default {
    init_program,
    init_program_fbos,
    get_program_data,
    texture_data,
    get_program_uniforms,
    set_rectangle_coords,
    bind_attribute,
    loadShader,
    createProgram,
    createProgramFromSources,
    resizeCanvasToDisplaySize,
    draw_shapes,
    get_program_elements,
    init_vertex_data,
    create_program,
    init_vao,
    generate_attributes_from_config,
    fill_position_buffer,
    setup_indices,
    buffer_data,
    set_uniforms,
    get_ubo,
    get_uniforms_in_ubo,
    set_unique_ubo_in_program,
    update_ubo_buffer,
};