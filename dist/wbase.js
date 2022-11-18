/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["wbase"] = factory();
	else
		root["wbase"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"bind_attribute\": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.bind_attribute),\n/* harmony export */   \"createProgram\": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.createProgram),\n/* harmony export */   \"createProgramFromSources\": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.createProgramFromSources),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"draw_shapes\": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.draw_shapes),\n/* harmony export */   \"get_program_data\": () => (/* reexport safe */ _program_def__WEBPACK_IMPORTED_MODULE_0__.get_program_data),\n/* harmony export */   \"get_program_elements\": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.get_program_elements),\n/* harmony export */   \"get_program_uniforms\": () => (/* reexport safe */ _uniforms_common__WEBPACK_IMPORTED_MODULE_2__.get_program_uniforms),\n/* harmony export */   \"init_program\": () => (/* reexport safe */ _program_def__WEBPACK_IMPORTED_MODULE_0__.init_program),\n/* harmony export */   \"init_program_fbos\": () => (/* reexport safe */ _program_def__WEBPACK_IMPORTED_MODULE_0__.init_program_fbos),\n/* harmony export */   \"init_vertex_data\": () => (/* reexport safe */ _vertex_common__WEBPACK_IMPORTED_MODULE_4__.init_vertex_data),\n/* harmony export */   \"loadShader\": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.loadShader),\n/* harmony export */   \"resizeCanvasToDisplaySize\": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.resizeCanvasToDisplaySize),\n/* harmony export */   \"set_rectangle_coords\": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.set_rectangle_coords),\n/* harmony export */   \"texture_data\": () => (/* reexport safe */ _texture_common__WEBPACK_IMPORTED_MODULE_1__.textureData)\n/* harmony export */ });\n/* harmony import */ var _program_def__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./program-def */ \"./src/program-def.js\");\n/* harmony import */ var _texture_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./texture-common */ \"./src/texture-common.js\");\n/* harmony import */ var _uniforms_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./uniforms-common */ \"./src/uniforms-common.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n/* harmony import */ var _vertex_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vertex-common */ \"./src/vertex-common.js\");\n\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  init_program: _program_def__WEBPACK_IMPORTED_MODULE_0__.init_program,\n  init_program_fbos: _program_def__WEBPACK_IMPORTED_MODULE_0__.init_program_fbos,\n  get_program_data: _program_def__WEBPACK_IMPORTED_MODULE_0__.get_program_data,\n  texture_data: _texture_common__WEBPACK_IMPORTED_MODULE_1__.textureData,\n  get_program_uniforms: _uniforms_common__WEBPACK_IMPORTED_MODULE_2__.get_program_uniforms,\n  set_rectangle_coords: _utils__WEBPACK_IMPORTED_MODULE_3__.set_rectangle_coords,\n  bind_attribute: _utils__WEBPACK_IMPORTED_MODULE_3__.bind_attribute,\n  loadShader: _utils__WEBPACK_IMPORTED_MODULE_3__.loadShader,\n  createProgram: _utils__WEBPACK_IMPORTED_MODULE_3__.createProgram,\n  createProgramFromSources: _utils__WEBPACK_IMPORTED_MODULE_3__.createProgramFromSources,\n  resizeCanvasToDisplaySize: _utils__WEBPACK_IMPORTED_MODULE_3__.resizeCanvasToDisplaySize,\n  draw_shapes: _utils__WEBPACK_IMPORTED_MODULE_3__.draw_shapes,\n  get_program_elements: _utils__WEBPACK_IMPORTED_MODULE_3__.get_program_elements,\n  init_vertex_data: _vertex_common__WEBPACK_IMPORTED_MODULE_4__.init_vertex_data\n});\n\n//# sourceURL=webpack://wbase/./src/index.js?");

/***/ }),

