(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/plugin/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/_user-agent@1.0.4@user-agent/index.js":
/*!************************************************************!*\
  !*** ./node_modules/_user-agent@1.0.4@user-agent/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nmodule.exports = __webpack_require__(/*! ./lib/user-agent */ \"./node_modules/_user-agent@1.0.4@user-agent/lib/user-agent.js\");\n\n//# sourceURL=webpack:///./node_modules/_user-agent@1.0.4@user-agent/index.js?");

/***/ }),

/***/ "./node_modules/_user-agent@1.0.4@user-agent/lib/user-agent.js":
/*!*********************************************************************!*\
  !*** ./node_modules/_user-agent@1.0.4@user-agent/lib/user-agent.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/*!\n * user-agent\n * Copyright(c) 2010-2011 TJ Holowaychuk.\n * Authored by TJ Holowaychuk\n * MIT Licensed\n */\n\n/**\n * Library version.\n */\n\nexports.version = '1.0.4'\n\n/**\n * Parse the given user-agent string into an object of usable data.\n *\n * Example:\n *\n *      var userAgent = require('user-agent')\n *      userAgent.parse('Mozilla/5.0 (Windows; U; Windows NT 5.1; en) AppleWebKit/526.9 (KHTML, like Gecko) Version/4.0dp1 Safari/526.8')\n *      // => { name: 'safari', version: '4.0dp1', os: 'Windows XP', full: '... same string as above ...' }\n *\n * @param  {String} str\n * @return {Object}\n * @api public\n */\n\nexports.parse = function(str) {\n  var agent = { full: str, name: name(str) };\n  agent.version = version(str, agent.name);\n  agent.fullName = agent.name + ' ' + agent.version;\n  agent.os = os(str);\n  return agent;\n};\n\n/**\n * Get the browser version based on the given browser name.\n *\n * @param  {String} str\n * @param  {String} name\n * @return {String}\n * @api private\n */\n\nfunction version(str, name) {\n  if (name === 'safari') name = 'version';\n  if (name){\n\t  return new RegExp(name + '[\\\\/ ]([\\\\d\\\\w\\\\.-]+)', 'i').exec(str) && RegExp.$1 || '';\n  }else{\n\t  var m=str.match(/version[\\/ ]([\\d\\w\\.]+)/i);\n\t  return m && m.length>1 ? m[1] : '';\n  }  \n}\n\n/**\n * Supported operating systems.\n */\n\nvar operatingSystems = {\n    'iPad': /ipad/i\n  , 'iPhone': /iphone/i\n  , 'Windows Vista': /windows nt 6\\.0/i\n  , 'Windows 7': /windows nt 6\\.\\d+/i\n  , 'Windows 2003': /windows nt 5\\.2+/i\n  , 'Windows XP': /windows nt 5\\.1+/i\n  , 'Windows 2000': /windows nt 5\\.0+/i\n  , 'OS X $1.$2': /os x (\\d+)[._](\\d+)/i\n  , 'Linux': /linux/i\n  , 'Googlebot': /googlebot/i\n};\n\nvar osNames = Object.keys(operatingSystems);\n\n/**\n * Get operating system from the given user-agent string.\n *\n * @param  {String} str\n * @return {String}\n * @api private\n */\n\nfunction os(str) {\n  var captures;\n  for (var i = 0, len = osNames.length; i < len; ++i) {\n    if (captures = operatingSystems[osNames[i]].exec(str)) {\n      return ~osNames[i].indexOf('$1')\n        ? osNames[i].replace(/\\$(\\d+)/g, function(_, n){\n          return captures[n]\n        }) : osNames[i];\n    }\n  }\n  return '';\n}\n\n/**\n * Supported browser names.\n */\n\nvar names = [\n   'opera'\n , 'konqueror'\n , 'firefox'\n , 'chrome'\n , 'epiphany'\n , 'safari'\n , 'msie'\n , 'curl'\n];\n\n/**\n * Get browser name for the given user-agent string.\n *\n * @param  {String} str\n * @return {String}\n * @api private\n */\n\nfunction name(str) {\n  str = str.toLowerCase();\n  for (var i = 0, len = names.length; i < len; ++i) {\n    if (str.indexOf(names[i]) !== -1) return names[i];\n  }\n  return '';\n}\n\n\n//# sourceURL=webpack:///./node_modules/_user-agent@1.0.4@user-agent/lib/user-agent.js?");

/***/ }),

