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

/***/ "./src/hooks/index.js":
/*!****************************!*\
  !*** ./src/hooks/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"usePasswordValidation\": () => (/* reexport safe */ _usePasswordValidation__WEBPACK_IMPORTED_MODULE_0__.usePasswordValidation)\n/* harmony export */ });\n/* harmony import */ var _usePasswordValidation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./usePasswordValidation */ \"./src/hooks/usePasswordValidation.js\");\n\n\n//# sourceURL=webpack://skills-assessment/./src/hooks/index.js?");

/***/ }),

/***/ "./src/hooks/usePasswordValidation.js":
/*!********************************************!*\
  !*** ./src/hooks/usePasswordValidation.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"usePasswordValidation\": () => (/* binding */ usePasswordValidation)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\nvar usePasswordValidation = function usePasswordValidation(_ref) {\n  var _ref$firstPassword = _ref.firstPassword,\n      firstPassword = _ref$firstPassword === void 0 ? \"\" : _ref$firstPassword,\n      _ref$secondPassword = _ref.secondPassword,\n      secondPassword = _ref$secondPassword === void 0 ? \"\" : _ref$secondPassword,\n      _ref$minLength = _ref.minLength,\n      minLength = _ref$minLength === void 0 ? 8 : _ref$minLength,\n      _ref$numberValidation = _ref.numberValidation,\n      numberValidation = _ref$numberValidation === void 0 ? true : _ref$numberValidation,\n      _ref$lowercaseValidat = _ref.lowercaseValidation,\n      lowercaseValidation = _ref$lowercaseValidat === void 0 ? true : _ref$lowercaseValidat,\n      _ref$uppercaseValidat = _ref.uppercaseValidation,\n      uppercaseValidation = _ref$uppercaseValidat === void 0 ? true : _ref$uppercaseValidat,\n      _ref$lengthValidation = _ref.lengthValidation,\n      lengthValidation = _ref$lengthValidation === void 0 ? true : _ref$lengthValidation;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),\n      _useState2 = _slicedToArray(_useState, 2),\n      validLength = _useState2[0],\n      setValidLength = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),\n      _useState4 = _slicedToArray(_useState3, 2),\n      hasNumber = _useState4[0],\n      setHasNumber = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),\n      _useState6 = _slicedToArray(_useState5, 2),\n      upperCase = _useState6[0],\n      setUpperCase = _useState6[1];\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),\n      _useState8 = _slicedToArray(_useState7, 2),\n      lowerCase = _useState8[0],\n      setLowerCase = _useState8[1];\n\n  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),\n      _useState10 = _slicedToArray(_useState9, 2),\n      match = _useState10[0],\n      setMatch = _useState10[1]; // const checkUpperCase = React.useMemo((password) => {\n  //     const upperCaseRegex = /[A-Z]/;\n  //     return upperCaseRegex.test(password);\n  // }, [password]);\n\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    setValidLength(firstPassword.length >= minLength ? true : false);\n    setUpperCase(firstPassword.toLowerCase() !== firstPassword);\n    setLowerCase(firstPassword.toUpperCase() !== firstPassword);\n    setHasNumber(/\\d/.test(firstPassword));\n    setMatch(firstPassword && firstPassword === secondPassword);\n  }, [firstPassword, secondPassword, validLength, lengthValidation, uppercaseValidation, lowercaseValidation, numberValidation]);\n  return [validLength, hasNumber, upperCase, lowerCase, match];\n};\n\n//# sourceURL=webpack://skills-assessment/./src/hooks/usePasswordValidation.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("780a9f5915a2fd3f8509")
/******/ })();
/******/ 
/******/ }
);