/***/ "./src/program-def.js":
/*!****************************!*\
  !*** ./src/program-def.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"get_program_data\": () => (/* binding */ get_program_data),\n/* harmony export */   \"init_program\": () => (/* binding */ init_program),\n/* harmony export */   \"init_program_fbos\": () => (/* binding */ init_program_fbos)\n/* harmony export */ });\n/* harmony import */ var _vertex_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vertex-common */ \"./src/vertex-common.js\");\n/* harmony import */ var _uniforms_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uniforms-common */ \"./src/uniforms-common.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n/* harmony import */ var _texture_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./texture-common */ \"./src/texture-common.js\");\n\n\n\n\nconst init_program = _init_program;\nconst init_program_fbos = _init_program_fbos;\nconst get_program_data = _get_program_data;\nfunction _init_program(gl, opts) {\n  let p_o = {};\n  try {\n    // setup GLSL program\n    let shaders = [opts.vertex_shader, opts.fragment_shader].map(sh => _decorate_source(sh));\n    if (opts.build_program) {\n      p_o = opts.build_program(gl, shaders);\n    } else {\n      let program = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.createProgramFromSources)(gl, shaders);\n      p_o = _init_program_fbos(Object.assign({\n        program\n      }, _get_program_data(gl, program, shaders)), gl, opts);\n    }\n  } catch (e) {\n    console.warn(\"PROGRAM ERROR FOR CURRENT PROGRAM\");\n    console.warn(e);\n  }\n  if (opts.add_program_configuration) {\n    p_o = opts.add_program_configuration(p_o, gl, opts);\n  }\n  return p_o;\n}\nfunction _get_program_data(gl, program, shaders) {\n  let vertex_data = (0,_vertex_common__WEBPACK_IMPORTED_MODULE_0__.init_vertex_data)(gl, program),\n    uniforms = (0,_uniforms_common__WEBPACK_IMPORTED_MODULE_1__.get_program_uniforms)(gl, program);\n  return {\n    vertex_data,\n    uniforms,\n    shaders,\n    start_time: performance.now()\n  };\n}\nfunction _init_program_fbos(current_program, gl, opts) {\n  const {\n    canvas,\n    framebuffers_n,\n    framebuffers_offset\n  } = opts;\n  let fbo_n = framebuffers_n || 1,\n    fbo_offset = framebuffers_offset || 1;\n  current_program.has_framebuffer = opts.has_framebuffer;\n  if (!opts.dont_create_base_texture) {\n    current_program.base_texture = current_program.base_texture || _texture_common__WEBPACK_IMPORTED_MODULE_3__.textureData.init_texture(gl, 0);\n  }\n  current_program.fbo_data = _texture_common__WEBPACK_IMPORTED_MODULE_3__.textureData.create_fbo_textures(current_program, gl, fbo_n, fbo_offset, canvas.clientWidth, canvas.clientHeight);\n  return current_program;\n}\nfunction _decorate_source(source) {\n  return eval(\"`\" + source + \"`\");\n}\n\n//# sourceURL=webpack://wbase/./src/program-def.js?");

/***/ }),

