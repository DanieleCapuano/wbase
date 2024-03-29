/*
    inspired by http://webgl2fundamentals.org/webgl/lessons/webgl-boilerplate.html
 */

export const set_rectangle_coords = _set_rectangle_coords;
export const bind_attribute = _bind_attribute;
export const loadShader = _loadShader;
export const createProgram = _createProgram;
export const createProgramFromSources = _createProgramFromSources;
export const resizeCanvasToDisplaySize = _resizeCanvasToDisplaySize;
export const draw_shapes = _draw_shapes;
export const get_program_elements = _get_program_elems;
export const isSystemLittleEndian = _isLittleEndian;

const defaultShaderType = [
    "VERTEX_SHADER",
    "FRAGMENT_SHADER",
];

/**
   * Wrapped logging function.
   * @param {string} msg The message to log.
   */
function error(msg) {
    if (window.top.console) {
        if (window.top.console.error) {
            window.top.console.error(msg);
        } else if (window.top.console.log) {
            window.top.console.log(msg);
        }
    }
}


/**
 * Error Callback
 * @callback ErrorCallback
 * @param {string} msg error message.
 */


/*
 * Loads a shader.
 */
function _loadShader(gl, shaderSource, shaderType, opt_errorCallback) {
    const errFn = opt_errorCallback || error;
    // Create the shader object
    const shader = gl.createShader(shaderType);

    // Load the shader source
    gl.shaderSource(shader, shaderSource);

    // Compile the shader
    gl.compileShader(shader);

    // Check the compile status
    const compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    if (!compiled && !gl.isContextLost()) {
        // Something went wrong during compilation; get the error
        const lastError = gl.getShaderInfoLog(shader);
        errFn("*** Error compiling shader '" + shader + "':" + lastError);
        gl.deleteShader(shader);
        return null;
    }

    return shader;
}

/**
 * Creates a program, attaches shaders, binds attrib locations, links the
 * program and calls useProgram
 */
function _createProgram(
    gl, shaders, opt_attribs, opt_locations, opt_errorCallback) {
    const errFn = opt_errorCallback || error;
    const program = gl.createProgram();
    shaders.forEach(function (shader) {
        gl.attachShader(program, shader);
    });
    if (opt_attribs) {
        opt_attribs.forEach(function (attrib, ndx) {
            gl.bindAttribLocation(
                program,
                opt_locations ? opt_locations[ndx] : ndx,
                attrib);
        });
    }
    gl.linkProgram(program);

    // Check the link status
    const linked = gl.getProgramParameter(program, gl.LINK_STATUS);
    if (!linked && !gl.isContextLost()) {
        // something went wrong with the link
        const lastError = gl.getProgramInfoLog(program);
        errFn("Error in program linking:" + lastError);

        gl.deleteProgram(program);
        return null;
    }
    return program;
}

/**
   * Creates a program from 2 sources.
   */
function _createProgramFromSources(
    gl, shaderSources, opt_attribs, opt_locations, opt_errorCallback) {
    const shaders = [];
    for (let ii = 0; ii < shaderSources.length; ++ii) {
        shaders.push(loadShader(
            gl, shaderSources[ii], gl[defaultShaderType[ii]], opt_errorCallback));
    }
    return {
        shaders,
        program: createProgram(gl, shaders, opt_attribs, opt_locations, opt_errorCallback)
    };
}

/**
 * Resize a canvas to match the size its displayed.
 */
function _resizeCanvasToDisplaySize(canvas, multiplier) {
    multiplier = multiplier || 1;
    const width = canvas.clientWidth * multiplier | 0;
    const height = canvas.clientHeight * multiplier | 0;
    if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        return true;
    }
    return false;
}

function _set_rectangle_coords(gl, x, y, width, height) {
    var x1 = x;
    var x2 = x + width;
    var y1 = y;
    var y2 = y + height;
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
        x1, y1,
        x2, y1,
        x1, y2,
        x1, y2,
        x2, y1,
        x2, y2,
    ]), gl.STATIC_DRAW);
}

function _bind_attribute(gl, buffer, attribute, numComponents, normalize, type) {
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.enableVertexAttribArray(attribute);
    gl.vertexAttribPointer(attribute, numComponents, type || gl.FLOAT, normalize || false, 0, 0);
}

function _draw_shapes(gl, primitive_type, _offset, _count) {
    // Draw the shape
    var primitiveType = _if_is_def(primitive_type) || gl.TRIANGLES;
    var offset = _if_is_def(_offset) || 0;
    var count = _if_is_def(_count) || 6;
    gl.drawArrays(primitiveType, offset, count);
}

function _get_program_elems(gl, p_obj) {
    const program = p_obj.program;
    p_obj.attributes = {};
    p_obj.uniforms = {};

    const numAttributes = gl.getProgramParameter(program, gl.ACTIVE_ATTRIBUTES);
    let p = p_obj.attributes;
    for (let i = 0; i < numAttributes; i++) {
        const attribute = gl.getActiveAttrib(program, i);
        p[attribute.name] = {
            loc: gl.getAttribLocation(program, attribute.name),
            def: attribute
        };
    }
    const numUniforms = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
    p = p_obj.uniforms;
    for (let i = 0; i < numUniforms; i++) {
        const uniform = gl.getActiveUniform(program, i);
        p[uniform.name] = {
            loc: gl.getUniformLocation(program, uniform.name),
            def: uniform
        };
    }
    return p_obj;
}

function _if_is_def(o) {
    return (o !== undefined && o !== null) ? o : null;
}

function _isLittleEndian() {
    let uInt32 = new Uint32Array([0x11223344]);
    let uInt8 = new Uint8Array(uInt32.buffer);

    if (uInt8[0] === 0x44) {
        return true;
    } else if (uInt8[0] === 0x11) {
        return false;
    } else {
        return false;
    }
};