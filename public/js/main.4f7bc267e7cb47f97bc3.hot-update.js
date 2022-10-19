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

/***/ "./src/components/TextField/TextField.js":
/*!***********************************************!*\
  !*** ./src/components/TextField/TextField.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ErrorMessage */ \"./src/components/ErrorMessage/index.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\nvar TextField = function TextField(_ref) {\n  var _ref$onChange = _ref.onChange,\n      onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,\n      _ref$onBlur = _ref.onBlur,\n      _onBlur = _ref$onBlur === void 0 ? function () {} : _ref$onBlur,\n      type = _ref.type,\n      name = _ref.name,\n      defaultValue = _ref.defaultValue,\n      required = _ref.required,\n      value = _ref.value,\n      className = _ref.className,\n      errorMessage = _ref.errorMessage;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultValue || value),\n      _useState2 = _slicedToArray(_useState, 2),\n      inputValue = _useState2[0],\n      setInputValue = _useState2[1];\n\n  var onInputChange = function onInputChange(_ref2) {\n    var target = _ref2.target;\n    var name = target.name,\n        value = target.value;\n    setInputValue(value);\n    onChange(name, value);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: style.input_container\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", null, !errorMessage ? label : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null, errorMessage)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: style.input_wrapper\n  }, icon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: style.input_icon_wrapper\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    alt: \"field-type-indicator\",\n    draggable: false,\n    src: icon\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: type,\n    name: name,\n    required: required,\n    defaultValue: defaultValue,\n    className: \"\".concat(style.input_field, \" \").concat(className || \"\"),\n    onChange: onInputChange,\n    onBlur: function onBlur(_ref3) {\n      var target = _ref3.target;\n      return _onBlur(target.name, target.value);\n    },\n    value: value\n  })));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextField);\n\n//# sourceURL=webpack://skills-assessment/./src/components/TextField/TextField.js?");

/***/ }),

/***/ "./src/components/TextField/index.js":
/*!*******************************************!*\
  !*** ./src/components/TextField/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _TextField__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _TextField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextField */ \"./src/components/TextField/TextField.js\");\n\n\n//# sourceURL=webpack://skills-assessment/./src/components/TextField/index.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("7c799b7be50518e14086")
/******/ })();
/******/ 
/******/ }
);