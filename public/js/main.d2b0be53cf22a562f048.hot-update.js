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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ErrorMessage\": () => (/* binding */ ErrorMessage)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.module.scss */ \"./src/components/ErrorMessage/style.module.scss\");\n\n\nvar GeneralApiMessage = \"This field is required.\";\nvar ErrorMessage = function ErrorMessage(_ref) {\n  var children = _ref.children;\n  var content = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {\n    return typeof children === \"string\" ? children : GeneralApiMessage;\n  }, [children]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _style_module_scss__WEBPACK_IMPORTED_MODULE_1__[\"default\"].error_message_wrapper\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      width: \"100%\",\n      color: \"#C10C0A\",\n      fontWeight: 500 // margin: \"1rem 0\",\n\n    }\n  }), content);\n};\n\n//# sourceURL=webpack://skills-assessment/./src/components/ErrorMessage/ErrorMessage.jsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("fdc54b31e46c7cf02923")
/******/ })();
/******/ 
/******/ }
);