/***/ "./src/texture-common.js":
/*!*******************************!*\
  !*** ./src/texture-common.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"textureData\": () => (/* binding */ textureData)\n/* harmony export */ });\nconst textureData = function () {\n  return {\n    init_texture: _init_texture,\n    draw_into_texture: _drawImageIntoTexture,\n    create_fbo_textures: _create_fbo_textures,\n    set_framebuffer: _setFramebuffer,\n    get_fbo_texture: _get_texture,\n    get_fbo: _get_fbo\n  };\n  function _get_texture(program_obj, i) {\n    return program_obj.fbo_data[i].texture;\n  }\n  function _get_fbo(program_obj, i) {\n    return program_obj.fbo_data[i].fbo;\n  }\n  function _init_texture(gl) {\n    // Create a texture.\n    var texture = gl.createTexture();\n\n    // Bind it to texture unit 0's 2D bind point\n    gl.bindTexture(gl.TEXTURE_2D, texture);\n\n    // Set the parameters so we don't need mips and so we're not filtering\n    // and we don't repeat at the edges.\n    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);\n    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);\n    // gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);\n    // gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);\n    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);\n    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);\n    return texture;\n  }\n\n  ///////////////////////////////////////\n  // GET IMAGE FROM TEXTURE\n\n  function _drawImageIntoTexture(gl, img_data, image_width, image_height) {\n    // Upload the image into the texture.\n    var mipLevel = 0; // the largest mip\n    var internalFormat = gl.RGBA; // format we want in the texture\n    var border = 0; // must be 0\n    var srcFormat = gl.RGBA; // format of data we are supplying\n    var srcType = gl.UNSIGNED_BYTE; // type of data we are supplying\n    var data = img_data; // no data = create a blank texture\n    var args = data ? [gl.TEXTURE_2D, mipLevel, internalFormat, srcFormat, srcType, data] : [gl.TEXTURE_2D, mipLevel, internalFormat, image_width, image_height, border, srcFormat, srcType, data];\n    try {\n      gl.texImage2D.apply(gl, args);\n    } catch (e) {\n      console.warn(\"Error loading image\", img_data);\n    }\n  }\n  function _create_fbo_textures(program_obj, gl, n, offset, image_width, image_height) {\n    offset = offset || 0;\n    let fbo_data = [];\n    for (var ii = offset; ii < n + offset; ++ii) {\n      var texture = _init_texture(gl);\n\n      //init with blank images\n      _drawImageIntoTexture(gl, null, image_width, image_height);\n\n      // Create a framebuffer\n      var fbo = gl.createFramebuffer();\n      gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);\n\n      // Attach a texture to it.\n      var attachmentPoint = gl.COLOR_ATTACHMENT0;\n      gl.framebufferTexture2D(gl.FRAMEBUFFER, attachmentPoint, gl.TEXTURE_2D, texture, 0);\n      fbo_data[ii] = {\n        fbo: fbo,\n        texture: texture\n      };\n    }\n    return fbo_data;\n  }\n  function _setFramebuffer(gl, fbo, width, height) {\n    // make this the framebuffer we are rendering to.\n    gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);\n\n    // Tell WebGL how to convert from clip space to pixels\n    gl.viewport(0, 0, width, height);\n  }\n}();\n\n\n//# sourceURL=webpack://wbase/./src/texture-common.js?");

/***/ }),

