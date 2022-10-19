"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateskills_assessment"]("main",{

/***/ "./src/components/ErrorMessage/ErrorMessage.jsx":
/*!******************************************************!*\
  !*** ./src/components/ErrorMessage/ErrorMessage.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.module.scss */ \"./src/components/ErrorMessage/style.module.scss\");\n\n\nvar GeneralApiMessage = \"This field is required.\";\n\nvar ErrorMessage = function ErrorMessage(_ref) {\n  var children = _ref.children;\n  var content = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {\n    return typeof children === \"string\" ? children : GeneralApiMessage;\n  }, [children]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _style_module_scss__WEBPACK_IMPORTED_MODULE_1__[\"default\"].error_message_wrapper\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      marginRight: 10,\n      width: \"100%\",\n      color: \"#FE4602\",\n      fontWeight: 500,\n      margin: \"1rem 0\"\n    }\n  }), content);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorMessage);\n\n//# sourceURL=webpack://skills-assessment/./src/components/ErrorMessage/ErrorMessage.jsx?");

/***/ }),

/***/ "./src/components/ErrorMessage/index.js":
/*!**********************************************!*\
  !*** ./src/components/ErrorMessage/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ErrorMessage\": () => (/* reexport safe */ _ErrorMessage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ErrorMessage */ \"./src/components/ErrorMessage/ErrorMessage.jsx\");\n\n\n//# sourceURL=webpack://skills-assessment/./src/components/ErrorMessage/index.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3ba204644caf1b5dc0b2")
/******/ })();
/******/ 
/******/ }
);