/***/ "./src/exception/console.js":
/*!**********************************!*\
  !*** ./src/exception/console.js ***!
  \**********************************/
/*! exports provided: instrumentConsole */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"instrumentConsole\", function() { return instrumentConsole; });\n/* harmony import */ var _utils_tracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/tracker */ \"./src/utils/tracker.js\");\n\n\n/**\n * 监控统计之 console.error 错误\n */\nfunction instrumentConsole() {\n  const wrapConsoleMethod = (console, level, callback) => {\n    console[level] = (...args) => {\n      const msg = [...args];\n      callback && callback(msg, level);\n    };\n  };\n  const consoleMethodCallBack = function (msg, level) {\n    let log = {\n      catorage: \"exception\",\n      function: \"console\",\n      type: level,\n      message: msg.join(\",\"),\n    };\n    _utils_tracker__WEBPACK_IMPORTED_MODULE_0__[\"default\"].send(log);\n  };\n\n  [\"warn\", \"error\"].forEach((item) => {\n    wrapConsoleMethod(console, item, consoleMethodCallBack);\n  });\n}\n\n\n//# sourceURL=webpack:///./src/exception/console.js?");

/***/ }),

/***/ "./src/exception/index.js":
/*!********************************!*\
  !*** ./src/exception/index.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _onerror__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onerror */ \"./src/exception/onerror.js\");\n/* harmony import */ var _unhandledrejection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unhandledrejection */ \"./src/exception/unhandledrejection.js\");\n/* harmony import */ var _xhr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./xhr */ \"./src/exception/xhr.js\");\n/* harmony import */ var _console__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./console */ \"./src/exception/console.js\");\n\n\n// import { crossorigin } from \"./crossorigin\";\n\n\n\nObject(_onerror__WEBPACK_IMPORTED_MODULE_0__[\"onerror\"])();\nObject(_unhandledrejection__WEBPACK_IMPORTED_MODULE_1__[\"unhandledrejection\"])();\n// crossorigin();\nObject(_xhr__WEBPACK_IMPORTED_MODULE_2__[\"xhr\"])();\nObject(_console__WEBPACK_IMPORTED_MODULE_3__[\"instrumentConsole\"])();\n\n\n//# sourceURL=webpack:///./src/exception/index.js?");

/***/ }),

/***/ "./src/exception/onerror.js":
/*!**********************************!*\
  !*** ./src/exception/onerror.js ***!
  \**********************************/
/*! exports provided: onerror */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onerror\", function() { return onerror; });\n/* harmony import */ var _utils_lastEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/lastEvent */ \"./src/utils/lastEvent.js\");\n/* harmony import */ var _utils_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/selector */ \"./src/utils/selector.js\");\n/* harmony import */ var _utils_stack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/stack */ \"./src/utils/stack.js\");\n/* harmony import */ var _utils_tracker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/tracker */ \"./src/utils/tracker.js\");\n\n\n\n\n\n/**\n * 监控统计之 js 错误 和 请求资源\n */\nfunction onerror() {\n  window.addEventListener(\n    \"error\",\n    function (event) {\n      const { target } = event;\n      if (target.src || target.href) {\n        _utils_tracker__WEBPACK_IMPORTED_MODULE_3__[\"default\"].send(handlerErrorResource(event));\n        return;\n      }\n      _utils_tracker__WEBPACK_IMPORTED_MODULE_3__[\"default\"].send(handlerErrorJS(event));\n    },\n    true\n  );\n}\n\nfunction handlerErrorJS(data) {\n  let lastEventValue = Object(_utils_lastEvent__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  const { message, colno, lineno, filename, error } = data;\n  let log = {\n    catorage: \"exception\",\n    function: \"onerror\",\n    type: \"js\",\n    message,\n    filename,\n    stack: Object(_utils_stack__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((error && error.stack) || \"\"),\n    position: `${lineno}:${colno}`,\n    selector: lastEventValue ? Object(_utils_selector__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(lastEventValue.path) : \"\",\n  };\n  return log;\n}\n\nfunction handlerErrorResource(data) {\n  const { target } = data;\n  let log = {\n    catorage: \"exception\",\n    function: \"onerror\",\n    type: \"resource\",\n    tagName: target.tagName,\n    filename: target.src || target.href,\n    selector: Object(_utils_selector__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target),\n  };\n  return log;\n}\n\n\n//# sourceURL=webpack:///./src/exception/onerror.js?");

