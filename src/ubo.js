//see https://gist.github.com/jialiang/2880d4cc3364df117320e8cb324c2880 as a reference

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

function _update_ubo_buffer(gl, ubo_conf, uniforms_data) {
    const { uboBuffer, ubo_variable_info, blockSize } = ubo_conf;

    gl.bindBuffer(gl.UNIFORM_BUFFER, uboBuffer);

    // Push some data to our Uniform Buffer

    Object.keys(ubo_variable_info).forEach(ubo_vi => {
        if (uniforms_data[ubo_vi] !== undefined) {
            const d = _build_data_for_buffer(gl, ubo_vi, ubo_variable_info[ubo_vi], uniforms_data[ubo_vi]);
            gl.bufferSubData(
                gl.UNIFORM_BUFFER,
                ubo_variable_info[ubo_vi].offset + ubo_variable_info[ubo_vi].stride,
                d,
                0,
                d.length
            );
        }
    })

    gl.bindBuffer(gl.UNIFORM_BUFFER, null);
}

function _build_data_for_buffer(gl, varname, varinfo, data) {
    if (data instanceof Float32Array) return data;
    if (varinfo.stride === 0) return new Float32Array(
        Array.isArray(data) ? data : [data]
    );

    //we have stride > 0: it's an array
    //we're only managing Float32 as type and VEC3 as array type
    const bpe = Float32Array.BYTES_PER_ELEMENT;
    const groupEl = varinfo.type === gl.FLOAT_VEC3 ? 3 : 1;
    const ndata = data.length / groupEl;
    const bytes = bpe * groupEl * varinfo.size;
    const buf = new Float32Array(bytes);
    for (let i = 0; i < ndata; i += bpe * groupEl) {
        buf[i * varinfo.stride] = data[i];
    }
    return buf;
}