/***/ "./src/uniforms-common.js":
/*!********************************!*\
  !*** ./src/uniforms-common.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"get_program_uniforms\": () => (/* binding */ get_program_uniforms)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\nfunction get_program_uniforms(gl, program) {\n  let def_elems = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.get_program_elements)(gl, {\n    program: program\n  });\n  return Object.keys(def_elems.uniforms).reduce((u_data, res_name) => {\n    u_data[res_name] = {\n      get: () => def_elems.uniforms[res_name].loc,\n      set: _set_uniform.bind(null, def_elems.uniforms[res_name])\n    };\n    return u_data;\n  }, {});\n  function _set_uniform(uniform_obj, gl, program, type, data) {\n    gl['uniform' + type].apply(gl, [].concat(uniform_obj.loc, data));\n  }\n}\n\n//# sourceURL=webpack://wbase/./src/uniforms-common.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"bind_attribute\": () => (/* binding */ bind_attribute),\n/* harmony export */   \"createProgram\": () => (/* binding */ createProgram),\n/* harmony export */   \"createProgramFromSources\": () => (/* binding */ createProgramFromSources),\n/* harmony export */   \"draw_shapes\": () => (/* binding */ draw_shapes),\n/* harmony export */   \"get_program_elements\": () => (/* binding */ get_program_elements),\n/* harmony export */   \"loadShader\": () => (/* binding */ loadShader),\n/* harmony export */   \"resizeCanvasToDisplaySize\": () => (/* binding */ resizeCanvasToDisplaySize),\n/* harmony export */   \"set_rectangle_coords\": () => (/* binding */ set_rectangle_coords)\n/* harmony export */ });\n/*\r\n    inspired by http://webgl2fundamentals.org/webgl/lessons/webgl-boilerplate.html\r\n */\n\nconst set_rectangle_coords = _set_rectangle_coords;\nconst bind_attribute = _bind_attribute;\nconst loadShader = _loadShader;\nconst createProgram = _createProgram;\nconst createProgramFromSources = _createProgramFromSources;\nconst resizeCanvasToDisplaySize = _resizeCanvasToDisplaySize;\nconst draw_shapes = _draw_shapes;\nconst get_program_elements = _get_program_elems;\nconst defaultShaderType = [\"VERTEX_SHADER\", \"FRAGMENT_SHADER\"];\n\n/**\r\n   * Wrapped logging function.\r\n   * @param {string} msg The message to log.\r\n   */\nfunction error(msg) {\n  if (window.top.console) {\n    if (window.top.console.error) {\n      window.top.console.error(msg);\n    } else if (window.top.console.log) {\n      window.top.console.log(msg);\n    }\n  }\n}\n\n/**\r\n * Error Callback\r\n * @callback ErrorCallback\r\n * @param {string} msg error message.\r\n */\n\n/*\r\n * Loads a shader.\r\n */\nfunction _loadShader(gl, shaderSource, shaderType, opt_errorCallback) {\n  const errFn = opt_errorCallback || error;\n  // Create the shader object\n  const shader = gl.createShader(shaderType);\n\n  // Load the shader source\n  gl.shaderSource(shader, shaderSource);\n\n  // Compile the shader\n  gl.compileShader(shader);\n\n  // Check the compile status\n  const compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);\n  if (!compiled) {\n    // Something went wrong during compilation; get the error\n    const lastError = gl.getShaderInfoLog(shader);\n    errFn(\"*** Error compiling shader '\" + shader + \"':\" + lastError);\n    gl.deleteShader(shader);\n    return null;\n  }\n  return shader;\n}\n\n/**\r\n * Creates a program, attaches shaders, binds attrib locations, links the\r\n * program and calls useProgram\r\n */\nfunction _createProgram(gl, shaders, opt_attribs, opt_locations, opt_errorCallback) {\n  const errFn = opt_errorCallback || error;\n  const program = gl.createProgram();\n  shaders.forEach(function (shader) {\n    gl.attachShader(program, shader);\n  });\n  if (opt_attribs) {\n    opt_attribs.forEach(function (attrib, ndx) {\n      gl.bindAttribLocation(program, opt_locations ? opt_locations[ndx] : ndx, attrib);\n    });\n  }\n  gl.linkProgram(program);\n\n  // Check the link status\n  const linked = gl.getProgramParameter(program, gl.LINK_STATUS);\n  if (!linked) {\n    // something went wrong with the link\n    const lastError = gl.getProgramInfoLog(program);\n    errFn(\"Error in program linking:\" + lastError);\n    gl.deleteProgram(program);\n    return null;\n  }\n  return program;\n}\n\n/**\r\n   * Creates a program from 2 sources.\r\n   */\nfunction _createProgramFromSources(gl, shaderSources, opt_attribs, opt_locations, opt_errorCallback) {\n  const shaders = [];\n  for (let ii = 0; ii < shaderSources.length; ++ii) {\n    shaders.push(loadShader(gl, shaderSources[ii], gl[defaultShaderType[ii]], opt_errorCallback));\n  }\n  return createProgram(gl, shaders, opt_attribs, opt_locations, opt_errorCallback);\n}\n\n/**\r\n * Resize a canvas to match the size its displayed.\r\n */\nfunction _resizeCanvasToDisplaySize(canvas, multiplier) {\n  multiplier = multiplier || 1;\n  const width = canvas.clientWidth * multiplier | 0;\n  const height = canvas.clientHeight * multiplier | 0;\n  if (canvas.width !== width || canvas.height !== height) {\n    canvas.width = width;\n    canvas.height = height;\n    return true;\n  }\n  return false;\n}\nfunction _set_rectangle_coords(gl, x, y, width, height) {\n  var x1 = x;\n  var x2 = x + width;\n  var y1 = y;\n  var y2 = y + height;\n  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([x1, y1, x2, y1, x1, y2, x1, y2, x2, y1, x2, y2]), gl.STATIC_DRAW);\n}\nfunction _bind_attribute(gl, buffer, attribute, numComponents, normalize, type) {\n  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);\n  gl.enableVertexAttribArray(attribute);\n  gl.vertexAttribPointer(attribute, numComponents, type || gl.FLOAT, normalize || false, 0, 0);\n}\nfunction _draw_shapes(gl, primitive_type, _offset, _count) {\n  // Draw the shape\n  var primitiveType = _if_is_def(primitive_type) || gl.TRIANGLES;\n  var offset = _if_is_def(_offset) || 0;\n  var count = _if_is_def(_count) || 6;\n  gl.drawArrays(primitiveType, offset, count);\n}\nfunction _get_program_elems(gl, p_obj) {\n  const program = p_obj.program;\n  p_obj.attributes = {};\n  p_obj.uniforms = {};\n  const numAttributes = gl.getProgramParameter(program, gl.ACTIVE_ATTRIBUTES);\n  let p = p_obj.attributes;\n  for (let i = 0; i < numAttributes; i++) {\n    const attribute = gl.getActiveAttrib(program, i);\n    p[attribute.name] = {\n      loc: gl.getAttribLocation(program, attribute.name),\n      def: attribute\n    };\n  }\n  const numUniforms = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);\n  p = p_obj.uniforms;\n  for (let i = 0; i < numUniforms; i++) {\n    const uniform = gl.getActiveUniform(program, i);\n    p[uniform.name] = {\n      loc: gl.getUniformLocation(program, uniform.name),\n      def: uniform\n    };\n  }\n  return p_obj;\n}\nfunction _if_is_def(o) {\n  return o !== undefined && o !== null ? o : null;\n}\n\n//# sourceURL=webpack://wbase/./src/utils.js?");