/***/ }),

/***/ "./src/exception/unhandledrejection.js":
/*!*********************************************!*\
  !*** ./src/exception/unhandledrejection.js ***!
  \*********************************************/
/*! exports provided: unhandledrejection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"unhandledrejection\", function() { return unhandledrejection; });\n/* harmony import */ var _utils_lastEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/lastEvent */ \"./src/utils/lastEvent.js\");\n/* harmony import */ var _utils_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/selector */ \"./src/utils/selector.js\");\n/* harmony import */ var _utils_tracker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/tracker */ \"./src/utils/tracker.js\");\n/* harmony import */ var _utils_stack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/stack */ \"./src/utils/stack.js\");\n\n\n\n\n\n/**\n * 监控统计之 promise 错误\n */\nfunction unhandledrejection() {\n  window.addEventListener(\"unhandledrejection\", function (event) {\n    _utils_tracker__WEBPACK_IMPORTED_MODULE_2__[\"default\"].send(handlerUnhandledrejection(event));\n  });\n}\n\nfunction handlerUnhandledrejection(event) {\n  let lastEventValue = Object(_utils_lastEvent__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  const { reason } = event;\n  let log = {\n    catorage: \"exception\",\n    function: \"unhandledrejection\",\n    type: \"promise\",\n    selector: lastEventValue ? Object(_utils_selector__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(lastEventValue.path) : \"\",\n    ...getReason(reason),\n  };\n  return log;\n}\n\nfunction getReason(reason) {\n  let message = \"\";\n  if (typeof reason === \"string\") {\n    message = reason;\n    return {\n      message,\n      stack: \"\",\n      position: \"0:0\",\n    };\n  } else if (typeof reason === \"object\") {\n    message = reason.message || reason;\n    return {\n      ...Object(_utils_stack__WEBPACK_IMPORTED_MODULE_3__[\"getStackInfo\"])(reason.stack),\n      message,\n      stack: Object(_utils_stack__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(reason.stack),\n    };\n  }\n}\n\n\n//# sourceURL=webpack:///./src/exception/unhandledrejection.js?");

/***/ }),

/***/ "./src/exception/xhr.js":
/*!******************************!*\
  !*** ./src/exception/xhr.js ***!
  \******************************/
/*! exports provided: xhr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"xhr\", function() { return xhr; });\n/* harmony import */ var _utils_tracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/tracker */ \"./src/utils/tracker.js\");\n\n\n/**\n * 监控统计之 xhr 错误\n */\nfunction xhr() {\n  let XMLHttpRequest = window.XMLHttpRequest;\n  let nativeOpen = XMLHttpRequest.prototype.open;\n  XMLHttpRequest.prototype.open = function (method, url, async) {\n    if (!url.match(/logstores/) && !url.match(/sockjs/)) {\n      this.log = { method, url, async };\n    }\n    return nativeOpen.apply(this, arguments);\n  };\n  let nativeSend = XMLHttpRequest.prototype.send;\n\n  XMLHttpRequest.prototype.send = function (body) {\n    if (this.log) {\n      let startTime = Date.now();\n      let handler = (type) => () => {\n        let duration = Date.now() - startTime;\n        let status = this.status;\n        let statusText = this.statusText;\n        _utils_tracker__WEBPACK_IMPORTED_MODULE_0__[\"default\"].send({\n          catorage: \"exception\",\n          function: \"xhr\",\n          type,\n          pathname: this.log.url,\n          status: status + \"-\" + statusText,\n          duration,\n          response: this.response ? JSON.stringify(this.response) : \"\",\n          params: body || \"\",\n        });\n      };\n      this.addEventListener(\"load\", handler(\"load\"), false);\n      this.addEventListener(\"error\", handler(\"error\"), false);\n      this.addEventListener(\"abort\", handler(\"abort\"), false);\n    }\n    return nativeSend.apply(this, arguments);\n  };\n}\n\n\n//# sourceURL=webpack:///./src/exception/xhr.js?");

/***/ }),

/***/ "./src/plugin/index.js":
/*!*****************************!*\
  !*** ./src/plugin/index.js ***!
  \*****************************/
