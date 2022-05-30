/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modulos_mensajeAlerta__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modulos/mensajeAlerta */ \"./src/modulos/mensajeAlerta.js\");\n/* harmony import */ var _modulos_clasePersona__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modulos/clasePersona */ \"./src/modulos/clasePersona.js\");\nconsole.log('------Ejercicios de módulos en JavaScript------'); // import { mensajeAlerta,saludar } from \"./modulos/mensajeAlerta\";\n\n //import { Persona } from \"./modulos/clasePersona\";\n\n //al exportar por default puedo omitir llaves y cambiar nombre de la clase\n\n(0,_modulos_mensajeAlerta__WEBPACK_IMPORTED_MODULE_0__.mensajeAlerta)('este es el mensaje de alerta de una función importada');\nvar carlos = new _modulos_clasePersona__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('Carlos', 30);\ncarlos.mostrarInfo();\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/modulos/clasePersona.js":
/*!*************************************!*\
  !*** ./src/modulos/clasePersona.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n//export class Persona {\n//class Persona {\n//export default class Persona {      //con default sólo se puede exportar una sóla vez, una clase\nvar Persona = /*#__PURE__*/function () {\n  function Persona(nombre, edad) {\n    _classCallCheck(this, Persona);\n\n    this.nombre = nombre;\n    this.edad = edad;\n  }\n\n  _createClass(Persona, [{\n    key: \"mostrarInfo\",\n    value: function mostrarInfo() {\n      console.log(\"\".concat(this.nombre, \" tiene \").concat(this.edad, \" a\\xF1os\"));\n    }\n  }]);\n\n  return Persona;\n}(); //export { Persona };\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Persona);\n\n//# sourceURL=webpack:///./src/modulos/clasePersona.js?");

/***/ }),

/***/ "./src/modulos/mensajeAlerta.js":
/*!**************************************!*\
  !*** ./src/modulos/mensajeAlerta.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mensajeAlerta\": () => (/* binding */ mensajeAlerta)\n/* harmony export */ });\n// esta es una forma de exportar una función\n// export const mensajeAlerta =(mensaje) => {\n//     alert(mensaje);\n// }\n// export const saludar =(nombre) => {\n//     console.log (`Hola ${nombre}`);\n// }\nvar mensajeAlerta = function mensajeAlerta(mensaje) {\n  alert(mensaje);\n};\n\nvar saludar = function saludar(nombre) {\n  console.log(\"Hola \".concat(nombre));\n};\n\n\n\n//# sourceURL=webpack:///./src/modulos/mensajeAlerta.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;