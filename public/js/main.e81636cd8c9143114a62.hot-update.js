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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"EmployeeForm\": () => (/* binding */ EmployeeForm)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .. */ \"./src/components/index.js\");\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks */ \"./src/hooks/index.js\");\n/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../icon */ \"./src/icon.js\");\n/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.module.scss */ \"./src/components/EmployeeForm/style.module.scss\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\nvar EmployeeForm = function EmployeeForm(_ref) {\n  var firstName = _ref.firstName,\n      lastName = _ref.lastName,\n      onClick = _ref.onClick,\n      onDismiss = _ref.onDismiss;\n  var defaultValues = {\n    firstName: \"\",\n    lastName: \"\"\n  };\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    firstPassword: \"\",\n    secondPassword: \"\"\n  }),\n      _useState2 = _slicedToArray(_useState, 2),\n      password = _useState2[0],\n      setPassword = _useState2[1];\n\n  var _usePasswordValidatio = (0,_hooks__WEBPACK_IMPORTED_MODULE_2__.usePasswordValidation)({\n    firstPassword: password.firstPassword,\n    secondPassword: password.secondPassword\n  }),\n      _usePasswordValidatio2 = _slicedToArray(_usePasswordValidatio, 5),\n      validLength = _usePasswordValidatio2[0],\n      hasNumber = _usePasswordValidatio2[1],\n      upperCase = _usePasswordValidatio2[2],\n      lowerCase = _usePasswordValidatio2[3],\n      match = _usePasswordValidatio2[4];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultValues),\n      _useState4 = _slicedToArray(_useState3, 2),\n      values = _useState4[0],\n      setValues = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      _useState6 = _slicedToArray(_useState5, 2),\n      canSubmit = _useState6[0],\n      setCanSubmit = _useState6[1];\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      _useState8 = _slicedToArray(_useState7, 2),\n      error = _useState8[0],\n      setError = _useState8[1];\n\n  var setFirst = function setFirst(name, value) {\n    return setPassword(_objectSpread(_objectSpread({}, password), {}, _defineProperty({}, name, value)));\n  };\n\n  var setSecond = function setSecond(name, value) {\n    return setPassword(_objectSpread(_objectSpread({}, password), {}, _defineProperty({}, name, value)));\n  };\n\n  var requiredValues = [\"firstName\", \"lastName\"];\n\n  var checkIfCanSubmit = function checkIfCanSubmit() {\n    return requiredValues.every(function (v) {\n      return values[v];\n    });\n  };\n\n  var updateValues = function updateValues(name, value) {\n    return setValues(_objectSpread(_objectSpread({}, values), {}, _defineProperty({}, name, value)));\n  };\n\n  var onSubmit = function onSubmit(e) {\n    e.preventDefault();\n    var isFormValid = checkIfCanSubmit();\n\n    if (!isFormValid) {\n      setError(true);\n    } else {\n      setError(false);\n    }\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _style_module_scss__WEBPACK_IMPORTED_MODULE_4__[\"default\"].employee_form_container\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _style_module_scss__WEBPACK_IMPORTED_MODULE_4__[\"default\"].form_overlay_header\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, \"Update Employee\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icon__WEBPACK_IMPORTED_MODULE_3__.Icon, {\n    name: \"x-14x14\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _style_module_scss__WEBPACK_IMPORTED_MODULE_4__[\"default\"].employee_form_wrapper\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _style_module_scss__WEBPACK_IMPORTED_MODULE_4__[\"default\"].employee_name_wrapper\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icon__WEBPACK_IMPORTED_MODULE_3__.Icon, {\n    name: \"people-18x15\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, \"[employee name]\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(___WEBPACK_IMPORTED_MODULE_1__.FormGroup, {\n    title: \"Employee Info\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(___WEBPACK_IMPORTED_MODULE_1__.TextField, {\n    isError: error,\n    label: \"First Name\",\n    type: \"text\",\n    onChange: updateValues,\n    name: \"firstName\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(___WEBPACK_IMPORTED_MODULE_1__.TextField, {\n    isError: error,\n    label: \"Last Name\",\n    type: \"text\",\n    onChange: updateValues,\n    name: \"lastName\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      display: 'flex',\n      flexDirection: 'row'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(___WEBPACK_IMPORTED_MODULE_1__.FormGroup, {\n    isColumn: true,\n    title: \"Update Password\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(___WEBPACK_IMPORTED_MODULE_1__.TextField, {\n    type: \"password\",\n    label: \"Password\",\n    onChange: setFirst,\n    name: \"firstPassword\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(___WEBPACK_IMPORTED_MODULE_1__.TextField, {\n    label: \"Confirm Password\",\n    type: \"password\",\n    onChange: setSecond,\n    name: \"secondPassword\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _style_module_scss__WEBPACK_IMPORTED_MODULE_4__[\"default\"].password_validation_wrapper\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(___WEBPACK_IMPORTED_MODULE_1__.ValidationRule, {\n    rule: \"8 or more characters\",\n    isValid: validLength\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(___WEBPACK_IMPORTED_MODULE_1__.ValidationRule, {\n    rule: \"At least 1 number\",\n    isValid: hasNumber\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(___WEBPACK_IMPORTED_MODULE_1__.ValidationRule, {\n    rule: \"Uppercase\",\n    isValid: upperCase\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(___WEBPACK_IMPORTED_MODULE_1__.ValidationRule, {\n    rule: \"Lowercase\",\n    isValid: lowerCase\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(___WEBPACK_IMPORTED_MODULE_1__.ValidationRule, {\n    rule: \"Passwords match\",\n    isValid: match\n  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _style_module_scss__WEBPACK_IMPORTED_MODULE_4__[\"default\"].actions_wrapper\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    onClick: onSubmit\n  }, \"Save Employee Info\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    onDismiss: onDismiss\n  }, \"Cancel\"))));\n};\n\n//# sourceURL=webpack://skills-assessment/./src/components/EmployeeForm/EmployeeForm.jsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e5f9a22513b4d62f4597")
/******/ })();
/******/ 
/******/ }
);