/*! exports provided: getPlugin, use, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPlugin\", function() { return getPlugin; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"use\", function() { return use; });\n/* harmony import */ var _exception_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../exception/index */ \"./src/exception/index.js\");\n/* harmony import */ var _utils_tracker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/tracker */ \"./src/utils/tracker.js\");\n/* harmony import */ var _react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./react */ \"./src/plugin/react.js\");\n/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vue */ \"./src/plugin/vue.js\");\n\n\n\n\n\nlet _GLobal_Module;\n\nconst getPlugin = (plugin) => {\n  if (plugin === \"react\") {\n    return Object(_react__WEBPACK_IMPORTED_MODULE_2__[\"getReact\"])(_GLobal_Module);\n  } else if (plugin === \"vue\") {\n    return Object(_vue__WEBPACK_IMPORTED_MODULE_3__[\"getVue\"])();\n  }\n};\n\nconst use = (mode) => {\n  _GLobal_Module = mode;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_utils_tracker__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n\n//# sourceURL=webpack:///./src/plugin/index.js?");

/***/ }),

/***/ "./src/plugin/react.js":
/*!*****************************!*\
  !*** ./src/plugin/react.js ***!
  \*****************************/
/*! exports provided: getReact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getReact\", function() { return getReact; });\n/* harmony import */ var _utils_lastEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/lastEvent */ \"./src/utils/lastEvent.js\");\n/* harmony import */ var _utils_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/selector */ \"./src/utils/selector.js\");\n/* harmony import */ var _utils_stack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/stack */ \"./src/utils/stack.js\");\n/* harmony import */ var _utils_tracker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/tracker */ \"./src/utils/tracker.js\");\n\n\n\n\n\nconst getReact = (React) => {\n  return class ErrorBoundary extends React.Component {\n    constructor(props) {\n      super(props);\n      this.state = { hasError: false };\n    }\n\n    componentDidCatch(e) {\n      let lastEventValue = Object(_utils_lastEvent__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n      this.setState({ hasError: true });\n      const { message } = e;\n      _utils_tracker__WEBPACK_IMPORTED_MODULE_3__[\"default\"].send({\n        catorage: \"exception\",\n        function: \"react\",\n        type: \"react\",\n        message,\n        stack: Object(_utils_stack__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(e.stack || (e.error && e.error.stack) || \"\"),\n        ...Object(_utils_stack__WEBPACK_IMPORTED_MODULE_2__[\"getStackInfo\"])(e.stack),\n        selector: lastEventValue ? Object(_utils_selector__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(lastEventValue.path) : \"\",\n      });\n    }\n\n    render() {\n      if (this.state.hasError) {\n        return \"omething went wrong.\";\n      }\n      return this.props.children;\n    }\n  };\n};\n\n\n//# sourceURL=webpack:///./src/plugin/react.js?");

/***/ }),

/***/ "./src/plugin/vue.js":
/*!***************************!*\
  !*** ./src/plugin/vue.js ***!
  \***************************/
/*! exports provided: getVue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getVue\", function() { return getVue; });\n/* harmony import */ var _utils_tracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/tracker */ \"./src/utils/tracker.js\");\n\n\nconst vuePlugin = function (_Vue) {\n  if (!_Vue || !_Vue.config) {\n    return;\n  }\n  let nativeOnError = _Vue.config.errorHandler;\n  _Vue.config.errorHandler = function (err, vm, info) {\n    console.log(err);\n    _utils_tracker__WEBPACK_IMPORTED_MODULE_0__[\"default\"].send({\n      catorage: \"exception\",\n      function: \"vue\",\n      type: \"errorHandler\",\n      message: err,\n    });\n    if (typeof nativeOnError === \"function\") {\n      nativeOnError.call(this, err, vm, info);\n    }\n  };\n};\n\nconst getVue = () => {\n  return {\n    install(Vue) {\n      vuePlugin(Vue);\n    },\n  };\n};\n\n\n//# sourceURL=webpack:///./src/plugin/vue.js?");

/***/ }),

/***/ "./src/utils/lastEvent.js":
/*!********************************!*\
  !*** ./src/utils/lastEvent.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet lastEvent;\n[\"click\", \"touchstart\", \"mousedown\", \"keydown\", \"mouseover\"].forEach(\n  (eventType) => {\n    document.addEventListener(\n      eventType,\n      (event) => {\n        lastEvent = event;\n      },\n      {\n        capture: true, //捕获阶段\n        passive: true, //默认不阻止默认事件\n      }\n    );\n  }\n);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  return lastEvent;\n});\n\n\n//# sourceURL=webpack:///./src/utils/lastEvent.js?");

/***/ }),

