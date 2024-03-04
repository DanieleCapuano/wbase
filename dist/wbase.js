!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.wbase=r():e.wbase=r()}(self,(()=>(()=>{"use strict";var __webpack_modules__={880:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$C:()=>get_program_data,ax:()=>init_program,fh:()=>init_program_fbos});var _vertex_common__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(961),_uniforms_common__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(286),_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(853),_texture_common__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(370);const init_program=_init_program,init_program_fbos=_init_program_fbos,get_program_data=_get_program_data;function _init_program(e,r){let t={};try{let _=[r.vertex_shader,r.fragment_shader].map((e=>_decorate_source(e)));if(r.build_program)t=r.build_program(e,shaders);else{let o=(0,_utils__WEBPACK_IMPORTED_MODULE_1__.jr)(e,_),n=o.program,a=o.shaders;t=_init_program_fbos(Object.assign({program:n,shaders:a},_get_program_data(e,n)),e,r)}}catch(e){console.warn("PROGRAM ERROR FOR CURRENT PROGRAM"),console.warn(e)}return r.add_program_configuration&&(t=r.add_program_configuration(t,e,r)),t}function _get_program_data(e,r){return{vertex_data:(0,_vertex_common__WEBPACK_IMPORTED_MODULE_2__.D)(e,r),uniforms:(0,_uniforms_common__WEBPACK_IMPORTED_MODULE_3__.r)(e,r),start_time:performance.now()}}function _init_program_fbos(e,r,t){const{canvas:_,framebuffers_n:o,framebuffers_offset:n}=t;let a=o||1,i=n||1;return e.has_framebuffer=t.has_framebuffer,t.dont_create_base_texture||(e.base_texture=e.base_texture||_texture_common__WEBPACK_IMPORTED_MODULE_0__.K.init_texture(r,0)),e.fbo_data=_texture_common__WEBPACK_IMPORTED_MODULE_0__.K.create_fbo_textures(e,r,a,i,_.clientWidth,_.clientHeight),e}function _decorate_source(source){return eval("`"+source+"`")}},370:(e,r,t)=>{t.d(r,{K:()=>_});const _=function(){return{init_texture:e,draw_into_texture:r,create_fbo_textures:function(t,_,o,n,a,i){let u=[];for(var f=n=n||0;f<o+n;++f){var c=e(_,0);r(_,c,0,null,a,i);var s=_.createFramebuffer();_.bindFramebuffer(_.FRAMEBUFFER,s);var b=_.COLOR_ATTACHMENT0;_.framebufferTexture2D(_.FRAMEBUFFER,b,_.TEXTURE_2D,c,0),u[f]={fbo:s,texture:c}}return _.bindFramebuffer(_.FRAMEBUFFER,null),u},set_framebuffer:function(e,r,t,_){e.bindFramebuffer(e.FRAMEBUFFER,r),e.viewport(0,0,t,_)},get_fbo_texture:function(e,r){return(((e||{}).fbo_data||[])[r]||{}).texture},get_fbo:function(e,r){return(((e||{}).fbo_data||[])[r]||{}).fbo}};function e(e,r){e.activeTexture(e.TEXTURE0+(r||0));var t=e.createTexture();return e.bindTexture(e.TEXTURE_2D,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),t}function r(e,r,t,_,o,n){e.activeTexture(e.TEXTURE0+(t||0)),e.bindTexture(e.TEXTURE_2D,r);var a=e.RGBA,i=e.RGBA,u=e.UNSIGNED_BYTE,f=_,c=f?[e.TEXTURE_2D,0,a,i,u,f]:[e.TEXTURE_2D,0,a,o,n,0,i,u,f];try{e.texImage2D.apply(e,c)}catch(e){console.warn("Error loading image",_)}}}()},286:(e,r,t)=>{t.d(r,{r:()=>o});var _=t(853);function o(e,r){let t=(0,_.Vh)(e,{program:r});return Object.keys(t.uniforms).reduce(((e,r)=>(e[r]={get:()=>t.uniforms[r].loc,set:o.bind(null,t.uniforms[r])},e)),{});function o(e,r,t,_,o){r["uniform"+_].apply(r,[].concat(e.loc,o))}}},853:(e,r,t)=>{t.d(r,{B0:()=>n,HO:()=>a,Lo:()=>u,VU:()=>s,Vh:()=>c,c0:()=>_,jr:()=>i,kQ:()=>o,uX:()=>f});const _=function(e,r,t,_,o){var n=r,a=r+_,i=t,u=t+o;e.bufferData(e.ARRAY_BUFFER,new Float32Array([n,i,a,i,n,u,n,u,a,i,a,u]),e.STATIC_DRAW)},o=function(e,r,t,_,o,n){e.bindBuffer(e.ARRAY_BUFFER,r),e.enableVertexAttribArray(t),e.vertexAttribPointer(t,_,n||e.FLOAT,o||!1,0,0)},n=function(e,r,t,_){const o=_||E,n=e.createShader(t);return e.shaderSource(n,r),e.compileShader(n),e.getShaderParameter(n,e.COMPILE_STATUS)||e.isContextLost()?n:(o("*** Error compiling shader '"+n+"':"+e.getShaderInfoLog(n)),e.deleteShader(n),null)},a=function(e,r,t,_,o){const n=o||E,a=e.createProgram();return r.forEach((function(r){e.attachShader(a,r)})),t&&t.forEach((function(r,t){e.bindAttribLocation(a,_?_[t]:t,r)})),e.linkProgram(a),e.getProgramParameter(a,e.LINK_STATUS)||e.isContextLost()?a:(n("Error in program linking:"+e.getProgramInfoLog(a)),e.deleteProgram(a),null)},i=function(e,r,t,_,o){const i=[];for(let t=0;t<r.length;++t)i.push(n(e,r[t],e[b[t]],o));return{shaders:i,program:a(e,i,t,_,o)}},u=function(e,r){r=r||1;const t=e.clientWidth*r|0,_=e.clientHeight*r|0;return(e.width!==t||e.height!==_)&&(e.width=t,e.height=_,!0)},f=function(e,r,t,_){var o=l(r)||e.TRIANGLES,n=l(t)||0,a=l(_)||6;e.drawArrays(o,n,a)},c=function(e,r){const t=r.program;r.attributes={},r.uniforms={};const _=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);let o=r.attributes;for(let r=0;r<_;r++){const _=e.getActiveAttrib(t,r);o[_.name]={loc:e.getAttribLocation(t,_.name),def:_}}const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);o=r.uniforms;for(let r=0;r<n;r++){const _=e.getActiveUniform(t,r);o[_.name]={loc:e.getUniformLocation(t,_.name),def:_}}return r},s=function(){let e=new Uint32Array([287454020]),r=new Uint8Array(e.buffer);return 68===r[0]||(r[0],!1)},b=["VERTEX_SHADER","FRAGMENT_SHADER"];function E(e){window.top.console&&(window.top.console.error?window.top.console.error(e):window.top.console.log&&window.top.console.log(e))}function l(e){return null!=e?e:null}},961:(e,r,t)=>{t.d(r,{D:()=>o});var _=t(853);const o=function(e,r){let t={};return t.vao=e.createVertexArray(),e.bindVertexArray(t.vao),t.positionAttributeLocation=e.getAttribLocation(r,"a_position"),t.texCoodAttributeLocation=e.getAttribLocation(r,"a_texCoord"),t.pos_buffer=e.createBuffer(),t.coord_buffer=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,t.pos_buffer),(0,_.c0)(e,0,0,e.canvas.clientWidth,e.canvas.clientHeight),(0,_.kQ)(e,t.pos_buffer,t.positionAttributeLocation,2),e.bindBuffer(e.ARRAY_BUFFER,t.coord_buffer),(0,_.c0)(e,0,0,1,1),(0,_.kQ)(e,t.coord_buffer,t.texCoodAttributeLocation,2,!0),e.bindVertexArray(null),t}}},__webpack_module_cache__={};function __webpack_require__(e){var r=__webpack_module_cache__[e];if(void 0!==r)return r.exports;var t=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](t,t.exports,__webpack_require__),t.exports}__webpack_require__.d=(e,r)=>{for(var t in r)__webpack_require__.o(r,t)&&!__webpack_require__.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},__webpack_require__.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var __webpack_exports__={};return(()=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{bind_attribute:()=>_.kQ,buffer_data:()=>p,createProgram:()=>_.HO,createProgramFromSources:()=>_.jr,create_program:()=>b,default:()=>A,draw_shapes:()=>_.uX,fill_position_buffer:()=>d,generate_attributes_from_config:()=>l,get_program_data:()=>e.$C,get_program_elements:()=>_.Vh,get_program_uniforms:()=>t.r,get_ubo:()=>n,get_uniforms_in_ubo:()=>a,init_program:()=>e.ax,init_program_fbos:()=>e.fh,init_vao:()=>E,init_vertex_data:()=>o.D,isSystemLittleEndian:()=>_.VU,loadShader:()=>_.B0,resizeCanvasToDisplaySize:()=>_.Lo,set_rectangle_coords:()=>_.c0,set_uniforms:()=>g,set_unique_ubo_in_program:()=>i,setup_indices:()=>m,texture_data:()=>r.K,update_ubo_buffer:()=>u});var e=__webpack_require__(880),r=__webpack_require__(370),t=__webpack_require__(286),_=__webpack_require__(853),o=__webpack_require__(961);const n=function(e,r,t,_){const o=e.getUniformBlockIndex(r,t),n=e.getActiveUniformBlockParameter(r,o,e.UNIFORM_BLOCK_DATA_SIZE),a=e.createBuffer();e.bindBuffer(e.UNIFORM_BUFFER,a),e.bufferData(e.UNIFORM_BUFFER,n,e.DYNAMIC_DRAW);const u={uboIndex:o,uboBuffer:a,blockSize:n,uboUniqueBind:_};return void 0!==_&&(e.bindBufferBase(e.UNIFORM_BUFFER,_,a),i(e,r,u)),e.bindBuffer(e.UNIFORM_BUFFER,null),u},a=function(e,r,t){const{uboIndex:_,uboBuffer:o,uboUniqueBind:n,ubo_variable_names:a}=t,i=e.getUniformIndices(r,a),u=e.getActiveUniforms(r,i,e.UNIFORM_TYPE),f=e.getActiveUniforms(r,i,e.UNIFORM_OFFSET),c=e.getActiveUniforms(r,i,e.UNIFORM_SIZE),s=e.getActiveUniforms(r,i,e.UNIFORM_ARRAY_STRIDE);return Object.assign(t,{ubo_variable_info:a.reduce(((e,r,t)=>Object.assign(e,{[r]:{index:i[t],type:u[t],size:c[t],offset:f[t],stride:s[t]}})),{})})},i=function(e,r,t){const{uboIndex:_,uboUniqueBind:o}=t;e.uniformBlockBinding(r,_,o)},u=function(e,r,t,_){const{uboBuffer:o,ubo_variable_info:n,blockSize:a}=r;e.bindBuffer(e.UNIFORM_BUFFER,o);const i=function(e,r,t,_,o){const n=new ArrayBuffer(r),a=new DataView(n),i=Object.keys(t);for(let r=0;r<i.length;r++){const n=i[r],u=t[n],b=o[n].opts,E=_[n],l=E.buffer||Array.isArray(E)?E:[E],d=c[b.fn],m=u.type===e.FLOAT_VEC2||u.type===e.INT_VEC2?2:u.type===e.FLOAT_VEC3||u.type===e.INT_VEC3?3:1,p=s[b.fn];if(0===u.stride)for(let e=0;e<l.length;e++){const r=u.offset+e*d;a[p](r,l[e],f)}else{let e=0;for(let r=0;r<l.length;r+=m){const t=u.offset+e*u.stride;for(let e=0;e<m;e++)a[p](t+d*e,l[r+e],f);e++}}}return a}(e,a,n,t,_);e.bufferSubData(e.UNIFORM_BUFFER,0,i,0,i.length),e.bindBuffer(e.UNIFORM_BUFFER,null)},f=(0,_.VU)(),c={"1i":Int16Array.BYTES_PER_ELEMENT,"1iv":Int16Array.BYTES_PER_ELEMENT,"2iv":Int16Array.BYTES_PER_ELEMENT,"3iv":Int16Array.BYTES_PER_ELEMENT,"1f":Float32Array.BYTES_PER_ELEMENT,"1fv":Float32Array.BYTES_PER_ELEMENT,"2fv":Float32Array.BYTES_PER_ELEMENT,"3fv":Float32Array.BYTES_PER_ELEMENT,Matrix2fv:Float32Array.BYTES_PER_ELEMENT,Matrix3fv:Float32Array.BYTES_PER_ELEMENT,Matrix4fv:Float32Array.BYTES_PER_ELEMENT},s={"1i":"setInt16","1iv":"setInt16","2iv":"setInt16","3iv":"setInt16","1f":"setFloat32","1fv":"setFloat32","2fv":"setFloat32","3fv":"setFloat32",Matrix2fv:"setFloat32",Matrix3fv:"setFloat32",Matrix4fv:"setFloat32"},b=function(e,r,t){let o=(0,_.B0)(e,r,e.VERTEX_SHADER),n=(0,_.B0)(e,t,e.FRAGMENT_SHADER);return(0,_.HO)(e,[o,n])},E=function(e,r){const{program:t,attributes:_,uniforms:o}=r,i=r.vao||e.createVertexArray();e.useProgram(t),e.bindVertexArray(i);const u=e.createBuffer(),f=e.ARRAY_BUFFER;return e.bindBuffer(f,u),Object.keys(_).forEach((o=>{let n=_[o],a=e.getAttribLocation(t,n.name);e.vertexAttribPointer.apply(e,[a].concat(n.opts)),e.enableVertexAttribArray(a),Object.assign(r.attributes[n.name],{location:a,buffer:u,buffer_bind:f},{is_position:n.is_position})})),Object.keys(o).forEach((_=>{r.uniforms[_].ubo||Object.assign(r.uniforms[_],{location:e.getUniformLocation(t,_)})})),r=function(e,r){const{program:t,uniforms:_,program_index:o}=r,i=Object.keys(Object.keys(_).reduce(((e,r)=>Object.assign(e,_[r].ubo?{[_[r].ubo]:!0}:{})),{})).length;let u=0;const f=Object.keys(_).reduce(((r,a)=>{if(_[a].ubo){const f=_[a].ubo;if(r[f])r[f].ubo_variable_names.push(a);else{let _=n(e,t,f,u+i*o);_.ubo_variable_names=[a],r[f]=_,u++}}return r}),{});return Object.keys(f).forEach((_=>{r.ubos=r.ubos||{},r.ubos[_]=a(e,t,f[_])})),r}(e,r),e.bindVertexArray(null),e.bindBuffer(f,null),e.useProgram(null),{vao:i}},l=function(e,r,t,_){return Object.assign(r,t,{attributes:Object.keys(t.attributes).reduce(((r,o)=>{let n=t.attributes[o],a=n.opts;return n.opts=[a.size||_||3,e[a.data_type],a.normalized,a.stride,a.offset],Object.assign(r,{[o]:n})}),{})})},d=function(e,r,t){const{attributes:_}=r;return Object.keys(_).filter((e=>_[e].is_position)).forEach((_=>{R(e,{[_]:t},r)})),r},m=function(e,r){const t=e.createBuffer();e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t);const _=r;return e.bufferData(e.ELEMENT_ARRAY_BUFFER,new Uint16Array(_),e.STATIC_DRAW),t},p=R,g=function(e,r,t){const{program_info:_}=t,{ubos:o,uniforms:n}=_;let a=[];Object.keys(r).forEach((t=>{if(-1!==a.indexOf(t))return;let i=!1;if(Object.keys(o||{}).forEach((_=>{-1!==o[_].ubo_variable_names.indexOf(t)&&(u(e,o[_],r,n),i=!0,a=a.concat(o[_].ubo_variable_names))})),!i){const o=_.uniforms[t],{opts:n,location:a}=o;if(null===a)return;let i=r[t],u=-1===n.fn.indexOf("Matrix")?[a,i]:[a,!1,i];e["uniform"+n.fn].apply(e,u)}}))};function R(e,r,t){e.bindVertexArray(t.vao),Object.keys(r).forEach((_=>{const{buffer:o,buffer_bind:n}=t.attributes[_],a=r[_];e.bindBuffer(n,o),e.bufferData(n,a,e.STATIC_DRAW,0),e.bindBuffer(n,null)})),e.bindVertexArray(null)}const A={init_program:e.ax,init_program_fbos:e.fh,get_program_data:e.$C,texture_data:r.K,get_program_uniforms:t.r,set_rectangle_coords:_.c0,bind_attribute:_.kQ,loadShader:_.B0,createProgram:_.HO,createProgramFromSources:_.jr,resizeCanvasToDisplaySize:_.Lo,draw_shapes:_.uX,get_program_elements:_.Vh,isSystemLittleEndian:_.VU,init_vertex_data:o.D,create_program:b,init_vao:E,generate_attributes_from_config:l,fill_position_buffer:d,setup_indices:m,buffer_data:p,set_uniforms:g,get_ubo:n,get_uniforms_in_ubo:a,set_unique_ubo_in_program:i,update_ubo_buffer:u}})(),__webpack_exports__})()));