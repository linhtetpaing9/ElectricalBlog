/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(9);
var isBuffer = __webpack_require__(21);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),
/* 1 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);

var EventBus = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a();
/* harmony default export */ __webpack_exports__["a"] = (EventBus);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var normalizeHeaderName = __webpack_require__(23);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(10);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(10);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(50)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*!
 * Vue.js v2.5.17
 * (c) 2014-2018 Evan You
 * Released under the MIT License.
 */


/*  */

var emptyObject = Object.freeze({});

// these helpers produces better vm code in JS engines due to their
// explicitness and function inlining
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value e.g. [object Object]
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : typeof val === 'object'
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert a input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if a attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether the object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it... e.g.
 * PhantomJS 1.x. Technically we don't need this anymore since native bind is
 * now more performant in most browsers, but removing it would be breaking for
 * code that was able to run in PhantomJS 1.x, so this must be kept for
 * backwards compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/**
 * Return same value
 */
var identity = function (_) { return _; };

/**
 * Generate a static keys string from compiler modules.
 */
function genStaticKeys (modules) {
  return modules.reduce(function (keys, m) {
    return keys.concat(m.staticKeys || [])
  }, []).join(',')
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured'
];

/*  */

var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
})

/*  */

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = /[^\w.$]/;
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = (function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm || {};
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */


var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;
var targetStack = [];

function pushTarget (_target) {
  if (Dep.target) { targetStack.push(Dep.target); }
  Dep.target = _target;
}

function popTarget () {
  Dep.target = targetStack.pop();
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    vnode.children,
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    var augment = hasProto
      ? protoAugment
      : copyAugment;
    augment(value, arrayMethods, arrayKeys);
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src, keys) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  if (!getter && arguments.length === 2) {
    val = obj[key];
  }
  var setter = property && property.set;

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ("development" !== 'production' && customSetter) {
        customSetter();
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ("development" !== 'production' &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "development" !== 'production' && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ("development" !== 'production' &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "development" !== 'production' && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;
  var keys = Object.keys(from);
  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      "development" !== 'production' && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  return childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
    "development" !== 'production' && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!/^[a-zA-Z][\w-]*$/.test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'can only contain alphanumeric characters and the hyphen, ' +
      'and must start with a letter.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def = dirs[key];
      if (typeof def === 'function') {
        dirs[key] = { bind: def, update: def };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);
  var extendsFrom = child.extends;
  if (extendsFrom) {
    parent = mergeOptions(parent, extendsFrom, vm);
  }
  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      parent = mergeOptions(parent, child.mixins[i], vm);
    }
  }
  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ("development" !== 'production' && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */

function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ("development" !== 'production' && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }
  if (!valid) {
    warn(
      "Invalid prop: type check failed for prop \"" + name + "\"." +
      " Expected " + (expectedTypes.map(capitalize).join(', ')) +
      ", got " + (toRawType(value)) + ".",
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

/*  */

function handleError (err, vm, info) {
  if (vm) {
    var cur = vm;
    while ((cur = cur.$parent)) {
      var hooks = cur.$options.errorCaptured;
      if (hooks) {
        for (var i = 0; i < hooks.length; i++) {
          try {
            var capture = hooks[i].call(cur, err, vm, info) === false;
            if (capture) { return }
          } catch (e) {
            globalHandleError(e, cur, 'errorCaptured hook');
          }
        }
      }
    }
  }
  globalHandleError(err, vm, info);
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      logError(e, null, 'config.errorHandler');
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */
/* globals MessageChannel */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using both microtasks and (macro) tasks.
// In < 2.4 we used microtasks everywhere, but there are some scenarios where
// microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690) or even between bubbling of the same
// event (#6566). However, using (macro) tasks everywhere also has subtle problems
// when state is changed right before repaint (e.g. #6813, out-in transitions).
// Here we use microtask by default, but expose a way to force (macro) task when
// needed (e.g. in event handlers attached by v-on).
var microTimerFunc;
var macroTimerFunc;
var useMacroTask = false;

// Determine (macro) task defer implementation.
// Technically setImmediate should be the ideal choice, but it's only available
// in IE. The only polyfill that consistently queues the callback after all DOM
// events triggered in the same loop is by using MessageChannel.
/* istanbul ignore if */
if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  macroTimerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else if (typeof MessageChannel !== 'undefined' && (
  isNative(MessageChannel) ||
  // PhantomJS
  MessageChannel.toString() === '[object MessageChannelConstructor]'
)) {
  var channel = new MessageChannel();
  var port = channel.port2;
  channel.port1.onmessage = flushCallbacks;
  macroTimerFunc = function () {
    port.postMessage(1);
  };
} else {
  /* istanbul ignore next */
  macroTimerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

// Determine microtask defer implementation.
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  microTimerFunc = function () {
    p.then(flushCallbacks);
    // in problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else {
  // fallback to macro
  microTimerFunc = macroTimerFunc;
}

/**
 * Wrap a function so that if any code inside triggers state change,
 * the changes are queued using a (macro) task instead of a microtask.
 */
function withMacroTask (fn) {
  return fn._withTask || (fn._withTask = function () {
    useMacroTask = true;
    var res = fn.apply(null, arguments);
    useMacroTask = false;
    return res
  })
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    if (useMacroTask) {
      macroTimerFunc();
    } else {
      microTimerFunc();
    }
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      perf.clearMeasures(name);
    };
  }
}

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
      if (!has && !isAllowed) {
        warnNonPresent(target, key);
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        warnNonPresent(target, key);
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        cloned[i].apply(null, arguments$1);
      }
    } else {
      // return handler return value for single handlers
      return fns.apply(null, arguments)
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  vm
) {
  var name, def, cur, old, event;
  for (name in on) {
    def = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    /* istanbul ignore if */
    if (isUndef(cur)) {
      "development" !== 'production' && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur);
      }
      add(event.name, cur, event.once, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor,
  context
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (isDef(factory.contexts)) {
    // already pending
    factory.contexts.push(context);
  } else {
    var contexts = factory.contexts = [context];
    var sync = true;

    var forceRender = function () {
      for (var i = 0, l = contexts.length; i < l; i++) {
        contexts[i].$forceUpdate();
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender();
      }
    });

    var reject = once(function (reason) {
      "development" !== 'production' && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender();
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (typeof res.then === 'function') {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isDef(res.component) && typeof res.component.then === 'function') {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            setTimeout(function () {
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender();
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          setTimeout(function () {
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : null
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn, once) {
  if (once) {
    target.$once(event, fn);
  } else {
    target.$on(event, fn);
  }
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var this$1 = this;

    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var this$1 = this;

    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$off(event[i], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    if (fn) {
      // specific handler
      var cb;
      var i$1 = cbs.length;
      while (i$1--) {
        cb = cbs[i$1];
        if (cb === fn || cb.fn === fn) {
          cbs.splice(i$1, 1);
          break
        }
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        try {
          cbs[i].apply(vm, args);
        } catch (e) {
          handleError(e, vm, ("event handler for \"" + event + "\""));
        }
      }
    }
    return vm
  };
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  var slots = {};
  if (!children) {
    return slots
  }
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

function resolveScopedSlots (
  fns, // see flow/vnode
  res
) {
  res = res || {};
  for (var i = 0; i < fns.length; i++) {
    if (Array.isArray(fns[i])) {
      resolveScopedSlots(fns[i], res);
    } else {
      res[fns[i].key] = fns[i].fn;
    }
  }
  return res
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    if (vm._isMounted) {
      callHook(vm, 'beforeUpdate');
    }
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(
        vm.$el, vnode, hydrating, false /* removeOnly */,
        vm.$options._parentElm,
        vm.$options._refElm
      );
      // no need for the ref nodes after initial patch
      // this prevents keeping a detached DOM tree in memory (#5851)
      vm.$options._parentElm = vm.$options._refElm = null;
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    activeInstance = prevActiveInstance;
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if ("development" !== 'production' && config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure(("vue " + name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure(("vue " + name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, null, true /* isRenderWatcher */);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren
  var hasChildren = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    parentVnode.data.scopedSlots || // has new scoped slots
    vm.$scopedSlots !== emptyObject // has old scoped slots
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (hasChildren) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      try {
        handlers[i].call(vm);
      } catch (e) {
        handleError(e, vm, (hook + " hook"));
      }
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */


var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ("development" !== 'production' && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */

var uid$1 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$1; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : '';
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = function () {};
      "development" !== 'production' && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    var dep = this$1.deps[i];
    if (!this$1.newDepIds.has(dep.id)) {
      dep.removeSub(this$1);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    this$1.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
    var this$1 = this;

  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this$1.deps[i].removeSub(this$1);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive(props, key, value, function () {
        if (vm.$parent && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {
      defineReactive(props, key, value);
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    "development" !== 'production' && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
      "development" !== 'production' && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ("development" !== 'production' && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : userDef;
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : userDef.get
      : noop;
    sharedPropertyDefinition.set = userDef.set
      ? userDef.set
      : noop;
  }
  if ("development" !== 'production' &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (methods[key] == null) {
        warn(
          "Method \"" + key + "\" has an undefined value in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = methods[key] == null ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function (newData) {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {
        defineReactive(vm, key, result[key]);
      }
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject).filter(function (key) {
        /* istanbul ignore next */
        return Object.getOwnPropertyDescriptor(inject, key).enumerable
      })
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    keys = Object.keys(val);
    ret = new Array(keys.length);
    for (i = 0, l = keys.length; i < l; i++) {
      key = keys[i];
      ret[i] = render(val[key], key, i);
    }
  }
  if (isDef(ret)) {
    (ret)._isVList = true;
  }
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ("development" !== 'production' && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    var slotNodes = this.$slots[name];
    // warn duplicate slot usage
    if (slotNodes) {
      if ("development" !== 'production' && slotNodes._rendered) {
        warn(
          "Duplicate presence of slot \"" + name + "\" found in the same render tree " +
          "- this will likely cause render errors.",
          this
        );
      }
      slotNodes._rendered = true;
    }
    nodes = slotNodes || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
      "development" !== 'production' && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        if (!(key in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
      "development" !== 'production' && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () { return resolveSlots(children, parent); };

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = data.scopedSlots || emptyObject;
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */




// Register the component hook to weex native render engine.
// The hook will be triggered by native, not javascript.


// Updates the state of the component to weex native render engine.

/*  */

// https://github.com/Hanks10100/weex-native-directive/tree/master/component

// listening on native callback

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (
    vnode,
    hydrating,
    parentElm,
    refElm
  ) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance,
        parentElm,
        refElm
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  // Weex specific: invoke recycle-list optimized @render function for
  // extracting cell-slot template.
  // https://github.com/Hanks10100/weex-native-directive/tree/master/component
  /* istanbul ignore if */
  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent, // activeInstance in lifecycle state
  parentElm,
  refElm
) {
  var options = {
    _isComponent: true,
    parent: parent,
    _parentVnode: vnode,
    _parentElm: parentElm || null,
    _refElm: refElm || null
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    hooks[key] = componentVNodeHooks[key];
  }
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input';(data.props || (data.props = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  if (isDef(on[event])) {
    on[event] = [data.model.callback].concat(on[event]);
  } else {
    on[event] = data.model.callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
    "development" !== 'production' && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ("development" !== 'production' &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if (isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {
    defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, null, true);
    defineReactive(vm, '$listeners', options._parentListeners || emptyObject, null, true);
  }
}

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    // reset _rendered flag on slots for duplicate slot check
    if (true) {
      for (var key in vm.$slots) {
        // $flow-disable-line
        vm.$slots[key]._rendered = false;
      }
    }

    if (_parentVnode) {
      vm.$scopedSlots = _parentVnode.data.scopedSlots || emptyObject;
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if (true) {
        if (vm.$options.renderError) {
          try {
            vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
          } catch (e) {
            handleError(e, vm, "renderError");
            vnode = vm._vnode;
          }
        } else {
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ("development" !== 'production' && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ("development" !== 'production' && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {
      vm._renderProxy = vm;
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if ("development" !== 'production' && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;
  opts._parentElm = options._parentElm;
  opts._refElm = options._refElm;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var extended = Ctor.extendOptions;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = dedupe(latest[key], extended[key], sealed[key]);
    }
  }
  return modified
}

function dedupe (latest, extended, sealed) {
  // compare latest and sealed to ensure lifecycle hooks won't be duplicated
  // between merges
  if (Array.isArray(latest)) {
    var res = [];
    sealed = Array.isArray(sealed) ? sealed : [sealed];
    extended = Array.isArray(extended) ? extended : [extended];
    for (var i = 0; i < latest.length; i++) {
      // push original options and not sealed options to exclude duplicated options
      if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
        res.push(latest[i]);
      }
    }
    return res
  } else {
    return latest
  }
}

function Vue (options) {
  if ("development" !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ("development" !== 'production' && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ("development" !== 'production' && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */

function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    var this$1 = this;

    for (var key in this$1.cache) {
      pruneCacheEntry(this$1.cache, key, this$1.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
}

var builtInComponents = {
  KeepAlive: KeepAlive
}

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.5.17';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isPreTag = function (tag) { return tag === 'pre'; };

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      "development" !== 'production' && warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setStyleScope (node, scopeId) {
  node.setAttribute(scopeId, '');
}


var nodeOps = Object.freeze({
	createElement: createElement$1,
	createElementNS: createElementNS,
	createTextNode: createTextNode,
	createComment: createComment,
	insertBefore: insertBefore,
	removeChild: removeChild,
	appendChild: appendChild,
	parentNode: parentNode,
	nextSibling: nextSibling,
	tagName: tagName,
	setTextContent: setTextContent,
	setStyleScope: setStyleScope
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
}

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!isDef(key)) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove () {
      if (--remove.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove.listeners = listeners;
    return remove
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1 (vnode, inVPre) {
    return (
      !inVPre &&
      !vnode.ns &&
      !(
        config.ignoredElements.length &&
        config.ignoredElements.some(function (ignore) {
          return isRegExp(ignore)
            ? ignore.test(vnode.tag)
            : ignore === vnode.tag
        })
      ) &&
      config.isUnknownElement(vnode.tag)
    )
  }

  var creatingElmInVPre = 0;

  function createElm (
    vnode,
    insertedVnodeQueue,
    parentElm,
    refElm,
    nested,
    ownerArray,
    index
  ) {
    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // This vnode was used in a previous render!
      // now it's used as a new node, overwriting its elm would cause
      // potential patch errors down the road when it's used as an insertion
      // reference node. Instead, we clone the node on-demand before creating
      // associated DOM element for it.
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (true) {
        if (data && data.pre) {
          creatingElmInVPre++;
        }
        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }

      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if ("development" !== 'production' && data && data.pre) {
        creatingElmInVPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */, parentElm, refElm);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (ref$$1.parentNode === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      if (true) {
        checkDuplicateKeys(children);
      }
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        }
        ancestor = ancestor.parent;
      }
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      i !== vnode.fnContext &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    if (true) {
      checkDuplicateKeys(newCh);
    }

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys (children) {
    var seenKeys = {};
    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;
      if (isDef(key)) {
        if (seenKeys[key]) {
          warn(
            ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
            vnode.context
          );
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld (node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) { return i }
    }
  }

  function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
    if (oldVnode === vnode) {
      return
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).
  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || (data && data.pre);
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true
    }
    // assert node match
    if (true) {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false
      }
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if ("development" !== 'production' &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }
              return false
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if ("development" !== 'production' &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              return false
            }
          }
        }
      }
      if (isDef(data)) {
        var fullInvoke = false;
        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || (
        !isUnknownElement$$1(vnode, inVPre) &&
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue, parentElm, refElm);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else if (true) {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }

        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm$1 = nodeOps.parentNode(oldElm);

        // create new node
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm$1,
          nodeOps.nextSibling(oldElm)
        );

        // update parent placeholder node element, recursively
        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        // destroy old node
        if (isDef(parentElm$1)) {
          removeVnodes(parentElm$1, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
}

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    // $flow-disable-line
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  // $flow-disable-line
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
]

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max
  /* istanbul ignore if */
  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (el.tagName.indexOf('-') > -1) {
    baseSetAttr(el, key, value);
  } else if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
        ? 'true'
        : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    baseSetAttr(el, key, value);
  }
}

function baseSetAttr (el, key, value) {
  if (isFalsyAttrValue(value)) {
    el.removeAttribute(key);
  } else {
    // #7138: IE10 & 11 fires input event when setting placeholder on
    // <textarea>... block the first input event and remove the blocker
    // immediately.
    /* istanbul ignore if */
    if (
      isIE && !isIE9 &&
      el.tagName === 'TEXTAREA' &&
      key === 'placeholder' && !el.__ieph
    ) {
      var blocker = function (e) {
        e.stopImmediatePropagation();
        el.removeEventListener('input', blocker);
      };
      el.addEventListener('input', blocker);
      // $flow-disable-line
      el.__ieph = true; /* IE placeholder patched */
    }
    el.setAttribute(key, value);
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
}

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
}

/*  */

var validDivisionCharRE = /[\w).+\-_$\]]/;

function parseFilters (exp) {
  var inSingle = false;
  var inDouble = false;
  var inTemplateString = false;
  var inRegex = false;
  var curly = 0;
  var square = 0;
  var paren = 0;
  var lastFilterIndex = 0;
  var c, prev, i, expression, filters;

  for (i = 0; i < exp.length; i++) {
    prev = c;
    c = exp.charCodeAt(i);
    if (inSingle) {
      if (c === 0x27 && prev !== 0x5C) { inSingle = false; }
    } else if (inDouble) {
      if (c === 0x22 && prev !== 0x5C) { inDouble = false; }
    } else if (inTemplateString) {
      if (c === 0x60 && prev !== 0x5C) { inTemplateString = false; }
    } else if (inRegex) {
      if (c === 0x2f && prev !== 0x5C) { inRegex = false; }
    } else if (
      c === 0x7C && // pipe
      exp.charCodeAt(i + 1) !== 0x7C &&
      exp.charCodeAt(i - 1) !== 0x7C &&
      !curly && !square && !paren
    ) {
      if (expression === undefined) {
        // first filter, end of expression
        lastFilterIndex = i + 1;
        expression = exp.slice(0, i).trim();
      } else {
        pushFilter();
      }
    } else {
      switch (c) {
        case 0x22: inDouble = true; break         // "
        case 0x27: inSingle = true; break         // '
        case 0x60: inTemplateString = true; break // `
        case 0x28: paren++; break                 // (
        case 0x29: paren--; break                 // )
        case 0x5B: square++; break                // [
        case 0x5D: square--; break                // ]
        case 0x7B: curly++; break                 // {
        case 0x7D: curly--; break                 // }
      }
      if (c === 0x2f) { // /
        var j = i - 1;
        var p = (void 0);
        // find first non-whitespace prev char
        for (; j >= 0; j--) {
          p = exp.charAt(j);
          if (p !== ' ') { break }
        }
        if (!p || !validDivisionCharRE.test(p)) {
          inRegex = true;
        }
      }
    }
  }

  if (expression === undefined) {
    expression = exp.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }

  function pushFilter () {
    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
    lastFilterIndex = i + 1;
  }

  if (filters) {
    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i]);
    }
  }

  return expression
}

function wrapFilter (exp, filter) {
  var i = filter.indexOf('(');
  if (i < 0) {
    // _f: resolveFilter
    return ("_f(\"" + filter + "\")(" + exp + ")")
  } else {
    var name = filter.slice(0, i);
    var args = filter.slice(i + 1);
    return ("_f(\"" + name + "\")(" + exp + (args !== ')' ? ',' + args : args))
  }
}

/*  */

function baseWarn (msg) {
  console.error(("[Vue compiler]: " + msg));
}

function pluckModuleFunction (
  modules,
  key
) {
  return modules
    ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
    : []
}

function addProp (el, name, value) {
  (el.props || (el.props = [])).push({ name: name, value: value });
  el.plain = false;
}

function addAttr (el, name, value) {
  (el.attrs || (el.attrs = [])).push({ name: name, value: value });
  el.plain = false;
}

// add a raw attr (use this in preTransforms)
function addRawAttr (el, name, value) {
  el.attrsMap[name] = value;
  el.attrsList.push({ name: name, value: value });
}

function addDirective (
  el,
  name,
  rawName,
  value,
  arg,
  modifiers
) {
  (el.directives || (el.directives = [])).push({ name: name, rawName: rawName, value: value, arg: arg, modifiers: modifiers });
  el.plain = false;
}

function addHandler (
  el,
  name,
  value,
  modifiers,
  important,
  warn
) {
  modifiers = modifiers || emptyObject;
  // warn prevent and passive modifier
  /* istanbul ignore if */
  if (
    "development" !== 'production' && warn &&
    modifiers.prevent && modifiers.passive
  ) {
    warn(
      'passive and prevent can\'t be used together. ' +
      'Passive handler can\'t prevent default event.'
    );
  }

  // check capture modifier
  if (modifiers.capture) {
    delete modifiers.capture;
    name = '!' + name; // mark the event as captured
  }
  if (modifiers.once) {
    delete modifiers.once;
    name = '~' + name; // mark the event as once
  }
  /* istanbul ignore if */
  if (modifiers.passive) {
    delete modifiers.passive;
    name = '&' + name; // mark the event as passive
  }

  // normalize click.right and click.middle since they don't actually fire
  // this is technically browser-specific, but at least for now browsers are
  // the only target envs that have right/middle clicks.
  if (name === 'click') {
    if (modifiers.right) {
      name = 'contextmenu';
      delete modifiers.right;
    } else if (modifiers.middle) {
      name = 'mouseup';
    }
  }

  var events;
  if (modifiers.native) {
    delete modifiers.native;
    events = el.nativeEvents || (el.nativeEvents = {});
  } else {
    events = el.events || (el.events = {});
  }

  var newHandler = {
    value: value.trim()
  };
  if (modifiers !== emptyObject) {
    newHandler.modifiers = modifiers;
  }

  var handlers = events[name];
  /* istanbul ignore if */
  if (Array.isArray(handlers)) {
    important ? handlers.unshift(newHandler) : handlers.push(newHandler);
  } else if (handlers) {
    events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
  } else {
    events[name] = newHandler;
  }

  el.plain = false;
}

function getBindingAttr (
  el,
  name,
  getStatic
) {
  var dynamicValue =
    getAndRemoveAttr(el, ':' + name) ||
    getAndRemoveAttr(el, 'v-bind:' + name);
  if (dynamicValue != null) {
    return parseFilters(dynamicValue)
  } else if (getStatic !== false) {
    var staticValue = getAndRemoveAttr(el, name);
    if (staticValue != null) {
      return JSON.stringify(staticValue)
    }
  }
}

// note: this only removes the attr from the Array (attrsList) so that it
// doesn't get processed by processAttrs.
// By default it does NOT remove it from the map (attrsMap) because the map is
// needed during codegen.
function getAndRemoveAttr (
  el,
  name,
  removeFromMap
) {
  var val;
  if ((val = el.attrsMap[name]) != null) {
    var list = el.attrsList;
    for (var i = 0, l = list.length; i < l; i++) {
      if (list[i].name === name) {
        list.splice(i, 1);
        break
      }
    }
  }
  if (removeFromMap) {
    delete el.attrsMap[name];
  }
  return val
}

/*  */

/**
 * Cross-platform code generation for component v-model
 */
function genComponentModel (
  el,
  value,
  modifiers
) {
  var ref = modifiers || {};
  var number = ref.number;
  var trim = ref.trim;

  var baseValueExpression = '$$v';
  var valueExpression = baseValueExpression;
  if (trim) {
    valueExpression =
      "(typeof " + baseValueExpression + " === 'string'" +
      "? " + baseValueExpression + ".trim()" +
      ": " + baseValueExpression + ")";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }
  var assignment = genAssignmentCode(value, valueExpression);

  el.model = {
    value: ("(" + value + ")"),
    expression: ("\"" + value + "\""),
    callback: ("function (" + baseValueExpression + ") {" + assignment + "}")
  };
}

/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */
function genAssignmentCode (
  value,
  assignment
) {
  var res = parseModel(value);
  if (res.key === null) {
    return (value + "=" + assignment)
  } else {
    return ("$set(" + (res.exp) + ", " + (res.key) + ", " + assignment + ")")
  }
}

/**
 * Parse a v-model expression into a base path and a final key segment.
 * Handles both dot-path and possible square brackets.
 *
 * Possible cases:
 *
 * - test
 * - test[key]
 * - test[test1[key]]
 * - test["a"][key]
 * - xxx.test[a[a].test1[key]]
 * - test.xxx.a["asa"][test1[key]]
 *
 */

var len;
var str;
var chr;
var index$1;
var expressionPos;
var expressionEndPos;



function parseModel (val) {
  // Fix https://github.com/vuejs/vue/pull/7730
  // allow v-model="obj.val " (trailing whitespace)
  val = val.trim();
  len = val.length;

  if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
    index$1 = val.lastIndexOf('.');
    if (index$1 > -1) {
      return {
        exp: val.slice(0, index$1),
        key: '"' + val.slice(index$1 + 1) + '"'
      }
    } else {
      return {
        exp: val,
        key: null
      }
    }
  }

  str = val;
  index$1 = expressionPos = expressionEndPos = 0;

  while (!eof()) {
    chr = next();
    /* istanbul ignore if */
    if (isStringStart(chr)) {
      parseString(chr);
    } else if (chr === 0x5B) {
      parseBracket(chr);
    }
  }

  return {
    exp: val.slice(0, expressionPos),
    key: val.slice(expressionPos + 1, expressionEndPos)
  }
}

function next () {
  return str.charCodeAt(++index$1)
}

function eof () {
  return index$1 >= len
}

function isStringStart (chr) {
  return chr === 0x22 || chr === 0x27
}

function parseBracket (chr) {
  var inBracket = 1;
  expressionPos = index$1;
  while (!eof()) {
    chr = next();
    if (isStringStart(chr)) {
      parseString(chr);
      continue
    }
    if (chr === 0x5B) { inBracket++; }
    if (chr === 0x5D) { inBracket--; }
    if (inBracket === 0) {
      expressionEndPos = index$1;
      break
    }
  }
}

function parseString (chr) {
  var stringQuote = chr;
  while (!eof()) {
    chr = next();
    if (chr === stringQuote) {
      break
    }
  }
}

/*  */

var warn$1;

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

function model (
  el,
  dir,
  _warn
) {
  warn$1 = _warn;
  var value = dir.value;
  var modifiers = dir.modifiers;
  var tag = el.tag;
  var type = el.attrsMap.type;

  if (true) {
    // inputs with type="file" are read only and setting the input's
    // value will throw an error.
    if (tag === 'input' && type === 'file') {
      warn$1(
        "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
        "File inputs are read only. Use a v-on:change listener instead."
      );
    }
  }

  if (el.component) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (tag === 'select') {
    genSelect(el, value, modifiers);
  } else if (tag === 'input' && type === 'checkbox') {
    genCheckboxModel(el, value, modifiers);
  } else if (tag === 'input' && type === 'radio') {
    genRadioModel(el, value, modifiers);
  } else if (tag === 'input' || tag === 'textarea') {
    genDefaultModel(el, value, modifiers);
  } else if (!config.isReservedTag(tag)) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (true) {
    warn$1(
      "<" + (el.tag) + " v-model=\"" + value + "\">: " +
      "v-model is not supported on this element type. " +
      'If you are working with contenteditable, it\'s recommended to ' +
      'wrap a library dedicated for that purpose inside a custom component.'
    );
  }

  // ensure runtime directive metadata
  return true
}

function genCheckboxModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
  var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
  addProp(el, 'checked',
    "Array.isArray(" + value + ")" +
    "?_i(" + value + "," + valueBinding + ")>-1" + (
      trueValueBinding === 'true'
        ? (":(" + value + ")")
        : (":_q(" + value + "," + trueValueBinding + ")")
    )
  );
  addHandler(el, 'change',
    "var $$a=" + value + "," +
        '$$el=$event.target,' +
        "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
    'if(Array.isArray($$a)){' +
      "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
          '$$i=_i($$a,$$v);' +
      "if($$el.checked){$$i<0&&(" + (genAssignmentCode(value, '$$a.concat([$$v])')) + ")}" +
      "else{$$i>-1&&(" + (genAssignmentCode(value, '$$a.slice(0,$$i).concat($$a.slice($$i+1))')) + ")}" +
    "}else{" + (genAssignmentCode(value, '$$c')) + "}",
    null, true
  );
}

function genRadioModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
  addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
  addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
}

function genSelect (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var selectedVal = "Array.prototype.filter" +
    ".call($event.target.options,function(o){return o.selected})" +
    ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
    "return " + (number ? '_n(val)' : 'val') + "})";

  var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
  var code = "var $$selectedVal = " + selectedVal + ";";
  code = code + " " + (genAssignmentCode(value, assignment));
  addHandler(el, 'change', code, null, true);
}

function genDefaultModel (
  el,
  value,
  modifiers
) {
  var type = el.attrsMap.type;

  // warn if v-bind:value conflicts with v-model
  // except for inputs with v-bind:type
  if (true) {
    var value$1 = el.attrsMap['v-bind:value'] || el.attrsMap[':value'];
    var typeBinding = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
    if (value$1 && !typeBinding) {
      var binding = el.attrsMap['v-bind:value'] ? 'v-bind:value' : ':value';
      warn$1(
        binding + "=\"" + value$1 + "\" conflicts with v-model on the same element " +
        'because the latter already expands to a value binding internally'
      );
    }
  }

  var ref = modifiers || {};
  var lazy = ref.lazy;
  var number = ref.number;
  var trim = ref.trim;
  var needCompositionGuard = !lazy && type !== 'range';
  var event = lazy
    ? 'change'
    : type === 'range'
      ? RANGE_TOKEN
      : 'input';

  var valueExpression = '$event.target.value';
  if (trim) {
    valueExpression = "$event.target.value.trim()";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }

  var code = genAssignmentCode(value, valueExpression);
  if (needCompositionGuard) {
    code = "if($event.target.composing)return;" + code;
  }

  addProp(el, 'value', ("(" + value + ")"));
  addHandler(el, event, code, null, true);
  if (trim || number) {
    addHandler(el, 'blur', '$forceUpdate()');
  }
}

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
  /* istanbul ignore if */
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler (handler, event, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler () {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  }
}

function add$1 (
  event,
  handler,
  once$$1,
  capture,
  passive
) {
  handler = withMacroTask(handler);
  if (once$$1) { handler = createOnceHandler(handler, event, capture); }
  target$1.addEventListener(
    event,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  event,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(
    event,
    handler._withTask || handler,
    capture
  );
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
}

/*  */

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (isUndef(props[key])) {
      elm[key] = '';
    }
  }
  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
      // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property
      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else {
      elm[key] = cur;
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (elm, checkVal) {
  return (!elm.composing && (
    elm.tagName === 'OPTION' ||
    isNotInFocusAndDirty(elm, checkVal) ||
    isDirtyWithModifiers(elm, checkVal)
  ))
}

function isNotInFocusAndDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isDirtyWithModifiers (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers)) {
    if (modifiers.lazy) {
      // inputs with lazy should only be updated when not in focus
      return false
    }
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal)
    }
    if (modifiers.trim) {
      return value.trim() !== newVal.trim()
    }
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (
        childNode && childNode.data &&
        (styleData = normalizeStyleData(childNode.data))
      ) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(name, val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
}

/*  */

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def) {
  if (!def) {
    return
  }
  /* istanbul ignore else */
  if (typeof def === 'object') {
    var res = {};
    if (def.css !== false) {
      extend(res, autoCssTransition(def.name || 'v'));
    }
    extend(res, def);
    return res
  } else if (typeof def === 'string') {
    return autoCssTransition(def)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
  ? window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : setTimeout
  : /* istanbul ignore next */ function (fn) { return fn(); };

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  var transitionDelays = styles[transitionProp + 'Delay'].split(', ');
  var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = styles[animationProp + 'Delay'].split(', ');
  var animationDurations = styles[animationProp + 'Duration'].split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

function toMs (s) {
  return Number(s.slice(0, -1)) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    transitionNode = transitionNode.parent;
    context = transitionNode.context;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if ("development" !== 'production' && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      removeTransitionClass(el, startClass);
      if (!cb.cancelled) {
        addTransitionClass(el, toClass);
        if (!userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data) || el.nodeType !== 1) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb)) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if ("development" !== 'production' && isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled) {
          addTransitionClass(el, leaveToClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {}

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
]

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted (el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        el.addEventListener('compositionstart', onCompositionStart);
        el.addEventListener('compositionend', onCompositionEnd);
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },

  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple
          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected (el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    "development" !== 'production' && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  return options.every(function (o) { return !looseEqual(o, value); })
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (!value === !oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
}

var platformDirectives = {
  model: directive,
  show: show
}

/*  */

// Provides transition support for a single element/component.
// supports transition mode (out-in / in-out)

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(function (c) { return c.tag || isAsyncPlaceholder(c); });
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if ("development" !== 'production' && children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if ("development" !== 'production' &&
      mode && mode !== 'in-out' && mode !== 'out-in'
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(function (d) { return d.name === 'show'; })) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild) &&
      // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
}

/*  */

// Provides transition support for list items.
// supports move transitions using the FLIP technique.

// Because the vdom's children update algorithm is "unstable" - i.e.
// it doesn't guarantee the relative positioning of removed elements,
// we force transition-group to update its children into two passes:
// in the first pass, we remove all nodes that need to be removed,
// triggering their leaving transition; in the second pass, we insert/move
// into the final desired state. This way in the second pass removed
// nodes will remain where they should be.

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else if (true) {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  beforeUpdate: function beforeUpdate () {
    // force removing pass
    this.__patch__(
      this._vnode,
      this.kept,
      false, // hydrating
      true // removeOnly (!important, avoids unnecessary moves)
    );
    this._vnode = this.kept;
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line
    this._reflow = document.body.offsetHeight;

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
}

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
}

/*  */

// install platform specific utils
Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents);

// install platform patch function
Vue.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
if (inBrowser) {
  setTimeout(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue);
      } else if (
        "development" !== 'production' &&
        "development" !== 'test' &&
        isChrome
      ) {
        console[console.info ? 'info' : 'log'](
          'Download the Vue Devtools extension for a better development experience:\n' +
          'https://github.com/vuejs/vue-devtools'
        );
      }
    }
    if ("development" !== 'production' &&
      "development" !== 'test' &&
      config.productionTip !== false &&
      typeof console !== 'undefined'
    ) {
      console[console.info ? 'info' : 'log'](
        "You are running Vue in development mode.\n" +
        "Make sure to turn on production mode when deploying for production.\n" +
        "See more tips at https://vuejs.org/guide/deployment.html"
      );
    }
  }, 0);
}

/*  */

var defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g;
var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

var buildRegex = cached(function (delimiters) {
  var open = delimiters[0].replace(regexEscapeRE, '\\$&');
  var close = delimiters[1].replace(regexEscapeRE, '\\$&');
  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
});



function parseText (
  text,
  delimiters
) {
  var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
  if (!tagRE.test(text)) {
    return
  }
  var tokens = [];
  var rawTokens = [];
  var lastIndex = tagRE.lastIndex = 0;
  var match, index, tokenValue;
  while ((match = tagRE.exec(text))) {
    index = match.index;
    // push text token
    if (index > lastIndex) {
      rawTokens.push(tokenValue = text.slice(lastIndex, index));
      tokens.push(JSON.stringify(tokenValue));
    }
    // tag token
    var exp = parseFilters(match[1].trim());
    tokens.push(("_s(" + exp + ")"));
    rawTokens.push({ '@binding': exp });
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) {
    rawTokens.push(tokenValue = text.slice(lastIndex));
    tokens.push(JSON.stringify(tokenValue));
  }
  return {
    expression: tokens.join('+'),
    tokens: rawTokens
  }
}

/*  */

function transformNode (el, options) {
  var warn = options.warn || baseWarn;
  var staticClass = getAndRemoveAttr(el, 'class');
  if ("development" !== 'production' && staticClass) {
    var res = parseText(staticClass, options.delimiters);
    if (res) {
      warn(
        "class=\"" + staticClass + "\": " +
        'Interpolation inside attributes has been removed. ' +
        'Use v-bind or the colon shorthand instead. For example, ' +
        'instead of <div class="{{ val }}">, use <div :class="val">.'
      );
    }
  }
  if (staticClass) {
    el.staticClass = JSON.stringify(staticClass);
  }
  var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
  if (classBinding) {
    el.classBinding = classBinding;
  }
}

function genData (el) {
  var data = '';
  if (el.staticClass) {
    data += "staticClass:" + (el.staticClass) + ",";
  }
  if (el.classBinding) {
    data += "class:" + (el.classBinding) + ",";
  }
  return data
}

var klass$1 = {
  staticKeys: ['staticClass'],
  transformNode: transformNode,
  genData: genData
}

/*  */

function transformNode$1 (el, options) {
  var warn = options.warn || baseWarn;
  var staticStyle = getAndRemoveAttr(el, 'style');
  if (staticStyle) {
    /* istanbul ignore if */
    if (true) {
      var res = parseText(staticStyle, options.delimiters);
      if (res) {
        warn(
          "style=\"" + staticStyle + "\": " +
          'Interpolation inside attributes has been removed. ' +
          'Use v-bind or the colon shorthand instead. For example, ' +
          'instead of <div style="{{ val }}">, use <div :style="val">.'
        );
      }
    }
    el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
  }

  var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
  if (styleBinding) {
    el.styleBinding = styleBinding;
  }
}

function genData$1 (el) {
  var data = '';
  if (el.staticStyle) {
    data += "staticStyle:" + (el.staticStyle) + ",";
  }
  if (el.styleBinding) {
    data += "style:(" + (el.styleBinding) + "),";
  }
  return data
}

var style$1 = {
  staticKeys: ['staticStyle'],
  transformNode: transformNode$1,
  genData: genData$1
}

/*  */

var decoder;

var he = {
  decode: function decode (html) {
    decoder = decoder || document.createElement('div');
    decoder.innerHTML = html;
    return decoder.textContent
  }
}

/*  */

var isUnaryTag = makeMap(
  'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
  'link,meta,param,source,track,wbr'
);

// Elements that you can, intentionally, leave open
// (and which close themselves)
var canBeLeftOpenTag = makeMap(
  'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
);

// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
var isNonPhrasingTag = makeMap(
  'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
  'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
  'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
  'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
  'title,tr,track'
);

/**
 * Not type-checking this file because it's mostly vendor code.
 */

/*!
 * HTML Parser By John Resig (ejohn.org)
 * Modified by Juriy "kangax" Zaytsev
 * Original code by Erik Arvidsson, Mozilla Public License
 * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
 */

// Regular Expressions for parsing tags and attributes
var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
// could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
// but for Vue templates we can enforce a simple charset
var ncname = '[a-zA-Z_][\\w\\-\\.]*';
var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
var startTagOpen = new RegExp(("^<" + qnameCapture));
var startTagClose = /^\s*(\/?)>/;
var endTag = new RegExp(("^<\\/" + qnameCapture + "[^>]*>"));
var doctype = /^<!DOCTYPE [^>]+>/i;
// #7298: escape - to avoid being pased as HTML comment when inlined in page
var comment = /^<!\--/;
var conditionalComment = /^<!\[/;

var IS_REGEX_CAPTURING_BROKEN = false;
'x'.replace(/x(.)?/g, function (m, g) {
  IS_REGEX_CAPTURING_BROKEN = g === '';
});

// Special Elements (can contain anything)
var isPlainTextElement = makeMap('script,style,textarea', true);
var reCache = {};

var decodingMap = {
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&amp;': '&',
  '&#10;': '\n',
  '&#9;': '\t'
};
var encodedAttr = /&(?:lt|gt|quot|amp);/g;
var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#10|#9);/g;

// #5992
var isIgnoreNewlineTag = makeMap('pre,textarea', true);
var shouldIgnoreFirstNewline = function (tag, html) { return tag && isIgnoreNewlineTag(tag) && html[0] === '\n'; };

function decodeAttr (value, shouldDecodeNewlines) {
  var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
  return value.replace(re, function (match) { return decodingMap[match]; })
}

function parseHTML (html, options) {
  var stack = [];
  var expectHTML = options.expectHTML;
  var isUnaryTag$$1 = options.isUnaryTag || no;
  var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
  var index = 0;
  var last, lastTag;
  while (html) {
    last = html;
    // Make sure we're not in a plaintext content element like script/style
    if (!lastTag || !isPlainTextElement(lastTag)) {
      var textEnd = html.indexOf('<');
      if (textEnd === 0) {
        // Comment:
        if (comment.test(html)) {
          var commentEnd = html.indexOf('-->');

          if (commentEnd >= 0) {
            if (options.shouldKeepComment) {
              options.comment(html.substring(4, commentEnd));
            }
            advance(commentEnd + 3);
            continue
          }
        }

        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
        if (conditionalComment.test(html)) {
          var conditionalEnd = html.indexOf(']>');

          if (conditionalEnd >= 0) {
            advance(conditionalEnd + 2);
            continue
          }
        }

        // Doctype:
        var doctypeMatch = html.match(doctype);
        if (doctypeMatch) {
          advance(doctypeMatch[0].length);
          continue
        }

        // End tag:
        var endTagMatch = html.match(endTag);
        if (endTagMatch) {
          var curIndex = index;
          advance(endTagMatch[0].length);
          parseEndTag(endTagMatch[1], curIndex, index);
          continue
        }

        // Start tag:
        var startTagMatch = parseStartTag();
        if (startTagMatch) {
          handleStartTag(startTagMatch);
          if (shouldIgnoreFirstNewline(lastTag, html)) {
            advance(1);
          }
          continue
        }
      }

      var text = (void 0), rest = (void 0), next = (void 0);
      if (textEnd >= 0) {
        rest = html.slice(textEnd);
        while (
          !endTag.test(rest) &&
          !startTagOpen.test(rest) &&
          !comment.test(rest) &&
          !conditionalComment.test(rest)
        ) {
          // < in plain text, be forgiving and treat it as text
          next = rest.indexOf('<', 1);
          if (next < 0) { break }
          textEnd += next;
          rest = html.slice(textEnd);
        }
        text = html.substring(0, textEnd);
        advance(textEnd);
      }

      if (textEnd < 0) {
        text = html;
        html = '';
      }

      if (options.chars && text) {
        options.chars(text);
      }
    } else {
      var endTagLength = 0;
      var stackedTag = lastTag.toLowerCase();
      var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
      var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
        endTagLength = endTag.length;
        if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
          text = text
            .replace(/<!\--([\s\S]*?)-->/g, '$1') // #7298
            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
        }
        if (shouldIgnoreFirstNewline(stackedTag, text)) {
          text = text.slice(1);
        }
        if (options.chars) {
          options.chars(text);
        }
        return ''
      });
      index += html.length - rest$1.length;
      html = rest$1;
      parseEndTag(stackedTag, index - endTagLength, index);
    }

    if (html === last) {
      options.chars && options.chars(html);
      if ("development" !== 'production' && !stack.length && options.warn) {
        options.warn(("Mal-formatted tag at end of template: \"" + html + "\""));
      }
      break
    }
  }

  // Clean up any remaining tags
  parseEndTag();

  function advance (n) {
    index += n;
    html = html.substring(n);
  }

  function parseStartTag () {
    var start = html.match(startTagOpen);
    if (start) {
      var match = {
        tagName: start[1],
        attrs: [],
        start: index
      };
      advance(start[0].length);
      var end, attr;
      while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
        advance(attr[0].length);
        match.attrs.push(attr);
      }
      if (end) {
        match.unarySlash = end[1];
        advance(end[0].length);
        match.end = index;
        return match
      }
    }
  }

  function handleStartTag (match) {
    var tagName = match.tagName;
    var unarySlash = match.unarySlash;

    if (expectHTML) {
      if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
        parseEndTag(lastTag);
      }
      if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
        parseEndTag(tagName);
      }
    }

    var unary = isUnaryTag$$1(tagName) || !!unarySlash;

    var l = match.attrs.length;
    var attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      var args = match.attrs[i];
      // hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778
      if (IS_REGEX_CAPTURING_BROKEN && args[0].indexOf('""') === -1) {
        if (args[3] === '') { delete args[3]; }
        if (args[4] === '') { delete args[4]; }
        if (args[5] === '') { delete args[5]; }
      }
      var value = args[3] || args[4] || args[5] || '';
      var shouldDecodeNewlines = tagName === 'a' && args[1] === 'href'
        ? options.shouldDecodeNewlinesForHref
        : options.shouldDecodeNewlines;
      attrs[i] = {
        name: args[1],
        value: decodeAttr(value, shouldDecodeNewlines)
      };
    }

    if (!unary) {
      stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs });
      lastTag = tagName;
    }

    if (options.start) {
      options.start(tagName, attrs, unary, match.start, match.end);
    }
  }

  function parseEndTag (tagName, start, end) {
    var pos, lowerCasedTagName;
    if (start == null) { start = index; }
    if (end == null) { end = index; }

    if (tagName) {
      lowerCasedTagName = tagName.toLowerCase();
    }

    // Find the closest opened tag of the same type
    if (tagName) {
      for (pos = stack.length - 1; pos >= 0; pos--) {
        if (stack[pos].lowerCasedTag === lowerCasedTagName) {
          break
        }
      }
    } else {
      // If no tag name is provided, clean shop
      pos = 0;
    }

    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (var i = stack.length - 1; i >= pos; i--) {
        if ("development" !== 'production' &&
          (i > pos || !tagName) &&
          options.warn
        ) {
          options.warn(
            ("tag <" + (stack[i].tag) + "> has no matching end tag.")
          );
        }
        if (options.end) {
          options.end(stack[i].tag, start, end);
        }
      }

      // Remove the open elements from the stack
      stack.length = pos;
      lastTag = pos && stack[pos - 1].tag;
    } else if (lowerCasedTagName === 'br') {
      if (options.start) {
        options.start(tagName, [], true, start, end);
      }
    } else if (lowerCasedTagName === 'p') {
      if (options.start) {
        options.start(tagName, [], false, start, end);
      }
      if (options.end) {
        options.end(tagName, start, end);
      }
    }
  }
}

/*  */

var onRE = /^@|^v-on:/;
var dirRE = /^v-|^@|^:/;
var forAliasRE = /([^]*?)\s+(?:in|of)\s+([^]*)/;
var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
var stripParensRE = /^\(|\)$/g;

var argRE = /:(.*)$/;
var bindRE = /^:|^v-bind:/;
var modifierRE = /\.[^.]+/g;

var decodeHTMLCached = cached(he.decode);

// configurable state
var warn$2;
var delimiters;
var transforms;
var preTransforms;
var postTransforms;
var platformIsPreTag;
var platformMustUseProp;
var platformGetTagNamespace;



function createASTElement (
  tag,
  attrs,
  parent
) {
  return {
    type: 1,
    tag: tag,
    attrsList: attrs,
    attrsMap: makeAttrsMap(attrs),
    parent: parent,
    children: []
  }
}

/**
 * Convert HTML string to AST.
 */
function parse (
  template,
  options
) {
  warn$2 = options.warn || baseWarn;

  platformIsPreTag = options.isPreTag || no;
  platformMustUseProp = options.mustUseProp || no;
  platformGetTagNamespace = options.getTagNamespace || no;

  transforms = pluckModuleFunction(options.modules, 'transformNode');
  preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
  postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');

  delimiters = options.delimiters;

  var stack = [];
  var preserveWhitespace = options.preserveWhitespace !== false;
  var root;
  var currentParent;
  var inVPre = false;
  var inPre = false;
  var warned = false;

  function warnOnce (msg) {
    if (!warned) {
      warned = true;
      warn$2(msg);
    }
  }

  function closeElement (element) {
    // check pre state
    if (element.pre) {
      inVPre = false;
    }
    if (platformIsPreTag(element.tag)) {
      inPre = false;
    }
    // apply post-transforms
    for (var i = 0; i < postTransforms.length; i++) {
      postTransforms[i](element, options);
    }
  }

  parseHTML(template, {
    warn: warn$2,
    expectHTML: options.expectHTML,
    isUnaryTag: options.isUnaryTag,
    canBeLeftOpenTag: options.canBeLeftOpenTag,
    shouldDecodeNewlines: options.shouldDecodeNewlines,
    shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
    shouldKeepComment: options.comments,
    start: function start (tag, attrs, unary) {
      // check namespace.
      // inherit parent ns if there is one
      var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

      // handle IE svg bug
      /* istanbul ignore if */
      if (isIE && ns === 'svg') {
        attrs = guardIESVGBug(attrs);
      }

      var element = createASTElement(tag, attrs, currentParent);
      if (ns) {
        element.ns = ns;
      }

      if (isForbiddenTag(element) && !isServerRendering()) {
        element.forbidden = true;
        "development" !== 'production' && warn$2(
          'Templates should only be responsible for mapping the state to the ' +
          'UI. Avoid placing tags with side-effects in your templates, such as ' +
          "<" + tag + ">" + ', as they will not be parsed.'
        );
      }

      // apply pre-transforms
      for (var i = 0; i < preTransforms.length; i++) {
        element = preTransforms[i](element, options) || element;
      }

      if (!inVPre) {
        processPre(element);
        if (element.pre) {
          inVPre = true;
        }
      }
      if (platformIsPreTag(element.tag)) {
        inPre = true;
      }
      if (inVPre) {
        processRawAttrs(element);
      } else if (!element.processed) {
        // structural directives
        processFor(element);
        processIf(element);
        processOnce(element);
        // element-scope stuff
        processElement(element, options);
      }

      function checkRootConstraints (el) {
        if (true) {
          if (el.tag === 'slot' || el.tag === 'template') {
            warnOnce(
              "Cannot use <" + (el.tag) + "> as component root element because it may " +
              'contain multiple nodes.'
            );
          }
          if (el.attrsMap.hasOwnProperty('v-for')) {
            warnOnce(
              'Cannot use v-for on stateful component root element because ' +
              'it renders multiple elements.'
            );
          }
        }
      }

      // tree management
      if (!root) {
        root = element;
        checkRootConstraints(root);
      } else if (!stack.length) {
        // allow root elements with v-if, v-else-if and v-else
        if (root.if && (element.elseif || element.else)) {
          checkRootConstraints(element);
          addIfCondition(root, {
            exp: element.elseif,
            block: element
          });
        } else if (true) {
          warnOnce(
            "Component template should contain exactly one root element. " +
            "If you are using v-if on multiple elements, " +
            "use v-else-if to chain them instead."
          );
        }
      }
      if (currentParent && !element.forbidden) {
        if (element.elseif || element.else) {
          processIfConditions(element, currentParent);
        } else if (element.slotScope) { // scoped slot
          currentParent.plain = false;
          var name = element.slotTarget || '"default"';(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
        } else {
          currentParent.children.push(element);
          element.parent = currentParent;
        }
      }
      if (!unary) {
        currentParent = element;
        stack.push(element);
      } else {
        closeElement(element);
      }
    },

    end: function end () {
      // remove trailing whitespace
      var element = stack[stack.length - 1];
      var lastNode = element.children[element.children.length - 1];
      if (lastNode && lastNode.type === 3 && lastNode.text === ' ' && !inPre) {
        element.children.pop();
      }
      // pop stack
      stack.length -= 1;
      currentParent = stack[stack.length - 1];
      closeElement(element);
    },

    chars: function chars (text) {
      if (!currentParent) {
        if (true) {
          if (text === template) {
            warnOnce(
              'Component template requires a root element, rather than just text.'
            );
          } else if ((text = text.trim())) {
            warnOnce(
              ("text \"" + text + "\" outside root element will be ignored.")
            );
          }
        }
        return
      }
      // IE textarea placeholder bug
      /* istanbul ignore if */
      if (isIE &&
        currentParent.tag === 'textarea' &&
        currentParent.attrsMap.placeholder === text
      ) {
        return
      }
      var children = currentParent.children;
      text = inPre || text.trim()
        ? isTextTag(currentParent) ? text : decodeHTMLCached(text)
        // only preserve whitespace if its not right after a starting tag
        : preserveWhitespace && children.length ? ' ' : '';
      if (text) {
        var res;
        if (!inVPre && text !== ' ' && (res = parseText(text, delimiters))) {
          children.push({
            type: 2,
            expression: res.expression,
            tokens: res.tokens,
            text: text
          });
        } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
          children.push({
            type: 3,
            text: text
          });
        }
      }
    },
    comment: function comment (text) {
      currentParent.children.push({
        type: 3,
        text: text,
        isComment: true
      });
    }
  });
  return root
}

function processPre (el) {
  if (getAndRemoveAttr(el, 'v-pre') != null) {
    el.pre = true;
  }
}

function processRawAttrs (el) {
  var l = el.attrsList.length;
  if (l) {
    var attrs = el.attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      attrs[i] = {
        name: el.attrsList[i].name,
        value: JSON.stringify(el.attrsList[i].value)
      };
    }
  } else if (!el.pre) {
    // non root node in pre blocks with no attributes
    el.plain = true;
  }
}

function processElement (element, options) {
  processKey(element);

  // determine whether this is a plain element after
  // removing structural attributes
  element.plain = !element.key && !element.attrsList.length;

  processRef(element);
  processSlot(element);
  processComponent(element);
  for (var i = 0; i < transforms.length; i++) {
    element = transforms[i](element, options) || element;
  }
  processAttrs(element);
}

function processKey (el) {
  var exp = getBindingAttr(el, 'key');
  if (exp) {
    if ("development" !== 'production' && el.tag === 'template') {
      warn$2("<template> cannot be keyed. Place the key on real elements instead.");
    }
    el.key = exp;
  }
}

function processRef (el) {
  var ref = getBindingAttr(el, 'ref');
  if (ref) {
    el.ref = ref;
    el.refInFor = checkInFor(el);
  }
}

function processFor (el) {
  var exp;
  if ((exp = getAndRemoveAttr(el, 'v-for'))) {
    var res = parseFor(exp);
    if (res) {
      extend(el, res);
    } else if (true) {
      warn$2(
        ("Invalid v-for expression: " + exp)
      );
    }
  }
}



function parseFor (exp) {
  var inMatch = exp.match(forAliasRE);
  if (!inMatch) { return }
  var res = {};
  res.for = inMatch[2].trim();
  var alias = inMatch[1].trim().replace(stripParensRE, '');
  var iteratorMatch = alias.match(forIteratorRE);
  if (iteratorMatch) {
    res.alias = alias.replace(forIteratorRE, '');
    res.iterator1 = iteratorMatch[1].trim();
    if (iteratorMatch[2]) {
      res.iterator2 = iteratorMatch[2].trim();
    }
  } else {
    res.alias = alias;
  }
  return res
}

function processIf (el) {
  var exp = getAndRemoveAttr(el, 'v-if');
  if (exp) {
    el.if = exp;
    addIfCondition(el, {
      exp: exp,
      block: el
    });
  } else {
    if (getAndRemoveAttr(el, 'v-else') != null) {
      el.else = true;
    }
    var elseif = getAndRemoveAttr(el, 'v-else-if');
    if (elseif) {
      el.elseif = elseif;
    }
  }
}

function processIfConditions (el, parent) {
  var prev = findPrevElement(parent.children);
  if (prev && prev.if) {
    addIfCondition(prev, {
      exp: el.elseif,
      block: el
    });
  } else if (true) {
    warn$2(
      "v-" + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + " " +
      "used on element <" + (el.tag) + "> without corresponding v-if."
    );
  }
}

function findPrevElement (children) {
  var i = children.length;
  while (i--) {
    if (children[i].type === 1) {
      return children[i]
    } else {
      if ("development" !== 'production' && children[i].text !== ' ') {
        warn$2(
          "text \"" + (children[i].text.trim()) + "\" between v-if and v-else(-if) " +
          "will be ignored."
        );
      }
      children.pop();
    }
  }
}

function addIfCondition (el, condition) {
  if (!el.ifConditions) {
    el.ifConditions = [];
  }
  el.ifConditions.push(condition);
}

function processOnce (el) {
  var once$$1 = getAndRemoveAttr(el, 'v-once');
  if (once$$1 != null) {
    el.once = true;
  }
}

function processSlot (el) {
  if (el.tag === 'slot') {
    el.slotName = getBindingAttr(el, 'name');
    if ("development" !== 'production' && el.key) {
      warn$2(
        "`key` does not work on <slot> because slots are abstract outlets " +
        "and can possibly expand into multiple elements. " +
        "Use the key on a wrapping element instead."
      );
    }
  } else {
    var slotScope;
    if (el.tag === 'template') {
      slotScope = getAndRemoveAttr(el, 'scope');
      /* istanbul ignore if */
      if ("development" !== 'production' && slotScope) {
        warn$2(
          "the \"scope\" attribute for scoped slots have been deprecated and " +
          "replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute " +
          "can also be used on plain elements in addition to <template> to " +
          "denote scoped slots.",
          true
        );
      }
      el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
    } else if ((slotScope = getAndRemoveAttr(el, 'slot-scope'))) {
      /* istanbul ignore if */
      if ("development" !== 'production' && el.attrsMap['v-for']) {
        warn$2(
          "Ambiguous combined usage of slot-scope and v-for on <" + (el.tag) + "> " +
          "(v-for takes higher priority). Use a wrapper <template> for the " +
          "scoped slot to make it clearer.",
          true
        );
      }
      el.slotScope = slotScope;
    }
    var slotTarget = getBindingAttr(el, 'slot');
    if (slotTarget) {
      el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
      // preserve slot as an attribute for native shadow DOM compat
      // only for non-scoped slots.
      if (el.tag !== 'template' && !el.slotScope) {
        addAttr(el, 'slot', slotTarget);
      }
    }
  }
}

function processComponent (el) {
  var binding;
  if ((binding = getBindingAttr(el, 'is'))) {
    el.component = binding;
  }
  if (getAndRemoveAttr(el, 'inline-template') != null) {
    el.inlineTemplate = true;
  }
}

function processAttrs (el) {
  var list = el.attrsList;
  var i, l, name, rawName, value, modifiers, isProp;
  for (i = 0, l = list.length; i < l; i++) {
    name = rawName = list[i].name;
    value = list[i].value;
    if (dirRE.test(name)) {
      // mark element as dynamic
      el.hasBindings = true;
      // modifiers
      modifiers = parseModifiers(name);
      if (modifiers) {
        name = name.replace(modifierRE, '');
      }
      if (bindRE.test(name)) { // v-bind
        name = name.replace(bindRE, '');
        value = parseFilters(value);
        isProp = false;
        if (modifiers) {
          if (modifiers.prop) {
            isProp = true;
            name = camelize(name);
            if (name === 'innerHtml') { name = 'innerHTML'; }
          }
          if (modifiers.camel) {
            name = camelize(name);
          }
          if (modifiers.sync) {
            addHandler(
              el,
              ("update:" + (camelize(name))),
              genAssignmentCode(value, "$event")
            );
          }
        }
        if (isProp || (
          !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)
        )) {
          addProp(el, name, value);
        } else {
          addAttr(el, name, value);
        }
      } else if (onRE.test(name)) { // v-on
        name = name.replace(onRE, '');
        addHandler(el, name, value, modifiers, false, warn$2);
      } else { // normal directives
        name = name.replace(dirRE, '');
        // parse arg
        var argMatch = name.match(argRE);
        var arg = argMatch && argMatch[1];
        if (arg) {
          name = name.slice(0, -(arg.length + 1));
        }
        addDirective(el, name, rawName, value, arg, modifiers);
        if ("development" !== 'production' && name === 'model') {
          checkForAliasModel(el, value);
        }
      }
    } else {
      // literal attribute
      if (true) {
        var res = parseText(value, delimiters);
        if (res) {
          warn$2(
            name + "=\"" + value + "\": " +
            'Interpolation inside attributes has been removed. ' +
            'Use v-bind or the colon shorthand instead. For example, ' +
            'instead of <div id="{{ val }}">, use <div :id="val">.'
          );
        }
      }
      addAttr(el, name, JSON.stringify(value));
      // #6887 firefox doesn't update muted state if set via attribute
      // even immediately after element creation
      if (!el.component &&
          name === 'muted' &&
          platformMustUseProp(el.tag, el.attrsMap.type, name)) {
        addProp(el, name, 'true');
      }
    }
  }
}

function checkInFor (el) {
  var parent = el;
  while (parent) {
    if (parent.for !== undefined) {
      return true
    }
    parent = parent.parent;
  }
  return false
}

function parseModifiers (name) {
  var match = name.match(modifierRE);
  if (match) {
    var ret = {};
    match.forEach(function (m) { ret[m.slice(1)] = true; });
    return ret
  }
}

function makeAttrsMap (attrs) {
  var map = {};
  for (var i = 0, l = attrs.length; i < l; i++) {
    if (
      "development" !== 'production' &&
      map[attrs[i].name] && !isIE && !isEdge
    ) {
      warn$2('duplicate attribute: ' + attrs[i].name);
    }
    map[attrs[i].name] = attrs[i].value;
  }
  return map
}

// for script (e.g. type="x/template") or style, do not decode content
function isTextTag (el) {
  return el.tag === 'script' || el.tag === 'style'
}

function isForbiddenTag (el) {
  return (
    el.tag === 'style' ||
    (el.tag === 'script' && (
      !el.attrsMap.type ||
      el.attrsMap.type === 'text/javascript'
    ))
  )
}

var ieNSBug = /^xmlns:NS\d+/;
var ieNSPrefix = /^NS\d+:/;

/* istanbul ignore next */
function guardIESVGBug (attrs) {
  var res = [];
  for (var i = 0; i < attrs.length; i++) {
    var attr = attrs[i];
    if (!ieNSBug.test(attr.name)) {
      attr.name = attr.name.replace(ieNSPrefix, '');
      res.push(attr);
    }
  }
  return res
}

function checkForAliasModel (el, value) {
  var _el = el;
  while (_el) {
    if (_el.for && _el.alias === value) {
      warn$2(
        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
        "You are binding v-model directly to a v-for iteration alias. " +
        "This will not be able to modify the v-for source array because " +
        "writing to the alias is like modifying a function local variable. " +
        "Consider using an array of objects and use v-model on an object property instead."
      );
    }
    _el = _el.parent;
  }
}

/*  */

/**
 * Expand input[v-model] with dyanmic type bindings into v-if-else chains
 * Turn this:
 *   <input v-model="data[type]" :type="type">
 * into this:
 *   <input v-if="type === 'checkbox'" type="checkbox" v-model="data[type]">
 *   <input v-else-if="type === 'radio'" type="radio" v-model="data[type]">
 *   <input v-else :type="type" v-model="data[type]">
 */

function preTransformNode (el, options) {
  if (el.tag === 'input') {
    var map = el.attrsMap;
    if (!map['v-model']) {
      return
    }

    var typeBinding;
    if (map[':type'] || map['v-bind:type']) {
      typeBinding = getBindingAttr(el, 'type');
    }
    if (!map.type && !typeBinding && map['v-bind']) {
      typeBinding = "(" + (map['v-bind']) + ").type";
    }

    if (typeBinding) {
      var ifCondition = getAndRemoveAttr(el, 'v-if', true);
      var ifConditionExtra = ifCondition ? ("&&(" + ifCondition + ")") : "";
      var hasElse = getAndRemoveAttr(el, 'v-else', true) != null;
      var elseIfCondition = getAndRemoveAttr(el, 'v-else-if', true);
      // 1. checkbox
      var branch0 = cloneASTElement(el);
      // process for on the main node
      processFor(branch0);
      addRawAttr(branch0, 'type', 'checkbox');
      processElement(branch0, options);
      branch0.processed = true; // prevent it from double-processed
      branch0.if = "(" + typeBinding + ")==='checkbox'" + ifConditionExtra;
      addIfCondition(branch0, {
        exp: branch0.if,
        block: branch0
      });
      // 2. add radio else-if condition
      var branch1 = cloneASTElement(el);
      getAndRemoveAttr(branch1, 'v-for', true);
      addRawAttr(branch1, 'type', 'radio');
      processElement(branch1, options);
      addIfCondition(branch0, {
        exp: "(" + typeBinding + ")==='radio'" + ifConditionExtra,
        block: branch1
      });
      // 3. other
      var branch2 = cloneASTElement(el);
      getAndRemoveAttr(branch2, 'v-for', true);
      addRawAttr(branch2, ':type', typeBinding);
      processElement(branch2, options);
      addIfCondition(branch0, {
        exp: ifCondition,
        block: branch2
      });

      if (hasElse) {
        branch0.else = true;
      } else if (elseIfCondition) {
        branch0.elseif = elseIfCondition;
      }

      return branch0
    }
  }
}

function cloneASTElement (el) {
  return createASTElement(el.tag, el.attrsList.slice(), el.parent)
}

var model$2 = {
  preTransformNode: preTransformNode
}

var modules$1 = [
  klass$1,
  style$1,
  model$2
]

/*  */

function text (el, dir) {
  if (dir.value) {
    addProp(el, 'textContent', ("_s(" + (dir.value) + ")"));
  }
}

/*  */

function html (el, dir) {
  if (dir.value) {
    addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"));
  }
}

var directives$1 = {
  model: model,
  text: text,
  html: html
}

/*  */

var baseOptions = {
  expectHTML: true,
  modules: modules$1,
  directives: directives$1,
  isPreTag: isPreTag,
  isUnaryTag: isUnaryTag,
  mustUseProp: mustUseProp,
  canBeLeftOpenTag: canBeLeftOpenTag,
  isReservedTag: isReservedTag,
  getTagNamespace: getTagNamespace,
  staticKeys: genStaticKeys(modules$1)
};

/*  */

var isStaticKey;
var isPlatformReservedTag;

var genStaticKeysCached = cached(genStaticKeys$1);

/**
 * Goal of the optimizer: walk the generated template AST tree
 * and detect sub-trees that are purely static, i.e. parts of
 * the DOM that never needs to change.
 *
 * Once we detect these sub-trees, we can:
 *
 * 1. Hoist them into constants, so that we no longer need to
 *    create fresh nodes for them on each re-render;
 * 2. Completely skip them in the patching process.
 */
function optimize (root, options) {
  if (!root) { return }
  isStaticKey = genStaticKeysCached(options.staticKeys || '');
  isPlatformReservedTag = options.isReservedTag || no;
  // first pass: mark all non-static nodes.
  markStatic$1(root);
  // second pass: mark static roots.
  markStaticRoots(root, false);
}

function genStaticKeys$1 (keys) {
  return makeMap(
    'type,tag,attrsList,attrsMap,plain,parent,children,attrs' +
    (keys ? ',' + keys : '')
  )
}

function markStatic$1 (node) {
  node.static = isStatic(node);
  if (node.type === 1) {
    // do not make component slot content static. this avoids
    // 1. components not able to mutate slot nodes
    // 2. static slot content fails for hot-reloading
    if (
      !isPlatformReservedTag(node.tag) &&
      node.tag !== 'slot' &&
      node.attrsMap['inline-template'] == null
    ) {
      return
    }
    for (var i = 0, l = node.children.length; i < l; i++) {
      var child = node.children[i];
      markStatic$1(child);
      if (!child.static) {
        node.static = false;
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        var block = node.ifConditions[i$1].block;
        markStatic$1(block);
        if (!block.static) {
          node.static = false;
        }
      }
    }
  }
}

function markStaticRoots (node, isInFor) {
  if (node.type === 1) {
    if (node.static || node.once) {
      node.staticInFor = isInFor;
    }
    // For a node to qualify as a static root, it should have children that
    // are not just static text. Otherwise the cost of hoisting out will
    // outweigh the benefits and it's better off to just always render it fresh.
    if (node.static && node.children.length && !(
      node.children.length === 1 &&
      node.children[0].type === 3
    )) {
      node.staticRoot = true;
      return
    } else {
      node.staticRoot = false;
    }
    if (node.children) {
      for (var i = 0, l = node.children.length; i < l; i++) {
        markStaticRoots(node.children[i], isInFor || !!node.for);
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        markStaticRoots(node.ifConditions[i$1].block, isInFor);
      }
    }
  }
}

function isStatic (node) {
  if (node.type === 2) { // expression
    return false
  }
  if (node.type === 3) { // text
    return true
  }
  return !!(node.pre || (
    !node.hasBindings && // no dynamic bindings
    !node.if && !node.for && // not v-if or v-for or v-else
    !isBuiltInTag(node.tag) && // not a built-in
    isPlatformReservedTag(node.tag) && // not a component
    !isDirectChildOfTemplateFor(node) &&
    Object.keys(node).every(isStaticKey)
  ))
}

function isDirectChildOfTemplateFor (node) {
  while (node.parent) {
    node = node.parent;
    if (node.tag !== 'template') {
      return false
    }
    if (node.for) {
      return true
    }
  }
  return false
}

/*  */

var fnExpRE = /^([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/;
var simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/;

// KeyboardEvent.keyCode aliases
var keyCodes = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  up: 38,
  left: 37,
  right: 39,
  down: 40,
  'delete': [8, 46]
};

// KeyboardEvent.key aliases
var keyNames = {
  esc: 'Escape',
  tab: 'Tab',
  enter: 'Enter',
  space: ' ',
  // #7806: IE11 uses key names without `Arrow` prefix for arrow keys.
  up: ['Up', 'ArrowUp'],
  left: ['Left', 'ArrowLeft'],
  right: ['Right', 'ArrowRight'],
  down: ['Down', 'ArrowDown'],
  'delete': ['Backspace', 'Delete']
};

// #4868: modifiers that prevent the execution of the listener
// need to explicitly return null so that we can determine whether to remove
// the listener for .once
var genGuard = function (condition) { return ("if(" + condition + ")return null;"); };

var modifierCode = {
  stop: '$event.stopPropagation();',
  prevent: '$event.preventDefault();',
  self: genGuard("$event.target !== $event.currentTarget"),
  ctrl: genGuard("!$event.ctrlKey"),
  shift: genGuard("!$event.shiftKey"),
  alt: genGuard("!$event.altKey"),
  meta: genGuard("!$event.metaKey"),
  left: genGuard("'button' in $event && $event.button !== 0"),
  middle: genGuard("'button' in $event && $event.button !== 1"),
  right: genGuard("'button' in $event && $event.button !== 2")
};

function genHandlers (
  events,
  isNative,
  warn
) {
  var res = isNative ? 'nativeOn:{' : 'on:{';
  for (var name in events) {
    res += "\"" + name + "\":" + (genHandler(name, events[name])) + ",";
  }
  return res.slice(0, -1) + '}'
}

function genHandler (
  name,
  handler
) {
  if (!handler) {
    return 'function(){}'
  }

  if (Array.isArray(handler)) {
    return ("[" + (handler.map(function (handler) { return genHandler(name, handler); }).join(',')) + "]")
  }

  var isMethodPath = simplePathRE.test(handler.value);
  var isFunctionExpression = fnExpRE.test(handler.value);

  if (!handler.modifiers) {
    if (isMethodPath || isFunctionExpression) {
      return handler.value
    }
    /* istanbul ignore if */
    return ("function($event){" + (handler.value) + "}") // inline statement
  } else {
    var code = '';
    var genModifierCode = '';
    var keys = [];
    for (var key in handler.modifiers) {
      if (modifierCode[key]) {
        genModifierCode += modifierCode[key];
        // left/right
        if (keyCodes[key]) {
          keys.push(key);
        }
      } else if (key === 'exact') {
        var modifiers = (handler.modifiers);
        genModifierCode += genGuard(
          ['ctrl', 'shift', 'alt', 'meta']
            .filter(function (keyModifier) { return !modifiers[keyModifier]; })
            .map(function (keyModifier) { return ("$event." + keyModifier + "Key"); })
            .join('||')
        );
      } else {
        keys.push(key);
      }
    }
    if (keys.length) {
      code += genKeyFilter(keys);
    }
    // Make sure modifiers like prevent and stop get executed after key filtering
    if (genModifierCode) {
      code += genModifierCode;
    }
    var handlerCode = isMethodPath
      ? ("return " + (handler.value) + "($event)")
      : isFunctionExpression
        ? ("return (" + (handler.value) + ")($event)")
        : handler.value;
    /* istanbul ignore if */
    return ("function($event){" + code + handlerCode + "}")
  }
}

function genKeyFilter (keys) {
  return ("if(!('button' in $event)&&" + (keys.map(genFilterCode).join('&&')) + ")return null;")
}

function genFilterCode (key) {
  var keyVal = parseInt(key, 10);
  if (keyVal) {
    return ("$event.keyCode!==" + keyVal)
  }
  var keyCode = keyCodes[key];
  var keyName = keyNames[key];
  return (
    "_k($event.keyCode," +
    (JSON.stringify(key)) + "," +
    (JSON.stringify(keyCode)) + "," +
    "$event.key," +
    "" + (JSON.stringify(keyName)) +
    ")"
  )
}

/*  */

function on (el, dir) {
  if ("development" !== 'production' && dir.modifiers) {
    warn("v-on without argument does not support modifiers.");
  }
  el.wrapListeners = function (code) { return ("_g(" + code + "," + (dir.value) + ")"); };
}

/*  */

function bind$1 (el, dir) {
  el.wrapData = function (code) {
    return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")")
  };
}

/*  */

var baseDirectives = {
  on: on,
  bind: bind$1,
  cloak: noop
}

/*  */

var CodegenState = function CodegenState (options) {
  this.options = options;
  this.warn = options.warn || baseWarn;
  this.transforms = pluckModuleFunction(options.modules, 'transformCode');
  this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
  this.directives = extend(extend({}, baseDirectives), options.directives);
  var isReservedTag = options.isReservedTag || no;
  this.maybeComponent = function (el) { return !isReservedTag(el.tag); };
  this.onceId = 0;
  this.staticRenderFns = [];
};



function generate (
  ast,
  options
) {
  var state = new CodegenState(options);
  var code = ast ? genElement(ast, state) : '_c("div")';
  return {
    render: ("with(this){return " + code + "}"),
    staticRenderFns: state.staticRenderFns
  }
}

function genElement (el, state) {
  if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el, state)
  } else if (el.once && !el.onceProcessed) {
    return genOnce(el, state)
  } else if (el.for && !el.forProcessed) {
    return genFor(el, state)
  } else if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.tag === 'template' && !el.slotTarget) {
    return genChildren(el, state) || 'void 0'
  } else if (el.tag === 'slot') {
    return genSlot(el, state)
  } else {
    // component or element
    var code;
    if (el.component) {
      code = genComponent(el.component, el, state);
    } else {
      var data = el.plain ? undefined : genData$2(el, state);

      var children = el.inlineTemplate ? null : genChildren(el, state, true);
      code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
    }
    // module transforms
    for (var i = 0; i < state.transforms.length; i++) {
      code = state.transforms[i](el, code);
    }
    return code
  }
}

// hoist static sub-trees out
function genStatic (el, state) {
  el.staticProcessed = true;
  state.staticRenderFns.push(("with(this){return " + (genElement(el, state)) + "}"));
  return ("_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
}

// v-once
function genOnce (el, state) {
  el.onceProcessed = true;
  if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.staticInFor) {
    var key = '';
    var parent = el.parent;
    while (parent) {
      if (parent.for) {
        key = parent.key;
        break
      }
      parent = parent.parent;
    }
    if (!key) {
      "development" !== 'production' && state.warn(
        "v-once can only be used inside v-for that is keyed. "
      );
      return genElement(el, state)
    }
    return ("_o(" + (genElement(el, state)) + "," + (state.onceId++) + "," + key + ")")
  } else {
    return genStatic(el, state)
  }
}

function genIf (
  el,
  state,
  altGen,
  altEmpty
) {
  el.ifProcessed = true; // avoid recursion
  return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty)
}

function genIfConditions (
  conditions,
  state,
  altGen,
  altEmpty
) {
  if (!conditions.length) {
    return altEmpty || '_e()'
  }

  var condition = conditions.shift();
  if (condition.exp) {
    return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions, state, altGen, altEmpty)))
  } else {
    return ("" + (genTernaryExp(condition.block)))
  }

  // v-if with v-once should generate code like (a)?_m(0):_m(1)
  function genTernaryExp (el) {
    return altGen
      ? altGen(el, state)
      : el.once
        ? genOnce(el, state)
        : genElement(el, state)
  }
}

function genFor (
  el,
  state,
  altGen,
  altHelper
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';

  if ("development" !== 'production' &&
    state.maybeComponent(el) &&
    el.tag !== 'slot' &&
    el.tag !== 'template' &&
    !el.key
  ) {
    state.warn(
      "<" + (el.tag) + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " +
      "v-for should have explicit keys. " +
      "See https://vuejs.org/guide/list.html#key for more info.",
      true /* tip */
    );
  }

  el.forProcessed = true; // avoid recursion
  return (altHelper || '_l') + "((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + ((altGen || genElement)(el, state)) +
    '})'
}

function genData$2 (el, state) {
  var data = '{';

  // directives first.
  // directives may mutate the el's other properties before they are generated.
  var dirs = genDirectives(el, state);
  if (dirs) { data += dirs + ','; }

  // key
  if (el.key) {
    data += "key:" + (el.key) + ",";
  }
  // ref
  if (el.ref) {
    data += "ref:" + (el.ref) + ",";
  }
  if (el.refInFor) {
    data += "refInFor:true,";
  }
  // pre
  if (el.pre) {
    data += "pre:true,";
  }
  // record original tag name for components using "is" attribute
  if (el.component) {
    data += "tag:\"" + (el.tag) + "\",";
  }
  // module data generation functions
  for (var i = 0; i < state.dataGenFns.length; i++) {
    data += state.dataGenFns[i](el);
  }
  // attributes
  if (el.attrs) {
    data += "attrs:{" + (genProps(el.attrs)) + "},";
  }
  // DOM props
  if (el.props) {
    data += "domProps:{" + (genProps(el.props)) + "},";
  }
  // event handlers
  if (el.events) {
    data += (genHandlers(el.events, false, state.warn)) + ",";
  }
  if (el.nativeEvents) {
    data += (genHandlers(el.nativeEvents, true, state.warn)) + ",";
  }
  // slot target
  // only for non-scoped slots
  if (el.slotTarget && !el.slotScope) {
    data += "slot:" + (el.slotTarget) + ",";
  }
  // scoped slots
  if (el.scopedSlots) {
    data += (genScopedSlots(el.scopedSlots, state)) + ",";
  }
  // component v-model
  if (el.model) {
    data += "model:{value:" + (el.model.value) + ",callback:" + (el.model.callback) + ",expression:" + (el.model.expression) + "},";
  }
  // inline-template
  if (el.inlineTemplate) {
    var inlineTemplate = genInlineTemplate(el, state);
    if (inlineTemplate) {
      data += inlineTemplate + ",";
    }
  }
  data = data.replace(/,$/, '') + '}';
  // v-bind data wrap
  if (el.wrapData) {
    data = el.wrapData(data);
  }
  // v-on data wrap
  if (el.wrapListeners) {
    data = el.wrapListeners(data);
  }
  return data
}

function genDirectives (el, state) {
  var dirs = el.directives;
  if (!dirs) { return }
  var res = 'directives:[';
  var hasRuntime = false;
  var i, l, dir, needRuntime;
  for (i = 0, l = dirs.length; i < l; i++) {
    dir = dirs[i];
    needRuntime = true;
    var gen = state.directives[dir.name];
    if (gen) {
      // compile-time directive that manipulates AST.
      // returns true if it also needs a runtime counterpart.
      needRuntime = !!gen(el, dir, state.warn);
    }
    if (needRuntime) {
      hasRuntime = true;
      res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:\"" + (dir.arg) + "\"") : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
    }
  }
  if (hasRuntime) {
    return res.slice(0, -1) + ']'
  }
}

function genInlineTemplate (el, state) {
  var ast = el.children[0];
  if ("development" !== 'production' && (
    el.children.length !== 1 || ast.type !== 1
  )) {
    state.warn('Inline-template components must have exactly one child element.');
  }
  if (ast.type === 1) {
    var inlineRenderFns = generate(ast, state.options);
    return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
  }
}

function genScopedSlots (
  slots,
  state
) {
  return ("scopedSlots:_u([" + (Object.keys(slots).map(function (key) {
      return genScopedSlot(key, slots[key], state)
    }).join(',')) + "])")
}

function genScopedSlot (
  key,
  el,
  state
) {
  if (el.for && !el.forProcessed) {
    return genForScopedSlot(key, el, state)
  }
  var fn = "function(" + (String(el.slotScope)) + "){" +
    "return " + (el.tag === 'template'
      ? el.if
        ? ((el.if) + "?" + (genChildren(el, state) || 'undefined') + ":undefined")
        : genChildren(el, state) || 'undefined'
      : genElement(el, state)) + "}";
  return ("{key:" + key + ",fn:" + fn + "}")
}

function genForScopedSlot (
  key,
  el,
  state
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';
  el.forProcessed = true; // avoid recursion
  return "_l((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + (genScopedSlot(key, el, state)) +
    '})'
}

function genChildren (
  el,
  state,
  checkSkip,
  altGenElement,
  altGenNode
) {
  var children = el.children;
  if (children.length) {
    var el$1 = children[0];
    // optimize single v-for
    if (children.length === 1 &&
      el$1.for &&
      el$1.tag !== 'template' &&
      el$1.tag !== 'slot'
    ) {
      return (altGenElement || genElement)(el$1, state)
    }
    var normalizationType = checkSkip
      ? getNormalizationType(children, state.maybeComponent)
      : 0;
    var gen = altGenNode || genNode;
    return ("[" + (children.map(function (c) { return gen(c, state); }).join(',')) + "]" + (normalizationType ? ("," + normalizationType) : ''))
  }
}

// determine the normalization needed for the children array.
// 0: no normalization needed
// 1: simple normalization needed (possible 1-level deep nested array)
// 2: full normalization needed
function getNormalizationType (
  children,
  maybeComponent
) {
  var res = 0;
  for (var i = 0; i < children.length; i++) {
    var el = children[i];
    if (el.type !== 1) {
      continue
    }
    if (needsNormalization(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
      res = 2;
      break
    }
    if (maybeComponent(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block); }))) {
      res = 1;
    }
  }
  return res
}

function needsNormalization (el) {
  return el.for !== undefined || el.tag === 'template' || el.tag === 'slot'
}

function genNode (node, state) {
  if (node.type === 1) {
    return genElement(node, state)
  } if (node.type === 3 && node.isComment) {
    return genComment(node)
  } else {
    return genText(node)
  }
}

function genText (text) {
  return ("_v(" + (text.type === 2
    ? text.expression // no need for () because already wrapped in _s()
    : transformSpecialNewlines(JSON.stringify(text.text))) + ")")
}

function genComment (comment) {
  return ("_e(" + (JSON.stringify(comment.text)) + ")")
}

function genSlot (el, state) {
  var slotName = el.slotName || '"default"';
  var children = genChildren(el, state);
  var res = "_t(" + slotName + (children ? ("," + children) : '');
  var attrs = el.attrs && ("{" + (el.attrs.map(function (a) { return ((camelize(a.name)) + ":" + (a.value)); }).join(',')) + "}");
  var bind$$1 = el.attrsMap['v-bind'];
  if ((attrs || bind$$1) && !children) {
    res += ",null";
  }
  if (attrs) {
    res += "," + attrs;
  }
  if (bind$$1) {
    res += (attrs ? '' : ',null') + "," + bind$$1;
  }
  return res + ')'
}

// componentName is el.component, take it as argument to shun flow's pessimistic refinement
function genComponent (
  componentName,
  el,
  state
) {
  var children = el.inlineTemplate ? null : genChildren(el, state, true);
  return ("_c(" + componentName + "," + (genData$2(el, state)) + (children ? ("," + children) : '') + ")")
}

function genProps (props) {
  var res = '';
  for (var i = 0; i < props.length; i++) {
    var prop = props[i];
    /* istanbul ignore if */
    {
      res += "\"" + (prop.name) + "\":" + (transformSpecialNewlines(prop.value)) + ",";
    }
  }
  return res.slice(0, -1)
}

// #3895, #4268
function transformSpecialNewlines (text) {
  return text
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
}

/*  */

// these keywords should not appear inside expressions, but operators like
// typeof, instanceof and in are allowed
var prohibitedKeywordRE = new RegExp('\\b' + (
  'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
  'super,throw,while,yield,delete,export,import,return,switch,default,' +
  'extends,finally,continue,debugger,function,arguments'
).split(',').join('\\b|\\b') + '\\b');

// these unary operators should not be used as property/method names
var unaryOperatorsRE = new RegExp('\\b' + (
  'delete,typeof,void'
).split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

// strip strings in expressions
var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

// detect problematic expressions in a template
function detectErrors (ast) {
  var errors = [];
  if (ast) {
    checkNode(ast, errors);
  }
  return errors
}

function checkNode (node, errors) {
  if (node.type === 1) {
    for (var name in node.attrsMap) {
      if (dirRE.test(name)) {
        var value = node.attrsMap[name];
        if (value) {
          if (name === 'v-for') {
            checkFor(node, ("v-for=\"" + value + "\""), errors);
          } else if (onRE.test(name)) {
            checkEvent(value, (name + "=\"" + value + "\""), errors);
          } else {
            checkExpression(value, (name + "=\"" + value + "\""), errors);
          }
        }
      }
    }
    if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        checkNode(node.children[i], errors);
      }
    }
  } else if (node.type === 2) {
    checkExpression(node.expression, node.text, errors);
  }
}

function checkEvent (exp, text, errors) {
  var stipped = exp.replace(stripStringRE, '');
  var keywordMatch = stipped.match(unaryOperatorsRE);
  if (keywordMatch && stipped.charAt(keywordMatch.index - 1) !== '$') {
    errors.push(
      "avoid using JavaScript unary operator as property name: " +
      "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim())
    );
  }
  checkExpression(exp, text, errors);
}

function checkFor (node, text, errors) {
  checkExpression(node.for || '', text, errors);
  checkIdentifier(node.alias, 'v-for alias', text, errors);
  checkIdentifier(node.iterator1, 'v-for iterator', text, errors);
  checkIdentifier(node.iterator2, 'v-for iterator', text, errors);
}

function checkIdentifier (
  ident,
  type,
  text,
  errors
) {
  if (typeof ident === 'string') {
    try {
      new Function(("var " + ident + "=_"));
    } catch (e) {
      errors.push(("invalid " + type + " \"" + ident + "\" in expression: " + (text.trim())));
    }
  }
}

function checkExpression (exp, text, errors) {
  try {
    new Function(("return " + exp));
  } catch (e) {
    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
    if (keywordMatch) {
      errors.push(
        "avoid using JavaScript keyword as property name: " +
        "\"" + (keywordMatch[0]) + "\"\n  Raw expression: " + (text.trim())
      );
    } else {
      errors.push(
        "invalid expression: " + (e.message) + " in\n\n" +
        "    " + exp + "\n\n" +
        "  Raw expression: " + (text.trim()) + "\n"
      );
    }
  }
}

/*  */

function createFunction (code, errors) {
  try {
    return new Function(code)
  } catch (err) {
    errors.push({ err: err, code: code });
    return noop
  }
}

function createCompileToFunctionFn (compile) {
  var cache = Object.create(null);

  return function compileToFunctions (
    template,
    options,
    vm
  ) {
    options = extend({}, options);
    var warn$$1 = options.warn || warn;
    delete options.warn;

    /* istanbul ignore if */
    if (true) {
      // detect possible CSP restriction
      try {
        new Function('return 1');
      } catch (e) {
        if (e.toString().match(/unsafe-eval|CSP/)) {
          warn$$1(
            'It seems you are using the standalone build of Vue.js in an ' +
            'environment with Content Security Policy that prohibits unsafe-eval. ' +
            'The template compiler cannot work in this environment. Consider ' +
            'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
            'templates into render functions.'
          );
        }
      }
    }

    // check cache
    var key = options.delimiters
      ? String(options.delimiters) + template
      : template;
    if (cache[key]) {
      return cache[key]
    }

    // compile
    var compiled = compile(template, options);

    // check compilation errors/tips
    if (true) {
      if (compiled.errors && compiled.errors.length) {
        warn$$1(
          "Error compiling template:\n\n" + template + "\n\n" +
          compiled.errors.map(function (e) { return ("- " + e); }).join('\n') + '\n',
          vm
        );
      }
      if (compiled.tips && compiled.tips.length) {
        compiled.tips.forEach(function (msg) { return tip(msg, vm); });
      }
    }

    // turn code into functions
    var res = {};
    var fnGenErrors = [];
    res.render = createFunction(compiled.render, fnGenErrors);
    res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
      return createFunction(code, fnGenErrors)
    });

    // check function generation errors.
    // this should only happen if there is a bug in the compiler itself.
    // mostly for codegen development use
    /* istanbul ignore if */
    if (true) {
      if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
        warn$$1(
          "Failed to generate render function:\n\n" +
          fnGenErrors.map(function (ref) {
            var err = ref.err;
            var code = ref.code;

            return ((err.toString()) + " in\n\n" + code + "\n");
        }).join('\n'),
          vm
        );
      }
    }

    return (cache[key] = res)
  }
}

/*  */

function createCompilerCreator (baseCompile) {
  return function createCompiler (baseOptions) {
    function compile (
      template,
      options
    ) {
      var finalOptions = Object.create(baseOptions);
      var errors = [];
      var tips = [];
      finalOptions.warn = function (msg, tip) {
        (tip ? tips : errors).push(msg);
      };

      if (options) {
        // merge custom modules
        if (options.modules) {
          finalOptions.modules =
            (baseOptions.modules || []).concat(options.modules);
        }
        // merge custom directives
        if (options.directives) {
          finalOptions.directives = extend(
            Object.create(baseOptions.directives || null),
            options.directives
          );
        }
        // copy other options
        for (var key in options) {
          if (key !== 'modules' && key !== 'directives') {
            finalOptions[key] = options[key];
          }
        }
      }

      var compiled = baseCompile(template, finalOptions);
      if (true) {
        errors.push.apply(errors, detectErrors(compiled.ast));
      }
      compiled.errors = errors;
      compiled.tips = tips;
      return compiled
    }

    return {
      compile: compile,
      compileToFunctions: createCompileToFunctionFn(compile)
    }
  }
}

/*  */

// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.
var createCompiler = createCompilerCreator(function baseCompile (
  template,
  options
) {
  var ast = parse(template.trim(), options);
  if (options.optimize !== false) {
    optimize(ast, options);
  }
  var code = generate(ast, options);
  return {
    ast: ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
});

/*  */

var ref$1 = createCompiler(baseOptions);
var compileToFunctions = ref$1.compileToFunctions;

/*  */

// check whether current browser encodes a char inside attribute values
var div;
function getShouldDecode (href) {
  div = div || document.createElement('div');
  div.innerHTML = href ? "<a href=\"\n\"/>" : "<div a=\"\n\"/>";
  return div.innerHTML.indexOf('&#10;') > 0
}

// #3663: IE encodes newlines inside attribute values while other browsers don't
var shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false;
// #6828: chrome encodes content in a[href]
var shouldDecodeNewlinesForHref = inBrowser ? getShouldDecode(true) : false;

/*  */

var idToTemplate = cached(function (id) {
  var el = query(id);
  return el && el.innerHTML
});

var mount = Vue.prototype.$mount;
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && query(el);

  /* istanbul ignore if */
  if (el === document.body || el === document.documentElement) {
    "development" !== 'production' && warn(
      "Do not mount Vue to <html> or <body> - mount to normal elements instead."
    );
    return this
  }

  var options = this.$options;
  // resolve template/el and convert to render function
  if (!options.render) {
    var template = options.template;
    if (template) {
      if (typeof template === 'string') {
        if (template.charAt(0) === '#') {
          template = idToTemplate(template);
          /* istanbul ignore if */
          if ("development" !== 'production' && !template) {
            warn(
              ("Template element not found or is empty: " + (options.template)),
              this
            );
          }
        }
      } else if (template.nodeType) {
        template = template.innerHTML;
      } else {
        if (true) {
          warn('invalid template option:' + template, this);
        }
        return this
      }
    } else if (el) {
      template = getOuterHTML(el);
    }
    if (template) {
      /* istanbul ignore if */
      if ("development" !== 'production' && config.performance && mark) {
        mark('compile');
      }

      var ref = compileToFunctions(template, {
        shouldDecodeNewlines: shouldDecodeNewlines,
        shouldDecodeNewlinesForHref: shouldDecodeNewlinesForHref,
        delimiters: options.delimiters,
        comments: options.comments
      }, this);
      var render = ref.render;
      var staticRenderFns = ref.staticRenderFns;
      options.render = render;
      options.staticRenderFns = staticRenderFns;

      /* istanbul ignore if */
      if ("development" !== 'production' && config.performance && mark) {
        mark('compile end');
        measure(("vue " + (this._name) + " compile"), 'compile', 'compile end');
      }
    }
  }
  return mount.call(this, el, hydrating)
};

/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 */
function getOuterHTML (el) {
  if (el.outerHTML) {
    return el.outerHTML
  } else {
    var container = document.createElement('div');
    container.appendChild(el.cloneNode(true));
    return container.innerHTML
  }
}

Vue.compile = compileToFunctions;

module.exports = Vue;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3), __webpack_require__(17).setImmediate))

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var settle = __webpack_require__(24);
var buildURL = __webpack_require__(26);
var parseHeaders = __webpack_require__(27);
var isURLSameOrigin = __webpack_require__(28);
var createError = __webpack_require__(11);
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(29);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if ("development" !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(30);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(25);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(15);
module.exports = __webpack_require__(75);


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bootstrap__ = __webpack_require__(16);


__webpack_require__(40);

Vue.component('postSearchingComponent', __webpack_require__(41));
Vue.component('jobSearchingComponent', __webpack_require__(44));
Vue.component('postShowComponent', __webpack_require__(47));
Vue.component('bookShowComponent', __webpack_require__(53));
Vue.component('jobShowComponent', __webpack_require__(58));
Vue.component('postCategoryComponent', __webpack_require__(63));
Vue.component('jobCategoryComponent', __webpack_require__(66));
Vue.component('createCategoryComponent', __webpack_require__(69));
Vue.component('fileBrowserComponent', __webpack_require__(72));
// Vue.component('videoPlayerComponent', require('./components/VideoPlayerComponent.vue'));

Vue.config.devtools = true;

new Vue({
    el: '#app'
});

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utilities_Form__ = __webpack_require__(38);





window.Vue = __WEBPACK_IMPORTED_MODULE_0_vue___default.a;
window.axios = __WEBPACK_IMPORTED_MODULE_1_axios___default.a;
window.Form = __WEBPACK_IMPORTED_MODULE_2__utilities_Form__["a" /* default */];
window.events = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a();

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

var token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(18);
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3), __webpack_require__(8)))

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(20);

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var bind = __webpack_require__(9);
var Axios = __webpack_require__(22);
var defaults = __webpack_require__(4);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(13);
axios.CancelToken = __webpack_require__(36);
axios.isCancel = __webpack_require__(12);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(37);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 21 */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(4);
var utils = __webpack_require__(0);
var InterceptorManager = __webpack_require__(31);
var dispatchRequest = __webpack_require__(32);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, {method: 'get'}, this.defaults, config);
  config.method = config.method.toLowerCase();

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(11);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var transformData = __webpack_require__(33);
var isCancel = __webpack_require__(12);
var defaults = __webpack_require__(4);
var isAbsoluteURL = __webpack_require__(34);
var combineURLs = __webpack_require__(35);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(13);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Errors__ = __webpack_require__(39);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Form = function () {
    /**
     * Create a new Form instance.
     *
     * @param {object} data
     */
    function Form(data) {
        _classCallCheck(this, Form);

        this.originalData = data;

        for (var field in data) {
            this[field] = data[field];
        }

        this.errors = new __WEBPACK_IMPORTED_MODULE_0__Errors__["a" /* default */]();
    }

    /**
     * Fetch all relevant data for the form.
     */


    _createClass(Form, [{
        key: 'data',
        value: function data() {
            var data = {};

            for (var property in this.originalData) {
                data[property] = this[property];
            }

            return data;
        }

        /**
         * Reset the form fields.
         */

    }, {
        key: 'reset',
        value: function reset() {
            for (var field in this.originalData) {
                this[field] = '';
            }

            this.errors.clear();
        }

        /**
         * Send a POST request to the given URL.
         * .
         * @param {string} url
         */

    }, {
        key: 'post',
        value: function post(url) {
            return this.submit('post', url);
        }

        /**
         * Send a PUT request to the given URL.
         * .
         * @param {string} url
         */

    }, {
        key: 'put',
        value: function put(url) {
            return this.submit('put', url);
        }

        /**
         * Send a PATCH request to the given URL.
         * .
         * @param {string} url
         */

    }, {
        key: 'patch',
        value: function patch(url) {
            return this.submit('patch', url);
        }

        /**
         * Send a DELETE request to the given URL.
         * .
         * @param {string} url
         */

    }, {
        key: 'delete',
        value: function _delete(url) {
            return this.submit('delete', url);
        }

        /**
         * Submit the form.
         *
         * @param {string} requestType
         * @param {string} url
         */

    }, {
        key: 'submit',
        value: function submit(requestType, url) {
            var _this = this;

            return new Promise(function (resolve, reject) {
                axios[requestType](url, _this.data()).then(function (response) {
                    _this.onSuccess(response.data);

                    resolve(response.data);
                }).catch(function (error) {
                    _this.onFail(error.response.data);

                    reject(error.response.data);
                });
            });
        }

        /**
         * Handle a successful form submission.
         *
         * @param {object} data
         */

    }, {
        key: 'onSuccess',
        value: function onSuccess(data) {

            this.reset();
        }

        /**
         * Handle a failed form submission.
         *
         * @param {object} errors
         */

    }, {
        key: 'onFail',
        value: function onFail(response) {
            this.errors.record(response.errors);
        }
    }]);

    return Form;
}();

/* harmony default export */ __webpack_exports__["a"] = (Form);

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Errors = function () {
    /**
     * Create a new Errors instance.
     */
    function Errors() {
        _classCallCheck(this, Errors);

        this.errors = {};
    }

    /**
     * Determine if an errors exists for the given field.
     *
     * @param {string} field
     */


    _createClass(Errors, [{
        key: "has",
        value: function has(field) {
            return this.errors.hasOwnProperty(field);
        }

        /**
         * Determine if we have any errors.
         */

    }, {
        key: "any",
        value: function any() {
            return Object.keys(this.errors).length > 0;
        }

        /**
         * Retrieve the error message for a field.
         *
         * @param {string} field
         */

    }, {
        key: "get",
        value: function get(field) {
            if (this.errors[field]) {
                return this.errors[field][0];
            }
        }

        /**
         * Record the new errors.
         *
         * @param {object} errors
         */

    }, {
        key: "record",
        value: function record(errors) {
            this.errors = errors;
        }

        /**
         * Clear one or all error fields.
         *
         * @param {string|null} field
         */

    }, {
        key: "clear",
        value: function clear(field) {
            if (field) {
                delete this.errors[field];

                return;
            }

            this.errors = {};
        }
    }]);

    return Errors;
}();

/* harmony default export */ __webpack_exports__["a"] = (Errors);

/***/ }),
/* 40 */
/***/ (function(module, exports) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (e) {
  function t(a) {
    if (n[a]) return n[a].exports;var r = n[a] = { i: a, l: !1, exports: {} };return e[a].call(r.exports, r, r.exports, t), r.l = !0, r.exports;
  }var n = {};t.m = e, t.c = n, t.d = function (e, n, a) {
    t.o(e, n) || Object.defineProperty(e, n, { configurable: !1, enumerable: !0, get: a });
  }, t.n = function (e) {
    var n = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };return t.d(n, "a", n), n;
  }, t.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, t.p = "", t(t.s = 125);
}([function (e, t, n) {
  (function (e) {
    !function (t, n) {
      e.exports = n();
    }(0, function () {
      "use strict";
      function t() {
        return La.apply(null, arguments);
      }function a(e) {
        return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e);
      }function r(e) {
        return null != e && "[object Object]" === Object.prototype.toString.call(e);
      }function i(e) {
        var t;for (t in e) {
          return !1;
        }return !0;
      }function s(e) {
        return void 0 === e;
      }function o(e) {
        return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e);
      }function d(e) {
        return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e);
      }function u(e, t) {
        var n,
            a = [];for (n = 0; n < e.length; ++n) {
          a.push(t(e[n], n));
        }return a;
      }function l(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }function _(e, t) {
        for (var n in t) {
          l(t, n) && (e[n] = t[n]);
        }return l(t, "toString") && (e.toString = t.toString), l(t, "valueOf") && (e.valueOf = t.valueOf), e;
      }function c(e, t, n, a) {
        return vt(e, t, n, a, !0).utc();
      }function m() {
        return { empty: !1, unusedTokens: [], unusedInput: [], overflow: -2, charsLeftOver: 0, nullInput: !1, invalidMonth: null, invalidFormat: !1, userInvalidated: !1, iso: !1, parsedDateParts: [], meridiem: null, rfc2822: !1, weekdayMismatch: !1 };
      }function h(e) {
        return null == e._pf && (e._pf = m()), e._pf;
      }function f(e) {
        if (null == e._isValid) {
          var t = h(e),
              n = Ya.call(t.parsedDateParts, function (e) {
            return null != e;
          }),
              a = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidMonth && !t.invalidWeekday && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n);if (e._strict && (a = a && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour), null != Object.isFrozen && Object.isFrozen(e)) return a;e._isValid = a;
        }return e._isValid;
      }function p(e) {
        var t = c(NaN);return null != e ? _(h(t), e) : h(t).userInvalidated = !0, t;
      }function M(e, t) {
        var n, a, r;if (s(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), s(t._i) || (e._i = t._i), s(t._f) || (e._f = t._f), s(t._l) || (e._l = t._l), s(t._strict) || (e._strict = t._strict), s(t._tzm) || (e._tzm = t._tzm), s(t._isUTC) || (e._isUTC = t._isUTC), s(t._offset) || (e._offset = t._offset), s(t._pf) || (e._pf = h(t)), s(t._locale) || (e._locale = t._locale), ka.length > 0) for (n = 0; n < ka.length; n++) {
          a = ka[n], r = t[a], s(r) || (e[a] = r);
        }return e;
      }function y(e) {
        M(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === wa && (wa = !0, t.updateOffset(this), wa = !1);
      }function v(e) {
        return e instanceof y || null != e && null != e._isAMomentObject;
      }function L(e) {
        return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
      }function g(e) {
        var t = +e,
            n = 0;return 0 !== t && isFinite(t) && (n = L(t)), n;
      }function Y(e, t, n) {
        var a,
            r = Math.min(e.length, t.length),
            i = Math.abs(e.length - t.length),
            s = 0;for (a = 0; a < r; a++) {
          (n && e[a] !== t[a] || !n && g(e[a]) !== g(t[a])) && s++;
        }return s + i;
      }function k(e) {
        !1 === t.suppressDeprecationWarnings && "undefined" != typeof console && console.warn;
      }function w(e, n) {
        var a = !0;return _(function () {
          if (null != t.deprecationHandler && t.deprecationHandler(null, e), a) {
            for (var r, i = [], s = 0; s < arguments.length; s++) {
              if (r = "", "object" == _typeof(arguments[s])) {
                r += "\n[" + s + "] ";for (var o in arguments[0]) {
                  r += o + ": " + arguments[0][o] + ", ";
                }r = r.slice(0, -2);
              } else r = arguments[s];i.push(r);
            }k(e + "\nArguments: " + Array.prototype.slice.call(i).join("") + "\n" + new Error().stack), a = !1;
          }return n.apply(this, arguments);
        }, n);
      }function D(e, n) {
        null != t.deprecationHandler && t.deprecationHandler(e, n), Da[e] || (k(n), Da[e] = !0);
      }function T(e) {
        return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e);
      }function b(e) {
        var t, n;for (n in e) {
          t = e[n], T(t) ? this[n] = t : this["_" + n] = t;
        }this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source);
      }function S(e, t) {
        var n,
            a = _({}, e);for (n in t) {
          l(t, n) && (r(e[n]) && r(t[n]) ? (a[n] = {}, _(a[n], e[n]), _(a[n], t[n])) : null != t[n] ? a[n] = t[n] : delete a[n]);
        }for (n in e) {
          l(e, n) && !l(t, n) && r(e[n]) && (a[n] = _({}, a[n]));
        }return a;
      }function H(e) {
        null != e && this.set(e);
      }function x(e, t, n) {
        var a = this._calendar[e] || this._calendar.sameElse;return T(a) ? a.call(t, n) : a;
      }function j(e) {
        var t = this._longDateFormat[e],
            n = this._longDateFormat[e.toUpperCase()];return t || !n ? t : (this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, function (e) {
          return e.slice(1);
        }), this._longDateFormat[e]);
      }function F() {
        return this._invalidDate;
      }function C(e) {
        return this._ordinal.replace("%d", e);
      }function O(e, t, n, a) {
        var r = this._relativeTime[n];return T(r) ? r(e, t, n, a) : r.replace(/%d/i, e);
      }function E(e, t) {
        var n = this._relativeTime[e > 0 ? "future" : "past"];return T(n) ? n(t) : n.replace(/%s/i, t);
      }function P(e, t) {
        var n = e.toLowerCase();Ca[n] = Ca[n + "s"] = Ca[t] = e;
      }function A(e) {
        return "string" == typeof e ? Ca[e] || Ca[e.toLowerCase()] : void 0;
      }function W(e) {
        var t,
            n,
            a = {};for (n in e) {
          l(e, n) && (t = A(n)) && (a[t] = e[n]);
        }return a;
      }function z(e, t) {
        Oa[e] = t;
      }function $(e) {
        var t = [];for (var n in e) {
          t.push({ unit: n, priority: Oa[n] });
        }return t.sort(function (e, t) {
          return e.priority - t.priority;
        }), t;
      }function N(e, n) {
        return function (a) {
          return null != a ? (R(this, e, a), t.updateOffset(this, n), this) : I(this, e);
        };
      }function I(e, t) {
        return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN;
      }function R(e, t, n) {
        e.isValid() && e._d["set" + (e._isUTC ? "UTC" : "") + t](n);
      }function J(e) {
        return e = A(e), T(this[e]) ? this[e]() : this;
      }function U(e, t) {
        if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e))) {
          e = W(e);for (var n = $(e), a = 0; a < n.length; a++) {
            this[n[a].unit](e[n[a].unit]);
          }
        } else if (e = A(e), T(this[e])) return this[e](t);return this;
      }function B(e, t, n) {
        var a = "" + Math.abs(e),
            r = t - a.length;return (e >= 0 ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, r)).toString().substr(1) + a;
      }function G(e, t, n, a) {
        var r = a;"string" == typeof a && (r = function r() {
          return this[a]();
        }), e && (Wa[e] = r), t && (Wa[t[0]] = function () {
          return B(r.apply(this, arguments), t[1], t[2]);
        }), n && (Wa[n] = function () {
          return this.localeData().ordinal(r.apply(this, arguments), e);
        });
      }function V(e) {
        return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
      }function q(e) {
        var t,
            n,
            a = e.match(Ea);for (t = 0, n = a.length; t < n; t++) {
          Wa[a[t]] ? a[t] = Wa[a[t]] : a[t] = V(a[t]);
        }return function (t) {
          var r,
              i = "";for (r = 0; r < n; r++) {
            i += T(a[r]) ? a[r].call(t, e) : a[r];
          }return i;
        };
      }function K(e, t) {
        return e.isValid() ? (t = Q(t, e.localeData()), Aa[t] = Aa[t] || q(t), Aa[t](e)) : e.localeData().invalidDate();
      }function Q(e, t) {
        function n(e) {
          return t.longDateFormat(e) || e;
        }var a = 5;for (Pa.lastIndex = 0; a >= 0 && Pa.test(e);) {
          e = e.replace(Pa, n), Pa.lastIndex = 0, a -= 1;
        }return e;
      }function Z(e, t, n) {
        nr[e] = T(t) ? t : function (e, a) {
          return e && n ? n : t;
        };
      }function X(e, t) {
        return l(nr, e) ? nr[e](t._strict, t._locale) : new RegExp(ee(e));
      }function ee(e) {
        return te(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (e, t, n, a, r) {
          return t || n || a || r;
        }));
      }function te(e) {
        return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
      }function ne(e, t) {
        var n,
            a = t;for ("string" == typeof e && (e = [e]), o(t) && (a = function a(e, n) {
          n[t] = g(e);
        }), n = 0; n < e.length; n++) {
          ar[e[n]] = a;
        }
      }function ae(e, t) {
        ne(e, function (e, n, a, r) {
          a._w = a._w || {}, t(e, a._w, a, r);
        });
      }function re(e, t, n) {
        null != t && l(ar, e) && ar[e](t, n._a, n, e);
      }function ie(e, t) {
        return new Date(Date.UTC(e, t + 1, 0)).getUTCDate();
      }function se(e, t) {
        return e ? a(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || hr).test(t) ? "format" : "standalone"][e.month()] : a(this._months) ? this._months : this._months.standalone;
      }function oe(e, t) {
        return e ? a(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[hr.test(t) ? "format" : "standalone"][e.month()] : a(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
      }function de(e, t, n) {
        var a,
            r,
            i,
            s = e.toLocaleLowerCase();if (!this._monthsParse) for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], a = 0; a < 12; ++a) {
          i = c([2e3, a]), this._shortMonthsParse[a] = this.monthsShort(i, "").toLocaleLowerCase(), this._longMonthsParse[a] = this.months(i, "").toLocaleLowerCase();
        }return n ? "MMM" === t ? (r = mr.call(this._shortMonthsParse, s), -1 !== r ? r : null) : (r = mr.call(this._longMonthsParse, s), -1 !== r ? r : null) : "MMM" === t ? -1 !== (r = mr.call(this._shortMonthsParse, s)) ? r : (r = mr.call(this._longMonthsParse, s), -1 !== r ? r : null) : -1 !== (r = mr.call(this._longMonthsParse, s)) ? r : (r = mr.call(this._shortMonthsParse, s), -1 !== r ? r : null);
      }function ue(e, t, n) {
        var a, r, i;if (this._monthsParseExact) return de.call(this, e, t, n);for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), a = 0; a < 12; a++) {
          if (r = c([2e3, a]), n && !this._longMonthsParse[a] && (this._longMonthsParse[a] = new RegExp("^" + this.months(r, "").replace(".", "") + "$", "i"), this._shortMonthsParse[a] = new RegExp("^" + this.monthsShort(r, "").replace(".", "") + "$", "i")), n || this._monthsParse[a] || (i = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""), this._monthsParse[a] = new RegExp(i.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[a].test(e)) return a;if (n && "MMM" === t && this._shortMonthsParse[a].test(e)) return a;if (!n && this._monthsParse[a].test(e)) return a;
        }
      }function le(e, t) {
        var n;if (!e.isValid()) return e;if ("string" == typeof t) if (/^\d+$/.test(t)) t = g(t);else if (t = e.localeData().monthsParse(t), !o(t)) return e;return n = Math.min(e.date(), ie(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e;
      }function _e(e) {
        return null != e ? (le(this, e), t.updateOffset(this, !0), this) : I(this, "Month");
      }function ce() {
        return ie(this.year(), this.month());
      }function me(e) {
        return this._monthsParseExact ? (l(this, "_monthsRegex") || fe.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (l(this, "_monthsShortRegex") || (this._monthsShortRegex = Mr), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
      }function he(e) {
        return this._monthsParseExact ? (l(this, "_monthsRegex") || fe.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (l(this, "_monthsRegex") || (this._monthsRegex = yr), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
      }function fe() {
        function e(e, t) {
          return t.length - e.length;
        }var t,
            n,
            a = [],
            r = [],
            i = [];for (t = 0; t < 12; t++) {
          n = c([2e3, t]), a.push(this.monthsShort(n, "")), r.push(this.months(n, "")), i.push(this.months(n, "")), i.push(this.monthsShort(n, ""));
        }for (a.sort(e), r.sort(e), i.sort(e), t = 0; t < 12; t++) {
          a[t] = te(a[t]), r[t] = te(r[t]);
        }for (t = 0; t < 24; t++) {
          i[t] = te(i[t]);
        }this._monthsRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + a.join("|") + ")", "i");
      }function pe(e) {
        return Me(e) ? 366 : 365;
      }function Me(e) {
        return e % 4 == 0 && e % 100 != 0 || e % 400 == 0;
      }function ye() {
        return Me(this.year());
      }function ve(e, t, n, a, r, i, s) {
        var o = new Date(e, t, n, a, r, i, s);return e < 100 && e >= 0 && isFinite(o.getFullYear()) && o.setFullYear(e), o;
      }function Le(e) {
        var t = new Date(Date.UTC.apply(null, arguments));return e < 100 && e >= 0 && isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e), t;
      }function ge(e, t, n) {
        var a = 7 + t - n;return -(7 + Le(e, 0, a).getUTCDay() - t) % 7 + a - 1;
      }function Ye(e, t, n, a, r) {
        var i,
            s,
            o = (7 + n - a) % 7,
            d = ge(e, a, r),
            u = 1 + 7 * (t - 1) + o + d;return u <= 0 ? (i = e - 1, s = pe(i) + u) : u > pe(e) ? (i = e + 1, s = u - pe(e)) : (i = e, s = u), { year: i, dayOfYear: s };
      }function ke(e, t, n) {
        var a,
            r,
            i = ge(e.year(), t, n),
            s = Math.floor((e.dayOfYear() - i - 1) / 7) + 1;return s < 1 ? (r = e.year() - 1, a = s + we(r, t, n)) : s > we(e.year(), t, n) ? (a = s - we(e.year(), t, n), r = e.year() + 1) : (r = e.year(), a = s), { week: a, year: r };
      }function we(e, t, n) {
        var a = ge(e, t, n),
            r = ge(e + 1, t, n);return (pe(e) - a + r) / 7;
      }function De(e) {
        return ke(e, this._week.dow, this._week.doy).week;
      }function Te() {
        return this._week.dow;
      }function be() {
        return this._week.doy;
      }function Se(e) {
        var t = this.localeData().week(this);return null == e ? t : this.add(7 * (e - t), "d");
      }function He(e) {
        var t = ke(this, 1, 4).week;return null == e ? t : this.add(7 * (e - t), "d");
      }function xe(e, t) {
        return "string" != typeof e ? e : isNaN(e) ? (e = t.weekdaysParse(e), "number" == typeof e ? e : null) : parseInt(e, 10);
      }function je(e, t) {
        return "string" == typeof e ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
      }function Fe(e, t) {
        return e ? a(this._weekdays) ? this._weekdays[e.day()] : this._weekdays[this._weekdays.isFormat.test(t) ? "format" : "standalone"][e.day()] : a(this._weekdays) ? this._weekdays : this._weekdays.standalone;
      }function Ce(e) {
        return e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
      }function Oe(e) {
        return e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
      }function Ee(e, t, n) {
        var a,
            r,
            i,
            s = e.toLocaleLowerCase();if (!this._weekdaysParse) for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], a = 0; a < 7; ++a) {
          i = c([2e3, 1]).day(a), this._minWeekdaysParse[a] = this.weekdaysMin(i, "").toLocaleLowerCase(), this._shortWeekdaysParse[a] = this.weekdaysShort(i, "").toLocaleLowerCase(), this._weekdaysParse[a] = this.weekdays(i, "").toLocaleLowerCase();
        }return n ? "dddd" === t ? (r = mr.call(this._weekdaysParse, s), -1 !== r ? r : null) : "ddd" === t ? (r = mr.call(this._shortWeekdaysParse, s), -1 !== r ? r : null) : (r = mr.call(this._minWeekdaysParse, s), -1 !== r ? r : null) : "dddd" === t ? -1 !== (r = mr.call(this._weekdaysParse, s)) ? r : -1 !== (r = mr.call(this._shortWeekdaysParse, s)) ? r : (r = mr.call(this._minWeekdaysParse, s), -1 !== r ? r : null) : "ddd" === t ? -1 !== (r = mr.call(this._shortWeekdaysParse, s)) ? r : -1 !== (r = mr.call(this._weekdaysParse, s)) ? r : (r = mr.call(this._minWeekdaysParse, s), -1 !== r ? r : null) : -1 !== (r = mr.call(this._minWeekdaysParse, s)) ? r : -1 !== (r = mr.call(this._weekdaysParse, s)) ? r : (r = mr.call(this._shortWeekdaysParse, s), -1 !== r ? r : null);
      }function Pe(e, t, n) {
        var a, r, i;if (this._weekdaysParseExact) return Ee.call(this, e, t, n);for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), a = 0; a < 7; a++) {
          if (r = c([2e3, 1]).day(a), n && !this._fullWeekdaysParse[a] && (this._fullWeekdaysParse[a] = new RegExp("^" + this.weekdays(r, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[a] = new RegExp("^" + this.weekdaysShort(r, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[a] = new RegExp("^" + this.weekdaysMin(r, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[a] || (i = "^" + this.weekdays(r, "") + "|^" + this.weekdaysShort(r, "") + "|^" + this.weekdaysMin(r, ""), this._weekdaysParse[a] = new RegExp(i.replace(".", ""), "i")), n && "dddd" === t && this._fullWeekdaysParse[a].test(e)) return a;if (n && "ddd" === t && this._shortWeekdaysParse[a].test(e)) return a;if (n && "dd" === t && this._minWeekdaysParse[a].test(e)) return a;if (!n && this._weekdaysParse[a].test(e)) return a;
        }
      }function Ae(e) {
        if (!this.isValid()) return null != e ? this : NaN;var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();return null != e ? (e = xe(e, this.localeData()), this.add(e - t, "d")) : t;
      }function We(e) {
        if (!this.isValid()) return null != e ? this : NaN;var t = (this.day() + 7 - this.localeData()._week.dow) % 7;return null == e ? t : this.add(e - t, "d");
      }function ze(e) {
        if (!this.isValid()) return null != e ? this : NaN;if (null != e) {
          var t = je(e, this.localeData());return this.day(this.day() % 7 ? t : t - 7);
        }return this.day() || 7;
      }function $e(e) {
        return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || Re.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (l(this, "_weekdaysRegex") || (this._weekdaysRegex = wr), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
      }function Ne(e) {
        return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || Re.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (l(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Dr), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
      }function Ie(e) {
        return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || Re.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (l(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Tr), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
      }function Re() {
        function e(e, t) {
          return t.length - e.length;
        }var t,
            n,
            a,
            r,
            i,
            s = [],
            o = [],
            d = [],
            u = [];for (t = 0; t < 7; t++) {
          n = c([2e3, 1]).day(t), a = this.weekdaysMin(n, ""), r = this.weekdaysShort(n, ""), i = this.weekdays(n, ""), s.push(a), o.push(r), d.push(i), u.push(a), u.push(r), u.push(i);
        }for (s.sort(e), o.sort(e), d.sort(e), u.sort(e), t = 0; t < 7; t++) {
          o[t] = te(o[t]), d[t] = te(d[t]), u[t] = te(u[t]);
        }this._weekdaysRegex = new RegExp("^(" + u.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + d.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + s.join("|") + ")", "i");
      }function Je() {
        return this.hours() % 12 || 12;
      }function Ue() {
        return this.hours() || 24;
      }function Be(e, t) {
        G(e, 0, 0, function () {
          return this.localeData().meridiem(this.hours(), this.minutes(), t);
        });
      }function Ge(e, t) {
        return t._meridiemParse;
      }function Ve(e) {
        return "p" === (e + "").toLowerCase().charAt(0);
      }function qe(e, t, n) {
        return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM";
      }function Ke(e) {
        return e ? e.toLowerCase().replace("_", "-") : e;
      }function Qe(e) {
        for (var t, n, a, r, i = 0; i < e.length;) {
          for (r = Ke(e[i]).split("-"), t = r.length, n = Ke(e[i + 1]), n = n ? n.split("-") : null; t > 0;) {
            if (a = Ze(r.slice(0, t).join("-"))) return a;if (n && n.length >= t && Y(r, n, !0) >= t - 1) break;t--;
          }i++;
        }return null;
      }function Ze(t) {
        var a = null;if (!jr[t] && void 0 !== e && e && e.exports) try {
          a = br._abbr, n(150)("./" + t), Xe(a);
        } catch (e) {}return jr[t];
      }function Xe(e, t) {
        var n;return e && (n = s(t) ? nt(e) : et(e, t)) && (br = n), br._abbr;
      }function et(e, t) {
        if (null !== t) {
          var n = xr;if (t.abbr = e, null != jr[e]) D("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), n = jr[e]._config;else if (null != t.parentLocale) {
            if (null == jr[t.parentLocale]) return Fr[t.parentLocale] || (Fr[t.parentLocale] = []), Fr[t.parentLocale].push({ name: e, config: t }), null;n = jr[t.parentLocale]._config;
          }return jr[e] = new H(S(n, t)), Fr[e] && Fr[e].forEach(function (e) {
            et(e.name, e.config);
          }), Xe(e), jr[e];
        }return delete jr[e], null;
      }function tt(e, t) {
        if (null != t) {
          var n,
              a = xr;null != jr[e] && (a = jr[e]._config), t = S(a, t), n = new H(t), n.parentLocale = jr[e], jr[e] = n, Xe(e);
        } else null != jr[e] && (null != jr[e].parentLocale ? jr[e] = jr[e].parentLocale : null != jr[e] && delete jr[e]);return jr[e];
      }function nt(e) {
        var t;if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return br;if (!a(e)) {
          if (t = Ze(e)) return t;e = [e];
        }return Qe(e);
      }function at() {
        return Sa(jr);
      }function rt(e) {
        var t,
            n = e._a;return n && -2 === h(e).overflow && (t = n[ir] < 0 || n[ir] > 11 ? ir : n[sr] < 1 || n[sr] > ie(n[rr], n[ir]) ? sr : n[or] < 0 || n[or] > 24 || 24 === n[or] && (0 !== n[dr] || 0 !== n[ur] || 0 !== n[lr]) ? or : n[dr] < 0 || n[dr] > 59 ? dr : n[ur] < 0 || n[ur] > 59 ? ur : n[lr] < 0 || n[lr] > 999 ? lr : -1, h(e)._overflowDayOfYear && (t < rr || t > sr) && (t = sr), h(e)._overflowWeeks && -1 === t && (t = _r), h(e)._overflowWeekday && -1 === t && (t = cr), h(e).overflow = t), e;
      }function it(e) {
        var t,
            n,
            a,
            r,
            i,
            s,
            o = e._i,
            d = Cr.exec(o) || Or.exec(o);if (d) {
          for (h(e).iso = !0, t = 0, n = Pr.length; t < n; t++) {
            if (Pr[t][1].exec(d[1])) {
              r = Pr[t][0], a = !1 !== Pr[t][2];break;
            }
          }if (null == r) return void (e._isValid = !1);if (d[3]) {
            for (t = 0, n = Ar.length; t < n; t++) {
              if (Ar[t][1].exec(d[3])) {
                i = (d[2] || " ") + Ar[t][0];break;
              }
            }if (null == i) return void (e._isValid = !1);
          }if (!a && null != i) return void (e._isValid = !1);if (d[4]) {
            if (!Er.exec(d[4])) return void (e._isValid = !1);s = "Z";
          }e._f = r + (i || "") + (s || ""), ct(e);
        } else e._isValid = !1;
      }function st(e) {
        var t,
            n,
            a,
            r,
            i,
            s,
            o,
            d,
            u = { " GMT": " +0000", " EDT": " -0400", " EST": " -0500", " CDT": " -0500", " CST": " -0600", " MDT": " -0600", " MST": " -0700", " PDT": " -0700", " PST": " -0800" },
            l = "YXWVUTSRQPONZABCDEFGHIKLM";if (t = e._i.replace(/\([^\)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s|\s$/g, ""), n = zr.exec(t)) {
          if (a = n[1] ? "ddd" + (5 === n[1].length ? ", " : " ") : "", r = "D MMM " + (n[2].length > 10 ? "YYYY " : "YY "), i = "HH:mm" + (n[4] ? ":ss" : ""), n[1]) {
            var _ = new Date(n[2]),
                c = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][_.getDay()];if (n[1].substr(0, 3) !== c) return h(e).weekdayMismatch = !0, void (e._isValid = !1);
          }switch (n[5].length) {case 2:
              0 === d ? o = " +0000" : (d = l.indexOf(n[5][1].toUpperCase()) - 12, o = (d < 0 ? " -" : " +") + ("" + d).replace(/^-?/, "0").match(/..$/)[0] + "00");break;case 4:
              o = u[n[5]];break;default:
              o = u[" GMT"];}n[5] = o, e._i = n.splice(1).join(""), s = " ZZ", e._f = a + r + i + s, ct(e), h(e).rfc2822 = !0;
        } else e._isValid = !1;
      }function ot(e) {
        var n = Wr.exec(e._i);if (null !== n) return void (e._d = new Date(+n[1]));it(e), !1 === e._isValid && (delete e._isValid, st(e), !1 === e._isValid && (delete e._isValid, t.createFromInputFallback(e)));
      }function dt(e, t, n) {
        return null != e ? e : null != t ? t : n;
      }function ut(e) {
        var n = new Date(t.now());return e._useUTC ? [n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate()] : [n.getFullYear(), n.getMonth(), n.getDate()];
      }function lt(e) {
        var t,
            n,
            a,
            r,
            i = [];if (!e._d) {
          for (a = ut(e), e._w && null == e._a[sr] && null == e._a[ir] && _t(e), null != e._dayOfYear && (r = dt(e._a[rr], a[rr]), (e._dayOfYear > pe(r) || 0 === e._dayOfYear) && (h(e)._overflowDayOfYear = !0), n = Le(r, 0, e._dayOfYear), e._a[ir] = n.getUTCMonth(), e._a[sr] = n.getUTCDate()), t = 0; t < 3 && null == e._a[t]; ++t) {
            e._a[t] = i[t] = a[t];
          }for (; t < 7; t++) {
            e._a[t] = i[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
          }24 === e._a[or] && 0 === e._a[dr] && 0 === e._a[ur] && 0 === e._a[lr] && (e._nextDay = !0, e._a[or] = 0), e._d = (e._useUTC ? Le : ve).apply(null, i), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[or] = 24);
        }
      }function _t(e) {
        var t, n, a, r, i, s, o, d;if (t = e._w, null != t.GG || null != t.W || null != t.E) i = 1, s = 4, n = dt(t.GG, e._a[rr], ke(Lt(), 1, 4).year), a = dt(t.W, 1), ((r = dt(t.E, 1)) < 1 || r > 7) && (d = !0);else {
          i = e._locale._week.dow, s = e._locale._week.doy;var u = ke(Lt(), i, s);n = dt(t.gg, e._a[rr], u.year), a = dt(t.w, u.week), null != t.d ? ((r = t.d) < 0 || r > 6) && (d = !0) : null != t.e ? (r = t.e + i, (t.e < 0 || t.e > 6) && (d = !0)) : r = i;
        }a < 1 || a > we(n, i, s) ? h(e)._overflowWeeks = !0 : null != d ? h(e)._overflowWeekday = !0 : (o = Ye(n, a, r, i, s), e._a[rr] = o.year, e._dayOfYear = o.dayOfYear);
      }function ct(e) {
        if (e._f === t.ISO_8601) return void it(e);if (e._f === t.RFC_2822) return void st(e);e._a = [], h(e).empty = !0;var n,
            a,
            r,
            i,
            s,
            o = "" + e._i,
            d = o.length,
            u = 0;for (r = Q(e._f, e._locale).match(Ea) || [], n = 0; n < r.length; n++) {
          i = r[n], a = (o.match(X(i, e)) || [])[0], a && (s = o.substr(0, o.indexOf(a)), s.length > 0 && h(e).unusedInput.push(s), o = o.slice(o.indexOf(a) + a.length), u += a.length), Wa[i] ? (a ? h(e).empty = !1 : h(e).unusedTokens.push(i), re(i, a, e)) : e._strict && !a && h(e).unusedTokens.push(i);
        }h(e).charsLeftOver = d - u, o.length > 0 && h(e).unusedInput.push(o), e._a[or] <= 12 && !0 === h(e).bigHour && e._a[or] > 0 && (h(e).bigHour = void 0), h(e).parsedDateParts = e._a.slice(0), h(e).meridiem = e._meridiem, e._a[or] = mt(e._locale, e._a[or], e._meridiem), lt(e), rt(e);
      }function mt(e, t, n) {
        var a;return null == n ? t : null != e.meridiemHour ? e.meridiemHour(t, n) : null != e.isPM ? (a = e.isPM(n), a && t < 12 && (t += 12), a || 12 !== t || (t = 0), t) : t;
      }function ht(e) {
        var t, n, a, r, i;if (0 === e._f.length) return h(e).invalidFormat = !0, void (e._d = new Date(NaN));for (r = 0; r < e._f.length; r++) {
          i = 0, t = M({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[r], ct(t), f(t) && (i += h(t).charsLeftOver, i += 10 * h(t).unusedTokens.length, h(t).score = i, (null == a || i < a) && (a = i, n = t));
        }_(e, n || t);
      }function ft(e) {
        if (!e._d) {
          var t = W(e._i);e._a = u([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], function (e) {
            return e && parseInt(e, 10);
          }), lt(e);
        }
      }function pt(e) {
        var t = new y(rt(Mt(e)));return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t;
      }function Mt(e) {
        var t = e._i,
            n = e._f;return e._locale = e._locale || nt(e._l), null === t || void 0 === n && "" === t ? p({ nullInput: !0 }) : ("string" == typeof t && (e._i = t = e._locale.preparse(t)), v(t) ? new y(rt(t)) : (d(t) ? e._d = t : a(n) ? ht(e) : n ? ct(e) : yt(e), f(e) || (e._d = null), e));
      }function yt(e) {
        var n = e._i;s(n) ? e._d = new Date(t.now()) : d(n) ? e._d = new Date(n.valueOf()) : "string" == typeof n ? ot(e) : a(n) ? (e._a = u(n.slice(0), function (e) {
          return parseInt(e, 10);
        }), lt(e)) : r(n) ? ft(e) : o(n) ? e._d = new Date(n) : t.createFromInputFallback(e);
      }function vt(e, t, n, s, o) {
        var d = {};return !0 !== n && !1 !== n || (s = n, n = void 0), (r(e) && i(e) || a(e) && 0 === e.length) && (e = void 0), d._isAMomentObject = !0, d._useUTC = d._isUTC = o, d._l = n, d._i = e, d._f = t, d._strict = s, pt(d);
      }function Lt(e, t, n, a) {
        return vt(e, t, n, a, !1);
      }function gt(e, t) {
        var n, r;if (1 === t.length && a(t[0]) && (t = t[0]), !t.length) return Lt();for (n = t[0], r = 1; r < t.length; ++r) {
          t[r].isValid() && !t[r][e](n) || (n = t[r]);
        }return n;
      }function Yt() {
        return gt("isBefore", [].slice.call(arguments, 0));
      }function kt() {
        return gt("isAfter", [].slice.call(arguments, 0));
      }function wt(e) {
        for (var t in e) {
          if (-1 === Rr.indexOf(t) || null != e[t] && isNaN(e[t])) return !1;
        }for (var n = !1, a = 0; a < Rr.length; ++a) {
          if (e[Rr[a]]) {
            if (n) return !1;parseFloat(e[Rr[a]]) !== g(e[Rr[a]]) && (n = !0);
          }
        }return !0;
      }function Dt() {
        return this._isValid;
      }function Tt() {
        return Ut(NaN);
      }function bt(e) {
        var t = W(e),
            n = t.year || 0,
            a = t.quarter || 0,
            r = t.month || 0,
            i = t.week || 0,
            s = t.day || 0,
            o = t.hour || 0,
            d = t.minute || 0,
            u = t.second || 0,
            l = t.millisecond || 0;this._isValid = wt(t), this._milliseconds = +l + 1e3 * u + 6e4 * d + 1e3 * o * 60 * 60, this._days = +s + 7 * i, this._months = +r + 3 * a + 12 * n, this._data = {}, this._locale = nt(), this._bubble();
      }function St(e) {
        return e instanceof bt;
      }function Ht(e) {
        return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e);
      }function xt(e, t) {
        G(e, 0, 0, function () {
          var e = this.utcOffset(),
              n = "+";return e < 0 && (e = -e, n = "-"), n + B(~~(e / 60), 2) + t + B(~~e % 60, 2);
        });
      }function jt(e, t) {
        var n = (t || "").match(e);if (null === n) return null;var a = n[n.length - 1] || [],
            r = (a + "").match(Jr) || ["-", 0, 0],
            i = 60 * r[1] + g(r[2]);return 0 === i ? 0 : "+" === r[0] ? i : -i;
      }function Ft(e, n) {
        var a, r;return n._isUTC ? (a = n.clone(), r = (v(e) || d(e) ? e.valueOf() : Lt(e).valueOf()) - a.valueOf(), a._d.setTime(a._d.valueOf() + r), t.updateOffset(a, !1), a) : Lt(e).local();
      }function Ct(e) {
        return 15 * -Math.round(e._d.getTimezoneOffset() / 15);
      }function Ot(e, n, a) {
        var r,
            i = this._offset || 0;if (!this.isValid()) return null != e ? this : NaN;if (null != e) {
          if ("string" == typeof e) {
            if (null === (e = jt(Xa, e))) return this;
          } else Math.abs(e) < 16 && !a && (e *= 60);return !this._isUTC && n && (r = Ct(this)), this._offset = e, this._isUTC = !0, null != r && this.add(r, "m"), i !== e && (!n || this._changeInProgress ? Kt(this, Ut(e - i, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, t.updateOffset(this, !0), this._changeInProgress = null)), this;
        }return this._isUTC ? i : Ct(this);
      }function Et(e, t) {
        return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
      }function Pt(e) {
        return this.utcOffset(0, e);
      }function At(e) {
        return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Ct(this), "m")), this;
      }function Wt() {
        if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);else if ("string" == typeof this._i) {
          var e = jt(Za, this._i);null != e ? this.utcOffset(e) : this.utcOffset(0, !0);
        }return this;
      }function zt(e) {
        return !!this.isValid() && (e = e ? Lt(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0);
      }function $t() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
      }function Nt() {
        if (!s(this._isDSTShifted)) return this._isDSTShifted;var e = {};if (M(e, this), e = Mt(e), e._a) {
          var t = e._isUTC ? c(e._a) : Lt(e._a);this._isDSTShifted = this.isValid() && Y(e._a, t.toArray()) > 0;
        } else this._isDSTShifted = !1;return this._isDSTShifted;
      }function It() {
        return !!this.isValid() && !this._isUTC;
      }function Rt() {
        return !!this.isValid() && this._isUTC;
      }function Jt() {
        return !!this.isValid() && this._isUTC && 0 === this._offset;
      }function Ut(e, t) {
        var n,
            a,
            r,
            i = e,
            s = null;return St(e) ? i = { ms: e._milliseconds, d: e._days, M: e._months } : o(e) ? (i = {}, t ? i[t] = e : i.milliseconds = e) : (s = Ur.exec(e)) ? (n = "-" === s[1] ? -1 : 1, i = { y: 0, d: g(s[sr]) * n, h: g(s[or]) * n, m: g(s[dr]) * n, s: g(s[ur]) * n, ms: g(Ht(1e3 * s[lr])) * n }) : (s = Br.exec(e)) ? (n = "-" === s[1] ? -1 : 1, i = { y: Bt(s[2], n), M: Bt(s[3], n), w: Bt(s[4], n), d: Bt(s[5], n), h: Bt(s[6], n), m: Bt(s[7], n), s: Bt(s[8], n) }) : null == i ? i = {} : "object" == (typeof i === "undefined" ? "undefined" : _typeof(i)) && ("from" in i || "to" in i) && (r = Vt(Lt(i.from), Lt(i.to)), i = {}, i.ms = r.milliseconds, i.M = r.months), a = new bt(i), St(e) && l(e, "_locale") && (a._locale = e._locale), a;
      }function Bt(e, t) {
        var n = e && parseFloat(e.replace(",", "."));return (isNaN(n) ? 0 : n) * t;
      }function Gt(e, t) {
        var n = { milliseconds: 0, months: 0 };return n.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n;
      }function Vt(e, t) {
        var n;return e.isValid() && t.isValid() ? (t = Ft(t, e), e.isBefore(t) ? n = Gt(e, t) : (n = Gt(t, e), n.milliseconds = -n.milliseconds, n.months = -n.months), n) : { milliseconds: 0, months: 0 };
      }function qt(e, t) {
        return function (n, a) {
          var r, i;return null === a || isNaN(+a) || (D(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), i = n, n = a, a = i), n = "string" == typeof n ? +n : n, r = Ut(n, a), Kt(this, r, e), this;
        };
      }function Kt(e, n, a, r) {
        var i = n._milliseconds,
            s = Ht(n._days),
            o = Ht(n._months);e.isValid() && (r = null == r || r, i && e._d.setTime(e._d.valueOf() + i * a), s && R(e, "Date", I(e, "Date") + s * a), o && le(e, I(e, "Month") + o * a), r && t.updateOffset(e, s || o));
      }function Qt(e, t) {
        var n = e.diff(t, "days", !0);return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse";
      }function Zt(e, n) {
        var a = e || Lt(),
            r = Ft(a, this).startOf("day"),
            i = t.calendarFormat(this, r) || "sameElse",
            s = n && (T(n[i]) ? n[i].call(this, a) : n[i]);return this.format(s || this.localeData().calendar(i, this, Lt(a)));
      }function Xt() {
        return new y(this);
      }function en(e, t) {
        var n = v(e) ? e : Lt(e);return !(!this.isValid() || !n.isValid()) && (t = A(s(t) ? "millisecond" : t), "millisecond" === t ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf());
      }function tn(e, t) {
        var n = v(e) ? e : Lt(e);return !(!this.isValid() || !n.isValid()) && (t = A(s(t) ? "millisecond" : t), "millisecond" === t ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf());
      }function nn(e, t, n, a) {
        return a = a || "()", ("(" === a[0] ? this.isAfter(e, n) : !this.isBefore(e, n)) && (")" === a[1] ? this.isBefore(t, n) : !this.isAfter(t, n));
      }function an(e, t) {
        var n,
            a = v(e) ? e : Lt(e);return !(!this.isValid() || !a.isValid()) && (t = A(t || "millisecond"), "millisecond" === t ? this.valueOf() === a.valueOf() : (n = a.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf()));
      }function rn(e, t) {
        return this.isSame(e, t) || this.isAfter(e, t);
      }function sn(e, t) {
        return this.isSame(e, t) || this.isBefore(e, t);
      }function on(e, t, n) {
        var a, r, i, s;return this.isValid() ? (a = Ft(e, this), a.isValid() ? (r = 6e4 * (a.utcOffset() - this.utcOffset()), t = A(t), "year" === t || "month" === t || "quarter" === t ? (s = dn(this, a), "quarter" === t ? s /= 3 : "year" === t && (s /= 12)) : (i = this - a, s = "second" === t ? i / 1e3 : "minute" === t ? i / 6e4 : "hour" === t ? i / 36e5 : "day" === t ? (i - r) / 864e5 : "week" === t ? (i - r) / 6048e5 : i), n ? s : L(s)) : NaN) : NaN;
      }function dn(e, t) {
        var n,
            a,
            r = 12 * (t.year() - e.year()) + (t.month() - e.month()),
            i = e.clone().add(r, "months");return t - i < 0 ? (n = e.clone().add(r - 1, "months"), a = (t - i) / (i - n)) : (n = e.clone().add(r + 1, "months"), a = (t - i) / (n - i)), -(r + a) || 0;
      }function un() {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
      }function ln() {
        if (!this.isValid()) return null;var e = this.clone().utc();return e.year() < 0 || e.year() > 9999 ? K(e, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : T(Date.prototype.toISOString) ? this.toDate().toISOString() : K(e, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]");
      }function _n() {
        if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";var e = "moment",
            t = "";this.isLocal() || (e = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", t = "Z");var n = "[" + e + '("]',
            a = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
            r = t + '[")]';return this.format(n + a + "-MM-DD[T]HH:mm:ss.SSS" + r);
      }function cn(e) {
        e || (e = this.isUtc() ? t.defaultFormatUtc : t.defaultFormat);var n = K(this, e);return this.localeData().postformat(n);
      }function mn(e, t) {
        return this.isValid() && (v(e) && e.isValid() || Lt(e).isValid()) ? Ut({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
      }function hn(e) {
        return this.from(Lt(), e);
      }function fn(e, t) {
        return this.isValid() && (v(e) && e.isValid() || Lt(e).isValid()) ? Ut({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
      }function pn(e) {
        return this.to(Lt(), e);
      }function Mn(e) {
        var t;return void 0 === e ? this._locale._abbr : (t = nt(e), null != t && (this._locale = t), this);
      }function yn() {
        return this._locale;
      }function vn(e) {
        switch (e = A(e)) {case "year":
            this.month(0);case "quarter":case "month":
            this.date(1);case "week":case "isoWeek":case "day":case "date":
            this.hours(0);case "hour":
            this.minutes(0);case "minute":
            this.seconds(0);case "second":
            this.milliseconds(0);}return "week" === e && this.weekday(0), "isoWeek" === e && this.isoWeekday(1), "quarter" === e && this.month(3 * Math.floor(this.month() / 3)), this;
      }function Ln(e) {
        return void 0 === (e = A(e)) || "millisecond" === e ? this : ("date" === e && (e = "day"), this.startOf(e).add(1, "isoWeek" === e ? "week" : e).subtract(1, "ms"));
      }function gn() {
        return this._d.valueOf() - 6e4 * (this._offset || 0);
      }function Yn() {
        return Math.floor(this.valueOf() / 1e3);
      }function kn() {
        return new Date(this.valueOf());
      }function wn() {
        var e = this;return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()];
      }function Dn() {
        var e = this;return { years: e.year(), months: e.month(), date: e.date(), hours: e.hours(), minutes: e.minutes(), seconds: e.seconds(), milliseconds: e.milliseconds() };
      }function Tn() {
        return this.isValid() ? this.toISOString() : null;
      }function bn() {
        return f(this);
      }function Sn() {
        return _({}, h(this));
      }function Hn() {
        return h(this).overflow;
      }function xn() {
        return { input: this._i, format: this._f, locale: this._locale, isUTC: this._isUTC, strict: this._strict };
      }function jn(e, t) {
        G(0, [e, e.length], 0, t);
      }function Fn(e) {
        return Pn.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
      }function Cn(e) {
        return Pn.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4);
      }function On() {
        return we(this.year(), 1, 4);
      }function En() {
        var e = this.localeData()._week;return we(this.year(), e.dow, e.doy);
      }function Pn(e, t, n, a, r) {
        var i;return null == e ? ke(this, a, r).year : (i = we(e, a, r), t > i && (t = i), An.call(this, e, t, n, a, r));
      }function An(e, t, n, a, r) {
        var i = Ye(e, t, n, a, r),
            s = Le(i.year, 0, i.dayOfYear);return this.year(s.getUTCFullYear()), this.month(s.getUTCMonth()), this.date(s.getUTCDate()), this;
      }function Wn(e) {
        return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3);
      }function zn(e) {
        var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;return null == e ? t : this.add(e - t, "d");
      }function $n(e, t) {
        t[lr] = g(1e3 * ("0." + e));
      }function Nn() {
        return this._isUTC ? "UTC" : "";
      }function In() {
        return this._isUTC ? "Coordinated Universal Time" : "";
      }function Rn(e) {
        return Lt(1e3 * e);
      }function Jn() {
        return Lt.apply(null, arguments).parseZone();
      }function Un(e) {
        return e;
      }function Bn(e, t, n, a) {
        var r = nt(),
            i = c().set(a, t);return r[n](i, e);
      }function Gn(e, t, n) {
        if (o(e) && (t = e, e = void 0), e = e || "", null != t) return Bn(e, t, n, "month");var a,
            r = [];for (a = 0; a < 12; a++) {
          r[a] = Bn(e, a, n, "month");
        }return r;
      }function Vn(e, t, n, a) {
        "boolean" == typeof e ? (o(t) && (n = t, t = void 0), t = t || "") : (t = e, n = t, e = !1, o(t) && (n = t, t = void 0), t = t || "");var r = nt(),
            i = e ? r._week.dow : 0;if (null != n) return Bn(t, (n + i) % 7, a, "day");var s,
            d = [];for (s = 0; s < 7; s++) {
          d[s] = Bn(t, (s + i) % 7, a, "day");
        }return d;
      }function qn(e, t) {
        return Gn(e, t, "months");
      }function Kn(e, t) {
        return Gn(e, t, "monthsShort");
      }function Qn(e, t, n) {
        return Vn(e, t, n, "weekdays");
      }function Zn(e, t, n) {
        return Vn(e, t, n, "weekdaysShort");
      }function Xn(e, t, n) {
        return Vn(e, t, n, "weekdaysMin");
      }function ea() {
        var e = this._data;return this._milliseconds = ai(this._milliseconds), this._days = ai(this._days), this._months = ai(this._months), e.milliseconds = ai(e.milliseconds), e.seconds = ai(e.seconds), e.minutes = ai(e.minutes), e.hours = ai(e.hours), e.months = ai(e.months), e.years = ai(e.years), this;
      }function ta(e, t, n, a) {
        var r = Ut(t, n);return e._milliseconds += a * r._milliseconds, e._days += a * r._days, e._months += a * r._months, e._bubble();
      }function na(e, t) {
        return ta(this, e, t, 1);
      }function aa(e, t) {
        return ta(this, e, t, -1);
      }function ra(e) {
        return e < 0 ? Math.floor(e) : Math.ceil(e);
      }function ia() {
        var e,
            t,
            n,
            a,
            r,
            i = this._milliseconds,
            s = this._days,
            o = this._months,
            d = this._data;return i >= 0 && s >= 0 && o >= 0 || i <= 0 && s <= 0 && o <= 0 || (i += 864e5 * ra(oa(o) + s), s = 0, o = 0), d.milliseconds = i % 1e3, e = L(i / 1e3), d.seconds = e % 60, t = L(e / 60), d.minutes = t % 60, n = L(t / 60), d.hours = n % 24, s += L(n / 24), r = L(sa(s)), o += r, s -= ra(oa(r)), a = L(o / 12), o %= 12, d.days = s, d.months = o, d.years = a, this;
      }function sa(e) {
        return 4800 * e / 146097;
      }function oa(e) {
        return 146097 * e / 4800;
      }function da(e) {
        if (!this.isValid()) return NaN;var t,
            n,
            a = this._milliseconds;if ("month" === (e = A(e)) || "year" === e) return t = this._days + a / 864e5, n = this._months + sa(t), "month" === e ? n : n / 12;switch (t = this._days + Math.round(oa(this._months)), e) {case "week":
            return t / 7 + a / 6048e5;case "day":
            return t + a / 864e5;case "hour":
            return 24 * t + a / 36e5;case "minute":
            return 1440 * t + a / 6e4;case "second":
            return 86400 * t + a / 1e3;case "millisecond":
            return Math.floor(864e5 * t) + a;default:
            throw new Error("Unknown unit " + e);}
      }function ua() {
        return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * g(this._months / 12) : NaN;
      }function la(e) {
        return function () {
          return this.as(e);
        };
      }function _a(e) {
        return e = A(e), this.isValid() ? this[e + "s"]() : NaN;
      }function ca(e) {
        return function () {
          return this.isValid() ? this._data[e] : NaN;
        };
      }function ma() {
        return L(this.days() / 7);
      }function ha(e, t, n, a, r) {
        return r.relativeTime(t || 1, !!n, e, a);
      }function fa(e, t, n) {
        var a = Ut(e).abs(),
            r = vi(a.as("s")),
            i = vi(a.as("m")),
            s = vi(a.as("h")),
            o = vi(a.as("d")),
            d = vi(a.as("M")),
            u = vi(a.as("y")),
            l = r <= Li.ss && ["s", r] || r < Li.s && ["ss", r] || i <= 1 && ["m"] || i < Li.m && ["mm", i] || s <= 1 && ["h"] || s < Li.h && ["hh", s] || o <= 1 && ["d"] || o < Li.d && ["dd", o] || d <= 1 && ["M"] || d < Li.M && ["MM", d] || u <= 1 && ["y"] || ["yy", u];return l[2] = t, l[3] = +e > 0, l[4] = n, ha.apply(null, l);
      }function pa(e) {
        return void 0 === e ? vi : "function" == typeof e && (vi = e, !0);
      }function Ma(e, t) {
        return void 0 !== Li[e] && (void 0 === t ? Li[e] : (Li[e] = t, "s" === e && (Li.ss = t - 1), !0));
      }function ya(e) {
        if (!this.isValid()) return this.localeData().invalidDate();var t = this.localeData(),
            n = fa(this, !e, t);return e && (n = t.pastFuture(+this, n)), t.postformat(n);
      }function va() {
        if (!this.isValid()) return this.localeData().invalidDate();var e,
            t,
            n,
            a = gi(this._milliseconds) / 1e3,
            r = gi(this._days),
            i = gi(this._months);e = L(a / 60), t = L(e / 60), a %= 60, e %= 60, n = L(i / 12), i %= 12;var s = n,
            o = i,
            d = r,
            u = t,
            l = e,
            _ = a,
            c = this.asSeconds();return c ? (c < 0 ? "-" : "") + "P" + (s ? s + "Y" : "") + (o ? o + "M" : "") + (d ? d + "D" : "") + (u || l || _ ? "T" : "") + (u ? u + "H" : "") + (l ? l + "M" : "") + (_ ? _ + "S" : "") : "P0D";
      }var La, ga;ga = Array.prototype.some ? Array.prototype.some : function (e) {
        for (var t = Object(this), n = t.length >>> 0, a = 0; a < n; a++) {
          if (a in t && e.call(this, t[a], a, t)) return !0;
        }return !1;
      };var Ya = ga,
          ka = t.momentProperties = [],
          wa = !1,
          Da = {};t.suppressDeprecationWarnings = !1, t.deprecationHandler = null;var Ta;Ta = Object.keys ? Object.keys : function (e) {
        var t,
            n = [];for (t in e) {
          l(e, t) && n.push(t);
        }return n;
      };var ba,
          Sa = Ta,
          Ha = { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" },
          xa = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" },
          ja = /\d{1,2}/,
          Fa = { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" },
          Ca = {},
          Oa = {},
          Ea = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
          Pa = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
          Aa = {},
          Wa = {},
          za = /\d/,
          $a = /\d\d/,
          Na = /\d{3}/,
          Ia = /\d{4}/,
          Ra = /[+-]?\d{6}/,
          Ja = /\d\d?/,
          Ua = /\d\d\d\d?/,
          Ba = /\d\d\d\d\d\d?/,
          Ga = /\d{1,3}/,
          Va = /\d{1,4}/,
          qa = /[+-]?\d{1,6}/,
          Ka = /\d+/,
          Qa = /[+-]?\d+/,
          Za = /Z|[+-]\d\d:?\d\d/gi,
          Xa = /Z|[+-]\d\d(?::?\d\d)?/gi,
          er = /[+-]?\d+(\.\d{1,3})?/,
          tr = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
          nr = {},
          ar = {},
          rr = 0,
          ir = 1,
          sr = 2,
          or = 3,
          dr = 4,
          ur = 5,
          lr = 6,
          _r = 7,
          cr = 8;ba = Array.prototype.indexOf ? Array.prototype.indexOf : function (e) {
        var t;for (t = 0; t < this.length; ++t) {
          if (this[t] === e) return t;
        }return -1;
      };var mr = ba;G("M", ["MM", 2], "Mo", function () {
        return this.month() + 1;
      }), G("MMM", 0, 0, function (e) {
        return this.localeData().monthsShort(this, e);
      }), G("MMMM", 0, 0, function (e) {
        return this.localeData().months(this, e);
      }), P("month", "M"), z("month", 8), Z("M", Ja), Z("MM", Ja, $a), Z("MMM", function (e, t) {
        return t.monthsShortRegex(e);
      }), Z("MMMM", function (e, t) {
        return t.monthsRegex(e);
      }), ne(["M", "MM"], function (e, t) {
        t[ir] = g(e) - 1;
      }), ne(["MMM", "MMMM"], function (e, t, n, a) {
        var r = n._locale.monthsParse(e, a, n._strict);null != r ? t[ir] = r : h(n).invalidMonth = e;
      });var hr = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
          fr = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
          pr = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
          Mr = tr,
          yr = tr;G("Y", 0, 0, function () {
        var e = this.year();return e <= 9999 ? "" + e : "+" + e;
      }), G(0, ["YY", 2], 0, function () {
        return this.year() % 100;
      }), G(0, ["YYYY", 4], 0, "year"), G(0, ["YYYYY", 5], 0, "year"), G(0, ["YYYYYY", 6, !0], 0, "year"), P("year", "y"), z("year", 1), Z("Y", Qa), Z("YY", Ja, $a), Z("YYYY", Va, Ia), Z("YYYYY", qa, Ra), Z("YYYYYY", qa, Ra), ne(["YYYYY", "YYYYYY"], rr), ne("YYYY", function (e, n) {
        n[rr] = 2 === e.length ? t.parseTwoDigitYear(e) : g(e);
      }), ne("YY", function (e, n) {
        n[rr] = t.parseTwoDigitYear(e);
      }), ne("Y", function (e, t) {
        t[rr] = parseInt(e, 10);
      }), t.parseTwoDigitYear = function (e) {
        return g(e) + (g(e) > 68 ? 1900 : 2e3);
      };var vr = N("FullYear", !0);G("w", ["ww", 2], "wo", "week"), G("W", ["WW", 2], "Wo", "isoWeek"), P("week", "w"), P("isoWeek", "W"), z("week", 5), z("isoWeek", 5), Z("w", Ja), Z("ww", Ja, $a), Z("W", Ja), Z("WW", Ja, $a), ae(["w", "ww", "W", "WW"], function (e, t, n, a) {
        t[a.substr(0, 1)] = g(e);
      });var Lr = { dow: 0, doy: 6 };G("d", 0, "do", "day"), G("dd", 0, 0, function (e) {
        return this.localeData().weekdaysMin(this, e);
      }), G("ddd", 0, 0, function (e) {
        return this.localeData().weekdaysShort(this, e);
      }), G("dddd", 0, 0, function (e) {
        return this.localeData().weekdays(this, e);
      }), G("e", 0, 0, "weekday"), G("E", 0, 0, "isoWeekday"), P("day", "d"), P("weekday", "e"), P("isoWeekday", "E"), z("day", 11), z("weekday", 11), z("isoWeekday", 11), Z("d", Ja), Z("e", Ja), Z("E", Ja), Z("dd", function (e, t) {
        return t.weekdaysMinRegex(e);
      }), Z("ddd", function (e, t) {
        return t.weekdaysShortRegex(e);
      }), Z("dddd", function (e, t) {
        return t.weekdaysRegex(e);
      }), ae(["dd", "ddd", "dddd"], function (e, t, n, a) {
        var r = n._locale.weekdaysParse(e, a, n._strict);null != r ? t.d = r : h(n).invalidWeekday = e;
      }), ae(["d", "e", "E"], function (e, t, n, a) {
        t[a] = g(e);
      });var gr = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
          Yr = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
          kr = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
          wr = tr,
          Dr = tr,
          Tr = tr;G("H", ["HH", 2], 0, "hour"), G("h", ["hh", 2], 0, Je), G("k", ["kk", 2], 0, Ue), G("hmm", 0, 0, function () {
        return "" + Je.apply(this) + B(this.minutes(), 2);
      }), G("hmmss", 0, 0, function () {
        return "" + Je.apply(this) + B(this.minutes(), 2) + B(this.seconds(), 2);
      }), G("Hmm", 0, 0, function () {
        return "" + this.hours() + B(this.minutes(), 2);
      }), G("Hmmss", 0, 0, function () {
        return "" + this.hours() + B(this.minutes(), 2) + B(this.seconds(), 2);
      }), Be("a", !0), Be("A", !1), P("hour", "h"), z("hour", 13), Z("a", Ge), Z("A", Ge), Z("H", Ja), Z("h", Ja), Z("k", Ja), Z("HH", Ja, $a), Z("hh", Ja, $a), Z("kk", Ja, $a), Z("hmm", Ua), Z("hmmss", Ba), Z("Hmm", Ua), Z("Hmmss", Ba), ne(["H", "HH"], or), ne(["k", "kk"], function (e, t, n) {
        var a = g(e);t[or] = 24 === a ? 0 : a;
      }), ne(["a", "A"], function (e, t, n) {
        n._isPm = n._locale.isPM(e), n._meridiem = e;
      }), ne(["h", "hh"], function (e, t, n) {
        t[or] = g(e), h(n).bigHour = !0;
      }), ne("hmm", function (e, t, n) {
        var a = e.length - 2;t[or] = g(e.substr(0, a)), t[dr] = g(e.substr(a)), h(n).bigHour = !0;
      }), ne("hmmss", function (e, t, n) {
        var a = e.length - 4,
            r = e.length - 2;t[or] = g(e.substr(0, a)), t[dr] = g(e.substr(a, 2)), t[ur] = g(e.substr(r)), h(n).bigHour = !0;
      }), ne("Hmm", function (e, t, n) {
        var a = e.length - 2;t[or] = g(e.substr(0, a)), t[dr] = g(e.substr(a));
      }), ne("Hmmss", function (e, t, n) {
        var a = e.length - 4,
            r = e.length - 2;t[or] = g(e.substr(0, a)), t[dr] = g(e.substr(a, 2)), t[ur] = g(e.substr(r));
      });var br,
          Sr = /[ap]\.?m?\.?/i,
          Hr = N("Hours", !0),
          xr = { calendar: Ha, longDateFormat: xa, invalidDate: "Invalid date", ordinal: "%d", dayOfMonthOrdinalParse: ja, relativeTime: Fa, months: fr, monthsShort: pr, week: Lr, weekdays: gr, weekdaysMin: kr, weekdaysShort: Yr, meridiemParse: Sr },
          jr = {},
          Fr = {},
          Cr = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
          Or = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
          Er = /Z|[+-]\d\d(?::?\d\d)?/,
          Pr = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/]],
          Ar = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]],
          Wr = /^\/?Date\((\-?\d+)/i,
          zr = /^((?:Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d?\d\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(?:\d\d)?\d\d\s)(\d\d:\d\d)(\:\d\d)?(\s(?:UT|GMT|[ECMP][SD]T|[A-IK-Za-ik-z]|[+-]\d{4}))$/;t.createFromInputFallback = w("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function (e) {
        e._d = new Date(e._i + (e._useUTC ? " UTC" : ""));
      }), t.ISO_8601 = function () {}, t.RFC_2822 = function () {};var $r = w("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
        var e = Lt.apply(null, arguments);return this.isValid() && e.isValid() ? e < this ? this : e : p();
      }),
          Nr = w("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
        var e = Lt.apply(null, arguments);return this.isValid() && e.isValid() ? e > this ? this : e : p();
      }),
          Ir = function Ir() {
        return Date.now ? Date.now() : +new Date();
      },
          Rr = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];xt("Z", ":"), xt("ZZ", ""), Z("Z", Xa), Z("ZZ", Xa), ne(["Z", "ZZ"], function (e, t, n) {
        n._useUTC = !0, n._tzm = jt(Xa, e);
      });var Jr = /([\+\-]|\d\d)/gi;t.updateOffset = function () {};var Ur = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
          Br = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;Ut.fn = bt.prototype, Ut.invalid = Tt;var Gr = qt(1, "add"),
          Vr = qt(-1, "subtract");t.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", t.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";var qr = w("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (e) {
        return void 0 === e ? this.localeData() : this.locale(e);
      });G(0, ["gg", 2], 0, function () {
        return this.weekYear() % 100;
      }), G(0, ["GG", 2], 0, function () {
        return this.isoWeekYear() % 100;
      }), jn("gggg", "weekYear"), jn("ggggg", "weekYear"), jn("GGGG", "isoWeekYear"), jn("GGGGG", "isoWeekYear"), P("weekYear", "gg"), P("isoWeekYear", "GG"), z("weekYear", 1), z("isoWeekYear", 1), Z("G", Qa), Z("g", Qa), Z("GG", Ja, $a), Z("gg", Ja, $a), Z("GGGG", Va, Ia), Z("gggg", Va, Ia), Z("GGGGG", qa, Ra), Z("ggggg", qa, Ra), ae(["gggg", "ggggg", "GGGG", "GGGGG"], function (e, t, n, a) {
        t[a.substr(0, 2)] = g(e);
      }), ae(["gg", "GG"], function (e, n, a, r) {
        n[r] = t.parseTwoDigitYear(e);
      }), G("Q", 0, "Qo", "quarter"), P("quarter", "Q"), z("quarter", 7), Z("Q", za), ne("Q", function (e, t) {
        t[ir] = 3 * (g(e) - 1);
      }), G("D", ["DD", 2], "Do", "date"), P("date", "D"), z("date", 9), Z("D", Ja), Z("DD", Ja, $a), Z("Do", function (e, t) {
        return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
      }), ne(["D", "DD"], sr), ne("Do", function (e, t) {
        t[sr] = g(e.match(Ja)[0], 10);
      });var Kr = N("Date", !0);G("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), P("dayOfYear", "DDD"), z("dayOfYear", 4), Z("DDD", Ga), Z("DDDD", Na), ne(["DDD", "DDDD"], function (e, t, n) {
        n._dayOfYear = g(e);
      }), G("m", ["mm", 2], 0, "minute"), P("minute", "m"), z("minute", 14), Z("m", Ja), Z("mm", Ja, $a), ne(["m", "mm"], dr);var Qr = N("Minutes", !1);G("s", ["ss", 2], 0, "second"), P("second", "s"), z("second", 15), Z("s", Ja), Z("ss", Ja, $a), ne(["s", "ss"], ur);var Zr = N("Seconds", !1);G("S", 0, 0, function () {
        return ~~(this.millisecond() / 100);
      }), G(0, ["SS", 2], 0, function () {
        return ~~(this.millisecond() / 10);
      }), G(0, ["SSS", 3], 0, "millisecond"), G(0, ["SSSS", 4], 0, function () {
        return 10 * this.millisecond();
      }), G(0, ["SSSSS", 5], 0, function () {
        return 100 * this.millisecond();
      }), G(0, ["SSSSSS", 6], 0, function () {
        return 1e3 * this.millisecond();
      }), G(0, ["SSSSSSS", 7], 0, function () {
        return 1e4 * this.millisecond();
      }), G(0, ["SSSSSSSS", 8], 0, function () {
        return 1e5 * this.millisecond();
      }), G(0, ["SSSSSSSSS", 9], 0, function () {
        return 1e6 * this.millisecond();
      }), P("millisecond", "ms"), z("millisecond", 16), Z("S", Ga, za), Z("SS", Ga, $a), Z("SSS", Ga, Na);var Xr;for (Xr = "SSSS"; Xr.length <= 9; Xr += "S") {
        Z(Xr, Ka);
      }for (Xr = "S"; Xr.length <= 9; Xr += "S") {
        ne(Xr, $n);
      }var ei = N("Milliseconds", !1);G("z", 0, 0, "zoneAbbr"), G("zz", 0, 0, "zoneName");var ti = y.prototype;ti.add = Gr, ti.calendar = Zt, ti.clone = Xt, ti.diff = on, ti.endOf = Ln, ti.format = cn, ti.from = mn, ti.fromNow = hn, ti.to = fn, ti.toNow = pn, ti.get = J, ti.invalidAt = Hn, ti.isAfter = en, ti.isBefore = tn, ti.isBetween = nn, ti.isSame = an, ti.isSameOrAfter = rn, ti.isSameOrBefore = sn, ti.isValid = bn, ti.lang = qr, ti.locale = Mn, ti.localeData = yn, ti.max = Nr, ti.min = $r, ti.parsingFlags = Sn, ti.set = U, ti.startOf = vn, ti.subtract = Vr, ti.toArray = wn, ti.toObject = Dn, ti.toDate = kn, ti.toISOString = ln, ti.inspect = _n, ti.toJSON = Tn, ti.toString = un, ti.unix = Yn, ti.valueOf = gn, ti.creationData = xn, ti.year = vr, ti.isLeapYear = ye, ti.weekYear = Fn, ti.isoWeekYear = Cn, ti.quarter = ti.quarters = Wn, ti.month = _e, ti.daysInMonth = ce, ti.week = ti.weeks = Se, ti.isoWeek = ti.isoWeeks = He, ti.weeksInYear = En, ti.isoWeeksInYear = On, ti.date = Kr, ti.day = ti.days = Ae, ti.weekday = We, ti.isoWeekday = ze, ti.dayOfYear = zn, ti.hour = ti.hours = Hr, ti.minute = ti.minutes = Qr, ti.second = ti.seconds = Zr, ti.millisecond = ti.milliseconds = ei, ti.utcOffset = Ot, ti.utc = Pt, ti.local = At, ti.parseZone = Wt, ti.hasAlignedHourOffset = zt, ti.isDST = $t, ti.isLocal = It, ti.isUtcOffset = Rt, ti.isUtc = Jt, ti.isUTC = Jt, ti.zoneAbbr = Nn, ti.zoneName = In, ti.dates = w("dates accessor is deprecated. Use date instead.", Kr), ti.months = w("months accessor is deprecated. Use month instead", _e), ti.years = w("years accessor is deprecated. Use year instead", vr), ti.zone = w("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", Et), ti.isDSTShifted = w("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", Nt);var ni = H.prototype;ni.calendar = x, ni.longDateFormat = j, ni.invalidDate = F, ni.ordinal = C, ni.preparse = Un, ni.postformat = Un, ni.relativeTime = O, ni.pastFuture = E, ni.set = b, ni.months = se, ni.monthsShort = oe, ni.monthsParse = ue, ni.monthsRegex = he, ni.monthsShortRegex = me, ni.week = De, ni.firstDayOfYear = be, ni.firstDayOfWeek = Te, ni.weekdays = Fe, ni.weekdaysMin = Oe, ni.weekdaysShort = Ce, ni.weekdaysParse = Pe, ni.weekdaysRegex = $e, ni.weekdaysShortRegex = Ne, ni.weekdaysMinRegex = Ie, ni.isPM = Ve, ni.meridiem = qe, Xe("en", { dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/, ordinal: function ordinal(e) {
          var t = e % 10;return e + (1 === g(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th");
        } }), t.lang = w("moment.lang is deprecated. Use moment.locale instead.", Xe), t.langData = w("moment.langData is deprecated. Use moment.localeData instead.", nt);var ai = Math.abs,
          ri = la("ms"),
          ii = la("s"),
          si = la("m"),
          oi = la("h"),
          di = la("d"),
          ui = la("w"),
          li = la("M"),
          _i = la("y"),
          ci = ca("milliseconds"),
          mi = ca("seconds"),
          hi = ca("minutes"),
          fi = ca("hours"),
          pi = ca("days"),
          Mi = ca("months"),
          yi = ca("years"),
          vi = Math.round,
          Li = { ss: 44, s: 45, m: 45, h: 22, d: 26, M: 11 },
          gi = Math.abs,
          Yi = bt.prototype;return Yi.isValid = Dt, Yi.abs = ea, Yi.add = na, Yi.subtract = aa, Yi.as = da, Yi.asMilliseconds = ri, Yi.asSeconds = ii, Yi.asMinutes = si, Yi.asHours = oi, Yi.asDays = di, Yi.asWeeks = ui, Yi.asMonths = li, Yi.asYears = _i, Yi.valueOf = ua, Yi._bubble = ia, Yi.get = _a, Yi.milliseconds = ci, Yi.seconds = mi, Yi.minutes = hi, Yi.hours = fi, Yi.days = pi, Yi.weeks = ma, Yi.months = Mi, Yi.years = yi, Yi.humanize = ya, Yi.toISOString = va, Yi.toString = va, Yi.toJSON = va, Yi.locale = Mn, Yi.localeData = yn, Yi.toIsoString = w("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", va), Yi.lang = qr, G("X", 0, 0, "unix"), G("x", 0, 0, "valueOf"), Z("x", Qa), Z("X", er), ne("X", function (e, t, n) {
        n._d = new Date(1e3 * parseFloat(e, 10));
      }), ne("x", function (e, t, n) {
        n._d = new Date(g(e));
      }), t.version = "2.18.1", function (e) {
        La = e;
      }(Lt), t.fn = ti, t.min = Yt, t.max = kt, t.now = Ir, t.utc = c, t.unix = Rn, t.months = qn, t.isDate = d, t.locale = Xe, t.invalid = p, t.duration = Ut, t.isMoment = v, t.weekdays = Qn, t.parseZone = Jn, t.localeData = nt, t.isDuration = St, t.monthsShort = Kn, t.weekdaysMin = Xn, t.defineLocale = et, t.updateLocale = tt, t.locales = at, t.weekdaysShort = Zn, t.normalizeUnits = A, t.relativeTimeRounding = pa, t.relativeTimeThreshold = Ma, t.calendarFormat = Qt, t.prototype = ti, t;
    });
  }).call(t, n(9)(e));
}, function (e, t, n) {
  "use strict";
  function a(e) {
    return "[object Array]" === w.call(e);
  }function r(e) {
    return "[object ArrayBuffer]" === w.call(e);
  }function i(e) {
    return "undefined" != typeof FormData && e instanceof FormData;
  }function s(e) {
    return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer;
  }function o(e) {
    return "string" == typeof e;
  }function d(e) {
    return "number" == typeof e;
  }function u(e) {
    return void 0 === e;
  }function l(e) {
    return null !== e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e));
  }function _(e) {
    return "[object Date]" === w.call(e);
  }function c(e) {
    return "[object File]" === w.call(e);
  }function m(e) {
    return "[object Blob]" === w.call(e);
  }function h(e) {
    return "[object Function]" === w.call(e);
  }function f(e) {
    return l(e) && h(e.pipe);
  }function p(e) {
    return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams;
  }function M(e) {
    return e.replace(/^\s*/, "").replace(/\s*$/, "");
  }function y() {
    return ("undefined" == typeof navigator || "ReactNative" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document;
  }function v(e, t) {
    if (null !== e && void 0 !== e) if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) || a(e) || (e = [e]), a(e)) for (var n = 0, r = e.length; n < r; n++) {
      t.call(null, e[n], n, e);
    } else for (var i in e) {
      Object.prototype.hasOwnProperty.call(e, i) && t.call(null, e[i], i, e);
    }
  }function L() {
    function e(e, n) {
      "object" == _typeof(t[n]) && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? t[n] = L(t[n], e) : t[n] = e;
    }for (var t = {}, n = 0, a = arguments.length; n < a; n++) {
      v(arguments[n], e);
    }return t;
  }function g(e, t, n) {
    return v(t, function (t, a) {
      e[a] = n && "function" == typeof t ? Y(t, n) : t;
    }), e;
  }var Y = n(4),
      k = n(132),
      w = Object.prototype.toString;e.exports = { isArray: a, isArrayBuffer: r, isBuffer: k, isFormData: i, isArrayBufferView: s, isString: o, isNumber: d, isObject: l, isUndefined: u, isDate: _, isFile: c, isBlob: m, isFunction: h, isStream: f, isURLSearchParams: p, isStandardBrowserEnv: y, forEach: v, merge: L, extend: g, trim: M };
}, function (e, t) {
  e.exports = function (e, t, n, a, r) {
    var i,
        s = e = e || {},
        o = _typeof(e.default);"object" !== o && "function" !== o || (i = e, s = e.default);var d = "function" == typeof s ? s.options : s;t && (d.render = t.render, d.staticRenderFns = t.staticRenderFns), a && (d._scopeId = a);var u;if (r ? (u = function u(e) {
      e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, e || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), n && n.call(this, e), e && e._registeredComponents && e._registeredComponents.add(r);
    }, d._ssrRegister = u) : n && (u = n), u) {
      var l = d.functional,
          _ = l ? d.render : d.beforeCreate;l ? d.render = function (e, t) {
        return u.call(t), _(e, t);
      } : d.beforeCreate = _ ? [].concat(_, u) : [u];
    }return { esModule: i, exports: s, options: d };
  };
}, function (e, t, n) {
  "use strict";
  (function (t) {
    function a(e, t) {
      !r.isUndefined(e) && r.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t);
    }var r = n(1),
        i = n(135),
        s = { "Content-Type": "application/x-www-form-urlencoded" },
        o = { adapter: function () {
        var e;return "undefined" != typeof XMLHttpRequest ? e = n(5) : void 0 !== t && (e = n(5)), e;
      }(), transformRequest: [function (e, t) {
        return i(t, "Content-Type"), r.isFormData(e) || r.isArrayBuffer(e) || r.isBuffer(e) || r.isStream(e) || r.isFile(e) || r.isBlob(e) ? e : r.isArrayBufferView(e) ? e.buffer : r.isURLSearchParams(e) ? (a(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : r.isObject(e) ? (a(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e;
      }], transformResponse: [function (e) {
        if ("string" == typeof e) try {
          e = JSON.parse(e);
        } catch (e) {}return e;
      }], timeout: 0, xsrfCookieName: "XSRF-TOKEN", xsrfHeaderName: "X-XSRF-TOKEN", maxContentLength: -1, validateStatus: function validateStatus(e) {
        return e >= 200 && e < 300;
      } };o.headers = { common: { Accept: "application/json, text/plain, */*" } }, r.forEach(["delete", "get", "head"], function (e) {
      o.headers[e] = {};
    }), r.forEach(["post", "put", "patch"], function (e) {
      o.headers[e] = r.merge(s);
    }), e.exports = o;
  }).call(t, n(134));
}, function (e, t, n) {
  "use strict";
  e.exports = function (e, t) {
    return function () {
      for (var n = new Array(arguments.length), a = 0; a < n.length; a++) {
        n[a] = arguments[a];
      }return e.apply(t, n);
    };
  };
}, function (e, t, n) {
  "use strict";
  var a = n(1),
      r = n(136),
      i = n(138),
      s = n(139),
      o = n(140),
      d = n(6),
      u = "undefined" != typeof window && window.btoa && window.btoa.bind(window) || n(141);e.exports = function (e) {
    return new Promise(function (t, l) {
      var _ = e.data,
          c = e.headers;a.isFormData(_) && delete c["Content-Type"];var m = new XMLHttpRequest(),
          h = "onreadystatechange",
          f = !1;if ("undefined" == typeof window || !window.XDomainRequest || "withCredentials" in m || o(e.url) || (m = new window.XDomainRequest(), h = "onload", f = !0, m.onprogress = function () {}, m.ontimeout = function () {}), e.auth) {
        var p = e.auth.username || "",
            M = e.auth.password || "";c.Authorization = "Basic " + u(p + ":" + M);
      }if (m.open(e.method.toUpperCase(), i(e.url, e.params, e.paramsSerializer), !0), m.timeout = e.timeout, m[h] = function () {
        if (m && (4 === m.readyState || f) && (0 !== m.status || m.responseURL && 0 === m.responseURL.indexOf("file:"))) {
          var n = "getAllResponseHeaders" in m ? s(m.getAllResponseHeaders()) : null,
              a = e.responseType && "text" !== e.responseType ? m.response : m.responseText,
              i = { data: a, status: 1223 === m.status ? 204 : m.status, statusText: 1223 === m.status ? "No Content" : m.statusText, headers: n, config: e, request: m };r(t, l, i), m = null;
        }
      }, m.onerror = function () {
        l(d("Network Error", e, null, m)), m = null;
      }, m.ontimeout = function () {
        l(d("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED", m)), m = null;
      }, a.isStandardBrowserEnv()) {
        var y = n(142),
            v = (e.withCredentials || o(e.url)) && e.xsrfCookieName ? y.read(e.xsrfCookieName) : void 0;v && (c[e.xsrfHeaderName] = v);
      }if ("setRequestHeader" in m && a.forEach(c, function (e, t) {
        void 0 === _ && "content-type" === t.toLowerCase() ? delete c[t] : m.setRequestHeader(t, e);
      }), e.withCredentials && (m.withCredentials = !0), e.responseType) try {
        m.responseType = e.responseType;
      } catch (t) {
        if ("json" !== e.responseType) throw t;
      }"function" == typeof e.onDownloadProgress && m.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && m.upload && m.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then(function (e) {
        m && (m.abort(), l(e), m = null);
      }), void 0 === _ && (_ = null), m.send(_);
    });
  };
}, function (e, t, n) {
  "use strict";
  var a = n(137);e.exports = function (e, t, n, r, i) {
    var s = new Error(e);return a(s, t, n, r, i);
  };
}, function (e, t, n) {
  "use strict";
  e.exports = function (e) {
    return !(!e || !e.__CANCEL__);
  };
}, function (e, t, n) {
  "use strict";
  function a(e) {
    this.message = e;
  }a.prototype.toString = function () {
    return "Cancel" + (this.message ? ": " + this.message : "");
  }, a.prototype.__CANCEL__ = !0, e.exports = a;
}, function (e, t) {
  e.exports = function (e) {
    return e.webpackPolyfill || (e.deprecate = function () {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", { enumerable: !0, get: function get() {
        return e.l;
      } }), Object.defineProperty(e, "id", { enumerable: !0, get: function get() {
        return e.i;
      } }), e.webpackPolyfill = 1), e;
  };
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    return e.defineLocale("af", { months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"), monthsShort: "Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"), weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"), weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"), weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"), meridiemParse: /vm|nm/i, isPM: function isPM(e) {
        return (/^nm$/i.test(e)
        );
      }, meridiem: function meridiem(e, t, n) {
        return e < 12 ? n ? "vm" : "VM" : n ? "nm" : "NM";
      }, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Vandag om] LT", nextDay: "[Môre om] LT", nextWeek: "dddd [om] LT", lastDay: "[Gister om] LT", lastWeek: "[Laas] dddd [om] LT", sameElse: "L" }, relativeTime: { future: "oor %s", past: "%s gelede", s: "'n paar sekondes", m: "'n minuut", mm: "%d minute", h: "'n uur", hh: "%d ure", d: "'n dag", dd: "%d dae", M: "'n maand", MM: "%d maande", y: "'n jaar", yy: "%d jaar" }, dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/, ordinal: function ordinal(e) {
        return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de");
      }, week: { dow: 1, doy: 4 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    var t = { 1: "١", 2: "٢", 3: "٣", 4: "٤", 5: "٥", 6: "٦", 7: "٧", 8: "٨", 9: "٩", 0: "٠" },
        n = { "١": "1", "٢": "2", "٣": "3", "٤": "4", "٥": "5", "٦": "6", "٧": "7", "٨": "8", "٩": "9", "٠": "0" },
        a = function a(e) {
      return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5;
    },
        r = { s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"], m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"], h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"], d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"], M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"], y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"] },
        i = function i(e) {
      return function (t, n, i, s) {
        var o = a(t),
            d = r[e][a(t)];return 2 === o && (d = d[n ? 0 : 1]), d.replace(/%d/i, t);
      };
    },
        s = ["كانون الثاني يناير", "شباط فبراير", "آذار مارس", "نيسان أبريل", "أيار مايو", "حزيران يونيو", "تموز يوليو", "آب أغسطس", "أيلول سبتمبر", "تشرين الأول أكتوبر", "تشرين الثاني نوفمبر", "كانون الأول ديسمبر"];return e.defineLocale("ar", { months: s, monthsShort: s, weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"), weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "D/‏M/‏YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, meridiemParse: /ص|م/, isPM: function isPM(e) {
        return "م" === e;
      }, meridiem: function meridiem(e, t, n) {
        return e < 12 ? "ص" : "م";
      }, calendar: { sameDay: "[اليوم عند الساعة] LT", nextDay: "[غدًا عند الساعة] LT", nextWeek: "dddd [عند الساعة] LT", lastDay: "[أمس عند الساعة] LT", lastWeek: "dddd [عند الساعة] LT", sameElse: "L" }, relativeTime: { future: "بعد %s", past: "منذ %s", s: i("s"), m: i("m"), mm: i("m"), h: i("h"), hh: i("h"), d: i("d"), dd: i("d"), M: i("M"), MM: i("M"), y: i("y"), yy: i("y") }, preparse: function preparse(e) {
        return e.replace(/\u200f/g, "").replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (e) {
          return n[e];
        }).replace(/،/g, ",");
      }, postformat: function postformat(e) {
        return e.replace(/\d/g, function (e) {
          return t[e];
        }).replace(/,/g, "،");
      }, week: { dow: 6, doy: 12 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    return e.defineLocale("ar-dz", { months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), weekdaysShort: "احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"), weekdaysMin: "أح_إث_ثلا_أر_خم_جم_سب".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[اليوم على الساعة] LT", nextDay: "[غدا على الساعة] LT", nextWeek: "dddd [على الساعة] LT", lastDay: "[أمس على الساعة] LT", lastWeek: "dddd [على الساعة] LT", sameElse: "L" }, relativeTime: { future: "في %s", past: "منذ %s", s: "ثوان", m: "دقيقة", mm: "%d دقائق", h: "ساعة", hh: "%d ساعات", d: "يوم", dd: "%d أيام", M: "شهر", MM: "%d أشهر", y: "سنة", yy: "%d سنوات" }, week: { dow: 0, doy: 4 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    return e.defineLocale("ar-kw", { months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"), monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"), weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"), weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[اليوم على الساعة] LT", nextDay: "[غدا على الساعة] LT", nextWeek: "dddd [على الساعة] LT", lastDay: "[أمس على الساعة] LT", lastWeek: "dddd [على الساعة] LT", sameElse: "L" }, relativeTime: { future: "في %s", past: "منذ %s", s: "ثوان", m: "دقيقة", mm: "%d دقائق", h: "ساعة", hh: "%d ساعات", d: "يوم", dd: "%d أيام", M: "شهر", MM: "%d أشهر", y: "سنة", yy: "%d سنوات" }, week: { dow: 0, doy: 12 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    var t = { 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 0: "0" },
        n = function n(e) {
      return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5;
    },
        a = { s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"], m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"], h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"], d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"], M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"], y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"] },
        r = function r(e) {
      return function (t, r, i, s) {
        var o = n(t),
            d = a[e][n(t)];return 2 === o && (d = d[r ? 0 : 1]), d.replace(/%d/i, t);
      };
    },
        i = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];return e.defineLocale("ar-ly", { months: i, monthsShort: i, weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"), weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "D/‏M/‏YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, meridiemParse: /ص|م/, isPM: function isPM(e) {
        return "م" === e;
      }, meridiem: function meridiem(e, t, n) {
        return e < 12 ? "ص" : "م";
      }, calendar: { sameDay: "[اليوم عند الساعة] LT", nextDay: "[غدًا عند الساعة] LT", nextWeek: "dddd [عند الساعة] LT", lastDay: "[أمس عند الساعة] LT", lastWeek: "dddd [عند الساعة] LT", sameElse: "L" }, relativeTime: { future: "بعد %s", past: "منذ %s", s: r("s"), m: r("m"), mm: r("m"), h: r("h"), hh: r("h"), d: r("d"), dd: r("d"), M: r("M"), MM: r("M"), y: r("y"), yy: r("y") }, preparse: function preparse(e) {
        return e.replace(/\u200f/g, "").replace(/،/g, ",");
      }, postformat: function postformat(e) {
        return e.replace(/\d/g, function (e) {
          return t[e];
        }).replace(/,/g, "،");
      }, week: { dow: 6, doy: 12 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    return e.defineLocale("ar-ma", { months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"), monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"), weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"), weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[اليوم على الساعة] LT", nextDay: "[غدا على الساعة] LT", nextWeek: "dddd [على الساعة] LT", lastDay: "[أمس على الساعة] LT", lastWeek: "dddd [على الساعة] LT", sameElse: "L" }, relativeTime: { future: "في %s", past: "منذ %s", s: "ثوان", m: "دقيقة", mm: "%d دقائق", h: "ساعة", hh: "%d ساعات", d: "يوم", dd: "%d أيام", M: "شهر", MM: "%d أشهر", y: "سنة", yy: "%d سنوات" }, week: { dow: 6, doy: 12 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    var t = { 1: "١", 2: "٢", 3: "٣", 4: "٤", 5: "٥", 6: "٦", 7: "٧", 8: "٨", 9: "٩", 0: "٠" },
        n = { "١": "1", "٢": "2", "٣": "3", "٤": "4", "٥": "5", "٦": "6", "٧": "7", "٨": "8", "٩": "9", "٠": "0" };return e.defineLocale("ar-sa", { months: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), monthsShort: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"), weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, meridiemParse: /ص|م/, isPM: function isPM(e) {
        return "م" === e;
      }, meridiem: function meridiem(e, t, n) {
        return e < 12 ? "ص" : "م";
      }, calendar: { sameDay: "[اليوم على الساعة] LT", nextDay: "[غدا على الساعة] LT", nextWeek: "dddd [على الساعة] LT", lastDay: "[أمس على الساعة] LT", lastWeek: "dddd [على الساعة] LT", sameElse: "L" }, relativeTime: { future: "في %s", past: "منذ %s", s: "ثوان", m: "دقيقة", mm: "%d دقائق", h: "ساعة", hh: "%d ساعات", d: "يوم", dd: "%d أيام", M: "شهر", MM: "%d أشهر", y: "سنة", yy: "%d سنوات" }, preparse: function preparse(e) {
        return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (e) {
          return n[e];
        }).replace(/،/g, ",");
      }, postformat: function postformat(e) {
        return e.replace(/\d/g, function (e) {
          return t[e];
        }).replace(/,/g, "،");
      }, week: { dow: 0, doy: 6 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    return e.defineLocale("ar-tn", { months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"), weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[اليوم على الساعة] LT", nextDay: "[غدا على الساعة] LT", nextWeek: "dddd [على الساعة] LT", lastDay: "[أمس على الساعة] LT", lastWeek: "dddd [على الساعة] LT", sameElse: "L" }, relativeTime: { future: "في %s", past: "منذ %s", s: "ثوان", m: "دقيقة", mm: "%d دقائق", h: "ساعة", hh: "%d ساعات", d: "يوم", dd: "%d أيام", M: "شهر", MM: "%d أشهر", y: "سنة", yy: "%d سنوات" }, week: { dow: 1, doy: 4 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    var t = { 1: "-inci", 5: "-inci", 8: "-inci", 70: "-inci", 80: "-inci", 2: "-nci", 7: "-nci", 20: "-nci", 50: "-nci", 3: "-üncü", 4: "-üncü", 100: "-üncü", 6: "-ncı", 9: "-uncu", 10: "-uncu", 30: "-uncu", 60: "-ıncı", 90: "-ıncı" };return e.defineLocale("az", { months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"), monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"), weekdays: "Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"), weekdaysShort: "Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"), weekdaysMin: "Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[bugün saat] LT", nextDay: "[sabah saat] LT", nextWeek: "[gələn həftə] dddd [saat] LT", lastDay: "[dünən] LT", lastWeek: "[keçən həftə] dddd [saat] LT", sameElse: "L" }, relativeTime: { future: "%s sonra", past: "%s əvvəl", s: "birneçə saniyyə", m: "bir dəqiqə", mm: "%d dəqiqə", h: "bir saat", hh: "%d saat", d: "bir gün", dd: "%d gün", M: "bir ay", MM: "%d ay", y: "bir il", yy: "%d il" }, meridiemParse: /gecə|səhər|gündüz|axşam/, isPM: function isPM(e) {
        return (/^(gündüz|axşam)$/.test(e)
        );
      }, meridiem: function meridiem(e, t, n) {
        return e < 4 ? "gecə" : e < 12 ? "səhər" : e < 17 ? "gündüz" : "axşam";
      }, dayOfMonthOrdinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/, ordinal: function ordinal(e) {
        if (0 === e) return e + "-ıncı";var n = e % 10,
            a = e % 100 - n,
            r = e >= 100 ? 100 : null;return e + (t[n] || t[a] || t[r]);
      }, week: { dow: 1, doy: 7 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    function t(e, t) {
      var n = e.split("_");return t % 10 == 1 && t % 100 != 11 ? n[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? n[1] : n[2];
    }function n(e, n, a) {
      var r = { mm: n ? "хвіліна_хвіліны_хвілін" : "хвіліну_хвіліны_хвілін", hh: n ? "гадзіна_гадзіны_гадзін" : "гадзіну_гадзіны_гадзін", dd: "дзень_дні_дзён", MM: "месяц_месяцы_месяцаў", yy: "год_гады_гадоў" };return "m" === a ? n ? "хвіліна" : "хвіліну" : "h" === a ? n ? "гадзіна" : "гадзіну" : e + " " + t(r[a], +e);
    }return e.defineLocale("be", { months: { format: "студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split("_"), standalone: "студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split("_") }, monthsShort: "студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split("_"), weekdays: { format: "нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split("_"), standalone: "нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split("_"), isFormat: /\[ ?[Вв] ?(?:мінулую|наступную)? ?\] ?dddd/ }, weekdaysShort: "нд_пн_ат_ср_чц_пт_сб".split("_"), weekdaysMin: "нд_пн_ат_ср_чц_пт_сб".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY г.", LLL: "D MMMM YYYY г., HH:mm", LLLL: "dddd, D MMMM YYYY г., HH:mm" }, calendar: { sameDay: "[Сёння ў] LT", nextDay: "[Заўтра ў] LT", lastDay: "[Учора ў] LT", nextWeek: function nextWeek() {
          return "[У] dddd [ў] LT";
        }, lastWeek: function lastWeek() {
          switch (this.day()) {case 0:case 3:case 5:case 6:
              return "[У мінулую] dddd [ў] LT";case 1:case 2:case 4:
              return "[У мінулы] dddd [ў] LT";}
        }, sameElse: "L" }, relativeTime: { future: "праз %s", past: "%s таму", s: "некалькі секунд", m: n, mm: n, h: n, hh: n, d: "дзень", dd: n, M: "месяц", MM: n, y: "год", yy: n }, meridiemParse: /ночы|раніцы|дня|вечара/, isPM: function isPM(e) {
        return (/^(дня|вечара)$/.test(e)
        );
      }, meridiem: function meridiem(e, t, n) {
        return e < 4 ? "ночы" : e < 12 ? "раніцы" : e < 17 ? "дня" : "вечара";
      }, dayOfMonthOrdinalParse: /\d{1,2}-(і|ы|га)/, ordinal: function ordinal(e, t) {
        switch (t) {case "M":case "d":case "DDD":case "w":case "W":
            return e % 10 != 2 && e % 10 != 3 || e % 100 == 12 || e % 100 == 13 ? e + "-ы" : e + "-і";case "D":
            return e + "-га";default:
            return e;}
      }, week: { dow: 1, doy: 7 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    return e.defineLocale("bg", { months: "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"), monthsShort: "янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"), weekdays: "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"), weekdaysShort: "нед_пон_вто_сря_чет_пет_съб".split("_"), weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "D.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY H:mm", LLLL: "dddd, D MMMM YYYY H:mm" }, calendar: { sameDay: "[Днес в] LT", nextDay: "[Утре в] LT", nextWeek: "dddd [в] LT", lastDay: "[Вчера в] LT", lastWeek: function lastWeek() {
          switch (this.day()) {case 0:case 3:case 6:
              return "[В изминалата] dddd [в] LT";case 1:case 2:case 4:case 5:
              return "[В изминалия] dddd [в] LT";}
        }, sameElse: "L" }, relativeTime: { future: "след %s", past: "преди %s", s: "няколко секунди", m: "минута", mm: "%d минути", h: "час", hh: "%d часа", d: "ден", dd: "%d дни", M: "месец", MM: "%d месеца", y: "година", yy: "%d години" }, dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/, ordinal: function ordinal(e) {
        var t = e % 10,
            n = e % 100;return 0 === e ? e + "-ев" : 0 === n ? e + "-ен" : n > 10 && n < 20 ? e + "-ти" : 1 === t ? e + "-ви" : 2 === t ? e + "-ри" : 7 === t || 8 === t ? e + "-ми" : e + "-ти";
      }, week: { dow: 1, doy: 7 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    var t = { 1: "১", 2: "২", 3: "৩", 4: "৪", 5: "৫", 6: "৬", 7: "৭", 8: "৮", 9: "৯", 0: "০" },
        n = { "১": "1", "২": "2", "৩": "3", "৪": "4", "৫": "5", "৬": "6", "৭": "7", "৮": "8", "৯": "9", "০": "0" };return e.defineLocale("bn", { months: "জানুয়ারী_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"), monthsShort: "জানু_ফেব_মার্চ_এপ্র_মে_জুন_জুল_আগ_সেপ্ট_অক্টো_নভে_ডিসে".split("_"), weekdays: "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split("_"), weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"), weekdaysMin: "রবি_সোম_মঙ্গ_বুধ_বৃহঃ_শুক্র_শনি".split("_"), longDateFormat: { LT: "A h:mm সময়", LTS: "A h:mm:ss সময়", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm সময়", LLLL: "dddd, D MMMM YYYY, A h:mm সময়" }, calendar: { sameDay: "[আজ] LT", nextDay: "[আগামীকাল] LT", nextWeek: "dddd, LT", lastDay: "[গতকাল] LT", lastWeek: "[গত] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s পরে", past: "%s আগে", s: "কয়েক সেকেন্ড", m: "এক মিনিট", mm: "%d মিনিট", h: "এক ঘন্টা", hh: "%d ঘন্টা", d: "এক দিন", dd: "%d দিন", M: "এক মাস", MM: "%d মাস", y: "এক বছর", yy: "%d বছর" }, preparse: function preparse(e) {
        return e.replace(/[১২৩৪৫৬৭৮৯০]/g, function (e) {
          return n[e];
        });
      }, postformat: function postformat(e) {
        return e.replace(/\d/g, function (e) {
          return t[e];
        });
      }, meridiemParse: /রাত|সকাল|দুপুর|বিকাল|রাত/, meridiemHour: function meridiemHour(e, t) {
        return 12 === e && (e = 0), "রাত" === t && e >= 4 || "দুপুর" === t && e < 5 || "বিকাল" === t ? e + 12 : e;
      }, meridiem: function meridiem(e, t, n) {
        return e < 4 ? "রাত" : e < 10 ? "সকাল" : e < 17 ? "দুপুর" : e < 20 ? "বিকাল" : "রাত";
      }, week: { dow: 0, doy: 6 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    var t = { 1: "༡", 2: "༢", 3: "༣", 4: "༤", 5: "༥", 6: "༦", 7: "༧", 8: "༨", 9: "༩", 0: "༠" },
        n = { "༡": "1", "༢": "2", "༣": "3", "༤": "4", "༥": "5", "༦": "6", "༧": "7", "༨": "8", "༩": "9", "༠": "0" };return e.defineLocale("bo", { months: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"), monthsShort: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"), weekdays: "གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split("_"), weekdaysShort: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"), weekdaysMin: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"), longDateFormat: { LT: "A h:mm", LTS: "A h:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm", LLLL: "dddd, D MMMM YYYY, A h:mm" }, calendar: { sameDay: "[དི་རིང] LT", nextDay: "[སང་ཉིན] LT", nextWeek: "[བདུན་ཕྲག་རྗེས་མ], LT", lastDay: "[ཁ་སང] LT", lastWeek: "[བདུན་ཕྲག་མཐའ་མ] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s ལ་", past: "%s སྔན་ལ", s: "ལམ་སང", m: "སྐར་མ་གཅིག", mm: "%d སྐར་མ", h: "ཆུ་ཚོད་གཅིག", hh: "%d ཆུ་ཚོད", d: "ཉིན་གཅིག", dd: "%d ཉིན་", M: "ཟླ་བ་གཅིག", MM: "%d ཟླ་བ", y: "ལོ་གཅིག", yy: "%d ལོ" }, preparse: function preparse(e) {
        return e.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function (e) {
          return n[e];
        });
      }, postformat: function postformat(e) {
        return e.replace(/\d/g, function (e) {
          return t[e];
        });
      }, meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/, meridiemHour: function meridiemHour(e, t) {
        return 12 === e && (e = 0), "མཚན་མོ" === t && e >= 4 || "ཉིན་གུང" === t && e < 5 || "དགོང་དག" === t ? e + 12 : e;
      }, meridiem: function meridiem(e, t, n) {
        return e < 4 ? "མཚན་མོ" : e < 10 ? "ཞོགས་ཀས" : e < 17 ? "ཉིན་གུང" : e < 20 ? "དགོང་དག" : "མཚན་མོ";
      }, week: { dow: 0, doy: 6 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    function t(e, t, n) {
      return e + " " + r({ mm: "munutenn", MM: "miz", dd: "devezh" }[n], e);
    }function n(e) {
      switch (a(e)) {case 1:case 3:case 4:case 5:case 9:
          return e + " bloaz";default:
          return e + " vloaz";}
    }function a(e) {
      return e > 9 ? a(e % 10) : e;
    }function r(e, t) {
      return 2 === t ? i(e) : e;
    }function i(e) {
      var t = { m: "v", b: "v", d: "z" };return void 0 === t[e.charAt(0)] ? e : t[e.charAt(0)] + e.substring(1);
    }return e.defineLocale("br", { months: "Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"), monthsShort: "Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"), weekdays: "Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"), weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"), weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "h[e]mm A", LTS: "h[e]mm:ss A", L: "DD/MM/YYYY", LL: "D [a viz] MMMM YYYY", LLL: "D [a viz] MMMM YYYY h[e]mm A", LLLL: "dddd, D [a viz] MMMM YYYY h[e]mm A" }, calendar: { sameDay: "[Hiziv da] LT", nextDay: "[Warc'hoazh da] LT", nextWeek: "dddd [da] LT", lastDay: "[Dec'h da] LT", lastWeek: "dddd [paset da] LT", sameElse: "L" }, relativeTime: { future: "a-benn %s", past: "%s 'zo", s: "un nebeud segondennoù", m: "ur vunutenn", mm: t, h: "un eur", hh: "%d eur", d: "un devezh", dd: t, M: "ur miz", MM: t, y: "ur bloaz", yy: n }, dayOfMonthOrdinalParse: /\d{1,2}(añ|vet)/, ordinal: function ordinal(e) {
        return e + (1 === e ? "añ" : "vet");
      }, week: { dow: 1, doy: 4 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    function t(e, t, n) {
      var a = e + " ";switch (n) {case "m":
          return t ? "jedna minuta" : "jedne minute";case "mm":
          return a += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";case "h":
          return t ? "jedan sat" : "jednog sata";case "hh":
          return a += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";case "dd":
          return a += 1 === e ? "dan" : "dana";case "MM":
          return a += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";case "yy":
          return a += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina";}
    }return e.defineLocale("bs", { months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"), monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"), monthsParseExact: !0, weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"), weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"), weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" }, calendar: { sameDay: "[danas u] LT", nextDay: "[sutra u] LT", nextWeek: function nextWeek() {
          switch (this.day()) {case 0:
              return "[u] [nedjelju] [u] LT";case 3:
              return "[u] [srijedu] [u] LT";case 6:
              return "[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:
              return "[u] dddd [u] LT";}
        }, lastDay: "[jučer u] LT", lastWeek: function lastWeek() {
          switch (this.day()) {case 0:case 3:
              return "[prošlu] dddd [u] LT";case 6:
              return "[prošle] [subote] [u] LT";case 1:case 2:case 4:case 5:
              return "[prošli] dddd [u] LT";}
        }, sameElse: "L" }, relativeTime: { future: "za %s", past: "prije %s", s: "par sekundi", m: t, mm: t, h: t, hh: t, d: "dan", dd: t, M: "mjesec", MM: t, y: "godinu", yy: t }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 7 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    return e.defineLocale("ca", { months: { standalone: "gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"), format: "de gener_de febrer_de març_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split("_"), isFormat: /D[oD]?(\s)+MMMM/ }, monthsShort: "gen._febr._març_abr._maig_juny_jul._ag._set._oct._nov._des.".split("_"), monthsParseExact: !0, weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"), weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"), weekdaysMin: "Dg_Dl_Dt_Dc_Dj_Dv_Ds".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "[el] D MMMM [de] YYYY", ll: "D MMM YYYY", LLL: "[el] D MMMM [de] YYYY [a les] H:mm", lll: "D MMM YYYY, H:mm", LLLL: "[el] dddd D MMMM [de] YYYY [a les] H:mm", llll: "ddd D MMM YYYY, H:mm" }, calendar: { sameDay: function sameDay() {
          return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT";
        }, nextDay: function nextDay() {
          return "[demà a " + (1 !== this.hours() ? "les" : "la") + "] LT";
        }, nextWeek: function nextWeek() {
          return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT";
        }, lastDay: function lastDay() {
          return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT";
        }, lastWeek: function lastWeek() {
          return "[el] dddd [passat a " + (1 !== this.hours() ? "les" : "la") + "] LT";
        }, sameElse: "L" }, relativeTime: { future: "d'aquí %s", past: "fa %s", s: "uns segons", m: "un minut", mm: "%d minuts", h: "una hora", hh: "%d hores", d: "un dia", dd: "%d dies", M: "un mes", MM: "%d mesos", y: "un any", yy: "%d anys" }, dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/, ordinal: function ordinal(e, t) {
        var n = 1 === e ? "r" : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "è";return "w" !== t && "W" !== t || (n = "a"), e + n;
      }, week: { dow: 1, doy: 4 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    function t(e) {
      return e > 1 && e < 5 && 1 != ~~(e / 10);
    }function n(e, n, a, r) {
      var i = e + " ";switch (a) {case "s":
          return n || r ? "pár sekund" : "pár sekundami";case "m":
          return n ? "minuta" : r ? "minutu" : "minutou";case "mm":
          return n || r ? i + (t(e) ? "minuty" : "minut") : i + "minutami";case "h":
          return n ? "hodina" : r ? "hodinu" : "hodinou";case "hh":
          return n || r ? i + (t(e) ? "hodiny" : "hodin") : i + "hodinami";case "d":
          return n || r ? "den" : "dnem";case "dd":
          return n || r ? i + (t(e) ? "dny" : "dní") : i + "dny";case "M":
          return n || r ? "měsíc" : "měsícem";case "MM":
          return n || r ? i + (t(e) ? "měsíce" : "měsíců") : i + "měsíci";case "y":
          return n || r ? "rok" : "rokem";case "yy":
          return n || r ? i + (t(e) ? "roky" : "let") : i + "lety";}
    }var a = "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),
        r = "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_");return e.defineLocale("cs", { months: a, monthsShort: r, monthsParse: function (e, t) {
        var n,
            a = [];for (n = 0; n < 12; n++) {
          a[n] = new RegExp("^" + e[n] + "$|^" + t[n] + "$", "i");
        }return a;
      }(a, r), shortMonthsParse: function (e) {
        var t,
            n = [];for (t = 0; t < 12; t++) {
          n[t] = new RegExp("^" + e[t] + "$", "i");
        }return n;
      }(r), longMonthsParse: function (e) {
        var t,
            n = [];for (t = 0; t < 12; t++) {
          n[t] = new RegExp("^" + e[t] + "$", "i");
        }return n;
      }(a), weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"), weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"), weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd D. MMMM YYYY H:mm", l: "D. M. YYYY" }, calendar: { sameDay: "[dnes v] LT", nextDay: "[zítra v] LT", nextWeek: function nextWeek() {
          switch (this.day()) {case 0:
              return "[v neděli v] LT";case 1:case 2:
              return "[v] dddd [v] LT";case 3:
              return "[ve středu v] LT";case 4:
              return "[ve čtvrtek v] LT";case 5:
              return "[v pátek v] LT";case 6:
              return "[v sobotu v] LT";}
        }, lastDay: "[včera v] LT", lastWeek: function lastWeek() {
          switch (this.day()) {case 0:
              return "[minulou neděli v] LT";case 1:case 2:
              return "[minulé] dddd [v] LT";case 3:
              return "[minulou středu v] LT";case 4:case 5:
              return "[minulý] dddd [v] LT";case 6:
              return "[minulou sobotu v] LT";}
        }, sameElse: "L" }, relativeTime: { future: "za %s", past: "před %s", s: n, m: n, mm: n, h: n, hh: n, d: n, dd: n, M: n, MM: n, y: n, yy: n }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    return e.defineLocale("cv", { months: "кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав".split("_"), monthsShort: "кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш".split("_"), weekdays: "вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун".split("_"), weekdaysShort: "выр_тун_ытл_юн_кӗҫ_эрн_шӑм".split("_"), weekdaysMin: "вр_тн_ыт_юн_кҫ_эр_шм".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD-MM-YYYY", LL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]", LLL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm", LLLL: "dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm" }, calendar: { sameDay: "[Паян] LT [сехетре]", nextDay: "[Ыран] LT [сехетре]", lastDay: "[Ӗнер] LT [сехетре]", nextWeek: "[Ҫитес] dddd LT [сехетре]", lastWeek: "[Иртнӗ] dddd LT [сехетре]", sameElse: "L" }, relativeTime: { future: function future(e) {
          return e + (/сехет$/i.exec(e) ? "рен" : /ҫул$/i.exec(e) ? "тан" : "ран");
        }, past: "%s каялла", s: "пӗр-ик ҫеккунт", m: "пӗр минут", mm: "%d минут", h: "пӗр сехет", hh: "%d сехет", d: "пӗр кун", dd: "%d кун", M: "пӗр уйӑх", MM: "%d уйӑх", y: "пӗр ҫул", yy: "%d ҫул" }, dayOfMonthOrdinalParse: /\d{1,2}-мӗш/, ordinal: "%d-мӗш", week: { dow: 1, doy: 7 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    return e.defineLocale("cy", { months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"), monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"), weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"), weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"), weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Heddiw am] LT", nextDay: "[Yfory am] LT", nextWeek: "dddd [am] LT", lastDay: "[Ddoe am] LT", lastWeek: "dddd [diwethaf am] LT", sameElse: "L" }, relativeTime: { future: "mewn %s", past: "%s yn ôl", s: "ychydig eiliadau", m: "munud", mm: "%d munud", h: "awr", hh: "%d awr", d: "diwrnod", dd: "%d diwrnod", M: "mis", MM: "%d mis", y: "blwyddyn", yy: "%d flynedd" }, dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/, ordinal: function ordinal(e) {
        var t = e,
            n = "",
            a = ["", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed"];return t > 20 ? n = 40 === t || 50 === t || 60 === t || 80 === t || 100 === t ? "fed" : "ain" : t > 0 && (n = a[t]), e + n;
      }, week: { dow: 1, doy: 4 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    return e.defineLocale("da", { months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"), monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"), weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"), weekdaysShort: "søn_man_tir_ons_tor_fre_lør".split("_"), weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm" }, calendar: { sameDay: "[i dag kl.] LT", nextDay: "[i morgen kl.] LT", nextWeek: "på dddd [kl.] LT", lastDay: "[i går kl.] LT", lastWeek: "[i] dddd[s kl.] LT", sameElse: "L" }, relativeTime: { future: "om %s", past: "%s siden", s: "få sekunder", m: "et minut", mm: "%d minutter", h: "en time", hh: "%d timer", d: "en dag", dd: "%d dage", M: "en måned", MM: "%d måneder", y: "et år", yy: "%d år" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    function t(e, t, n, a) {
      var r = { m: ["eine Minute", "einer Minute"], h: ["eine Stunde", "einer Stunde"], d: ["ein Tag", "einem Tag"], dd: [e + " Tage", e + " Tagen"], M: ["ein Monat", "einem Monat"], MM: [e + " Monate", e + " Monaten"], y: ["ein Jahr", "einem Jahr"], yy: [e + " Jahre", e + " Jahren"] };return t ? r[n][0] : r[n][1];
    }return e.defineLocale("de", { months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"), monthsParseExact: !0, weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"), weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"), weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd, D. MMMM YYYY HH:mm" }, calendar: { sameDay: "[heute um] LT [Uhr]", sameElse: "L", nextDay: "[morgen um] LT [Uhr]", nextWeek: "dddd [um] LT [Uhr]", lastDay: "[gestern um] LT [Uhr]", lastWeek: "[letzten] dddd [um] LT [Uhr]" }, relativeTime: { future: "in %s", past: "vor %s", s: "ein paar Sekunden", m: t, mm: "%d Minuten", h: t, hh: "%d Stunden", d: t, dd: t, M: t, MM: t, y: t, yy: t }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    function t(e, t, n, a) {
      var r = { m: ["eine Minute", "einer Minute"], h: ["eine Stunde", "einer Stunde"], d: ["ein Tag", "einem Tag"], dd: [e + " Tage", e + " Tagen"], M: ["ein Monat", "einem Monat"], MM: [e + " Monate", e + " Monaten"], y: ["ein Jahr", "einem Jahr"], yy: [e + " Jahre", e + " Jahren"] };return t ? r[n][0] : r[n][1];
    }return e.defineLocale("de-at", { months: "Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jän._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"), monthsParseExact: !0, weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"), weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"), weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd, D. MMMM YYYY HH:mm" }, calendar: { sameDay: "[heute um] LT [Uhr]", sameElse: "L", nextDay: "[morgen um] LT [Uhr]", nextWeek: "dddd [um] LT [Uhr]", lastDay: "[gestern um] LT [Uhr]", lastWeek: "[letzten] dddd [um] LT [Uhr]" }, relativeTime: { future: "in %s", past: "vor %s", s: "ein paar Sekunden", m: t, mm: "%d Minuten", h: t, hh: "%d Stunden", d: t, dd: t, M: t, MM: t, y: t, yy: t }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    function t(e, t, n, a) {
      var r = { m: ["eine Minute", "einer Minute"], h: ["eine Stunde", "einer Stunde"], d: ["ein Tag", "einem Tag"], dd: [e + " Tage", e + " Tagen"], M: ["ein Monat", "einem Monat"], MM: [e + " Monate", e + " Monaten"], y: ["ein Jahr", "einem Jahr"], yy: [e + " Jahre", e + " Jahren"] };return t ? r[n][0] : r[n][1];
    }return e.defineLocale("de-ch", { months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jan._Febr._März_April_Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.".split("_"), monthsParseExact: !0, weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"), weekdaysShort: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH.mm", LLLL: "dddd, D. MMMM YYYY HH.mm" }, calendar: { sameDay: "[heute um] LT [Uhr]", sameElse: "L", nextDay: "[morgen um] LT [Uhr]", nextWeek: "dddd [um] LT [Uhr]", lastDay: "[gestern um] LT [Uhr]", lastWeek: "[letzten] dddd [um] LT [Uhr]" }, relativeTime: { future: "in %s", past: "vor %s", s: "ein paar Sekunden", m: t, mm: "%d Minuten", h: t, hh: "%d Stunden", d: t, dd: t, M: t, MM: t, y: t, yy: t }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    var t = ["ޖެނުއަރީ", "ފެބްރުއަރީ", "މާރިޗު", "އޭޕްރީލު", "މޭ", "ޖޫން", "ޖުލައި", "އޯގަސްޓު", "ސެޕްޓެމްބަރު", "އޮކްޓޯބަރު", "ނޮވެމްބަރު", "ޑިސެމްބަރު"],
        n = ["އާދިއްތަ", "ހޯމަ", "އަންގާރަ", "ބުދަ", "ބުރާސްފަތި", "ހުކުރު", "ހޮނިހިރު"];return e.defineLocale("dv", { months: t, monthsShort: t, weekdays: n, weekdaysShort: n, weekdaysMin: "އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "D/M/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, meridiemParse: /މކ|މފ/, isPM: function isPM(e) {
        return "މފ" === e;
      }, meridiem: function meridiem(e, t, n) {
        return e < 12 ? "މކ" : "މފ";
      }, calendar: { sameDay: "[މިއަދު] LT", nextDay: "[މާދަމާ] LT", nextWeek: "dddd LT", lastDay: "[އިއްޔެ] LT", lastWeek: "[ފާއިތުވި] dddd LT", sameElse: "L" }, relativeTime: { future: "ތެރޭގައި %s", past: "ކުރިން %s", s: "ސިކުންތުކޮޅެއް", m: "މިނިޓެއް", mm: "މިނިޓު %d", h: "ގަޑިއިރެއް", hh: "ގަޑިއިރު %d", d: "ދުވަހެއް", dd: "ދުވަސް %d", M: "މަހެއް", MM: "މަސް %d", y: "އަހަރެއް", yy: "އަހަރު %d" }, preparse: function preparse(e) {
        return e.replace(/،/g, ",");
      }, postformat: function postformat(e) {
        return e.replace(/,/g, "،");
      }, week: { dow: 7, doy: 12 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    function t(e) {
      return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e);
    }return e.defineLocale("el", { monthsNominativeEl: "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"), monthsGenitiveEl: "Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"), months: function months(e, t) {
        return e ? /D/.test(t.substring(0, t.indexOf("MMMM"))) ? this._monthsGenitiveEl[e.month()] : this._monthsNominativeEl[e.month()] : this._monthsNominativeEl;
      }, monthsShort: "Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"), weekdays: "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"), weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"), weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"), meridiem: function meridiem(e, t, n) {
        return e > 11 ? n ? "μμ" : "ΜΜ" : n ? "πμ" : "ΠΜ";
      }, isPM: function isPM(e) {
        return "μ" === (e + "").toLowerCase()[0];
      }, meridiemParse: /[ΠΜ]\.?Μ?\.?/i, longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, calendarEl: { sameDay: "[Σήμερα {}] LT", nextDay: "[Αύριο {}] LT", nextWeek: "dddd [{}] LT", lastDay: "[Χθες {}] LT", lastWeek: function lastWeek() {
          switch (this.day()) {case 6:
              return "[το προηγούμενο] dddd [{}] LT";default:
              return "[την προηγούμενη] dddd [{}] LT";}
        }, sameElse: "L" }, calendar: function calendar(e, n) {
        var a = this._calendarEl[e],
            r = n && n.hours();return t(a) && (a = a.apply(n)), a.replace("{}", r % 12 == 1 ? "στη" : "στις");
      }, relativeTime: { future: "σε %s", past: "%s πριν", s: "λίγα δευτερόλεπτα", m: "ένα λεπτό", mm: "%d λεπτά", h: "μία ώρα", hh: "%d ώρες", d: "μία μέρα", dd: "%d μέρες", M: "ένας μήνας", MM: "%d μήνες", y: "ένας χρόνος", yy: "%d χρόνια" }, dayOfMonthOrdinalParse: /\d{1,2}η/, ordinal: "%dη", week: { dow: 1, doy: 4 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    return e.defineLocale("en-au", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function ordinal(e) {
        var t = e % 10;return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th");
      }, week: { dow: 1, doy: 4 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    return e.defineLocale("en-ca", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "YYYY-MM-DD", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function ordinal(e) {
        var t = e % 10;return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th");
      } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    return e.defineLocale("en-gb", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function ordinal(e) {
        var t = e % 10;return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th");
      }, week: { dow: 1, doy: 4 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    return e.defineLocale("en-ie", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD-MM-YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function ordinal(e) {
        var t = e % 10;return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th");
      }, week: { dow: 1, doy: 4 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    return e.defineLocale("en-nz", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function ordinal(e) {
        var t = e % 10;return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th");
      }, week: { dow: 1, doy: 4 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    return e.defineLocale("eo", { months: "januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"), monthsShort: "jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec".split("_"), weekdays: "dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato".split("_"), weekdaysShort: "dim_lun_mard_merk_ĵaŭ_ven_sab".split("_"), weekdaysMin: "di_lu_ma_me_ĵa_ve_sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "D[-a de] MMMM, YYYY", LLL: "D[-a de] MMMM, YYYY HH:mm", LLLL: "dddd, [la] D[-a de] MMMM, YYYY HH:mm" }, meridiemParse: /[ap]\.t\.m/i, isPM: function isPM(e) {
        return "p" === e.charAt(0).toLowerCase();
      }, meridiem: function meridiem(e, t, n) {
        return e > 11 ? n ? "p.t.m." : "P.T.M." : n ? "a.t.m." : "A.T.M.";
      }, calendar: { sameDay: "[Hodiaŭ je] LT", nextDay: "[Morgaŭ je] LT", nextWeek: "dddd [je] LT", lastDay: "[Hieraŭ je] LT", lastWeek: "[pasinta] dddd [je] LT", sameElse: "L" }, relativeTime: { future: "post %s", past: "antaŭ %s", s: "sekundoj", m: "minuto", mm: "%d minutoj", h: "horo", hh: "%d horoj", d: "tago", dd: "%d tagoj", M: "monato", MM: "%d monatoj", y: "jaro", yy: "%d jaroj" }, dayOfMonthOrdinalParse: /\d{1,2}a/, ordinal: "%da", week: { dow: 1, doy: 7 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
        n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");return e.defineLocale("es", { months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), monthsShort: function monthsShort(e, a) {
        return e ? /-MMM-/.test(a) ? n[e.month()] : t[e.month()] : t;
      }, monthsParseExact: !0, weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"), weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"), weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY H:mm", LLLL: "dddd, D [de] MMMM [de] YYYY H:mm" }, calendar: { sameDay: function sameDay() {
          return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT";
        }, nextDay: function nextDay() {
          return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT";
        }, nextWeek: function nextWeek() {
          return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT";
        }, lastDay: function lastDay() {
          return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT";
        }, lastWeek: function lastWeek() {
          return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT";
        }, sameElse: "L" }, relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un año", yy: "%d años" }, dayOfMonthOrdinalParse: /\d{1,2}º/, ordinal: "%dº", week: { dow: 1, doy: 4 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
        n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");return e.defineLocale("es-do", { months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), monthsShort: function monthsShort(e, a) {
        return e ? /-MMM-/.test(a) ? n[e.month()] : t[e.month()] : t;
      }, monthsParseExact: !0, weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"), weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"), weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY h:mm A", LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A" }, calendar: { sameDay: function sameDay() {
          return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT";
        }, nextDay: function nextDay() {
          return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT";
        }, nextWeek: function nextWeek() {
          return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT";
        }, lastDay: function lastDay() {
          return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT";
        }, lastWeek: function lastWeek() {
          return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT";
        }, sameElse: "L" }, relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un año", yy: "%d años" }, dayOfMonthOrdinalParse: /\d{1,2}º/, ordinal: "%dº", week: { dow: 1, doy: 4 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    function t(e, t, n, a) {
      var r = { s: ["mõne sekundi", "mõni sekund", "paar sekundit"], m: ["ühe minuti", "üks minut"], mm: [e + " minuti", e + " minutit"], h: ["ühe tunni", "tund aega", "üks tund"], hh: [e + " tunni", e + " tundi"], d: ["ühe päeva", "üks päev"], M: ["kuu aja", "kuu aega", "üks kuu"], MM: [e + " kuu", e + " kuud"], y: ["ühe aasta", "aasta", "üks aasta"], yy: [e + " aasta", e + " aastat"] };return t ? r[n][2] ? r[n][2] : r[n][1] : a ? r[n][0] : r[n][1];
    }return e.defineLocale("et", { months: "jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"), monthsShort: "jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"), weekdays: "pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"), weekdaysShort: "P_E_T_K_N_R_L".split("_"), weekdaysMin: "P_E_T_K_N_R_L".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" }, calendar: { sameDay: "[Täna,] LT", nextDay: "[Homme,] LT", nextWeek: "[Järgmine] dddd LT", lastDay: "[Eile,] LT", lastWeek: "[Eelmine] dddd LT", sameElse: "L" }, relativeTime: { future: "%s pärast", past: "%s tagasi", s: t, m: t, mm: t, h: t, hh: t, d: t, dd: "%d päeva", M: t, MM: t, y: t, yy: t }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    return e.defineLocale("eu", { months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"), monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"), monthsParseExact: !0, weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"), weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"), weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY[ko] MMMM[ren] D[a]", LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm", LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm", l: "YYYY-M-D", ll: "YYYY[ko] MMM D[a]", lll: "YYYY[ko] MMM D[a] HH:mm", llll: "ddd, YYYY[ko] MMM D[a] HH:mm" }, calendar: { sameDay: "[gaur] LT[etan]", nextDay: "[bihar] LT[etan]", nextWeek: "dddd LT[etan]", lastDay: "[atzo] LT[etan]", lastWeek: "[aurreko] dddd LT[etan]", sameElse: "L" }, relativeTime: { future: "%s barru", past: "duela %s", s: "segundo batzuk", m: "minutu bat", mm: "%d minutu", h: "ordu bat", hh: "%d ordu", d: "egun bat", dd: "%d egun", M: "hilabete bat", MM: "%d hilabete", y: "urte bat", yy: "%d urte" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 7 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    var t = { 1: "۱", 2: "۲", 3: "۳", 4: "۴", 5: "۵", 6: "۶", 7: "۷", 8: "۸", 9: "۹", 0: "۰" },
        n = { "۱": "1", "۲": "2", "۳": "3", "۴": "4", "۵": "5", "۶": "6", "۷": "7", "۸": "8", "۹": "9", "۰": "0" };return e.defineLocale("fa", { months: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"), monthsShort: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"), weekdays: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"), weekdaysShort: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"), weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, meridiemParse: /قبل از ظهر|بعد از ظهر/, isPM: function isPM(e) {
        return (/بعد از ظهر/.test(e)
        );
      }, meridiem: function meridiem(e, t, n) {
        return e < 12 ? "قبل از ظهر" : "بعد از ظهر";
      }, calendar: { sameDay: "[امروز ساعت] LT", nextDay: "[فردا ساعت] LT", nextWeek: "dddd [ساعت] LT", lastDay: "[دیروز ساعت] LT", lastWeek: "dddd [پیش] [ساعت] LT", sameElse: "L" }, relativeTime: { future: "در %s", past: "%s پیش", s: "چند ثانیه", m: "یک دقیقه", mm: "%d دقیقه", h: "یک ساعت", hh: "%d ساعت", d: "یک روز", dd: "%d روز", M: "یک ماه", MM: "%d ماه", y: "یک سال", yy: "%d سال" }, preparse: function preparse(e) {
        return e.replace(/[۰-۹]/g, function (e) {
          return n[e];
        }).replace(/،/g, ",");
      }, postformat: function postformat(e) {
        return e.replace(/\d/g, function (e) {
          return t[e];
        }).replace(/,/g, "،");
      }, dayOfMonthOrdinalParse: /\d{1,2}م/, ordinal: "%dم", week: { dow: 6, doy: 12 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    function t(e, t, a, r) {
      var i = "";switch (a) {case "s":
          return r ? "muutaman sekunnin" : "muutama sekunti";case "m":
          return r ? "minuutin" : "minuutti";case "mm":
          i = r ? "minuutin" : "minuuttia";break;case "h":
          return r ? "tunnin" : "tunti";case "hh":
          i = r ? "tunnin" : "tuntia";break;case "d":
          return r ? "päivän" : "päivä";case "dd":
          i = r ? "päivän" : "päivää";break;case "M":
          return r ? "kuukauden" : "kuukausi";case "MM":
          i = r ? "kuukauden" : "kuukautta";break;case "y":
          return r ? "vuoden" : "vuosi";case "yy":
          i = r ? "vuoden" : "vuotta";}return i = n(e, r) + " " + i;
    }function n(e, t) {
      return e < 10 ? t ? r[e] : a[e] : e;
    }var a = "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" "),
        r = ["nolla", "yhden", "kahden", "kolmen", "neljän", "viiden", "kuuden", a[7], a[8], a[9]];return e.defineLocale("fi", { months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"), monthsShort: "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"), weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"), weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"), weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD.MM.YYYY", LL: "Do MMMM[ta] YYYY", LLL: "Do MMMM[ta] YYYY, [klo] HH.mm", LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm", l: "D.M.YYYY", ll: "Do MMM YYYY", lll: "Do MMM YYYY, [klo] HH.mm", llll: "ddd, Do MMM YYYY, [klo] HH.mm" }, calendar: { sameDay: "[tänään] [klo] LT", nextDay: "[huomenna] [klo] LT", nextWeek: "dddd [klo] LT", lastDay: "[eilen] [klo] LT", lastWeek: "[viime] dddd[na] [klo] LT", sameElse: "L" }, relativeTime: { future: "%s päästä", past: "%s sitten", s: t, m: t, mm: t, h: t, hh: t, d: t, dd: t, M: t, MM: t, y: t, yy: t }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    return e.defineLocale("fo", { months: "januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"), monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"), weekdays: "sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"), weekdaysShort: "sun_mán_týs_mik_hós_frí_ley".split("_"), weekdaysMin: "su_má_tý_mi_hó_fr_le".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D. MMMM, YYYY HH:mm" }, calendar: { sameDay: "[Í dag kl.] LT", nextDay: "[Í morgin kl.] LT", nextWeek: "dddd [kl.] LT", lastDay: "[Í gjár kl.] LT", lastWeek: "[síðstu] dddd [kl] LT", sameElse: "L" }, relativeTime: { future: "um %s", past: "%s síðani", s: "fá sekund", m: "ein minutt", mm: "%d minuttir", h: "ein tími", hh: "%d tímar", d: "ein dagur", dd: "%d dagar", M: "ein mánaði", MM: "%d mánaðir", y: "eitt ár", yy: "%d ár" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    return e.defineLocale("fr", { months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"), monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"), monthsParseExact: !0, weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"), weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"), weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Aujourd’hui à] LT", nextDay: "[Demain à] LT", nextWeek: "dddd [à] LT", lastDay: "[Hier à] LT", lastWeek: "dddd [dernier à] LT", sameElse: "L" }, relativeTime: { future: "dans %s", past: "il y a %s", s: "quelques secondes", m: "une minute", mm: "%d minutes", h: "une heure", hh: "%d heures", d: "un jour", dd: "%d jours", M: "un mois", MM: "%d mois", y: "un an", yy: "%d ans" }, dayOfMonthOrdinalParse: /\d{1,2}(er|)/, ordinal: function ordinal(e, t) {
        switch (t) {case "D":
            return e + (1 === e ? "er" : "");default:case "M":case "Q":case "DDD":case "d":
            return e + (1 === e ? "er" : "e");case "w":case "W":
            return e + (1 === e ? "re" : "e");}
      }, week: { dow: 1, doy: 4 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    return e.defineLocale("fr-ca", { months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"), monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"), monthsParseExact: !0, weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"), weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"), weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Aujourd’hui à] LT", nextDay: "[Demain à] LT", nextWeek: "dddd [à] LT", lastDay: "[Hier à] LT", lastWeek: "dddd [dernier à] LT", sameElse: "L" }, relativeTime: { future: "dans %s", past: "il y a %s", s: "quelques secondes", m: "une minute", mm: "%d minutes", h: "une heure", hh: "%d heures", d: "un jour", dd: "%d jours", M: "un mois", MM: "%d mois", y: "un an", yy: "%d ans" }, dayOfMonthOrdinalParse: /\d{1,2}(er|e)/, ordinal: function ordinal(e, t) {
        switch (t) {default:case "M":case "Q":case "D":case "DDD":case "d":
            return e + (1 === e ? "er" : "e");case "w":case "W":
            return e + (1 === e ? "re" : "e");}
      } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    return e.defineLocale("fr-ch", { months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"), monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"), monthsParseExact: !0, weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"), weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"), weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Aujourd’hui à] LT", nextDay: "[Demain à] LT", nextWeek: "dddd [à] LT", lastDay: "[Hier à] LT", lastWeek: "dddd [dernier à] LT", sameElse: "L" }, relativeTime: { future: "dans %s", past: "il y a %s", s: "quelques secondes", m: "une minute", mm: "%d minutes", h: "une heure", hh: "%d heures", d: "un jour", dd: "%d jours", M: "un mois", MM: "%d mois", y: "un an", yy: "%d ans" }, dayOfMonthOrdinalParse: /\d{1,2}(er|e)/, ordinal: function ordinal(e, t) {
        switch (t) {default:case "M":case "Q":case "D":case "DDD":case "d":
            return e + (1 === e ? "er" : "e");case "w":case "W":
            return e + (1 === e ? "re" : "e");}
      }, week: { dow: 1, doy: 4 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    var t = "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"),
        n = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");return e.defineLocale("fy", { months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"), monthsShort: function monthsShort(e, a) {
        return e ? /-MMM-/.test(a) ? n[e.month()] : t[e.month()] : t;
      }, monthsParseExact: !0, weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"), weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"), weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD-MM-YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[hjoed om] LT", nextDay: "[moarn om] LT", nextWeek: "dddd [om] LT", lastDay: "[juster om] LT", lastWeek: "[ôfrûne] dddd [om] LT", sameElse: "L" }, relativeTime: { future: "oer %s", past: "%s lyn", s: "in pear sekonden", m: "ien minút", mm: "%d minuten", h: "ien oere", hh: "%d oeren", d: "ien dei", dd: "%d dagen", M: "ien moanne", MM: "%d moannen", y: "ien jier", yy: "%d jierren" }, dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/, ordinal: function ordinal(e) {
        return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de");
      }, week: { dow: 1, doy: 4 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    var t = ["Am Faoilleach", "An Gearran", "Am Màrt", "An Giblean", "An Cèitean", "An t-Ògmhios", "An t-Iuchar", "An Lùnastal", "An t-Sultain", "An Dàmhair", "An t-Samhain", "An Dùbhlachd"],
        n = ["Faoi", "Gear", "Màrt", "Gibl", "Cèit", "Ògmh", "Iuch", "Lùn", "Sult", "Dàmh", "Samh", "Dùbh"],
        a = ["Didòmhnaich", "Diluain", "Dimàirt", "Diciadain", "Diardaoin", "Dihaoine", "Disathairne"],
        r = ["Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis"],
        i = ["Dò", "Lu", "Mà", "Ci", "Ar", "Ha", "Sa"];return e.defineLocale("gd", { months: t, monthsShort: n, monthsParseExact: !0, weekdays: a, weekdaysShort: r, weekdaysMin: i, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[An-diugh aig] LT", nextDay: "[A-màireach aig] LT", nextWeek: "dddd [aig] LT", lastDay: "[An-dè aig] LT", lastWeek: "dddd [seo chaidh] [aig] LT", sameElse: "L" }, relativeTime: { future: "ann an %s", past: "bho chionn %s", s: "beagan diogan", m: "mionaid", mm: "%d mionaidean", h: "uair", hh: "%d uairean", d: "latha", dd: "%d latha", M: "mìos", MM: "%d mìosan", y: "bliadhna", yy: "%d bliadhna" }, dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/, ordinal: function ordinal(e) {
        return e + (1 === e ? "d" : e % 10 == 2 ? "na" : "mh");
      }, week: { dow: 1, doy: 4 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    return e.defineLocale("gl", { months: "xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro".split("_"), monthsShort: "xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.".split("_"), monthsParseExact: !0, weekdays: "domingo_luns_martes_mércores_xoves_venres_sábado".split("_"), weekdaysShort: "dom._lun._mar._mér._xov._ven._sáb.".split("_"), weekdaysMin: "do_lu_ma_mé_xo_ve_sá".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY H:mm", LLLL: "dddd, D [de] MMMM [de] YYYY H:mm" }, calendar: { sameDay: function sameDay() {
          return "[hoxe " + (1 !== this.hours() ? "ás" : "á") + "] LT";
        }, nextDay: function nextDay() {
          return "[mañá " + (1 !== this.hours() ? "ás" : "á") + "] LT";
        }, nextWeek: function nextWeek() {
          return "dddd [" + (1 !== this.hours() ? "ás" : "a") + "] LT";
        }, lastDay: function lastDay() {
          return "[onte " + (1 !== this.hours() ? "á" : "a") + "] LT";
        }, lastWeek: function lastWeek() {
          return "[o] dddd [pasado " + (1 !== this.hours() ? "ás" : "a") + "] LT";
        }, sameElse: "L" }, relativeTime: { future: function future(e) {
          return 0 === e.indexOf("un") ? "n" + e : "en " + e;
        }, past: "hai %s", s: "uns segundos", m: "un minuto", mm: "%d minutos", h: "unha hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un ano", yy: "%d anos" }, dayOfMonthOrdinalParse: /\d{1,2}º/, ordinal: "%dº", week: { dow: 1, doy: 4 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    function t(e, t, n, a) {
      var r = { s: ["thodde secondanim", "thodde second"], m: ["eka mintan", "ek minute"], mm: [e + " mintanim", e + " mintam"], h: ["eka horan", "ek hor"], hh: [e + " horanim", e + " hor"], d: ["eka disan", "ek dis"], dd: [e + " disanim", e + " dis"], M: ["eka mhoinean", "ek mhoino"], MM: [e + " mhoineanim", e + " mhoine"], y: ["eka vorsan", "ek voros"], yy: [e + " vorsanim", e + " vorsam"] };return t ? r[n][0] : r[n][1];
    }return e.defineLocale("gom-latn", { months: "Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split("_"), monthsShort: "Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split("_"), monthsParseExact: !0, weekdays: "Aitar_Somar_Mongllar_Budvar_Brestar_Sukrar_Son'var".split("_"), weekdaysShort: "Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"), weekdaysMin: "Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "A h:mm [vazta]", LTS: "A h:mm:ss [vazta]", L: "DD-MM-YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY A h:mm [vazta]", LLLL: "dddd, MMMM[achea] Do, YYYY, A h:mm [vazta]", llll: "ddd, D MMM YYYY, A h:mm [vazta]" }, calendar: { sameDay: "[Aiz] LT", nextDay: "[Faleam] LT", nextWeek: "[Ieta to] dddd[,] LT", lastDay: "[Kal] LT", lastWeek: "[Fatlo] dddd[,] LT", sameElse: "L" }, relativeTime: { future: "%s", past: "%s adim", s: t, m: t, mm: t, h: t, hh: t, d: t, dd: t, M: t, MM: t, y: t, yy: t }, dayOfMonthOrdinalParse: /\d{1,2}(er)/, ordinal: function ordinal(e, t) {
        switch (t) {case "D":
            return e + "er";default:case "M":case "Q":case "DDD":case "d":case "w":case "W":
            return e;}
      }, week: { dow: 1, doy: 4 }, meridiemParse: /rati|sokalli|donparam|sanje/, meridiemHour: function meridiemHour(e, t) {
        return 12 === e && (e = 0), "rati" === t ? e < 4 ? e : e + 12 : "sokalli" === t ? e : "donparam" === t ? e > 12 ? e : e + 12 : "sanje" === t ? e + 12 : void 0;
      }, meridiem: function meridiem(e, t, n) {
        return e < 4 ? "rati" : e < 12 ? "sokalli" : e < 16 ? "donparam" : e < 20 ? "sanje" : "rati";
      } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    return e.defineLocale("he", { months: "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"), monthsShort: "ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"), weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"), weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"), weekdaysMin: "א_ב_ג_ד_ה_ו_ש".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D [ב]MMMM YYYY", LLL: "D [ב]MMMM YYYY HH:mm", LLLL: "dddd, D [ב]MMMM YYYY HH:mm", l: "D/M/YYYY", ll: "D MMM YYYY", lll: "D MMM YYYY HH:mm", llll: "ddd, D MMM YYYY HH:mm" }, calendar: { sameDay: "[היום ב־]LT", nextDay: "[מחר ב־]LT", nextWeek: "dddd [בשעה] LT", lastDay: "[אתמול ב־]LT", lastWeek: "[ביום] dddd [האחרון בשעה] LT", sameElse: "L" }, relativeTime: { future: "בעוד %s", past: "לפני %s", s: "מספר שניות", m: "דקה", mm: "%d דקות", h: "שעה", hh: function hh(e) {
          return 2 === e ? "שעתיים" : e + " שעות";
        }, d: "יום", dd: function dd(e) {
          return 2 === e ? "יומיים" : e + " ימים";
        }, M: "חודש", MM: function MM(e) {
          return 2 === e ? "חודשיים" : e + " חודשים";
        }, y: "שנה", yy: function yy(e) {
          return 2 === e ? "שנתיים" : e % 10 == 0 && 10 !== e ? e + " שנה" : e + " שנים";
        } }, meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i, isPM: function isPM(e) {
        return (/^(אחה"צ|אחרי הצהריים|בערב)$/.test(e)
        );
      }, meridiem: function meridiem(e, t, n) {
        return e < 5 ? "לפנות בוקר" : e < 10 ? "בבוקר" : e < 12 ? n ? 'לפנה"צ' : "לפני הצהריים" : e < 18 ? n ? 'אחה"צ' : "אחרי הצהריים" : "בערב";
      } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    var t = { 1: "१", 2: "२", 3: "३", 4: "४", 5: "५", 6: "६", 7: "७", 8: "८", 9: "९", 0: "०" },
        n = { "१": "1", "२": "2", "३": "3", "४": "4", "५": "5", "६": "6", "७": "7", "८": "8", "९": "9", "०": "0" };return e.defineLocale("hi", { months: "जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"), monthsShort: "जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"), monthsParseExact: !0, weekdays: "रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"), weekdaysShort: "रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"), weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"), longDateFormat: { LT: "A h:mm बजे", LTS: "A h:mm:ss बजे", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm बजे", LLLL: "dddd, D MMMM YYYY, A h:mm बजे" }, calendar: { sameDay: "[आज] LT", nextDay: "[कल] LT", nextWeek: "dddd, LT", lastDay: "[कल] LT", lastWeek: "[पिछले] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s में", past: "%s पहले", s: "कुछ ही क्षण", m: "एक मिनट", mm: "%d मिनट", h: "एक घंटा", hh: "%d घंटे", d: "एक दिन", dd: "%d दिन", M: "एक महीने", MM: "%d महीने", y: "एक वर्ष", yy: "%d वर्ष" }, preparse: function preparse(e) {
        return e.replace(/[१२३४५६७८९०]/g, function (e) {
          return n[e];
        });
      }, postformat: function postformat(e) {
        return e.replace(/\d/g, function (e) {
          return t[e];
        });
      }, meridiemParse: /रात|सुबह|दोपहर|शाम/, meridiemHour: function meridiemHour(e, t) {
        return 12 === e && (e = 0), "रात" === t ? e < 4 ? e : e + 12 : "सुबह" === t ? e : "दोपहर" === t ? e >= 10 ? e : e + 12 : "शाम" === t ? e + 12 : void 0;
      }, meridiem: function meridiem(e, t, n) {
        return e < 4 ? "रात" : e < 10 ? "सुबह" : e < 17 ? "दोपहर" : e < 20 ? "शाम" : "रात";
      }, week: { dow: 0, doy: 6 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    function t(e, t, n) {
      var a = e + " ";switch (n) {case "m":
          return t ? "jedna minuta" : "jedne minute";case "mm":
          return a += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";case "h":
          return t ? "jedan sat" : "jednog sata";case "hh":
          return a += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";case "dd":
          return a += 1 === e ? "dan" : "dana";case "MM":
          return a += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";case "yy":
          return a += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina";}
    }return e.defineLocale("hr", { months: { format: "siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"), standalone: "siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_") }, monthsShort: "sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"), monthsParseExact: !0, weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"), weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"), weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" }, calendar: { sameDay: "[danas u] LT", nextDay: "[sutra u] LT", nextWeek: function nextWeek() {
          switch (this.day()) {case 0:
              return "[u] [nedjelju] [u] LT";case 3:
              return "[u] [srijedu] [u] LT";case 6:
              return "[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:
              return "[u] dddd [u] LT";}
        }, lastDay: "[jučer u] LT", lastWeek: function lastWeek() {
          switch (this.day()) {case 0:case 3:
              return "[prošlu] dddd [u] LT";case 6:
              return "[prošle] [subote] [u] LT";case 1:case 2:case 4:case 5:
              return "[prošli] dddd [u] LT";}
        }, sameElse: "L" }, relativeTime: { future: "za %s", past: "prije %s", s: "par sekundi", m: t, mm: t, h: t, hh: t, d: "dan", dd: t, M: "mjesec", MM: t, y: "godinu", yy: t }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 7 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    function t(e, t, n, a) {
      var r = e;switch (n) {case "s":
          return a || t ? "néhány másodperc" : "néhány másodperce";case "m":
          return "egy" + (a || t ? " perc" : " perce");case "mm":
          return r + (a || t ? " perc" : " perce");case "h":
          return "egy" + (a || t ? " óra" : " órája");case "hh":
          return r + (a || t ? " óra" : " órája");case "d":
          return "egy" + (a || t ? " nap" : " napja");case "dd":
          return r + (a || t ? " nap" : " napja");case "M":
          return "egy" + (a || t ? " hónap" : " hónapja");case "MM":
          return r + (a || t ? " hónap" : " hónapja");case "y":
          return "egy" + (a || t ? " év" : " éve");case "yy":
          return r + (a || t ? " év" : " éve");}return "";
    }function n(e) {
      return (e ? "" : "[múlt] ") + "[" + a[this.day()] + "] LT[-kor]";
    }var a = "vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ");return e.defineLocale("hu", { months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"), monthsShort: "jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"), weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"), weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"), weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "YYYY.MM.DD.", LL: "YYYY. MMMM D.", LLL: "YYYY. MMMM D. H:mm", LLLL: "YYYY. MMMM D., dddd H:mm" }, meridiemParse: /de|du/i, isPM: function isPM(e) {
        return "u" === e.charAt(1).toLowerCase();
      }, meridiem: function meridiem(e, t, n) {
        return e < 12 ? !0 === n ? "de" : "DE" : !0 === n ? "du" : "DU";
      }, calendar: { sameDay: "[ma] LT[-kor]", nextDay: "[holnap] LT[-kor]", nextWeek: function nextWeek() {
          return n.call(this, !0);
        }, lastDay: "[tegnap] LT[-kor]", lastWeek: function lastWeek() {
          return n.call(this, !1);
        }, sameElse: "L" }, relativeTime: { future: "%s múlva", past: "%s", s: t, m: t, mm: t, h: t, hh: t, d: t, dd: t, M: t, MM: t, y: t, yy: t }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    return e.defineLocale("hy-am", { months: { format: "հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_"), standalone: "հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split("_") }, monthsShort: "հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_"), weekdays: "կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_"), weekdaysShort: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"), weekdaysMin: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY թ.", LLL: "D MMMM YYYY թ., HH:mm", LLLL: "dddd, D MMMM YYYY թ., HH:mm" }, calendar: { sameDay: "[այսօր] LT", nextDay: "[վաղը] LT", lastDay: "[երեկ] LT", nextWeek: function nextWeek() {
          return "dddd [օրը ժամը] LT";
        }, lastWeek: function lastWeek() {
          return "[անցած] dddd [օրը ժամը] LT";
        }, sameElse: "L" }, relativeTime: { future: "%s հետո", past: "%s առաջ", s: "մի քանի վայրկյան", m: "րոպե", mm: "%d րոպե", h: "ժամ", hh: "%d ժամ", d: "օր", dd: "%d օր", M: "ամիս", MM: "%d ամիս", y: "տարի", yy: "%d տարի" }, meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/, isPM: function isPM(e) {
        return (/^(ցերեկվա|երեկոյան)$/.test(e)
        );
      }, meridiem: function meridiem(e) {
        return e < 4 ? "գիշերվա" : e < 12 ? "առավոտվա" : e < 17 ? "ցերեկվա" : "երեկոյան";
      }, dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/, ordinal: function ordinal(e, t) {
        switch (t) {case "DDD":case "w":case "W":case "DDDo":
            return 1 === e ? e + "-ին" : e + "-րդ";default:
            return e;}
      }, week: { dow: 1, doy: 7 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    return e.defineLocale("id", { months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"), monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des".split("_"), weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"), weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"), weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] HH.mm", LLLL: "dddd, D MMMM YYYY [pukul] HH.mm" }, meridiemParse: /pagi|siang|sore|malam/, meridiemHour: function meridiemHour(e, t) {
        return 12 === e && (e = 0), "pagi" === t ? e : "siang" === t ? e >= 11 ? e : e + 12 : "sore" === t || "malam" === t ? e + 12 : void 0;
      }, meridiem: function meridiem(e, t, n) {
        return e < 11 ? "pagi" : e < 15 ? "siang" : e < 19 ? "sore" : "malam";
      }, calendar: { sameDay: "[Hari ini pukul] LT", nextDay: "[Besok pukul] LT", nextWeek: "dddd [pukul] LT", lastDay: "[Kemarin pukul] LT", lastWeek: "dddd [lalu pukul] LT", sameElse: "L" }, relativeTime: { future: "dalam %s", past: "%s yang lalu", s: "beberapa detik", m: "semenit", mm: "%d menit", h: "sejam", hh: "%d jam", d: "sehari", dd: "%d hari", M: "sebulan", MM: "%d bulan", y: "setahun", yy: "%d tahun" }, week: { dow: 1, doy: 7 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    function t(e) {
      return e % 100 == 11 || e % 10 != 1;
    }function n(e, n, a, r) {
      var i = e + " ";switch (a) {case "s":
          return n || r ? "nokkrar sekúndur" : "nokkrum sekúndum";case "m":
          return n ? "mínúta" : "mínútu";case "mm":
          return t(e) ? i + (n || r ? "mínútur" : "mínútum") : n ? i + "mínúta" : i + "mínútu";case "hh":
          return t(e) ? i + (n || r ? "klukkustundir" : "klukkustundum") : i + "klukkustund";case "d":
          return n ? "dagur" : r ? "dag" : "degi";case "dd":
          return t(e) ? n ? i + "dagar" : i + (r ? "daga" : "dögum") : n ? i + "dagur" : i + (r ? "dag" : "degi");case "M":
          return n ? "mánuður" : r ? "mánuð" : "mánuði";case "MM":
          return t(e) ? n ? i + "mánuðir" : i + (r ? "mánuði" : "mánuðum") : n ? i + "mánuður" : i + (r ? "mánuð" : "mánuði");case "y":
          return n || r ? "ár" : "ári";case "yy":
          return t(e) ? i + (n || r ? "ár" : "árum") : i + (n || r ? "ár" : "ári");}
    }return e.defineLocale("is", { months: "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"), monthsShort: "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"), weekdays: "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"), weekdaysShort: "sun_mán_þri_mið_fim_fös_lau".split("_"), weekdaysMin: "Su_Má_Þr_Mi_Fi_Fö_La".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY [kl.] H:mm", LLLL: "dddd, D. MMMM YYYY [kl.] H:mm" }, calendar: { sameDay: "[í dag kl.] LT", nextDay: "[á morgun kl.] LT", nextWeek: "dddd [kl.] LT", lastDay: "[í gær kl.] LT", lastWeek: "[síðasta] dddd [kl.] LT", sameElse: "L" }, relativeTime: { future: "eftir %s", past: "fyrir %s síðan", s: n, m: n, mm: n, h: "klukkustund", hh: n, d: n, dd: n, M: n, MM: n, y: n, yy: n }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    return e.defineLocale("it", { months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"), monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"), weekdays: "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"), weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"), weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Oggi alle] LT", nextDay: "[Domani alle] LT", nextWeek: "dddd [alle] LT", lastDay: "[Ieri alle] LT", lastWeek: function lastWeek() {
          switch (this.day()) {case 0:
              return "[la scorsa] dddd [alle] LT";default:
              return "[lo scorso] dddd [alle] LT";}
        }, sameElse: "L" }, relativeTime: { future: function future(e) {
          return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e;
        }, past: "%s fa", s: "alcuni secondi", m: "un minuto", mm: "%d minuti", h: "un'ora", hh: "%d ore", d: "un giorno", dd: "%d giorni", M: "un mese", MM: "%d mesi", y: "un anno", yy: "%d anni" }, dayOfMonthOrdinalParse: /\d{1,2}º/, ordinal: "%dº", week: { dow: 1, doy: 4 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    return e.defineLocale("ja", { months: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"), monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"), weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"), weekdaysShort: "日_月_火_水_木_金_土".split("_"), weekdaysMin: "日_月_火_水_木_金_土".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY/MM/DD", LL: "YYYY年M月D日", LLL: "YYYY年M月D日 HH:mm", LLLL: "YYYY年M月D日 HH:mm dddd", l: "YYYY/MM/DD", ll: "YYYY年M月D日", lll: "YYYY年M月D日 HH:mm", llll: "YYYY年M月D日 HH:mm dddd" }, meridiemParse: /午前|午後/i, isPM: function isPM(e) {
        return "午後" === e;
      }, meridiem: function meridiem(e, t, n) {
        return e < 12 ? "午前" : "午後";
      }, calendar: { sameDay: "[今日] LT", nextDay: "[明日] LT", nextWeek: "[来週]dddd LT", lastDay: "[昨日] LT", lastWeek: "[前週]dddd LT", sameElse: "L" }, dayOfMonthOrdinalParse: /\d{1,2}日/, ordinal: function ordinal(e, t) {
        switch (t) {case "d":case "D":case "DDD":
            return e + "日";default:
            return e;}
      }, relativeTime: { future: "%s後", past: "%s前", s: "数秒", m: "1分", mm: "%d分", h: "1時間", hh: "%d時間", d: "1日", dd: "%d日", M: "1ヶ月", MM: "%dヶ月", y: "1年", yy: "%d年" } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    return e.defineLocale("jv", { months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"), monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"), weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"), weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"), weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] HH.mm", LLLL: "dddd, D MMMM YYYY [pukul] HH.mm" }, meridiemParse: /enjing|siyang|sonten|ndalu/, meridiemHour: function meridiemHour(e, t) {
        return 12 === e && (e = 0), "enjing" === t ? e : "siyang" === t ? e >= 11 ? e : e + 12 : "sonten" === t || "ndalu" === t ? e + 12 : void 0;
      }, meridiem: function meridiem(e, t, n) {
        return e < 11 ? "enjing" : e < 15 ? "siyang" : e < 19 ? "sonten" : "ndalu";
      }, calendar: { sameDay: "[Dinten puniko pukul] LT", nextDay: "[Mbenjang pukul] LT", nextWeek: "dddd [pukul] LT", lastDay: "[Kala wingi pukul] LT", lastWeek: "dddd [kepengker pukul] LT", sameElse: "L" }, relativeTime: { future: "wonten ing %s", past: "%s ingkang kepengker", s: "sawetawis detik", m: "setunggal menit", mm: "%d menit", h: "setunggal jam", hh: "%d jam", d: "sedinten", dd: "%d dinten", M: "sewulan", MM: "%d wulan", y: "setaun", yy: "%d taun" }, week: { dow: 1, doy: 7 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    return e.defineLocale("ka", { months: { standalone: "იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"), format: "იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს".split("_") }, monthsShort: "იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"), weekdays: { standalone: "კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"), format: "კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split("_"), isFormat: /(წინა|შემდეგ)/ }, weekdaysShort: "კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"), weekdaysMin: "კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"), longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, calendar: { sameDay: "[დღეს] LT[-ზე]", nextDay: "[ხვალ] LT[-ზე]", lastDay: "[გუშინ] LT[-ზე]", nextWeek: "[შემდეგ] dddd LT[-ზე]", lastWeek: "[წინა] dddd LT-ზე", sameElse: "L" }, relativeTime: { future: function future(e) {
          return (/(წამი|წუთი|საათი|წელი)/.test(e) ? e.replace(/ი$/, "ში") : e + "ში"
          );
        }, past: function past(e) {
          return (/(წამი|წუთი|საათი|დღე|თვე)/.test(e) ? e.replace(/(ი|ე)$/, "ის უკან") : /წელი/.test(e) ? e.replace(/წელი$/, "წლის უკან") : void 0
          );
        }, s: "რამდენიმე წამი", m: "წუთი", mm: "%d წუთი", h: "საათი", hh: "%d საათი", d: "დღე", dd: "%d დღე", M: "თვე", MM: "%d თვე", y: "წელი", yy: "%d წელი" }, dayOfMonthOrdinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/, ordinal: function ordinal(e) {
        return 0 === e ? e : 1 === e ? e + "-ლი" : e < 20 || e <= 100 && e % 20 == 0 || e % 100 == 0 ? "მე-" + e : e + "-ე";
      }, week: { dow: 1, doy: 7 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    var t = { 0: "-ші", 1: "-ші", 2: "-ші", 3: "-ші", 4: "-ші", 5: "-ші", 6: "-шы", 7: "-ші", 8: "-ші", 9: "-шы", 10: "-шы", 20: "-шы", 30: "-шы", 40: "-шы", 50: "-ші", 60: "-шы", 70: "-ші", 80: "-ші", 90: "-шы", 100: "-ші" };return e.defineLocale("kk", { months: "қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан".split("_"), monthsShort: "қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел".split("_"), weekdays: "жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі".split("_"), weekdaysShort: "жек_дүй_сей_сәр_бей_жұм_сен".split("_"), weekdaysMin: "жк_дй_сй_ср_бй_жм_сн".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Бүгін сағат] LT", nextDay: "[Ертең сағат] LT", nextWeek: "dddd [сағат] LT", lastDay: "[Кеше сағат] LT", lastWeek: "[Өткен аптаның] dddd [сағат] LT", sameElse: "L" }, relativeTime: { future: "%s ішінде", past: "%s бұрын", s: "бірнеше секунд", m: "бір минут", mm: "%d минут", h: "бір сағат", hh: "%d сағат", d: "бір күн", dd: "%d күн", M: "бір ай", MM: "%d ай", y: "бір жыл", yy: "%d жыл" }, dayOfMonthOrdinalParse: /\d{1,2}-(ші|шы)/, ordinal: function ordinal(e) {
        var n = e % 10,
            a = e >= 100 ? 100 : null;return e + (t[e] || t[n] || t[a]);
      }, week: { dow: 1, doy: 7 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    return e.defineLocale("km", { months: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"), monthsShort: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"), weekdays: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"), weekdaysShort: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"), weekdaysMin: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[ថ្ងៃនេះ ម៉ោង] LT", nextDay: "[ស្អែក ម៉ោង] LT", nextWeek: "dddd [ម៉ោង] LT", lastDay: "[ម្សិលមិញ ម៉ោង] LT", lastWeek: "dddd [សប្តាហ៍មុន] [ម៉ោង] LT", sameElse: "L" }, relativeTime: { future: "%sទៀត", past: "%sមុន", s: "ប៉ុន្មានវិនាទី", m: "មួយនាទី", mm: "%d នាទី", h: "មួយម៉ោង", hh: "%d ម៉ោង", d: "មួយថ្ងៃ", dd: "%d ថ្ងៃ", M: "មួយខែ", MM: "%d ខែ", y: "មួយឆ្នាំ", yy: "%d ឆ្នាំ" }, week: { dow: 1, doy: 4 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    var t = { 1: "೧", 2: "೨", 3: "೩", 4: "೪", 5: "೫", 6: "೬", 7: "೭", 8: "೮", 9: "೯", 0: "೦" },
        n = { "೧": "1", "೨": "2", "೩": "3", "೪": "4", "೫": "5", "೬": "6", "೭": "7", "೮": "8", "೯": "9", "೦": "0" };return e.defineLocale("kn", { months: "ಜನವರಿ_ಫೆಬ್ರವರಿ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬರ್_ಅಕ್ಟೋಬರ್_ನವೆಂಬರ್_ಡಿಸೆಂಬರ್".split("_"), monthsShort: "ಜನ_ಫೆಬ್ರ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬ_ಅಕ್ಟೋಬ_ನವೆಂಬ_ಡಿಸೆಂಬ".split("_"), monthsParseExact: !0, weekdays: "ಭಾನುವಾರ_ಸೋಮವಾರ_ಮಂಗಳವಾರ_ಬುಧವಾರ_ಗುರುವಾರ_ಶುಕ್ರವಾರ_ಶನಿವಾರ".split("_"), weekdaysShort: "ಭಾನು_ಸೋಮ_ಮಂಗಳ_ಬುಧ_ಗುರು_ಶುಕ್ರ_ಶನಿ".split("_"), weekdaysMin: "ಭಾ_ಸೋ_ಮಂ_ಬು_ಗು_ಶು_ಶ".split("_"), longDateFormat: { LT: "A h:mm", LTS: "A h:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm", LLLL: "dddd, D MMMM YYYY, A h:mm" }, calendar: { sameDay: "[ಇಂದು] LT", nextDay: "[ನಾಳೆ] LT", nextWeek: "dddd, LT", lastDay: "[ನಿನ್ನೆ] LT", lastWeek: "[ಕೊನೆಯ] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s ನಂತರ", past: "%s ಹಿಂದೆ", s: "ಕೆಲವು ಕ್ಷಣಗಳು", m: "ಒಂದು ನಿಮಿಷ", mm: "%d ನಿಮಿಷ", h: "ಒಂದು ಗಂಟೆ", hh: "%d ಗಂಟೆ", d: "ಒಂದು ದಿನ", dd: "%d ದಿನ", M: "ಒಂದು ತಿಂಗಳು", MM: "%d ತಿಂಗಳು", y: "ಒಂದು ವರ್ಷ", yy: "%d ವರ್ಷ" }, preparse: function preparse(e) {
        return e.replace(/[೧೨೩೪೫೬೭೮೯೦]/g, function (e) {
          return n[e];
        });
      }, postformat: function postformat(e) {
        return e.replace(/\d/g, function (e) {
          return t[e];
        });
      }, meridiemParse: /ರಾತ್ರಿ|ಬೆಳಿಗ್ಗೆ|ಮಧ್ಯಾಹ್ನ|ಸಂಜೆ/, meridiemHour: function meridiemHour(e, t) {
        return 12 === e && (e = 0), "ರಾತ್ರಿ" === t ? e < 4 ? e : e + 12 : "ಬೆಳಿಗ್ಗೆ" === t ? e : "ಮಧ್ಯಾಹ್ನ" === t ? e >= 10 ? e : e + 12 : "ಸಂಜೆ" === t ? e + 12 : void 0;
      }, meridiem: function meridiem(e, t, n) {
        return e < 4 ? "ರಾತ್ರಿ" : e < 10 ? "ಬೆಳಿಗ್ಗೆ" : e < 17 ? "ಮಧ್ಯಾಹ್ನ" : e < 20 ? "ಸಂಜೆ" : "ರಾತ್ರಿ";
      }, dayOfMonthOrdinalParse: /\d{1,2}(ನೇ)/, ordinal: function ordinal(e) {
        return e + "ನೇ";
      }, week: { dow: 0, doy: 6 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    return e.defineLocale("ko", { months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"), monthsShort: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"), weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"), weekdaysShort: "일_월_화_수_목_금_토".split("_"), weekdaysMin: "일_월_화_수_목_금_토".split("_"), longDateFormat: { LT: "A h:mm", LTS: "A h:mm:ss", L: "YYYY.MM.DD", LL: "YYYY년 MMMM D일", LLL: "YYYY년 MMMM D일 A h:mm", LLLL: "YYYY년 MMMM D일 dddd A h:mm", l: "YYYY.MM.DD", ll: "YYYY년 MMMM D일", lll: "YYYY년 MMMM D일 A h:mm", llll: "YYYY년 MMMM D일 dddd A h:mm" }, calendar: { sameDay: "오늘 LT", nextDay: "내일 LT", nextWeek: "dddd LT", lastDay: "어제 LT", lastWeek: "지난주 dddd LT", sameElse: "L" }, relativeTime: { future: "%s 후", past: "%s 전", s: "몇 초", ss: "%d초", m: "1분", mm: "%d분", h: "한 시간", hh: "%d시간", d: "하루", dd: "%d일", M: "한 달", MM: "%d달", y: "일 년", yy: "%d년" }, dayOfMonthOrdinalParse: /\d{1,2}일/, ordinal: "%d일", meridiemParse: /오전|오후/, isPM: function isPM(e) {
        return "오후" === e;
      }, meridiem: function meridiem(e, t, n) {
        return e < 12 ? "오전" : "오후";
      } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    var t = { 0: "-чү", 1: "-чи", 2: "-чи", 3: "-чү", 4: "-чү", 5: "-чи", 6: "-чы", 7: "-чи", 8: "-чи", 9: "-чу", 10: "-чу", 20: "-чы", 30: "-чу", 40: "-чы", 50: "-чү", 60: "-чы", 70: "-чи", 80: "-чи", 90: "-чу", 100: "-чү" };return e.defineLocale("ky", { months: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"), monthsShort: "янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"), weekdays: "Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби".split("_"), weekdaysShort: "Жек_Дүй_Шей_Шар_Бей_Жум_Ише".split("_"), weekdaysMin: "Жк_Дй_Шй_Шр_Бй_Жм_Иш".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Бүгүн саат] LT", nextDay: "[Эртең саат] LT", nextWeek: "dddd [саат] LT", lastDay: "[Кече саат] LT", lastWeek: "[Өткен аптанын] dddd [күнү] [саат] LT", sameElse: "L" }, relativeTime: { future: "%s ичинде", past: "%s мурун", s: "бирнече секунд", m: "бир мүнөт", mm: "%d мүнөт", h: "бир саат", hh: "%d саат", d: "бир күн", dd: "%d күн", M: "бир ай", MM: "%d ай", y: "бир жыл", yy: "%d жыл" }, dayOfMonthOrdinalParse: /\d{1,2}-(чи|чы|чү|чу)/, ordinal: function ordinal(e) {
        var n = e % 10,
            a = e >= 100 ? 100 : null;return e + (t[e] || t[n] || t[a]);
      }, week: { dow: 1, doy: 7 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    function t(e, t, n, a) {
      var r = { m: ["eng Minutt", "enger Minutt"], h: ["eng Stonn", "enger Stonn"], d: ["een Dag", "engem Dag"], M: ["ee Mount", "engem Mount"], y: ["ee Joer", "engem Joer"] };return t ? r[n][0] : r[n][1];
    }function n(e) {
      return r(e.substr(0, e.indexOf(" "))) ? "a " + e : "an " + e;
    }function a(e) {
      return r(e.substr(0, e.indexOf(" "))) ? "viru " + e : "virun " + e;
    }function r(e) {
      if (e = parseInt(e, 10), isNaN(e)) return !1;if (e < 0) return !0;if (e < 10) return 4 <= e && e <= 7;if (e < 100) {
        var t = e % 10,
            n = e / 10;return r(0 === t ? n : t);
      }if (e < 1e4) {
        for (; e >= 10;) {
          e /= 10;
        }return r(e);
      }return e /= 1e3, r(e);
    }return e.defineLocale("lb", { months: "Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"), monthsParseExact: !0, weekdays: "Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"), weekdaysShort: "So._Mé._Dë._Më._Do._Fr._Sa.".split("_"), weekdaysMin: "So_Mé_Dë_Më_Do_Fr_Sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm [Auer]", LTS: "H:mm:ss [Auer]", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm [Auer]", LLLL: "dddd, D. MMMM YYYY H:mm [Auer]" }, calendar: { sameDay: "[Haut um] LT", sameElse: "L", nextDay: "[Muer um] LT", nextWeek: "dddd [um] LT", lastDay: "[Gëschter um] LT", lastWeek: function lastWeek() {
          switch (this.day()) {case 2:case 4:
              return "[Leschten] dddd [um] LT";default:
              return "[Leschte] dddd [um] LT";}
        } }, relativeTime: { future: n, past: a, s: "e puer Sekonnen", m: t, mm: "%d Minutten", h: t, hh: "%d Stonnen", d: t, dd: "%d Deeg", M: t, MM: "%d Méint", y: t, yy: "%d Joer" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    return e.defineLocale("lo", { months: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"), monthsShort: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"), weekdays: "ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"), weekdaysShort: "ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"), weekdaysMin: "ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "ວັນdddd D MMMM YYYY HH:mm" }, meridiemParse: /ຕອນເຊົ້າ|ຕອນແລງ/, isPM: function isPM(e) {
        return "ຕອນແລງ" === e;
      }, meridiem: function meridiem(e, t, n) {
        return e < 12 ? "ຕອນເຊົ້າ" : "ຕອນແລງ";
      }, calendar: { sameDay: "[ມື້ນີ້ເວລາ] LT", nextDay: "[ມື້ອື່ນເວລາ] LT", nextWeek: "[ວັນ]dddd[ໜ້າເວລາ] LT", lastDay: "[ມື້ວານນີ້ເວລາ] LT", lastWeek: "[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT", sameElse: "L" }, relativeTime: { future: "ອີກ %s", past: "%sຜ່ານມາ", s: "ບໍ່ເທົ່າໃດວິນາທີ", m: "1 ນາທີ", mm: "%d ນາທີ", h: "1 ຊົ່ວໂມງ", hh: "%d ຊົ່ວໂມງ", d: "1 ມື້", dd: "%d ມື້", M: "1 ເດືອນ", MM: "%d ເດືອນ", y: "1 ປີ", yy: "%d ປີ" }, dayOfMonthOrdinalParse: /(ທີ່)\d{1,2}/, ordinal: function ordinal(e) {
        return "ທີ່" + e;
      } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    function t(e, t, n, a) {
      return t ? "kelios sekundės" : a ? "kelių sekundžių" : "kelias sekundes";
    }function n(e, t, n, a) {
      return t ? r(n)[0] : a ? r(n)[1] : r(n)[2];
    }function a(e) {
      return e % 10 == 0 || e > 10 && e < 20;
    }function r(e) {
      return s[e].split("_");
    }function i(e, t, i, s) {
      var o = e + " ";return 1 === e ? o + n(e, t, i[0], s) : t ? o + (a(e) ? r(i)[1] : r(i)[0]) : s ? o + r(i)[1] : o + (a(e) ? r(i)[1] : r(i)[2]);
    }var s = { m: "minutė_minutės_minutę", mm: "minutės_minučių_minutes", h: "valanda_valandos_valandą", hh: "valandos_valandų_valandas", d: "diena_dienos_dieną", dd: "dienos_dienų_dienas", M: "mėnuo_mėnesio_mėnesį", MM: "mėnesiai_mėnesių_mėnesius", y: "metai_metų_metus", yy: "metai_metų_metus" };return e.defineLocale("lt", { months: { format: "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"), standalone: "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"), isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/ }, monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"), weekdays: { format: "sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį".split("_"), standalone: "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"), isFormat: /dddd HH:mm/ }, weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"), weekdaysMin: "S_P_A_T_K_Pn_Š".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY [m.] MMMM D [d.]", LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]", LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]", l: "YYYY-MM-DD", ll: "YYYY [m.] MMMM D [d.]", lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]", llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]" }, calendar: { sameDay: "[Šiandien] LT", nextDay: "[Rytoj] LT", nextWeek: "dddd LT", lastDay: "[Vakar] LT", lastWeek: "[Praėjusį] dddd LT", sameElse: "L" }, relativeTime: { future: "po %s", past: "prieš %s", s: t, m: n, mm: i, h: n, hh: i, d: n, dd: i, M: n, MM: i, y: n, yy: i }, dayOfMonthOrdinalParse: /\d{1,2}-oji/, ordinal: function ordinal(e) {
        return e + "-oji";
      }, week: { dow: 1, doy: 4 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    function t(e, t, n) {
      return n ? t % 10 == 1 && t % 100 != 11 ? e[2] : e[3] : t % 10 == 1 && t % 100 != 11 ? e[0] : e[1];
    }function n(e, n, a) {
      return e + " " + t(i[a], e, n);
    }function a(e, n, a) {
      return t(i[a], e, n);
    }function r(e, t) {
      return t ? "dažas sekundes" : "dažām sekundēm";
    }var i = { m: "minūtes_minūtēm_minūte_minūtes".split("_"), mm: "minūtes_minūtēm_minūte_minūtes".split("_"), h: "stundas_stundām_stunda_stundas".split("_"), hh: "stundas_stundām_stunda_stundas".split("_"), d: "dienas_dienām_diena_dienas".split("_"), dd: "dienas_dienām_diena_dienas".split("_"), M: "mēneša_mēnešiem_mēnesis_mēneši".split("_"), MM: "mēneša_mēnešiem_mēnesis_mēneši".split("_"), y: "gada_gadiem_gads_gadi".split("_"), yy: "gada_gadiem_gads_gadi".split("_") };return e.defineLocale("lv", { months: "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"), monthsShort: "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"), weekdays: "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"), weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"), weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY.", LL: "YYYY. [gada] D. MMMM", LLL: "YYYY. [gada] D. MMMM, HH:mm", LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm" }, calendar: { sameDay: "[Šodien pulksten] LT", nextDay: "[Rīt pulksten] LT", nextWeek: "dddd [pulksten] LT", lastDay: "[Vakar pulksten] LT", lastWeek: "[Pagājušā] dddd [pulksten] LT", sameElse: "L" }, relativeTime: { future: "pēc %s", past: "pirms %s", s: r, m: a, mm: n, h: a, hh: n, d: a, dd: n, M: a, MM: n, y: a, yy: n }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    var t = { words: { m: ["jedan minut", "jednog minuta"], mm: ["minut", "minuta", "minuta"], h: ["jedan sat", "jednog sata"], hh: ["sat", "sata", "sati"], dd: ["dan", "dana", "dana"], MM: ["mjesec", "mjeseca", "mjeseci"], yy: ["godina", "godine", "godina"] }, correctGrammaticalCase: function correctGrammaticalCase(e, t) {
        return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2];
      }, translate: function translate(e, n, a) {
        var r = t.words[a];return 1 === a.length ? n ? r[0] : r[1] : e + " " + t.correctGrammaticalCase(e, r);
      } };return e.defineLocale("me", { months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"), monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"), monthsParseExact: !0, weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"), weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"), weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" }, calendar: { sameDay: "[danas u] LT", nextDay: "[sjutra u] LT", nextWeek: function nextWeek() {
          switch (this.day()) {case 0:
              return "[u] [nedjelju] [u] LT";case 3:
              return "[u] [srijedu] [u] LT";case 6:
              return "[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:
              return "[u] dddd [u] LT";}
        }, lastDay: "[juče u] LT", lastWeek: function lastWeek() {
          return ["[prošle] [nedjelje] [u] LT", "[prošlog] [ponedjeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srijede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"][this.day()];
        }, sameElse: "L" }, relativeTime: { future: "za %s", past: "prije %s", s: "nekoliko sekundi", m: t.translate, mm: t.translate, h: t.translate, hh: t.translate, d: "dan", dd: t.translate, M: "mjesec", MM: t.translate, y: "godinu", yy: t.translate }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 7 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    return e.defineLocale("mi", { months: "Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea".split("_"), monthsShort: "Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split("_"), monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i, monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i, monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i, monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i, weekdays: "Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei".split("_"), weekdaysShort: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"), weekdaysMin: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [i] HH:mm", LLLL: "dddd, D MMMM YYYY [i] HH:mm" }, calendar: { sameDay: "[i teie mahana, i] LT", nextDay: "[apopo i] LT", nextWeek: "dddd [i] LT", lastDay: "[inanahi i] LT", lastWeek: "dddd [whakamutunga i] LT", sameElse: "L" }, relativeTime: { future: "i roto i %s", past: "%s i mua", s: "te hēkona ruarua", m: "he meneti", mm: "%d meneti", h: "te haora", hh: "%d haora", d: "he ra", dd: "%d ra", M: "he marama", MM: "%d marama", y: "he tau", yy: "%d tau" }, dayOfMonthOrdinalParse: /\d{1,2}º/, ordinal: "%dº", week: { dow: 1, doy: 4 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    return e.defineLocale("mk", { months: "јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"), monthsShort: "јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"), weekdays: "недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"), weekdaysShort: "нед_пон_вто_сре_чет_пет_саб".split("_"), weekdaysMin: "нe_пo_вт_ср_че_пе_сa".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "D.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY H:mm", LLLL: "dddd, D MMMM YYYY H:mm" }, calendar: { sameDay: "[Денес во] LT", nextDay: "[Утре во] LT", nextWeek: "[Во] dddd [во] LT", lastDay: "[Вчера во] LT", lastWeek: function lastWeek() {
          switch (this.day()) {case 0:case 3:case 6:
              return "[Изминатата] dddd [во] LT";case 1:case 2:case 4:case 5:
              return "[Изминатиот] dddd [во] LT";}
        }, sameElse: "L" }, relativeTime: { future: "после %s", past: "пред %s", s: "неколку секунди", m: "минута", mm: "%d минути", h: "час", hh: "%d часа", d: "ден", dd: "%d дена", M: "месец", MM: "%d месеци", y: "година", yy: "%d години" }, dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/, ordinal: function ordinal(e) {
        var t = e % 10,
            n = e % 100;return 0 === e ? e + "-ев" : 0 === n ? e + "-ен" : n > 10 && n < 20 ? e + "-ти" : 1 === t ? e + "-ви" : 2 === t ? e + "-ри" : 7 === t || 8 === t ? e + "-ми" : e + "-ти";
      }, week: { dow: 1, doy: 7 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    return e.defineLocale("ml", { months: "ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"), monthsShort: "ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"), monthsParseExact: !0, weekdays: "ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"), weekdaysShort: "ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"), weekdaysMin: "ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"), longDateFormat: { LT: "A h:mm -നു", LTS: "A h:mm:ss -നു", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm -നു", LLLL: "dddd, D MMMM YYYY, A h:mm -നു" }, calendar: { sameDay: "[ഇന്ന്] LT", nextDay: "[നാളെ] LT", nextWeek: "dddd, LT", lastDay: "[ഇന്നലെ] LT", lastWeek: "[കഴിഞ്ഞ] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s കഴിഞ്ഞ്", past: "%s മുൻപ്", s: "അൽപ നിമിഷങ്ങൾ", m: "ഒരു മിനിറ്റ്", mm: "%d മിനിറ്റ്", h: "ഒരു മണിക്കൂർ", hh: "%d മണിക്കൂർ", d: "ഒരു ദിവസം", dd: "%d ദിവസം", M: "ഒരു മാസം", MM: "%d മാസം", y: "ഒരു വർഷം", yy: "%d വർഷം" }, meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i, meridiemHour: function meridiemHour(e, t) {
        return 12 === e && (e = 0), "രാത്രി" === t && e >= 4 || "ഉച്ച കഴിഞ്ഞ്" === t || "വൈകുന്നേരം" === t ? e + 12 : e;
      }, meridiem: function meridiem(e, t, n) {
        return e < 4 ? "രാത്രി" : e < 12 ? "രാവിലെ" : e < 17 ? "ഉച്ച കഴിഞ്ഞ്" : e < 20 ? "വൈകുന്നേരം" : "രാത്രി";
      } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    function t(e, t, n, a) {
      var r = "";if (t) switch (n) {case "s":
          r = "काही सेकंद";break;case "m":
          r = "एक मिनिट";break;case "mm":
          r = "%d मिनिटे";break;case "h":
          r = "एक तास";break;case "hh":
          r = "%d तास";break;case "d":
          r = "एक दिवस";break;case "dd":
          r = "%d दिवस";break;case "M":
          r = "एक महिना";break;case "MM":
          r = "%d महिने";break;case "y":
          r = "एक वर्ष";break;case "yy":
          r = "%d वर्षे";} else switch (n) {case "s":
          r = "काही सेकंदां";break;case "m":
          r = "एका मिनिटा";break;case "mm":
          r = "%d मिनिटां";break;case "h":
          r = "एका तासा";break;case "hh":
          r = "%d तासां";break;case "d":
          r = "एका दिवसा";break;case "dd":
          r = "%d दिवसां";break;case "M":
          r = "एका महिन्या";break;case "MM":
          r = "%d महिन्यां";break;case "y":
          r = "एका वर्षा";break;case "yy":
          r = "%d वर्षां";}return r.replace(/%d/i, e);
    }var n = { 1: "१", 2: "२", 3: "३", 4: "४", 5: "५", 6: "६", 7: "७", 8: "८", 9: "९", 0: "०" },
        a = { "१": "1", "२": "2", "३": "3", "४": "4", "५": "5", "६": "6", "७": "7", "८": "8", "९": "9", "०": "0" };return e.defineLocale("mr", { months: "जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"), monthsShort: "जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"), monthsParseExact: !0, weekdays: "रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"), weekdaysShort: "रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"), weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"), longDateFormat: { LT: "A h:mm वाजता", LTS: "A h:mm:ss वाजता", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm वाजता", LLLL: "dddd, D MMMM YYYY, A h:mm वाजता" }, calendar: { sameDay: "[आज] LT", nextDay: "[उद्या] LT", nextWeek: "dddd, LT", lastDay: "[काल] LT", lastWeek: "[मागील] dddd, LT", sameElse: "L" }, relativeTime: { future: "%sमध्ये", past: "%sपूर्वी", s: t, m: t, mm: t, h: t, hh: t, d: t, dd: t, M: t, MM: t, y: t, yy: t }, preparse: function preparse(e) {
        return e.replace(/[१२३४५६७८९०]/g, function (e) {
          return a[e];
        });
      }, postformat: function postformat(e) {
        return e.replace(/\d/g, function (e) {
          return n[e];
        });
      }, meridiemParse: /रात्री|सकाळी|दुपारी|सायंकाळी/, meridiemHour: function meridiemHour(e, t) {
        return 12 === e && (e = 0), "रात्री" === t ? e < 4 ? e : e + 12 : "सकाळी" === t ? e : "दुपारी" === t ? e >= 10 ? e : e + 12 : "सायंकाळी" === t ? e + 12 : void 0;
      }, meridiem: function meridiem(e, t, n) {
        return e < 4 ? "रात्री" : e < 10 ? "सकाळी" : e < 17 ? "दुपारी" : e < 20 ? "सायंकाळी" : "रात्री";
      }, week: { dow: 0, doy: 6 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    return e.defineLocale("ms", { months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"), monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"), weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"), weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"), weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] HH.mm", LLLL: "dddd, D MMMM YYYY [pukul] HH.mm" }, meridiemParse: /pagi|tengahari|petang|malam/, meridiemHour: function meridiemHour(e, t) {
        return 12 === e && (e = 0), "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0;
      }, meridiem: function meridiem(e, t, n) {
        return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam";
      }, calendar: { sameDay: "[Hari ini pukul] LT", nextDay: "[Esok pukul] LT", nextWeek: "dddd [pukul] LT", lastDay: "[Kelmarin pukul] LT", lastWeek: "dddd [lepas pukul] LT", sameElse: "L" }, relativeTime: { future: "dalam %s", past: "%s yang lepas", s: "beberapa saat", m: "seminit", mm: "%d minit", h: "sejam", hh: "%d jam", d: "sehari", dd: "%d hari", M: "sebulan", MM: "%d bulan", y: "setahun", yy: "%d tahun" }, week: { dow: 1, doy: 7 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    return e.defineLocale("ms-my", { months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"), monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"), weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"), weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"), weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] HH.mm", LLLL: "dddd, D MMMM YYYY [pukul] HH.mm" }, meridiemParse: /pagi|tengahari|petang|malam/, meridiemHour: function meridiemHour(e, t) {
        return 12 === e && (e = 0), "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0;
      }, meridiem: function meridiem(e, t, n) {
        return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam";
      }, calendar: { sameDay: "[Hari ini pukul] LT", nextDay: "[Esok pukul] LT", nextWeek: "dddd [pukul] LT", lastDay: "[Kelmarin pukul] LT", lastWeek: "dddd [lepas pukul] LT", sameElse: "L" }, relativeTime: { future: "dalam %s", past: "%s yang lepas", s: "beberapa saat", m: "seminit", mm: "%d minit", h: "sejam", hh: "%d jam", d: "sehari", dd: "%d hari", M: "sebulan", MM: "%d bulan", y: "setahun", yy: "%d tahun" }, week: { dow: 1, doy: 7 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    var t = { 1: "၁", 2: "၂", 3: "၃", 4: "၄", 5: "၅", 6: "၆", 7: "၇", 8: "၈", 9: "၉", 0: "၀" },
        n = { "၁": "1", "၂": "2", "၃": "3", "၄": "4", "၅": "5", "၆": "6", "၇": "7", "၈": "8", "၉": "9", "၀": "0" };return e.defineLocale("my", { months: "ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split("_"), monthsShort: "ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"), weekdays: "တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split("_"), weekdaysShort: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"), weekdaysMin: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[ယနေ.] LT [မှာ]", nextDay: "[မနက်ဖြန်] LT [မှာ]", nextWeek: "dddd LT [မှာ]", lastDay: "[မနေ.က] LT [မှာ]", lastWeek: "[ပြီးခဲ့သော] dddd LT [မှာ]", sameElse: "L" }, relativeTime: { future: "လာမည့် %s မှာ", past: "လွန်ခဲ့သော %s က", s: "စက္ကန်.အနည်းငယ်", m: "တစ်မိနစ်", mm: "%d မိနစ်", h: "တစ်နာရီ", hh: "%d နာရီ", d: "တစ်ရက်", dd: "%d ရက်", M: "တစ်လ", MM: "%d လ", y: "တစ်နှစ်", yy: "%d နှစ်" }, preparse: function preparse(e) {
        return e.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function (e) {
          return n[e];
        });
      }, postformat: function postformat(e) {
        return e.replace(/\d/g, function (e) {
          return t[e];
        });
      }, week: { dow: 1, doy: 4 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    return e.defineLocale("nb", { months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"), monthsShort: "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"), monthsParseExact: !0, weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"), weekdaysShort: "sø._ma._ti._on._to._fr._lø.".split("_"), weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY [kl.] HH:mm", LLLL: "dddd D. MMMM YYYY [kl.] HH:mm" }, calendar: { sameDay: "[i dag kl.] LT", nextDay: "[i morgen kl.] LT", nextWeek: "dddd [kl.] LT", lastDay: "[i går kl.] LT", lastWeek: "[forrige] dddd [kl.] LT", sameElse: "L" }, relativeTime: { future: "om %s", past: "%s siden", s: "noen sekunder", m: "ett minutt", mm: "%d minutter", h: "en time", hh: "%d timer", d: "en dag", dd: "%d dager", M: "en måned", MM: "%d måneder", y: "ett år", yy: "%d år" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    var t = { 1: "१", 2: "२", 3: "३", 4: "४", 5: "५", 6: "६", 7: "७", 8: "८", 9: "९", 0: "०" },
        n = { "१": "1", "२": "2", "३": "3", "४": "4", "५": "5", "६": "6", "७": "7", "८": "8", "९": "9", "०": "0" };return e.defineLocale("ne", { months: "जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"), monthsShort: "जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"), monthsParseExact: !0, weekdays: "आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"), weekdaysShort: "आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"), weekdaysMin: "आ._सो._मं._बु._बि._शु._श.".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "Aको h:mm बजे", LTS: "Aको h:mm:ss बजे", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, Aको h:mm बजे", LLLL: "dddd, D MMMM YYYY, Aको h:mm बजे" }, preparse: function preparse(e) {
        return e.replace(/[१२३४५६७८९०]/g, function (e) {
          return n[e];
        });
      }, postformat: function postformat(e) {
        return e.replace(/\d/g, function (e) {
          return t[e];
        });
      }, meridiemParse: /राति|बिहान|दिउँसो|साँझ/, meridiemHour: function meridiemHour(e, t) {
        return 12 === e && (e = 0), "राति" === t ? e < 4 ? e : e + 12 : "बिहान" === t ? e : "दिउँसो" === t ? e >= 10 ? e : e + 12 : "साँझ" === t ? e + 12 : void 0;
      }, meridiem: function meridiem(e, t, n) {
        return e < 3 ? "राति" : e < 12 ? "बिहान" : e < 16 ? "दिउँसो" : e < 20 ? "साँझ" : "राति";
      }, calendar: { sameDay: "[आज] LT", nextDay: "[भोलि] LT", nextWeek: "[आउँदो] dddd[,] LT", lastDay: "[हिजो] LT", lastWeek: "[गएको] dddd[,] LT", sameElse: "L" }, relativeTime: { future: "%sमा", past: "%s अगाडि", s: "केही क्षण", m: "एक मिनेट", mm: "%d मिनेट", h: "एक घण्टा", hh: "%d घण्टा", d: "एक दिन", dd: "%d दिन", M: "एक महिना", MM: "%d महिना", y: "एक बर्ष", yy: "%d बर्ष" }, week: { dow: 0, doy: 6 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
        n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
        a = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
        r = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;return e.defineLocale("nl", { months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"), monthsShort: function monthsShort(e, a) {
        return e ? /-MMM-/.test(a) ? n[e.month()] : t[e.month()] : t;
      }, monthsRegex: r, monthsShortRegex: r, monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i, monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i, monthsParse: a, longMonthsParse: a, shortMonthsParse: a, weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"), weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"), weekdaysMin: "Zo_Ma_Di_Wo_Do_Vr_Za".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD-MM-YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[vandaag om] LT", nextDay: "[morgen om] LT", nextWeek: "dddd [om] LT", lastDay: "[gisteren om] LT", lastWeek: "[afgelopen] dddd [om] LT", sameElse: "L" }, relativeTime: { future: "over %s", past: "%s geleden", s: "een paar seconden", m: "één minuut", mm: "%d minuten", h: "één uur", hh: "%d uur", d: "één dag", dd: "%d dagen", M: "één maand", MM: "%d maanden", y: "één jaar", yy: "%d jaar" }, dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/, ordinal: function ordinal(e) {
        return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de");
      }, week: { dow: 1, doy: 4 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
        n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
        a = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
        r = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;return e.defineLocale("nl-be", { months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"), monthsShort: function monthsShort(e, a) {
        return e ? /-MMM-/.test(a) ? n[e.month()] : t[e.month()] : t;
      }, monthsRegex: r, monthsShortRegex: r, monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i, monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i, monthsParse: a, longMonthsParse: a, shortMonthsParse: a, weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"), weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"), weekdaysMin: "Zo_Ma_Di_Wo_Do_Vr_Za".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[vandaag om] LT", nextDay: "[morgen om] LT", nextWeek: "dddd [om] LT", lastDay: "[gisteren om] LT", lastWeek: "[afgelopen] dddd [om] LT", sameElse: "L" }, relativeTime: { future: "over %s", past: "%s geleden", s: "een paar seconden", m: "één minuut", mm: "%d minuten", h: "één uur", hh: "%d uur", d: "één dag", dd: "%d dagen", M: "één maand", MM: "%d maanden", y: "één jaar", yy: "%d jaar" }, dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/, ordinal: function ordinal(e) {
        return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de");
      }, week: { dow: 1, doy: 4 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    return e.defineLocale("nn", { months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"), monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"), weekdays: "sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"), weekdaysShort: "sun_mån_tys_ons_tor_fre_lau".split("_"), weekdaysMin: "su_må_ty_on_to_fr_lø".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY [kl.] H:mm", LLLL: "dddd D. MMMM YYYY [kl.] HH:mm" }, calendar: { sameDay: "[I dag klokka] LT", nextDay: "[I morgon klokka] LT", nextWeek: "dddd [klokka] LT", lastDay: "[I går klokka] LT", lastWeek: "[Føregåande] dddd [klokka] LT", sameElse: "L" }, relativeTime: { future: "om %s", past: "%s sidan", s: "nokre sekund", m: "eit minutt", mm: "%d minutt", h: "ein time", hh: "%d timar", d: "ein dag", dd: "%d dagar", M: "ein månad", MM: "%d månader", y: "eit år", yy: "%d år" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    var t = { 1: "੧", 2: "੨", 3: "੩", 4: "੪", 5: "੫", 6: "੬", 7: "੭", 8: "੮", 9: "੯", 0: "੦" },
        n = { "੧": "1", "੨": "2", "੩": "3", "੪": "4", "੫": "5", "੬": "6", "੭": "7", "੮": "8", "੯": "9", "੦": "0" };return e.defineLocale("pa-in", { months: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"), monthsShort: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"), weekdays: "ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ".split("_"), weekdaysShort: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"), weekdaysMin: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"), longDateFormat: { LT: "A h:mm ਵਜੇ", LTS: "A h:mm:ss ਵਜੇ", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm ਵਜੇ", LLLL: "dddd, D MMMM YYYY, A h:mm ਵਜੇ" }, calendar: { sameDay: "[ਅਜ] LT", nextDay: "[ਕਲ] LT", nextWeek: "dddd, LT", lastDay: "[ਕਲ] LT", lastWeek: "[ਪਿਛਲੇ] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s ਵਿੱਚ", past: "%s ਪਿਛਲੇ", s: "ਕੁਝ ਸਕਿੰਟ", m: "ਇਕ ਮਿੰਟ", mm: "%d ਮਿੰਟ", h: "ਇੱਕ ਘੰਟਾ", hh: "%d ਘੰਟੇ", d: "ਇੱਕ ਦਿਨ", dd: "%d ਦਿਨ", M: "ਇੱਕ ਮਹੀਨਾ", MM: "%d ਮਹੀਨੇ", y: "ਇੱਕ ਸਾਲ", yy: "%d ਸਾਲ" }, preparse: function preparse(e) {
        return e.replace(/[੧੨੩੪੫੬੭੮੯੦]/g, function (e) {
          return n[e];
        });
      }, postformat: function postformat(e) {
        return e.replace(/\d/g, function (e) {
          return t[e];
        });
      }, meridiemParse: /ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/, meridiemHour: function meridiemHour(e, t) {
        return 12 === e && (e = 0), "ਰਾਤ" === t ? e < 4 ? e : e + 12 : "ਸਵੇਰ" === t ? e : "ਦੁਪਹਿਰ" === t ? e >= 10 ? e : e + 12 : "ਸ਼ਾਮ" === t ? e + 12 : void 0;
      }, meridiem: function meridiem(e, t, n) {
        return e < 4 ? "ਰਾਤ" : e < 10 ? "ਸਵੇਰ" : e < 17 ? "ਦੁਪਹਿਰ" : e < 20 ? "ਸ਼ਾਮ" : "ਰਾਤ";
      }, week: { dow: 0, doy: 6 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    function t(e) {
      return e % 10 < 5 && e % 10 > 1 && ~~(e / 10) % 10 != 1;
    }function n(e, n, a) {
      var r = e + " ";switch (a) {case "m":
          return n ? "minuta" : "minutę";case "mm":
          return r + (t(e) ? "minuty" : "minut");case "h":
          return n ? "godzina" : "godzinę";case "hh":
          return r + (t(e) ? "godziny" : "godzin");case "MM":
          return r + (t(e) ? "miesiące" : "miesięcy");case "yy":
          return r + (t(e) ? "lata" : "lat");}
    }var a = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),
        r = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_");return e.defineLocale("pl", { months: function months(e, t) {
        return e ? "" === t ? "(" + r[e.month()] + "|" + a[e.month()] + ")" : /D MMMM/.test(t) ? r[e.month()] : a[e.month()] : a;
      }, monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"), weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"), weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"), weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Dziś o] LT", nextDay: "[Jutro o] LT", nextWeek: "[W] dddd [o] LT", lastDay: "[Wczoraj o] LT", lastWeek: function lastWeek() {
          switch (this.day()) {case 0:
              return "[W zeszłą niedzielę o] LT";case 3:
              return "[W zeszłą środę o] LT";case 6:
              return "[W zeszłą sobotę o] LT";default:
              return "[W zeszły] dddd [o] LT";}
        }, sameElse: "L" }, relativeTime: { future: "za %s", past: "%s temu", s: "kilka sekund", m: n, mm: n, h: n, hh: n, d: "1 dzień", dd: "%d dni", M: "miesiąc", MM: n, y: "rok", yy: n }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    return e.defineLocale("pt", { months: "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"), monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"), weekdays: "Domingo_Segunda-Feira_Terça-Feira_Quarta-Feira_Quinta-Feira_Sexta-Feira_Sábado".split("_"), weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"), weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY HH:mm", LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm" }, calendar: { sameDay: "[Hoje às] LT", nextDay: "[Amanhã às] LT", nextWeek: "dddd [às] LT", lastDay: "[Ontem às] LT", lastWeek: function lastWeek() {
          return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT";
        }, sameElse: "L" }, relativeTime: { future: "em %s", past: "há %s", s: "segundos", m: "um minuto", mm: "%d minutos", h: "uma hora", hh: "%d horas", d: "um dia", dd: "%d dias", M: "um mês", MM: "%d meses", y: "um ano", yy: "%d anos" }, dayOfMonthOrdinalParse: /\d{1,2}º/, ordinal: "%dº", week: { dow: 1, doy: 4 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    return e.defineLocale("pt-br", { months: "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"), monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"), weekdays: "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"), weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"), weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY [às] HH:mm", LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm" }, calendar: { sameDay: "[Hoje às] LT", nextDay: "[Amanhã às] LT", nextWeek: "dddd [às] LT", lastDay: "[Ontem às] LT", lastWeek: function lastWeek() {
          return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT";
        }, sameElse: "L" }, relativeTime: { future: "em %s", past: "%s atrás", s: "poucos segundos", m: "um minuto", mm: "%d minutos", h: "uma hora", hh: "%d horas", d: "um dia", dd: "%d dias", M: "um mês", MM: "%d meses", y: "um ano", yy: "%d anos" }, dayOfMonthOrdinalParse: /\d{1,2}º/, ordinal: "%dº" });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    function t(e, t, n) {
      var a = { mm: "minute", hh: "ore", dd: "zile", MM: "luni", yy: "ani" },
          r = " ";return (e % 100 >= 20 || e >= 100 && e % 100 == 0) && (r = " de "), e + r + a[n];
    }return e.defineLocale("ro", { months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"), monthsShort: "ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"), monthsParseExact: !0, weekdays: "duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"), weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"), weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY H:mm", LLLL: "dddd, D MMMM YYYY H:mm" }, calendar: { sameDay: "[azi la] LT", nextDay: "[mâine la] LT", nextWeek: "dddd [la] LT", lastDay: "[ieri la] LT", lastWeek: "[fosta] dddd [la] LT", sameElse: "L" }, relativeTime: { future: "peste %s", past: "%s în urmă", s: "câteva secunde", m: "un minut", mm: t, h: "o oră", hh: t, d: "o zi", dd: t, M: "o lună", MM: t, y: "un an", yy: t }, week: { dow: 1, doy: 7 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    function t(e, t) {
      var n = e.split("_");return t % 10 == 1 && t % 100 != 11 ? n[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? n[1] : n[2];
    }function n(e, n, a) {
      var r = { mm: n ? "минута_минуты_минут" : "минуту_минуты_минут", hh: "час_часа_часов", dd: "день_дня_дней", MM: "месяц_месяца_месяцев", yy: "год_года_лет" };return "m" === a ? n ? "минута" : "минуту" : e + " " + t(r[a], +e);
    }var a = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i];return e.defineLocale("ru", { months: { format: "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"), standalone: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_") }, monthsShort: { format: "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"), standalone: "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_") }, weekdays: { standalone: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"), format: "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_"), isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/ }, weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_"), weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"), monthsParse: a, longMonthsParse: a, shortMonthsParse: a, monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i, monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i, monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i, monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY г.", LLL: "D MMMM YYYY г., HH:mm", LLLL: "dddd, D MMMM YYYY г., HH:mm" }, calendar: { sameDay: "[Сегодня в] LT", nextDay: "[Завтра в] LT", lastDay: "[Вчера в] LT", nextWeek: function nextWeek(e) {
          if (e.week() === this.week()) return 2 === this.day() ? "[Во] dddd [в] LT" : "[В] dddd [в] LT";switch (this.day()) {case 0:
              return "[В следующее] dddd [в] LT";case 1:case 2:case 4:
              return "[В следующий] dddd [в] LT";case 3:case 5:case 6:
              return "[В следующую] dddd [в] LT";}
        }, lastWeek: function lastWeek(e) {
          if (e.week() === this.week()) return 2 === this.day() ? "[Во] dddd [в] LT" : "[В] dddd [в] LT";switch (this.day()) {case 0:
              return "[В прошлое] dddd [в] LT";case 1:case 2:case 4:
              return "[В прошлый] dddd [в] LT";case 3:case 5:case 6:
              return "[В прошлую] dddd [в] LT";}
        }, sameElse: "L" }, relativeTime: { future: "через %s", past: "%s назад", s: "несколько секунд", m: n, mm: n, h: "час", hh: n, d: "день", dd: n, M: "месяц", MM: n, y: "год", yy: n }, meridiemParse: /ночи|утра|дня|вечера/i, isPM: function isPM(e) {
        return (/^(дня|вечера)$/.test(e)
        );
      }, meridiem: function meridiem(e, t, n) {
        return e < 4 ? "ночи" : e < 12 ? "утра" : e < 17 ? "дня" : "вечера";
      }, dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/, ordinal: function ordinal(e, t) {
        switch (t) {case "M":case "d":case "DDD":
            return e + "-й";case "D":
            return e + "-го";case "w":case "W":
            return e + "-я";default:
            return e;}
      }, week: { dow: 1, doy: 7 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    var t = ["جنوري", "فيبروري", "مارچ", "اپريل", "مئي", "جون", "جولاءِ", "آگسٽ", "سيپٽمبر", "آڪٽوبر", "نومبر", "ڊسمبر"],
        n = ["آچر", "سومر", "اڱارو", "اربع", "خميس", "جمع", "ڇنڇر"];return e.defineLocale("sd", { months: t, monthsShort: t, weekdays: n, weekdaysShort: n, weekdaysMin: n, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd، D MMMM YYYY HH:mm" }, meridiemParse: /صبح|شام/, isPM: function isPM(e) {
        return "شام" === e;
      }, meridiem: function meridiem(e, t, n) {
        return e < 12 ? "صبح" : "شام";
      }, calendar: { sameDay: "[اڄ] LT", nextDay: "[سڀاڻي] LT", nextWeek: "dddd [اڳين هفتي تي] LT", lastDay: "[ڪالهه] LT", lastWeek: "[گزريل هفتي] dddd [تي] LT", sameElse: "L" }, relativeTime: { future: "%s پوء", past: "%s اڳ", s: "چند سيڪنڊ", m: "هڪ منٽ", mm: "%d منٽ", h: "هڪ ڪلاڪ", hh: "%d ڪلاڪ", d: "هڪ ڏينهن", dd: "%d ڏينهن", M: "هڪ مهينو", MM: "%d مهينا", y: "هڪ سال", yy: "%d سال" }, preparse: function preparse(e) {
        return e.replace(/،/g, ",");
      }, postformat: function postformat(e) {
        return e.replace(/,/g, "،");
      }, week: { dow: 1, doy: 4 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    return e.defineLocale("se", { months: "ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu".split("_"), monthsShort: "ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov".split("_"), weekdays: "sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat".split("_"), weekdaysShort: "sotn_vuos_maŋ_gask_duor_bear_láv".split("_"), weekdaysMin: "s_v_m_g_d_b_L".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "MMMM D. [b.] YYYY", LLL: "MMMM D. [b.] YYYY [ti.] HH:mm", LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm" }, calendar: { sameDay: "[otne ti] LT", nextDay: "[ihttin ti] LT", nextWeek: "dddd [ti] LT", lastDay: "[ikte ti] LT", lastWeek: "[ovddit] dddd [ti] LT", sameElse: "L" }, relativeTime: { future: "%s geažes", past: "maŋit %s", s: "moadde sekunddat", m: "okta minuhta", mm: "%d minuhtat", h: "okta diimmu", hh: "%d diimmut", d: "okta beaivi", dd: "%d beaivvit", M: "okta mánnu", MM: "%d mánut", y: "okta jahki", yy: "%d jagit" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    return e.defineLocale("si", { months: "ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්".split("_"), monthsShort: "ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ".split("_"), weekdays: "ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා".split("_"), weekdaysShort: "ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන".split("_"), weekdaysMin: "ඉ_ස_අ_බ_බ්‍ර_සි_සෙ".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "a h:mm", LTS: "a h:mm:ss", L: "YYYY/MM/DD", LL: "YYYY MMMM D", LLL: "YYYY MMMM D, a h:mm", LLLL: "YYYY MMMM D [වැනි] dddd, a h:mm:ss" }, calendar: { sameDay: "[අද] LT[ට]", nextDay: "[හෙට] LT[ට]", nextWeek: "dddd LT[ට]", lastDay: "[ඊයේ] LT[ට]", lastWeek: "[පසුගිය] dddd LT[ට]", sameElse: "L" }, relativeTime: { future: "%sකින්", past: "%sකට පෙර", s: "තත්පර කිහිපය", m: "මිනිත්තුව", mm: "මිනිත්තු %d", h: "පැය", hh: "පැය %d", d: "දිනය", dd: "දින %d", M: "මාසය", MM: "මාස %d", y: "වසර", yy: "වසර %d" }, dayOfMonthOrdinalParse: /\d{1,2} වැනි/, ordinal: function ordinal(e) {
        return e + " වැනි";
      }, meridiemParse: /පෙර වරු|පස් වරු|පෙ.ව|ප.ව./, isPM: function isPM(e) {
        return "ප.ව." === e || "පස් වරු" === e;
      }, meridiem: function meridiem(e, t, n) {
        return e > 11 ? n ? "ප.ව." : "පස් වරු" : n ? "පෙ.ව." : "පෙර වරු";
      } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    function t(e) {
      return e > 1 && e < 5;
    }function n(e, n, a, r) {
      var i = e + " ";switch (a) {case "s":
          return n || r ? "pár sekúnd" : "pár sekundami";case "m":
          return n ? "minúta" : r ? "minútu" : "minútou";case "mm":
          return n || r ? i + (t(e) ? "minúty" : "minút") : i + "minútami";case "h":
          return n ? "hodina" : r ? "hodinu" : "hodinou";case "hh":
          return n || r ? i + (t(e) ? "hodiny" : "hodín") : i + "hodinami";case "d":
          return n || r ? "deň" : "dňom";case "dd":
          return n || r ? i + (t(e) ? "dni" : "dní") : i + "dňami";case "M":
          return n || r ? "mesiac" : "mesiacom";case "MM":
          return n || r ? i + (t(e) ? "mesiace" : "mesiacov") : i + "mesiacmi";case "y":
          return n || r ? "rok" : "rokom";case "yy":
          return n || r ? i + (t(e) ? "roky" : "rokov") : i + "rokmi";}
    }var a = "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"),
        r = "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");return e.defineLocale("sk", { months: a, monthsShort: r, weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"), weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"), weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd D. MMMM YYYY H:mm" }, calendar: { sameDay: "[dnes o] LT", nextDay: "[zajtra o] LT", nextWeek: function nextWeek() {
          switch (this.day()) {case 0:
              return "[v nedeľu o] LT";case 1:case 2:
              return "[v] dddd [o] LT";case 3:
              return "[v stredu o] LT";case 4:
              return "[vo štvrtok o] LT";case 5:
              return "[v piatok o] LT";case 6:
              return "[v sobotu o] LT";}
        }, lastDay: "[včera o] LT", lastWeek: function lastWeek() {
          switch (this.day()) {case 0:
              return "[minulú nedeľu o] LT";case 1:case 2:
              return "[minulý] dddd [o] LT";case 3:
              return "[minulú stredu o] LT";case 4:case 5:
              return "[minulý] dddd [o] LT";case 6:
              return "[minulú sobotu o] LT";}
        }, sameElse: "L" }, relativeTime: { future: "za %s", past: "pred %s", s: n, m: n, mm: n, h: n, hh: n, d: n, dd: n, M: n, MM: n, y: n, yy: n }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    function t(e, t, n, a) {
      var r = e + " ";switch (n) {case "s":
          return t || a ? "nekaj sekund" : "nekaj sekundami";case "m":
          return t ? "ena minuta" : "eno minuto";case "mm":
          return r += 1 === e ? t ? "minuta" : "minuto" : 2 === e ? t || a ? "minuti" : "minutama" : e < 5 ? t || a ? "minute" : "minutami" : t || a ? "minut" : "minutami";case "h":
          return t ? "ena ura" : "eno uro";case "hh":
          return r += 1 === e ? t ? "ura" : "uro" : 2 === e ? t || a ? "uri" : "urama" : e < 5 ? t || a ? "ure" : "urami" : t || a ? "ur" : "urami";case "d":
          return t || a ? "en dan" : "enim dnem";case "dd":
          return r += 1 === e ? t || a ? "dan" : "dnem" : 2 === e ? t || a ? "dni" : "dnevoma" : t || a ? "dni" : "dnevi";case "M":
          return t || a ? "en mesec" : "enim mesecem";case "MM":
          return r += 1 === e ? t || a ? "mesec" : "mesecem" : 2 === e ? t || a ? "meseca" : "mesecema" : e < 5 ? t || a ? "mesece" : "meseci" : t || a ? "mesecev" : "meseci";case "y":
          return t || a ? "eno leto" : "enim letom";case "yy":
          return r += 1 === e ? t || a ? "leto" : "letom" : 2 === e ? t || a ? "leti" : "letoma" : e < 5 ? t || a ? "leta" : "leti" : t || a ? "let" : "leti";}
    }return e.defineLocale("sl", { months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"), monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"), monthsParseExact: !0, weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"), weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"), weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" }, calendar: { sameDay: "[danes ob] LT", nextDay: "[jutri ob] LT", nextWeek: function nextWeek() {
          switch (this.day()) {case 0:
              return "[v] [nedeljo] [ob] LT";case 3:
              return "[v] [sredo] [ob] LT";case 6:
              return "[v] [soboto] [ob] LT";case 1:case 2:case 4:case 5:
              return "[v] dddd [ob] LT";}
        }, lastDay: "[včeraj ob] LT", lastWeek: function lastWeek() {
          switch (this.day()) {case 0:
              return "[prejšnjo] [nedeljo] [ob] LT";case 3:
              return "[prejšnjo] [sredo] [ob] LT";case 6:
              return "[prejšnjo] [soboto] [ob] LT";case 1:case 2:case 4:case 5:
              return "[prejšnji] dddd [ob] LT";}
        }, sameElse: "L" }, relativeTime: { future: "čez %s", past: "pred %s", s: t, m: t, mm: t, h: t, hh: t, d: t, dd: t, M: t, MM: t, y: t, yy: t }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 7 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    return e.defineLocale("sq", { months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"), monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"), weekdays: "E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"), weekdaysShort: "Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"), weekdaysMin: "D_H_Ma_Më_E_P_Sh".split("_"), weekdaysParseExact: !0, meridiemParse: /PD|MD/, isPM: function isPM(e) {
        return "M" === e.charAt(0);
      }, meridiem: function meridiem(e, t, n) {
        return e < 12 ? "PD" : "MD";
      }, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Sot në] LT", nextDay: "[Nesër në] LT", nextWeek: "dddd [në] LT", lastDay: "[Dje në] LT", lastWeek: "dddd [e kaluar në] LT", sameElse: "L" }, relativeTime: { future: "në %s", past: "%s më parë", s: "disa sekonda", m: "një minutë", mm: "%d minuta", h: "një orë", hh: "%d orë", d: "një ditë", dd: "%d ditë", M: "një muaj", MM: "%d muaj", y: "një vit", yy: "%d vite" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    var t = { words: { m: ["jedan minut", "jedne minute"], mm: ["minut", "minute", "minuta"], h: ["jedan sat", "jednog sata"], hh: ["sat", "sata", "sati"], dd: ["dan", "dana", "dana"], MM: ["mesec", "meseca", "meseci"], yy: ["godina", "godine", "godina"] }, correctGrammaticalCase: function correctGrammaticalCase(e, t) {
        return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2];
      }, translate: function translate(e, n, a) {
        var r = t.words[a];return 1 === a.length ? n ? r[0] : r[1] : e + " " + t.correctGrammaticalCase(e, r);
      } };return e.defineLocale("sr", { months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"), monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"), monthsParseExact: !0, weekdays: "nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota".split("_"), weekdaysShort: "ned._pon._uto._sre._čet._pet._sub.".split("_"), weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" }, calendar: { sameDay: "[danas u] LT", nextDay: "[sutra u] LT", nextWeek: function nextWeek() {
          switch (this.day()) {case 0:
              return "[u] [nedelju] [u] LT";case 3:
              return "[u] [sredu] [u] LT";case 6:
              return "[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:
              return "[u] dddd [u] LT";}
        }, lastDay: "[juče u] LT", lastWeek: function lastWeek() {
          return ["[prošle] [nedelje] [u] LT", "[prošlog] [ponedeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"][this.day()];
        }, sameElse: "L" }, relativeTime: { future: "za %s", past: "pre %s", s: "nekoliko sekundi", m: t.translate, mm: t.translate, h: t.translate, hh: t.translate, d: "dan", dd: t.translate, M: "mesec", MM: t.translate, y: "godinu", yy: t.translate }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 7 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    var t = { words: { m: ["један минут", "једне минуте"], mm: ["минут", "минуте", "минута"], h: ["један сат", "једног сата"], hh: ["сат", "сата", "сати"], dd: ["дан", "дана", "дана"], MM: ["месец", "месеца", "месеци"], yy: ["година", "године", "година"] }, correctGrammaticalCase: function correctGrammaticalCase(e, t) {
        return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2];
      }, translate: function translate(e, n, a) {
        var r = t.words[a];return 1 === a.length ? n ? r[0] : r[1] : e + " " + t.correctGrammaticalCase(e, r);
      } };return e.defineLocale("sr-cyrl", { months: "јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар".split("_"), monthsShort: "јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.".split("_"), monthsParseExact: !0, weekdays: "недеља_понедељак_уторак_среда_четвртак_петак_субота".split("_"), weekdaysShort: "нед._пон._уто._сре._чет._пет._суб.".split("_"), weekdaysMin: "не_по_ут_ср_че_пе_су".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" }, calendar: { sameDay: "[данас у] LT", nextDay: "[сутра у] LT", nextWeek: function nextWeek() {
          switch (this.day()) {case 0:
              return "[у] [недељу] [у] LT";case 3:
              return "[у] [среду] [у] LT";case 6:
              return "[у] [суботу] [у] LT";case 1:case 2:case 4:case 5:
              return "[у] dddd [у] LT";}
        }, lastDay: "[јуче у] LT", lastWeek: function lastWeek() {
          return ["[прошле] [недеље] [у] LT", "[прошлог] [понедељка] [у] LT", "[прошлог] [уторка] [у] LT", "[прошле] [среде] [у] LT", "[прошлог] [четвртка] [у] LT", "[прошлог] [петка] [у] LT", "[прошле] [суботе] [у] LT"][this.day()];
        }, sameElse: "L" }, relativeTime: { future: "за %s", past: "пре %s", s: "неколико секунди", m: t.translate, mm: t.translate, h: t.translate, hh: t.translate, d: "дан", dd: t.translate, M: "месец", MM: t.translate, y: "годину", yy: t.translate }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 7 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    return e.defineLocale("ss", { months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"), monthsShort: "Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"), weekdays: "Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"), weekdaysShort: "Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"), weekdaysMin: "Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, calendar: { sameDay: "[Namuhla nga] LT", nextDay: "[Kusasa nga] LT", nextWeek: "dddd [nga] LT", lastDay: "[Itolo nga] LT", lastWeek: "dddd [leliphelile] [nga] LT", sameElse: "L" }, relativeTime: { future: "nga %s", past: "wenteka nga %s", s: "emizuzwana lomcane", m: "umzuzu", mm: "%d emizuzu", h: "lihora", hh: "%d emahora", d: "lilanga", dd: "%d emalanga", M: "inyanga", MM: "%d tinyanga", y: "umnyaka", yy: "%d iminyaka" }, meridiemParse: /ekuseni|emini|entsambama|ebusuku/, meridiem: function meridiem(e, t, n) {
        return e < 11 ? "ekuseni" : e < 15 ? "emini" : e < 19 ? "entsambama" : "ebusuku";
      }, meridiemHour: function meridiemHour(e, t) {
        return 12 === e && (e = 0), "ekuseni" === t ? e : "emini" === t ? e >= 11 ? e : e + 12 : "entsambama" === t || "ebusuku" === t ? 0 === e ? 0 : e + 12 : void 0;
      }, dayOfMonthOrdinalParse: /\d{1,2}/, ordinal: "%d", week: { dow: 1, doy: 4 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    return e.defineLocale("sv", { months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"), monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"), weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"), weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"), weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [kl.] HH:mm", LLLL: "dddd D MMMM YYYY [kl.] HH:mm", lll: "D MMM YYYY HH:mm", llll: "ddd D MMM YYYY HH:mm" }, calendar: { sameDay: "[Idag] LT", nextDay: "[Imorgon] LT", lastDay: "[Igår] LT", nextWeek: "[På] dddd LT", lastWeek: "[I] dddd[s] LT", sameElse: "L" }, relativeTime: { future: "om %s", past: "för %s sedan", s: "några sekunder", m: "en minut", mm: "%d minuter", h: "en timme", hh: "%d timmar", d: "en dag", dd: "%d dagar", M: "en månad", MM: "%d månader", y: "ett år", yy: "%d år" }, dayOfMonthOrdinalParse: /\d{1,2}(e|a)/, ordinal: function ordinal(e) {
        var t = e % 10;return e + (1 == ~~(e % 100 / 10) ? "e" : 1 === t ? "a" : 2 === t ? "a" : "e");
      }, week: { dow: 1, doy: 4 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    return e.defineLocale("sw", { months: "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"), monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"), weekdays: "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"), weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"), weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[leo saa] LT", nextDay: "[kesho saa] LT", nextWeek: "[wiki ijayo] dddd [saat] LT", lastDay: "[jana] LT", lastWeek: "[wiki iliyopita] dddd [saat] LT", sameElse: "L" }, relativeTime: { future: "%s baadaye", past: "tokea %s", s: "hivi punde", m: "dakika moja", mm: "dakika %d", h: "saa limoja", hh: "masaa %d", d: "siku moja", dd: "masiku %d", M: "mwezi mmoja", MM: "miezi %d", y: "mwaka mmoja", yy: "miaka %d" }, week: { dow: 1, doy: 7 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    var t = { 1: "௧", 2: "௨", 3: "௩", 4: "௪", 5: "௫", 6: "௬", 7: "௭", 8: "௮", 9: "௯", 0: "௦" },
        n = { "௧": "1", "௨": "2", "௩": "3", "௪": "4", "௫": "5", "௬": "6", "௭": "7", "௮": "8", "௯": "9", "௦": "0" };return e.defineLocale("ta", { months: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"), monthsShort: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"), weekdays: "ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"), weekdaysShort: "ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"), weekdaysMin: "ஞா_தி_செ_பு_வி_வெ_ச".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, HH:mm", LLLL: "dddd, D MMMM YYYY, HH:mm" }, calendar: { sameDay: "[இன்று] LT", nextDay: "[நாளை] LT", nextWeek: "dddd, LT", lastDay: "[நேற்று] LT", lastWeek: "[கடந்த வாரம்] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s இல்", past: "%s முன்", s: "ஒரு சில விநாடிகள்", m: "ஒரு நிமிடம்", mm: "%d நிமிடங்கள்", h: "ஒரு மணி நேரம்", hh: "%d மணி நேரம்", d: "ஒரு நாள்", dd: "%d நாட்கள்", M: "ஒரு மாதம்", MM: "%d மாதங்கள்", y: "ஒரு வருடம்", yy: "%d ஆண்டுகள்" }, dayOfMonthOrdinalParse: /\d{1,2}வது/, ordinal: function ordinal(e) {
        return e + "வது";
      }, preparse: function preparse(e) {
        return e.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, function (e) {
          return n[e];
        });
      }, postformat: function postformat(e) {
        return e.replace(/\d/g, function (e) {
          return t[e];
        });
      }, meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/, meridiem: function meridiem(e, t, n) {
        return e < 2 ? " யாமம்" : e < 6 ? " வைகறை" : e < 10 ? " காலை" : e < 14 ? " நண்பகல்" : e < 18 ? " எற்பாடு" : e < 22 ? " மாலை" : " யாமம்";
      }, meridiemHour: function meridiemHour(e, t) {
        return 12 === e && (e = 0), "யாமம்" === t ? e < 2 ? e : e + 12 : "வைகறை" === t || "காலை" === t ? e : "நண்பகல்" === t && e >= 10 ? e : e + 12;
      }, week: { dow: 0, doy: 6 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    return e.defineLocale("te", { months: "జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జూలై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్".split("_"), monthsShort: "జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జూలై_ఆగ._సెప్._అక్టో._నవ._డిసె.".split("_"), monthsParseExact: !0, weekdays: "ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం".split("_"), weekdaysShort: "ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని".split("_"), weekdaysMin: "ఆ_సో_మం_బు_గు_శు_శ".split("_"), longDateFormat: { LT: "A h:mm", LTS: "A h:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm", LLLL: "dddd, D MMMM YYYY, A h:mm" }, calendar: { sameDay: "[నేడు] LT", nextDay: "[రేపు] LT", nextWeek: "dddd, LT", lastDay: "[నిన్న] LT", lastWeek: "[గత] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s లో", past: "%s క్రితం", s: "కొన్ని క్షణాలు", m: "ఒక నిమిషం", mm: "%d నిమిషాలు", h: "ఒక గంట", hh: "%d గంటలు", d: "ఒక రోజు", dd: "%d రోజులు", M: "ఒక నెల", MM: "%d నెలలు", y: "ఒక సంవత్సరం", yy: "%d సంవత్సరాలు" }, dayOfMonthOrdinalParse: /\d{1,2}వ/, ordinal: "%dవ", meridiemParse: /రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/, meridiemHour: function meridiemHour(e, t) {
        return 12 === e && (e = 0), "రాత్రి" === t ? e < 4 ? e : e + 12 : "ఉదయం" === t ? e : "మధ్యాహ్నం" === t ? e >= 10 ? e : e + 12 : "సాయంత్రం" === t ? e + 12 : void 0;
      }, meridiem: function meridiem(e, t, n) {
        return e < 4 ? "రాత్రి" : e < 10 ? "ఉదయం" : e < 17 ? "మధ్యాహ్నం" : e < 20 ? "సాయంత్రం" : "రాత్రి";
      }, week: { dow: 0, doy: 6 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    return e.defineLocale("tet", { months: "Janeiru_Fevereiru_Marsu_Abril_Maiu_Juniu_Juliu_Augustu_Setembru_Outubru_Novembru_Dezembru".split("_"), monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Aug_Set_Out_Nov_Dez".split("_"), weekdays: "Domingu_Segunda_Tersa_Kuarta_Kinta_Sexta_Sabadu".split("_"), weekdaysShort: "Dom_Seg_Ters_Kua_Kint_Sext_Sab".split("_"), weekdaysMin: "Do_Seg_Te_Ku_Ki_Sex_Sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Ohin iha] LT", nextDay: "[Aban iha] LT", nextWeek: "dddd [iha] LT", lastDay: "[Horiseik iha] LT", lastWeek: "dddd [semana kotuk] [iha] LT", sameElse: "L" }, relativeTime: { future: "iha %s", past: "%s liuba", s: "minutu balun", m: "minutu ida", mm: "minutus %d", h: "horas ida", hh: "horas %d", d: "loron ida", dd: "loron %d", M: "fulan ida", MM: "fulan %d", y: "tinan ida", yy: "tinan %d" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function ordinal(e) {
        var t = e % 10;return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th");
      }, week: { dow: 1, doy: 4 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    return e.defineLocale("th", { months: "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"), monthsShort: "ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split("_"), monthsParseExact: !0, weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"), weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"), weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY เวลา H:mm", LLLL: "วันddddที่ D MMMM YYYY เวลา H:mm" }, meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/, isPM: function isPM(e) {
        return "หลังเที่ยง" === e;
      }, meridiem: function meridiem(e, t, n) {
        return e < 12 ? "ก่อนเที่ยง" : "หลังเที่ยง";
      }, calendar: { sameDay: "[วันนี้ เวลา] LT", nextDay: "[พรุ่งนี้ เวลา] LT", nextWeek: "dddd[หน้า เวลา] LT", lastDay: "[เมื่อวานนี้ เวลา] LT", lastWeek: "[วัน]dddd[ที่แล้ว เวลา] LT", sameElse: "L" }, relativeTime: { future: "อีก %s", past: "%sที่แล้ว", s: "ไม่กี่วินาที", m: "1 นาที", mm: "%d นาที", h: "1 ชั่วโมง", hh: "%d ชั่วโมง", d: "1 วัน", dd: "%d วัน", M: "1 เดือน", MM: "%d เดือน", y: "1 ปี", yy: "%d ปี" } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    return e.defineLocale("tl-ph", { months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"), monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"), weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"), weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"), weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "MM/D/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY HH:mm", LLLL: "dddd, MMMM DD, YYYY HH:mm" }, calendar: { sameDay: "LT [ngayong araw]", nextDay: "[Bukas ng] LT", nextWeek: "LT [sa susunod na] dddd", lastDay: "LT [kahapon]", lastWeek: "LT [noong nakaraang] dddd", sameElse: "L" }, relativeTime: { future: "sa loob ng %s", past: "%s ang nakalipas", s: "ilang segundo", m: "isang minuto", mm: "%d minuto", h: "isang oras", hh: "%d oras", d: "isang araw", dd: "%d araw", M: "isang buwan", MM: "%d buwan", y: "isang taon", yy: "%d taon" }, dayOfMonthOrdinalParse: /\d{1,2}/, ordinal: function ordinal(e) {
        return e;
      }, week: { dow: 1, doy: 4 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    function t(e) {
      var t = e;return t = -1 !== e.indexOf("jaj") ? t.slice(0, -3) + "leS" : -1 !== e.indexOf("jar") ? t.slice(0, -3) + "waQ" : -1 !== e.indexOf("DIS") ? t.slice(0, -3) + "nem" : t + " pIq";
    }function n(e) {
      var t = e;return t = -1 !== e.indexOf("jaj") ? t.slice(0, -3) + "Hu’" : -1 !== e.indexOf("jar") ? t.slice(0, -3) + "wen" : -1 !== e.indexOf("DIS") ? t.slice(0, -3) + "ben" : t + " ret";
    }function a(e, t, n, a) {
      var i = r(e);switch (n) {case "mm":
          return i + " tup";case "hh":
          return i + " rep";case "dd":
          return i + " jaj";case "MM":
          return i + " jar";case "yy":
          return i + " DIS";}
    }function r(e) {
      var t = Math.floor(e % 1e3 / 100),
          n = Math.floor(e % 100 / 10),
          a = e % 10,
          r = "";return t > 0 && (r += i[t] + "vatlh"), n > 0 && (r += ("" !== r ? " " : "") + i[n] + "maH"), a > 0 && (r += ("" !== r ? " " : "") + i[a]), "" === r ? "pagh" : r;
    }var i = "pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_");return e.defineLocale("tlh", { months: "tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split("_"), monthsShort: "jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split("_"), monthsParseExact: !0, weekdays: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"), weekdaysShort: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"), weekdaysMin: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[DaHjaj] LT", nextDay: "[wa’leS] LT", nextWeek: "LLL", lastDay: "[wa’Hu’] LT", lastWeek: "LLL", sameElse: "L" }, relativeTime: { future: t, past: n, s: "puS lup", m: "wa’ tup", mm: a, h: "wa’ rep", hh: a, d: "wa’ jaj", dd: a, M: "wa’ jar", MM: a, y: "wa’ DIS", yy: a }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    var t = { 1: "'inci", 5: "'inci", 8: "'inci", 70: "'inci", 80: "'inci", 2: "'nci", 7: "'nci", 20: "'nci", 50: "'nci", 3: "'üncü", 4: "'üncü", 100: "'üncü", 6: "'ncı", 9: "'uncu", 10: "'uncu", 30: "'uncu", 60: "'ıncı", 90: "'ıncı" };return e.defineLocale("tr", { months: "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"), monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"), weekdays: "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"), weekdaysShort: "Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"), weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[bugün saat] LT", nextDay: "[yarın saat] LT", nextWeek: "[haftaya] dddd [saat] LT", lastDay: "[dün] LT", lastWeek: "[geçen hafta] dddd [saat] LT", sameElse: "L" }, relativeTime: { future: "%s sonra", past: "%s önce", s: "birkaç saniye", m: "bir dakika", mm: "%d dakika", h: "bir saat", hh: "%d saat", d: "bir gün", dd: "%d gün", M: "bir ay", MM: "%d ay", y: "bir yıl", yy: "%d yıl" }, dayOfMonthOrdinalParse: /\d{1,2}'(inci|nci|üncü|ncı|uncu|ıncı)/, ordinal: function ordinal(e) {
        if (0 === e) return e + "'ıncı";var n = e % 10,
            a = e % 100 - n,
            r = e >= 100 ? 100 : null;return e + (t[n] || t[a] || t[r]);
      }, week: { dow: 1, doy: 7 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    function t(e, t, n, a) {
      var r = { s: ["viensas secunds", "'iensas secunds"], m: ["'n míut", "'iens míut"], mm: [e + " míuts", e + " míuts"], h: ["'n þora", "'iensa þora"], hh: [e + " þoras", e + " þoras"], d: ["'n ziua", "'iensa ziua"], dd: [e + " ziuas", e + " ziuas"], M: ["'n mes", "'iens mes"], MM: [e + " mesen", e + " mesen"], y: ["'n ar", "'iens ar"], yy: [e + " ars", e + " ars"] };return a ? r[n][0] : t ? r[n][0] : r[n][1];
    }return e.defineLocale("tzl", { months: "Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar".split("_"), monthsShort: "Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec".split("_"), weekdays: "Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi".split("_"), weekdaysShort: "Súl_Lún_Mai_Már_Xhú_Vié_Sát".split("_"), weekdaysMin: "Sú_Lú_Ma_Má_Xh_Vi_Sá".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD.MM.YYYY", LL: "D. MMMM [dallas] YYYY", LLL: "D. MMMM [dallas] YYYY HH.mm", LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm" }, meridiemParse: /d\'o|d\'a/i, isPM: function isPM(e) {
        return "d'o" === e.toLowerCase();
      }, meridiem: function meridiem(e, t, n) {
        return e > 11 ? n ? "d'o" : "D'O" : n ? "d'a" : "D'A";
      }, calendar: { sameDay: "[oxhi à] LT", nextDay: "[demà à] LT", nextWeek: "dddd [à] LT", lastDay: "[ieiri à] LT", lastWeek: "[sür el] dddd [lasteu à] LT", sameElse: "L" }, relativeTime: { future: "osprei %s", past: "ja%s", s: t, m: t, mm: t, h: t, hh: t, d: t, dd: t, M: t, MM: t, y: t, yy: t }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    return e.defineLocale("tzm", { months: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"), monthsShort: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"), weekdays: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"), weekdaysShort: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"), weekdaysMin: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[ⴰⵙⴷⵅ ⴴ] LT", nextDay: "[ⴰⵙⴽⴰ ⴴ] LT", nextWeek: "dddd [ⴴ] LT", lastDay: "[ⴰⵚⴰⵏⵜ ⴴ] LT", lastWeek: "dddd [ⴴ] LT", sameElse: "L" }, relativeTime: { future: "ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s", past: "ⵢⴰⵏ %s", s: "ⵉⵎⵉⴽ", m: "ⵎⵉⵏⵓⴺ", mm: "%d ⵎⵉⵏⵓⴺ", h: "ⵙⴰⵄⴰ", hh: "%d ⵜⴰⵙⵙⴰⵄⵉⵏ", d: "ⴰⵙⵙ", dd: "%d oⵙⵙⴰⵏ", M: "ⴰⵢoⵓⵔ", MM: "%d ⵉⵢⵢⵉⵔⵏ", y: "ⴰⵙⴳⴰⵙ", yy: "%d ⵉⵙⴳⴰⵙⵏ" }, week: { dow: 6, doy: 12 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    return e.defineLocale("tzm-latn", { months: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"), monthsShort: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"), weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"), weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"), weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[asdkh g] LT", nextDay: "[aska g] LT", nextWeek: "dddd [g] LT", lastDay: "[assant g] LT", lastWeek: "dddd [g] LT", sameElse: "L" }, relativeTime: { future: "dadkh s yan %s", past: "yan %s", s: "imik", m: "minuḍ", mm: "%d minuḍ", h: "saɛa", hh: "%d tassaɛin", d: "ass", dd: "%d ossan", M: "ayowr", MM: "%d iyyirn", y: "asgas", yy: "%d isgasn" }, week: { dow: 6, doy: 12 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    function t(e, t) {
      var n = e.split("_");return t % 10 == 1 && t % 100 != 11 ? n[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? n[1] : n[2];
    }function n(e, n, a) {
      var r = { mm: n ? "хвилина_хвилини_хвилин" : "хвилину_хвилини_хвилин", hh: n ? "година_години_годин" : "годину_години_годин", dd: "день_дні_днів", MM: "місяць_місяці_місяців", yy: "рік_роки_років" };return "m" === a ? n ? "хвилина" : "хвилину" : "h" === a ? n ? "година" : "годину" : e + " " + t(r[a], +e);
    }function a(e, t) {
      var n = { nominative: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"), accusative: "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"), genitive: "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_") };return e ? n[/(\[[ВвУу]\]) ?dddd/.test(t) ? "accusative" : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(t) ? "genitive" : "nominative"][e.day()] : n.nominative;
    }function r(e) {
      return function () {
        return e + "о" + (11 === this.hours() ? "б" : "") + "] LT";
      };
    }return e.defineLocale("uk", { months: { format: "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"), standalone: "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_") }, monthsShort: "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"), weekdays: a, weekdaysShort: "нд_пн_вт_ср_чт_пт_сб".split("_"), weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY р.", LLL: "D MMMM YYYY р., HH:mm", LLLL: "dddd, D MMMM YYYY р., HH:mm" }, calendar: { sameDay: r("[Сьогодні "), nextDay: r("[Завтра "), lastDay: r("[Вчора "), nextWeek: r("[У] dddd ["), lastWeek: function lastWeek() {
          switch (this.day()) {case 0:case 3:case 5:case 6:
              return r("[Минулої] dddd [").call(this);case 1:case 2:case 4:
              return r("[Минулого] dddd [").call(this);}
        }, sameElse: "L" }, relativeTime: { future: "за %s", past: "%s тому", s: "декілька секунд", m: n, mm: n, h: "годину", hh: n, d: "день", dd: n, M: "місяць", MM: n, y: "рік", yy: n }, meridiemParse: /ночі|ранку|дня|вечора/, isPM: function isPM(e) {
        return (/^(дня|вечора)$/.test(e)
        );
      }, meridiem: function meridiem(e, t, n) {
        return e < 4 ? "ночі" : e < 12 ? "ранку" : e < 17 ? "дня" : "вечора";
      }, dayOfMonthOrdinalParse: /\d{1,2}-(й|го)/, ordinal: function ordinal(e, t) {
        switch (t) {case "M":case "d":case "DDD":case "w":case "W":
            return e + "-й";case "D":
            return e + "-го";default:
            return e;}
      }, week: { dow: 1, doy: 7 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    var t = ["جنوری", "فروری", "مارچ", "اپریل", "مئی", "جون", "جولائی", "اگست", "ستمبر", "اکتوبر", "نومبر", "دسمبر"],
        n = ["اتوار", "پیر", "منگل", "بدھ", "جمعرات", "جمعہ", "ہفتہ"];return e.defineLocale("ur", { months: t, monthsShort: t, weekdays: n, weekdaysShort: n, weekdaysMin: n, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd، D MMMM YYYY HH:mm" }, meridiemParse: /صبح|شام/, isPM: function isPM(e) {
        return "شام" === e;
      }, meridiem: function meridiem(e, t, n) {
        return e < 12 ? "صبح" : "شام";
      }, calendar: { sameDay: "[آج بوقت] LT", nextDay: "[کل بوقت] LT", nextWeek: "dddd [بوقت] LT", lastDay: "[گذشتہ روز بوقت] LT", lastWeek: "[گذشتہ] dddd [بوقت] LT", sameElse: "L" }, relativeTime: { future: "%s بعد", past: "%s قبل", s: "چند سیکنڈ", m: "ایک منٹ", mm: "%d منٹ", h: "ایک گھنٹہ", hh: "%d گھنٹے", d: "ایک دن", dd: "%d دن", M: "ایک ماہ", MM: "%d ماہ", y: "ایک سال", yy: "%d سال" }, preparse: function preparse(e) {
        return e.replace(/،/g, ",");
      }, postformat: function postformat(e) {
        return e.replace(/,/g, "،");
      }, week: { dow: 1, doy: 4 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    return e.defineLocale("uz", { months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"), monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"), weekdays: "Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"), weekdaysShort: "Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"), weekdaysMin: "Як_Ду_Се_Чо_Па_Жу_Ша".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "D MMMM YYYY, dddd HH:mm" }, calendar: { sameDay: "[Бугун соат] LT [да]", nextDay: "[Эртага] LT [да]", nextWeek: "dddd [куни соат] LT [да]", lastDay: "[Кеча соат] LT [да]", lastWeek: "[Утган] dddd [куни соат] LT [да]", sameElse: "L" }, relativeTime: { future: "Якин %s ичида", past: "Бир неча %s олдин", s: "фурсат", m: "бир дакика", mm: "%d дакика", h: "бир соат", hh: "%d соат", d: "бир кун", dd: "%d кун", M: "бир ой", MM: "%d ой", y: "бир йил", yy: "%d йил" }, week: { dow: 1, doy: 7 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    return e.defineLocale("uz-latn", { months: "Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr".split("_"), monthsShort: "Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek".split("_"), weekdays: "Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba".split("_"), weekdaysShort: "Yak_Dush_Sesh_Chor_Pay_Jum_Shan".split("_"), weekdaysMin: "Ya_Du_Se_Cho_Pa_Ju_Sha".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "D MMMM YYYY, dddd HH:mm" }, calendar: { sameDay: "[Bugun soat] LT [da]", nextDay: "[Ertaga] LT [da]", nextWeek: "dddd [kuni soat] LT [da]", lastDay: "[Kecha soat] LT [da]", lastWeek: "[O'tgan] dddd [kuni soat] LT [da]", sameElse: "L" }, relativeTime: { future: "Yaqin %s ichida", past: "Bir necha %s oldin", s: "soniya", m: "bir daqiqa", mm: "%d daqiqa", h: "bir soat", hh: "%d soat", d: "bir kun", dd: "%d kun", M: "bir oy", MM: "%d oy", y: "bir yil", yy: "%d yil" }, week: { dow: 1, doy: 7 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    return e.defineLocale("vi", { months: "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"), monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"), monthsParseExact: !0, weekdays: "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"), weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"), weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"), weekdaysParseExact: !0, meridiemParse: /sa|ch/i, isPM: function isPM(e) {
        return (/^ch$/i.test(e)
        );
      }, meridiem: function meridiem(e, t, n) {
        return e < 12 ? n ? "sa" : "SA" : n ? "ch" : "CH";
      }, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM [năm] YYYY", LLL: "D MMMM [năm] YYYY HH:mm", LLLL: "dddd, D MMMM [năm] YYYY HH:mm", l: "DD/M/YYYY", ll: "D MMM YYYY", lll: "D MMM YYYY HH:mm", llll: "ddd, D MMM YYYY HH:mm" }, calendar: { sameDay: "[Hôm nay lúc] LT", nextDay: "[Ngày mai lúc] LT", nextWeek: "dddd [tuần tới lúc] LT", lastDay: "[Hôm qua lúc] LT", lastWeek: "dddd [tuần rồi lúc] LT", sameElse: "L" }, relativeTime: { future: "%s tới", past: "%s trước", s: "vài giây", m: "một phút", mm: "%d phút", h: "một giờ", hh: "%d giờ", d: "một ngày", dd: "%d ngày", M: "một tháng", MM: "%d tháng", y: "một năm", yy: "%d năm" }, dayOfMonthOrdinalParse: /\d{1,2}/, ordinal: function ordinal(e) {
        return e;
      }, week: { dow: 1, doy: 4 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    return e.defineLocale("x-pseudo", { months: "J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér".split("_"), monthsShort: "J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc".split("_"), monthsParseExact: !0, weekdays: "S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý".split("_"), weekdaysShort: "S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát".split("_"), weekdaysMin: "S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[T~ódá~ý át] LT", nextDay: "[T~ómó~rró~w át] LT", nextWeek: "dddd [át] LT", lastDay: "[Ý~ést~érdá~ý át] LT", lastWeek: "[L~ást] dddd [át] LT", sameElse: "L" }, relativeTime: { future: "í~ñ %s", past: "%s á~gó", s: "á ~féw ~sécó~ñds", m: "á ~míñ~úté", mm: "%d m~íñú~tés", h: "á~ñ hó~úr", hh: "%d h~óúrs", d: "á ~dáý", dd: "%d d~áýs", M: "á ~móñ~th", MM: "%d m~óñt~hs", y: "á ~ýéár", yy: "%d ý~éárs" }, dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/, ordinal: function ordinal(e) {
        var t = e % 10;return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th");
      }, week: { dow: 1, doy: 4 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    return e.defineLocale("yo", { months: "Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀".split("_"), monthsShort: "Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀".split("_"), weekdays: "Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta".split("_"), weekdaysShort: "Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá".split("_"), weekdaysMin: "Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb".split("_"), longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, calendar: { sameDay: "[Ònì ni] LT", nextDay: "[Ọ̀la ni] LT", nextWeek: "dddd [Ọsẹ̀ tón'bọ] [ni] LT", lastDay: "[Àna ni] LT", lastWeek: "dddd [Ọsẹ̀ tólọ́] [ni] LT", sameElse: "L" }, relativeTime: { future: "ní %s", past: "%s kọjá", s: "ìsẹjú aayá die", m: "ìsẹjú kan", mm: "ìsẹjú %d", h: "wákati kan", hh: "wákati %d", d: "ọjọ́ kan", dd: "ọjọ́ %d", M: "osù kan", MM: "osù %d", y: "ọdún kan", yy: "ọdún %d" }, dayOfMonthOrdinalParse: /ọjọ́\s\d{1,2}/, ordinal: "ọjọ́ %d", week: { dow: 1, doy: 4 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    return e.defineLocale("zh-cn", { months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"), monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"), weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"), weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"), weekdaysMin: "日_一_二_三_四_五_六".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY年MMMD日", LL: "YYYY年MMMD日", LLL: "YYYY年MMMD日Ah点mm分", LLLL: "YYYY年MMMD日ddddAh点mm分", l: "YYYY年MMMD日", ll: "YYYY年MMMD日", lll: "YYYY年MMMD日 HH:mm", llll: "YYYY年MMMD日dddd HH:mm" }, meridiemParse: /凌晨|早上|上午|中午|下午|晚上/, meridiemHour: function meridiemHour(e, t) {
        return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "下午" === t || "晚上" === t ? e + 12 : e >= 11 ? e : e + 12;
      }, meridiem: function meridiem(e, t, n) {
        var a = 100 * e + t;return a < 600 ? "凌晨" : a < 900 ? "早上" : a < 1130 ? "上午" : a < 1230 ? "中午" : a < 1800 ? "下午" : "晚上";
      }, calendar: { sameDay: "[今天]LT", nextDay: "[明天]LT", nextWeek: "[下]ddddLT", lastDay: "[昨天]LT", lastWeek: "[上]ddddLT", sameElse: "L" }, dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/, ordinal: function ordinal(e, t) {
        switch (t) {case "d":case "D":case "DDD":
            return e + "日";case "M":
            return e + "月";case "w":case "W":
            return e + "周";default:
            return e;}
      }, relativeTime: { future: "%s内", past: "%s前", s: "几秒", m: "1 分钟", mm: "%d 分钟", h: "1 小时", hh: "%d 小时", d: "1 天", dd: "%d 天", M: "1 个月", MM: "%d 个月", y: "1 年", yy: "%d 年" }, week: { dow: 1, doy: 4 } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    return e.defineLocale("zh-hk", { months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"), monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"), weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"), weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"), weekdaysMin: "日_一_二_三_四_五_六".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY年MMMD日", LL: "YYYY年MMMD日", LLL: "YYYY年MMMD日 HH:mm", LLLL: "YYYY年MMMD日dddd HH:mm", l: "YYYY年MMMD日", ll: "YYYY年MMMD日", lll: "YYYY年MMMD日 HH:mm", llll: "YYYY年MMMD日dddd HH:mm" }, meridiemParse: /凌晨|早上|上午|中午|下午|晚上/, meridiemHour: function meridiemHour(e, t) {
        return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "中午" === t ? e >= 11 ? e : e + 12 : "下午" === t || "晚上" === t ? e + 12 : void 0;
      }, meridiem: function meridiem(e, t, n) {
        var a = 100 * e + t;return a < 600 ? "凌晨" : a < 900 ? "早上" : a < 1130 ? "上午" : a < 1230 ? "中午" : a < 1800 ? "下午" : "晚上";
      }, calendar: { sameDay: "[今天]LT", nextDay: "[明天]LT", nextWeek: "[下]ddddLT", lastDay: "[昨天]LT", lastWeek: "[上]ddddLT", sameElse: "L" }, dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/, ordinal: function ordinal(e, t) {
        switch (t) {case "d":case "D":case "DDD":
            return e + "日";case "M":
            return e + "月";case "w":case "W":
            return e + "週";default:
            return e;}
      }, relativeTime: { future: "%s內", past: "%s前", s: "幾秒", m: "1 分鐘", mm: "%d 分鐘", h: "1 小時", hh: "%d 小時", d: "1 天", dd: "%d 天", M: "1 個月", MM: "%d 個月", y: "1 年", yy: "%d 年" } });
  });
}, function (e, t, n) {
  !function (e, t) {
    t(n(0));
  }(0, function (e) {
    "use strict";
    return e.defineLocale("zh-tw", { months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"), monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"), weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"), weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"), weekdaysMin: "日_一_二_三_四_五_六".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY年MMMD日", LL: "YYYY年MMMD日", LLL: "YYYY年MMMD日 HH:mm", LLLL: "YYYY年MMMD日dddd HH:mm", l: "YYYY年MMMD日", ll: "YYYY年MMMD日", lll: "YYYY年MMMD日 HH:mm", llll: "YYYY年MMMD日dddd HH:mm" }, meridiemParse: /凌晨|早上|上午|中午|下午|晚上/, meridiemHour: function meridiemHour(e, t) {
        return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "中午" === t ? e >= 11 ? e : e + 12 : "下午" === t || "晚上" === t ? e + 12 : void 0;
      }, meridiem: function meridiem(e, t, n) {
        var a = 100 * e + t;return a < 600 ? "凌晨" : a < 900 ? "早上" : a < 1130 ? "上午" : a < 1230 ? "中午" : a < 1800 ? "下午" : "晚上";
      }, calendar: { sameDay: "[今天]LT", nextDay: "[明天]LT", nextWeek: "[下]ddddLT", lastDay: "[昨天]LT", lastWeek: "[上]ddddLT", sameElse: "L" }, dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/, ordinal: function ordinal(e, t) {
        switch (t) {case "d":case "D":case "DDD":
            return e + "日";case "M":
            return e + "月";case "w":case "W":
            return e + "週";default:
            return e;}
      }, relativeTime: { future: "%s內", past: "%s前", s: "幾秒", m: "1 分鐘", mm: "%d 分鐘", h: "1 小時", hh: "%d 小時", d: "1 天", dd: "%d 天", M: "1 個月", MM: "%d 個月", y: "1 年", yy: "%d 年" } });
  });
}, function (e, t, n) {
  n(126), e.exports = n(173);
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });var a = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
    return typeof e === "undefined" ? "undefined" : _typeof(e);
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof(e);
  },
      r = { methods: { getItemName: function getItemName(e) {
        return e ? e.name : null;
      }, isImage: function isImage(e) {
        return -1 != e.mimeType.indexOf("image");
      }, isFolder: function isFolder(e) {
        return "folder" == e.mimeType;
      }, mediaManagerNotify: function mediaManagerNotify(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "inverse",
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4e3;if ("object" == (void 0 === e ? "undefined" : a(e))) return void e.forEach(function (e) {
          window.eventHub.$emit("media-manager-notification", e, t, n);
        });window.eventHub.$emit("media-manager-notification", e, t, n);
      } } };n(127), Vue.mixin(r), Vue.component("media-modal", n(152)), Vue.component("media-create-folder-modal", n(155)), Vue.component("media-delete-item-modal", n(158)), Vue.component("media-errors", n(161)), Vue.component("media-move-item-modal", n(164)), Vue.component("media-rename-item-modal", n(167)), Vue.component("media-manager", n(170)), Vue.filter("humanFileSize", function (e) {
    var t = Math.floor(Math.log(e) / Math.log(1024));return 1 * (e / Math.pow(1024, t)).toFixed(2) + " " + ["B", "kB", "MB", "GB", "TB"][t];
  }), Vue.filter("moment", function (e, t) {
    return e ? (t || (t = "DD/MM/YYYY LTS"), moment(e).utc().format(t)) : null;
  }), window.eventHub || (window.eventHub = new Vue());
}, function (e, t, n) {
  window.Vue = n(128), window.axios = n(130), window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";var a = document.head.querySelector('meta[name="csrf-token"]');a ? window.axios.defaults.headers.common["X-CSRF-TOKEN"] = a.content : Laravel && (window.axios.defaults.headers.common["X-CSRF-TOKEN"] = Laravel.csrfToken), window.moment = n(0), n(151).autoDiscover = !1;
}, function (e, t, n) {
  "use strict";
  (function (t) {
    function n(e) {
      return void 0 === e || null === e;
    }function a(e) {
      return void 0 !== e && null !== e;
    }function r(e) {
      return !0 === e;
    }function i(e) {
      return !1 === e;
    }function s(e) {
      return "string" == typeof e || "number" == typeof e || "boolean" == typeof e;
    }function o(e) {
      return null !== e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e));
    }function d(e) {
      return "[object Object]" === $r.call(e);
    }function u(e) {
      return "[object RegExp]" === $r.call(e);
    }function l(e) {
      var t = parseFloat(e);return t >= 0 && Math.floor(t) === t && isFinite(e);
    }function _(e) {
      return null == e ? "" : "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? JSON.stringify(e, null, 2) : String(e);
    }function c(e) {
      var t = parseFloat(e);return isNaN(t) ? e : t;
    }function m(e, t) {
      for (var n = Object.create(null), a = e.split(","), r = 0; r < a.length; r++) {
        n[a[r]] = !0;
      }return t ? function (e) {
        return n[e.toLowerCase()];
      } : function (e) {
        return n[e];
      };
    }function h(e, t) {
      if (e.length) {
        var n = e.indexOf(t);if (n > -1) return e.splice(n, 1);
      }
    }function f(e, t) {
      return Rr.call(e, t);
    }function p(e) {
      var t = Object.create(null);return function (n) {
        return t[n] || (t[n] = e(n));
      };
    }function M(e, t) {
      function n(n) {
        var a = arguments.length;return a ? a > 1 ? e.apply(t, arguments) : e.call(t, n) : e.call(t);
      }return n._length = e.length, n;
    }function y(e, t) {
      t = t || 0;for (var n = e.length - t, a = new Array(n); n--;) {
        a[n] = e[n + t];
      }return a;
    }function v(e, t) {
      for (var n in t) {
        e[n] = t[n];
      }return e;
    }function L(e) {
      for (var t = {}, n = 0; n < e.length; n++) {
        e[n] && v(t, e[n]);
      }return t;
    }function g(e, t, n) {}function Y(e, t) {
      if (e === t) return !0;var n = o(e),
          a = o(t);if (!n || !a) return !n && !a && String(e) === String(t);try {
        var r = Array.isArray(e),
            i = Array.isArray(t);if (r && i) return e.length === t.length && e.every(function (e, n) {
          return Y(e, t[n]);
        });if (r || i) return !1;var s = Object.keys(e),
            d = Object.keys(t);return s.length === d.length && s.every(function (n) {
          return Y(e[n], t[n]);
        });
      } catch (e) {
        return !1;
      }
    }function k(e, t) {
      for (var n = 0; n < e.length; n++) {
        if (Y(e[n], t)) return n;
      }return -1;
    }function w(e) {
      var t = !1;return function () {
        t || (t = !0, e.apply(this, arguments));
      };
    }function D(e) {
      var t = (e + "").charCodeAt(0);return 36 === t || 95 === t;
    }function T(e, t, n, a) {
      Object.defineProperty(e, t, { value: n, enumerable: !!a, writable: !0, configurable: !0 });
    }function b(e) {
      if (!ni.test(e)) {
        var t = e.split(".");return function (e) {
          for (var n = 0; n < t.length; n++) {
            if (!e) return;e = e[t[n]];
          }return e;
        };
      }
    }function S(e, t, n) {
      if (ei.errorHandler) ei.errorHandler.call(null, e, t, n);else if (!ii || "undefined" == typeof console) throw e;
    }function H(e) {
      return "function" == typeof e && /native code/.test(e.toString());
    }function x(e) {
      ki.target && wi.push(ki.target), ki.target = e;
    }function j() {
      ki.target = wi.pop();
    }function F(e, t, n) {
      e.__proto__ = t;
    }function C(e, t, n) {
      for (var a = 0, r = n.length; a < r; a++) {
        var i = n[a];T(e, i, t[i]);
      }
    }function O(e, t) {
      if (o(e)) {
        var n;return f(e, "__ob__") && e.__ob__ instanceof Hi ? n = e.__ob__ : Si.shouldConvert && !yi() && (Array.isArray(e) || d(e)) && Object.isExtensible(e) && !e._isVue && (n = new Hi(e)), t && n && n.vmCount++, n;
      }
    }function E(e, t, n, a, r) {
      var i = new ki(),
          s = Object.getOwnPropertyDescriptor(e, t);if (!s || !1 !== s.configurable) {
        var o = s && s.get,
            d = s && s.set,
            u = !r && O(n);Object.defineProperty(e, t, { enumerable: !0, configurable: !0, get: function get() {
            var t = o ? o.call(e) : n;return ki.target && (i.depend(), u && (u.dep.depend(), Array.isArray(t) && W(t))), t;
          }, set: function set(t) {
            var a = o ? o.call(e) : n;t === a || t !== t && a !== a || (d ? d.call(e, t) : n = t, u = !r && O(t), i.notify());
          } });
      }
    }function P(e, t, n) {
      if (Array.isArray(e) && l(t)) return e.length = Math.max(e.length, t), e.splice(t, 1, n), n;if (f(e, t)) return e[t] = n, n;var a = e.__ob__;return e._isVue || a && a.vmCount ? n : a ? (E(a.value, t, n), a.dep.notify(), n) : (e[t] = n, n);
    }function A(e, t) {
      if (Array.isArray(e) && l(t)) return void e.splice(t, 1);var n = e.__ob__;e._isVue || n && n.vmCount || f(e, t) && (delete e[t], n && n.dep.notify());
    }function W(e) {
      for (var t = void 0, n = 0, a = e.length; n < a; n++) {
        t = e[n], t && t.__ob__ && t.__ob__.dep.depend(), Array.isArray(t) && W(t);
      }
    }function z(e, t) {
      if (!t) return e;for (var n, a, r, i = Object.keys(t), s = 0; s < i.length; s++) {
        n = i[s], a = e[n], r = t[n], f(e, n) ? d(a) && d(r) && z(a, r) : P(e, n, r);
      }return e;
    }function $(e, t, n) {
      return n ? e || t ? function () {
        var a = "function" == typeof t ? t.call(n) : t,
            r = "function" == typeof e ? e.call(n) : e;return a ? z(a, r) : r;
      } : void 0 : t ? e ? function () {
        return z("function" == typeof t ? t.call(this) : t, "function" == typeof e ? e.call(this) : e);
      } : t : e;
    }function N(e, t) {
      return t ? e ? e.concat(t) : Array.isArray(t) ? t : [t] : e;
    }function I(e, t) {
      var n = Object.create(e || null);return t ? v(n, t) : n;
    }function R(e) {
      var t = e.props;if (t) {
        var n,
            a,
            r,
            i = {};if (Array.isArray(t)) for (n = t.length; n--;) {
          "string" == typeof (a = t[n]) && (r = Ur(a), i[r] = { type: null });
        } else if (d(t)) for (var s in t) {
          a = t[s], r = Ur(s), i[r] = d(a) ? a : { type: a };
        }e.props = i;
      }
    }function J(e) {
      var t = e.inject;if (Array.isArray(t)) for (var n = e.inject = {}, a = 0; a < t.length; a++) {
        n[t[a]] = t[a];
      }
    }function U(e) {
      var t = e.directives;if (t) for (var n in t) {
        var a = t[n];"function" == typeof a && (t[n] = { bind: a, update: a });
      }
    }function B(e, t, n) {
      function a(a) {
        var r = xi[a] || ji;d[a] = r(e[a], t[a], n, a);
      }"function" == typeof t && (t = t.options), R(t), J(t), U(t);var r = t.extends;if (r && (e = B(e, r, n)), t.mixins) for (var i = 0, s = t.mixins.length; i < s; i++) {
        e = B(e, t.mixins[i], n);
      }var o,
          d = {};for (o in e) {
        a(o);
      }for (o in t) {
        f(e, o) || a(o);
      }return d;
    }function G(e, t, n, a) {
      if ("string" == typeof n) {
        var r = e[t];if (f(r, n)) return r[n];var i = Ur(n);if (f(r, i)) return r[i];var s = Br(i);if (f(r, s)) return r[s];return r[n] || r[i] || r[s];
      }
    }function V(e, t, n, a) {
      var r = t[e],
          i = !f(n, e),
          s = n[e];if (Q(Boolean, r.type) && (i && !f(r, "default") ? s = !1 : Q(String, r.type) || "" !== s && s !== Vr(e) || (s = !0)), void 0 === s) {
        s = q(a, r, e);var o = Si.shouldConvert;Si.shouldConvert = !0, O(s), Si.shouldConvert = o;
      }return s;
    }function q(e, t, n) {
      if (f(t, "default")) {
        var a = t.default;return e && e.$options.propsData && void 0 === e.$options.propsData[n] && void 0 !== e._props[n] ? e._props[n] : "function" == typeof a && "Function" !== K(t.type) ? a.call(e) : a;
      }
    }function K(e) {
      var t = e && e.toString().match(/^\s*function (\w+)/);return t ? t[1] : "";
    }function Q(e, t) {
      if (!Array.isArray(t)) return K(t) === K(e);for (var n = 0, a = t.length; n < a; n++) {
        if (K(t[n]) === K(e)) return !0;
      }return !1;
    }function Z(e) {
      return new Fi(void 0, void 0, void 0, String(e));
    }function X(e, t) {
      var n = new Fi(e.tag, e.data, e.children, e.text, e.elm, e.context, e.componentOptions, e.asyncFactory);return n.ns = e.ns, n.isStatic = e.isStatic, n.key = e.key, n.isComment = e.isComment, n.isCloned = !0, t && e.children && (n.children = ee(e.children)), n;
    }function ee(e, t) {
      for (var n = e.length, a = new Array(n), r = 0; r < n; r++) {
        a[r] = X(e[r], t);
      }return a;
    }function te(e) {
      function t() {
        var e = arguments,
            n = t.fns;if (!Array.isArray(n)) return n.apply(null, arguments);for (var a = n.slice(), r = 0; r < a.length; r++) {
          a[r].apply(null, e);
        }
      }return t.fns = e, t;
    }function ne(e, t) {
      return e.plain ? -1 : t.plain ? 1 : 0;
    }function ae(e, t, a, r, i) {
      var s,
          o,
          d,
          u,
          l = [],
          _ = !1;for (s in e) {
        o = e[s], d = t[s], u = Pi(s), u.plain || (_ = !0), n(o) || (n(d) ? (n(o.fns) && (o = e[s] = te(o)), u.handler = o, l.push(u)) : o !== d && (d.fns = o, e[s] = d));
      }if (l.length) {
        _ && l.sort(ne);for (var c = 0; c < l.length; c++) {
          var m = l[c];a(m.name, m.handler, m.once, m.capture, m.passive);
        }
      }for (s in t) {
        n(e[s]) && (u = Pi(s), r(u.name, t[s], u.capture));
      }
    }function re(e, t, i) {
      function s() {
        i.apply(this, arguments), h(o.fns, s);
      }var o,
          d = e[t];n(d) ? o = te([s]) : a(d.fns) && r(d.merged) ? (o = d, o.fns.push(s)) : o = te([d, s]), o.merged = !0, e[t] = o;
    }function ie(e, t, r) {
      var i = t.options.props;if (!n(i)) {
        var s = {},
            o = e.attrs,
            d = e.props;if (a(o) || a(d)) for (var u in i) {
          var l = Vr(u);se(s, d, u, l, !0) || se(s, o, u, l, !1);
        }return s;
      }
    }function se(e, t, n, r, i) {
      if (a(t)) {
        if (f(t, n)) return e[n] = t[n], i || delete t[n], !0;if (f(t, r)) return e[n] = t[r], i || delete t[r], !0;
      }return !1;
    }function oe(e) {
      for (var t = 0; t < e.length; t++) {
        if (Array.isArray(e[t])) return Array.prototype.concat.apply([], e);
      }return e;
    }function de(e) {
      return s(e) ? [Z(e)] : Array.isArray(e) ? le(e) : void 0;
    }function ue(e) {
      return a(e) && a(e.text) && i(e.isComment);
    }function le(e, t) {
      var i,
          o,
          d,
          u = [];for (i = 0; i < e.length; i++) {
        o = e[i], n(o) || "boolean" == typeof o || (d = u[u.length - 1], Array.isArray(o) ? u.push.apply(u, le(o, (t || "") + "_" + i)) : s(o) ? ue(d) ? d.text += String(o) : "" !== o && u.push(Z(o)) : ue(o) && ue(d) ? u[u.length - 1] = Z(d.text + o.text) : (r(e._isVList) && a(o.tag) && n(o.key) && a(t) && (o.key = "__vlist" + t + "_" + i + "__"), u.push(o)));
      }return u;
    }function _e(e, t) {
      return e.__esModule && e.default && (e = e.default), o(e) ? t.extend(e) : e;
    }function ce(e, t, n, a, r) {
      var i = Ei();return i.asyncFactory = e, i.asyncMeta = { data: t, context: n, children: a, tag: r }, i;
    }function me(e, t, i) {
      if (r(e.error) && a(e.errorComp)) return e.errorComp;if (a(e.resolved)) return e.resolved;if (r(e.loading) && a(e.loadingComp)) return e.loadingComp;if (!a(e.contexts)) {
        var s = e.contexts = [i],
            d = !0,
            u = function u() {
          for (var e = 0, t = s.length; e < t; e++) {
            s[e].$forceUpdate();
          }
        },
            l = w(function (n) {
          e.resolved = _e(n, t), d || u();
        }),
            _ = w(function (t) {
          a(e.errorComp) && (e.error = !0, u());
        }),
            c = e(l, _);return o(c) && ("function" == typeof c.then ? n(e.resolved) && c.then(l, _) : a(c.component) && "function" == typeof c.component.then && (c.component.then(l, _), a(c.error) && (e.errorComp = _e(c.error, t)), a(c.loading) && (e.loadingComp = _e(c.loading, t), 0 === c.delay ? e.loading = !0 : setTimeout(function () {
          n(e.resolved) && n(e.error) && (e.loading = !0, u());
        }, c.delay || 200)), a(c.timeout) && setTimeout(function () {
          n(e.resolved) && _(null);
        }, c.timeout))), d = !1, e.loading ? e.loadingComp : e.resolved;
      }e.contexts.push(i);
    }function he(e) {
      return e.isComment && e.asyncFactory;
    }function fe(e) {
      if (Array.isArray(e)) for (var t = 0; t < e.length; t++) {
        var n = e[t];if (a(n) && (a(n.componentOptions) || he(n))) return n;
      }
    }function pe(e) {
      e._events = Object.create(null), e._hasHookEvent = !1;var t = e.$options._parentListeners;t && ve(e, t);
    }function Me(e, t, n) {
      n ? Oi.$once(e, t) : Oi.$on(e, t);
    }function ye(e, t) {
      Oi.$off(e, t);
    }function ve(e, t, n) {
      Oi = e, ae(t, n || {}, Me, ye, e);
    }function Le(e, t) {
      var n = {};if (!e) return n;for (var a = [], r = 0, i = e.length; r < i; r++) {
        var s = e[r],
            o = s.data;if (o && o.attrs && o.attrs.slot && delete o.attrs.slot, s.context !== t && s.functionalContext !== t || !o || null == o.slot) a.push(s);else {
          var d = s.data.slot,
              u = n[d] || (n[d] = []);"template" === s.tag ? u.push.apply(u, s.children) : u.push(s);
        }
      }return a.every(ge) || (n.default = a), n;
    }function ge(e) {
      return e.isComment || " " === e.text;
    }function Ye(e, t) {
      t = t || {};for (var n = 0; n < e.length; n++) {
        Array.isArray(e[n]) ? Ye(e[n], t) : t[e[n].key] = e[n].fn;
      }return t;
    }function ke(e) {
      var t = e.$options,
          n = t.parent;if (n && !t.abstract) {
        for (; n.$options.abstract && n.$parent;) {
          n = n.$parent;
        }n.$children.push(e);
      }e.$parent = n, e.$root = n ? n.$root : e, e.$children = [], e.$refs = {}, e._watcher = null, e._inactive = null, e._directInactive = !1, e._isMounted = !1, e._isDestroyed = !1, e._isBeingDestroyed = !1;
    }function we(e, t, n) {
      e.$el = t, e.$options.render || (e.$options.render = Ei), He(e, "beforeMount");var a;return a = function a() {
        e._update(e._render(), n);
      }, e._watcher = new Ui(e, a, g), n = !1, null == e.$vnode && (e._isMounted = !0, He(e, "mounted")), e;
    }function De(e, t, n, a, r) {
      var i = !!(r || e.$options._renderChildren || a.data.scopedSlots || e.$scopedSlots !== ti);if (e.$options._parentVnode = a, e.$vnode = a, e._vnode && (e._vnode.parent = a), e.$options._renderChildren = r, e.$attrs = a.data && a.data.attrs || ti, e.$listeners = n || ti, t && e.$options.props) {
        Si.shouldConvert = !1;for (var s = e._props, o = e.$options._propKeys || [], d = 0; d < o.length; d++) {
          var u = o[d];s[u] = V(u, e.$options.props, t, e);
        }Si.shouldConvert = !0, e.$options.propsData = t;
      }if (n) {
        var l = e.$options._parentListeners;e.$options._parentListeners = n, ve(e, n, l);
      }i && (e.$slots = Le(r, a.context), e.$forceUpdate());
    }function Te(e) {
      for (; e && (e = e.$parent);) {
        if (e._inactive) return !0;
      }return !1;
    }function be(e, t) {
      if (t) {
        if (e._directInactive = !1, Te(e)) return;
      } else if (e._directInactive) return;if (e._inactive || null === e._inactive) {
        e._inactive = !1;for (var n = 0; n < e.$children.length; n++) {
          be(e.$children[n]);
        }He(e, "activated");
      }
    }function Se(e, t) {
      if (!(t && (e._directInactive = !0, Te(e)) || e._inactive)) {
        e._inactive = !0;for (var n = 0; n < e.$children.length; n++) {
          Se(e.$children[n]);
        }He(e, "deactivated");
      }
    }function He(e, t) {
      var n = e.$options[t];if (n) for (var a = 0, r = n.length; a < r; a++) {
        try {
          n[a].call(e);
        } catch (n) {
          S(n, e, t + " hook");
        }
      }e._hasHookEvent && e.$emit("hook:" + t);
    }function xe() {
      Ri = Wi.length = zi.length = 0, $i = {}, Ni = Ii = !1;
    }function je() {
      Ii = !0;var e, t;for (Wi.sort(function (e, t) {
        return e.id - t.id;
      }), Ri = 0; Ri < Wi.length; Ri++) {
        e = Wi[Ri], t = e.id, $i[t] = null, e.run();
      }var n = zi.slice(),
          a = Wi.slice();xe(), Oe(n), Fe(a), vi && ei.devtools && vi.emit("flush");
    }function Fe(e) {
      for (var t = e.length; t--;) {
        var n = e[t],
            a = n.vm;a._watcher === n && a._isMounted && He(a, "updated");
      }
    }function Ce(e) {
      e._inactive = !1, zi.push(e);
    }function Oe(e) {
      for (var t = 0; t < e.length; t++) {
        e[t]._inactive = !0, be(e[t], !0);
      }
    }function Ee(e) {
      var t = e.id;if (null == $i[t]) {
        if ($i[t] = !0, Ii) {
          for (var n = Wi.length - 1; n > Ri && Wi[n].id > e.id;) {
            n--;
          }Wi.splice(n + 1, 0, e);
        } else Wi.push(e);Ni || (Ni = !0, gi(je));
      }
    }function Pe(e) {
      Bi.clear(), Ae(e, Bi);
    }function Ae(e, t) {
      var n,
          a,
          r = Array.isArray(e);if ((r || o(e)) && Object.isExtensible(e)) {
        if (e.__ob__) {
          var i = e.__ob__.dep.id;if (t.has(i)) return;t.add(i);
        }if (r) for (n = e.length; n--;) {
          Ae(e[n], t);
        } else for (a = Object.keys(e), n = a.length; n--;) {
          Ae(e[a[n]], t);
        }
      }
    }function We(e, t, n) {
      Gi.get = function () {
        return this[t][n];
      }, Gi.set = function (e) {
        this[t][n] = e;
      }, Object.defineProperty(e, n, Gi);
    }function ze(e) {
      e._watchers = [];var t = e.$options;t.props && $e(e, t.props), t.methods && Be(e, t.methods), t.data ? Ne(e) : O(e._data = {}, !0), t.computed && Re(e, t.computed), t.watch && t.watch !== mi && Ge(e, t.watch);
    }function $e(e, t) {
      var n = e.$options.propsData || {},
          a = e._props = {},
          r = e.$options._propKeys = [],
          i = !e.$parent;Si.shouldConvert = i;for (var s in t) {
        !function (i) {
          r.push(i);var s = V(i, t, n, e);E(a, i, s), i in e || We(e, "_props", i);
        }(s);
      }Si.shouldConvert = !0;
    }function Ne(e) {
      var t = e.$options.data;t = e._data = "function" == typeof t ? Ie(t, e) : t || {}, d(t) || (t = {});for (var n = Object.keys(t), a = e.$options.props, r = (e.$options.methods, n.length); r--;) {
        var i = n[r];a && f(a, i) || D(i) || We(e, "_data", i);
      }O(t, !0);
    }function Ie(e, t) {
      try {
        return e.call(t);
      } catch (e) {
        return S(e, t, "data()"), {};
      }
    }function Re(e, t) {
      var n = e._computedWatchers = Object.create(null),
          a = yi();for (var r in t) {
        var i = t[r],
            s = "function" == typeof i ? i : i.get;a || (n[r] = new Ui(e, s || g, g, Vi)), r in e || Je(e, r, i);
      }
    }function Je(e, t, n) {
      var a = !yi();"function" == typeof n ? (Gi.get = a ? Ue(t) : n, Gi.set = g) : (Gi.get = n.get ? a && !1 !== n.cache ? Ue(t) : n.get : g, Gi.set = n.set ? n.set : g), Object.defineProperty(e, t, Gi);
    }function Ue(e) {
      return function () {
        var t = this._computedWatchers && this._computedWatchers[e];if (t) return t.dirty && t.evaluate(), ki.target && t.depend(), t.value;
      };
    }function Be(e, t) {
      e.$options.props;for (var n in t) {
        e[n] = null == t[n] ? g : M(t[n], e);
      }
    }function Ge(e, t) {
      for (var n in t) {
        var a = t[n];if (Array.isArray(a)) for (var r = 0; r < a.length; r++) {
          Ve(e, n, a[r]);
        } else Ve(e, n, a);
      }
    }function Ve(e, t, n, a) {
      return d(n) && (a = n, n = n.handler), "string" == typeof n && (n = e[n]), e.$watch(t, n, a);
    }function qe(e) {
      var t = e.$options.provide;t && (e._provided = "function" == typeof t ? t.call(e) : t);
    }function Ke(e) {
      var t = Qe(e.$options.inject, e);t && (Si.shouldConvert = !1, Object.keys(t).forEach(function (n) {
        E(e, n, t[n]);
      }), Si.shouldConvert = !0);
    }function Qe(e, t) {
      if (e) {
        for (var n = Object.create(null), a = Li ? Reflect.ownKeys(e).filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        }) : Object.keys(e), r = 0; r < a.length; r++) {
          for (var i = a[r], s = e[i], o = t; o;) {
            if (o._provided && s in o._provided) {
              n[i] = o._provided[s];break;
            }o = o.$parent;
          }
        }return n;
      }
    }function Ze(e, t, n, r, i) {
      var s = {},
          o = e.options.props;if (a(o)) for (var d in o) {
        s[d] = V(d, o, t || ti);
      } else a(n.attrs) && Xe(s, n.attrs), a(n.props) && Xe(s, n.props);var u = Object.create(r),
          l = function l(e, t, n, a) {
        return it(u, e, t, n, a, !0);
      },
          _ = e.options.render.call(null, l, { data: n, props: s, children: i, parent: r, listeners: n.on || ti, injections: Qe(e.options.inject, r), slots: function slots() {
          return Le(i, r);
        } });return _ instanceof Fi && (_.functionalContext = r, _.functionalOptions = e.options, n.slot && ((_.data || (_.data = {})).slot = n.slot)), _;
    }function Xe(e, t) {
      for (var n in t) {
        e[Ur(n)] = t[n];
      }
    }function et(e, t, i, s, d) {
      if (!n(e)) {
        var u = i.$options._base;if (o(e) && (e = u.extend(e)), "function" == typeof e) {
          var l;if (n(e.cid) && (l = e, void 0 === (e = me(l, u, i)))) return ce(l, t, i, s, d);t = t || {}, Lt(e), a(t.model) && rt(e.options, t);var _ = ie(t, e, d);if (r(e.options.functional)) return Ze(e, _, t, i, s);var c = t.on;if (t.on = t.nativeOn, r(e.options.abstract)) {
            var m = t.slot;t = {}, m && (t.slot = m);
          }nt(t);var h = e.options.name || d;return new Fi("vue-component-" + e.cid + (h ? "-" + h : ""), t, void 0, void 0, void 0, i, { Ctor: e, propsData: _, listeners: c, tag: d, children: s }, l);
        }
      }
    }function tt(e, t, n, r) {
      var i = e.componentOptions,
          s = { _isComponent: !0, parent: t, propsData: i.propsData, _componentTag: i.tag, _parentVnode: e, _parentListeners: i.listeners, _renderChildren: i.children, _parentElm: n || null, _refElm: r || null },
          o = e.data.inlineTemplate;return a(o) && (s.render = o.render, s.staticRenderFns = o.staticRenderFns), new i.Ctor(s);
    }function nt(e) {
      e.hook || (e.hook = {});for (var t = 0; t < Ki.length; t++) {
        var n = Ki[t],
            a = e.hook[n],
            r = qi[n];e.hook[n] = a ? at(r, a) : r;
      }
    }function at(e, t) {
      return function (n, a, r, i) {
        e(n, a, r, i), t(n, a, r, i);
      };
    }function rt(e, t) {
      var n = e.model && e.model.prop || "value",
          r = e.model && e.model.event || "input";(t.props || (t.props = {}))[n] = t.model.value;var i = t.on || (t.on = {});a(i[r]) ? i[r] = [t.model.callback].concat(i[r]) : i[r] = t.model.callback;
    }function it(e, t, n, a, i, o) {
      return (Array.isArray(n) || s(n)) && (i = a, a = n, n = void 0), r(o) && (i = Zi), st(e, t, n, a, i);
    }function st(e, t, n, r, i) {
      if (a(n) && a(n.__ob__)) return Ei();if (a(n) && a(n.is) && (t = n.is), !t) return Ei();Array.isArray(r) && "function" == typeof r[0] && (n = n || {}, n.scopedSlots = { default: r[0] }, r.length = 0), i === Zi ? r = de(r) : i === Qi && (r = oe(r));var s, o;if ("string" == typeof t) {
        var d;o = e.$vnode && e.$vnode.ns || ei.getTagNamespace(t), s = ei.isReservedTag(t) ? new Fi(ei.parsePlatformTagName(t), n, r, void 0, void 0, e) : a(d = G(e.$options, "components", t)) ? et(d, n, e, r, t) : new Fi(t, n, r, void 0, void 0, e);
      } else s = et(t, n, e, r);return a(s) ? (o && ot(s, o), s) : Ei();
    }function ot(e, t) {
      if (e.ns = t, "foreignObject" !== e.tag && a(e.children)) for (var r = 0, i = e.children.length; r < i; r++) {
        var s = e.children[r];a(s.tag) && n(s.ns) && ot(s, t);
      }
    }function dt(e, t) {
      var n, r, i, s, d;if (Array.isArray(e) || "string" == typeof e) for (n = new Array(e.length), r = 0, i = e.length; r < i; r++) {
        n[r] = t(e[r], r);
      } else if ("number" == typeof e) for (n = new Array(e), r = 0; r < e; r++) {
        n[r] = t(r + 1, r);
      } else if (o(e)) for (s = Object.keys(e), n = new Array(s.length), r = 0, i = s.length; r < i; r++) {
        d = s[r], n[r] = t(e[d], d, r);
      }return a(n) && (n._isVList = !0), n;
    }function ut(e, t, n, a) {
      var r = this.$scopedSlots[e];if (r) return n = n || {}, a && (n = v(v({}, a), n)), r(n) || t;var i = this.$slots[e];return i || t;
    }function lt(e) {
      return G(this.$options, "filters", e, !0) || Kr;
    }function _t(e, t, n) {
      var a = ei.keyCodes[t] || n;return Array.isArray(a) ? -1 === a.indexOf(e) : a !== e;
    }function ct(e, t, n, a, r) {
      if (n) if (o(n)) {
        Array.isArray(n) && (n = L(n));var i;for (var s in n) {
          !function (s) {
            if ("class" === s || "style" === s || Ir(s)) i = e;else {
              var o = e.attrs && e.attrs.type;i = a || ei.mustUseProp(t, o, s) ? e.domProps || (e.domProps = {}) : e.attrs || (e.attrs = {});
            }if (!(s in i) && (i[s] = n[s], r)) {
              (e.on || (e.on = {}))["update:" + s] = function (e) {
                n[s] = e;
              };
            }
          }(s);
        }
      } else ;return e;
    }function mt(e, t) {
      var n = this._staticTrees[e];return n && !t ? Array.isArray(n) ? ee(n) : X(n) : (n = this._staticTrees[e] = this.$options.staticRenderFns[e].call(this._renderProxy), ft(n, "__static__" + e, !1), n);
    }function ht(e, t, n) {
      return ft(e, "__once__" + t + (n ? "_" + n : ""), !0), e;
    }function ft(e, t, n) {
      if (Array.isArray(e)) for (var a = 0; a < e.length; a++) {
        e[a] && "string" != typeof e[a] && pt(e[a], t + "_" + a, n);
      } else pt(e, t, n);
    }function pt(e, t, n) {
      e.isStatic = !0, e.key = t, e.isOnce = n;
    }function Mt(e, t) {
      if (t) if (d(t)) {
        var n = e.on = e.on ? v({}, e.on) : {};for (var a in t) {
          var r = n[a],
              i = t[a];n[a] = r ? [].concat(i, r) : i;
        }
      } else ;return e;
    }function yt(e) {
      e._vnode = null, e._staticTrees = null;var t = e.$vnode = e.$options._parentVnode,
          n = t && t.context;e.$slots = Le(e.$options._renderChildren, n), e.$scopedSlots = ti, e._c = function (t, n, a, r) {
        return it(e, t, n, a, r, !1);
      }, e.$createElement = function (t, n, a, r) {
        return it(e, t, n, a, r, !0);
      };var a = t && t.data;E(e, "$attrs", a && a.attrs || ti, null, !0), E(e, "$listeners", e.$options._parentListeners || ti, null, !0);
    }function vt(e, t) {
      var n = e.$options = Object.create(e.constructor.options);n.parent = t.parent, n.propsData = t.propsData, n._parentVnode = t._parentVnode, n._parentListeners = t._parentListeners, n._renderChildren = t._renderChildren, n._componentTag = t._componentTag, n._parentElm = t._parentElm, n._refElm = t._refElm, t.render && (n.render = t.render, n.staticRenderFns = t.staticRenderFns);
    }function Lt(e) {
      var t = e.options;if (e.super) {
        var n = Lt(e.super);if (n !== e.superOptions) {
          e.superOptions = n;var a = gt(e);a && v(e.extendOptions, a), t = e.options = B(n, e.extendOptions), t.name && (t.components[t.name] = e);
        }
      }return t;
    }function gt(e) {
      var t,
          n = e.options,
          a = e.extendOptions,
          r = e.sealedOptions;for (var i in n) {
        n[i] !== r[i] && (t || (t = {}), t[i] = Yt(n[i], a[i], r[i]));
      }return t;
    }function Yt(e, t, n) {
      if (Array.isArray(e)) {
        var a = [];n = Array.isArray(n) ? n : [n], t = Array.isArray(t) ? t : [t];for (var r = 0; r < e.length; r++) {
          (t.indexOf(e[r]) >= 0 || n.indexOf(e[r]) < 0) && a.push(e[r]);
        }return a;
      }return e;
    }function kt(e) {
      this._init(e);
    }function wt(e) {
      e.use = function (e) {
        var t = this._installedPlugins || (this._installedPlugins = []);if (t.indexOf(e) > -1) return this;var n = y(arguments, 1);return n.unshift(this), "function" == typeof e.install ? e.install.apply(e, n) : "function" == typeof e && e.apply(null, n), t.push(e), this;
      };
    }function Dt(e) {
      e.mixin = function (e) {
        return this.options = B(this.options, e), this;
      };
    }function Tt(e) {
      e.cid = 0;var t = 1;e.extend = function (e) {
        e = e || {};var n = this,
            a = n.cid,
            r = e._Ctor || (e._Ctor = {});if (r[a]) return r[a];var i = e.name || n.options.name,
            s = function s(e) {
          this._init(e);
        };return s.prototype = Object.create(n.prototype), s.prototype.constructor = s, s.cid = t++, s.options = B(n.options, e), s.super = n, s.options.props && bt(s), s.options.computed && St(s), s.extend = n.extend, s.mixin = n.mixin, s.use = n.use, Zr.forEach(function (e) {
          s[e] = n[e];
        }), i && (s.options.components[i] = s), s.superOptions = n.options, s.extendOptions = e, s.sealedOptions = v({}, s.options), r[a] = s, s;
      };
    }function bt(e) {
      var t = e.options.props;for (var n in t) {
        We(e.prototype, "_props", n);
      }
    }function St(e) {
      var t = e.options.computed;for (var n in t) {
        Je(e.prototype, n, t[n]);
      }
    }function Ht(e) {
      Zr.forEach(function (t) {
        e[t] = function (e, n) {
          return n ? ("component" === t && d(n) && (n.name = n.name || e, n = this.options._base.extend(n)), "directive" === t && "function" == typeof n && (n = { bind: n, update: n }), this.options[t + "s"][e] = n, n) : this.options[t + "s"][e];
        };
      });
    }function xt(e) {
      return e && (e.Ctor.options.name || e.tag);
    }function jt(e, t) {
      return Array.isArray(e) ? e.indexOf(t) > -1 : "string" == typeof e ? e.split(",").indexOf(t) > -1 : !!u(e) && e.test(t);
    }function Ft(e, t, n) {
      for (var a in e) {
        var r = e[a];if (r) {
          var i = xt(r.componentOptions);i && !n(i) && (r !== t && Ct(r), e[a] = null);
        }
      }
    }function Ct(e) {
      e && e.componentInstance.$destroy();
    }function Ot(e) {
      for (var t = e.data, n = e, r = e; a(r.componentInstance);) {
        r = r.componentInstance._vnode, r.data && (t = Et(r.data, t));
      }for (; a(n = n.parent);) {
        n.data && (t = Et(t, n.data));
      }return Pt(t.staticClass, t.class);
    }function Et(e, t) {
      return { staticClass: At(e.staticClass, t.staticClass), class: a(e.class) ? [e.class, t.class] : t.class };
    }function Pt(e, t) {
      return a(e) || a(t) ? At(e, Wt(t)) : "";
    }function At(e, t) {
      return e ? t ? e + " " + t : e : t || "";
    }function Wt(e) {
      return Array.isArray(e) ? zt(e) : o(e) ? $t(e) : "string" == typeof e ? e : "";
    }function zt(e) {
      for (var t, n = "", r = 0, i = e.length; r < i; r++) {
        a(t = Wt(e[r])) && "" !== t && (n && (n += " "), n += t);
      }return n;
    }function $t(e) {
      var t = "";for (var n in e) {
        e[n] && (t && (t += " "), t += n);
      }return t;
    }function Nt(e) {
      return ks(e) ? "svg" : "math" === e ? "math" : void 0;
    }function It(e) {
      if (!ii) return !0;if (Ds(e)) return !1;if (e = e.toLowerCase(), null != Ts[e]) return Ts[e];var t = document.createElement(e);return e.indexOf("-") > -1 ? Ts[e] = t.constructor === window.HTMLUnknownElement || t.constructor === window.HTMLElement : Ts[e] = /HTMLUnknownElement/.test(t.toString());
    }function Rt(e) {
      if ("string" == typeof e) {
        var t = document.querySelector(e);return t || document.createElement("div");
      }return e;
    }function Jt(e, t) {
      var n = document.createElement(e);return "select" !== e ? n : (t.data && t.data.attrs && void 0 !== t.data.attrs.multiple && n.setAttribute("multiple", "multiple"), n);
    }function Ut(e, t) {
      return document.createElementNS(gs[e], t);
    }function Bt(e) {
      return document.createTextNode(e);
    }function Gt(e) {
      return document.createComment(e);
    }function Vt(e, t, n) {
      e.insertBefore(t, n);
    }function qt(e, t) {
      e.removeChild(t);
    }function Kt(e, t) {
      e.appendChild(t);
    }function Qt(e) {
      return e.parentNode;
    }function Zt(e) {
      return e.nextSibling;
    }function Xt(e) {
      return e.tagName;
    }function en(e, t) {
      e.textContent = t;
    }function tn(e, t, n) {
      e.setAttribute(t, n);
    }function nn(e, t) {
      var n = e.data.ref;if (n) {
        var a = e.context,
            r = e.componentInstance || e.elm,
            i = a.$refs;t ? Array.isArray(i[n]) ? h(i[n], r) : i[n] === r && (i[n] = void 0) : e.data.refInFor ? Array.isArray(i[n]) ? i[n].indexOf(r) < 0 && i[n].push(r) : i[n] = [r] : i[n] = r;
      }
    }function an(e, t) {
      return e.key === t.key && (e.tag === t.tag && e.isComment === t.isComment && a(e.data) === a(t.data) && rn(e, t) || r(e.isAsyncPlaceholder) && e.asyncFactory === t.asyncFactory && n(t.asyncFactory.error));
    }function rn(e, t) {
      if ("input" !== e.tag) return !0;var n,
          r = a(n = e.data) && a(n = n.attrs) && n.type,
          i = a(n = t.data) && a(n = n.attrs) && n.type;return r === i || bs(r) && bs(i);
    }function sn(e, t, n) {
      var r,
          i,
          s = {};for (r = t; r <= n; ++r) {
        i = e[r].key, a(i) && (s[i] = r);
      }return s;
    }function on(e, t) {
      (e.data.directives || t.data.directives) && dn(e, t);
    }function dn(e, t) {
      var n,
          a,
          r,
          i = e === xs,
          s = t === xs,
          o = un(e.data.directives, e.context),
          d = un(t.data.directives, t.context),
          u = [],
          l = [];for (n in d) {
        a = o[n], r = d[n], a ? (r.oldValue = a.value, _n(r, "update", t, e), r.def && r.def.componentUpdated && l.push(r)) : (_n(r, "bind", t, e), r.def && r.def.inserted && u.push(r));
      }if (u.length) {
        var _ = function _() {
          for (var n = 0; n < u.length; n++) {
            _n(u[n], "inserted", t, e);
          }
        };i ? re(t.data.hook || (t.data.hook = {}), "insert", _) : _();
      }if (l.length && re(t.data.hook || (t.data.hook = {}), "postpatch", function () {
        for (var n = 0; n < l.length; n++) {
          _n(l[n], "componentUpdated", t, e);
        }
      }), !i) for (n in o) {
        d[n] || _n(o[n], "unbind", e, e, s);
      }
    }function un(e, t) {
      var n = Object.create(null);if (!e) return n;var a, r;for (a = 0; a < e.length; a++) {
        r = e[a], r.modifiers || (r.modifiers = Cs), n[ln(r)] = r, r.def = G(t.$options, "directives", r.name, !0);
      }return n;
    }function ln(e) {
      return e.rawName || e.name + "." + Object.keys(e.modifiers || {}).join(".");
    }function _n(e, t, n, a, r) {
      var i = e.def && e.def[t];if (i) try {
        i(n.elm, e, n, a, r);
      } catch (a) {
        S(a, n.context, "directive " + e.name + " " + t + " hook");
      }
    }function cn(e, t) {
      var r = t.componentOptions;if (!(a(r) && !1 === r.Ctor.options.inheritAttrs || n(e.data.attrs) && n(t.data.attrs))) {
        var i,
            s,
            o = t.elm,
            d = e.data.attrs || {},
            u = t.data.attrs || {};a(u.__ob__) && (u = t.data.attrs = v({}, u));for (i in u) {
          s = u[i], d[i] !== s && mn(o, i, s);
        }di && u.value !== d.value && mn(o, "value", u.value);for (i in d) {
          n(u[i]) && (ys(i) ? o.removeAttributeNS(Ms, vs(i)) : fs(i) || o.removeAttribute(i));
        }
      }
    }function mn(e, t, n) {
      ps(t) ? Ls(n) ? e.removeAttribute(t) : (n = "allowfullscreen" === t && "EMBED" === e.tagName ? "true" : t, e.setAttribute(t, n)) : fs(t) ? e.setAttribute(t, Ls(n) || "false" === n ? "false" : "true") : ys(t) ? Ls(n) ? e.removeAttributeNS(Ms, vs(t)) : e.setAttributeNS(Ms, t, n) : Ls(n) ? e.removeAttribute(t) : e.setAttribute(t, n);
    }function hn(e, t) {
      var r = t.elm,
          i = t.data,
          s = e.data;if (!(n(i.staticClass) && n(i.class) && (n(s) || n(s.staticClass) && n(s.class)))) {
        var o = Ot(t),
            d = r._transitionClasses;a(d) && (o = At(o, Wt(d))), o !== r._prevClass && (r.setAttribute("class", o), r._prevClass = o);
      }
    }function fn(e) {
      function t() {
        (s || (s = [])).push(e.slice(h, r).trim()), h = r + 1;
      }var n,
          a,
          r,
          i,
          s,
          o = !1,
          d = !1,
          u = !1,
          l = !1,
          _ = 0,
          c = 0,
          m = 0,
          h = 0;for (r = 0; r < e.length; r++) {
        if (a = n, n = e.charCodeAt(r), o) 39 === n && 92 !== a && (o = !1);else if (d) 34 === n && 92 !== a && (d = !1);else if (u) 96 === n && 92 !== a && (u = !1);else if (l) 47 === n && 92 !== a && (l = !1);else if (124 !== n || 124 === e.charCodeAt(r + 1) || 124 === e.charCodeAt(r - 1) || _ || c || m) {
          switch (n) {case 34:
              d = !0;break;case 39:
              o = !0;break;case 96:
              u = !0;break;case 40:
              m++;break;case 41:
              m--;break;case 91:
              c++;break;case 93:
              c--;break;case 123:
              _++;break;case 125:
              _--;}if (47 === n) {
            for (var f = r - 1, p = void 0; f >= 0 && " " === (p = e.charAt(f)); f--) {}p && As.test(p) || (l = !0);
          }
        } else void 0 === i ? (h = r + 1, i = e.slice(0, r).trim()) : t();
      }if (void 0 === i ? i = e.slice(0, r).trim() : 0 !== h && t(), s) for (r = 0; r < s.length; r++) {
        i = pn(i, s[r]);
      }return i;
    }function pn(e, t) {
      var n = t.indexOf("(");return n < 0 ? '_f("' + t + '")(' + e + ")" : '_f("' + t.slice(0, n) + '")(' + e + "," + t.slice(n + 1);
    }function Mn(e) {}function yn(e, t) {
      return e ? e.map(function (e) {
        return e[t];
      }).filter(function (e) {
        return e;
      }) : [];
    }function vn(e, t, n) {
      (e.props || (e.props = [])).push({ name: t, value: n });
    }function Ln(e, t, n) {
      (e.attrs || (e.attrs = [])).push({ name: t, value: n });
    }function gn(e, t, n, a, r, i) {
      (e.directives || (e.directives = [])).push({ name: t, rawName: n, value: a, arg: r, modifiers: i });
    }function Yn(e, t, n, a, r, i) {
      a && a.capture && (delete a.capture, t = "!" + t), a && a.once && (delete a.once, t = "~" + t), a && a.passive && (delete a.passive, t = "&" + t);var s;a && a.native ? (delete a.native, s = e.nativeEvents || (e.nativeEvents = {})) : s = e.events || (e.events = {});var o = { value: n, modifiers: a },
          d = s[t];Array.isArray(d) ? r ? d.unshift(o) : d.push(o) : s[t] = d ? r ? [o, d] : [d, o] : o;
    }function kn(e, t, n) {
      var a = wn(e, ":" + t) || wn(e, "v-bind:" + t);if (null != a) return fn(a);if (!1 !== n) {
        var r = wn(e, t);if (null != r) return JSON.stringify(r);
      }
    }function wn(e, t) {
      var n;if (null != (n = e.attrsMap[t])) for (var a = e.attrsList, r = 0, i = a.length; r < i; r++) {
        if (a[r].name === t) {
          a.splice(r, 1);break;
        }
      }return n;
    }function Dn(e, t, n) {
      var a = n || {},
          r = a.number,
          i = a.trim,
          s = "$$v";i && (s = "(typeof $$v === 'string'? $$v.trim(): $$v)"), r && (s = "_n(" + s + ")");var o = Tn(t, s);e.model = { value: "(" + t + ")", expression: '"' + t + '"', callback: "function ($$v) {" + o + "}" };
    }function Tn(e, t) {
      var n = bn(e);return null === n.idx ? e + "=" + t : "$set(" + n.exp + ", " + n.idx + ", " + t + ")";
    }function bn(e) {
      if (rs = e, as = rs.length, ss = os = ds = 0, e.indexOf("[") < 0 || e.lastIndexOf("]") < as - 1) return { exp: e, idx: null };for (; !Hn();) {
        is = Sn(), xn(is) ? Fn(is) : 91 === is && jn(is);
      }return { exp: e.substring(0, os), idx: e.substring(os + 1, ds) };
    }function Sn() {
      return rs.charCodeAt(++ss);
    }function Hn() {
      return ss >= as;
    }function xn(e) {
      return 34 === e || 39 === e;
    }function jn(e) {
      var t = 1;for (os = ss; !Hn();) {
        if (e = Sn(), xn(e)) Fn(e);else if (91 === e && t++, 93 === e && t--, 0 === t) {
          ds = ss;break;
        }
      }
    }function Fn(e) {
      for (var t = e; !Hn() && (e = Sn()) !== t;) {}
    }function Cn(e, t, n) {
      us = n;var a = t.value,
          r = t.modifiers,
          i = e.tag,
          s = e.attrsMap.type;if (e.component) return Dn(e, a, r), !1;if ("select" === i) Pn(e, a, r);else if ("input" === i && "checkbox" === s) On(e, a, r);else if ("input" === i && "radio" === s) En(e, a, r);else if ("input" === i || "textarea" === i) An(e, a, r);else if (!ei.isReservedTag(i)) return Dn(e, a, r), !1;return !0;
    }function On(e, t, n) {
      var a = n && n.number,
          r = kn(e, "value") || "null",
          i = kn(e, "true-value") || "true",
          s = kn(e, "false-value") || "false";vn(e, "checked", "Array.isArray(" + t + ")?_i(" + t + "," + r + ")>-1" + ("true" === i ? ":(" + t + ")" : ":_q(" + t + "," + i + ")")), Yn(e, zs, "var $$a=" + t + ",$$el=$event.target,$$c=$$el.checked?(" + i + "):(" + s + ");if(Array.isArray($$a)){var $$v=" + (a ? "_n(" + r + ")" : r) + ",$$i=_i($$a,$$v);if($$el.checked){$$i<0&&(" + t + "=$$a.concat([$$v]))}else{$$i>-1&&(" + t + "=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{" + Tn(t, "$$c") + "}", null, !0);
    }function En(e, t, n) {
      var a = n && n.number,
          r = kn(e, "value") || "null";r = a ? "_n(" + r + ")" : r, vn(e, "checked", "_q(" + t + "," + r + ")"), Yn(e, zs, Tn(t, r), null, !0);
    }function Pn(e, t, n) {
      var a = n && n.number,
          r = 'Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return ' + (a ? "_n(val)" : "val") + "})",
          i = "var $$selectedVal = " + r + ";";i = i + " " + Tn(t, "$event.target.multiple ? $$selectedVal : $$selectedVal[0]"), Yn(e, "change", i, null, !0);
    }function An(e, t, n) {
      var a = e.attrsMap.type,
          r = n || {},
          i = r.lazy,
          s = r.number,
          o = r.trim,
          d = !i && "range" !== a,
          u = i ? "change" : "range" === a ? Ws : "input",
          l = "$event.target.value";o && (l = "$event.target.value.trim()"), s && (l = "_n(" + l + ")");var _ = Tn(t, l);d && (_ = "if($event.target.composing)return;" + _), vn(e, "value", "(" + t + ")"), Yn(e, u, _, null, !0), (o || s) && Yn(e, "blur", "$forceUpdate()");
    }function Wn(e) {
      var t;a(e[Ws]) && (t = oi ? "change" : "input", e[t] = [].concat(e[Ws], e[t] || []), delete e[Ws]), a(e[zs]) && (t = ci ? "click" : "change", e[t] = [].concat(e[zs], e[t] || []), delete e[zs]);
    }function zn(e, _t2, n, a, r) {
      if (n) {
        var i = _t2,
            s = ls;_t2 = function t(n) {
          null !== (1 === arguments.length ? i(n) : i.apply(null, arguments)) && $n(e, _t2, a, s);
        };
      }ls.addEventListener(e, _t2, hi ? { capture: a, passive: r } : a);
    }function $n(e, t, n, a) {
      (a || ls).removeEventListener(e, t, n);
    }function Nn(e, t) {
      if (!n(e.data.on) || !n(t.data.on)) {
        var a = t.data.on || {},
            r = e.data.on || {};ls = t.elm, Wn(a), ae(a, r, zn, $n, t.context);
      }
    }function In(e, t) {
      if (!n(e.data.domProps) || !n(t.data.domProps)) {
        var r,
            i,
            s = t.elm,
            o = e.data.domProps || {},
            d = t.data.domProps || {};a(d.__ob__) && (d = t.data.domProps = v({}, d));for (r in o) {
          n(d[r]) && (s[r] = "");
        }for (r in d) {
          if (i = d[r], "textContent" !== r && "innerHTML" !== r || (t.children && (t.children.length = 0), i !== o[r])) if ("value" === r) {
            s._value = i;var u = n(i) ? "" : String(i);Rn(s, t, u) && (s.value = u);
          } else s[r] = i;
        }
      }
    }function Rn(e, t, n) {
      return !e.composing && ("option" === t.tag || Jn(e, n) || Un(e, n));
    }function Jn(e, t) {
      var n = !0;try {
        n = document.activeElement !== e;
      } catch (e) {}return n && e.value !== t;
    }function Un(e, t) {
      var n = e.value,
          r = e._vModifiers;return a(r) && r.number ? c(n) !== c(t) : a(r) && r.trim ? n.trim() !== t.trim() : n !== t;
    }function Bn(e) {
      var t = Gn(e.style);return e.staticStyle ? v(e.staticStyle, t) : t;
    }function Gn(e) {
      return Array.isArray(e) ? L(e) : "string" == typeof e ? Is(e) : e;
    }function Vn(e, t) {
      var n,
          a = {};if (t) for (var r = e; r.componentInstance;) {
        r = r.componentInstance._vnode, r.data && (n = Bn(r.data)) && v(a, n);
      }(n = Bn(e.data)) && v(a, n);for (var i = e; i = i.parent;) {
        i.data && (n = Bn(i.data)) && v(a, n);
      }return a;
    }function qn(e, t) {
      var r = t.data,
          i = e.data;if (!(n(r.staticStyle) && n(r.style) && n(i.staticStyle) && n(i.style))) {
        var s,
            o,
            d = t.elm,
            u = i.staticStyle,
            l = i.normalizedStyle || i.style || {},
            _ = u || l,
            c = Gn(t.data.style) || {};t.data.normalizedStyle = a(c.__ob__) ? v({}, c) : c;var m = Vn(t, !0);for (o in _) {
          n(m[o]) && Us(d, o, "");
        }for (o in m) {
          (s = m[o]) !== _[o] && Us(d, o, null == s ? "" : s);
        }
      }
    }function Kn(e, t) {
      if (t && (t = t.trim())) if (e.classList) t.indexOf(" ") > -1 ? t.split(/\s+/).forEach(function (t) {
        return e.classList.add(t);
      }) : e.classList.add(t);else {
        var n = " " + (e.getAttribute("class") || "") + " ";n.indexOf(" " + t + " ") < 0 && e.setAttribute("class", (n + t).trim());
      }
    }function Qn(e, t) {
      if (t && (t = t.trim())) if (e.classList) t.indexOf(" ") > -1 ? t.split(/\s+/).forEach(function (t) {
        return e.classList.remove(t);
      }) : e.classList.remove(t), e.classList.length || e.removeAttribute("class");else {
        for (var n = " " + (e.getAttribute("class") || "") + " ", a = " " + t + " "; n.indexOf(a) >= 0;) {
          n = n.replace(a, " ");
        }n = n.trim(), n ? e.setAttribute("class", n) : e.removeAttribute("class");
      }
    }function Zn(e) {
      if (e) {
        if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e))) {
          var t = {};return !1 !== e.css && v(t, qs(e.name || "v")), v(t, e), t;
        }return "string" == typeof e ? qs(e) : void 0;
      }
    }function Xn(e) {
      ao(function () {
        ao(e);
      });
    }function ea(e, t) {
      var n = e._transitionClasses || (e._transitionClasses = []);n.indexOf(t) < 0 && (n.push(t), Kn(e, t));
    }function ta(e, t) {
      e._transitionClasses && h(e._transitionClasses, t), Qn(e, t);
    }function na(e, t, n) {
      var a = aa(e, t),
          r = a.type,
          i = a.timeout,
          s = a.propCount;if (!r) return n();var o = r === Qs ? eo : no,
          d = 0,
          u = function u() {
        e.removeEventListener(o, l), n();
      },
          l = function l(t) {
        t.target === e && ++d >= s && u();
      };setTimeout(function () {
        d < s && u();
      }, i + 1), e.addEventListener(o, l);
    }function aa(e, t) {
      var n,
          a = window.getComputedStyle(e),
          r = a[Xs + "Delay"].split(", "),
          i = a[Xs + "Duration"].split(", "),
          s = ra(r, i),
          o = a[to + "Delay"].split(", "),
          d = a[to + "Duration"].split(", "),
          u = ra(o, d),
          l = 0,
          _ = 0;return t === Qs ? s > 0 && (n = Qs, l = s, _ = i.length) : t === Zs ? u > 0 && (n = Zs, l = u, _ = d.length) : (l = Math.max(s, u), n = l > 0 ? s > u ? Qs : Zs : null, _ = n ? n === Qs ? i.length : d.length : 0), { type: n, timeout: l, propCount: _, hasTransform: n === Qs && ro.test(a[Xs + "Property"]) };
    }function ra(e, t) {
      for (; e.length < t.length;) {
        e = e.concat(e);
      }return Math.max.apply(null, t.map(function (t, n) {
        return ia(t) + ia(e[n]);
      }));
    }function ia(e) {
      return 1e3 * Number(e.slice(0, -1));
    }function sa(e, t) {
      var r = e.elm;a(r._leaveCb) && (r._leaveCb.cancelled = !0, r._leaveCb());var i = Zn(e.data.transition);if (!n(i) && !a(r._enterCb) && 1 === r.nodeType) {
        for (var s = i.css, d = i.type, u = i.enterClass, l = i.enterToClass, _ = i.enterActiveClass, m = i.appearClass, h = i.appearToClass, f = i.appearActiveClass, p = i.beforeEnter, M = i.enter, y = i.afterEnter, v = i.enterCancelled, L = i.beforeAppear, g = i.appear, Y = i.afterAppear, k = i.appearCancelled, D = i.duration, T = Ai, b = Ai.$vnode; b && b.parent;) {
          b = b.parent, T = b.context;
        }var S = !T._isMounted || !e.isRootInsert;if (!S || g || "" === g) {
          var H = S && m ? m : u,
              x = S && f ? f : _,
              j = S && h ? h : l,
              F = S ? L || p : p,
              C = S && "function" == typeof g ? g : M,
              O = S ? Y || y : y,
              E = S ? k || v : v,
              P = c(o(D) ? D.enter : D),
              A = !1 !== s && !di,
              W = ua(C),
              z = r._enterCb = w(function () {
            A && (ta(r, j), ta(r, x)), z.cancelled ? (A && ta(r, H), E && E(r)) : O && O(r), r._enterCb = null;
          });e.data.show || re(e.data.hook || (e.data.hook = {}), "insert", function () {
            var t = r.parentNode,
                n = t && t._pending && t._pending[e.key];n && n.tag === e.tag && n.elm._leaveCb && n.elm._leaveCb(), C && C(r, z);
          }), F && F(r), A && (ea(r, H), ea(r, x), Xn(function () {
            ea(r, j), ta(r, H), z.cancelled || W || (da(P) ? setTimeout(z, P) : na(r, d, z));
          })), e.data.show && (t && t(), C && C(r, z)), A || W || z();
        }
      }
    }function oa(e, t) {
      function r() {
        k.cancelled || (e.data.show || ((i.parentNode._pending || (i.parentNode._pending = {}))[e.key] = e), h && h(i), L && (ea(i, l), ea(i, m), Xn(function () {
          ea(i, _), ta(i, l), k.cancelled || g || (da(Y) ? setTimeout(k, Y) : na(i, u, k));
        })), f && f(i, k), L || g || k());
      }var i = e.elm;a(i._enterCb) && (i._enterCb.cancelled = !0, i._enterCb());var s = Zn(e.data.transition);if (n(s)) return t();if (!a(i._leaveCb) && 1 === i.nodeType) {
        var d = s.css,
            u = s.type,
            l = s.leaveClass,
            _ = s.leaveToClass,
            m = s.leaveActiveClass,
            h = s.beforeLeave,
            f = s.leave,
            p = s.afterLeave,
            M = s.leaveCancelled,
            y = s.delayLeave,
            v = s.duration,
            L = !1 !== d && !di,
            g = ua(f),
            Y = c(o(v) ? v.leave : v),
            k = i._leaveCb = w(function () {
          i.parentNode && i.parentNode._pending && (i.parentNode._pending[e.key] = null), L && (ta(i, _), ta(i, m)), k.cancelled ? (L && ta(i, l), M && M(i)) : (t(), p && p(i)), i._leaveCb = null;
        });y ? y(r) : r();
      }
    }function da(e) {
      return "number" == typeof e && !isNaN(e);
    }function ua(e) {
      if (n(e)) return !1;var t = e.fns;return a(t) ? ua(Array.isArray(t) ? t[0] : t) : (e._length || e.length) > 1;
    }function la(e, t) {
      !0 !== t.data.show && sa(t);
    }function _a(e, t, n) {
      ca(e, t, n), (oi || ui) && setTimeout(function () {
        ca(e, t, n);
      }, 0);
    }function ca(e, t, n) {
      var a = t.value,
          r = e.multiple;if (!r || Array.isArray(a)) {
        for (var i, s, o = 0, d = e.options.length; o < d; o++) {
          if (s = e.options[o], r) i = k(a, ha(s)) > -1, s.selected !== i && (s.selected = i);else if (Y(ha(s), a)) return void (e.selectedIndex !== o && (e.selectedIndex = o));
        }r || (e.selectedIndex = -1);
      }
    }function ma(e, t) {
      return t.every(function (t) {
        return !Y(t, e);
      });
    }function ha(e) {
      return "_value" in e ? e._value : e.value;
    }function fa(e) {
      e.target.composing = !0;
    }function pa(e) {
      e.target.composing && (e.target.composing = !1, Ma(e.target, "input"));
    }function Ma(e, t) {
      var n = document.createEvent("HTMLEvents");n.initEvent(t, !0, !0), e.dispatchEvent(n);
    }function ya(e) {
      return !e.componentInstance || e.data && e.data.transition ? e : ya(e.componentInstance._vnode);
    }function va(e) {
      var t = e && e.componentOptions;return t && t.Ctor.options.abstract ? va(fe(t.children)) : e;
    }function La(e) {
      var t = {},
          n = e.$options;for (var a in n.propsData) {
        t[a] = e[a];
      }var r = n._parentListeners;for (var i in r) {
        t[Ur(i)] = r[i];
      }return t;
    }function ga(e, t) {
      if (/\d-keep-alive$/.test(t.tag)) return e("keep-alive", { props: t.componentOptions.propsData });
    }function Ya(e) {
      for (; e = e.parent;) {
        if (e.data.transition) return !0;
      }
    }function ka(e, t) {
      return t.key === e.key && t.tag === e.tag;
    }function wa(e) {
      e.elm._moveCb && e.elm._moveCb(), e.elm._enterCb && e.elm._enterCb();
    }function Da(e) {
      e.data.newPos = e.elm.getBoundingClientRect();
    }function Ta(e) {
      var t = e.data.pos,
          n = e.data.newPos,
          a = t.left - n.left,
          r = t.top - n.top;if (a || r) {
        e.data.moved = !0;var i = e.elm.style;i.transform = i.WebkitTransform = "translate(" + a + "px," + r + "px)", i.transitionDuration = "0s";
      }
    }function ba(e, t) {
      var n = t ? Yo(t) : Lo;if (n.test(e)) {
        for (var a, r, i = [], s = n.lastIndex = 0; a = n.exec(e);) {
          r = a.index, r > s && i.push(JSON.stringify(e.slice(s, r)));var o = fn(a[1].trim());i.push("_s(" + o + ")"), s = r + a[0].length;
        }return s < e.length && i.push(JSON.stringify(e.slice(s))), i.join("+");
      }
    }function Sa(e, t) {
      var n = (t.warn, wn(e, "class"));n && (e.staticClass = JSON.stringify(n));var a = kn(e, "class", !1);a && (e.classBinding = a);
    }function Ha(e) {
      var t = "";return e.staticClass && (t += "staticClass:" + e.staticClass + ","), e.classBinding && (t += "class:" + e.classBinding + ","), t;
    }function xa(e, t) {
      var n = (t.warn, wn(e, "style"));if (n) {
        e.staticStyle = JSON.stringify(Is(n));
      }var a = kn(e, "style", !1);a && (e.styleBinding = a);
    }function ja(e) {
      var t = "";return e.staticStyle && (t += "staticStyle:" + e.staticStyle + ","), e.styleBinding && (t += "style:(" + e.styleBinding + "),"), t;
    }function Fa(e, t) {
      t.value && vn(e, "textContent", "_s(" + t.value + ")");
    }function Ca(e, t) {
      t.value && vn(e, "innerHTML", "_s(" + t.value + ")");
    }function Oa(e, t) {
      var n = t ? nd : td;return e.replace(n, function (e) {
        return ed[e];
      });
    }function Ea(e, t) {
      function n(t) {
        l += t, e = e.substring(t);
      }function a(e, n, a) {
        var r, o;if (null == n && (n = l), null == a && (a = l), e && (o = e.toLowerCase()), e) for (r = s.length - 1; r >= 0 && s[r].lowerCasedTag !== o; r--) {} else r = 0;if (r >= 0) {
          for (var d = s.length - 1; d >= r; d--) {
            t.end && t.end(s[d].tag, n, a);
          }s.length = r, i = r && s[r - 1].tag;
        } else "br" === o ? t.start && t.start(e, [], !0, n, a) : "p" === o && (t.start && t.start(e, [], !1, n, a), t.end && t.end(e, n, a));
      }for (var r, i, s = [], o = t.expectHTML, d = t.isUnaryTag || qr, u = t.canBeLeftOpenTag || qr, l = 0; e;) {
        if (r = e, i && Zo(i)) {
          var _ = 0,
              c = i.toLowerCase(),
              m = Xo[c] || (Xo[c] = new RegExp("([\\s\\S]*?)(</" + c + "[^>]*>)", "i")),
              h = e.replace(m, function (e, n, a) {
            return _ = a.length, Zo(c) || "noscript" === c || (n = n.replace(/<!--([\s\S]*?)-->/g, "$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g, "$1")), rd(c, n) && (n = n.slice(1)), t.chars && t.chars(n), "";
          });l += e.length - h.length, e = h, a(c, l - _, l);
        } else {
          var f = e.indexOf("<");if (0 === f) {
            if (zo.test(e)) {
              var p = e.indexOf("--\x3e");if (p >= 0) {
                t.shouldKeepComment && t.comment(e.substring(4, p)), n(p + 3);continue;
              }
            }if ($o.test(e)) {
              var M = e.indexOf("]>");if (M >= 0) {
                n(M + 2);continue;
              }
            }var y = e.match(Wo);if (y) {
              n(y[0].length);continue;
            }var v = e.match(Ao);if (v) {
              var L = l;n(v[0].length), a(v[1], L, l);continue;
            }var g = function () {
              var t = e.match(Eo);if (t) {
                var a = { tagName: t[1], attrs: [], start: l };n(t[0].length);for (var r, i; !(r = e.match(Po)) && (i = e.match(Fo));) {
                  n(i[0].length), a.attrs.push(i);
                }if (r) return a.unarySlash = r[1], n(r[0].length), a.end = l, a;
              }
            }();if (g) {
              !function (e) {
                var n = e.tagName,
                    r = e.unarySlash;o && ("p" === i && Ho(n) && a(i), u(n) && i === n && a(n));for (var l = d(n) || !!r, _ = e.attrs.length, c = new Array(_), m = 0; m < _; m++) {
                  var h = e.attrs[m];No && -1 === h[0].indexOf('""') && ("" === h[3] && delete h[3], "" === h[4] && delete h[4], "" === h[5] && delete h[5]);var f = h[3] || h[4] || h[5] || "";c[m] = { name: h[1], value: Oa(f, t.shouldDecodeNewlines) };
                }l || (s.push({ tag: n, lowerCasedTag: n.toLowerCase(), attrs: c }), i = n), t.start && t.start(n, c, l, e.start, e.end);
              }(g), rd(i, e) && n(1);continue;
            }
          }var Y = void 0,
              k = void 0,
              w = void 0;if (f >= 0) {
            for (k = e.slice(f); !(Ao.test(k) || Eo.test(k) || zo.test(k) || $o.test(k) || (w = k.indexOf("<", 1)) < 0);) {
              f += w, k = e.slice(f);
            }Y = e.substring(0, f), n(f);
          }f < 0 && (Y = e, e = ""), t.chars && Y && t.chars(Y);
        }if (e === r) {
          t.chars && t.chars(e);break;
        }
      }a();
    }function Pa(e, t) {
      function n(e) {
        e.pre && (o = !1), Go(e.tag) && (d = !1);
      }Io = t.warn || Mn, Go = t.isPreTag || qr, Vo = t.mustUseProp || qr, qo = t.getTagNamespace || qr, Jo = yn(t.modules, "transformNode"), Uo = yn(t.modules, "preTransformNode"), Bo = yn(t.modules, "postTransformNode"), Ro = t.delimiters;var a,
          r,
          i = [],
          s = !1 !== t.preserveWhitespace,
          o = !1,
          d = !1;return Ea(e, { warn: Io, expectHTML: t.expectHTML, isUnaryTag: t.isUnaryTag, canBeLeftOpenTag: t.canBeLeftOpenTag, shouldDecodeNewlines: t.shouldDecodeNewlines, shouldKeepComment: t.comments, start: function start(e, s, u) {
          var l = r && r.ns || qo(e);oi && "svg" === l && (s = tr(s));var _ = { type: 1, tag: e, attrsList: s, attrsMap: Za(s), parent: r, children: [] };l && (_.ns = l), er(_) && !yi() && (_.forbidden = !0);for (var c = 0; c < Uo.length; c++) {
            Uo[c](_, t);
          }if (o || (Aa(_), _.pre && (o = !0)), Go(_.tag) && (d = !0), o) Wa(_);else {
            Na(_), Ia(_), Ba(_), za(_), _.plain = !_.key && !s.length, $a(_), Ga(_), Va(_);for (var m = 0; m < Jo.length; m++) {
              Jo[m](_, t);
            }qa(_);
          }if (a ? i.length || a.if && (_.elseif || _.else) && Ua(a, { exp: _.elseif, block: _ }) : a = _, r && !_.forbidden) if (_.elseif || _.else) Ra(_, r);else if (_.slotScope) {
            r.plain = !1;var h = _.slotTarget || '"default"';(r.scopedSlots || (r.scopedSlots = {}))[h] = _;
          } else r.children.push(_), _.parent = r;u ? n(_) : (r = _, i.push(_));for (var f = 0; f < Bo.length; f++) {
            Bo[f](_, t);
          }
        }, end: function end() {
          var e = i[i.length - 1],
              t = e.children[e.children.length - 1];t && 3 === t.type && " " === t.text && !d && e.children.pop(), i.length -= 1, r = i[i.length - 1], n(e);
        }, chars: function chars(e) {
          if (r && (!oi || "textarea" !== r.tag || r.attrsMap.placeholder !== e)) {
            var t = r.children;if (e = d || e.trim() ? Xa(r) ? e : cd(e) : s && t.length ? " " : "") {
              var n;!o && " " !== e && (n = ba(e, Ro)) ? t.push({ type: 2, expression: n, text: e }) : " " === e && t.length && " " === t[t.length - 1].text || t.push({ type: 3, text: e });
            }
          }
        }, comment: function comment(e) {
          r.children.push({ type: 3, text: e, isComment: !0 });
        } }), a;
    }function Aa(e) {
      null != wn(e, "v-pre") && (e.pre = !0);
    }function Wa(e) {
      var t = e.attrsList.length;if (t) for (var n = e.attrs = new Array(t), a = 0; a < t; a++) {
        n[a] = { name: e.attrsList[a].name, value: JSON.stringify(e.attrsList[a].value) };
      } else e.pre || (e.plain = !0);
    }function za(e) {
      var t = kn(e, "key");t && (e.key = t);
    }function $a(e) {
      var t = kn(e, "ref");t && (e.ref = t, e.refInFor = Ka(e));
    }function Na(e) {
      var t;if (t = wn(e, "v-for")) {
        var n = t.match(od);if (!n) return;e.for = n[2].trim();var a = n[1].trim(),
            r = a.match(dd);r ? (e.alias = r[1].trim(), e.iterator1 = r[2].trim(), r[3] && (e.iterator2 = r[3].trim())) : e.alias = a;
      }
    }function Ia(e) {
      var t = wn(e, "v-if");if (t) e.if = t, Ua(e, { exp: t, block: e });else {
        null != wn(e, "v-else") && (e.else = !0);var n = wn(e, "v-else-if");n && (e.elseif = n);
      }
    }function Ra(e, t) {
      var n = Ja(t.children);n && n.if && Ua(n, { exp: e.elseif, block: e });
    }function Ja(e) {
      for (var t = e.length; t--;) {
        if (1 === e[t].type) return e[t];e.pop();
      }
    }function Ua(e, t) {
      e.ifConditions || (e.ifConditions = []), e.ifConditions.push(t);
    }function Ba(e) {
      null != wn(e, "v-once") && (e.once = !0);
    }function Ga(e) {
      if ("slot" === e.tag) e.slotName = kn(e, "name");else {
        var t = kn(e, "slot");t && (e.slotTarget = '""' === t ? '"default"' : t, Ln(e, "slot", t)), "template" === e.tag && (e.slotScope = wn(e, "scope"));
      }
    }function Va(e) {
      var t;(t = kn(e, "is")) && (e.component = t), null != wn(e, "inline-template") && (e.inlineTemplate = !0);
    }function qa(e) {
      var t,
          n,
          a,
          r,
          i,
          s,
          o,
          d = e.attrsList;for (t = 0, n = d.length; t < n; t++) {
        if (a = r = d[t].name, i = d[t].value, sd.test(a)) {
          if (e.hasBindings = !0, s = Qa(a), s && (a = a.replace(_d, "")), ld.test(a)) a = a.replace(ld, ""), i = fn(i), o = !1, s && (s.prop && (o = !0, "innerHtml" === (a = Ur(a)) && (a = "innerHTML")), s.camel && (a = Ur(a)), s.sync && Yn(e, "update:" + Ur(a), Tn(i, "$event"))), o || !e.component && Vo(e.tag, e.attrsMap.type, a) ? vn(e, a, i) : Ln(e, a, i);else if (id.test(a)) a = a.replace(id, ""), Yn(e, a, i, s, !1, Io);else {
            a = a.replace(sd, "");var u = a.match(ud),
                l = u && u[1];l && (a = a.slice(0, -(l.length + 1))), gn(e, a, r, i, l, s);
          }
        } else {
          Ln(e, a, JSON.stringify(i));
        }
      }
    }function Ka(e) {
      for (var t = e; t;) {
        if (void 0 !== t.for) return !0;t = t.parent;
      }return !1;
    }function Qa(e) {
      var t = e.match(_d);if (t) {
        var n = {};return t.forEach(function (e) {
          n[e.slice(1)] = !0;
        }), n;
      }
    }function Za(e) {
      for (var t = {}, n = 0, a = e.length; n < a; n++) {
        t[e[n].name] = e[n].value;
      }return t;
    }function Xa(e) {
      return "script" === e.tag || "style" === e.tag;
    }function er(e) {
      return "style" === e.tag || "script" === e.tag && (!e.attrsMap.type || "text/javascript" === e.attrsMap.type);
    }function tr(e) {
      for (var t = [], n = 0; n < e.length; n++) {
        var a = e[n];md.test(a.name) || (a.name = a.name.replace(hd, ""), t.push(a));
      }return t;
    }function nr(e, t) {
      e && (Ko = fd(t.staticKeys || ""), Qo = t.isReservedTag || qr, rr(e), ir(e, !1));
    }function ar(e) {
      return m("type,tag,attrsList,attrsMap,plain,parent,children,attrs" + (e ? "," + e : ""));
    }function rr(e) {
      if (e.static = sr(e), 1 === e.type) {
        if (!Qo(e.tag) && "slot" !== e.tag && null == e.attrsMap["inline-template"]) return;for (var t = 0, n = e.children.length; t < n; t++) {
          var a = e.children[t];rr(a), a.static || (e.static = !1);
        }if (e.ifConditions) for (var r = 1, i = e.ifConditions.length; r < i; r++) {
          var s = e.ifConditions[r].block;rr(s), s.static || (e.static = !1);
        }
      }
    }function ir(e, t) {
      if (1 === e.type) {
        if ((e.static || e.once) && (e.staticInFor = t), e.static && e.children.length && (1 !== e.children.length || 3 !== e.children[0].type)) return void (e.staticRoot = !0);if (e.staticRoot = !1, e.children) for (var n = 0, a = e.children.length; n < a; n++) {
          ir(e.children[n], t || !!e.for);
        }if (e.ifConditions) for (var r = 1, i = e.ifConditions.length; r < i; r++) {
          ir(e.ifConditions[r].block, t);
        }
      }
    }function sr(e) {
      return 2 !== e.type && (3 === e.type || !(!e.pre && (e.hasBindings || e.if || e.for || Nr(e.tag) || !Qo(e.tag) || or(e) || !Object.keys(e).every(Ko))));
    }function or(e) {
      for (; e.parent;) {
        if (e = e.parent, "template" !== e.tag) return !1;if (e.for) return !0;
      }return !1;
    }function dr(e, t, n) {
      var a = t ? "nativeOn:{" : "on:{";for (var r in e) {
        a += '"' + r + '":' + ur(r, e[r]) + ",";
      }return a.slice(0, -1) + "}";
    }function ur(e, t) {
      if (!t) return "function(){}";if (Array.isArray(t)) return "[" + t.map(function (t) {
        return ur(e, t);
      }).join(",") + "]";var n = Md.test(t.value),
          a = pd.test(t.value);if (t.modifiers) {
        var r = "",
            i = "",
            s = [];for (var o in t.modifiers) {
          Ld[o] ? (i += Ld[o], yd[o] && s.push(o)) : s.push(o);
        }s.length && (r += lr(s)), i && (r += i);return "function($event){" + r + (n ? t.value + "($event)" : a ? "(" + t.value + ")($event)" : t.value) + "}";
      }return n || a ? t.value : "function($event){" + t.value + "}";
    }function lr(e) {
      return "if(!('button' in $event)&&" + e.map(_r).join("&&") + ")return null;";
    }function _r(e) {
      var t = parseInt(e, 10);if (t) return "$event.keyCode!==" + t;var n = yd[e];return "_k($event.keyCode," + JSON.stringify(e) + (n ? "," + JSON.stringify(n) : "") + ")";
    }function cr(e, t) {
      e.wrapListeners = function (e) {
        return "_g(" + e + "," + t.value + ")";
      };
    }function mr(e, t) {
      e.wrapData = function (n) {
        return "_b(" + n + ",'" + e.tag + "'," + t.value + "," + (t.modifiers && t.modifiers.prop ? "true" : "false") + (t.modifiers && t.modifiers.sync ? ",true" : "") + ")";
      };
    }function hr(e, t) {
      var n = new Yd(t);return { render: "with(this){return " + (e ? fr(e, n) : '_c("div")') + "}", staticRenderFns: n.staticRenderFns };
    }function fr(e, t) {
      if (e.staticRoot && !e.staticProcessed) return pr(e, t);if (e.once && !e.onceProcessed) return Mr(e, t);if (e.for && !e.forProcessed) return Lr(e, t);if (e.if && !e.ifProcessed) return yr(e, t);if ("template" !== e.tag || e.slotTarget) {
        if ("slot" === e.tag) return Cr(e, t);var n;if (e.component) n = Or(e.component, e, t);else {
          var a = e.plain ? void 0 : gr(e, t),
              r = e.inlineTemplate ? null : br(e, t, !0);n = "_c('" + e.tag + "'" + (a ? "," + a : "") + (r ? "," + r : "") + ")";
        }for (var i = 0; i < t.transforms.length; i++) {
          n = t.transforms[i](e, n);
        }return n;
      }return br(e, t) || "void 0";
    }function pr(e, t) {
      return e.staticProcessed = !0, t.staticRenderFns.push("with(this){return " + fr(e, t) + "}"), "_m(" + (t.staticRenderFns.length - 1) + (e.staticInFor ? ",true" : "") + ")";
    }function Mr(e, t) {
      if (e.onceProcessed = !0, e.if && !e.ifProcessed) return yr(e, t);if (e.staticInFor) {
        for (var n = "", a = e.parent; a;) {
          if (a.for) {
            n = a.key;break;
          }a = a.parent;
        }return n ? "_o(" + fr(e, t) + "," + t.onceId++ + "," + n + ")" : fr(e, t);
      }return pr(e, t);
    }function yr(e, t, n, a) {
      return e.ifProcessed = !0, vr(e.ifConditions.slice(), t, n, a);
    }function vr(e, t, n, a) {
      function r(e) {
        return n ? n(e, t) : e.once ? Mr(e, t) : fr(e, t);
      }if (!e.length) return a || "_e()";var i = e.shift();return i.exp ? "(" + i.exp + ")?" + r(i.block) + ":" + vr(e, t, n, a) : "" + r(i.block);
    }function Lr(e, t, n, a) {
      var r = e.for,
          i = e.alias,
          s = e.iterator1 ? "," + e.iterator1 : "",
          o = e.iterator2 ? "," + e.iterator2 : "";return e.forProcessed = !0, (a || "_l") + "((" + r + "),function(" + i + s + o + "){return " + (n || fr)(e, t) + "})";
    }function gr(e, t) {
      var n = "{",
          a = Yr(e, t);a && (n += a + ","), e.key && (n += "key:" + e.key + ","), e.ref && (n += "ref:" + e.ref + ","), e.refInFor && (n += "refInFor:true,"), e.pre && (n += "pre:true,"), e.component && (n += 'tag:"' + e.tag + '",');for (var r = 0; r < t.dataGenFns.length; r++) {
        n += t.dataGenFns[r](e);
      }if (e.attrs && (n += "attrs:{" + Er(e.attrs) + "},"), e.props && (n += "domProps:{" + Er(e.props) + "},"), e.events && (n += dr(e.events, !1, t.warn) + ","), e.nativeEvents && (n += dr(e.nativeEvents, !0, t.warn) + ","), e.slotTarget && (n += "slot:" + e.slotTarget + ","), e.scopedSlots && (n += wr(e.scopedSlots, t) + ","), e.model && (n += "model:{value:" + e.model.value + ",callback:" + e.model.callback + ",expression:" + e.model.expression + "},"), e.inlineTemplate) {
        var i = kr(e, t);i && (n += i + ",");
      }return n = n.replace(/,$/, "") + "}", e.wrapData && (n = e.wrapData(n)), e.wrapListeners && (n = e.wrapListeners(n)), n;
    }function Yr(e, t) {
      var n = e.directives;if (n) {
        var a,
            r,
            i,
            s,
            o = "directives:[",
            d = !1;for (a = 0, r = n.length; a < r; a++) {
          i = n[a], s = !0;var u = t.directives[i.name];u && (s = !!u(e, i, t.warn)), s && (d = !0, o += '{name:"' + i.name + '",rawName:"' + i.rawName + '"' + (i.value ? ",value:(" + i.value + "),expression:" + JSON.stringify(i.value) : "") + (i.arg ? ',arg:"' + i.arg + '"' : "") + (i.modifiers ? ",modifiers:" + JSON.stringify(i.modifiers) : "") + "},");
        }return d ? o.slice(0, -1) + "]" : void 0;
      }
    }function kr(e, t) {
      var n = e.children[0];if (1 === n.type) {
        var a = hr(n, t.options);return "inlineTemplate:{render:function(){" + a.render + "},staticRenderFns:[" + a.staticRenderFns.map(function (e) {
          return "function(){" + e + "}";
        }).join(",") + "]}";
      }
    }function wr(e, t) {
      return "scopedSlots:_u([" + Object.keys(e).map(function (n) {
        return Dr(n, e[n], t);
      }).join(",") + "])";
    }function Dr(e, t, n) {
      return t.for && !t.forProcessed ? Tr(e, t, n) : "{key:" + e + ",fn:function(" + String(t.attrsMap.scope) + "){return " + ("template" === t.tag ? br(t, n) || "void 0" : fr(t, n)) + "}}";
    }function Tr(e, t, n) {
      var a = t.for,
          r = t.alias,
          i = t.iterator1 ? "," + t.iterator1 : "",
          s = t.iterator2 ? "," + t.iterator2 : "";return t.forProcessed = !0, "_l((" + a + "),function(" + r + i + s + "){return " + Dr(e, t, n) + "})";
    }function br(e, t, n, a, r) {
      var i = e.children;if (i.length) {
        var s = i[0];if (1 === i.length && s.for && "template" !== s.tag && "slot" !== s.tag) return (a || fr)(s, t);var o = n ? Sr(i, t.maybeComponent) : 0,
            d = r || xr;return "[" + i.map(function (e) {
          return d(e, t);
        }).join(",") + "]" + (o ? "," + o : "");
      }
    }function Sr(e, t) {
      for (var n = 0, a = 0; a < e.length; a++) {
        var r = e[a];if (1 === r.type) {
          if (Hr(r) || r.ifConditions && r.ifConditions.some(function (e) {
            return Hr(e.block);
          })) {
            n = 2;break;
          }(t(r) || r.ifConditions && r.ifConditions.some(function (e) {
            return t(e.block);
          })) && (n = 1);
        }
      }return n;
    }function Hr(e) {
      return void 0 !== e.for || "template" === e.tag || "slot" === e.tag;
    }function xr(e, t) {
      return 1 === e.type ? fr(e, t) : 3 === e.type && e.isComment ? Fr(e) : jr(e);
    }function jr(e) {
      return "_v(" + (2 === e.type ? e.expression : Pr(JSON.stringify(e.text))) + ")";
    }function Fr(e) {
      return "_e(" + JSON.stringify(e.text) + ")";
    }function Cr(e, t) {
      var n = e.slotName || '"default"',
          a = br(e, t),
          r = "_t(" + n + (a ? "," + a : ""),
          i = e.attrs && "{" + e.attrs.map(function (e) {
        return Ur(e.name) + ":" + e.value;
      }).join(",") + "}",
          s = e.attrsMap["v-bind"];return !i && !s || a || (r += ",null"), i && (r += "," + i), s && (r += (i ? "" : ",null") + "," + s), r + ")";
    }function Or(e, t, n) {
      var a = t.inlineTemplate ? null : br(t, n, !0);return "_c(" + e + "," + gr(t, n) + (a ? "," + a : "") + ")";
    }function Er(e) {
      for (var t = "", n = 0; n < e.length; n++) {
        var a = e[n];t += '"' + a.name + '":' + Pr(a.value) + ",";
      }return t.slice(0, -1);
    }function Pr(e) {
      return e.replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }function Ar(e, t) {
      try {
        return new Function(e);
      } catch (n) {
        return t.push({ err: n, code: e }), g;
      }
    }function Wr(e) {
      var t = Object.create(null);return function (n, a, r) {
        a = a || {};var i = a.delimiters ? String(a.delimiters) + n : n;if (t[i]) return t[i];var s = e(n, a),
            o = {},
            d = [];return o.render = Ar(s.render, d), o.staticRenderFns = s.staticRenderFns.map(function (e) {
          return Ar(e, d);
        }), t[i] = o;
      };
    }function zr(e) {
      if (e.outerHTML) return e.outerHTML;var t = document.createElement("div");return t.appendChild(e.cloneNode(!0)), t.innerHTML;
    }var $r = Object.prototype.toString,
        Nr = m("slot,component", !0),
        Ir = m("key,ref,slot,is"),
        Rr = Object.prototype.hasOwnProperty,
        Jr = /-(\w)/g,
        Ur = p(function (e) {
      return e.replace(Jr, function (e, t) {
        return t ? t.toUpperCase() : "";
      });
    }),
        Br = p(function (e) {
      return e.charAt(0).toUpperCase() + e.slice(1);
    }),
        Gr = /\B([A-Z])/g,
        Vr = p(function (e) {
      return e.replace(Gr, "-$1").toLowerCase();
    }),
        qr = function qr(e, t, n) {
      return !1;
    },
        Kr = function Kr(e) {
      return e;
    },
        Qr = "data-server-rendered",
        Zr = ["component", "directive", "filter"],
        Xr = ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated"],
        ei = { optionMergeStrategies: Object.create(null), silent: !1, productionTip: !1, devtools: !1, performance: !1, errorHandler: null, warnHandler: null, ignoredElements: [], keyCodes: Object.create(null), isReservedTag: qr, isReservedAttr: qr, isUnknownElement: qr, getTagNamespace: g, parsePlatformTagName: Kr, mustUseProp: qr, _lifecycleHooks: Xr },
        ti = Object.freeze({}),
        ni = /[^\w.$]/,
        ai = g,
        ri = "__proto__" in {},
        ii = "undefined" != typeof window,
        si = ii && window.navigator.userAgent.toLowerCase(),
        oi = si && /msie|trident/.test(si),
        di = si && si.indexOf("msie 9.0") > 0,
        ui = si && si.indexOf("edge/") > 0,
        li = si && si.indexOf("android") > 0,
        _i = si && /iphone|ipad|ipod|ios/.test(si),
        ci = si && /chrome\/\d+/.test(si) && !ui,
        mi = {}.watch,
        hi = !1;if (ii) try {
      var fi = {};Object.defineProperty(fi, "passive", { get: function get() {
          hi = !0;
        } }), window.addEventListener("test-passive", null, fi);
    } catch (e) {}var pi,
        Mi,
        yi = function yi() {
      return void 0 === pi && (pi = !ii && void 0 !== t && "server" === t.process.env.VUE_ENV), pi;
    },
        vi = ii && window.__VUE_DEVTOOLS_GLOBAL_HOOK__,
        Li = "undefined" != typeof Symbol && H(Symbol) && "undefined" != typeof Reflect && H(Reflect.ownKeys),
        gi = function () {
      function e() {
        a = !1;var e = n.slice(0);n.length = 0;for (var t = 0; t < e.length; t++) {
          e[t]();
        }
      }var t,
          n = [],
          a = !1;if ("undefined" != typeof Promise && H(Promise)) {
        var r = Promise.resolve(),
            i = function i(e) {};t = function t() {
          r.then(e).catch(i), _i && setTimeout(g);
        };
      } else if (oi || "undefined" == typeof MutationObserver || !H(MutationObserver) && "[object MutationObserverConstructor]" !== MutationObserver.toString()) t = function t() {
        setTimeout(e, 0);
      };else {
        var s = 1,
            o = new MutationObserver(e),
            d = document.createTextNode(String(s));o.observe(d, { characterData: !0 }), t = function t() {
          s = (s + 1) % 2, d.data = String(s);
        };
      }return function (e, r) {
        var i;if (n.push(function () {
          if (e) try {
            e.call(r);
          } catch (e) {
            S(e, r, "nextTick");
          } else i && i(r);
        }), a || (a = !0, t()), !e && "undefined" != typeof Promise) return new Promise(function (e, t) {
          i = e;
        });
      };
    }();Mi = "undefined" != typeof Set && H(Set) ? Set : function () {
      function e() {
        this.set = Object.create(null);
      }return e.prototype.has = function (e) {
        return !0 === this.set[e];
      }, e.prototype.add = function (e) {
        this.set[e] = !0;
      }, e.prototype.clear = function () {
        this.set = Object.create(null);
      }, e;
    }();var Yi = 0,
        ki = function ki() {
      this.id = Yi++, this.subs = [];
    };ki.prototype.addSub = function (e) {
      this.subs.push(e);
    }, ki.prototype.removeSub = function (e) {
      h(this.subs, e);
    }, ki.prototype.depend = function () {
      ki.target && ki.target.addDep(this);
    }, ki.prototype.notify = function () {
      for (var e = this.subs.slice(), t = 0, n = e.length; t < n; t++) {
        e[t].update();
      }
    }, ki.target = null;var wi = [],
        Di = Array.prototype,
        Ti = Object.create(Di);["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(function (e) {
      var t = Di[e];T(Ti, e, function () {
        for (var n = [], a = arguments.length; a--;) {
          n[a] = arguments[a];
        }var r,
            i = t.apply(this, n),
            s = this.__ob__;switch (e) {case "push":case "unshift":
            r = n;break;case "splice":
            r = n.slice(2);}return r && s.observeArray(r), s.dep.notify(), i;
      });
    });var bi = Object.getOwnPropertyNames(Ti),
        Si = { shouldConvert: !0 },
        Hi = function Hi(e) {
      if (this.value = e, this.dep = new ki(), this.vmCount = 0, T(e, "__ob__", this), Array.isArray(e)) {
        (ri ? F : C)(e, Ti, bi), this.observeArray(e);
      } else this.walk(e);
    };Hi.prototype.walk = function (e) {
      for (var t = Object.keys(e), n = 0; n < t.length; n++) {
        E(e, t[n], e[t[n]]);
      }
    }, Hi.prototype.observeArray = function (e) {
      for (var t = 0, n = e.length; t < n; t++) {
        O(e[t]);
      }
    };var xi = ei.optionMergeStrategies;xi.data = function (e, t, n) {
      return n ? $(e, t, n) : t && "function" != typeof t ? e : $.call(this, e, t);
    }, Xr.forEach(function (e) {
      xi[e] = N;
    }), Zr.forEach(function (e) {
      xi[e + "s"] = I;
    }), xi.watch = function (e, t) {
      if (e === mi && (e = void 0), t === mi && (t = void 0), !t) return Object.create(e || null);if (!e) return t;var n = {};v(n, e);for (var a in t) {
        var r = n[a],
            i = t[a];r && !Array.isArray(r) && (r = [r]), n[a] = r ? r.concat(i) : Array.isArray(i) ? i : [i];
      }return n;
    }, xi.props = xi.methods = xi.inject = xi.computed = function (e, t) {
      if (!e) return t;var n = Object.create(null);return v(n, e), t && v(n, t), n;
    }, xi.provide = $;var ji = function ji(e, t) {
      return void 0 === t ? e : t;
    },
        Fi = function Fi(e, t, n, a, r, i, s, o) {
      this.tag = e, this.data = t, this.children = n, this.text = a, this.elm = r, this.ns = void 0, this.context = i, this.functionalContext = void 0, this.key = t && t.key, this.componentOptions = s, this.componentInstance = void 0, this.parent = void 0, this.raw = !1, this.isStatic = !1, this.isRootInsert = !0, this.isComment = !1, this.isCloned = !1, this.isOnce = !1, this.asyncFactory = o, this.asyncMeta = void 0, this.isAsyncPlaceholder = !1;
    },
        Ci = { child: {} };Ci.child.get = function () {
      return this.componentInstance;
    }, Object.defineProperties(Fi.prototype, Ci);var Oi,
        Ei = function Ei(e) {
      void 0 === e && (e = "");var t = new Fi();return t.text = e, t.isComment = !0, t;
    },
        Pi = p(function (e) {
      var t = "&" === e.charAt(0);e = t ? e.slice(1) : e;var n = "~" === e.charAt(0);e = n ? e.slice(1) : e;var a = "!" === e.charAt(0);return e = a ? e.slice(1) : e, { name: e, plain: !(t || n || a), once: n, capture: a, passive: t };
    }),
        Ai = null,
        Wi = [],
        zi = [],
        $i = {},
        Ni = !1,
        Ii = !1,
        Ri = 0,
        Ji = 0,
        Ui = function Ui(e, t, n, a) {
      this.vm = e, e._watchers.push(this), a ? (this.deep = !!a.deep, this.user = !!a.user, this.lazy = !!a.lazy, this.sync = !!a.sync) : this.deep = this.user = this.lazy = this.sync = !1, this.cb = n, this.id = ++Ji, this.active = !0, this.dirty = this.lazy, this.deps = [], this.newDeps = [], this.depIds = new Mi(), this.newDepIds = new Mi(), this.expression = "", "function" == typeof t ? this.getter = t : (this.getter = b(t), this.getter || (this.getter = function () {})), this.value = this.lazy ? void 0 : this.get();
    };Ui.prototype.get = function () {
      x(this);var e,
          t = this.vm;try {
        e = this.getter.call(t, t);
      } catch (e) {
        if (!this.user) throw e;S(e, t, 'getter for watcher "' + this.expression + '"');
      } finally {
        this.deep && Pe(e), j(), this.cleanupDeps();
      }return e;
    }, Ui.prototype.addDep = function (e) {
      var t = e.id;this.newDepIds.has(t) || (this.newDepIds.add(t), this.newDeps.push(e), this.depIds.has(t) || e.addSub(this));
    }, Ui.prototype.cleanupDeps = function () {
      for (var e = this, t = this.deps.length; t--;) {
        var n = e.deps[t];e.newDepIds.has(n.id) || n.removeSub(e);
      }var a = this.depIds;this.depIds = this.newDepIds, this.newDepIds = a, this.newDepIds.clear(), a = this.deps, this.deps = this.newDeps, this.newDeps = a, this.newDeps.length = 0;
    }, Ui.prototype.update = function () {
      this.lazy ? this.dirty = !0 : this.sync ? this.run() : Ee(this);
    }, Ui.prototype.run = function () {
      if (this.active) {
        var e = this.get();if (e !== this.value || o(e) || this.deep) {
          var t = this.value;if (this.value = e, this.user) try {
            this.cb.call(this.vm, e, t);
          } catch (e) {
            S(e, this.vm, 'callback for watcher "' + this.expression + '"');
          } else this.cb.call(this.vm, e, t);
        }
      }
    }, Ui.prototype.evaluate = function () {
      this.value = this.get(), this.dirty = !1;
    }, Ui.prototype.depend = function () {
      for (var e = this, t = this.deps.length; t--;) {
        e.deps[t].depend();
      }
    }, Ui.prototype.teardown = function () {
      var e = this;if (this.active) {
        this.vm._isBeingDestroyed || h(this.vm._watchers, this);for (var t = this.deps.length; t--;) {
          e.deps[t].removeSub(e);
        }this.active = !1;
      }
    };var Bi = new Mi(),
        Gi = { enumerable: !0, configurable: !0, get: g, set: g },
        Vi = { lazy: !0 },
        qi = { init: function init(e, t, n, a) {
        if (!e.componentInstance || e.componentInstance._isDestroyed) {
          (e.componentInstance = tt(e, Ai, n, a)).$mount(t ? e.elm : void 0, t);
        } else if (e.data.keepAlive) {
          var r = e;qi.prepatch(r, r);
        }
      }, prepatch: function prepatch(e, t) {
        var n = t.componentOptions;De(t.componentInstance = e.componentInstance, n.propsData, n.listeners, t, n.children);
      }, insert: function insert(e) {
        var t = e.context,
            n = e.componentInstance;n._isMounted || (n._isMounted = !0, He(n, "mounted")), e.data.keepAlive && (t._isMounted ? Ce(n) : be(n, !0));
      }, destroy: function destroy(e) {
        var t = e.componentInstance;t._isDestroyed || (e.data.keepAlive ? Se(t, !0) : t.$destroy());
      } },
        Ki = Object.keys(qi),
        Qi = 1,
        Zi = 2,
        Xi = 0;!function (e) {
      e.prototype._init = function (e) {
        var t = this;t._uid = Xi++, t._isVue = !0, e && e._isComponent ? vt(t, e) : t.$options = B(Lt(t.constructor), e || {}, t), t._renderProxy = t, t._self = t, ke(t), pe(t), yt(t), He(t, "beforeCreate"), Ke(t), ze(t), qe(t), He(t, "created"), t.$options.el && t.$mount(t.$options.el);
      };
    }(kt), function (e) {
      var t = {};t.get = function () {
        return this._data;
      };var n = {};n.get = function () {
        return this._props;
      }, Object.defineProperty(e.prototype, "$data", t), Object.defineProperty(e.prototype, "$props", n), e.prototype.$set = P, e.prototype.$delete = A, e.prototype.$watch = function (e, t, n) {
        var a = this;if (d(t)) return Ve(a, e, t, n);n = n || {}, n.user = !0;var r = new Ui(a, e, t, n);return n.immediate && t.call(a, r.value), function () {
          r.teardown();
        };
      };
    }(kt), function (e) {
      var t = /^hook:/;e.prototype.$on = function (e, n) {
        var a = this,
            r = this;if (Array.isArray(e)) for (var i = 0, s = e.length; i < s; i++) {
          a.$on(e[i], n);
        } else (r._events[e] || (r._events[e] = [])).push(n), t.test(e) && (r._hasHookEvent = !0);return r;
      }, e.prototype.$once = function (e, t) {
        function n() {
          a.$off(e, n), t.apply(a, arguments);
        }var a = this;return n.fn = t, a.$on(e, n), a;
      }, e.prototype.$off = function (e, t) {
        var n = this,
            a = this;if (!arguments.length) return a._events = Object.create(null), a;if (Array.isArray(e)) {
          for (var r = 0, i = e.length; r < i; r++) {
            n.$off(e[r], t);
          }return a;
        }var s = a._events[e];if (!s) return a;if (1 === arguments.length) return a._events[e] = null, a;if (t) for (var o, d = s.length; d--;) {
          if ((o = s[d]) === t || o.fn === t) {
            s.splice(d, 1);break;
          }
        }return a;
      }, e.prototype.$emit = function (e) {
        var t = this,
            n = t._events[e];if (n) {
          n = n.length > 1 ? y(n) : n;for (var a = y(arguments, 1), r = 0, i = n.length; r < i; r++) {
            try {
              n[r].apply(t, a);
            } catch (n) {
              S(n, t, 'event handler for "' + e + '"');
            }
          }
        }return t;
      };
    }(kt), function (e) {
      e.prototype._update = function (e, t) {
        var n = this;n._isMounted && He(n, "beforeUpdate");var a = n.$el,
            r = n._vnode,
            i = Ai;Ai = n, n._vnode = e, r ? n.$el = n.__patch__(r, e) : (n.$el = n.__patch__(n.$el, e, t, !1, n.$options._parentElm, n.$options._refElm), n.$options._parentElm = n.$options._refElm = null), Ai = i, a && (a.__vue__ = null), n.$el && (n.$el.__vue__ = n), n.$vnode && n.$parent && n.$vnode === n.$parent._vnode && (n.$parent.$el = n.$el);
      }, e.prototype.$forceUpdate = function () {
        var e = this;e._watcher && e._watcher.update();
      }, e.prototype.$destroy = function () {
        var e = this;if (!e._isBeingDestroyed) {
          He(e, "beforeDestroy"), e._isBeingDestroyed = !0;var t = e.$parent;!t || t._isBeingDestroyed || e.$options.abstract || h(t.$children, e), e._watcher && e._watcher.teardown();for (var n = e._watchers.length; n--;) {
            e._watchers[n].teardown();
          }e._data.__ob__ && e._data.__ob__.vmCount--, e._isDestroyed = !0, e.__patch__(e._vnode, null), He(e, "destroyed"), e.$off(), e.$el && (e.$el.__vue__ = null);
        }
      };
    }(kt), function (e) {
      e.prototype.$nextTick = function (e) {
        return gi(e, this);
      }, e.prototype._render = function () {
        var e = this,
            t = e.$options,
            n = t.render,
            a = t.staticRenderFns,
            r = t._parentVnode;if (e._isMounted) for (var i in e.$slots) {
          var s = e.$slots[i];s._rendered && (e.$slots[i] = ee(s, !0));
        }e.$scopedSlots = r && r.data.scopedSlots || ti, a && !e._staticTrees && (e._staticTrees = []), e.$vnode = r;var o;try {
          o = n.call(e._renderProxy, e.$createElement);
        } catch (t) {
          S(t, e, "render function"), o = e._vnode;
        }return o instanceof Fi || (o = Ei()), o.parent = r, o;
      }, e.prototype._o = ht, e.prototype._n = c, e.prototype._s = _, e.prototype._l = dt, e.prototype._t = ut, e.prototype._q = Y, e.prototype._i = k, e.prototype._m = mt, e.prototype._f = lt, e.prototype._k = _t, e.prototype._b = ct, e.prototype._v = Z, e.prototype._e = Ei, e.prototype._u = Ye, e.prototype._g = Mt;
    }(kt);var es = [String, RegExp, Array],
        ts = { name: "keep-alive", abstract: !0, props: { include: es, exclude: es }, created: function created() {
        this.cache = Object.create(null);
      }, destroyed: function destroyed() {
        var e = this;for (var t in e.cache) {
          Ct(e.cache[t]);
        }
      }, watch: { include: function include(e) {
          Ft(this.cache, this._vnode, function (t) {
            return jt(e, t);
          });
        }, exclude: function exclude(e) {
          Ft(this.cache, this._vnode, function (t) {
            return !jt(e, t);
          });
        } }, render: function render() {
        var e = fe(this.$slots.default),
            t = e && e.componentOptions;if (t) {
          var n = xt(t);if (n && (this.include && !jt(this.include, n) || this.exclude && jt(this.exclude, n))) return e;var a = null == e.key ? t.Ctor.cid + (t.tag ? "::" + t.tag : "") : e.key;this.cache[a] ? e.componentInstance = this.cache[a].componentInstance : this.cache[a] = e, e.data.keepAlive = !0;
        }return e;
      } },
        ns = { KeepAlive: ts };!function (e) {
      var t = {};t.get = function () {
        return ei;
      }, Object.defineProperty(e, "config", t), e.util = { warn: ai, extend: v, mergeOptions: B, defineReactive: E }, e.set = P, e.delete = A, e.nextTick = gi, e.options = Object.create(null), Zr.forEach(function (t) {
        e.options[t + "s"] = Object.create(null);
      }), e.options._base = e, v(e.options.components, ns), wt(e), Dt(e), Tt(e), Ht(e);
    }(kt), Object.defineProperty(kt.prototype, "$isServer", { get: yi }), Object.defineProperty(kt.prototype, "$ssrContext", { get: function get() {
        return this.$vnode && this.$vnode.ssrContext;
      } }), kt.version = "2.4.4";var as,
        rs,
        is,
        ss,
        os,
        ds,
        us,
        ls,
        _s,
        cs = m("style,class"),
        ms = m("input,textarea,option,select,progress"),
        hs = function hs(e, t, n) {
      return "value" === n && ms(e) && "button" !== t || "selected" === n && "option" === e || "checked" === n && "input" === e || "muted" === n && "video" === e;
    },
        fs = m("contenteditable,draggable,spellcheck"),
        ps = m("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),
        Ms = "http://www.w3.org/1999/xlink",
        ys = function ys(e) {
      return ":" === e.charAt(5) && "xlink" === e.slice(0, 5);
    },
        vs = function vs(e) {
      return ys(e) ? e.slice(6, e.length) : "";
    },
        Ls = function Ls(e) {
      return null == e || !1 === e;
    },
        gs = { svg: "http://www.w3.org/2000/svg", math: "http://www.w3.org/1998/Math/MathML" },
        Ys = m("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),
        ks = m("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0),
        ws = function ws(e) {
      return "pre" === e;
    },
        Ds = function Ds(e) {
      return Ys(e) || ks(e);
    },
        Ts = Object.create(null),
        bs = m("text,number,password,search,email,tel,url"),
        Ss = Object.freeze({ createElement: Jt, createElementNS: Ut, createTextNode: Bt, createComment: Gt, insertBefore: Vt, removeChild: qt, appendChild: Kt, parentNode: Qt, nextSibling: Zt, tagName: Xt, setTextContent: en, setAttribute: tn }),
        Hs = { create: function create(e, t) {
        nn(t);
      }, update: function update(e, t) {
        e.data.ref !== t.data.ref && (nn(e, !0), nn(t));
      }, destroy: function destroy(e) {
        nn(e, !0);
      } },
        xs = new Fi("", {}, []),
        js = ["create", "activate", "update", "remove", "destroy"],
        Fs = { create: on, update: on, destroy: function destroy(e) {
        on(e, xs);
      } },
        Cs = Object.create(null),
        Os = [Hs, Fs],
        Es = { create: cn, update: cn },
        Ps = { create: hn, update: hn },
        As = /[\w).+\-_$\]]/,
        Ws = "__r",
        zs = "__c",
        $s = { create: Nn, update: Nn },
        Ns = { create: In, update: In },
        Is = p(function (e) {
      var t = {},
          n = /;(?![^(]*\))/g,
          a = /:(.+)/;return e.split(n).forEach(function (e) {
        if (e) {
          var n = e.split(a);n.length > 1 && (t[n[0].trim()] = n[1].trim());
        }
      }), t;
    }),
        Rs = /^--/,
        Js = /\s*!important$/,
        Us = function Us(e, t, n) {
      if (Rs.test(t)) e.style.setProperty(t, n);else if (Js.test(n)) e.style.setProperty(t, n.replace(Js, ""), "important");else {
        var a = Gs(t);if (Array.isArray(n)) for (var r = 0, i = n.length; r < i; r++) {
          e.style[a] = n[r];
        } else e.style[a] = n;
      }
    },
        Bs = ["Webkit", "Moz", "ms"],
        Gs = p(function (e) {
      if (_s = _s || document.createElement("div").style, "filter" !== (e = Ur(e)) && e in _s) return e;for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < Bs.length; n++) {
        var a = Bs[n] + t;if (a in _s) return a;
      }
    }),
        Vs = { create: qn, update: qn },
        qs = p(function (e) {
      return { enterClass: e + "-enter", enterToClass: e + "-enter-to", enterActiveClass: e + "-enter-active", leaveClass: e + "-leave", leaveToClass: e + "-leave-to", leaveActiveClass: e + "-leave-active" };
    }),
        Ks = ii && !di,
        Qs = "transition",
        Zs = "animation",
        Xs = "transition",
        eo = "transitionend",
        to = "animation",
        no = "animationend";Ks && (void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (Xs = "WebkitTransition", eo = "webkitTransitionEnd"), void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && (to = "WebkitAnimation", no = "webkitAnimationEnd"));var ao = ii && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout,
        ro = /\b(transform|all)(,|$)/,
        io = ii ? { create: la, activate: la, remove: function remove(e, t) {
        !0 !== e.data.show ? oa(e, t) : t();
      } } : {},
        so = [Es, Ps, $s, Ns, Vs, io],
        oo = so.concat(Os),
        uo = function (e) {
      function t(e) {
        return new Fi(j.tagName(e).toLowerCase(), {}, [], void 0, e);
      }function i(e, t) {
        function n() {
          0 == --n.listeners && o(e);
        }return n.listeners = t, n;
      }function o(e) {
        var t = j.parentNode(e);a(t) && j.removeChild(t, e);
      }function d(e, t, n, i, s) {
        if (e.isRootInsert = !s, !u(e, t, n, i)) {
          var o = e.data,
              d = e.children,
              l = e.tag;a(l) ? (e.elm = e.ns ? j.createElementNS(e.ns, l) : j.createElement(l, e), M(e), h(e, d, t), a(o) && p(e, t), c(n, e.elm, i)) : r(e.isComment) ? (e.elm = j.createComment(e.text), c(n, e.elm, i)) : (e.elm = j.createTextNode(e.text), c(n, e.elm, i));
        }
      }function u(e, t, n, i) {
        var s = e.data;if (a(s)) {
          var o = a(e.componentInstance) && s.keepAlive;if (a(s = s.hook) && a(s = s.init) && s(e, !1, n, i), a(e.componentInstance)) return l(e, t), r(o) && _(e, t, n, i), !0;
        }
      }function l(e, t) {
        a(e.data.pendingInsert) && (t.push.apply(t, e.data.pendingInsert), e.data.pendingInsert = null), e.elm = e.componentInstance.$el, f(e) ? (p(e, t), M(e)) : (nn(e), t.push(e));
      }function _(e, t, n, r) {
        for (var i, s = e; s.componentInstance;) {
          if (s = s.componentInstance._vnode, a(i = s.data) && a(i = i.transition)) {
            for (i = 0; i < H.activate.length; ++i) {
              H.activate[i](xs, s);
            }t.push(s);break;
          }
        }c(n, e.elm, r);
      }function c(e, t, n) {
        a(e) && (a(n) ? n.parentNode === e && j.insertBefore(e, t, n) : j.appendChild(e, t));
      }function h(e, t, n) {
        if (Array.isArray(t)) for (var a = 0; a < t.length; ++a) {
          d(t[a], n, e.elm, null, !0);
        } else s(e.text) && j.appendChild(e.elm, j.createTextNode(e.text));
      }function f(e) {
        for (; e.componentInstance;) {
          e = e.componentInstance._vnode;
        }return a(e.tag);
      }function p(e, t) {
        for (var n = 0; n < H.create.length; ++n) {
          H.create[n](xs, e);
        }b = e.data.hook, a(b) && (a(b.create) && b.create(xs, e), a(b.insert) && t.push(e));
      }function M(e) {
        for (var t, n = e; n;) {
          a(t = n.context) && a(t = t.$options._scopeId) && j.setAttribute(e.elm, t, ""), n = n.parent;
        }a(t = Ai) && t !== e.context && a(t = t.$options._scopeId) && j.setAttribute(e.elm, t, "");
      }function y(e, t, n, a, r, i) {
        for (; a <= r; ++a) {
          d(n[a], i, e, t);
        }
      }function v(e) {
        var t,
            n,
            r = e.data;if (a(r)) for (a(t = r.hook) && a(t = t.destroy) && t(e), t = 0; t < H.destroy.length; ++t) {
          H.destroy[t](e);
        }if (a(t = e.children)) for (n = 0; n < e.children.length; ++n) {
          v(e.children[n]);
        }
      }function L(e, t, n, r) {
        for (; n <= r; ++n) {
          var i = t[n];a(i) && (a(i.tag) ? (g(i), v(i)) : o(i.elm));
        }
      }function g(e, t) {
        if (a(t) || a(e.data)) {
          var n,
              r = H.remove.length + 1;for (a(t) ? t.listeners += r : t = i(e.elm, r), a(n = e.componentInstance) && a(n = n._vnode) && a(n.data) && g(n, t), n = 0; n < H.remove.length; ++n) {
            H.remove[n](e, t);
          }a(n = e.data.hook) && a(n = n.remove) ? n(e, t) : t();
        } else o(e.elm);
      }function Y(e, t, r, i, s) {
        for (var o, u, l, _, c = 0, m = 0, h = t.length - 1, f = t[0], p = t[h], M = r.length - 1, v = r[0], g = r[M], Y = !s; c <= h && m <= M;) {
          n(f) ? f = t[++c] : n(p) ? p = t[--h] : an(f, v) ? (w(f, v, i), f = t[++c], v = r[++m]) : an(p, g) ? (w(p, g, i), p = t[--h], g = r[--M]) : an(f, g) ? (w(f, g, i), Y && j.insertBefore(e, f.elm, j.nextSibling(p.elm)), f = t[++c], g = r[--M]) : an(p, v) ? (w(p, v, i), Y && j.insertBefore(e, p.elm, f.elm), p = t[--h], v = r[++m]) : (n(o) && (o = sn(t, c, h)), u = a(v.key) ? o[v.key] : k(v, t, c, h), n(u) ? d(v, i, e, f.elm) : (l = t[u], an(l, v) ? (w(l, v, i), t[u] = void 0, Y && j.insertBefore(e, l.elm, f.elm)) : d(v, i, e, f.elm)), v = r[++m]);
        }c > h ? (_ = n(r[M + 1]) ? null : r[M + 1].elm, y(e, _, r, m, M, i)) : m > M && L(e, t, c, h);
      }function k(e, t, n, r) {
        for (var i = n; i < r; i++) {
          var s = t[i];if (a(s) && an(e, s)) return i;
        }
      }function w(e, t, i, s) {
        if (e !== t) {
          var o = t.elm = e.elm;if (r(e.isAsyncPlaceholder)) return void (a(t.asyncFactory.resolved) ? T(e.elm, t, i) : t.isAsyncPlaceholder = !0);if (r(t.isStatic) && r(e.isStatic) && t.key === e.key && (r(t.isCloned) || r(t.isOnce))) return void (t.componentInstance = e.componentInstance);var d,
              u = t.data;a(u) && a(d = u.hook) && a(d = d.prepatch) && d(e, t);var l = e.children,
              _ = t.children;if (a(u) && f(t)) {
            for (d = 0; d < H.update.length; ++d) {
              H.update[d](e, t);
            }a(d = u.hook) && a(d = d.update) && d(e, t);
          }n(t.text) ? a(l) && a(_) ? l !== _ && Y(o, l, _, i, s) : a(_) ? (a(e.text) && j.setTextContent(o, ""), y(o, null, _, 0, _.length - 1, i)) : a(l) ? L(o, l, 0, l.length - 1) : a(e.text) && j.setTextContent(o, "") : e.text !== t.text && j.setTextContent(o, t.text), a(u) && a(d = u.hook) && a(d = d.postpatch) && d(e, t);
        }
      }function D(e, t, n) {
        if (r(n) && a(e.parent)) e.parent.data.pendingInsert = t;else for (var i = 0; i < t.length; ++i) {
          t[i].data.hook.insert(t[i]);
        }
      }function T(e, t, n) {
        if (r(t.isComment) && a(t.asyncFactory)) return t.elm = e, t.isAsyncPlaceholder = !0, !0;t.elm = e;var i = t.tag,
            s = t.data,
            o = t.children;if (a(s) && (a(b = s.hook) && a(b = b.init) && b(t, !0), a(b = t.componentInstance))) return l(t, n), !0;if (a(i)) {
          if (a(o)) if (e.hasChildNodes()) {
            if (a(b = s) && a(b = b.domProps) && a(b = b.innerHTML)) {
              if (b !== e.innerHTML) return !1;
            } else {
              for (var d = !0, u = e.firstChild, _ = 0; _ < o.length; _++) {
                if (!u || !T(u, o[_], n)) {
                  d = !1;break;
                }u = u.nextSibling;
              }if (!d || u) return !1;
            }
          } else h(t, o, n);if (a(s)) for (var c in s) {
            if (!F(c)) {
              p(t, n);break;
            }
          }
        } else e.data !== t.text && (e.data = t.text);return !0;
      }var b,
          S,
          H = {},
          x = e.modules,
          j = e.nodeOps;for (b = 0; b < js.length; ++b) {
        for (H[js[b]] = [], S = 0; S < x.length; ++S) {
          a(x[S][js[b]]) && H[js[b]].push(x[S][js[b]]);
        }
      }var F = m("attrs,style,class,staticClass,staticStyle,key");return function (e, i, s, o, u, l) {
        if (n(i)) return void (a(e) && v(e));var _ = !1,
            c = [];if (n(e)) _ = !0, d(i, c, u, l);else {
          var m = a(e.nodeType);if (!m && an(e, i)) w(e, i, c, o);else {
            if (m) {
              if (1 === e.nodeType && e.hasAttribute(Qr) && (e.removeAttribute(Qr), s = !0), r(s) && T(e, i, c)) return D(i, c, !0), e;e = t(e);
            }var h = e.elm,
                p = j.parentNode(h);if (d(i, c, h._leaveCb ? null : p, j.nextSibling(h)), a(i.parent)) for (var M = i.parent, y = f(i); M;) {
              for (var g = 0; g < H.destroy.length; ++g) {
                H.destroy[g](M);
              }if (M.elm = i.elm, y) {
                for (var Y = 0; Y < H.create.length; ++Y) {
                  H.create[Y](xs, M);
                }var k = M.data.hook.insert;if (k.merged) for (var b = 1; b < k.fns.length; b++) {
                  k.fns[b]();
                }
              }M = M.parent;
            }a(p) ? L(p, [e], 0, 0) : a(e.tag) && v(e);
          }
        }return D(i, c, _), i.elm;
      };
    }({ nodeOps: Ss, modules: oo });di && document.addEventListener("selectionchange", function () {
      var e = document.activeElement;e && e.vmodel && Ma(e, "input");
    });var lo = { inserted: function inserted(e, t, n) {
        "select" === n.tag ? (_a(e, t, n.context), e._vOptions = [].map.call(e.options, ha)) : ("textarea" === n.tag || bs(e.type)) && (e._vModifiers = t.modifiers, t.modifiers.lazy || (e.addEventListener("change", pa), li || (e.addEventListener("compositionstart", fa), e.addEventListener("compositionend", pa)), di && (e.vmodel = !0)));
      }, componentUpdated: function componentUpdated(e, t, n) {
        if ("select" === n.tag) {
          _a(e, t, n.context);var a = e._vOptions,
              r = e._vOptions = [].map.call(e.options, ha);if (r.some(function (e, t) {
            return !Y(e, a[t]);
          })) {
            (e.multiple ? t.value.some(function (e) {
              return ma(e, r);
            }) : t.value !== t.oldValue && ma(t.value, r)) && Ma(e, "change");
          }
        }
      } },
        _o = { bind: function bind(e, t, n) {
        var a = t.value;n = ya(n);var r = n.data && n.data.transition,
            i = e.__vOriginalDisplay = "none" === e.style.display ? "" : e.style.display;a && r ? (n.data.show = !0, sa(n, function () {
          e.style.display = i;
        })) : e.style.display = a ? i : "none";
      }, update: function update(e, t, n) {
        var a = t.value;a !== t.oldValue && (n = ya(n), n.data && n.data.transition ? (n.data.show = !0, a ? sa(n, function () {
          e.style.display = e.__vOriginalDisplay;
        }) : oa(n, function () {
          e.style.display = "none";
        })) : e.style.display = a ? e.__vOriginalDisplay : "none");
      }, unbind: function unbind(e, t, n, a, r) {
        r || (e.style.display = e.__vOriginalDisplay);
      } },
        co = { model: lo, show: _o },
        mo = { name: String, appear: Boolean, css: Boolean, mode: String, type: String, enterClass: String, leaveClass: String, enterToClass: String, leaveToClass: String, enterActiveClass: String, leaveActiveClass: String, appearClass: String, appearActiveClass: String, appearToClass: String, duration: [Number, String, Object] },
        ho = { name: "transition", props: mo, abstract: !0, render: function render(e) {
        var t = this,
            n = this.$options._renderChildren;if (n && (n = n.filter(function (e) {
          return e.tag || he(e);
        }), n.length)) {
          var a = this.mode,
              r = n[0];if (Ya(this.$vnode)) return r;var i = va(r);if (!i) return r;if (this._leaving) return ga(e, r);var o = "__transition-" + this._uid + "-";i.key = null == i.key ? i.isComment ? o + "comment" : o + i.tag : s(i.key) ? 0 === String(i.key).indexOf(o) ? i.key : o + i.key : i.key;var d = (i.data || (i.data = {})).transition = La(this),
              u = this._vnode,
              l = va(u);if (i.data.directives && i.data.directives.some(function (e) {
            return "show" === e.name;
          }) && (i.data.show = !0), l && l.data && !ka(i, l) && !he(l)) {
            var _ = l && (l.data.transition = v({}, d));if ("out-in" === a) return this._leaving = !0, re(_, "afterLeave", function () {
              t._leaving = !1, t.$forceUpdate();
            }), ga(e, r);if ("in-out" === a) {
              if (he(i)) return u;var c,
                  m = function m() {
                c();
              };re(d, "afterEnter", m), re(d, "enterCancelled", m), re(_, "delayLeave", function (e) {
                c = e;
              });
            }
          }return r;
        }
      } },
        fo = v({ tag: String, moveClass: String }, mo);delete fo.mode;var po = { props: fo, render: function render(e) {
        for (var t = this.tag || this.$vnode.data.tag || "span", n = Object.create(null), a = this.prevChildren = this.children, r = this.$slots.default || [], i = this.children = [], s = La(this), o = 0; o < r.length; o++) {
          var d = r[o];if (d.tag) if (null != d.key && 0 !== String(d.key).indexOf("__vlist")) i.push(d), n[d.key] = d, (d.data || (d.data = {})).transition = s;else ;
        }if (a) {
          for (var u = [], l = [], _ = 0; _ < a.length; _++) {
            var c = a[_];c.data.transition = s, c.data.pos = c.elm.getBoundingClientRect(), n[c.key] ? u.push(c) : l.push(c);
          }this.kept = e(t, null, u), this.removed = l;
        }return e(t, null, i);
      }, beforeUpdate: function beforeUpdate() {
        this.__patch__(this._vnode, this.kept, !1, !0), this._vnode = this.kept;
      }, updated: function updated() {
        var e = this.prevChildren,
            t = this.moveClass || (this.name || "v") + "-move";if (e.length && this.hasMove(e[0].elm, t)) {
          e.forEach(wa), e.forEach(Da), e.forEach(Ta);var n = document.body;n.offsetHeight;e.forEach(function (e) {
            if (e.data.moved) {
              var n = e.elm,
                  a = n.style;ea(n, t), a.transform = a.WebkitTransform = a.transitionDuration = "", n.addEventListener(eo, n._moveCb = function e(a) {
                a && !/transform$/.test(a.propertyName) || (n.removeEventListener(eo, e), n._moveCb = null, ta(n, t));
              });
            }
          });
        }
      }, methods: { hasMove: function hasMove(e, t) {
          if (!Ks) return !1;if (this._hasMove) return this._hasMove;var n = e.cloneNode();e._transitionClasses && e._transitionClasses.forEach(function (e) {
            Qn(n, e);
          }), Kn(n, t), n.style.display = "none", this.$el.appendChild(n);var a = aa(n);return this.$el.removeChild(n), this._hasMove = a.hasTransform;
        } } },
        Mo = { Transition: ho, TransitionGroup: po };kt.config.mustUseProp = hs, kt.config.isReservedTag = Ds, kt.config.isReservedAttr = cs, kt.config.getTagNamespace = Nt, kt.config.isUnknownElement = It, v(kt.options.directives, co), v(kt.options.components, Mo), kt.prototype.__patch__ = ii ? uo : g, kt.prototype.$mount = function (e, t) {
      return e = e && ii ? Rt(e) : void 0, we(this, e, t);
    }, setTimeout(function () {
      ei.devtools && vi && vi.emit("init", kt);
    }, 0);var yo,
        vo = !!ii && function (e, t) {
      var n = document.createElement("div");return n.innerHTML = '<div a="' + e + '"/>', n.innerHTML.indexOf(t) > 0;
    }("\n", "&#10;"),
        Lo = /\{\{((?:.|\n)+?)\}\}/g,
        go = /[-.*+?^${}()|[\]\/\\]/g,
        Yo = p(function (e) {
      var t = e[0].replace(go, "\\$&"),
          n = e[1].replace(go, "\\$&");return new RegExp(t + "((?:.|\\n)+?)" + n, "g");
    }),
        ko = { staticKeys: ["staticClass"], transformNode: Sa, genData: Ha },
        wo = { staticKeys: ["staticStyle"], transformNode: xa, genData: ja },
        Do = [ko, wo],
        To = { model: Cn, text: Fa, html: Ca },
        bo = m("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"),
        So = m("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"),
        Ho = m("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"),
        xo = { expectHTML: !0, modules: Do, directives: To, isPreTag: ws, isUnaryTag: bo, mustUseProp: hs, canBeLeftOpenTag: So, isReservedTag: Ds, getTagNamespace: Nt, staticKeys: function (e) {
        return e.reduce(function (e, t) {
          return e.concat(t.staticKeys || []);
        }, []).join(",");
      }(Do) },
        jo = { decode: function decode(e) {
        return yo = yo || document.createElement("div"), yo.innerHTML = e, yo.textContent;
      } },
        Fo = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,
        Co = "[a-zA-Z_][\\w\\-\\.]*",
        Oo = "((?:" + Co + "\\:)?" + Co + ")",
        Eo = new RegExp("^<" + Oo),
        Po = /^\s*(\/?)>/,
        Ao = new RegExp("^<\\/" + Oo + "[^>]*>"),
        Wo = /^<!DOCTYPE [^>]+>/i,
        zo = /^<!--/,
        $o = /^<!\[/,
        No = !1;"x".replace(/x(.)?/g, function (e, t) {
      No = "" === t;
    });var Io,
        Ro,
        Jo,
        Uo,
        Bo,
        Go,
        Vo,
        qo,
        Ko,
        Qo,
        Zo = m("script,style,textarea", !0),
        Xo = {},
        ed = { "&lt;": "<", "&gt;": ">", "&quot;": '"', "&amp;": "&", "&#10;": "\n" },
        td = /&(?:lt|gt|quot|amp);/g,
        nd = /&(?:lt|gt|quot|amp|#10);/g,
        ad = m("pre,textarea", !0),
        rd = function rd(e, t) {
      return e && ad(e) && "\n" === t[0];
    },
        id = /^@|^v-on:/,
        sd = /^v-|^@|^:/,
        od = /(.*?)\s+(?:in|of)\s+(.*)/,
        dd = /\((\{[^}]*\}|[^,]*),([^,]*)(?:,([^,]*))?\)/,
        ud = /:(.*)$/,
        ld = /^:|^v-bind:/,
        _d = /\.[^.]+/g,
        cd = p(jo.decode),
        md = /^xmlns:NS\d+/,
        hd = /^NS\d+:/,
        fd = p(ar),
        pd = /^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/,
        Md = /^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/,
        yd = { esc: 27, tab: 9, enter: 13, space: 32, up: 38, left: 37, right: 39, down: 40, delete: [8, 46] },
        vd = function vd(e) {
      return "if(" + e + ")return null;";
    },
        Ld = { stop: "$event.stopPropagation();", prevent: "$event.preventDefault();", self: vd("$event.target !== $event.currentTarget"), ctrl: vd("!$event.ctrlKey"), shift: vd("!$event.shiftKey"), alt: vd("!$event.altKey"), meta: vd("!$event.metaKey"), left: vd("'button' in $event && $event.button !== 0"), middle: vd("'button' in $event && $event.button !== 1"), right: vd("'button' in $event && $event.button !== 2") },
        gd = { on: cr, bind: mr, cloak: g },
        Yd = function Yd(e) {
      this.options = e, this.warn = e.warn || Mn, this.transforms = yn(e.modules, "transformCode"), this.dataGenFns = yn(e.modules, "genData"), this.directives = v(v({}, gd), e.directives);var t = e.isReservedTag || qr;this.maybeComponent = function (e) {
        return !t(e.tag);
      }, this.onceId = 0, this.staticRenderFns = [];
    },
        kd = (new RegExp("\\b" + "do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b") + "\\b"), new RegExp("\\b" + "delete,typeof,void".split(",").join("\\s*\\([^\\)]*\\)|\\b") + "\\s*\\([^\\)]*\\)"), function (e) {
      return function (t) {
        function n(n, a) {
          var r = Object.create(t),
              i = [],
              s = [];if (r.warn = function (e, t) {
            (t ? s : i).push(e);
          }, a) {
            a.modules && (r.modules = (t.modules || []).concat(a.modules)), a.directives && (r.directives = v(Object.create(t.directives), a.directives));for (var o in a) {
              "modules" !== o && "directives" !== o && (r[o] = a[o]);
            }
          }var d = e(n, r);return d.errors = i, d.tips = s, d;
        }return { compile: n, compileToFunctions: Wr(n) };
      };
    }(function (e, t) {
      var n = Pa(e.trim(), t);nr(n, t);var a = hr(n, t);return { ast: n, render: a.render, staticRenderFns: a.staticRenderFns };
    })),
        wd = kd(xo),
        Dd = wd.compileToFunctions,
        Td = p(function (e) {
      var t = Rt(e);return t && t.innerHTML;
    }),
        bd = kt.prototype.$mount;kt.prototype.$mount = function (e, t) {
      if ((e = e && Rt(e)) === document.body || e === document.documentElement) return this;var n = this.$options;if (!n.render) {
        var a = n.template;if (a) {
          if ("string" == typeof a) "#" === a.charAt(0) && (a = Td(a));else {
            if (!a.nodeType) return this;a = a.innerHTML;
          }
        } else e && (a = zr(e));if (a) {
          var r = Dd(a, { shouldDecodeNewlines: vo, delimiters: n.delimiters, comments: n.comments }, this),
              i = r.render,
              s = r.staticRenderFns;n.render = i, n.staticRenderFns = s;
        }
      }return bd.call(this, e, t);
    }, kt.compile = Dd, e.exports = kt;
  }).call(t, n(129));
}, function (e, t) {
  var n;n = function () {
    return this;
  }();try {
    n = n || Function("return this")() || (0, eval)("this");
  } catch (e) {
    "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && (n = window);
  }e.exports = n;
}, function (e, t, n) {
  e.exports = n(131);
}, function (e, t, n) {
  "use strict";
  function a(e) {
    var t = new s(e),
        n = i(s.prototype.request, t);return r.extend(n, s.prototype, t), r.extend(n, t), n;
  }var r = n(1),
      i = n(4),
      s = n(133),
      o = n(3),
      d = a(o);d.Axios = s, d.create = function (e) {
    return a(r.merge(o, e));
  }, d.Cancel = n(8), d.CancelToken = n(148), d.isCancel = n(7), d.all = function (e) {
    return Promise.all(e);
  }, d.spread = n(149), e.exports = d, e.exports.default = d;
}, function (e, t) {
  function n(e) {
    return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e);
  }function a(e) {
    return "function" == typeof e.readFloatLE && "function" == typeof e.slice && n(e.slice(0, 0));
  }e.exports = function (e) {
    return null != e && (n(e) || a(e) || !!e._isBuffer);
  };
}, function (e, t, n) {
  "use strict";
  function a(e) {
    this.defaults = e, this.interceptors = { request: new s(), response: new s() };
  }var r = n(3),
      i = n(1),
      s = n(143),
      o = n(144),
      d = n(146),
      u = n(147);a.prototype.request = function (e) {
    "string" == typeof e && (e = i.merge({ url: arguments[0] }, arguments[1])), e = i.merge(r, this.defaults, { method: "get" }, e), e.method = e.method.toLowerCase(), e.baseURL && !d(e.url) && (e.url = u(e.baseURL, e.url));var t = [o, void 0],
        n = Promise.resolve(e);for (this.interceptors.request.forEach(function (e) {
      t.unshift(e.fulfilled, e.rejected);
    }), this.interceptors.response.forEach(function (e) {
      t.push(e.fulfilled, e.rejected);
    }); t.length;) {
      n = n.then(t.shift(), t.shift());
    }return n;
  }, i.forEach(["delete", "get", "head", "options"], function (e) {
    a.prototype[e] = function (t, n) {
      return this.request(i.merge(n || {}, { method: e, url: t }));
    };
  }), i.forEach(["post", "put", "patch"], function (e) {
    a.prototype[e] = function (t, n, a) {
      return this.request(i.merge(a || {}, { method: e, url: t, data: n }));
    };
  }), e.exports = a;
}, function (e, t) {
  function n() {
    throw new Error("setTimeout has not been defined");
  }function a() {
    throw new Error("clearTimeout has not been defined");
  }function r(e) {
    if (l === setTimeout) return setTimeout(e, 0);if ((l === n || !l) && setTimeout) return l = setTimeout, setTimeout(e, 0);try {
      return l(e, 0);
    } catch (t) {
      try {
        return l.call(null, e, 0);
      } catch (t) {
        return l.call(this, e, 0);
      }
    }
  }function i(e) {
    if (_ === clearTimeout) return clearTimeout(e);if ((_ === a || !_) && clearTimeout) return _ = clearTimeout, clearTimeout(e);try {
      return _(e);
    } catch (t) {
      try {
        return _.call(null, e);
      } catch (t) {
        return _.call(this, e);
      }
    }
  }function s() {
    f && m && (f = !1, m.length ? h = m.concat(h) : p = -1, h.length && o());
  }function o() {
    if (!f) {
      var e = r(s);f = !0;for (var t = h.length; t;) {
        for (m = h, h = []; ++p < t;) {
          m && m[p].run();
        }p = -1, t = h.length;
      }m = null, f = !1, i(e);
    }
  }function d(e, t) {
    this.fun = e, this.array = t;
  }function u() {}var l,
      _,
      c = e.exports = {};!function () {
    try {
      l = "function" == typeof setTimeout ? setTimeout : n;
    } catch (e) {
      l = n;
    }try {
      _ = "function" == typeof clearTimeout ? clearTimeout : a;
    } catch (e) {
      _ = a;
    }
  }();var m,
      h = [],
      f = !1,
      p = -1;c.nextTick = function (e) {
    var t = new Array(arguments.length - 1);if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) {
      t[n - 1] = arguments[n];
    }h.push(new d(e, t)), 1 !== h.length || f || r(o);
  }, d.prototype.run = function () {
    this.fun.apply(null, this.array);
  }, c.title = "browser", c.browser = !0, c.env = {}, c.argv = [], c.version = "", c.versions = {}, c.on = u, c.addListener = u, c.once = u, c.off = u, c.removeListener = u, c.removeAllListeners = u, c.emit = u, c.prependListener = u, c.prependOnceListener = u, c.listeners = function (e) {
    return [];
  }, c.binding = function (e) {
    throw new Error("process.binding is not supported");
  }, c.cwd = function () {
    return "/";
  }, c.chdir = function (e) {
    throw new Error("process.chdir is not supported");
  }, c.umask = function () {
    return 0;
  };
}, function (e, t, n) {
  "use strict";
  var a = n(1);e.exports = function (e, t) {
    a.forEach(e, function (n, a) {
      a !== t && a.toUpperCase() === t.toUpperCase() && (e[t] = n, delete e[a]);
    });
  };
}, function (e, t, n) {
  "use strict";
  var a = n(6);e.exports = function (e, t, n) {
    var r = n.config.validateStatus;n.status && r && !r(n.status) ? t(a("Request failed with status code " + n.status, n.config, null, n.request, n)) : e(n);
  };
}, function (e, t, n) {
  "use strict";
  e.exports = function (e, t, n, a, r) {
    return e.config = t, n && (e.code = n), e.request = a, e.response = r, e;
  };
}, function (e, t, n) {
  "use strict";
  function a(e) {
    return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
  }var r = n(1);e.exports = function (e, t, n) {
    if (!t) return e;var i;if (n) i = n(t);else if (r.isURLSearchParams(t)) i = t.toString();else {
      var s = [];r.forEach(t, function (e, t) {
        null !== e && void 0 !== e && (r.isArray(e) && (t += "[]"), r.isArray(e) || (e = [e]), r.forEach(e, function (e) {
          r.isDate(e) ? e = e.toISOString() : r.isObject(e) && (e = JSON.stringify(e)), s.push(a(t) + "=" + a(e));
        }));
      }), i = s.join("&");
    }return i && (e += (-1 === e.indexOf("?") ? "?" : "&") + i), e;
  };
}, function (e, t, n) {
  "use strict";
  var a = n(1);e.exports = function (e) {
    var t,
        n,
        r,
        i = {};return e ? (a.forEach(e.split("\n"), function (e) {
      r = e.indexOf(":"), t = a.trim(e.substr(0, r)).toLowerCase(), n = a.trim(e.substr(r + 1)), t && (i[t] = i[t] ? i[t] + ", " + n : n);
    }), i) : i;
  };
}, function (e, t, n) {
  "use strict";
  var a = n(1);e.exports = a.isStandardBrowserEnv() ? function () {
    function e(e) {
      var t = e;return n && (r.setAttribute("href", t), t = r.href), r.setAttribute("href", t), { href: r.href, protocol: r.protocol ? r.protocol.replace(/:$/, "") : "", host: r.host, search: r.search ? r.search.replace(/^\?/, "") : "", hash: r.hash ? r.hash.replace(/^#/, "") : "", hostname: r.hostname, port: r.port, pathname: "/" === r.pathname.charAt(0) ? r.pathname : "/" + r.pathname };
    }var t,
        n = /(msie|trident)/i.test(navigator.userAgent),
        r = document.createElement("a");return t = e(window.location.href), function (n) {
      var r = a.isString(n) ? e(n) : n;return r.protocol === t.protocol && r.host === t.host;
    };
  }() : function () {
    return function () {
      return !0;
    };
  }();
}, function (e, t, n) {
  "use strict";
  function a() {
    this.message = "String contains an invalid character";
  }function r(e) {
    for (var t, n, r = String(e), s = "", o = 0, d = i; r.charAt(0 | o) || (d = "=", o % 1); s += d.charAt(63 & t >> 8 - o % 1 * 8)) {
      if ((n = r.charCodeAt(o += .75)) > 255) throw new a();t = t << 8 | n;
    }return s;
  }var i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";a.prototype = new Error(), a.prototype.code = 5, a.prototype.name = "InvalidCharacterError", e.exports = r;
}, function (e, t, n) {
  "use strict";
  var a = n(1);e.exports = a.isStandardBrowserEnv() ? function () {
    return { write: function write(e, t, n, r, i, s) {
        var o = [];o.push(e + "=" + encodeURIComponent(t)), a.isNumber(n) && o.push("expires=" + new Date(n).toGMTString()), a.isString(r) && o.push("path=" + r), a.isString(i) && o.push("domain=" + i), !0 === s && o.push("secure"), document.cookie = o.join("; ");
      }, read: function read(e) {
        var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));return t ? decodeURIComponent(t[3]) : null;
      }, remove: function remove(e) {
        this.write(e, "", Date.now() - 864e5);
      } };
  }() : function () {
    return { write: function write() {}, read: function read() {
        return null;
      }, remove: function remove() {} };
  }();
}, function (e, t, n) {
  "use strict";
  function a() {
    this.handlers = [];
  }var r = n(1);a.prototype.use = function (e, t) {
    return this.handlers.push({ fulfilled: e, rejected: t }), this.handlers.length - 1;
  }, a.prototype.eject = function (e) {
    this.handlers[e] && (this.handlers[e] = null);
  }, a.prototype.forEach = function (e) {
    r.forEach(this.handlers, function (t) {
      null !== t && e(t);
    });
  }, e.exports = a;
}, function (e, t, n) {
  "use strict";
  function a(e) {
    e.cancelToken && e.cancelToken.throwIfRequested();
  }var r = n(1),
      i = n(145),
      s = n(7),
      o = n(3);e.exports = function (e) {
    return a(e), e.headers = e.headers || {}, e.data = i(e.data, e.headers, e.transformRequest), e.headers = r.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers || {}), r.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function (t) {
      delete e.headers[t];
    }), (e.adapter || o.adapter)(e).then(function (t) {
      return a(e), t.data = i(t.data, t.headers, e.transformResponse), t;
    }, function (t) {
      return s(t) || (a(e), t && t.response && (t.response.data = i(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t);
    });
  };
}, function (e, t, n) {
  "use strict";
  var a = n(1);e.exports = function (e, t, n) {
    return a.forEach(n, function (n) {
      e = n(e, t);
    }), e;
  };
}, function (e, t, n) {
  "use strict";
  e.exports = function (e) {
    return (/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
    );
  };
}, function (e, t, n) {
  "use strict";
  e.exports = function (e, t) {
    return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
  };
}, function (e, t, n) {
  "use strict";
  function a(e) {
    if ("function" != typeof e) throw new TypeError("executor must be a function.");var t;this.promise = new Promise(function (e) {
      t = e;
    });var n = this;e(function (e) {
      n.reason || (n.reason = new r(e), t(n.reason));
    });
  }var r = n(8);a.prototype.throwIfRequested = function () {
    if (this.reason) throw this.reason;
  }, a.source = function () {
    var e;return { token: new a(function (t) {
        e = t;
      }), cancel: e };
  }, e.exports = a;
}, function (e, t, n) {
  "use strict";
  e.exports = function (e) {
    return function (t) {
      return e.apply(null, t);
    };
  };
}, function (e, t, n) {
  function a(e) {
    return n(r(e));
  }function r(e) {
    var t = i[e];if (!(t + 1)) throw new Error("Cannot find module '" + e + "'.");return t;
  }var i = { "./af": 10, "./af.js": 10, "./ar": 11, "./ar-dz": 12, "./ar-dz.js": 12, "./ar-kw": 13, "./ar-kw.js": 13, "./ar-ly": 14, "./ar-ly.js": 14, "./ar-ma": 15, "./ar-ma.js": 15, "./ar-sa": 16, "./ar-sa.js": 16, "./ar-tn": 17, "./ar-tn.js": 17, "./ar.js": 11, "./az": 18, "./az.js": 18, "./be": 19, "./be.js": 19, "./bg": 20, "./bg.js": 20, "./bn": 21, "./bn.js": 21, "./bo": 22, "./bo.js": 22, "./br": 23, "./br.js": 23, "./bs": 24, "./bs.js": 24, "./ca": 25, "./ca.js": 25, "./cs": 26, "./cs.js": 26, "./cv": 27, "./cv.js": 27, "./cy": 28, "./cy.js": 28, "./da": 29, "./da.js": 29, "./de": 30, "./de-at": 31, "./de-at.js": 31, "./de-ch": 32, "./de-ch.js": 32, "./de.js": 30, "./dv": 33, "./dv.js": 33, "./el": 34, "./el.js": 34, "./en-au": 35, "./en-au.js": 35, "./en-ca": 36, "./en-ca.js": 36, "./en-gb": 37, "./en-gb.js": 37, "./en-ie": 38, "./en-ie.js": 38, "./en-nz": 39, "./en-nz.js": 39, "./eo": 40, "./eo.js": 40, "./es": 41, "./es-do": 42, "./es-do.js": 42, "./es.js": 41, "./et": 43, "./et.js": 43, "./eu": 44, "./eu.js": 44, "./fa": 45, "./fa.js": 45, "./fi": 46, "./fi.js": 46, "./fo": 47, "./fo.js": 47, "./fr": 48, "./fr-ca": 49, "./fr-ca.js": 49, "./fr-ch": 50, "./fr-ch.js": 50, "./fr.js": 48, "./fy": 51, "./fy.js": 51, "./gd": 52, "./gd.js": 52, "./gl": 53, "./gl.js": 53, "./gom-latn": 54, "./gom-latn.js": 54, "./he": 55, "./he.js": 55, "./hi": 56, "./hi.js": 56, "./hr": 57, "./hr.js": 57, "./hu": 58, "./hu.js": 58, "./hy-am": 59, "./hy-am.js": 59, "./id": 60, "./id.js": 60, "./is": 61, "./is.js": 61, "./it": 62, "./it.js": 62, "./ja": 63, "./ja.js": 63, "./jv": 64, "./jv.js": 64, "./ka": 65, "./ka.js": 65, "./kk": 66, "./kk.js": 66, "./km": 67, "./km.js": 67, "./kn": 68, "./kn.js": 68, "./ko": 69, "./ko.js": 69, "./ky": 70, "./ky.js": 70, "./lb": 71, "./lb.js": 71, "./lo": 72, "./lo.js": 72, "./lt": 73, "./lt.js": 73, "./lv": 74, "./lv.js": 74, "./me": 75, "./me.js": 75, "./mi": 76, "./mi.js": 76, "./mk": 77, "./mk.js": 77, "./ml": 78, "./ml.js": 78, "./mr": 79, "./mr.js": 79, "./ms": 80, "./ms-my": 81, "./ms-my.js": 81, "./ms.js": 80, "./my": 82, "./my.js": 82, "./nb": 83, "./nb.js": 83, "./ne": 84, "./ne.js": 84, "./nl": 85, "./nl-be": 86, "./nl-be.js": 86, "./nl.js": 85, "./nn": 87, "./nn.js": 87, "./pa-in": 88, "./pa-in.js": 88, "./pl": 89, "./pl.js": 89, "./pt": 90, "./pt-br": 91, "./pt-br.js": 91, "./pt.js": 90, "./ro": 92, "./ro.js": 92, "./ru": 93, "./ru.js": 93, "./sd": 94, "./sd.js": 94, "./se": 95, "./se.js": 95, "./si": 96, "./si.js": 96, "./sk": 97, "./sk.js": 97, "./sl": 98, "./sl.js": 98, "./sq": 99, "./sq.js": 99, "./sr": 100, "./sr-cyrl": 101, "./sr-cyrl.js": 101, "./sr.js": 100, "./ss": 102, "./ss.js": 102, "./sv": 103, "./sv.js": 103, "./sw": 104, "./sw.js": 104, "./ta": 105, "./ta.js": 105, "./te": 106, "./te.js": 106, "./tet": 107, "./tet.js": 107, "./th": 108, "./th.js": 108, "./tl-ph": 109, "./tl-ph.js": 109, "./tlh": 110, "./tlh.js": 110, "./tr": 111, "./tr.js": 111, "./tzl": 112, "./tzl.js": 112, "./tzm": 113, "./tzm-latn": 114, "./tzm-latn.js": 114, "./tzm.js": 113, "./uk": 115, "./uk.js": 115, "./ur": 116, "./ur.js": 116, "./uz": 117, "./uz-latn": 118, "./uz-latn.js": 118, "./uz.js": 117, "./vi": 119, "./vi.js": 119, "./x-pseudo": 120, "./x-pseudo.js": 120, "./yo": 121, "./yo.js": 121, "./zh-cn": 122, "./zh-cn.js": 122, "./zh-hk": 123, "./zh-hk.js": 123, "./zh-tw": 124, "./zh-tw.js": 124 };a.keys = function () {
    return Object.keys(i);
  }, a.resolve = r, e.exports = a, a.id = 150;
}, function (e, t, n) {
  (function (e) {
    (function () {
      var t,
          n,
          a,
          r,
          i,
          s,
          o,
          d,
          u = [].slice,
          l = {}.hasOwnProperty,
          _ = function _(e, t) {
        function n() {
          this.constructor = e;
        }for (var a in t) {
          l.call(t, a) && (e[a] = t[a]);
        }return n.prototype = t.prototype, e.prototype = new n(), e.__super__ = t.prototype, e;
      };o = function o() {}, n = function () {
        function e() {}return e.prototype.addEventListener = e.prototype.on, e.prototype.on = function (e, t) {
          return this._callbacks = this._callbacks || {}, this._callbacks[e] || (this._callbacks[e] = []), this._callbacks[e].push(t), this;
        }, e.prototype.emit = function () {
          var e, t, n, a, r, i;if (a = arguments[0], e = 2 <= arguments.length ? u.call(arguments, 1) : [], this._callbacks = this._callbacks || {}, n = this._callbacks[a]) for (r = 0, i = n.length; r < i; r++) {
            t = n[r], t.apply(this, e);
          }return this;
        }, e.prototype.removeListener = e.prototype.off, e.prototype.removeAllListeners = e.prototype.off, e.prototype.removeEventListener = e.prototype.off, e.prototype.off = function (e, t) {
          var n, a, r, i;if (!this._callbacks || 0 === arguments.length) return this._callbacks = {}, this;if (!(n = this._callbacks[e])) return this;if (1 === arguments.length) return delete this._callbacks[e], this;for (a = r = 0, i = n.length; r < i; a = ++r) {
            if (n[a] === t) {
              n.splice(a, 1);break;
            }
          }return this;
        }, e;
      }(), t = function (e) {
        function t(e, n) {
          var r, i, s;if (this.element = e, this.version = t.version, this.defaultOptions.previewTemplate = this.defaultOptions.previewTemplate.replace(/\n*/g, ""), this.clickableElements = [], this.listeners = [], this.files = [], "string" == typeof this.element && (this.element = document.querySelector(this.element)), !this.element || null == this.element.nodeType) throw new Error("Invalid dropzone element.");if (this.element.dropzone) throw new Error("Dropzone already attached.");if (t.instances.push(this), this.element.dropzone = this, r = null != (s = t.optionsForElement(this.element)) ? s : {}, this.options = a({}, this.defaultOptions, r, null != n ? n : {}), this.options.forceFallback || !t.isBrowserSupported()) return this.options.fallback.call(this);if (null == this.options.url && (this.options.url = this.element.getAttribute("action")), !this.options.url) throw new Error("No URL provided.");if (this.options.acceptedFiles && this.options.acceptedMimeTypes) throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");this.options.acceptedMimeTypes && (this.options.acceptedFiles = this.options.acceptedMimeTypes, delete this.options.acceptedMimeTypes), this.options.method = this.options.method.toUpperCase(), (i = this.getExistingFallback()) && i.parentNode && i.parentNode.removeChild(i), !1 !== this.options.previewsContainer && (this.options.previewsContainer ? this.previewsContainer = t.getElement(this.options.previewsContainer, "previewsContainer") : this.previewsContainer = this.element), this.options.clickable && (!0 === this.options.clickable ? this.clickableElements = [this.element] : this.clickableElements = t.getElements(this.options.clickable, "clickable")), this.init();
        }var a, r;return _(t, e), t.prototype.Emitter = n, t.prototype.events = ["drop", "dragstart", "dragend", "dragenter", "dragover", "dragleave", "addedfile", "addedfiles", "removedfile", "thumbnail", "error", "errormultiple", "processing", "processingmultiple", "uploadprogress", "totaluploadprogress", "sending", "sendingmultiple", "success", "successmultiple", "canceled", "canceledmultiple", "complete", "completemultiple", "reset", "maxfilesexceeded", "maxfilesreached", "queuecomplete"], t.prototype.defaultOptions = { url: null, method: "post", withCredentials: !1, parallelUploads: 2, uploadMultiple: !1, maxFilesize: 256, paramName: "file", createImageThumbnails: !0, maxThumbnailFilesize: 10, thumbnailWidth: 120, thumbnailHeight: 120, filesizeBase: 1e3, maxFiles: null, params: {}, clickable: !0, ignoreHiddenFiles: !0, acceptedFiles: null, acceptedMimeTypes: null, autoProcessQueue: !0, autoQueue: !0, addRemoveLinks: !1, previewsContainer: null, hiddenInputContainer: "body", capture: null, renameFilename: null, dictDefaultMessage: "Drop files here to upload", dictFallbackMessage: "Your browser does not support drag'n'drop file uploads.", dictFallbackText: "Please use the fallback form below to upload your files like in the olden days.", dictFileTooBig: "File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.", dictInvalidFileType: "You can't upload files of this type.", dictResponseError: "Server responded with {{statusCode}} code.", dictCancelUpload: "Cancel upload", dictCancelUploadConfirmation: "Are you sure you want to cancel this upload?", dictRemoveFile: "Remove file", dictRemoveFileConfirmation: null, dictMaxFilesExceeded: "You can not upload any more files.", accept: function accept(e, t) {
            return t();
          }, init: function init() {
            return o;
          }, forceFallback: !1, fallback: function fallback() {
            var e, n, a, r, i, s;for (this.element.className = this.element.className + " dz-browser-not-supported", s = this.element.getElementsByTagName("div"), r = 0, i = s.length; r < i; r++) {
              e = s[r], /(^| )dz-message($| )/.test(e.className) && (n = e, e.className = "dz-message");
            }return n || (n = t.createElement('<div class="dz-message"><span></span></div>'), this.element.appendChild(n)), a = n.getElementsByTagName("span")[0], a && (null != a.textContent ? a.textContent = this.options.dictFallbackMessage : null != a.innerText && (a.innerText = this.options.dictFallbackMessage)), this.element.appendChild(this.getFallbackForm());
          }, resize: function resize(e) {
            var t, n, a;return t = { srcX: 0, srcY: 0, srcWidth: e.width, srcHeight: e.height }, n = e.width / e.height, t.optWidth = this.options.thumbnailWidth, t.optHeight = this.options.thumbnailHeight, null == t.optWidth && null == t.optHeight ? (t.optWidth = t.srcWidth, t.optHeight = t.srcHeight) : null == t.optWidth ? t.optWidth = n * t.optHeight : null == t.optHeight && (t.optHeight = 1 / n * t.optWidth), a = t.optWidth / t.optHeight, e.height < t.optHeight || e.width < t.optWidth ? (t.trgHeight = t.srcHeight, t.trgWidth = t.srcWidth) : n > a ? (t.srcHeight = e.height, t.srcWidth = t.srcHeight * a) : (t.srcWidth = e.width, t.srcHeight = t.srcWidth / a), t.srcX = (e.width - t.srcWidth) / 2, t.srcY = (e.height - t.srcHeight) / 2, t;
          }, drop: function drop(e) {
            return this.element.classList.remove("dz-drag-hover");
          }, dragstart: o, dragend: function dragend(e) {
            return this.element.classList.remove("dz-drag-hover");
          }, dragenter: function dragenter(e) {
            return this.element.classList.add("dz-drag-hover");
          }, dragover: function dragover(e) {
            return this.element.classList.add("dz-drag-hover");
          }, dragleave: function dragleave(e) {
            return this.element.classList.remove("dz-drag-hover");
          }, paste: o, reset: function reset() {
            return this.element.classList.remove("dz-started");
          }, addedfile: function addedfile(e) {
            var n, a, r, i, s, o, d, u, l, _, c, m, h;if (this.element === this.previewsContainer && this.element.classList.add("dz-started"), this.previewsContainer) {
              for (e.previewElement = t.createElement(this.options.previewTemplate.trim()), e.previewTemplate = e.previewElement, this.previewsContainer.appendChild(e.previewElement), _ = e.previewElement.querySelectorAll("[data-dz-name]"), i = 0, d = _.length; i < d; i++) {
                n = _[i], n.textContent = this._renameFilename(e.name);
              }for (c = e.previewElement.querySelectorAll("[data-dz-size]"), s = 0, u = c.length; s < u; s++) {
                n = c[s], n.innerHTML = this.filesize(e.size);
              }for (this.options.addRemoveLinks && (e._removeLink = t.createElement('<a class="dz-remove" href="javascript:undefined;" data-dz-remove>' + this.options.dictRemoveFile + "</a>"), e.previewElement.appendChild(e._removeLink)), a = function (n) {
                return function (a) {
                  return a.preventDefault(), a.stopPropagation(), e.status === t.UPLOADING ? t.confirm(n.options.dictCancelUploadConfirmation, function () {
                    return n.removeFile(e);
                  }) : n.options.dictRemoveFileConfirmation ? t.confirm(n.options.dictRemoveFileConfirmation, function () {
                    return n.removeFile(e);
                  }) : n.removeFile(e);
                };
              }(this), m = e.previewElement.querySelectorAll("[data-dz-remove]"), h = [], o = 0, l = m.length; o < l; o++) {
                r = m[o], h.push(r.addEventListener("click", a));
              }return h;
            }
          }, removedfile: function removedfile(e) {
            var t;return e.previewElement && null != (t = e.previewElement) && t.parentNode.removeChild(e.previewElement), this._updateMaxFilesReachedClass();
          }, thumbnail: function thumbnail(e, t) {
            var n, a, r, i;if (e.previewElement) {
              for (e.previewElement.classList.remove("dz-file-preview"), i = e.previewElement.querySelectorAll("[data-dz-thumbnail]"), a = 0, r = i.length; a < r; a++) {
                n = i[a], n.alt = e.name, n.src = t;
              }return setTimeout(function (t) {
                return function () {
                  return e.previewElement.classList.add("dz-image-preview");
                };
              }(), 1);
            }
          }, error: function error(e, t) {
            var n, a, r, i, s;if (e.previewElement) {
              for (e.previewElement.classList.add("dz-error"), "String" != typeof t && t.error && (t = t.error), i = e.previewElement.querySelectorAll("[data-dz-errormessage]"), s = [], a = 0, r = i.length; a < r; a++) {
                n = i[a], s.push(n.textContent = t);
              }return s;
            }
          }, errormultiple: o, processing: function processing(e) {
            if (e.previewElement && (e.previewElement.classList.add("dz-processing"), e._removeLink)) return e._removeLink.textContent = this.options.dictCancelUpload;
          }, processingmultiple: o, uploadprogress: function uploadprogress(e, t, n) {
            var a, r, i, s, o;if (e.previewElement) {
              for (s = e.previewElement.querySelectorAll("[data-dz-uploadprogress]"), o = [], r = 0, i = s.length; r < i; r++) {
                a = s[r], "PROGRESS" === a.nodeName ? o.push(a.value = t) : o.push(a.style.width = t + "%");
              }return o;
            }
          }, totaluploadprogress: o, sending: o, sendingmultiple: o, success: function success(e) {
            if (e.previewElement) return e.previewElement.classList.add("dz-success");
          }, successmultiple: o, canceled: function canceled(e) {
            return this.emit("error", e, "Upload canceled.");
          }, canceledmultiple: o, complete: function complete(e) {
            if (e._removeLink && (e._removeLink.textContent = this.options.dictRemoveFile), e.previewElement) return e.previewElement.classList.add("dz-complete");
          }, completemultiple: o, maxfilesexceeded: o, maxfilesreached: o, queuecomplete: o, addedfiles: o, previewTemplate: '<div class="dz-preview dz-file-preview">\n  <div class="dz-image"><img data-dz-thumbnail /></div>\n  <div class="dz-details">\n    <div class="dz-size"><span data-dz-size></span></div>\n    <div class="dz-filename"><span data-dz-name></span></div>\n  </div>\n  <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>\n  <div class="dz-error-message"><span data-dz-errormessage></span></div>\n  <div class="dz-success-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Check</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <path d="M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" stroke-opacity="0.198794158" stroke="#747474" fill-opacity="0.816519475" fill="#FFFFFF" sketch:type="MSShapeGroup"></path>\n      </g>\n    </svg>\n  </div>\n  <div class="dz-error-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Error</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <g id="Check-+-Oval-2" sketch:type="MSLayerGroup" stroke="#747474" stroke-opacity="0.198794158" fill="#FFFFFF" fill-opacity="0.816519475">\n          <path d="M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" sketch:type="MSShapeGroup"></path>\n        </g>\n      </g>\n    </svg>\n  </div>\n</div>' }, a = function a() {
          var e, t, n, a, r, i, s;for (a = arguments[0], n = 2 <= arguments.length ? u.call(arguments, 1) : [], i = 0, s = n.length; i < s; i++) {
            t = n[i];for (e in t) {
              r = t[e], a[e] = r;
            }
          }return a;
        }, t.prototype.getAcceptedFiles = function () {
          var e, t, n, a, r;for (a = this.files, r = [], t = 0, n = a.length; t < n; t++) {
            e = a[t], e.accepted && r.push(e);
          }return r;
        }, t.prototype.getRejectedFiles = function () {
          var e, t, n, a, r;for (a = this.files, r = [], t = 0, n = a.length; t < n; t++) {
            e = a[t], e.accepted || r.push(e);
          }return r;
        }, t.prototype.getFilesWithStatus = function (e) {
          var t, n, a, r, i;for (r = this.files, i = [], n = 0, a = r.length; n < a; n++) {
            t = r[n], t.status === e && i.push(t);
          }return i;
        }, t.prototype.getQueuedFiles = function () {
          return this.getFilesWithStatus(t.QUEUED);
        }, t.prototype.getUploadingFiles = function () {
          return this.getFilesWithStatus(t.UPLOADING);
        }, t.prototype.getAddedFiles = function () {
          return this.getFilesWithStatus(t.ADDED);
        }, t.prototype.getActiveFiles = function () {
          var e, n, a, r, i;for (r = this.files, i = [], n = 0, a = r.length; n < a; n++) {
            e = r[n], e.status !== t.UPLOADING && e.status !== t.QUEUED || i.push(e);
          }return i;
        }, t.prototype.init = function () {
          var e, n, a, r, i, s, o;for ("form" === this.element.tagName && this.element.setAttribute("enctype", "multipart/form-data"), this.element.classList.contains("dropzone") && !this.element.querySelector(".dz-message") && this.element.appendChild(t.createElement('<div class="dz-default dz-message"><span>' + this.options.dictDefaultMessage + "</span></div>")), this.clickableElements.length && (a = function (e) {
            return function () {
              return e.hiddenFileInput && e.hiddenFileInput.parentNode.removeChild(e.hiddenFileInput), e.hiddenFileInput = document.createElement("input"), e.hiddenFileInput.setAttribute("type", "file"), (null == e.options.maxFiles || e.options.maxFiles > 1) && e.hiddenFileInput.setAttribute("multiple", "multiple"), e.hiddenFileInput.className = "dz-hidden-input", null != e.options.acceptedFiles && e.hiddenFileInput.setAttribute("accept", e.options.acceptedFiles), null != e.options.capture && e.hiddenFileInput.setAttribute("capture", e.options.capture), e.hiddenFileInput.style.visibility = "hidden", e.hiddenFileInput.style.position = "absolute", e.hiddenFileInput.style.top = "0", e.hiddenFileInput.style.left = "0", e.hiddenFileInput.style.height = "0", e.hiddenFileInput.style.width = "0", document.querySelector(e.options.hiddenInputContainer).appendChild(e.hiddenFileInput), e.hiddenFileInput.addEventListener("change", function () {
                var t, n, r, i;if (n = e.hiddenFileInput.files, n.length) for (r = 0, i = n.length; r < i; r++) {
                  t = n[r], e.addFile(t);
                }return e.emit("addedfiles", n), a();
              });
            };
          }(this))(), this.URL = null != (s = window.URL) ? s : window.webkitURL, o = this.events, r = 0, i = o.length; r < i; r++) {
            e = o[r], this.on(e, this.options[e]);
          }return this.on("uploadprogress", function (e) {
            return function () {
              return e.updateTotalUploadProgress();
            };
          }(this)), this.on("removedfile", function (e) {
            return function () {
              return e.updateTotalUploadProgress();
            };
          }(this)), this.on("canceled", function (e) {
            return function (t) {
              return e.emit("complete", t);
            };
          }(this)), this.on("complete", function (e) {
            return function (t) {
              if (0 === e.getAddedFiles().length && 0 === e.getUploadingFiles().length && 0 === e.getQueuedFiles().length) return setTimeout(function () {
                return e.emit("queuecomplete");
              }, 0);
            };
          }(this)), n = function n(e) {
            return e.stopPropagation(), e.preventDefault ? e.preventDefault() : e.returnValue = !1;
          }, this.listeners = [{ element: this.element, events: { dragstart: function (e) {
                return function (t) {
                  return e.emit("dragstart", t);
                };
              }(this), dragenter: function (e) {
                return function (t) {
                  return n(t), e.emit("dragenter", t);
                };
              }(this), dragover: function (e) {
                return function (t) {
                  var a;try {
                    a = t.dataTransfer.effectAllowed;
                  } catch (e) {}return t.dataTransfer.dropEffect = "move" === a || "linkMove" === a ? "move" : "copy", n(t), e.emit("dragover", t);
                };
              }(this), dragleave: function (e) {
                return function (t) {
                  return e.emit("dragleave", t);
                };
              }(this), drop: function (e) {
                return function (t) {
                  return n(t), e.drop(t);
                };
              }(this), dragend: function (e) {
                return function (t) {
                  return e.emit("dragend", t);
                };
              }(this) } }], this.clickableElements.forEach(function (e) {
            return function (n) {
              return e.listeners.push({ element: n, events: { click: function click(a) {
                    return (n !== e.element || a.target === e.element || t.elementInside(a.target, e.element.querySelector(".dz-message"))) && e.hiddenFileInput.click(), !0;
                  } } });
            };
          }(this)), this.enable(), this.options.init.call(this);
        }, t.prototype.destroy = function () {
          var e;return this.disable(), this.removeAllFiles(!0), (null != (e = this.hiddenFileInput) ? e.parentNode : void 0) && (this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput), this.hiddenFileInput = null), delete this.element.dropzone, t.instances.splice(t.instances.indexOf(this), 1);
        }, t.prototype.updateTotalUploadProgress = function () {
          var e, t, n, a, r, i, s, o;if (a = 0, n = 0, e = this.getActiveFiles(), e.length) {
            for (o = this.getActiveFiles(), i = 0, s = o.length; i < s; i++) {
              t = o[i], a += t.upload.bytesSent, n += t.upload.total;
            }r = 100 * a / n;
          } else r = 100;return this.emit("totaluploadprogress", r, n, a);
        }, t.prototype._getParamName = function (e) {
          return "function" == typeof this.options.paramName ? this.options.paramName(e) : this.options.paramName + (this.options.uploadMultiple ? "[" + e + "]" : "");
        }, t.prototype._renameFilename = function (e) {
          return "function" != typeof this.options.renameFilename ? e : this.options.renameFilename(e);
        }, t.prototype.getFallbackForm = function () {
          var e, n, a, r;return (e = this.getExistingFallback()) ? e : (a = '<div class="dz-fallback">', this.options.dictFallbackText && (a += "<p>" + this.options.dictFallbackText + "</p>"), a += '<input type="file" name="' + this._getParamName(0) + '" ' + (this.options.uploadMultiple ? 'multiple="multiple"' : void 0) + ' /><input type="submit" value="Upload!"></div>', n = t.createElement(a), "FORM" !== this.element.tagName ? (r = t.createElement('<form action="' + this.options.url + '" enctype="multipart/form-data" method="' + this.options.method + '"></form>'), r.appendChild(n)) : (this.element.setAttribute("enctype", "multipart/form-data"), this.element.setAttribute("method", this.options.method)), null != r ? r : n);
        }, t.prototype.getExistingFallback = function () {
          var e, t, n, a, r, i;for (t = function t(e) {
            var t, n, a;for (n = 0, a = e.length; n < a; n++) {
              if (t = e[n], /(^| )fallback($| )/.test(t.className)) return t;
            }
          }, i = ["div", "form"], a = 0, r = i.length; a < r; a++) {
            if (n = i[a], e = t(this.element.getElementsByTagName(n))) return e;
          }
        }, t.prototype.setupEventListeners = function () {
          var e, t, n, a, r, i, s;for (i = this.listeners, s = [], a = 0, r = i.length; a < r; a++) {
            e = i[a], s.push(function () {
              var a, r;a = e.events, r = [];for (t in a) {
                n = a[t], r.push(e.element.addEventListener(t, n, !1));
              }return r;
            }());
          }return s;
        }, t.prototype.removeEventListeners = function () {
          var e, t, n, a, r, i, s;for (i = this.listeners, s = [], a = 0, r = i.length; a < r; a++) {
            e = i[a], s.push(function () {
              var a, r;a = e.events, r = [];for (t in a) {
                n = a[t], r.push(e.element.removeEventListener(t, n, !1));
              }return r;
            }());
          }return s;
        }, t.prototype.disable = function () {
          var e, t, n, a, r;for (this.clickableElements.forEach(function (e) {
            return e.classList.remove("dz-clickable");
          }), this.removeEventListeners(), a = this.files, r = [], t = 0, n = a.length; t < n; t++) {
            e = a[t], r.push(this.cancelUpload(e));
          }return r;
        }, t.prototype.enable = function () {
          return this.clickableElements.forEach(function (e) {
            return e.classList.add("dz-clickable");
          }), this.setupEventListeners();
        }, t.prototype.filesize = function (e) {
          var t, n, a, r, i, s, o, d;if (a = 0, r = "b", e > 0) {
            for (s = ["TB", "GB", "MB", "KB", "b"], n = o = 0, d = s.length; o < d; n = ++o) {
              if (i = s[n], t = Math.pow(this.options.filesizeBase, 4 - n) / 10, e >= t) {
                a = e / Math.pow(this.options.filesizeBase, 4 - n), r = i;break;
              }
            }a = Math.round(10 * a) / 10;
          }return "<strong>" + a + "</strong> " + r;
        }, t.prototype._updateMaxFilesReachedClass = function () {
          return null != this.options.maxFiles && this.getAcceptedFiles().length >= this.options.maxFiles ? (this.getAcceptedFiles().length === this.options.maxFiles && this.emit("maxfilesreached", this.files), this.element.classList.add("dz-max-files-reached")) : this.element.classList.remove("dz-max-files-reached");
        }, t.prototype.drop = function (e) {
          var t, n;e.dataTransfer && (this.emit("drop", e), t = e.dataTransfer.files, this.emit("addedfiles", t), t.length && (n = e.dataTransfer.items, n && n.length && null != n[0].webkitGetAsEntry ? this._addFilesFromItems(n) : this.handleFiles(t)));
        }, t.prototype.paste = function (e) {
          var t, n;if (null != (null != e && null != (n = e.clipboardData) ? n.items : void 0)) return this.emit("paste", e), t = e.clipboardData.items, t.length ? this._addFilesFromItems(t) : void 0;
        }, t.prototype.handleFiles = function (e) {
          var t, n, a, r;for (r = [], n = 0, a = e.length; n < a; n++) {
            t = e[n], r.push(this.addFile(t));
          }return r;
        }, t.prototype._addFilesFromItems = function (e) {
          var t, n, a, r, i;for (i = [], a = 0, r = e.length; a < r; a++) {
            n = e[a], null != n.webkitGetAsEntry && (t = n.webkitGetAsEntry()) ? t.isFile ? i.push(this.addFile(n.getAsFile())) : t.isDirectory ? i.push(this._addFilesFromDirectory(t, t.name)) : i.push(void 0) : null != n.getAsFile && (null == n.kind || "file" === n.kind) ? i.push(this.addFile(n.getAsFile())) : i.push(void 0);
          }return i;
        }, t.prototype._addFilesFromDirectory = function (e, t) {
          var n, a, r;return n = e.createReader(), a = function a(e) {
            return "undefined" != typeof console && null !== console ? void console.log : void 0;
          }, (r = function (e) {
            return function () {
              return n.readEntries(function (n) {
                var a, i, s;if (n.length > 0) {
                  for (i = 0, s = n.length; i < s; i++) {
                    a = n[i], a.isFile ? a.file(function (n) {
                      if (!e.options.ignoreHiddenFiles || "." !== n.name.substring(0, 1)) return n.fullPath = t + "/" + n.name, e.addFile(n);
                    }) : a.isDirectory && e._addFilesFromDirectory(a, t + "/" + a.name);
                  }r();
                }return null;
              }, a);
            };
          }(this))();
        }, t.prototype.accept = function (e, n) {
          return e.size > 1024 * this.options.maxFilesize * 1024 ? n(this.options.dictFileTooBig.replace("{{filesize}}", Math.round(e.size / 1024 / 10.24) / 100).replace("{{maxFilesize}}", this.options.maxFilesize)) : t.isValidFile(e, this.options.acceptedFiles) ? null != this.options.maxFiles && this.getAcceptedFiles().length >= this.options.maxFiles ? (n(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}", this.options.maxFiles)), this.emit("maxfilesexceeded", e)) : this.options.accept.call(this, e, n) : n(this.options.dictInvalidFileType);
        }, t.prototype.addFile = function (e) {
          return e.upload = { progress: 0, total: e.size, bytesSent: 0 }, this.files.push(e), e.status = t.ADDED, this.emit("addedfile", e), this._enqueueThumbnail(e), this.accept(e, function (t) {
            return function (n) {
              return n ? (e.accepted = !1, t._errorProcessing([e], n)) : (e.accepted = !0, t.options.autoQueue && t.enqueueFile(e)), t._updateMaxFilesReachedClass();
            };
          }(this));
        }, t.prototype.enqueueFiles = function (e) {
          var t, n, a;for (n = 0, a = e.length; n < a; n++) {
            t = e[n], this.enqueueFile(t);
          }return null;
        }, t.prototype.enqueueFile = function (e) {
          if (e.status !== t.ADDED || !0 !== e.accepted) throw new Error("This file can't be queued because it has already been processed or was rejected.");if (e.status = t.QUEUED, this.options.autoProcessQueue) return setTimeout(function (e) {
            return function () {
              return e.processQueue();
            };
          }(this), 0);
        }, t.prototype._thumbnailQueue = [], t.prototype._processingThumbnail = !1, t.prototype._enqueueThumbnail = function (e) {
          if (this.options.createImageThumbnails && e.type.match(/image.*/) && e.size <= 1024 * this.options.maxThumbnailFilesize * 1024) return this._thumbnailQueue.push(e), setTimeout(function (e) {
            return function () {
              return e._processThumbnailQueue();
            };
          }(this), 0);
        }, t.prototype._processThumbnailQueue = function () {
          if (!this._processingThumbnail && 0 !== this._thumbnailQueue.length) return this._processingThumbnail = !0, this.createThumbnail(this._thumbnailQueue.shift(), function (e) {
            return function () {
              return e._processingThumbnail = !1, e._processThumbnailQueue();
            };
          }(this));
        }, t.prototype.removeFile = function (e) {
          if (e.status === t.UPLOADING && this.cancelUpload(e), this.files = d(this.files, e), this.emit("removedfile", e), 0 === this.files.length) return this.emit("reset");
        }, t.prototype.removeAllFiles = function (e) {
          var n, a, r, i;for (null == e && (e = !1), i = this.files.slice(), a = 0, r = i.length; a < r; a++) {
            n = i[a], (n.status !== t.UPLOADING || e) && this.removeFile(n);
          }return null;
        }, t.prototype.createThumbnail = function (e, t) {
          var n;return n = new FileReader(), n.onload = function (a) {
            return function () {
              return "image/svg+xml" === e.type ? (a.emit("thumbnail", e, n.result), void (null != t && t())) : a.createThumbnailFromUrl(e, n.result, t);
            };
          }(this), n.readAsDataURL(e);
        }, t.prototype.createThumbnailFromUrl = function (e, t, n, a) {
          var r;return r = document.createElement("img"), a && (r.crossOrigin = a), r.onload = function (t) {
            return function () {
              var a, i, o, d, u, l, _, c;if (e.width = r.width, e.height = r.height, o = t.options.resize.call(t, e), null == o.trgWidth && (o.trgWidth = o.optWidth), null == o.trgHeight && (o.trgHeight = o.optHeight), a = document.createElement("canvas"), i = a.getContext("2d"), a.width = o.trgWidth, a.height = o.trgHeight, s(i, r, null != (u = o.srcX) ? u : 0, null != (l = o.srcY) ? l : 0, o.srcWidth, o.srcHeight, null != (_ = o.trgX) ? _ : 0, null != (c = o.trgY) ? c : 0, o.trgWidth, o.trgHeight), d = a.toDataURL("image/png"), t.emit("thumbnail", e, d), null != n) return n();
            };
          }(this), null != n && (r.onerror = n), r.src = t;
        }, t.prototype.processQueue = function () {
          var e, t, n, a;if (t = this.options.parallelUploads, n = this.getUploadingFiles().length, e = n, !(n >= t) && (a = this.getQueuedFiles(), a.length > 0)) {
            if (this.options.uploadMultiple) return this.processFiles(a.slice(0, t - n));for (; e < t;) {
              if (!a.length) return;this.processFile(a.shift()), e++;
            }
          }
        }, t.prototype.processFile = function (e) {
          return this.processFiles([e]);
        }, t.prototype.processFiles = function (e) {
          var n, a, r;for (a = 0, r = e.length; a < r; a++) {
            n = e[a], n.processing = !0, n.status = t.UPLOADING, this.emit("processing", n);
          }return this.options.uploadMultiple && this.emit("processingmultiple", e), this.uploadFiles(e);
        }, t.prototype._getFilesWithXhr = function (e) {
          var t;return function () {
            var n, a, r, i;for (r = this.files, i = [], n = 0, a = r.length; n < a; n++) {
              t = r[n], t.xhr === e && i.push(t);
            }return i;
          }.call(this);
        }, t.prototype.cancelUpload = function (e) {
          var n, a, r, i, s, o, d;if (e.status === t.UPLOADING) {
            for (a = this._getFilesWithXhr(e.xhr), r = 0, s = a.length; r < s; r++) {
              n = a[r], n.status = t.CANCELED;
            }for (e.xhr.abort(), i = 0, o = a.length; i < o; i++) {
              n = a[i], this.emit("canceled", n);
            }this.options.uploadMultiple && this.emit("canceledmultiple", a);
          } else (d = e.status) !== t.ADDED && d !== t.QUEUED || (e.status = t.CANCELED, this.emit("canceled", e), this.options.uploadMultiple && this.emit("canceledmultiple", [e]));if (this.options.autoProcessQueue) return this.processQueue();
        }, r = function r() {
          var e, t;return t = arguments[0], e = 2 <= arguments.length ? u.call(arguments, 1) : [], "function" == typeof t ? t.apply(this, e) : t;
        }, t.prototype.uploadFile = function (e) {
          return this.uploadFiles([e]);
        }, t.prototype.uploadFiles = function (e) {
          var n, i, s, o, d, u, l, _, c, m, h, f, p, M, y, v, L, g, Y, k, w, D, T, b, S, H, x, j, F, C, O, E, P, A;for (Y = new XMLHttpRequest(), k = 0, b = e.length; k < b; k++) {
            n = e[k], n.xhr = Y;
          }f = r(this.options.method, e), L = r(this.options.url, e), Y.open(f, L, !0), Y.withCredentials = !!this.options.withCredentials, y = null, s = function (t) {
            return function () {
              var a, r, i;for (i = [], a = 0, r = e.length; a < r; a++) {
                n = e[a], i.push(t._errorProcessing(e, y || t.options.dictResponseError.replace("{{statusCode}}", Y.status), Y));
              }return i;
            };
          }(this), v = function (t) {
            return function (a) {
              var r, i, s, o, d, u, l, _, c;if (null != a) for (i = 100 * a.loaded / a.total, s = 0, u = e.length; s < u; s++) {
                n = e[s], n.upload = { progress: i, total: a.total, bytesSent: a.loaded };
              } else {
                for (r = !0, i = 100, o = 0, l = e.length; o < l; o++) {
                  n = e[o], 100 === n.upload.progress && n.upload.bytesSent === n.upload.total || (r = !1), n.upload.progress = i, n.upload.bytesSent = n.upload.total;
                }if (r) return;
              }for (c = [], d = 0, _ = e.length; d < _; d++) {
                n = e[d], c.push(t.emit("uploadprogress", n, i, n.upload.bytesSent));
              }return c;
            };
          }(this), Y.onload = function (n) {
            return function (a) {
              var r;if (e[0].status !== t.CANCELED && 4 === Y.readyState) {
                if (y = Y.responseText, Y.getResponseHeader("content-type") && ~Y.getResponseHeader("content-type").indexOf("application/json")) try {
                  y = JSON.parse(y);
                } catch (e) {
                  a = e, y = "Invalid JSON response from server.";
                }return v(), 200 <= (r = Y.status) && r < 300 ? n._finished(e, y, a) : s();
              }
            };
          }(this), Y.onerror = function (n) {
            return function () {
              if (e[0].status !== t.CANCELED) return s();
            };
          }(), M = null != (F = Y.upload) ? F : Y, M.onprogress = v, u = { Accept: "application/json", "Cache-Control": "no-cache", "X-Requested-With": "XMLHttpRequest" }, this.options.headers && a(u, this.options.headers);for (o in u) {
            (d = u[o]) && Y.setRequestHeader(o, d);
          }if (i = new FormData(), this.options.params) {
            C = this.options.params;for (h in C) {
              g = C[h], i.append(h, g);
            }
          }for (w = 0, S = e.length; w < S; w++) {
            n = e[w], this.emit("sending", n, Y, i);
          }if (this.options.uploadMultiple && this.emit("sendingmultiple", e, Y, i), "FORM" === this.element.tagName) for (O = this.element.querySelectorAll("input, textarea, select, button"), D = 0, H = O.length; D < H; D++) {
            if (_ = O[D], c = _.getAttribute("name"), m = _.getAttribute("type"), "SELECT" === _.tagName && _.hasAttribute("multiple")) for (E = _.options, T = 0, x = E.length; T < x; T++) {
              p = E[T], p.selected && i.append(c, p.value);
            } else (!m || "checkbox" !== (P = m.toLowerCase()) && "radio" !== P || _.checked) && i.append(c, _.value);
          }for (l = j = 0, A = e.length - 1; 0 <= A ? j <= A : j >= A; l = 0 <= A ? ++j : --j) {
            i.append(this._getParamName(l), e[l], this._renameFilename(e[l].name));
          }return this.submitRequest(Y, i, e);
        }, t.prototype.submitRequest = function (e, t, n) {
          return e.send(t);
        }, t.prototype._finished = function (e, n, a) {
          var r, i, s;for (i = 0, s = e.length; i < s; i++) {
            r = e[i], r.status = t.SUCCESS, this.emit("success", r, n, a), this.emit("complete", r);
          }if (this.options.uploadMultiple && (this.emit("successmultiple", e, n, a), this.emit("completemultiple", e)), this.options.autoProcessQueue) return this.processQueue();
        }, t.prototype._errorProcessing = function (e, n, a) {
          var r, i, s;for (i = 0, s = e.length; i < s; i++) {
            r = e[i], r.status = t.ERROR, this.emit("error", r, n, a), this.emit("complete", r);
          }if (this.options.uploadMultiple && (this.emit("errormultiple", e, n, a), this.emit("completemultiple", e)), this.options.autoProcessQueue) return this.processQueue();
        }, t;
      }(n), t.version = "4.3.0", t.options = {}, t.optionsForElement = function (e) {
        return e.getAttribute("id") ? t.options[a(e.getAttribute("id"))] : void 0;
      }, t.instances = [], t.forElement = function (e) {
        if ("string" == typeof e && (e = document.querySelector(e)), null == (null != e ? e.dropzone : void 0)) throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");return e.dropzone;
      }, t.autoDiscover = !0, t.discover = function () {
        var e, n, a, r, i, s;for (document.querySelectorAll ? a = document.querySelectorAll(".dropzone") : (a = [], e = function e(_e2) {
          var t, n, r, i;for (i = [], n = 0, r = _e2.length; n < r; n++) {
            t = _e2[n], /(^| )dropzone($| )/.test(t.className) ? i.push(a.push(t)) : i.push(void 0);
          }return i;
        }, e(document.getElementsByTagName("div")), e(document.getElementsByTagName("form"))), s = [], r = 0, i = a.length; r < i; r++) {
          n = a[r], !1 !== t.optionsForElement(n) ? s.push(new t(n)) : s.push(void 0);
        }return s;
      }, t.blacklistedBrowsers = [/opera.*Macintosh.*version\/12/i], t.isBrowserSupported = function () {
        var e, n, a, r, i;if (e = !0, window.File && window.FileReader && window.FileList && window.Blob && window.FormData && document.querySelector) {
          if ("classList" in document.createElement("a")) for (i = t.blacklistedBrowsers, a = 0, r = i.length; a < r; a++) {
            n = i[a], n.test(navigator.userAgent) && (e = !1);
          } else e = !1;
        } else e = !1;return e;
      }, d = function d(e, t) {
        var n, a, r, i;for (i = [], a = 0, r = e.length; a < r; a++) {
          (n = e[a]) !== t && i.push(n);
        }return i;
      }, a = function a(e) {
        return e.replace(/[\-_](\w)/g, function (e) {
          return e.charAt(1).toUpperCase();
        });
      }, t.createElement = function (e) {
        var t;return t = document.createElement("div"), t.innerHTML = e, t.childNodes[0];
      }, t.elementInside = function (e, t) {
        if (e === t) return !0;for (; e = e.parentNode;) {
          if (e === t) return !0;
        }return !1;
      }, t.getElement = function (e, t) {
        var n;if ("string" == typeof e ? n = document.querySelector(e) : null != e.nodeType && (n = e), null == n) throw new Error("Invalid `" + t + "` option provided. Please provide a CSS selector or a plain HTML element.");return n;
      }, t.getElements = function (e, t) {
        var n, a, r, i, s, o, d;if (e instanceof Array) {
          a = [];try {
            for (r = 0, s = e.length; r < s; r++) {
              n = e[r], a.push(this.getElement(n, t));
            }
          } catch (e) {
            e, a = null;
          }
        } else if ("string" == typeof e) for (a = [], d = document.querySelectorAll(e), i = 0, o = d.length; i < o; i++) {
          n = d[i], a.push(n);
        } else null != e.nodeType && (a = [e]);if (null == a || !a.length) throw new Error("Invalid `" + t + "` option provided. Please provide a CSS selector, a plain HTML element or a list of those.");return a;
      }, t.confirm = function (e, t, n) {
        return window.confirm(e) ? t() : null != n ? n() : void 0;
      }, t.isValidFile = function (e, t) {
        var n, a, r, i, s;if (!t) return !0;for (t = t.split(","), a = e.type, n = a.replace(/\/.*$/, ""), i = 0, s = t.length; i < s; i++) {
          if (r = t[i], r = r.trim(), "." === r.charAt(0)) {
            if (-1 !== e.name.toLowerCase().indexOf(r.toLowerCase(), e.name.length - r.length)) return !0;
          } else if (/\/\*$/.test(r)) {
            if (n === r.replace(/\/.*$/, "")) return !0;
          } else if (a === r) return !0;
        }return !1;
      }, "undefined" != typeof jQuery && null !== jQuery && (jQuery.fn.dropzone = function (e) {
        return this.each(function () {
          return new t(this, e);
        });
      }), void 0 !== e && null !== e ? e.exports = t : window.Dropzone = t, t.ADDED = "added", t.QUEUED = "queued", t.ACCEPTED = t.QUEUED, t.UPLOADING = "uploading", t.PROCESSING = t.UPLOADING, t.CANCELED = "canceled", t.ERROR = "error", t.SUCCESS = "success", i = function i(e) {
        var t, n, a, r, i, s, o, d, u;for (e.naturalWidth, s = e.naturalHeight, n = document.createElement("canvas"), n.width = 1, n.height = s, a = n.getContext("2d"), a.drawImage(e, 0, 0), r = a.getImageData(0, 0, 1, s).data, u = 0, i = s, o = s; o > u;) {
          t = r[4 * (o - 1) + 3], 0 === t ? i = o : u = o, o = i + u >> 1;
        }return d = o / s, 0 === d ? 1 : d;
      }, s = function s(e, t, n, a, r, _s2, o, d, u, l) {
        var _;return _ = i(t), e.drawImage(t, n, a, r, _s2, o, d, u, l / _);
      }, r = function r(e, t) {
        var n, a, r, _i2, _s3, o, d, u, l;if (r = !1, l = !0, a = e.document, u = a.documentElement, n = a.addEventListener ? "addEventListener" : "attachEvent", d = a.addEventListener ? "removeEventListener" : "detachEvent", o = a.addEventListener ? "" : "on", _i2 = function i(n) {
          if ("readystatechange" !== n.type || "complete" === a.readyState) return ("load" === n.type ? e : a)[d](o + n.type, _i2, !1), !r && (r = !0) ? t.call(e, n.type || n) : void 0;
        }, _s3 = function s() {
          try {
            u.doScroll("left");
          } catch (e) {
            return e, void setTimeout(_s3, 50);
          }return _i2("poll");
        }, "complete" !== a.readyState) {
          if (a.createEventObject && u.doScroll) {
            try {
              l = !e.frameElement;
            } catch (e) {}l && _s3();
          }return a[n](o + "DOMContentLoaded", _i2, !1), a[n](o + "readystatechange", _i2, !1), e[n](o + "load", _i2, !1);
        }
      }, t._autoDiscoverFunction = function () {
        if (t.autoDiscover) return t.discover();
      }, r(window, t._autoDiscoverFunction);
    }).call(this);
  }).call(t, n(9)(e));
}, function (e, t, n) {
  var a = n(2),
      r = n(153),
      i = n(154),
      s = a(r, i, null, null, null);e.exports = s.exports;
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 }), t.default = { props: { size: { default: "modal-lg" } }, mounted: function mounted() {
      var e = this;document.addEventListener("keydown", function (t) {
        e.show && 27 == t.keyCode && e.close();
      });
    } };
}, function (e, t) {
  var n = function n() {
    var e = this,
        t = e.$createElement,
        n = e._self._c || t;return n("transition", { attrs: { name: "modal" } }, [n("div", { staticClass: "modal media-modal modal-mask", on: { click: function click(t) {
          e.$emit("media-modal-close");
        } } }, [n("div", { staticClass: "modal-dialog", class: [e.size], on: { click: function click(e) {
          e.stopPropagation();
        } } }, [n("div", { staticClass: "modal-content" }, [e._t("default")], 2)])])]);
  },
      a = [];e.exports = { render: n, staticRenderFns: a };
}, function (e, t, n) {
  var a = n(2),
      r = n(156),
      i = n(157),
      s = a(r, i, null, null, null);e.exports = s.exports;
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 }), t.default = { props: { currentPath: {}, prefix: { default: "/admin/" }, show: { default: !1 } }, data: function data() {
      return { errors: [], loading: !1, newFolderName: null, size: "modal-md" };
    }, mounted: function mounted() {
      var e = this;document.addEventListener("keydown", function (t) {
        e.show && 13 === t.keyCode && e.createFolder();
      });
    }, methods: { close: function close() {
        this.newFolderName = null, this.loading = !1, this.errors = [], this.$emit("media-modal-close");
      }, createFolder: function createFolder() {
        var e = this;if (!this.newFolderName) return void (this.errors = ["Please provide a name for the new folder"]);var t = { folder: this.currentPath, new_folder: this.newFolderName };this.loading = !0, axios.post(this.prefix + "browser/folder", t).then(function (t) {
          e.mediaManagerNotify(t.data.success), window.eventHub.$emit("media-manager-reload-folder"), e.close();
        }, function (t) {
          e.errors = t.data.error ? t.data.error : t.statusText, e.loading = !1;
        });
      } } };
}, function (e, t) {
  var n = function n() {
    var e = this,
        t = e.$createElement,
        n = e._self._c || t;return e.show ? n("media-modal", { attrs: { size: e.size, show: e.show }, on: { "media-modal-close": function mediaModalClose(t) {
          e.close();
        } } }, [n("div", [n("div", { staticClass: "modal-header" }, [n("button", { staticClass: "close", attrs: { type: "button" }, on: { click: function click(t) {
          e.close();
        } } }, [e._v("×")]), e._v(" "), n("h4", { staticClass: "modal-title" }, [e._v("New folder")])]), e._v(" "), e.loading ? n("div", { staticClass: "text-center" }, [n("span", { staticClass: "spinner icon-spinner2" }), e._v("Loading...\n        ")]) : n("div", [n("div", { staticClass: "modal-body" }, [n("div", { staticClass: "form-group fg-line" }, [n("label", [e._v("Folder name")]), e._v(" "), n("input", { directives: [{ name: "model", rawName: "v-model", value: e.newFolderName, expression: "newFolderName" }], staticClass: "form-control", attrs: { type: "text" }, domProps: { value: e.newFolderName }, on: { keyup: function keyup(t) {
          if (!("button" in t) && e._k(t.keyCode, "enter", 13)) return null;e.createFolder();
        }, input: function input(t) {
          t.target.composing || (e.newFolderName = t.target.value);
        } } })]), e._v(" "), n("media-errors", { attrs: { errors: e.errors } })], 1), e._v(" "), n("div", { staticClass: "modal-footer" }, [n("button", { staticClass: "btn btn-primary", attrs: { type: "button" }, on: { click: function click(t) {
          e.createFolder();
        } } }, [e._v("\n                    Apply\n                ")]), e._v(" "), n("button", { staticClass: "btn btn-default", attrs: { type: "button" }, on: { click: function click(t) {
          e.close();
        } } }, [e._v("\n                    Cancel\n                ")])])])])]) : e._e();
  },
      a = [];e.exports = { render: n, staticRenderFns: a };
}, function (e, t, n) {
  var a = n(2),
      r = n(159),
      i = n(160),
      s = a(r, i, null, null, null);e.exports = s.exports;
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 }), t.default = { props: { currentPath: {}, currentFile: {}, prefix: { default: "/admin/" }, show: { default: !1 } }, data: function data() {
      return { loading: !1, newItemName: null, size: "modal-md" };
    }, mounted: function mounted() {
      var e = this;document.addEventListener("keydown", function (t) {
        e.show && 13 === t.keyCode && e.deleteItem();
      });
    }, methods: { close: function close() {
        this.newItemName = null, this.loading = !1, this.$emit("media-modal-close");
      }, deleteItem: function deleteItem(e, t) {
        return this.isFolder(this.currentFile) ? this.deleteFolder(e, t) : this.deleteFile(e, t);
      }, deleteFile: function deleteFile() {
        if (this.currentFile) {
          var e = { path: this.currentFile.fullPath };this.byeBye(this.prefix + "browser/file", e);
        }
      }, deleteFolder: function deleteFolder() {
        if (this.isFolder(this.currentFile)) {
          var e = { path: this.currentFile.fullPath };this.byeBye(this.prefix + "browser/folder", e);
        }
      }, byeBye: function byeBye(e, t) {
        var n = this;this.loading = !0, axios.delete(e, { params: t }).then(function (e) {
          window.eventHub.$emit("media-manager-reload-folder"), n.mediaManagerNotify(e.data.success), n.close();
        }, function (e) {
          var t = e.data.error ? e.data.error : e.statusText;n.mediaManagerNotify(t, "danger"), n.close();
        });
      } } };
}, function (e, t) {
  var n = function n() {
    var e = this,
        t = e.$createElement,
        n = e._self._c || t;return e.show ? n("media-modal", { attrs: { size: e.size, show: e.show }, on: { "media-modal-close": function mediaModalClose(t) {
          e.close();
        } } }, [n("div", [n("div", { staticClass: "modal-header" }, [n("button", { staticClass: "close", attrs: { type: "button" }, on: { click: function click(t) {
          e.close();
        } } }, [e._v("×")]), e._v(" "), n("h4", { staticClass: "modal-title" }, [e._v("Delete item")])]), e._v(" "), e.loading ? n("div", { staticClass: "text-center" }, [n("span", { staticClass: "spinner icon-spinner2" }), e._v("Loading...\n        ")]) : n("div", [n("div", { staticClass: "modal-body" }, [n("div", { staticClass: "form-group" }, [n("label", [e._v("Are you sure you want to delete the following item?")]), e._v(" "), n("p", { staticClass: "form-control-static" }, [e._v(e._s(this.getItemName(this.currentFile)))])])]), e._v(" "), n("div", { staticClass: "modal-footer" }, [n("button", { staticClass: "btn btn-primary", attrs: { type: "button" }, on: { click: function click(t) {
          e.deleteItem();
        } } }, [e._v("\n                    Delete\n                ")]), e._v(" "), n("button", { staticClass: "btn btn-default", attrs: { type: "button" }, on: { click: e.close } }, [e._v("\n                    Cancel\n                ")])])])])]) : e._e();
  },
      a = [];e.exports = { render: n, staticRenderFns: a };
}, function (e, t, n) {
  var a = n(2),
      r = n(162),
      i = n(163),
      s = a(r, i, null, null, null);e.exports = s.exports;
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 }), t.default = { props: ["errors"] };
}, function (e, t) {
  var n = function n() {
    var e = this,
        t = e.$createElement,
        n = e._self._c || t;return e.errors.length > 0 ? n("div", { staticClass: "modal-errors", attrs: { transition: "expand" } }, [n("ul", e._l(e.errors, function (t) {
      return n("li", [e._v(e._s(t))]);
    }))]) : e._e();
  },
      a = [];e.exports = { render: n, staticRenderFns: a };
}, function (e, t, n) {
  var a = n(2),
      r = n(165),
      i = n(166),
      s = a(r, i, null, null, null);e.exports = s.exports;
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 }), t.default = { props: { currentPath: {}, currentFile: {}, prefix: { default: "/admin/" }, show: { default: !1 } }, data: function data() {
      return { allDirectories: {}, newFolderLocation: null, loading: !1, size: "modal-md" };
    }, watch: { show: function show(e) {
        e && this.open();
      } }, mounted: function mounted() {
      var e = this;document.addEventListener("keydown", function (t) {
        e.show && 13 === t.keyCode && e.moveItem();
      });
    }, methods: { close: function close() {
        this.newFolderName = null, this.loading = !1, this.$emit("media-modal-close");
      }, open: function open() {
        var e = this;axios.get(this.prefix + "browser/directories").then(function (t) {
          e.newFolderLocation = e.currentPath, e.allDirectories = t.data;
        }, function (t) {
          var n = t.data.error ? t.data.error : t.statusText;e.mediaManagerNotify(n, "danger");
        });
      }, moveItem: function moveItem() {
        var e = this,
            t = { path: this.currentPath, currentItem: this.getItemName(this.currentFile), newPath: this.newFolderLocation, type: this.isFolder(this.currentFile) ? "Folder" : "File" };this.loading = !0, axios.post(this.prefix + "browser/move", t).then(function (t) {
          window.eventHub.$emit("media-manager-reload-folder"), window.eventHub.$emit("media-manager-notification", t.data.success), e.close();
        }, function (t) {
          window.eventHub.$emit("reload-folder", t.data.success), window.eventHub.$emit("media-manager-notification", t.data.error ? t.data.error : t.statusText, "danger"), e.loading = !1;
        });
      } } };
}, function (e, t) {
  var n = function n() {
    var e = this,
        t = e.$createElement,
        n = e._self._c || t;return e.show ? n("media-modal", { attrs: { size: e.size, show: e.show }, on: { "media-modal-close": function mediaModalClose(t) {
          e.close();
        } } }, [n("div", [n("div", { staticClass: "modal-header" }, [n("button", { staticClass: "close", attrs: { type: "button" }, on: { click: function click(t) {
          e.close();
        } } }, [e._v("×")]), e._v(" "), n("h4", { staticClass: "modal-title" }, [e._v("Move item")])]), e._v(" "), e.loading ? n("div", { staticClass: "text-center" }, [n("span", { staticClass: "spinner icon-spinner2" }), e._v("Loading...\n        ")]) : n("div", [n("div", { staticClass: "modal-body" }, [n("div", { staticClass: "form-group" }, [n("label", [e._v("Item name")]), e._v(" "), n("p", { staticClass: "static" }, [e._v(e._s(this.getItemName(this.currentFile)))])]), e._v(" "), n("div", { staticClass: "form-group" }, [n("label", [e._v("Move to")]), e._v(" "), n("select", { directives: [{ name: "model", rawName: "v-model", value: e.newFolderLocation, expression: "newFolderLocation" }], staticClass: "form-control", attrs: { id: "newFolderLocation", name: "newFolderLocation" }, on: { keyup: function keyup(t) {
          if (!("button" in t) && e._k(t.keyCode, "enter", 13)) return null;e.moveItem();
        }, change: function change(t) {
          var n = Array.prototype.filter.call(t.target.options, function (e) {
            return e.selected;
          }).map(function (e) {
            return "_value" in e ? e._value : e.value;
          });e.newFolderLocation = t.target.multiple ? n : n[0];
        } } }, e._l(e.allDirectories, function (t, a) {
      return n("option", { domProps: { value: a, innerHTML: e._s(t) } });
    }))])]), e._v(" "), n("div", { staticClass: "modal-footer" }, [n("button", { staticClass: "btn btn-primary", attrs: { type: "button" }, on: { click: function click(t) {
          e.moveItem();
        } } }, [e._v("\n                    Apply\n                ")]), e._v(" "), n("button", { staticClass: "btn btn-default", attrs: { type: "button" }, on: { click: function click(t) {
          e.close();
        } } }, [e._v("\n                    Cancel\n                ")])])])])]) : e._e();
  },
      a = [];e.exports = { render: n, staticRenderFns: a };
}, function (e, t, n) {
  var a = n(2),
      r = n(168),
      i = n(169),
      s = a(r, i, null, null, null);e.exports = s.exports;
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 }), t.default = { props: { currentPath: {}, currentFile: {}, prefix: { default: "/admin/" }, show: { default: !1 } }, data: function data() {
      return { errors: [], loading: !1, newItemName: null, size: "modal-md" };
    }, mounted: function mounted() {
      var e = this;document.addEventListener("keydown", function (t) {
        e.show && 13 === t.keyCode && e.renameItem();
      });
    }, methods: { close: function close() {
        this.errors = [], this.newItemName = null, this.loading = !1, this.$emit("media-modal-close");
      }, renameItem: function renameItem() {
        var e = this;if (this.newItemName) {
          this.loading = !0;var t = this.getItemName(this.currentFile),
              n = { path: this.currentPath, original: t, newName: this.newItemName, type: this.isFolder(this.currentFile) ? "Folder" : "File" };axios.post(this.prefix + "browser/rename", n).then(function (t) {
            window.eventHub.$emit("media-manager-reload-folder"), e.mediaManagerNotify(t.data.success), e.close();
          }, function (t) {
            e.errors = t.data.error ? t.data.error : t.statusText, e.loading = !1;
          });
        } else this.errors = ["Please provide a new name for this item"];
      } } };
}, function (e, t) {
  var n = function n() {
    var e = this,
        t = e.$createElement,
        n = e._self._c || t;return e.show ? n("media-modal", { attrs: { size: e.size, show: e.show }, on: { "media-modal-close": function mediaModalClose(t) {
          e.close();
        } } }, [n("div", [n("div", { staticClass: "modal-header" }, [n("button", { staticClass: "close", attrs: { type: "button" }, on: { click: function click(t) {
          e.close();
        } } }, [e._v("×")]), e._v(" "), n("h4", { staticClass: "modal-title" }, [e._v("Rename item")])]), e._v(" "), e.loading ? n("div", { staticClass: "text-center" }, [n("span", { staticClass: "spinner icon-spinner2" }), e._v("Loading...\n        ")]) : n("div", [n("div", { staticClass: "modal-body" }, [n("div", { staticClass: "form-group" }, [n("label", [e._v("Current name")]), e._v(" "), n("p", { staticClass: "form-control-static" }, [e._v(e._s(this.getItemName(this.currentFile)))])]), e._v(" "), n("div", { staticClass: "form-group fg-line" }, [n("label", [e._v("New name")]), e._v(" "), n("input", { directives: [{ name: "model", rawName: "v-model", value: e.newItemName, expression: "newItemName" }], staticClass: "form-control", attrs: { type: "text" }, domProps: { value: e.newItemName }, on: { keyup: function keyup(t) {
          if (!("button" in t) && e._k(t.keyCode, "enter", 13)) return null;e.renameItem();
        }, input: function input(t) {
          t.target.composing || (e.newItemName = t.target.value);
        } } })]), e._v(" "), n("media-errors", { attrs: { errors: e.errors } })], 1), e._v(" "), n("div", { staticClass: "modal-footer" }, [n("button", { staticClass: "btn btn-primary", attrs: { type: "button" }, on: { click: function click(t) {
          e.renameItem();
        } } }, [e._v("\n                    Apply\n                ")]), e._v(" "), n("button", { staticClass: "btn btn-default", attrs: { type: "button" }, on: { click: function click(t) {
          e.close();
        } } }, [e._v("\n                    Cancel\n                ")])])])])]) : e._e();
  },
      a = [];e.exports = { render: n, staticRenderFns: a };
}, function (e, t, n) {
  var a = n(2),
      r = n(171),
      i = n(172),
      s = a(r, i, null, null, null);e.exports = s.exports;
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 }), t.default = { props: { isModal: { default: !1 }, prefix: { default: "/admin/" }, selectedEventName: { default: !1 }, show: { default: !1 } }, data: function data() {
      return { breadCrumbs: {}, currentFile: null, currentPath: null, files: [], folderName: null, folders: [], loading: !0, uploadProgress: 0, itemsCount: 0, showCreateFolderModal: !1, showDeleteItemModal: !1, showMoveItemModal: !1, showRenameItemModal: !1, sortDirection: !1 };
    }, computed: { isFolderEmpty: function isFolderEmpty() {
        return this.files.length + this.folders.length === 0;
      } }, created: function created() {
      window.eventHub.$on("media-manager-reload-folder", this.loadFolder);
    }, beforeDestroy: function beforeDestroy() {
      window.eventHub.$off("media-manager-reload-folder", this.loadFolder);
    }, mounted: function mounted() {
      this.loadFolder(), this.dragUpload(), this.prefix.endsWith("/") || (this.prefix = this.prefix + "/");
    }, methods: { orderBy: function orderBy(e) {
        this.sortDirection = !this.sortDirection;var t = this.sortDirection ? "desc" : "asc";this.files = _.orderBy(this.files, [e], [t]), this.folders = _.orderBy(this.folders, [e], [t]);
      }, close: function close() {
        this.breadCrumbs = {}, this.currentFile = null, this.currentPath = null, this.files = {}, this.folderName = null, this.folders = {}, this.itemsCount = 0, this.$emit("media-modal-close");
      }, loadFolder: function loadFolder(e) {
        var t = this;this.uploadProgress = 0, e || (e = this.currentPath ? this.currentPath : ""), this.loading = !0, this.currentFile = !1, axios.get(this.prefix + "browser/index?path=" + e).then(function (e) {
          t.breadCrumbs = e.data.breadCrumbs, t.currentFile = null, t.currentPath = e.data.folder, t.loading = !1, t.files = e.data.files, t.folderName = e.data.folderName, t.folders = e.data.subFolders, t.itemsCount = e.data.itemsCount;
        }, function (e) {
          e.data.error && t.mediaManagerNotify(e.data.error, "danger"), t.loading = !1, t.currentFile = null;
        });
      }, previewFile: function previewFile(e) {
        this.currentFile = e;
      }, uploadFile: function uploadFile(e, t) {
        var n = this,
            a = new FormData();Array.from(Array(t.length).keys()).map(function (n) {
          a.append(e, t[n], t[n].name);
        }), a.append("folder", this.currentPath), this.loading = !0, axios.post(this.prefix + "browser/file", a, { progress: function progress(e) {
            e.lengthComputable && (this.uploadProgress = parseFloat(Math.round(e.loaded / e.total * 100)).toFixed(2));
          } }).then(function (e) {
          n.mediaManagerNotify(e.data.success), n.loadFolder(n.currentPath);
        }, function (e) {
          var t = e.data.error ? e.data.error : e.statusText;e.data.notices && n.mediaManagerNotify(e.data.notices), n.mediaManagerNotify(t, "danger", 5e3), n.loadFolder(n.currentPath);
        });
      }, selectFile: function selectFile() {
        this.selectedEventName && window.eventHub.$emit("media-manager-selected-" + this.selectedEventName, this.currentFile);
      }, dragUpload: function dragUpload() {
        var e = this;$("div#mediaManagerDropZone").dropzone({ clickable: !1, createImageThumbnails: !1, dictDefaultMessage: "", enqueueForUpload: !0, paramName: "files", previewsContainer: null, previewTemplate: '<span class="hidden"></span>', hiddenInputContainer: !0, uploadMultiple: !0, url: this.prefix + "browser/file", headers: { "X-CSRF-TOKEN": window.axios.defaults.headers.common["X-CSRF-TOKEN"] }, sending: function sending(t, n, a) {
            e.loading = !0, a.append("folder", e.currentPath);
          }, completemultiple: function completemultiple(t) {
            e.loading = !1, e.loadFolder(e.currentPath);
          }, errormultiple: function errormultiple(t, n) {
            e.mediaManagerNotify(n.error);
          }, successmultiple: function successmultiple(t, n) {
            e.mediaManagerNotify(n.success);
          }, totaluploadprogress: function totaluploadprogress(t) {
            e.uploadProgress = parseFloat(Math.round(100 * t) / 100).toFixed(2), e.uploadProgress < 100 ? e.loading = !0 : (e.uploadProgress = 0, e.loading = !1);
          } });
      } } };
}, function (e, t) {
  var n = function n() {
    var e = this,
        t = e.$createElement,
        n = e._self._c || t;return n("transition", { attrs: { name: "modal" } }, [n("div", { attrs: { id: "easel-file-picker" } }, [n("div", { staticClass: "modal-header" }, [e.isModal ? n("button", { staticClass: "close", attrs: { type: "button" }, on: { click: function click(t) {
          e.close();
        } } }, [e._v("×")]) : e._e(), e._v(" "), n("div", { staticClass: "btn-toolbar", attrs: { role: "toolbar" } }, [n("div", { staticClass: "btn-group offset-right" }, [n("label", { staticClass: "btn btn-primary btn-icon-text btn-file", attrs: { title: "Select files to be uploaded - or drag files into the main window pane" } }, [n("i", { staticClass: "icon-upload" }), e._v(" "), n("span", { staticClass: "hidden-xs" }, [e._v("Upload")]), e._v(" "), n("input", { staticClass: "hidden", attrs: { type: "file", name: "files[]" }, on: { change: function change(t) {
          e.uploadFile(t.target.name, t.target.files);
        } } })]), e._v(" "), n("button", { staticClass: "btn btn-primary btn-icon-text", attrs: { type: "button", title: "Add Folder" }, on: { click: function click(t) {
          e.showCreateFolderModal = !0;
        } } }, [n("i", { staticClass: "icon-folder-plus" }), e._v(" "), n("span", { staticClass: "hidden-xs" }, [e._v("Add folder")])])]), e._v(" "), n("div", { staticClass: "btn-group offset-right" }, [n("button", { staticClass: "btn btn-default btn-icon-text", attrs: { type: "button", title: "Refresh" }, on: { click: function click(t) {
          e.loadFolder(e.currentPath);
        } } }, [n("i", { staticClass: "icon-loop2" }), e._v(" "), n("span", { staticClass: "hidden-xs" }, [e._v("Refresh")])])]), e._v(" "), n("div", { staticClass: "btn-group offset-right" }, [n("button", { staticClass: "btn btn-default btn-icon-text", attrs: { type: "button", disabled: !e.currentFile, title: "Move" }, on: { click: function click(t) {
          e.showMoveItemModal = !0;
        } } }, [n("i", { staticClass: "icon-arrow-right" }), e._v(" "), n("span", { staticClass: "hidden-xs" }, [e._v("Move")])]), e._v(" "), n("button", { staticClass: "btn btn-default btn-icon-text", attrs: { type: "button", disabled: !e.currentFile, title: "Delete" }, on: { click: function click(t) {
          e.showDeleteItemModal = !0;
        } } }, [n("i", { staticClass: "icon-bin" }), e._v(" "), n("span", { staticClass: "hidden-xs" }, [e._v("Delete")])]), e._v(" "), n("button", { staticClass: "btn btn-default btn-icon-text", attrs: { type: "button", disabled: !e.currentFile, title: "Rename" }, on: { click: function click(t) {
          e.showRenameItemModal = !0;
        } } }, [n("i", { staticClass: "icon-pencil" }), e._v(" "), n("span", { staticClass: "hidden-xs" }, [e._v("Rename")])])])])]), e._v(" "), n("div", { staticClass: "dropzone", attrs: { id: "mediaManagerDropZone" } }, [e.loading ? n("div", { staticClass: "easel-alternative-content loading" }, [n("p", [n("span", { staticClass: "spinner icon-spinner2" }), e._v("Loading...\n\t\t\t\t\t")]), e._v(" "), e.uploadProgress > 0 ? n("h4", [e._v(e._s(e.uploadProgress) + " %")]) : e._e()]) : n("div", [n("div", { staticClass: "easel-file-browser" }, [n("div", { staticClass: "row" }, [n("div", { staticClass: "col-xs-12" }, [n("ol", { staticClass: "breadcrumb" }, [e._l(e.breadCrumbs, function (t, a) {
      return n("li", [n("a", { attrs: { href: "javascript:void(0);" }, on: { click: function click(t) {
            e.loadFolder(a);
          } } }, [e._v(e._s(t))])]);
    }), e._v(" "), n("li", { staticClass: "active" }, [e._v("\n\t\t\t\t\t\t\t\t\t" + e._s(e.folderName) + "\n\t\t\t\t\t\t\t\t")])], 2)])]), e._v(" "), e.isFolderEmpty ? n("div", { staticClass: "easel-alternative-content" }, [n("h4", [e._v("This folder is empty.")]), e._v(" "), n("p", [e._v("\n\t\t\t\t\t\t\tDrag and drop files onto this window to upload files.\n\t\t\t\t\t\t")])]) : n("div", { staticClass: "row" }, [n("div", { staticClass: "col-xs-12", class: { "col-sm-12": !e.currentFile || e.isFolder(e.currentFile), "col-sm-9": e.currentFile && !e.isFolder(e.currentFile) } }, [n("div", { staticClass: "table-responsive easel-file-picker-list" }, [n("table", { staticClass: "table table-condensed table-vmiddle" }, [n("thead", [n("tr", [n("th", [n("a", { attrs: { href: "javascript:void(0);" }, on: { click: function click(t) {
          e.orderBy("name");
        } } }, [e._v("Name")])]), e._v(" "), n("th", [n("a", { attrs: { href: "javascript:void(0);" }, on: { click: function click(t) {
          e.orderBy("mimeType");
        } } }, [e._v("Type")])]), e._v(" "), n("th", [n("a", { attrs: { href: "javascript:void(0);" }, on: { click: function click(t) {
          e.orderBy("modified.date");
        } } }, [e._v("Date")])])])]), e._v(" "), n("tbody", [e._l(e.folders, function (t, a) {
      return n("tr", { class: [t == e.currentFile ? "bg-primary" : ""] }, [n("td", [n("i", { staticClass: "icon-folder" }), e._v(" "), n("a", { staticClass: "word-wrappable", attrs: { href: "javascript:void(0);" }, on: { click: function click(n) {
            e.previewFile(t);
          }, dblclick: function dblclick(n) {
            e.loadFolder(t.fullPath);
          }, keyup: function keyup(n) {
            if (!("button" in n) && e._k(n.keyCode, "enter", 13)) return null;e.loadFolder(t.fullPath);
          } } }, [e._v("\n\t\t\t\t\t\t\t\t\t\t\t\t" + e._s(t.name) + "\n\t\t\t\t\t\t\t\t\t\t\t")])]), e._v(" "), n("td", [e._v("folder")]), e._v(" "), n("td", [e._v(e._s(e._f("moment")(t.modified.date, "DD/MM/YYYY")))])]);
    }), e._v(" "), e._l(e.files, function (t) {
      return n("tr", { class: [t == e.currentFile ? "bg-primary" : ""] }, [n("td", [e.isImage(t) ? n("i", { staticClass: "icon-image" }) : n("i", { staticClass: "icon-file-text2" }), e._v(" "), n("a", { staticClass: "word-wrappable", attrs: { href: "javascript:void(0);" }, on: { click: function click(n) {
            e.previewFile(t);
          }, keyup: function keyup(n) {
            if (!("button" in n) && e._k(n.keyCode, "enter", 13)) return null;e.selectFile(t);
          }, dblclick: function dblclick(n) {
            e.selectFile(t);
          } } }, [e._v("\n\t\t\t\t\t\t\t\t\t\t\t\t" + e._s(t.name) + "\n\t\t\t\t\t\t\t\t\t\t\t")])]), e._v(" "), n("td", [e._v(" " + e._s(t.mimeType))]), e._v(" "), n("td", [e._v(" " + e._s(e._f("moment")(t.modified.date, "DD/MM/YYYY")))])]);
    })], 2)])])]), e._v(" "), e.currentFile && !e.isFolder(e.currentFile) ? n("div", { staticClass: "easel-file-picker-sidebar hidden-xs col-sm-3" }, [e.isImage(e.currentFile) ? n("img", { staticClass: "img-responsive center-block", staticStyle: { "max-height": "200px" }, attrs: { id: "easel-preview-image", src: e.currentFile.webPath } }) : n("div", { staticClass: "text-center" }, [n("i", { staticClass: "icon-file-text2", staticStyle: { "font-size": "15rem" } })]), e._v(" "), n("table", { staticClass: "table-responsive table-condensed table-vmiddle easel-file-picker-preview-table" }, [n("tbody", [n("tr", [n("td", { staticClass: "description" }, [e._v("Name")]), e._v(" "), n("td", { staticClass: "file-value" }, [e._v(e._s(e.currentFile.name))])]), e._v(" "), n("tr", [n("td", { staticClass: "description" }, [e._v("Size")]), e._v(" "), n("td", { staticClass: "file-value" }, [e._v(e._s(e._f("humanFileSize")(e.currentFile.size)))])]), e._v(" "), n("tr", [n("td", { staticClass: "description" }, [e._v("URL")]), e._v(" "), n("td", { staticClass: "file-value" }, [n("a", { attrs: { href: e.currentFile.webPath, target: "_blank", rel: "noopener" } }, [e._v(e._s(e.currentFile.relativePath))])])]), e._v(" "), n("tr", [n("td", { staticClass: "description" }, [e._v("Uploaded On")]), e._v(" "), n("td", { staticClass: "file-value" }, [e._v(e._s(e._f("moment")(e.currentFile.modified.date)))])])])])]) : e._e()])])]), e._v(" "), n("div", { staticClass: "modal-footer vertical-center" }, [n("div", { staticClass: "item-count" }, [e._v("\n\t\t\t\t\t" + e._s(e.itemsCount) + " Items\n\t\t\t\t")]), e._v(" "), e.isModal ? n("div", { staticClass: "buttons" }, [n("button", { directives: [{ name: "show", rawName: "v-show", value: e.currentFile && !e.isFolder(e.currentFile), expression: "currentFile && !isFolder(currentFile)" }], staticClass: "btn btn-primary", attrs: { type: "button" }, on: { click: function click(t) {
          e.selectFile();
        } } }, [e._v("\n\t\t\t\t\t\tSelect File\n\t\t\t\t\t")]), e._v(" "), n("button", { staticClass: "btn btn-default", attrs: { type: "button" }, on: { click: function click(t) {
          e.close();
        } } }, [e._v("\n\t\t\t\t\t\tClose\n\t\t\t\t\t")])]) : e._e()])]), e._v(" "), n("media-create-folder-modal", { attrs: { "current-path": e.currentPath, prefix: e.prefix, show: e.showCreateFolderModal }, on: { "media-modal-close": function mediaModalClose(t) {
          e.showCreateFolderModal = !1;
        }, "media-manager-reload-folder": function mediaManagerReloadFolder(t) {
          e.loadFolder(e.currentPath);
        } } }), e._v(" "), n("media-delete-item-modal", { attrs: { "current-path": e.currentPath, "current-file": e.currentFile, prefix: e.prefix, show: e.showDeleteItemModal }, on: { "media-modal-close": function mediaModalClose(t) {
          e.showDeleteItemModal = !1;
        }, "media-manager-reload-folder": function mediaManagerReloadFolder(t) {
          e.loadFolder(e.currentPath);
        } } }), e._v(" "), n("media-move-item-modal", { attrs: { "current-path": e.currentPath, "current-file": e.currentFile, prefix: e.prefix, show: e.showMoveItemModal }, on: { "media-modal-close": function mediaModalClose(t) {
          e.showMoveItemModal = !1;
        }, "media-manager-reload-folder": function mediaManagerReloadFolder(t) {
          e.loadFolder(e.currentPath);
        } } }), e._v(" "), n("media-rename-item-modal", { attrs: { "current-path": e.currentPath, "current-file": e.currentFile, prefix: e.prefix, show: e.showRenameItemModal }, on: { "media-modal-close": function mediaModalClose(t) {
          e.showRenameItemModal = !1;
        }, "media-manager-reload-folder": function mediaManagerReloadFolder(t) {
          e.loadFolder(e.currentPath);
        } } })], 1)]);
  },
      a = [];e.exports = { render: n, staticRenderFns: a };
}, function (e, t) {}]);

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(42)
/* template */
var __vue_template__ = __webpack_require__(43)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/script/components/PostSearchingComponent.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4c77a31c", Component.options)
  } else {
    hotAPI.reload("data-v-4c77a31c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__event_bus_js__ = __webpack_require__(2);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({

  props: {
    myProp: String
  },
  data: function data() {
    return {
      search: '',
      posts: [],
      category_id: '',
      postUrl: '/posts/',
      jsonUrl: '/api/posts/categories'
    };
  },
  created: function created() {
    var _this = this;

    this.getJson();

    __WEBPACK_IMPORTED_MODULE_0__event_bus_js__["a" /* default */].$on('setCategory', function (category_id) {
      _this.category_id = category_id;
      console.log('setCategory event caught', _this.category_id);
      axios.get('/categories/' + _this.category_id + '/posts').then(function (response) {
        return _this.posts = response.data;
      }).catch(function (error) {
        return console.log(error);
      });
    });

    __WEBPACK_IMPORTED_MODULE_0__event_bus_js__["a" /* default */].$on('unsetCategory', function () {
      console.log('unsetCategory event caught');
      axios.get(_this.jsonUrl).then(function (response) {
        return _this.posts = response.data;
      }).catch(function (error) {
        return console.log(error);
      });
    });
  },

  methods: {
    getJson: function getJson() {
      var _this2 = this;

      axios.get(this.jsonUrl).then(function (response) {
        return _this2.posts = response.data;
      }).then(function (response) {
        return __WEBPACK_IMPORTED_MODULE_0__event_bus_js__["a" /* default */].$emit('allPostCount', _this2.posts.length);
      }).catch(function (error) {
        return console.log(error);
      });
    }
  },
  computed: {
    filteredPosts: function filteredPosts() {
      var _this3 = this;

      return this.posts.filter(function (item) {
        return item.title.toLowerCase().includes(Rabbit.zg2uni(_this3.search).toLowerCase());
      });
    }
  }
});

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "container" },
    [
      _c("div", { staticClass: "input-group" }, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.search,
              expression: "search"
            }
          ],
          staticClass: "form-control",
          attrs: { type: "text", placeholder: "Search" },
          domProps: { value: _vm.search },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.search = $event.target.value
            }
          }
        }),
        _vm._v(" "),
        _vm._m(0)
      ]),
      _vm._v(" "),
      _vm._l(_vm.filteredPosts, function(post) {
        return _c(
          "div",
          { staticClass: "post-preview" },
          [
            _c("a", { attrs: { href: _vm.postUrl + post.id } }, [
              _c("h2", { staticClass: "post-title" }, [
                _vm._v(" " + _vm._s(post.title) + " ")
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "text-success" }, [
                _vm._v("continue reading")
              ])
            ]),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _vm._l(post.categories, function(categories) {
              return _c(
                "span",
                {
                  staticClass: "badge badge-danger",
                  staticStyle: { "margin-left": "5px" }
                },
                [
                  _c(
                    "a",
                    {
                      staticClass: "text-white",
                      staticStyle: { "text-decoration": "none" },
                      attrs: { href: "javascript:void(0)" }
                    },
                    [_vm._v("\n        " + _vm._s(categories.name))]
                  )
                ]
              )
            }),
            _vm._v(" "),
            _c("p", { staticClass: "post-meta" })
          ],
          2
        )
      }),
      _vm._v(" "),
      _c("hr")
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-append" }, [
      _c("button", { staticClass: "btn btn-info" }, [
        _c("span", { staticClass: "fa fa-search" })
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4c77a31c", module.exports)
  }
}

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(45)
/* template */
var __vue_template__ = __webpack_require__(46)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/script/components/JobSearchingComponent.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3da09cd2", Component.options)
  } else {
    hotAPI.reload("data-v-3da09cd2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__event_bus_js__ = __webpack_require__(2);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({

  props: {
    myProp: String
  },
  data: function data() {
    return {
      search: '',
      jobs: [],
      category_id: '',
      jobUrl: '/jobs/',
      jsonUrl: '/api/jobs/categories/'

    };
  },
  created: function created() {
    var _this = this;

    this.getJson();

    __WEBPACK_IMPORTED_MODULE_0__event_bus_js__["a" /* default */].$on('setCategoryJob', function (category_id) {
      _this.category_id = category_id;
      console.log('setCategory job event caught', _this.category_id);
      axios.get('/categories/' + _this.category_id + '/jobs').then(function (response) {
        return _this.jobs = response.data;
      }).catch(function (error) {
        return console.log(error);
      });
    });

    __WEBPACK_IMPORTED_MODULE_0__event_bus_js__["a" /* default */].$on('unsetCategoryJob', function () {
      console.log('unsetCategory job event caught');
      axios.get(_this.jsonUrl).then(function (response) {
        return _this.jobs = response.data;
      }).catch(function (error) {
        return console.log(error);
      });
    });
  },

  methods: {
    getJson: function getJson() {
      var _this2 = this;

      axios.get(this.jsonUrl).then(function (response) {
        return _this2.jobs = response.data;
      }).then(function (response) {
        return __WEBPACK_IMPORTED_MODULE_0__event_bus_js__["a" /* default */].$emit('allJobCount', _this2.jobs.length);
      }).catch(function (error) {
        return console.log(error);
      });
    },
    changeUni2Zg: function changeUni2Zg(posts) {
      posts.map(function (job) {
        console.log(Rabbit.uni2zg(job.title));
        return Rabbit.uni2zg(job.title);
      });
      console.log(posts);
    }
  },
  computed: {
    filteredJobs: function filteredJobs() {
      var _this3 = this;

      return this.jobs.filter(function (item) {
        return item.title.toLowerCase().includes(Rabbit.zg2uni(_this3.search).toLowerCase());
      });
    }
  }
});

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "container" },
    [
      _c("div", { staticClass: "input-group" }, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.search,
              expression: "search"
            }
          ],
          staticClass: "form-control",
          attrs: { type: "text", placeholder: "Search" },
          domProps: { value: _vm.search },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.search = $event.target.value
            }
          }
        }),
        _vm._v(" "),
        _vm._m(0)
      ]),
      _vm._v(" "),
      _vm._l(_vm.filteredJobs, function(job) {
        return _c(
          "div",
          { staticClass: "post-preview" },
          [
            _c("a", { attrs: { href: _vm.jobUrl + job.id } }, [
              _c("h2", { staticClass: "post-title" }, [
                _vm._v(" " + _vm._s(job.title) + " ")
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "text-success" }, [
                _vm._v("continue reading")
              ])
            ]),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _vm._l(job.categories, function(categories) {
              return _c(
                "span",
                {
                  staticClass: "badge badge-danger",
                  staticStyle: { "margin-left": "5px" }
                },
                [
                  _c(
                    "a",
                    {
                      staticClass: "text-white",
                      staticStyle: { "text-decoration": "none" },
                      attrs: { href: "javascript:void(0)" }
                    },
                    [_vm._v("\n        " + _vm._s(categories.name))]
                  )
                ]
              )
            }),
            _vm._v(" "),
            _c("p", { staticClass: "post-meta" })
          ],
          2
        )
      }),
      _vm._v(" "),
      _c("hr")
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-append" }, [
      _c("button", { staticClass: "btn btn-info" }, [
        _c("span", { staticClass: "fa fa-search" })
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3da09cd2", module.exports)
  }
}

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(48)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(51)
/* template */
var __vue_template__ = __webpack_require__(52)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2b11e357"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/script/components/PostShowComponent.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2b11e357", Component.options)
  } else {
    hotAPI.reload("data-v-2b11e357", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(49);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("29fbfbf4", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2b11e357\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PostShowComponent.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2b11e357\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PostShowComponent.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "\n.boxShadow[data-v-2b11e357]{\n  padding: 15px;\n  -webkit-box-shadow: 0px 0px 20px -5px grey;\n          box-shadow: 0px 0px 20px -5px grey;\n}\n", ""]);

// exports


/***/ }),
/* 50 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      form: new Form({
        title: '',
        body: '',
        recommend: ''
      }),
      formReply: new Form({
        body: '',
        issue_id: ''
      }),
      formRecommend: new Form({
        recommendable_id: '',
        recommendable_type: 'ElectricalBlog\\Post',
        user_id: '',
        recommendable: ''
      }),
      post: [],
      user: [],
      currentUser: false,
      post_id: window.location.href.split('posts/').pop(),
      displayNone: true,
      display: false,
      recommendSign: '',
      recommendText: ''

    };
  },
  mounted: function mounted() {
    this.getIssue();
    this.getAuthUser();
  },

  computed: {
    isUserLogin: function isUserLogin() {
      if (this.user == '') {
        return false;
      } else {
        return true;
      }
    }
  },
  methods: {
    getIssue: function getIssue() {
      var _this = this;

      axios.get('/api/posts/' + this.post_id + '/issues/replies').then(function (response) {
        return _this.post = response.data;
      }).catch(function (error) {
        return console.log(error);
      });
    },
    getAuthUser: function getAuthUser() {
      var _this2 = this;

      axios.get('/api/isCurrentUsers/').then(function (response) {
        return _this2.user = response.data;
      }).then(function (response) {
        return _this2.isCurrentUser(_this2.post.recommends, _this2.user);
      }).catch(function (error) {
        return console.log(error);
      });
    },
    onSubmit: function onSubmit() {
      var _this3 = this;

      this.form.post('/admin/posts/' + this.post_id + '/issues').then(function (response) {
        return _this3.getIssue();
      });
    },
    onSubmitReply: function onSubmitReply() {
      var _this4 = this;

      this.formReply.post('/admin/replies').then(function (response) {
        return _this4.getIssue();
      });
    },
    onSubmitRecommend: function onSubmitRecommend() {
      var _this5 = this;

      this.formRecommend.post('/admin/recommends').then(function (response) {
        return _this5.getIssue();
      });
    },
    isCurrentUser: function isCurrentUser(recommends, user) {
      if (recommends.length > 0) {
        for (var i = 0; i < recommends.length; i++) {
          // console.log(user);
          if (user.id === recommends[i].user_id) {
            this.recommendText = 'Recommended';
            this.recommendSign = 'btn btn-success';
            this.formRecommend.recommendable = true;
          } else if (user.id !== recommends[i].user_id) {
            this.recommendText = 'Recommend';
            this.recommendSign = 'btn btn-secondary';
            this.formRecommend.recommendable = false;
          }
        }
      } else {
        this.recommendText = 'Recommend';
        this.recommendSign = 'btn btn-secondary';
        this.formRecommend.recommendable = false;
      }
    },
    recommendOption: function recommendOption() {

      if (this.recommendSign == 'btn btn-secondary') {
        this.recommendSign = 'btn btn-success';
        this.recommendText = 'Recommended';
        this.formRecommend.recommendable = true;
      } else {
        this.recommendSign = 'btn btn-secondary';
        this.recommendText = 'Recommend';
        this.formRecommend.recommendable = false;
      }
    }
  }

});

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("h2", { staticClass: "section-heading" }, [
        _vm._v(_vm._s(_vm.post.title))
      ]),
      _vm._v(" "),
      _vm._l(_vm.post.categories, function(category) {
        return _c("span", {
          key: category.id + "-label",
          staticClass: "badge bg-info",
          staticStyle: { "margin-left": "10px" },
          domProps: { textContent: _vm._s(category.name) }
        })
      }),
      _vm._v(" "),
      _c("p", { staticClass: "text-danger" }, [
        _vm._v(" " + _vm._s(_vm.post.recommends_count) + " recommended ")
      ]),
      _vm._v(" "),
      _vm.isUserLogin
        ? _c(
            "form",
            {
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.onSubmitRecommend($event)
                }
              }
            },
            [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: (_vm.formRecommend.recommendable_id = this.post_id),
                    expression: "formRecommend.recommendable_id = this.post_id"
                  }
                ],
                attrs: { type: "hidden" },
                domProps: {
                  value: (_vm.formRecommend.recommendable_id = this.post_id)
                },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      (_vm.formRecommend.recommendable_id = this),
                      "post_id",
                      $event.target.value
                    )
                  }
                }
              }),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: (_vm.formRecommend.recommendable_type =
                      "ElectricalBlog\\Post"),
                    expression:
                      "formRecommend.recommendable_type = 'ElectricalBlog\\\\Post'"
                  }
                ],
                attrs: { type: "hidden" },
                domProps: {
                  value: (_vm.formRecommend.recommendable_type =
                    "ElectricalBlog\\Post")
                },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.formRecommend,
                      "recommendable_type = 'ElectricalBlog\\Post'",
                      $event.target.value
                    )
                  }
                }
              }),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: (_vm.formRecommend.user_id = this.user.id),
                    expression: "formRecommend.user_id = this.user.id"
                  }
                ],
                attrs: { type: "hidden" },
                domProps: { value: (_vm.formRecommend.user_id = this.user.id) },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      (_vm.formRecommend.user_id = this.user),
                      "id",
                      $event.target.value
                    )
                  }
                }
              }),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.formRecommend.recommendable,
                    expression: "formRecommend.recommendable"
                  }
                ],
                attrs: { type: "hidden" },
                domProps: { value: _vm.formRecommend.recommendable },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.formRecommend,
                      "recommendable",
                      $event.target.value
                    )
                  }
                }
              }),
              _vm._v(" "),
              _c("button", {
                class: _vm.recommendSign,
                attrs: { type: "submit" },
                domProps: { textContent: _vm._s(_vm.recommendText) },
                on: { click: _vm.recommendOption }
              })
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("div", { domProps: { innerHTML: _vm._s(_vm.post.body) } }),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("h2", { staticClass: "text-secondary" }, [_vm._v("Questions")]),
      _vm._v(" "),
      _vm._l(_vm.post.issues, function(issue) {
        return _c(
          "div",
          { key: issue.id, staticClass: "card border mb-5 boxShadow" },
          [
            _c("div", { staticClass: "card-body" }, [
              _c("div", { staticClass: "post-heading" }, [
                _c("div", { staticClass: "pull-left meta ml-3" }, [
                  _vm._m(0, true),
                  _vm._v(" "),
                  _c("h6", { staticClass: "text-muted time" }, [
                    _vm._v("1 minute ago")
                  ]),
                  _vm._v(" "),
                  _c("h6", { class: { displayNone: _vm.display } }, [
                    _vm._v(_vm._s(issue.title))
                  ]),
                  _vm._v(" "),
                  _c("h6", { class: { displayNone: _vm.display } }, [
                    _vm._v(_vm._s(issue.body))
                  ])
                ]),
                _vm._v(" "),
                _vm._m(1, true),
                _vm._v(" "),
                _vm._m(2, true)
              ])
            ]),
            _vm._v(" "),
            _vm._l(issue.reply, function(reply) {
              return _c(
                "div",
                {
                  key: reply.id,
                  staticClass: "card-body ml-5",
                  staticStyle: { "border-top": "1px solid #e3e3e3" }
                },
                [
                  _c("div", { staticClass: "post-heading" }, [
                    _c("div", { staticClass: "pull-left meta ml-3" }, [
                      _vm._m(3, true),
                      _vm._v(" "),
                      _c("h6", { staticClass: "text-muted time" }, [
                        _vm._v("1 minute ago")
                      ]),
                      _vm._v(" "),
                      _c("h6", { class: { displayNone: _vm.display } }, [
                        _vm._v(_vm._s(reply.body))
                      ])
                    ]),
                    _vm._v(" "),
                    _vm._m(4, true),
                    _vm._v(" "),
                    _vm._m(5, true)
                  ])
                ]
              )
            }),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "card-body",
                staticStyle: { "border-top": "1px solid #e3e3e3" }
              },
              [
                _c(
                  "form",
                  {
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.onSubmitReply($event)
                      },
                      keydown: function($event) {
                        _vm.formReply.errors.clear($event.target.name)
                      }
                    }
                  },
                  [
                    _c("div", { staticClass: "form-body" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("div", { staticClass: "col-md-12" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.formReply.body,
                                expression: "formReply.body"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text", name: "body" },
                            domProps: { value: _vm.formReply.body },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.formReply,
                                  "body",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("span", {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.formReply.errors.has("body"),
                                expression: "formReply.errors.has('body')"
                              }
                            ],
                            staticClass: "help-block text-danger",
                            domProps: {
                              textContent: _vm._s(
                                _vm.formReply.errors.get("body")
                              )
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.formReply.issue_id,
                            expression: "formReply.issue_id"
                          }
                        ],
                        attrs: { type: "hidden", name: "issue_id" },
                        domProps: { value: _vm.formReply.issue_id },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.formReply,
                              "issue_id",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "ml-3 btn btn-success",
                          attrs: { type: "submit" },
                          on: {
                            click: function($event) {
                              _vm.formReply.issue_id = issue.id
                            }
                          }
                        },
                        [_vm._v(" Reply")]
                      )
                    ])
                  ]
                )
              ]
            ),
            _vm._v(" "),
            _c("br")
          ],
          2
        )
      }),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("div", { staticClass: "card boxShadow" }, [
        _c("div", { staticClass: "card-body" }, [
          _c("div", { staticClass: "container" }, [
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.onSubmit($event)
                  },
                  keydown: function($event) {
                    _vm.form.errors.clear($event.target.name)
                  }
                }
              },
              [
                _vm._m(6),
                _vm._v(" "),
                _c("div", { staticClass: "form-group row" }, [
                  _c("label", { attrs: { for: "title" } }, [
                    _vm._v("Question Title")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.title,
                        expression: "form.title"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", name: "title" },
                    domProps: { value: _vm.form.title },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "title", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("span", {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.form.errors.has("title"),
                        expression: "form.errors.has('title')"
                      }
                    ],
                    staticClass: "help-block text-danger",
                    domProps: {
                      textContent: _vm._s(_vm.form.errors.get("title"))
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group row" }, [
                  _c("label", { attrs: { for: "body" } }, [_vm._v("Question")]),
                  _vm._v(" "),
                  _c("textarea", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.body,
                        expression: "form.body"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", rows: "5", name: "body" },
                    domProps: { value: _vm.form.body },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "body", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("span", {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.form.errors.has("body"),
                        expression: "form.errors.has('body')"
                      }
                    ],
                    staticClass: "help-block text-danger",
                    domProps: {
                      textContent: _vm._s(_vm.form.errors.get("body"))
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group row" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-success",
                      attrs: { disabled: _vm.form.errors.any() }
                    },
                    [_vm._v("Submit")]
                  )
                ])
              ]
            )
          ])
        ])
      ])
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "title h5" }, [
      _c("a", { attrs: { href: "#" } }, [_c("b", [_vm._v("Ryan Haywood")])]),
      _vm._v("\n                    made a question.     \n                ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { attrs: { href: "javascript:void(0)" } }, [
      _c("i", {
        staticClass: "fa fa-trash-o text-danger",
        staticStyle: { float: "right", "font-size": "20px" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { attrs: { href: "javascript:void(0)" } }, [
      _c("i", {
        staticClass: "fa fa-edit text-info",
        staticStyle: { float: "right", "margin-right": "10px" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "title h5" }, [
      _c("a", { attrs: { href: "#" } }, [_c("b", [_vm._v("Ryan Haywood")])]),
      _vm._v("\n                    made a Reply.     \n                ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { attrs: { href: "javascript:void(0)" } }, [
      _c("i", {
        staticClass: "fa fa-trash-o text-danger",
        staticStyle: { float: "right", "font-size": "20px" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { attrs: { href: "javascript:void(0)" } }, [
      _c("i", {
        staticClass: "fa fa-edit text-info",
        staticStyle: { float: "right", "margin-right": "10px" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group row" }, [
      _c("h2", { staticClass: "text-secondary" }, [
        _vm._v("Do You Have Any Question ?")
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2b11e357", module.exports)
  }
}

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(54)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(56)
/* template */
var __vue_template__ = __webpack_require__(57)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5ae9fc2e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/script/components/BookShowComponent.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5ae9fc2e", Component.options)
  } else {
    hotAPI.reload("data-v-5ae9fc2e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(55);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("98a439f8", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5ae9fc2e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./BookShowComponent.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5ae9fc2e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./BookShowComponent.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "\n.boxShadow[data-v-5ae9fc2e]{\n  padding: 15px;\n  -webkit-box-shadow: 0px 0px 20px -5px grey;\n          box-shadow: 0px 0px 20px -5px grey;\n}\n", ""]);

// exports


/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      formRecommend: new Form({
        recommendable_type: 'ElectricalBlog\\Book',
        recommendable_id: '',
        user_id: '',
        recommendable: ''
      }),
      book: [],
      user: [],
      currentUser: false,
      book_id: window.location.href.split('books/').pop(),
      displayNone: true,
      display: false,
      recommendSign: '',
      recommendText: ''

    };
  },
  mounted: function mounted() {
    this.getBook();
    this.getAuthUser();
  },

  computed: {
    isUserLogin: function isUserLogin() {
      if (this.user == '') {
        return false;
      } else {
        return true;
      }
    }
  },
  methods: {
    getBook: function getBook() {
      var _this = this;

      axios.get('/api/books/' + this.book_id).then(function (response) {
        return _this.book = response.data;
      }).then(function (response) {
        return console.log(_this.book);
      }).catch(function (error) {
        return console.log(error);
      });
    },
    getAuthUser: function getAuthUser() {
      var _this2 = this;

      axios.get('/api/isCurrentUsers/').then(function (response) {
        return _this2.user = response.data;
      }).then(function (response) {
        return _this2.isCurrentUser(_this2.book.recommends, _this2.user);
      }).then(function (response) {
        return console.log(_this2.currentUser);
      }).catch(function (error) {
        return console.log(error);
      });
    },
    onSubmitRecommend: function onSubmitRecommend() {
      var _this3 = this;

      this.formRecommend.post('/admin/recommends').then(function (response) {
        return _this3.getBook();
      });
    },
    isCurrentUser: function isCurrentUser(recommends, user) {
      if (recommends.length > 0) {
        for (var i = 0; i < recommends.length; i++) {
          // console.log(user);
          if (user.id === recommends[i].user_id) {
            this.recommendText = 'Recommended';
            this.recommendSign = 'btn btn-success';
            this.formRecommend.recommendable = true;
          } else if (user.id !== recommends[i].user_id) {
            this.recommendText = 'Recommend';
            this.recommendSign = 'btn btn-secondary';
            this.formRecommend.recommendable = false;
          }
        }
      } else {
        this.recommendText = 'Recommend';
        this.recommendSign = 'btn btn-secondary';
        this.formRecommend.recommendable = false;
      }
    },
    recommendOption: function recommendOption() {

      if (this.recommendSign == 'btn btn-secondary') {
        this.recommendSign = 'btn btn-success';
        this.recommendText = 'Recommended';
        this.formRecommend.recommendable = true;
      } else {
        this.recommendSign = 'btn btn-secondary';
        this.recommendText = 'Recommend';
        this.formRecommend.recommendable = false;
      }
    }
  }

});

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("br"),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-lg-4" }, [
        _c("img", {
          attrs: { src: _vm.book.book_image, width: "250", height: "250" }
        })
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-lg-8" },
        [
          _c("h2", { domProps: { textContent: _vm._s(_vm.book.book_name) } }),
          _vm._v(" "),
          _c("h4", {
            staticClass: "text-success",
            domProps: { textContent: _vm._s(_vm.book.author) }
          }),
          _vm._v(" "),
          _vm._l(_vm.book.categories, function(category) {
            return _c("span", {
              key: category.id + "-label",
              staticClass: "badge bg-info",
              staticStyle: { "margin-left": "10px" },
              domProps: { textContent: _vm._s(category.name) }
            })
          }),
          _vm._v(" "),
          _c("p", [
            _c("span", {
              staticClass: "badge bg-danger text-white",
              domProps: { textContent: _vm._s(_vm.book.recommends_count) }
            }),
            _vm._v(" recommended ")
          ]),
          _vm._v(" "),
          _vm.isUserLogin
            ? _c(
                "form",
                {
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.onSubmitRecommend($event)
                    }
                  }
                },
                [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: (_vm.formRecommend.recommendable_id = this.book_id),
                        expression:
                          "formRecommend.recommendable_id = this.book_id"
                      }
                    ],
                    attrs: { type: "hidden" },
                    domProps: {
                      value: (_vm.formRecommend.recommendable_id = this.book_id)
                    },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          (_vm.formRecommend.recommendable_id = this),
                          "book_id",
                          $event.target.value
                        )
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: (_vm.formRecommend.user_id = this.user.id),
                        expression: "formRecommend.user_id = this.user.id"
                      }
                    ],
                    attrs: { type: "hidden" },
                    domProps: {
                      value: (_vm.formRecommend.user_id = this.user.id)
                    },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          (_vm.formRecommend.user_id = this.user),
                          "id",
                          $event.target.value
                        )
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: (_vm.formRecommend.recommendable_type =
                          "ElectricalBlog\\Book"),
                        expression:
                          "formRecommend.recommendable_type = 'ElectricalBlog\\\\Book'"
                      }
                    ],
                    attrs: { type: "hidden" },
                    domProps: {
                      value: (_vm.formRecommend.recommendable_type =
                        "ElectricalBlog\\Book")
                    },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.formRecommend,
                          "recommendable_type = 'ElectricalBlog\\Book'",
                          $event.target.value
                        )
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.formRecommend.recommendable,
                        expression: "formRecommend.recommendable"
                      }
                    ],
                    attrs: { type: "hidden" },
                    domProps: { value: _vm.formRecommend.recommendable },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.formRecommend,
                          "recommendable",
                          $event.target.value
                        )
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("button", {
                    class: _vm.recommendSign,
                    attrs: { type: "submit" },
                    domProps: { textContent: _vm._s(_vm.recommendText) },
                    on: { click: _vm.recommendOption }
                  })
                ]
              )
            : _vm._e()
        ],
        2
      )
    ]),
    _vm._v(" "),
    _c("br"),
    _vm._v(" "),
    _c("br"),
    _vm._v(" "),
    _c("div", { domProps: { innerHTML: _vm._s(_vm.book.review) } })
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5ae9fc2e", module.exports)
  }
}

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(59)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(61)
/* template */
var __vue_template__ = __webpack_require__(62)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-d7391808"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/script/components/JobShowComponent.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d7391808", Component.options)
  } else {
    hotAPI.reload("data-v-d7391808", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(60);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("10f8d228", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-d7391808\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./JobShowComponent.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-d7391808\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./JobShowComponent.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "\n.boxShadow[data-v-d7391808]{\n  padding: 15px;\n  -webkit-box-shadow: 0px 0px 20px -5px grey;\n          box-shadow: 0px 0px 20px -5px grey;\n}\n", ""]);

// exports


/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      job: [],
      user: [],
      job_id: window.location.href.split('jobs/').pop()
    };
  },
  mounted: function mounted() {
    this.getJob();
    this.getAuthUser();
  },

  computed: {
    isUserLogin: function isUserLogin() {
      if (this.user == '') {
        return false;
      } else {
        return true;
      }
    }
  },
  methods: {
    getJob: function getJob() {
      var _this = this;

      axios.get('/api/jobs/' + this.job_id).then(function (response) {
        return _this.job = response.data;
      }).catch(function (error) {
        return console.log(error);
      });
    },
    getAuthUser: function getAuthUser() {
      var _this2 = this;

      axios.get('/api/isCurrentUsers/').then(function (response) {
        return _this2.user = response.data;
      }).catch(function (error) {
        return console.log(error);
      });
    }
  }

});

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("br"),
      _vm._v(" "),
      _c("h2", { domProps: { textContent: _vm._s(_vm.job.title) } }),
      _vm._v(" "),
      _c("h4", {
        staticClass: "text-success",
        domProps: { textContent: _vm._s(_vm.job.author) }
      }),
      _vm._v(" "),
      _vm._l(_vm.job.categories, function(category) {
        return _c("span", {
          key: category.id + "-label",
          staticClass: "badge bg-info",
          staticStyle: { "margin-left": "10px" },
          domProps: { textContent: _vm._s(category.name) }
        })
      }),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("div", { domProps: { innerHTML: _vm._s(_vm.job.body) } })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-d7391808", module.exports)
  }
}

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(64)
/* template */
var __vue_template__ = __webpack_require__(65)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/script/components/PostCategoryComponent.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0e6e5914", Component.options)
  } else {
    hotAPI.reload("data-v-0e6e5914", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__event_bus_js__ = __webpack_require__(2);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    myProp: String
  },
  data: function data() {
    return {
      categories: [],
      posts_count: 0
    };
  },
  created: function created() {
    var _this = this;

    axios.get('/api/categories/posts').then(function (response) {
      return _this.categories = response.data;
    }).then(function (response) {
      return console.log(_this.categories);
    }).catch(function (error) {
      return console.log(error);
    });

    __WEBPACK_IMPORTED_MODULE_0__event_bus_js__["a" /* default */].$on('allPostCount', function (posts_count) {
      console.log(posts_count + ' posts');
      _this.posts_count = posts_count;
    });
  },

  methods: {
    setCategoryId: function setCategoryId(category_id) {
      __WEBPACK_IMPORTED_MODULE_0__event_bus_js__["a" /* default */].$emit('setCategory', category_id);
    },
    unsetCategoryId: function unsetCategoryId() {
      __WEBPACK_IMPORTED_MODULE_0__event_bus_js__["a" /* default */].$emit('unsetCategory');
    }
  }
});

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "card" }, [
    _c(
      "ul",
      { staticClass: "list-group list-group-flush" },
      [
        _c("li", { staticClass: "list-group-item" }, [
          _c(
            "a",
            {
              staticStyle: { "text-decoration": "none" },
              attrs: { href: "javascript:void(0)" },
              on: {
                click: function($event) {
                  _vm.unsetCategoryId()
                }
              }
            },
            [_vm._v("\n        All\n      ")]
          ),
          _vm._v(" "),
          _c("span", {
            staticClass: "badge badge-pill badge-danger",
            domProps: { textContent: _vm._s(this.posts_count) }
          })
        ]),
        _vm._v(" "),
        _vm._l(this.categories, function(category) {
          return _c(
            "li",
            { key: category.id, staticClass: "list-group-item" },
            [
              _c(
                "a",
                {
                  staticStyle: { "text-decoration": "none" },
                  attrs: { href: "javascript:void(0)" },
                  on: {
                    click: function($event) {
                      _vm.setCategoryId(category.id)
                    }
                  }
                },
                [_vm._v("\n      " + _vm._s(category.name) + "\n      ")]
              ),
              _vm._v(" "),
              _c("span", {
                staticClass: "badge badge-pill badge-danger",
                domProps: { textContent: _vm._s(category.posts_count) }
              })
            ]
          )
        })
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0e6e5914", module.exports)
  }
}

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(67)
/* template */
var __vue_template__ = __webpack_require__(68)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/script/components/JobCategoryComponent.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-47e7899b", Component.options)
  } else {
    hotAPI.reload("data-v-47e7899b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__event_bus_js__ = __webpack_require__(2);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    myProp: String
  },
  data: function data() {
    return {
      categories: [],
      jobs_count: 0
    };
  },
  created: function created() {
    var _this = this;

    axios.get('/api/categories/jobs').then(function (response) {
      return _this.categories = response.data;
    }).then(function (response) {
      return console.log(_this.categories);
    }).catch(function (error) {
      return console.log(error);
    });

    __WEBPACK_IMPORTED_MODULE_0__event_bus_js__["a" /* default */].$on('allJobCount', function (jobs_count) {
      console.log(jobs_count + ' jobs');
      _this.jobs_count = jobs_count;
    });
  },

  methods: {
    setCategoryIdJob: function setCategoryIdJob(category_id) {
      __WEBPACK_IMPORTED_MODULE_0__event_bus_js__["a" /* default */].$emit('setCategoryJob', category_id);
    },
    unsetCategoryIdJob: function unsetCategoryIdJob() {
      __WEBPACK_IMPORTED_MODULE_0__event_bus_js__["a" /* default */].$emit('unsetCategoryJob');
    }
  }
});

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "card" }, [
    _c(
      "ul",
      { staticClass: "list-group list-group-flush" },
      [
        _c("li", { staticClass: "list-group-item" }, [
          _c(
            "a",
            {
              staticStyle: { "text-decoration": "none" },
              attrs: { href: "javascript:void(0)" },
              on: {
                click: function($event) {
                  _vm.unsetCategoryIdJob()
                }
              }
            },
            [_vm._v("\n        All\n      ")]
          ),
          _vm._v(" "),
          _c("span", {
            staticClass: "badge badge-pill badge-danger",
            domProps: { textContent: _vm._s(this.jobs_count) }
          })
        ]),
        _vm._v(" "),
        _vm._l(this.categories, function(category) {
          return _c(
            "li",
            { key: category.id, staticClass: "list-group-item" },
            [
              _c(
                "a",
                {
                  staticStyle: { "text-decoration": "none" },
                  attrs: { href: "javascript:void(0)" },
                  on: {
                    click: function($event) {
                      _vm.setCategoryIdJob(category.id)
                    }
                  }
                },
                [_vm._v("\n      " + _vm._s(category.name) + "\n      ")]
              ),
              _vm._v(" "),
              _c("span", {
                staticClass: "badge badge-pill badge-danger",
                domProps: { textContent: _vm._s(category.jobs_count) }
              })
            ]
          )
        })
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-47e7899b", module.exports)
  }
}

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(70)
/* template */
var __vue_template__ = __webpack_require__(71)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/script/components/categories/CreateCategoryComponent.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1a517e49", Component.options)
  } else {
    hotAPI.reload("data-v-1a517e49", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      form: new Form({
        name: '',
        description: ''
      }),
      categories: []
    };
  },
  created: function created() {
    this.getCategory();
  },

  methods: {
    getCategory: function getCategory() {
      var _this = this;

      axios.get('/api/categories/').then(function (response) {
        return _this.categories = response.data;
      }).then(function (response) {
        return console.log(response);
      }).catch(function (error) {
        return console.log(error);
      });
    },
    onSubmit: function onSubmit() {
      var _this2 = this;

      this.form.post('/admin/categories/').then(function (response) {
        return _this2.getCategory();
      });
    },
    onDelete: function onDelete(category_id) {
      var _this3 = this;

      this.form.delete('/admin/categories/' + category_id).then(function (response) {
        return _this3.getCategory();
      });
    }
  }
});

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      { staticClass: "col-lg-12" },
      [
        _vm._l(_vm.categories, function(category) {
          return _c(
            "div",
            { key: category.id, staticClass: "panel panel-success" },
            [
              _c(
                "form",
                {
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      _vm.onDelete(category.id)
                    }
                  }
                },
                [_vm._m(0, true)]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "panel-heading" }, [
                _vm._v(
                  "\n            " +
                    _vm._s(category.name) +
                    "\n            \n\n        "
                )
              ]),
              _vm._v(" "),
              _c("div", {
                staticClass: "panel-body",
                domProps: { textContent: _vm._s(category.description) }
              })
            ]
          )
        }),
        _vm._v(" "),
        _c("div", { staticClass: "panel panel-success" }, [
          _c("div", { staticClass: "panel-heading" }, [
            _vm._v("\n            Create Category\n        ")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "panel-body" }, [
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.onSubmit($event)
                  },
                  keydown: function($event) {
                    _vm.form.errors.clear($event.target.name)
                  }
                }
              },
              [
                _c("div", { staticClass: "form-group" }, [
                  _c(
                    "label",
                    { staticClass: "form-label", attrs: { for: "name" } },
                    [_vm._v("Category Name")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.name,
                        expression: "form.name"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text" },
                    domProps: { value: _vm.form.name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "name", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("span", {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.form.errors.has("name"),
                        expression: "form.errors.has('name')"
                      }
                    ],
                    staticClass: "help-block bg-danger",
                    domProps: {
                      textContent: _vm._s(_vm.form.errors.get("name"))
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c(
                    "label",
                    {
                      staticClass: "form-label",
                      attrs: { for: "description" }
                    },
                    [_vm._v("Category Descriptions")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.description,
                        expression: "form.description"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text" },
                    domProps: { value: _vm.form.description },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "description", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("span", {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.form.errors.has("description"),
                        expression: "form.errors.has('description')"
                      }
                    ],
                    staticClass: "help-block bg-danger",
                    domProps: {
                      textContent: _vm._s(_vm.form.errors.get("description"))
                    }
                  })
                ]),
                _vm._v(" "),
                _vm._m(1)
              ]
            )
          ])
        ])
      ],
      2
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "btn btn-danger",
        staticStyle: {
          float: "right",
          "margin-right": "10px",
          "margin-top": "3px"
        }
      },
      [_c("i", { staticClass: "fa fa-trash" })]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-submit" }, [
      _c(
        "button",
        { staticClass: "btn btn-success", attrs: { type: "submit" } },
        [_vm._v("Create")]
      )
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1a517e49", module.exports)
  }
}

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(73)
/* template */
var __vue_template__ = __webpack_require__(74)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/script/components/FileBrowserComponent.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-61b7270a", Component.options)
  } else {
    hotAPI.reload("data-v-61b7270a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['image'],
    data: function data() {
        return {
            showMediaManager: false,
            pageImage: null
        };
    },
    mounted: function mounted() {
        var _this = this;

        if (this.pageImage == null) {
            this.pageImage = this.image;
        }
        window.eventHub.$on('media-manager-selected-editor', function (file) {
            // Do something with the file info...
            console.log(file.name);
            console.log(file.mimeType);
            console.log(file.relativePath);
            console.log(file.webPath);
            _this.pageImage = file.webPath;

            // Hide the Media Manager...
            _this.showMediaManager = false;
        });
    }
});

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm.showMediaManager
        ? _c(
            "media-modal",
            {
              on: {
                "media-modal-close": function($event) {
                  _vm.showMediaManager = false
                }
              }
            },
            [
              _c("media-manager", {
                attrs: { "is-modal": true, "selected-event-name": "editor" },
                on: {
                  "media-modal-close": function($event) {
                    _vm.showMediaManager = false
                  }
                }
              })
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c("div", { staticClass: "form-group" }, [
        _c("div", { staticClass: "input-group" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.pageImage,
                expression: "pageImage"
              }
            ],
            staticClass: "form-control",
            attrs: {
              type: "text",
              name: "page_image",
              id: "page_image",
              alt: "Image thumbnail",
              placeholder: "Page Image"
            },
            domProps: { value: _vm.pageImage },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.pageImage = $event.target.value
              }
            }
          }),
          _vm._v(" "),
          _c("span", { staticClass: "input-group-btn" }, [
            _c(
              "button",
              {
                staticClass: "btn btn-default",
                attrs: { type: "button" },
                on: {
                  click: function($event) {
                    _vm.showMediaManager = true
                  }
                }
              },
              [_vm._v("Select Image")]
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", [
          _vm.pageImage
            ? _c("img", {
                staticClass: "img img-responsive",
                staticStyle: { "margin-top": "3px", "max-height": "250px" },
                attrs: { id: "page-image-preview", src: _vm.pageImage }
              })
            : _c("span", { staticClass: "text-muted small" }, [
                _vm._v("No Image Selected")
              ])
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-61b7270a", module.exports)
  }
}

/***/ }),
/* 75 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);