/***/ "./src/utils/selector.js":
/*!*******************************!*\
  !*** ./src/utils/selector.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction getSelectors(path) {\n  return path\n    .reverse()\n    .filter((element) => {\n      return element !== document && element !== window;\n    })\n    .map((element) => {\n      let selector = \"\";\n      if (element.id) {\n        return `${element.nodeName.toLowerCase()}#${element.id}`;\n      } else if (element.className && typeof element.className === \"string\") {\n        return `${element.nodeName.toLowerCase()}.${element.className}`;\n      } else {\n        selector = element.nodeName.toLowerCase();\n      }\n      return selector;\n    })\n    .join(\" \");\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (pathsOrTarget) {\n  if (Array.isArray(pathsOrTarget)) {\n    return getSelectors(pathsOrTarget);\n  } else {\n    let path = [];\n    while (pathsOrTarget) {\n      path.push(pathsOrTarget);\n      pathsOrTarget = pathsOrTarget.parentNode;\n    }\n    return getSelectors(path);\n  }\n});\n\n\n//# sourceURL=webpack:///./src/utils/selector.js?");

/***/ }),

/***/ "./src/utils/stack.js":
/*!****************************!*\
  !*** ./src/utils/stack.js ***!
  \****************************/
/*! exports provided: default, getStackInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return stack; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStackInfo\", function() { return getStackInfo; });\nfunction stack(stack) {\n  if (!stack) return \"\";\n  return stack\n    .split(\"\\n\")\n    .slice(1)\n    .map((item) => item.replace(/^\\s+at\\s+/g, \"\"))\n    .join(\"^\");\n}\n\nfunction getStackInfo(data) {\n  let filename;\n  let lineno = 0;\n  let colno = 0;\n  if (!data) {\n    return {\n      filename,\n      position: `${lineno}:${colno}`,\n    };\n  }\n  let matchResult = data.match(/at\\s+(.+):(\\d+):(\\d+)/);\n  const [, b, c, d] = matchResult;\n  filename = b;\n  lineno = c;\n  colno = d;\n  return {\n    filename,\n    position: `${lineno}:${colno}`,\n  };\n}\n\n\n//# sourceURL=webpack:///./src/utils/stack.js?");

/***/ }),

/***/ "./src/utils/tracker.js":
/*!******************************!*\
  !*** ./src/utils/tracker.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst userAgent = __webpack_require__(/*! user-agent */ \"./node_modules/_user-agent@1.0.4@user-agent/index.js\");\n\nconst host = \"cn-beijing.log.aliyuncs.com\";\nconst project = \"zebra-monitor\";\nconst logStore = \"zebra-monitor-store\";\n\nfunction getExtraData() {\n  const { name, version } = userAgent.parse(navigator.userAgent);\n  return {\n    title: document.title,\n    url: location.href,\n    timestamp: Date.now(),\n    userAgentName: name,\n    userAgentVersion: version,\n  };\n}\n\nvar report = (function () {\n  var imgs = [];\n  return function (src) {\n    var img = new Image();\n    imgs.push(img);\n    img.src = src;\n  };\n})();\n\nclass SendTracker {\n  constructor() {\n    this.url = `http://${project}.${host}/logstores/${logStore}/track`; //上报的路径\n    this.xhr = new XMLHttpRequest();\n  }\n  formatData(data) {\n    let extraData = getExtraData();\n    let log = { ...extraData, ...data };\n    for (let key in log) {\n      if (typeof log[key] === \"number\") {\n        log[key] = `${log[key]}`;\n      }\n    }\n    return JSON.stringify({\n      __logs__: [log],\n    });\n  }\n  send(data) {\n    let params = this.formatData(data);\n    // const url = this.url + \"?\" + params;\n    // report(url);\n    this._send(params);\n  }\n  _send(params) {\n    let body = params;\n    this.xhr.open(\"POST\", this.url, true);\n    this.xhr.setRequestHeader(\"Content-Type\", \"application/json\"); //请求体类型\n    this.xhr.setRequestHeader(\"x-log-apiversion\", \"0.6.0\"); //版本号\n    this.xhr.setRequestHeader(\"x-log-bodyrawsize\", body.length); //请求体的大小\n    this.xhr.onload = function () {};\n    this.xhr.onerror = function (error) {};\n    this.xhr.send(body);\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (new SendTracker());\n\n\n//# sourceURL=webpack:///./src/utils/tracker.js?");

/***/ })

/******/ });
});