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

/***/ "./src/components/EmployeeForm/EmployeeForm.jsx":
/*!******************************************************!*\
  !*** ./src/components/EmployeeForm/EmployeeForm.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"EmployeeForm\": () => (/* binding */ EmployeeForm)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .. */ \"./src/components/index.js\");\n/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../icon */ \"./src/icon.js\");\n/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.module.scss */ \"./src/components/EmployeeForm/style.module.scss\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\nvar EmployeeForm = function EmployeeForm(_ref) {\n  var firstName = _ref.firstName,\n      lastName = _ref.lastName;\n  var defaultValues = {\n    first_name: \"\",\n    last_name: \"\",\n    password: \"\",\n    confirmPassword: \"\"\n  };\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultValues),\n      _useState2 = _slicedToArray(_useState, 2),\n      values = _useState2[0],\n      setValues = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      _useState4 = _slicedToArray(_useState3, 2),\n      canSubmit = _useState4[0],\n      setCanSubmit = _useState4[1];\n\n  var requiredValues = [\"first_name\", \"last_name\"];\n\n  var checkIfCanSubmit = function checkIfCanSubmit() {\n    return requiredValues.every(function (v) {\n      return values[v];\n    });\n  };\n\n  var updateValues = function updateValues(name, value) {\n    return setValues(_objectSpread(_objectSpread({}, values), {}, _defineProperty({}, name, value)));\n  };\n\n  var Header = function Header(_ref2) {\n    var title = _ref2.title;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", {\n      className: _style_module_scss__WEBPACK_IMPORTED_MODULE_3__[\"default\"].section_header,\n      style: {\n        title: title\n      }\n    }, title));\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _style_module_scss__WEBPACK_IMPORTED_MODULE_3__[\"default\"].employee_form_container\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _style_module_scss__WEBPACK_IMPORTED_MODULE_3__[\"default\"].form_overlay_header\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, \"Update Employee\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icon__WEBPACK_IMPORTED_MODULE_2__.Icon, {\n    name: \"x-14x14\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _style_module_scss__WEBPACK_IMPORTED_MODULE_3__[\"default\"].employee_form_wrapper\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _style_module_scss__WEBPACK_IMPORTED_MODULE_3__[\"default\"].employee_name_wrapper\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icon__WEBPACK_IMPORTED_MODULE_2__.Icon, {\n    name: \"people-18x15\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, \"[employee name]\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Header, {\n    title: \"Employee Info\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _style_module_scss__WEBPACK_IMPORTED_MODULE_3__[\"default\"].employee_info\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(___WEBPACK_IMPORTED_MODULE_1__.TextField, {\n    label: \"First Name\",\n    type: \"text\",\n    onChange: updateValues,\n    name: \"first_name\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(___WEBPACK_IMPORTED_MODULE_1__.TextField, {\n    label: \"Last Name\",\n    type: \"text\",\n    onChange: updateValues,\n    name: \"last_name\"\n  }))));\n};\n\n//# sourceURL=webpack://skills-assessment/./src/components/EmployeeForm/EmployeeForm.jsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9d50a2c83a8ae1a9268e")
/******/ })();
/******/ 
/******/ }
);