/***/ }),

/***/ "./src/vertex-common.js":
/*!******************************!*\
  !*** ./src/vertex-common.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"init_vertex_data\": () => (/* binding */ init_vertex_data)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\nconst init_vertex_data = _init_vertex_data;\n\n//////////////////////////////////////////////////////////////\n//////////////////////////////////////////////////////////////\n//////////////////////////////////////////////////////////////\n\nfunction _init_vertex_data(gl, program) {\n  let vertex_data = {};\n  vertex_data.vao = gl.createVertexArray();\n  gl.bindVertexArray(vertex_data.vao);\n\n  // look up where the vertex data needs to go.\n  vertex_data.positionAttributeLocation = gl.getAttribLocation(program, \"a_position\");\n  vertex_data.texCoodAttributeLocation = gl.getAttribLocation(program, \"a_texCoord\");\n  vertex_data.pos_buffer = gl.createBuffer();\n  vertex_data.coord_buffer = gl.createBuffer();\n\n  //bind buffers and write coordinates into them\n\n  ////////////////////////\n  //positions\n  gl.bindBuffer(gl.ARRAY_BUFFER, vertex_data.pos_buffer);\n  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.set_rectangle_coords)(gl, 0, 0, gl.canvas.clientWidth, gl.canvas.clientHeight);\n  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.bind_attribute)(gl, vertex_data.pos_buffer, vertex_data.positionAttributeLocation, 2);\n\n  ////////////////////////\n  //texture mapping coordinates\n  gl.bindBuffer(gl.ARRAY_BUFFER, vertex_data.coord_buffer);\n  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.set_rectangle_coords)(gl, 0, 0, 1, 1);\n  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.bind_attribute)(gl, vertex_data.coord_buffer, vertex_data.texCoodAttributeLocation, 2, true);\n  gl.bindVertexArray(null);\n  return vertex_data;\n}\n\n//# sourceURL=webpack://wbase/./src/vertex-common.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});