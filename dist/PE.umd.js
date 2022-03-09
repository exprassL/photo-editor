(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["PE"] = factory(require("vue"));
	else
		root["PE"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__8bbf__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "01d6":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/*!\n * Cropper.js v1.5.12\n * https://fengyuanchen.github.io/cropperjs\n *\n * Copyright 2015-present Chen Fengyuan\n * Released under the MIT license\n *\n * Date: 2021-06-12T08:00:11.623Z\n */.cropper-container{direction:ltr;font-size:0;line-height:0;position:relative;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.cropper-container img{image-orientation:0deg;display:block;height:100%;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;width:100%}.cropper-canvas,.cropper-crop-box,.cropper-drag-box,.cropper-modal,.cropper-wrap-box{bottom:0;left:0;position:absolute;right:0;top:0}.cropper-canvas,.cropper-wrap-box{overflow:hidden}.cropper-drag-box{background-color:#fff;opacity:0}.cropper-modal{background-color:#000;opacity:.5}.cropper-view-box{display:block;height:100%;outline:1px solid #39f;outline-color:rgba(51,153,255,.75);overflow:hidden;width:100%}.cropper-dashed{border:0 dashed #eee;display:block;opacity:.5;position:absolute}.cropper-dashed.dashed-h{border-bottom-width:1px;border-top-width:1px;height:33.33333%;left:0;top:33.33333%;width:100%}.cropper-dashed.dashed-v{border-left-width:1px;border-right-width:1px;height:100%;left:33.33333%;top:0;width:33.33333%}.cropper-center{display:block;height:0;left:50%;opacity:.75;position:absolute;top:50%;width:0}.cropper-center:after,.cropper-center:before{background-color:#eee;content:\" \";display:block;position:absolute}.cropper-center:before{height:1px;left:-3px;top:0;width:7px}.cropper-center:after{height:7px;left:0;top:-3px;width:1px}.cropper-face,.cropper-line,.cropper-point{display:block;height:100%;opacity:.1;position:absolute;width:100%}.cropper-face{background-color:#fff;left:0;top:0}.cropper-line{background-color:#39f}.cropper-line.line-e{cursor:ew-resize;right:-3px;top:0;width:5px}.cropper-line.line-n{cursor:ns-resize;height:5px;left:0;top:-3px}.cropper-line.line-w{cursor:ew-resize;left:-3px;top:0;width:5px}.cropper-line.line-s{bottom:-3px;cursor:ns-resize;height:5px;left:0}.cropper-point{background-color:#39f;height:5px;opacity:.75;width:5px}.cropper-point.point-e{cursor:ew-resize;margin-top:-3px;right:-3px;top:50%}.cropper-point.point-n{cursor:ns-resize;left:50%;margin-left:-3px;top:-3px}.cropper-point.point-w{cursor:ew-resize;left:-3px;margin-top:-3px;top:50%}.cropper-point.point-s{bottom:-3px;cursor:s-resize;left:50%;margin-left:-3px}.cropper-point.point-ne{cursor:nesw-resize;right:-3px;top:-3px}.cropper-point.point-nw{cursor:nwse-resize;left:-3px;top:-3px}.cropper-point.point-sw{bottom:-3px;cursor:nesw-resize;left:-3px}.cropper-point.point-se{bottom:-3px;cursor:nwse-resize;height:20px;opacity:1;right:-3px;width:20px}@media (min-width:768px){.cropper-point.point-se{height:15px;width:15px}}@media (min-width:992px){.cropper-point.point-se{height:10px;width:10px}}@media (min-width:1200px){.cropper-point.point-se{height:5px;opacity:.75;width:5px}}.cropper-point.point-se:before{background-color:#39f;bottom:-50%;content:\" \";display:block;height:200%;opacity:0;position:absolute;right:-50%;width:200%}.cropper-invisible{opacity:0}.cropper-bg{background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC\")}.cropper-hide{display:block;height:0;position:absolute;width:0}.cropper-hidden{display:none!important}.cropper-move{cursor:move}.cropper-crop{cursor:crosshair}.cropper-disabled .cropper-drag-box,.cropper-disabled .cropper-face,.cropper-disabled .cropper-line,.cropper-disabled .cropper-point{cursor:not-allowed}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "1384":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("7476");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("774b5210", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "18e1":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/fonts/remixicon.9915fef9.woff2";

/***/ }),

/***/ "1de5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "24fb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "3af8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_Toolbar_vue_vue_type_style_index_0_id_885c4430_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b831");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_Toolbar_vue_vue_type_style_index_0_id_885c4430_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_Toolbar_vue_vue_type_style_index_0_id_885c4430_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "3e4b":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("415d");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("5744c740", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "415d":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "#main-box[data-v-69fbbba3]{color:#cdc9c9;width:100%;height:100vh}#prepare-box[data-v-69fbbba3]{position:fixed;left:50%;top:50%;transform:translate(-50%,-50%)}#prepare-box label[data-v-69fbbba3]{cursor:pointer;color:#0074d9}#image-file[data-v-69fbbba3]{display:none}#error-box[data-v-69fbbba3]{position:fixed;left:50%;top:5px;color:#f08080;transform:translateX(-50%)}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "4604":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("01d6");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("242e5854", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "499e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesClient; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
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

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
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

function addStylesClient (parentId, list, _isProduction, _options) {
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

/***/ "5623":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("7c54");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("8b8c355c", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "6b0d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// runtime helper for setting properties on components
// in a tree-shakable way
exports.default = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ "6fdf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_Editor_vue_vue_type_style_index_0_id_968fb2d6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fa49");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_Editor_vue_vue_type_style_index_0_id_968fb2d6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_Editor_vue_vue_type_style_index_0_id_968fb2d6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "7181":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/fonts/remixicon.31d28485.eot";

/***/ }),

/***/ "7245":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "#image-data[data-v-60580ea2]{position:fixed;top:0;background:rgba(245,241,241,.5);width:60px;height:60px;border-bottom-right-radius:100%;padding:5px;max-width:calc(50vw - 10px)}#image-data label[data-v-60580ea2]{transform:rotate(-45deg);display:block}#image-data ul[data-v-60580ea2]{display:none}#image-data:hover label[data-v-60580ea2]{display:inline}#image-data[data-v-60580ea2]:hover{background:rgba(33,33,33,.8);width:auto;height:auto;color:rgba(245,241,241,.5);border-bottom-right-radius:10px}#image-data:hover ul[data-v-60580ea2]{display:block}#cropped-data[data-v-60580ea2]{position:fixed;top:0;padding:5px;color:rgba(245,241,241,.5);max-width:calc(50vw - 10px);right:0}#cropped-data[data-v-60580ea2]:hover{background:rgba(33,33,33,.8);border-bottom-left-radius:10px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "72c5":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("7245");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("2efc6ab6", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "7349":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media screen and (max-width:500px){div.toolbar.bottom[data-v-968fb2d6]{width:calc(90% - 10px)}}div#cropperjs-box[data-v-968fb2d6]{height:100vh;width:100vw}img[data-v-968fb2d6]{display:block;max-width:100%}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "7476":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "div.preview-box[data-v-85651772]{z-index:7;position:fixed;left:0;top:0;width:100vw;height:100vh;background:#333}div#previewer[data-v-85651772]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}img[data-v-85651772]{max-width:60vw;max-height:60vh}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "7c54":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "div.outer[data-v-51a355a2]{margin:0;padding:0;background:rgba(245,241,241,.5);height:100vh;width:100vw;position:fixed;top:0;left:0;display:flex;align-items:center;justify-content:center;font-family:montserrat,sans-serif;z-index:999}.loading[data-v-51a355a2]{border-top:10px solid #e74c3c;position:relative;-webkit-animation:a1-51a355a2 2s linear infinite;animation:a1-51a355a2 2s linear infinite}.loading[data-v-51a355a2],.loading[data-v-51a355a2]:after,.loading[data-v-51a355a2]:before{width:100px;height:100px;box-sizing:border-box;border-radius:50%}.loading[data-v-51a355a2]:after,.loading[data-v-51a355a2]:before{content:\"\";position:absolute;left:0;top:-10px}.loading[data-v-51a355a2]:before{border-top:10px solid #e67322;transform:rotate(120deg)}.loading[data-v-51a355a2]:after{border-top:10px solid #3498db;transform:rotate(240deg)}.loading span[data-v-51a355a2]{position:absolute;width:100px;height:100px;color:#fff;text-align:center;line-height:100px;-webkit-animation:a2-51a355a2 2s linear infinite;animation:a2-51a355a2 2s linear infinite}@-webkit-keyframes a1-51a355a2{to{transform:rotate(1turn)}}@keyframes a1-51a355a2{to{transform:rotate(1turn)}}@-webkit-keyframes a2-51a355a2{to{transform:rotate(-1turn)}}@keyframes a2-51a355a2{to{transform:rotate(-1turn)}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "8e10":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/remixicon.95138f36.svg";

/***/ }),

/***/ "ab05":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("fb51");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("c05388a0", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "aef5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/fonts/remixicon.888e61f0.ttf";

/***/ }),

/***/ "b130":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "div.toolbar[data-v-885c4430]{position:fixed;text-align:center;background:rgba(245,241,241,.2);left:50%;transform:translateX(-50%);margin:1em auto;padding:5px;border-radius:10px;z-index:8}div.toolbar.top[data-v-885c4430]{top:0}div.toolbar.middle[data-v-885c4430]{top:50%;transform:translate(-50%,-50%);background:transparent;display:grid;grid-template-columns:repeat(5,5em);pointer-events:none}div.toolbar.middle i[data-v-885c4430]{line-height:2em;pointer-events:none;pointer-events:auto}div.toolbar.bottom[data-v-885c4430]{bottom:0}div.toolbar i[data-v-885c4430]{cursor:pointer;margin:1px 3px;color:#3d77da}div.toolbar i.active[data-v-885c4430]{color:#e74c3c}div.toolbar.ruler[data-v-885c4430]{bottom:3em}i[data-v-885c4430]{line-height:normal;border-radius:10px;-webkit-tap-highlight-color:transparent}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "b831":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("b130");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("68d1d484", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "bab4":
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Cropper.js v1.5.12
 * https://fengyuanchen.github.io/cropperjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2021-06-12T08:00:17.411Z
 */

(function (global, factory) {
   true ? module.exports = factory() :
  undefined;
}(this, (function () { 'use strict';

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);

      if (enumerableOnly) {
        symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      }

      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var IS_BROWSER = typeof window !== 'undefined' && typeof window.document !== 'undefined';
  var WINDOW = IS_BROWSER ? window : {};
  var IS_TOUCH_DEVICE = IS_BROWSER && WINDOW.document.documentElement ? 'ontouchstart' in WINDOW.document.documentElement : false;
  var HAS_POINTER_EVENT = IS_BROWSER ? 'PointerEvent' in WINDOW : false;
  var NAMESPACE = 'cropper'; // Actions

  var ACTION_ALL = 'all';
  var ACTION_CROP = 'crop';
  var ACTION_MOVE = 'move';
  var ACTION_ZOOM = 'zoom';
  var ACTION_EAST = 'e';
  var ACTION_WEST = 'w';
  var ACTION_SOUTH = 's';
  var ACTION_NORTH = 'n';
  var ACTION_NORTH_EAST = 'ne';
  var ACTION_NORTH_WEST = 'nw';
  var ACTION_SOUTH_EAST = 'se';
  var ACTION_SOUTH_WEST = 'sw'; // Classes

  var CLASS_CROP = "".concat(NAMESPACE, "-crop");
  var CLASS_DISABLED = "".concat(NAMESPACE, "-disabled");
  var CLASS_HIDDEN = "".concat(NAMESPACE, "-hidden");
  var CLASS_HIDE = "".concat(NAMESPACE, "-hide");
  var CLASS_INVISIBLE = "".concat(NAMESPACE, "-invisible");
  var CLASS_MODAL = "".concat(NAMESPACE, "-modal");
  var CLASS_MOVE = "".concat(NAMESPACE, "-move"); // Data keys

  var DATA_ACTION = "".concat(NAMESPACE, "Action");
  var DATA_PREVIEW = "".concat(NAMESPACE, "Preview"); // Drag modes

  var DRAG_MODE_CROP = 'crop';
  var DRAG_MODE_MOVE = 'move';
  var DRAG_MODE_NONE = 'none'; // Events

  var EVENT_CROP = 'crop';
  var EVENT_CROP_END = 'cropend';
  var EVENT_CROP_MOVE = 'cropmove';
  var EVENT_CROP_START = 'cropstart';
  var EVENT_DBLCLICK = 'dblclick';
  var EVENT_TOUCH_START = IS_TOUCH_DEVICE ? 'touchstart' : 'mousedown';
  var EVENT_TOUCH_MOVE = IS_TOUCH_DEVICE ? 'touchmove' : 'mousemove';
  var EVENT_TOUCH_END = IS_TOUCH_DEVICE ? 'touchend touchcancel' : 'mouseup';
  var EVENT_POINTER_DOWN = HAS_POINTER_EVENT ? 'pointerdown' : EVENT_TOUCH_START;
  var EVENT_POINTER_MOVE = HAS_POINTER_EVENT ? 'pointermove' : EVENT_TOUCH_MOVE;
  var EVENT_POINTER_UP = HAS_POINTER_EVENT ? 'pointerup pointercancel' : EVENT_TOUCH_END;
  var EVENT_READY = 'ready';
  var EVENT_RESIZE = 'resize';
  var EVENT_WHEEL = 'wheel';
  var EVENT_ZOOM = 'zoom'; // Mime types

  var MIME_TYPE_JPEG = 'image/jpeg'; // RegExps

  var REGEXP_ACTIONS = /^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/;
  var REGEXP_DATA_URL = /^data:/;
  var REGEXP_DATA_URL_JPEG = /^data:image\/jpeg;base64,/;
  var REGEXP_TAG_NAME = /^img|canvas$/i; // Misc
  // Inspired by the default width and height of a canvas element.

  var MIN_CONTAINER_WIDTH = 200;
  var MIN_CONTAINER_HEIGHT = 100;

  var DEFAULTS = {
    // Define the view mode of the cropper
    viewMode: 0,
    // 0, 1, 2, 3
    // Define the dragging mode of the cropper
    dragMode: DRAG_MODE_CROP,
    // 'crop', 'move' or 'none'
    // Define the initial aspect ratio of the crop box
    initialAspectRatio: NaN,
    // Define the aspect ratio of the crop box
    aspectRatio: NaN,
    // An object with the previous cropping result data
    data: null,
    // A selector for adding extra containers to preview
    preview: '',
    // Re-render the cropper when resize the window
    responsive: true,
    // Restore the cropped area after resize the window
    restore: true,
    // Check if the current image is a cross-origin image
    checkCrossOrigin: true,
    // Check the current image's Exif Orientation information
    checkOrientation: true,
    // Show the black modal
    modal: true,
    // Show the dashed lines for guiding
    guides: true,
    // Show the center indicator for guiding
    center: true,
    // Show the white modal to highlight the crop box
    highlight: true,
    // Show the grid background
    background: true,
    // Enable to crop the image automatically when initialize
    autoCrop: true,
    // Define the percentage of automatic cropping area when initializes
    autoCropArea: 0.8,
    // Enable to move the image
    movable: true,
    // Enable to rotate the image
    rotatable: true,
    // Enable to scale the image
    scalable: true,
    // Enable to zoom the image
    zoomable: true,
    // Enable to zoom the image by dragging touch
    zoomOnTouch: true,
    // Enable to zoom the image by wheeling mouse
    zoomOnWheel: true,
    // Define zoom ratio when zoom the image by wheeling mouse
    wheelZoomRatio: 0.1,
    // Enable to move the crop box
    cropBoxMovable: true,
    // Enable to resize the crop box
    cropBoxResizable: true,
    // Toggle drag mode between "crop" and "move" when click twice on the cropper
    toggleDragModeOnDblclick: true,
    // Size limitation
    minCanvasWidth: 0,
    minCanvasHeight: 0,
    minCropBoxWidth: 0,
    minCropBoxHeight: 0,
    minContainerWidth: MIN_CONTAINER_WIDTH,
    minContainerHeight: MIN_CONTAINER_HEIGHT,
    // Shortcuts of events
    ready: null,
    cropstart: null,
    cropmove: null,
    cropend: null,
    crop: null,
    zoom: null
  };

  var TEMPLATE = '<div class="cropper-container" touch-action="none">' + '<div class="cropper-wrap-box">' + '<div class="cropper-canvas"></div>' + '</div>' + '<div class="cropper-drag-box"></div>' + '<div class="cropper-crop-box">' + '<span class="cropper-view-box"></span>' + '<span class="cropper-dashed dashed-h"></span>' + '<span class="cropper-dashed dashed-v"></span>' + '<span class="cropper-center"></span>' + '<span class="cropper-face"></span>' + '<span class="cropper-line line-e" data-cropper-action="e"></span>' + '<span class="cropper-line line-n" data-cropper-action="n"></span>' + '<span class="cropper-line line-w" data-cropper-action="w"></span>' + '<span class="cropper-line line-s" data-cropper-action="s"></span>' + '<span class="cropper-point point-e" data-cropper-action="e"></span>' + '<span class="cropper-point point-n" data-cropper-action="n"></span>' + '<span class="cropper-point point-w" data-cropper-action="w"></span>' + '<span class="cropper-point point-s" data-cropper-action="s"></span>' + '<span class="cropper-point point-ne" data-cropper-action="ne"></span>' + '<span class="cropper-point point-nw" data-cropper-action="nw"></span>' + '<span class="cropper-point point-sw" data-cropper-action="sw"></span>' + '<span class="cropper-point point-se" data-cropper-action="se"></span>' + '</div>' + '</div>';

  /**
   * Check if the given value is not a number.
   */

  var isNaN = Number.isNaN || WINDOW.isNaN;
  /**
   * Check if the given value is a number.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is a number, else `false`.
   */

  function isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
  }
  /**
   * Check if the given value is a positive number.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is a positive number, else `false`.
   */

  var isPositiveNumber = function isPositiveNumber(value) {
    return value > 0 && value < Infinity;
  };
  /**
   * Check if the given value is undefined.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is undefined, else `false`.
   */

  function isUndefined(value) {
    return typeof value === 'undefined';
  }
  /**
   * Check if the given value is an object.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is an object, else `false`.
   */

  function isObject(value) {
    return _typeof(value) === 'object' && value !== null;
  }
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  /**
   * Check if the given value is a plain object.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is a plain object, else `false`.
   */

  function isPlainObject(value) {
    if (!isObject(value)) {
      return false;
    }

    try {
      var _constructor = value.constructor;
      var prototype = _constructor.prototype;
      return _constructor && prototype && hasOwnProperty.call(prototype, 'isPrototypeOf');
    } catch (error) {
      return false;
    }
  }
  /**
   * Check if the given value is a function.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is a function, else `false`.
   */

  function isFunction(value) {
    return typeof value === 'function';
  }
  var slice = Array.prototype.slice;
  /**
   * Convert array-like or iterable object to an array.
   * @param {*} value - The value to convert.
   * @returns {Array} Returns a new array.
   */

  function toArray(value) {
    return Array.from ? Array.from(value) : slice.call(value);
  }
  /**
   * Iterate the given data.
   * @param {*} data - The data to iterate.
   * @param {Function} callback - The process function for each element.
   * @returns {*} The original data.
   */

  function forEach(data, callback) {
    if (data && isFunction(callback)) {
      if (Array.isArray(data) || isNumber(data.length)
      /* array-like */
      ) {
          toArray(data).forEach(function (value, key) {
            callback.call(data, value, key, data);
          });
        } else if (isObject(data)) {
        Object.keys(data).forEach(function (key) {
          callback.call(data, data[key], key, data);
        });
      }
    }

    return data;
  }
  /**
   * Extend the given object.
   * @param {*} target - The target object to extend.
   * @param {*} args - The rest objects for merging to the target object.
   * @returns {Object} The extended object.
   */

  var assign = Object.assign || function assign(target) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (isObject(target) && args.length > 0) {
      args.forEach(function (arg) {
        if (isObject(arg)) {
          Object.keys(arg).forEach(function (key) {
            target[key] = arg[key];
          });
        }
      });
    }

    return target;
  };
  var REGEXP_DECIMALS = /\.\d*(?:0|9){12}\d*$/;
  /**
   * Normalize decimal number.
   * Check out {@link https://0.30000000000000004.com/}
   * @param {number} value - The value to normalize.
   * @param {number} [times=100000000000] - The times for normalizing.
   * @returns {number} Returns the normalized number.
   */

  function normalizeDecimalNumber(value) {
    var times = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100000000000;
    return REGEXP_DECIMALS.test(value) ? Math.round(value * times) / times : value;
  }
  var REGEXP_SUFFIX = /^width|height|left|top|marginLeft|marginTop$/;
  /**
   * Apply styles to the given element.
   * @param {Element} element - The target element.
   * @param {Object} styles - The styles for applying.
   */

  function setStyle(element, styles) {
    var style = element.style;
    forEach(styles, function (value, property) {
      if (REGEXP_SUFFIX.test(property) && isNumber(value)) {
        value = "".concat(value, "px");
      }

      style[property] = value;
    });
  }
  /**
   * Check if the given element has a special class.
   * @param {Element} element - The element to check.
   * @param {string} value - The class to search.
   * @returns {boolean} Returns `true` if the special class was found.
   */

  function hasClass(element, value) {
    return element.classList ? element.classList.contains(value) : element.className.indexOf(value) > -1;
  }
  /**
   * Add classes to the given element.
   * @param {Element} element - The target element.
   * @param {string} value - The classes to be added.
   */

  function addClass(element, value) {
    if (!value) {
      return;
    }

    if (isNumber(element.length)) {
      forEach(element, function (elem) {
        addClass(elem, value);
      });
      return;
    }

    if (element.classList) {
      element.classList.add(value);
      return;
    }

    var className = element.className.trim();

    if (!className) {
      element.className = value;
    } else if (className.indexOf(value) < 0) {
      element.className = "".concat(className, " ").concat(value);
    }
  }
  /**
   * Remove classes from the given element.
   * @param {Element} element - The target element.
   * @param {string} value - The classes to be removed.
   */

  function removeClass(element, value) {
    if (!value) {
      return;
    }

    if (isNumber(element.length)) {
      forEach(element, function (elem) {
        removeClass(elem, value);
      });
      return;
    }

    if (element.classList) {
      element.classList.remove(value);
      return;
    }

    if (element.className.indexOf(value) >= 0) {
      element.className = element.className.replace(value, '');
    }
  }
  /**
   * Add or remove classes from the given element.
   * @param {Element} element - The target element.
   * @param {string} value - The classes to be toggled.
   * @param {boolean} added - Add only.
   */

  function toggleClass(element, value, added) {
    if (!value) {
      return;
    }

    if (isNumber(element.length)) {
      forEach(element, function (elem) {
        toggleClass(elem, value, added);
      });
      return;
    } // IE10-11 doesn't support the second parameter of `classList.toggle`


    if (added) {
      addClass(element, value);
    } else {
      removeClass(element, value);
    }
  }
  var REGEXP_CAMEL_CASE = /([a-z\d])([A-Z])/g;
  /**
   * Transform the given string from camelCase to kebab-case
   * @param {string} value - The value to transform.
   * @returns {string} The transformed value.
   */

  function toParamCase(value) {
    return value.replace(REGEXP_CAMEL_CASE, '$1-$2').toLowerCase();
  }
  /**
   * Get data from the given element.
   * @param {Element} element - The target element.
   * @param {string} name - The data key to get.
   * @returns {string} The data value.
   */

  function getData(element, name) {
    if (isObject(element[name])) {
      return element[name];
    }

    if (element.dataset) {
      return element.dataset[name];
    }

    return element.getAttribute("data-".concat(toParamCase(name)));
  }
  /**
   * Set data to the given element.
   * @param {Element} element - The target element.
   * @param {string} name - The data key to set.
   * @param {string} data - The data value.
   */

  function setData(element, name, data) {
    if (isObject(data)) {
      element[name] = data;
    } else if (element.dataset) {
      element.dataset[name] = data;
    } else {
      element.setAttribute("data-".concat(toParamCase(name)), data);
    }
  }
  /**
   * Remove data from the given element.
   * @param {Element} element - The target element.
   * @param {string} name - The data key to remove.
   */

  function removeData(element, name) {
    if (isObject(element[name])) {
      try {
        delete element[name];
      } catch (error) {
        element[name] = undefined;
      }
    } else if (element.dataset) {
      // #128 Safari not allows to delete dataset property
      try {
        delete element.dataset[name];
      } catch (error) {
        element.dataset[name] = undefined;
      }
    } else {
      element.removeAttribute("data-".concat(toParamCase(name)));
    }
  }
  var REGEXP_SPACES = /\s\s*/;

  var onceSupported = function () {
    var supported = false;

    if (IS_BROWSER) {
      var once = false;

      var listener = function listener() {};

      var options = Object.defineProperty({}, 'once', {
        get: function get() {
          supported = true;
          return once;
        },

        /**
         * This setter can fix a `TypeError` in strict mode
         * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Getter_only}
         * @param {boolean} value - The value to set
         */
        set: function set(value) {
          once = value;
        }
      });
      WINDOW.addEventListener('test', listener, options);
      WINDOW.removeEventListener('test', listener, options);
    }

    return supported;
  }();
  /**
   * Remove event listener from the target element.
   * @param {Element} element - The event target.
   * @param {string} type - The event type(s).
   * @param {Function} listener - The event listener.
   * @param {Object} options - The event options.
   */


  function removeListener(element, type, listener) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var handler = listener;
    type.trim().split(REGEXP_SPACES).forEach(function (event) {
      if (!onceSupported) {
        var listeners = element.listeners;

        if (listeners && listeners[event] && listeners[event][listener]) {
          handler = listeners[event][listener];
          delete listeners[event][listener];

          if (Object.keys(listeners[event]).length === 0) {
            delete listeners[event];
          }

          if (Object.keys(listeners).length === 0) {
            delete element.listeners;
          }
        }
      }

      element.removeEventListener(event, handler, options);
    });
  }
  /**
   * Add event listener to the target element.
   * @param {Element} element - The event target.
   * @param {string} type - The event type(s).
   * @param {Function} listener - The event listener.
   * @param {Object} options - The event options.
   */

  function addListener(element, type, listener) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var _handler = listener;
    type.trim().split(REGEXP_SPACES).forEach(function (event) {
      if (options.once && !onceSupported) {
        var _element$listeners = element.listeners,
            listeners = _element$listeners === void 0 ? {} : _element$listeners;

        _handler = function handler() {
          delete listeners[event][listener];
          element.removeEventListener(event, _handler, options);

          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          listener.apply(element, args);
        };

        if (!listeners[event]) {
          listeners[event] = {};
        }

        if (listeners[event][listener]) {
          element.removeEventListener(event, listeners[event][listener], options);
        }

        listeners[event][listener] = _handler;
        element.listeners = listeners;
      }

      element.addEventListener(event, _handler, options);
    });
  }
  /**
   * Dispatch event on the target element.
   * @param {Element} element - The event target.
   * @param {string} type - The event type(s).
   * @param {Object} data - The additional event data.
   * @returns {boolean} Indicate if the event is default prevented or not.
   */

  function dispatchEvent(element, type, data) {
    var event; // Event and CustomEvent on IE9-11 are global objects, not constructors

    if (isFunction(Event) && isFunction(CustomEvent)) {
      event = new CustomEvent(type, {
        detail: data,
        bubbles: true,
        cancelable: true
      });
    } else {
      event = document.createEvent('CustomEvent');
      event.initCustomEvent(type, true, true, data);
    }

    return element.dispatchEvent(event);
  }
  /**
   * Get the offset base on the document.
   * @param {Element} element - The target element.
   * @returns {Object} The offset data.
   */

  function getOffset(element) {
    var box = element.getBoundingClientRect();
    return {
      left: box.left + (window.pageXOffset - document.documentElement.clientLeft),
      top: box.top + (window.pageYOffset - document.documentElement.clientTop)
    };
  }
  var location = WINDOW.location;
  var REGEXP_ORIGINS = /^(\w+:)\/\/([^:/?#]*):?(\d*)/i;
  /**
   * Check if the given URL is a cross origin URL.
   * @param {string} url - The target URL.
   * @returns {boolean} Returns `true` if the given URL is a cross origin URL, else `false`.
   */

  function isCrossOriginURL(url) {
    var parts = url.match(REGEXP_ORIGINS);
    return parts !== null && (parts[1] !== location.protocol || parts[2] !== location.hostname || parts[3] !== location.port);
  }
  /**
   * Add timestamp to the given URL.
   * @param {string} url - The target URL.
   * @returns {string} The result URL.
   */

  function addTimestamp(url) {
    var timestamp = "timestamp=".concat(new Date().getTime());
    return url + (url.indexOf('?') === -1 ? '?' : '&') + timestamp;
  }
  /**
   * Get transforms base on the given object.
   * @param {Object} obj - The target object.
   * @returns {string} A string contains transform values.
   */

  function getTransforms(_ref) {
    var rotate = _ref.rotate,
        scaleX = _ref.scaleX,
        scaleY = _ref.scaleY,
        translateX = _ref.translateX,
        translateY = _ref.translateY;
    var values = [];

    if (isNumber(translateX) && translateX !== 0) {
      values.push("translateX(".concat(translateX, "px)"));
    }

    if (isNumber(translateY) && translateY !== 0) {
      values.push("translateY(".concat(translateY, "px)"));
    } // Rotate should come first before scale to match orientation transform


    if (isNumber(rotate) && rotate !== 0) {
      values.push("rotate(".concat(rotate, "deg)"));
    }

    if (isNumber(scaleX) && scaleX !== 1) {
      values.push("scaleX(".concat(scaleX, ")"));
    }

    if (isNumber(scaleY) && scaleY !== 1) {
      values.push("scaleY(".concat(scaleY, ")"));
    }

    var transform = values.length ? values.join(' ') : 'none';
    return {
      WebkitTransform: transform,
      msTransform: transform,
      transform: transform
    };
  }
  /**
   * Get the max ratio of a group of pointers.
   * @param {string} pointers - The target pointers.
   * @returns {number} The result ratio.
   */

  function getMaxZoomRatio(pointers) {
    var pointers2 = _objectSpread2({}, pointers);

    var maxRatio = 0;
    forEach(pointers, function (pointer, pointerId) {
      delete pointers2[pointerId];
      forEach(pointers2, function (pointer2) {
        var x1 = Math.abs(pointer.startX - pointer2.startX);
        var y1 = Math.abs(pointer.startY - pointer2.startY);
        var x2 = Math.abs(pointer.endX - pointer2.endX);
        var y2 = Math.abs(pointer.endY - pointer2.endY);
        var z1 = Math.sqrt(x1 * x1 + y1 * y1);
        var z2 = Math.sqrt(x2 * x2 + y2 * y2);
        var ratio = (z2 - z1) / z1;

        if (Math.abs(ratio) > Math.abs(maxRatio)) {
          maxRatio = ratio;
        }
      });
    });
    return maxRatio;
  }
  /**
   * Get a pointer from an event object.
   * @param {Object} event - The target event object.
   * @param {boolean} endOnly - Indicates if only returns the end point coordinate or not.
   * @returns {Object} The result pointer contains start and/or end point coordinates.
   */

  function getPointer(_ref2, endOnly) {
    var pageX = _ref2.pageX,
        pageY = _ref2.pageY;
    var end = {
      endX: pageX,
      endY: pageY
    };
    return endOnly ? end : _objectSpread2({
      startX: pageX,
      startY: pageY
    }, end);
  }
  /**
   * Get the center point coordinate of a group of pointers.
   * @param {Object} pointers - The target pointers.
   * @returns {Object} The center point coordinate.
   */

  function getPointersCenter(pointers) {
    var pageX = 0;
    var pageY = 0;
    var count = 0;
    forEach(pointers, function (_ref3) {
      var startX = _ref3.startX,
          startY = _ref3.startY;
      pageX += startX;
      pageY += startY;
      count += 1;
    });
    pageX /= count;
    pageY /= count;
    return {
      pageX: pageX,
      pageY: pageY
    };
  }
  /**
   * Get the max sizes in a rectangle under the given aspect ratio.
   * @param {Object} data - The original sizes.
   * @param {string} [type='contain'] - The adjust type.
   * @returns {Object} The result sizes.
   */

  function getAdjustedSizes(_ref4) // or 'cover'
  {
    var aspectRatio = _ref4.aspectRatio,
        height = _ref4.height,
        width = _ref4.width;
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'contain';
    var isValidWidth = isPositiveNumber(width);
    var isValidHeight = isPositiveNumber(height);

    if (isValidWidth && isValidHeight) {
      var adjustedWidth = height * aspectRatio;

      if (type === 'contain' && adjustedWidth > width || type === 'cover' && adjustedWidth < width) {
        height = width / aspectRatio;
      } else {
        width = height * aspectRatio;
      }
    } else if (isValidWidth) {
      height = width / aspectRatio;
    } else if (isValidHeight) {
      width = height * aspectRatio;
    }

    return {
      width: width,
      height: height
    };
  }
  /**
   * Get the new sizes of a rectangle after rotated.
   * @param {Object} data - The original sizes.
   * @returns {Object} The result sizes.
   */

  function getRotatedSizes(_ref5) {
    var width = _ref5.width,
        height = _ref5.height,
        degree = _ref5.degree;
    degree = Math.abs(degree) % 180;

    if (degree === 90) {
      return {
        width: height,
        height: width
      };
    }

    var arc = degree % 90 * Math.PI / 180;
    var sinArc = Math.sin(arc);
    var cosArc = Math.cos(arc);
    var newWidth = width * cosArc + height * sinArc;
    var newHeight = width * sinArc + height * cosArc;
    return degree > 90 ? {
      width: newHeight,
      height: newWidth
    } : {
      width: newWidth,
      height: newHeight
    };
  }
  /**
   * Get a canvas which drew the given image.
   * @param {HTMLImageElement} image - The image for drawing.
   * @param {Object} imageData - The image data.
   * @param {Object} canvasData - The canvas data.
   * @param {Object} options - The options.
   * @returns {HTMLCanvasElement} The result canvas.
   */

  function getSourceCanvas(image, _ref6, _ref7, _ref8) {
    var imageAspectRatio = _ref6.aspectRatio,
        imageNaturalWidth = _ref6.naturalWidth,
        imageNaturalHeight = _ref6.naturalHeight,
        _ref6$rotate = _ref6.rotate,
        rotate = _ref6$rotate === void 0 ? 0 : _ref6$rotate,
        _ref6$scaleX = _ref6.scaleX,
        scaleX = _ref6$scaleX === void 0 ? 1 : _ref6$scaleX,
        _ref6$scaleY = _ref6.scaleY,
        scaleY = _ref6$scaleY === void 0 ? 1 : _ref6$scaleY;
    var aspectRatio = _ref7.aspectRatio,
        naturalWidth = _ref7.naturalWidth,
        naturalHeight = _ref7.naturalHeight;
    var _ref8$fillColor = _ref8.fillColor,
        fillColor = _ref8$fillColor === void 0 ? 'transparent' : _ref8$fillColor,
        _ref8$imageSmoothingE = _ref8.imageSmoothingEnabled,
        imageSmoothingEnabled = _ref8$imageSmoothingE === void 0 ? true : _ref8$imageSmoothingE,
        _ref8$imageSmoothingQ = _ref8.imageSmoothingQuality,
        imageSmoothingQuality = _ref8$imageSmoothingQ === void 0 ? 'low' : _ref8$imageSmoothingQ,
        _ref8$maxWidth = _ref8.maxWidth,
        maxWidth = _ref8$maxWidth === void 0 ? Infinity : _ref8$maxWidth,
        _ref8$maxHeight = _ref8.maxHeight,
        maxHeight = _ref8$maxHeight === void 0 ? Infinity : _ref8$maxHeight,
        _ref8$minWidth = _ref8.minWidth,
        minWidth = _ref8$minWidth === void 0 ? 0 : _ref8$minWidth,
        _ref8$minHeight = _ref8.minHeight,
        minHeight = _ref8$minHeight === void 0 ? 0 : _ref8$minHeight;
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    var maxSizes = getAdjustedSizes({
      aspectRatio: aspectRatio,
      width: maxWidth,
      height: maxHeight
    });
    var minSizes = getAdjustedSizes({
      aspectRatio: aspectRatio,
      width: minWidth,
      height: minHeight
    }, 'cover');
    var width = Math.min(maxSizes.width, Math.max(minSizes.width, naturalWidth));
    var height = Math.min(maxSizes.height, Math.max(minSizes.height, naturalHeight)); // Note: should always use image's natural sizes for drawing as
    // imageData.naturalWidth === canvasData.naturalHeight when rotate % 180 === 90

    var destMaxSizes = getAdjustedSizes({
      aspectRatio: imageAspectRatio,
      width: maxWidth,
      height: maxHeight
    });
    var destMinSizes = getAdjustedSizes({
      aspectRatio: imageAspectRatio,
      width: minWidth,
      height: minHeight
    }, 'cover');
    var destWidth = Math.min(destMaxSizes.width, Math.max(destMinSizes.width, imageNaturalWidth));
    var destHeight = Math.min(destMaxSizes.height, Math.max(destMinSizes.height, imageNaturalHeight));
    var params = [-destWidth / 2, -destHeight / 2, destWidth, destHeight];
    canvas.width = normalizeDecimalNumber(width);
    canvas.height = normalizeDecimalNumber(height);
    context.fillStyle = fillColor;
    context.fillRect(0, 0, width, height);
    context.save();
    context.translate(width / 2, height / 2);
    context.rotate(rotate * Math.PI / 180);
    context.scale(scaleX, scaleY);
    context.imageSmoothingEnabled = imageSmoothingEnabled;
    context.imageSmoothingQuality = imageSmoothingQuality;
    context.drawImage.apply(context, [image].concat(_toConsumableArray(params.map(function (param) {
      return Math.floor(normalizeDecimalNumber(param));
    }))));
    context.restore();
    return canvas;
  }
  var fromCharCode = String.fromCharCode;
  /**
   * Get string from char code in data view.
   * @param {DataView} dataView - The data view for read.
   * @param {number} start - The start index.
   * @param {number} length - The read length.
   * @returns {string} The read result.
   */

  function getStringFromCharCode(dataView, start, length) {
    var str = '';
    length += start;

    for (var i = start; i < length; i += 1) {
      str += fromCharCode(dataView.getUint8(i));
    }

    return str;
  }
  var REGEXP_DATA_URL_HEAD = /^data:.*,/;
  /**
   * Transform Data URL to array buffer.
   * @param {string} dataURL - The Data URL to transform.
   * @returns {ArrayBuffer} The result array buffer.
   */

  function dataURLToArrayBuffer(dataURL) {
    var base64 = dataURL.replace(REGEXP_DATA_URL_HEAD, '');
    var binary = atob(base64);
    var arrayBuffer = new ArrayBuffer(binary.length);
    var uint8 = new Uint8Array(arrayBuffer);
    forEach(uint8, function (value, i) {
      uint8[i] = binary.charCodeAt(i);
    });
    return arrayBuffer;
  }
  /**
   * Transform array buffer to Data URL.
   * @param {ArrayBuffer} arrayBuffer - The array buffer to transform.
   * @param {string} mimeType - The mime type of the Data URL.
   * @returns {string} The result Data URL.
   */

  function arrayBufferToDataURL(arrayBuffer, mimeType) {
    var chunks = []; // Chunk Typed Array for better performance (#435)

    var chunkSize = 8192;
    var uint8 = new Uint8Array(arrayBuffer);

    while (uint8.length > 0) {
      // XXX: Babel's `toConsumableArray` helper will throw error in IE or Safari 9
      // eslint-disable-next-line prefer-spread
      chunks.push(fromCharCode.apply(null, toArray(uint8.subarray(0, chunkSize))));
      uint8 = uint8.subarray(chunkSize);
    }

    return "data:".concat(mimeType, ";base64,").concat(btoa(chunks.join('')));
  }
  /**
   * Get orientation value from given array buffer.
   * @param {ArrayBuffer} arrayBuffer - The array buffer to read.
   * @returns {number} The read orientation value.
   */

  function resetAndGetOrientation(arrayBuffer) {
    var dataView = new DataView(arrayBuffer);
    var orientation; // Ignores range error when the image does not have correct Exif information

    try {
      var littleEndian;
      var app1Start;
      var ifdStart; // Only handle JPEG image (start by 0xFFD8)

      if (dataView.getUint8(0) === 0xFF && dataView.getUint8(1) === 0xD8) {
        var length = dataView.byteLength;
        var offset = 2;

        while (offset + 1 < length) {
          if (dataView.getUint8(offset) === 0xFF && dataView.getUint8(offset + 1) === 0xE1) {
            app1Start = offset;
            break;
          }

          offset += 1;
        }
      }

      if (app1Start) {
        var exifIDCode = app1Start + 4;
        var tiffOffset = app1Start + 10;

        if (getStringFromCharCode(dataView, exifIDCode, 4) === 'Exif') {
          var endianness = dataView.getUint16(tiffOffset);
          littleEndian = endianness === 0x4949;

          if (littleEndian || endianness === 0x4D4D
          /* bigEndian */
          ) {
              if (dataView.getUint16(tiffOffset + 2, littleEndian) === 0x002A) {
                var firstIFDOffset = dataView.getUint32(tiffOffset + 4, littleEndian);

                if (firstIFDOffset >= 0x00000008) {
                  ifdStart = tiffOffset + firstIFDOffset;
                }
              }
            }
        }
      }

      if (ifdStart) {
        var _length = dataView.getUint16(ifdStart, littleEndian);

        var _offset;

        var i;

        for (i = 0; i < _length; i += 1) {
          _offset = ifdStart + i * 12 + 2;

          if (dataView.getUint16(_offset, littleEndian) === 0x0112
          /* Orientation */
          ) {
              // 8 is the offset of the current tag's value
              _offset += 8; // Get the original orientation value

              orientation = dataView.getUint16(_offset, littleEndian); // Override the orientation with its default value

              dataView.setUint16(_offset, 1, littleEndian);
              break;
            }
        }
      }
    } catch (error) {
      orientation = 1;
    }

    return orientation;
  }
  /**
   * Parse Exif Orientation value.
   * @param {number} orientation - The orientation to parse.
   * @returns {Object} The parsed result.
   */

  function parseOrientation(orientation) {
    var rotate = 0;
    var scaleX = 1;
    var scaleY = 1;

    switch (orientation) {
      // Flip horizontal
      case 2:
        scaleX = -1;
        break;
      // Rotate left 180°

      case 3:
        rotate = -180;
        break;
      // Flip vertical

      case 4:
        scaleY = -1;
        break;
      // Flip vertical and rotate right 90°

      case 5:
        rotate = 90;
        scaleY = -1;
        break;
      // Rotate right 90°

      case 6:
        rotate = 90;
        break;
      // Flip horizontal and rotate right 90°

      case 7:
        rotate = 90;
        scaleX = -1;
        break;
      // Rotate left 90°

      case 8:
        rotate = -90;
        break;
    }

    return {
      rotate: rotate,
      scaleX: scaleX,
      scaleY: scaleY
    };
  }

  var render = {
    render: function render() {
      this.initContainer();
      this.initCanvas();
      this.initCropBox();
      this.renderCanvas();

      if (this.cropped) {
        this.renderCropBox();
      }
    },
    initContainer: function initContainer() {
      var element = this.element,
          options = this.options,
          container = this.container,
          cropper = this.cropper;
      var minWidth = Number(options.minContainerWidth);
      var minHeight = Number(options.minContainerHeight);
      addClass(cropper, CLASS_HIDDEN);
      removeClass(element, CLASS_HIDDEN);
      var containerData = {
        width: Math.max(container.offsetWidth, minWidth >= 0 ? minWidth : MIN_CONTAINER_WIDTH),
        height: Math.max(container.offsetHeight, minHeight >= 0 ? minHeight : MIN_CONTAINER_HEIGHT)
      };
      this.containerData = containerData;
      setStyle(cropper, {
        width: containerData.width,
        height: containerData.height
      });
      addClass(element, CLASS_HIDDEN);
      removeClass(cropper, CLASS_HIDDEN);
    },
    // Canvas (image wrapper)
    initCanvas: function initCanvas() {
      var containerData = this.containerData,
          imageData = this.imageData;
      var viewMode = this.options.viewMode;
      var rotated = Math.abs(imageData.rotate) % 180 === 90;
      var naturalWidth = rotated ? imageData.naturalHeight : imageData.naturalWidth;
      var naturalHeight = rotated ? imageData.naturalWidth : imageData.naturalHeight;
      var aspectRatio = naturalWidth / naturalHeight;
      var canvasWidth = containerData.width;
      var canvasHeight = containerData.height;

      if (containerData.height * aspectRatio > containerData.width) {
        if (viewMode === 3) {
          canvasWidth = containerData.height * aspectRatio;
        } else {
          canvasHeight = containerData.width / aspectRatio;
        }
      } else if (viewMode === 3) {
        canvasHeight = containerData.width / aspectRatio;
      } else {
        canvasWidth = containerData.height * aspectRatio;
      }

      var canvasData = {
        aspectRatio: aspectRatio,
        naturalWidth: naturalWidth,
        naturalHeight: naturalHeight,
        width: canvasWidth,
        height: canvasHeight
      };
      this.canvasData = canvasData;
      this.limited = viewMode === 1 || viewMode === 2;
      this.limitCanvas(true, true);
      canvasData.width = Math.min(Math.max(canvasData.width, canvasData.minWidth), canvasData.maxWidth);
      canvasData.height = Math.min(Math.max(canvasData.height, canvasData.minHeight), canvasData.maxHeight);
      canvasData.left = (containerData.width - canvasData.width) / 2;
      canvasData.top = (containerData.height - canvasData.height) / 2;
      canvasData.oldLeft = canvasData.left;
      canvasData.oldTop = canvasData.top;
      this.initialCanvasData = assign({}, canvasData);
    },
    limitCanvas: function limitCanvas(sizeLimited, positionLimited) {
      var options = this.options,
          containerData = this.containerData,
          canvasData = this.canvasData,
          cropBoxData = this.cropBoxData;
      var viewMode = options.viewMode;
      var aspectRatio = canvasData.aspectRatio;
      var cropped = this.cropped && cropBoxData;

      if (sizeLimited) {
        var minCanvasWidth = Number(options.minCanvasWidth) || 0;
        var minCanvasHeight = Number(options.minCanvasHeight) || 0;

        if (viewMode > 1) {
          minCanvasWidth = Math.max(minCanvasWidth, containerData.width);
          minCanvasHeight = Math.max(minCanvasHeight, containerData.height);

          if (viewMode === 3) {
            if (minCanvasHeight * aspectRatio > minCanvasWidth) {
              minCanvasWidth = minCanvasHeight * aspectRatio;
            } else {
              minCanvasHeight = minCanvasWidth / aspectRatio;
            }
          }
        } else if (viewMode > 0) {
          if (minCanvasWidth) {
            minCanvasWidth = Math.max(minCanvasWidth, cropped ? cropBoxData.width : 0);
          } else if (minCanvasHeight) {
            minCanvasHeight = Math.max(minCanvasHeight, cropped ? cropBoxData.height : 0);
          } else if (cropped) {
            minCanvasWidth = cropBoxData.width;
            minCanvasHeight = cropBoxData.height;

            if (minCanvasHeight * aspectRatio > minCanvasWidth) {
              minCanvasWidth = minCanvasHeight * aspectRatio;
            } else {
              minCanvasHeight = minCanvasWidth / aspectRatio;
            }
          }
        }

        var _getAdjustedSizes = getAdjustedSizes({
          aspectRatio: aspectRatio,
          width: minCanvasWidth,
          height: minCanvasHeight
        });

        minCanvasWidth = _getAdjustedSizes.width;
        minCanvasHeight = _getAdjustedSizes.height;
        canvasData.minWidth = minCanvasWidth;
        canvasData.minHeight = minCanvasHeight;
        canvasData.maxWidth = Infinity;
        canvasData.maxHeight = Infinity;
      }

      if (positionLimited) {
        if (viewMode > (cropped ? 0 : 1)) {
          var newCanvasLeft = containerData.width - canvasData.width;
          var newCanvasTop = containerData.height - canvasData.height;
          canvasData.minLeft = Math.min(0, newCanvasLeft);
          canvasData.minTop = Math.min(0, newCanvasTop);
          canvasData.maxLeft = Math.max(0, newCanvasLeft);
          canvasData.maxTop = Math.max(0, newCanvasTop);

          if (cropped && this.limited) {
            canvasData.minLeft = Math.min(cropBoxData.left, cropBoxData.left + (cropBoxData.width - canvasData.width));
            canvasData.minTop = Math.min(cropBoxData.top, cropBoxData.top + (cropBoxData.height - canvasData.height));
            canvasData.maxLeft = cropBoxData.left;
            canvasData.maxTop = cropBoxData.top;

            if (viewMode === 2) {
              if (canvasData.width >= containerData.width) {
                canvasData.minLeft = Math.min(0, newCanvasLeft);
                canvasData.maxLeft = Math.max(0, newCanvasLeft);
              }

              if (canvasData.height >= containerData.height) {
                canvasData.minTop = Math.min(0, newCanvasTop);
                canvasData.maxTop = Math.max(0, newCanvasTop);
              }
            }
          }
        } else {
          canvasData.minLeft = -canvasData.width;
          canvasData.minTop = -canvasData.height;
          canvasData.maxLeft = containerData.width;
          canvasData.maxTop = containerData.height;
        }
      }
    },
    renderCanvas: function renderCanvas(changed, transformed) {
      var canvasData = this.canvasData,
          imageData = this.imageData;

      if (transformed) {
        var _getRotatedSizes = getRotatedSizes({
          width: imageData.naturalWidth * Math.abs(imageData.scaleX || 1),
          height: imageData.naturalHeight * Math.abs(imageData.scaleY || 1),
          degree: imageData.rotate || 0
        }),
            naturalWidth = _getRotatedSizes.width,
            naturalHeight = _getRotatedSizes.height;

        var width = canvasData.width * (naturalWidth / canvasData.naturalWidth);
        var height = canvasData.height * (naturalHeight / canvasData.naturalHeight);
        canvasData.left -= (width - canvasData.width) / 2;
        canvasData.top -= (height - canvasData.height) / 2;
        canvasData.width = width;
        canvasData.height = height;
        canvasData.aspectRatio = naturalWidth / naturalHeight;
        canvasData.naturalWidth = naturalWidth;
        canvasData.naturalHeight = naturalHeight;
        this.limitCanvas(true, false);
      }

      if (canvasData.width > canvasData.maxWidth || canvasData.width < canvasData.minWidth) {
        canvasData.left = canvasData.oldLeft;
      }

      if (canvasData.height > canvasData.maxHeight || canvasData.height < canvasData.minHeight) {
        canvasData.top = canvasData.oldTop;
      }

      canvasData.width = Math.min(Math.max(canvasData.width, canvasData.minWidth), canvasData.maxWidth);
      canvasData.height = Math.min(Math.max(canvasData.height, canvasData.minHeight), canvasData.maxHeight);
      this.limitCanvas(false, true);
      canvasData.left = Math.min(Math.max(canvasData.left, canvasData.minLeft), canvasData.maxLeft);
      canvasData.top = Math.min(Math.max(canvasData.top, canvasData.minTop), canvasData.maxTop);
      canvasData.oldLeft = canvasData.left;
      canvasData.oldTop = canvasData.top;
      setStyle(this.canvas, assign({
        width: canvasData.width,
        height: canvasData.height
      }, getTransforms({
        translateX: canvasData.left,
        translateY: canvasData.top
      })));
      this.renderImage(changed);

      if (this.cropped && this.limited) {
        this.limitCropBox(true, true);
      }
    },
    renderImage: function renderImage(changed) {
      var canvasData = this.canvasData,
          imageData = this.imageData;
      var width = imageData.naturalWidth * (canvasData.width / canvasData.naturalWidth);
      var height = imageData.naturalHeight * (canvasData.height / canvasData.naturalHeight);
      assign(imageData, {
        width: width,
        height: height,
        left: (canvasData.width - width) / 2,
        top: (canvasData.height - height) / 2
      });
      setStyle(this.image, assign({
        width: imageData.width,
        height: imageData.height
      }, getTransforms(assign({
        translateX: imageData.left,
        translateY: imageData.top
      }, imageData))));

      if (changed) {
        this.output();
      }
    },
    initCropBox: function initCropBox() {
      var options = this.options,
          canvasData = this.canvasData;
      var aspectRatio = options.aspectRatio || options.initialAspectRatio;
      var autoCropArea = Number(options.autoCropArea) || 0.8;
      var cropBoxData = {
        width: canvasData.width,
        height: canvasData.height
      };

      if (aspectRatio) {
        if (canvasData.height * aspectRatio > canvasData.width) {
          cropBoxData.height = cropBoxData.width / aspectRatio;
        } else {
          cropBoxData.width = cropBoxData.height * aspectRatio;
        }
      }

      this.cropBoxData = cropBoxData;
      this.limitCropBox(true, true); // Initialize auto crop area

      cropBoxData.width = Math.min(Math.max(cropBoxData.width, cropBoxData.minWidth), cropBoxData.maxWidth);
      cropBoxData.height = Math.min(Math.max(cropBoxData.height, cropBoxData.minHeight), cropBoxData.maxHeight); // The width/height of auto crop area must large than "minWidth/Height"

      cropBoxData.width = Math.max(cropBoxData.minWidth, cropBoxData.width * autoCropArea);
      cropBoxData.height = Math.max(cropBoxData.minHeight, cropBoxData.height * autoCropArea);
      cropBoxData.left = canvasData.left + (canvasData.width - cropBoxData.width) / 2;
      cropBoxData.top = canvasData.top + (canvasData.height - cropBoxData.height) / 2;
      cropBoxData.oldLeft = cropBoxData.left;
      cropBoxData.oldTop = cropBoxData.top;
      this.initialCropBoxData = assign({}, cropBoxData);
    },
    limitCropBox: function limitCropBox(sizeLimited, positionLimited) {
      var options = this.options,
          containerData = this.containerData,
          canvasData = this.canvasData,
          cropBoxData = this.cropBoxData,
          limited = this.limited;
      var aspectRatio = options.aspectRatio;

      if (sizeLimited) {
        var minCropBoxWidth = Number(options.minCropBoxWidth) || 0;
        var minCropBoxHeight = Number(options.minCropBoxHeight) || 0;
        var maxCropBoxWidth = limited ? Math.min(containerData.width, canvasData.width, canvasData.width + canvasData.left, containerData.width - canvasData.left) : containerData.width;
        var maxCropBoxHeight = limited ? Math.min(containerData.height, canvasData.height, canvasData.height + canvasData.top, containerData.height - canvasData.top) : containerData.height; // The min/maxCropBoxWidth/Height must be less than container's width/height

        minCropBoxWidth = Math.min(minCropBoxWidth, containerData.width);
        minCropBoxHeight = Math.min(minCropBoxHeight, containerData.height);

        if (aspectRatio) {
          if (minCropBoxWidth && minCropBoxHeight) {
            if (minCropBoxHeight * aspectRatio > minCropBoxWidth) {
              minCropBoxHeight = minCropBoxWidth / aspectRatio;
            } else {
              minCropBoxWidth = minCropBoxHeight * aspectRatio;
            }
          } else if (minCropBoxWidth) {
            minCropBoxHeight = minCropBoxWidth / aspectRatio;
          } else if (minCropBoxHeight) {
            minCropBoxWidth = minCropBoxHeight * aspectRatio;
          }

          if (maxCropBoxHeight * aspectRatio > maxCropBoxWidth) {
            maxCropBoxHeight = maxCropBoxWidth / aspectRatio;
          } else {
            maxCropBoxWidth = maxCropBoxHeight * aspectRatio;
          }
        } // The minWidth/Height must be less than maxWidth/Height


        cropBoxData.minWidth = Math.min(minCropBoxWidth, maxCropBoxWidth);
        cropBoxData.minHeight = Math.min(minCropBoxHeight, maxCropBoxHeight);
        cropBoxData.maxWidth = maxCropBoxWidth;
        cropBoxData.maxHeight = maxCropBoxHeight;
      }

      if (positionLimited) {
        if (limited) {
          cropBoxData.minLeft = Math.max(0, canvasData.left);
          cropBoxData.minTop = Math.max(0, canvasData.top);
          cropBoxData.maxLeft = Math.min(containerData.width, canvasData.left + canvasData.width) - cropBoxData.width;
          cropBoxData.maxTop = Math.min(containerData.height, canvasData.top + canvasData.height) - cropBoxData.height;
        } else {
          cropBoxData.minLeft = 0;
          cropBoxData.minTop = 0;
          cropBoxData.maxLeft = containerData.width - cropBoxData.width;
          cropBoxData.maxTop = containerData.height - cropBoxData.height;
        }
      }
    },
    renderCropBox: function renderCropBox() {
      var options = this.options,
          containerData = this.containerData,
          cropBoxData = this.cropBoxData;

      if (cropBoxData.width > cropBoxData.maxWidth || cropBoxData.width < cropBoxData.minWidth) {
        cropBoxData.left = cropBoxData.oldLeft;
      }

      if (cropBoxData.height > cropBoxData.maxHeight || cropBoxData.height < cropBoxData.minHeight) {
        cropBoxData.top = cropBoxData.oldTop;
      }

      cropBoxData.width = Math.min(Math.max(cropBoxData.width, cropBoxData.minWidth), cropBoxData.maxWidth);
      cropBoxData.height = Math.min(Math.max(cropBoxData.height, cropBoxData.minHeight), cropBoxData.maxHeight);
      this.limitCropBox(false, true);
      cropBoxData.left = Math.min(Math.max(cropBoxData.left, cropBoxData.minLeft), cropBoxData.maxLeft);
      cropBoxData.top = Math.min(Math.max(cropBoxData.top, cropBoxData.minTop), cropBoxData.maxTop);
      cropBoxData.oldLeft = cropBoxData.left;
      cropBoxData.oldTop = cropBoxData.top;

      if (options.movable && options.cropBoxMovable) {
        // Turn to move the canvas when the crop box is equal to the container
        setData(this.face, DATA_ACTION, cropBoxData.width >= containerData.width && cropBoxData.height >= containerData.height ? ACTION_MOVE : ACTION_ALL);
      }

      setStyle(this.cropBox, assign({
        width: cropBoxData.width,
        height: cropBoxData.height
      }, getTransforms({
        translateX: cropBoxData.left,
        translateY: cropBoxData.top
      })));

      if (this.cropped && this.limited) {
        this.limitCanvas(true, true);
      }

      if (!this.disabled) {
        this.output();
      }
    },
    output: function output() {
      this.preview();
      dispatchEvent(this.element, EVENT_CROP, this.getData());
    }
  };

  var preview = {
    initPreview: function initPreview() {
      var element = this.element,
          crossOrigin = this.crossOrigin;
      var preview = this.options.preview;
      var url = crossOrigin ? this.crossOriginUrl : this.url;
      var alt = element.alt || 'The image to preview';
      var image = document.createElement('img');

      if (crossOrigin) {
        image.crossOrigin = crossOrigin;
      }

      image.src = url;
      image.alt = alt;
      this.viewBox.appendChild(image);
      this.viewBoxImage = image;

      if (!preview) {
        return;
      }

      var previews = preview;

      if (typeof preview === 'string') {
        previews = element.ownerDocument.querySelectorAll(preview);
      } else if (preview.querySelector) {
        previews = [preview];
      }

      this.previews = previews;
      forEach(previews, function (el) {
        var img = document.createElement('img'); // Save the original size for recover

        setData(el, DATA_PREVIEW, {
          width: el.offsetWidth,
          height: el.offsetHeight,
          html: el.innerHTML
        });

        if (crossOrigin) {
          img.crossOrigin = crossOrigin;
        }

        img.src = url;
        img.alt = alt;
        /**
         * Override img element styles
         * Add `display:block` to avoid margin top issue
         * Add `height:auto` to override `height` attribute on IE8
         * (Occur only when margin-top <= -height)
         */

        img.style.cssText = 'display:block;' + 'width:100%;' + 'height:auto;' + 'min-width:0!important;' + 'min-height:0!important;' + 'max-width:none!important;' + 'max-height:none!important;' + 'image-orientation:0deg!important;"';
        el.innerHTML = '';
        el.appendChild(img);
      });
    },
    resetPreview: function resetPreview() {
      forEach(this.previews, function (element) {
        var data = getData(element, DATA_PREVIEW);
        setStyle(element, {
          width: data.width,
          height: data.height
        });
        element.innerHTML = data.html;
        removeData(element, DATA_PREVIEW);
      });
    },
    preview: function preview() {
      var imageData = this.imageData,
          canvasData = this.canvasData,
          cropBoxData = this.cropBoxData;
      var cropBoxWidth = cropBoxData.width,
          cropBoxHeight = cropBoxData.height;
      var width = imageData.width,
          height = imageData.height;
      var left = cropBoxData.left - canvasData.left - imageData.left;
      var top = cropBoxData.top - canvasData.top - imageData.top;

      if (!this.cropped || this.disabled) {
        return;
      }

      setStyle(this.viewBoxImage, assign({
        width: width,
        height: height
      }, getTransforms(assign({
        translateX: -left,
        translateY: -top
      }, imageData))));
      forEach(this.previews, function (element) {
        var data = getData(element, DATA_PREVIEW);
        var originalWidth = data.width;
        var originalHeight = data.height;
        var newWidth = originalWidth;
        var newHeight = originalHeight;
        var ratio = 1;

        if (cropBoxWidth) {
          ratio = originalWidth / cropBoxWidth;
          newHeight = cropBoxHeight * ratio;
        }

        if (cropBoxHeight && newHeight > originalHeight) {
          ratio = originalHeight / cropBoxHeight;
          newWidth = cropBoxWidth * ratio;
          newHeight = originalHeight;
        }

        setStyle(element, {
          width: newWidth,
          height: newHeight
        });
        setStyle(element.getElementsByTagName('img')[0], assign({
          width: width * ratio,
          height: height * ratio
        }, getTransforms(assign({
          translateX: -left * ratio,
          translateY: -top * ratio
        }, imageData))));
      });
    }
  };

  var events = {
    bind: function bind() {
      var element = this.element,
          options = this.options,
          cropper = this.cropper;

      if (isFunction(options.cropstart)) {
        addListener(element, EVENT_CROP_START, options.cropstart);
      }

      if (isFunction(options.cropmove)) {
        addListener(element, EVENT_CROP_MOVE, options.cropmove);
      }

      if (isFunction(options.cropend)) {
        addListener(element, EVENT_CROP_END, options.cropend);
      }

      if (isFunction(options.crop)) {
        addListener(element, EVENT_CROP, options.crop);
      }

      if (isFunction(options.zoom)) {
        addListener(element, EVENT_ZOOM, options.zoom);
      }

      addListener(cropper, EVENT_POINTER_DOWN, this.onCropStart = this.cropStart.bind(this));

      if (options.zoomable && options.zoomOnWheel) {
        addListener(cropper, EVENT_WHEEL, this.onWheel = this.wheel.bind(this), {
          passive: false,
          capture: true
        });
      }

      if (options.toggleDragModeOnDblclick) {
        addListener(cropper, EVENT_DBLCLICK, this.onDblclick = this.dblclick.bind(this));
      }

      addListener(element.ownerDocument, EVENT_POINTER_MOVE, this.onCropMove = this.cropMove.bind(this));
      addListener(element.ownerDocument, EVENT_POINTER_UP, this.onCropEnd = this.cropEnd.bind(this));

      if (options.responsive) {
        addListener(window, EVENT_RESIZE, this.onResize = this.resize.bind(this));
      }
    },
    unbind: function unbind() {
      var element = this.element,
          options = this.options,
          cropper = this.cropper;

      if (isFunction(options.cropstart)) {
        removeListener(element, EVENT_CROP_START, options.cropstart);
      }

      if (isFunction(options.cropmove)) {
        removeListener(element, EVENT_CROP_MOVE, options.cropmove);
      }

      if (isFunction(options.cropend)) {
        removeListener(element, EVENT_CROP_END, options.cropend);
      }

      if (isFunction(options.crop)) {
        removeListener(element, EVENT_CROP, options.crop);
      }

      if (isFunction(options.zoom)) {
        removeListener(element, EVENT_ZOOM, options.zoom);
      }

      removeListener(cropper, EVENT_POINTER_DOWN, this.onCropStart);

      if (options.zoomable && options.zoomOnWheel) {
        removeListener(cropper, EVENT_WHEEL, this.onWheel, {
          passive: false,
          capture: true
        });
      }

      if (options.toggleDragModeOnDblclick) {
        removeListener(cropper, EVENT_DBLCLICK, this.onDblclick);
      }

      removeListener(element.ownerDocument, EVENT_POINTER_MOVE, this.onCropMove);
      removeListener(element.ownerDocument, EVENT_POINTER_UP, this.onCropEnd);

      if (options.responsive) {
        removeListener(window, EVENT_RESIZE, this.onResize);
      }
    }
  };

  var handlers = {
    resize: function resize() {
      if (this.disabled) {
        return;
      }

      var options = this.options,
          container = this.container,
          containerData = this.containerData;
      var ratioX = container.offsetWidth / containerData.width;
      var ratioY = container.offsetHeight / containerData.height;
      var ratio = Math.abs(ratioX - 1) > Math.abs(ratioY - 1) ? ratioX : ratioY; // Resize when width changed or height changed

      if (ratio !== 1) {
        var canvasData;
        var cropBoxData;

        if (options.restore) {
          canvasData = this.getCanvasData();
          cropBoxData = this.getCropBoxData();
        }

        this.render();

        if (options.restore) {
          this.setCanvasData(forEach(canvasData, function (n, i) {
            canvasData[i] = n * ratio;
          }));
          this.setCropBoxData(forEach(cropBoxData, function (n, i) {
            cropBoxData[i] = n * ratio;
          }));
        }
      }
    },
    dblclick: function dblclick() {
      if (this.disabled || this.options.dragMode === DRAG_MODE_NONE) {
        return;
      }

      this.setDragMode(hasClass(this.dragBox, CLASS_CROP) ? DRAG_MODE_MOVE : DRAG_MODE_CROP);
    },
    wheel: function wheel(event) {
      var _this = this;

      var ratio = Number(this.options.wheelZoomRatio) || 0.1;
      var delta = 1;

      if (this.disabled) {
        return;
      }

      event.preventDefault(); // Limit wheel speed to prevent zoom too fast (#21)

      if (this.wheeling) {
        return;
      }

      this.wheeling = true;
      setTimeout(function () {
        _this.wheeling = false;
      }, 50);

      if (event.deltaY) {
        delta = event.deltaY > 0 ? 1 : -1;
      } else if (event.wheelDelta) {
        delta = -event.wheelDelta / 120;
      } else if (event.detail) {
        delta = event.detail > 0 ? 1 : -1;
      }

      this.zoom(-delta * ratio, event);
    },
    cropStart: function cropStart(event) {
      var buttons = event.buttons,
          button = event.button;

      if (this.disabled // Handle mouse event and pointer event and ignore touch event
      || (event.type === 'mousedown' || event.type === 'pointerdown' && event.pointerType === 'mouse') && ( // No primary button (Usually the left button)
      isNumber(buttons) && buttons !== 1 || isNumber(button) && button !== 0 // Open context menu
      || event.ctrlKey)) {
        return;
      }

      var options = this.options,
          pointers = this.pointers;
      var action;

      if (event.changedTouches) {
        // Handle touch event
        forEach(event.changedTouches, function (touch) {
          pointers[touch.identifier] = getPointer(touch);
        });
      } else {
        // Handle mouse event and pointer event
        pointers[event.pointerId || 0] = getPointer(event);
      }

      if (Object.keys(pointers).length > 1 && options.zoomable && options.zoomOnTouch) {
        action = ACTION_ZOOM;
      } else {
        action = getData(event.target, DATA_ACTION);
      }

      if (!REGEXP_ACTIONS.test(action)) {
        return;
      }

      if (dispatchEvent(this.element, EVENT_CROP_START, {
        originalEvent: event,
        action: action
      }) === false) {
        return;
      } // This line is required for preventing page zooming in iOS browsers


      event.preventDefault();
      this.action = action;
      this.cropping = false;

      if (action === ACTION_CROP) {
        this.cropping = true;
        addClass(this.dragBox, CLASS_MODAL);
      }
    },
    cropMove: function cropMove(event) {
      var action = this.action;

      if (this.disabled || !action) {
        return;
      }

      var pointers = this.pointers;
      event.preventDefault();

      if (dispatchEvent(this.element, EVENT_CROP_MOVE, {
        originalEvent: event,
        action: action
      }) === false) {
        return;
      }

      if (event.changedTouches) {
        forEach(event.changedTouches, function (touch) {
          // The first parameter should not be undefined (#432)
          assign(pointers[touch.identifier] || {}, getPointer(touch, true));
        });
      } else {
        assign(pointers[event.pointerId || 0] || {}, getPointer(event, true));
      }

      this.change(event);
    },
    cropEnd: function cropEnd(event) {
      if (this.disabled) {
        return;
      }

      var action = this.action,
          pointers = this.pointers;

      if (event.changedTouches) {
        forEach(event.changedTouches, function (touch) {
          delete pointers[touch.identifier];
        });
      } else {
        delete pointers[event.pointerId || 0];
      }

      if (!action) {
        return;
      }

      event.preventDefault();

      if (!Object.keys(pointers).length) {
        this.action = '';
      }

      if (this.cropping) {
        this.cropping = false;
        toggleClass(this.dragBox, CLASS_MODAL, this.cropped && this.options.modal);
      }

      dispatchEvent(this.element, EVENT_CROP_END, {
        originalEvent: event,
        action: action
      });
    }
  };

  var change = {
    change: function change(event) {
      var options = this.options,
          canvasData = this.canvasData,
          containerData = this.containerData,
          cropBoxData = this.cropBoxData,
          pointers = this.pointers;
      var action = this.action;
      var aspectRatio = options.aspectRatio;
      var left = cropBoxData.left,
          top = cropBoxData.top,
          width = cropBoxData.width,
          height = cropBoxData.height;
      var right = left + width;
      var bottom = top + height;
      var minLeft = 0;
      var minTop = 0;
      var maxWidth = containerData.width;
      var maxHeight = containerData.height;
      var renderable = true;
      var offset; // Locking aspect ratio in "free mode" by holding shift key

      if (!aspectRatio && event.shiftKey) {
        aspectRatio = width && height ? width / height : 1;
      }

      if (this.limited) {
        minLeft = cropBoxData.minLeft;
        minTop = cropBoxData.minTop;
        maxWidth = minLeft + Math.min(containerData.width, canvasData.width, canvasData.left + canvasData.width);
        maxHeight = minTop + Math.min(containerData.height, canvasData.height, canvasData.top + canvasData.height);
      }

      var pointer = pointers[Object.keys(pointers)[0]];
      var range = {
        x: pointer.endX - pointer.startX,
        y: pointer.endY - pointer.startY
      };

      var check = function check(side) {
        switch (side) {
          case ACTION_EAST:
            if (right + range.x > maxWidth) {
              range.x = maxWidth - right;
            }

            break;

          case ACTION_WEST:
            if (left + range.x < minLeft) {
              range.x = minLeft - left;
            }

            break;

          case ACTION_NORTH:
            if (top + range.y < minTop) {
              range.y = minTop - top;
            }

            break;

          case ACTION_SOUTH:
            if (bottom + range.y > maxHeight) {
              range.y = maxHeight - bottom;
            }

            break;
        }
      };

      switch (action) {
        // Move crop box
        case ACTION_ALL:
          left += range.x;
          top += range.y;
          break;
        // Resize crop box

        case ACTION_EAST:
          if (range.x >= 0 && (right >= maxWidth || aspectRatio && (top <= minTop || bottom >= maxHeight))) {
            renderable = false;
            break;
          }

          check(ACTION_EAST);
          width += range.x;

          if (width < 0) {
            action = ACTION_WEST;
            width = -width;
            left -= width;
          }

          if (aspectRatio) {
            height = width / aspectRatio;
            top += (cropBoxData.height - height) / 2;
          }

          break;

        case ACTION_NORTH:
          if (range.y <= 0 && (top <= minTop || aspectRatio && (left <= minLeft || right >= maxWidth))) {
            renderable = false;
            break;
          }

          check(ACTION_NORTH);
          height -= range.y;
          top += range.y;

          if (height < 0) {
            action = ACTION_SOUTH;
            height = -height;
            top -= height;
          }

          if (aspectRatio) {
            width = height * aspectRatio;
            left += (cropBoxData.width - width) / 2;
          }

          break;

        case ACTION_WEST:
          if (range.x <= 0 && (left <= minLeft || aspectRatio && (top <= minTop || bottom >= maxHeight))) {
            renderable = false;
            break;
          }

          check(ACTION_WEST);
          width -= range.x;
          left += range.x;

          if (width < 0) {
            action = ACTION_EAST;
            width = -width;
            left -= width;
          }

          if (aspectRatio) {
            height = width / aspectRatio;
            top += (cropBoxData.height - height) / 2;
          }

          break;

        case ACTION_SOUTH:
          if (range.y >= 0 && (bottom >= maxHeight || aspectRatio && (left <= minLeft || right >= maxWidth))) {
            renderable = false;
            break;
          }

          check(ACTION_SOUTH);
          height += range.y;

          if (height < 0) {
            action = ACTION_NORTH;
            height = -height;
            top -= height;
          }

          if (aspectRatio) {
            width = height * aspectRatio;
            left += (cropBoxData.width - width) / 2;
          }

          break;

        case ACTION_NORTH_EAST:
          if (aspectRatio) {
            if (range.y <= 0 && (top <= minTop || right >= maxWidth)) {
              renderable = false;
              break;
            }

            check(ACTION_NORTH);
            height -= range.y;
            top += range.y;
            width = height * aspectRatio;
          } else {
            check(ACTION_NORTH);
            check(ACTION_EAST);

            if (range.x >= 0) {
              if (right < maxWidth) {
                width += range.x;
              } else if (range.y <= 0 && top <= minTop) {
                renderable = false;
              }
            } else {
              width += range.x;
            }

            if (range.y <= 0) {
              if (top > minTop) {
                height -= range.y;
                top += range.y;
              }
            } else {
              height -= range.y;
              top += range.y;
            }
          }

          if (width < 0 && height < 0) {
            action = ACTION_SOUTH_WEST;
            height = -height;
            width = -width;
            top -= height;
            left -= width;
          } else if (width < 0) {
            action = ACTION_NORTH_WEST;
            width = -width;
            left -= width;
          } else if (height < 0) {
            action = ACTION_SOUTH_EAST;
            height = -height;
            top -= height;
          }

          break;

        case ACTION_NORTH_WEST:
          if (aspectRatio) {
            if (range.y <= 0 && (top <= minTop || left <= minLeft)) {
              renderable = false;
              break;
            }

            check(ACTION_NORTH);
            height -= range.y;
            top += range.y;
            width = height * aspectRatio;
            left += cropBoxData.width - width;
          } else {
            check(ACTION_NORTH);
            check(ACTION_WEST);

            if (range.x <= 0) {
              if (left > minLeft) {
                width -= range.x;
                left += range.x;
              } else if (range.y <= 0 && top <= minTop) {
                renderable = false;
              }
            } else {
              width -= range.x;
              left += range.x;
            }

            if (range.y <= 0) {
              if (top > minTop) {
                height -= range.y;
                top += range.y;
              }
            } else {
              height -= range.y;
              top += range.y;
            }
          }

          if (width < 0 && height < 0) {
            action = ACTION_SOUTH_EAST;
            height = -height;
            width = -width;
            top -= height;
            left -= width;
          } else if (width < 0) {
            action = ACTION_NORTH_EAST;
            width = -width;
            left -= width;
          } else if (height < 0) {
            action = ACTION_SOUTH_WEST;
            height = -height;
            top -= height;
          }

          break;

        case ACTION_SOUTH_WEST:
          if (aspectRatio) {
            if (range.x <= 0 && (left <= minLeft || bottom >= maxHeight)) {
              renderable = false;
              break;
            }

            check(ACTION_WEST);
            width -= range.x;
            left += range.x;
            height = width / aspectRatio;
          } else {
            check(ACTION_SOUTH);
            check(ACTION_WEST);

            if (range.x <= 0) {
              if (left > minLeft) {
                width -= range.x;
                left += range.x;
              } else if (range.y >= 0 && bottom >= maxHeight) {
                renderable = false;
              }
            } else {
              width -= range.x;
              left += range.x;
            }

            if (range.y >= 0) {
              if (bottom < maxHeight) {
                height += range.y;
              }
            } else {
              height += range.y;
            }
          }

          if (width < 0 && height < 0) {
            action = ACTION_NORTH_EAST;
            height = -height;
            width = -width;
            top -= height;
            left -= width;
          } else if (width < 0) {
            action = ACTION_SOUTH_EAST;
            width = -width;
            left -= width;
          } else if (height < 0) {
            action = ACTION_NORTH_WEST;
            height = -height;
            top -= height;
          }

          break;

        case ACTION_SOUTH_EAST:
          if (aspectRatio) {
            if (range.x >= 0 && (right >= maxWidth || bottom >= maxHeight)) {
              renderable = false;
              break;
            }

            check(ACTION_EAST);
            width += range.x;
            height = width / aspectRatio;
          } else {
            check(ACTION_SOUTH);
            check(ACTION_EAST);

            if (range.x >= 0) {
              if (right < maxWidth) {
                width += range.x;
              } else if (range.y >= 0 && bottom >= maxHeight) {
                renderable = false;
              }
            } else {
              width += range.x;
            }

            if (range.y >= 0) {
              if (bottom < maxHeight) {
                height += range.y;
              }
            } else {
              height += range.y;
            }
          }

          if (width < 0 && height < 0) {
            action = ACTION_NORTH_WEST;
            height = -height;
            width = -width;
            top -= height;
            left -= width;
          } else if (width < 0) {
            action = ACTION_SOUTH_WEST;
            width = -width;
            left -= width;
          } else if (height < 0) {
            action = ACTION_NORTH_EAST;
            height = -height;
            top -= height;
          }

          break;
        // Move canvas

        case ACTION_MOVE:
          this.move(range.x, range.y);
          renderable = false;
          break;
        // Zoom canvas

        case ACTION_ZOOM:
          this.zoom(getMaxZoomRatio(pointers), event);
          renderable = false;
          break;
        // Create crop box

        case ACTION_CROP:
          if (!range.x || !range.y) {
            renderable = false;
            break;
          }

          offset = getOffset(this.cropper);
          left = pointer.startX - offset.left;
          top = pointer.startY - offset.top;
          width = cropBoxData.minWidth;
          height = cropBoxData.minHeight;

          if (range.x > 0) {
            action = range.y > 0 ? ACTION_SOUTH_EAST : ACTION_NORTH_EAST;
          } else if (range.x < 0) {
            left -= width;
            action = range.y > 0 ? ACTION_SOUTH_WEST : ACTION_NORTH_WEST;
          }

          if (range.y < 0) {
            top -= height;
          } // Show the crop box if is hidden


          if (!this.cropped) {
            removeClass(this.cropBox, CLASS_HIDDEN);
            this.cropped = true;

            if (this.limited) {
              this.limitCropBox(true, true);
            }
          }

          break;
      }

      if (renderable) {
        cropBoxData.width = width;
        cropBoxData.height = height;
        cropBoxData.left = left;
        cropBoxData.top = top;
        this.action = action;
        this.renderCropBox();
      } // Override


      forEach(pointers, function (p) {
        p.startX = p.endX;
        p.startY = p.endY;
      });
    }
  };

  var methods = {
    // Show the crop box manually
    crop: function crop() {
      if (this.ready && !this.cropped && !this.disabled) {
        this.cropped = true;
        this.limitCropBox(true, true);

        if (this.options.modal) {
          addClass(this.dragBox, CLASS_MODAL);
        }

        removeClass(this.cropBox, CLASS_HIDDEN);
        this.setCropBoxData(this.initialCropBoxData);
      }

      return this;
    },
    // Reset the image and crop box to their initial states
    reset: function reset() {
      if (this.ready && !this.disabled) {
        this.imageData = assign({}, this.initialImageData);
        this.canvasData = assign({}, this.initialCanvasData);
        this.cropBoxData = assign({}, this.initialCropBoxData);
        this.renderCanvas();

        if (this.cropped) {
          this.renderCropBox();
        }
      }

      return this;
    },
    // Clear the crop box
    clear: function clear() {
      if (this.cropped && !this.disabled) {
        assign(this.cropBoxData, {
          left: 0,
          top: 0,
          width: 0,
          height: 0
        });
        this.cropped = false;
        this.renderCropBox();
        this.limitCanvas(true, true); // Render canvas after crop box rendered

        this.renderCanvas();
        removeClass(this.dragBox, CLASS_MODAL);
        addClass(this.cropBox, CLASS_HIDDEN);
      }

      return this;
    },

    /**
     * Replace the image's src and rebuild the cropper
     * @param {string} url - The new URL.
     * @param {boolean} [hasSameSize] - Indicate if the new image has the same size as the old one.
     * @returns {Cropper} this
     */
    replace: function replace(url) {
      var hasSameSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (!this.disabled && url) {
        if (this.isImg) {
          this.element.src = url;
        }

        if (hasSameSize) {
          this.url = url;
          this.image.src = url;

          if (this.ready) {
            this.viewBoxImage.src = url;
            forEach(this.previews, function (element) {
              element.getElementsByTagName('img')[0].src = url;
            });
          }
        } else {
          if (this.isImg) {
            this.replaced = true;
          }

          this.options.data = null;
          this.uncreate();
          this.load(url);
        }
      }

      return this;
    },
    // Enable (unfreeze) the cropper
    enable: function enable() {
      if (this.ready && this.disabled) {
        this.disabled = false;
        removeClass(this.cropper, CLASS_DISABLED);
      }

      return this;
    },
    // Disable (freeze) the cropper
    disable: function disable() {
      if (this.ready && !this.disabled) {
        this.disabled = true;
        addClass(this.cropper, CLASS_DISABLED);
      }

      return this;
    },

    /**
     * Destroy the cropper and remove the instance from the image
     * @returns {Cropper} this
     */
    destroy: function destroy() {
      var element = this.element;

      if (!element[NAMESPACE]) {
        return this;
      }

      element[NAMESPACE] = undefined;

      if (this.isImg && this.replaced) {
        element.src = this.originalUrl;
      }

      this.uncreate();
      return this;
    },

    /**
     * Move the canvas with relative offsets
     * @param {number} offsetX - The relative offset distance on the x-axis.
     * @param {number} [offsetY=offsetX] - The relative offset distance on the y-axis.
     * @returns {Cropper} this
     */
    move: function move(offsetX) {
      var offsetY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : offsetX;
      var _this$canvasData = this.canvasData,
          left = _this$canvasData.left,
          top = _this$canvasData.top;
      return this.moveTo(isUndefined(offsetX) ? offsetX : left + Number(offsetX), isUndefined(offsetY) ? offsetY : top + Number(offsetY));
    },

    /**
     * Move the canvas to an absolute point
     * @param {number} x - The x-axis coordinate.
     * @param {number} [y=x] - The y-axis coordinate.
     * @returns {Cropper} this
     */
    moveTo: function moveTo(x) {
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;
      var canvasData = this.canvasData;
      var changed = false;
      x = Number(x);
      y = Number(y);

      if (this.ready && !this.disabled && this.options.movable) {
        if (isNumber(x)) {
          canvasData.left = x;
          changed = true;
        }

        if (isNumber(y)) {
          canvasData.top = y;
          changed = true;
        }

        if (changed) {
          this.renderCanvas(true);
        }
      }

      return this;
    },

    /**
     * Zoom the canvas with a relative ratio
     * @param {number} ratio - The target ratio.
     * @param {Event} _originalEvent - The original event if any.
     * @returns {Cropper} this
     */
    zoom: function zoom(ratio, _originalEvent) {
      var canvasData = this.canvasData;
      ratio = Number(ratio);

      if (ratio < 0) {
        ratio = 1 / (1 - ratio);
      } else {
        ratio = 1 + ratio;
      }

      return this.zoomTo(canvasData.width * ratio / canvasData.naturalWidth, null, _originalEvent);
    },

    /**
     * Zoom the canvas to an absolute ratio
     * @param {number} ratio - The target ratio.
     * @param {Object} pivot - The zoom pivot point coordinate.
     * @param {Event} _originalEvent - The original event if any.
     * @returns {Cropper} this
     */
    zoomTo: function zoomTo(ratio, pivot, _originalEvent) {
      var options = this.options,
          canvasData = this.canvasData;
      var width = canvasData.width,
          height = canvasData.height,
          naturalWidth = canvasData.naturalWidth,
          naturalHeight = canvasData.naturalHeight;
      ratio = Number(ratio);

      if (ratio >= 0 && this.ready && !this.disabled && options.zoomable) {
        var newWidth = naturalWidth * ratio;
        var newHeight = naturalHeight * ratio;

        if (dispatchEvent(this.element, EVENT_ZOOM, {
          ratio: ratio,
          oldRatio: width / naturalWidth,
          originalEvent: _originalEvent
        }) === false) {
          return this;
        }

        if (_originalEvent) {
          var pointers = this.pointers;
          var offset = getOffset(this.cropper);
          var center = pointers && Object.keys(pointers).length ? getPointersCenter(pointers) : {
            pageX: _originalEvent.pageX,
            pageY: _originalEvent.pageY
          }; // Zoom from the triggering point of the event

          canvasData.left -= (newWidth - width) * ((center.pageX - offset.left - canvasData.left) / width);
          canvasData.top -= (newHeight - height) * ((center.pageY - offset.top - canvasData.top) / height);
        } else if (isPlainObject(pivot) && isNumber(pivot.x) && isNumber(pivot.y)) {
          canvasData.left -= (newWidth - width) * ((pivot.x - canvasData.left) / width);
          canvasData.top -= (newHeight - height) * ((pivot.y - canvasData.top) / height);
        } else {
          // Zoom from the center of the canvas
          canvasData.left -= (newWidth - width) / 2;
          canvasData.top -= (newHeight - height) / 2;
        }

        canvasData.width = newWidth;
        canvasData.height = newHeight;
        this.renderCanvas(true);
      }

      return this;
    },

    /**
     * Rotate the canvas with a relative degree
     * @param {number} degree - The rotate degree.
     * @returns {Cropper} this
     */
    rotate: function rotate(degree) {
      return this.rotateTo((this.imageData.rotate || 0) + Number(degree));
    },

    /**
     * Rotate the canvas to an absolute degree
     * @param {number} degree - The rotate degree.
     * @returns {Cropper} this
     */
    rotateTo: function rotateTo(degree) {
      degree = Number(degree);

      if (isNumber(degree) && this.ready && !this.disabled && this.options.rotatable) {
        this.imageData.rotate = degree % 360;
        this.renderCanvas(true, true);
      }

      return this;
    },

    /**
     * Scale the image on the x-axis.
     * @param {number} scaleX - The scale ratio on the x-axis.
     * @returns {Cropper} this
     */
    scaleX: function scaleX(_scaleX) {
      var scaleY = this.imageData.scaleY;
      return this.scale(_scaleX, isNumber(scaleY) ? scaleY : 1);
    },

    /**
     * Scale the image on the y-axis.
     * @param {number} scaleY - The scale ratio on the y-axis.
     * @returns {Cropper} this
     */
    scaleY: function scaleY(_scaleY) {
      var scaleX = this.imageData.scaleX;
      return this.scale(isNumber(scaleX) ? scaleX : 1, _scaleY);
    },

    /**
     * Scale the image
     * @param {number} scaleX - The scale ratio on the x-axis.
     * @param {number} [scaleY=scaleX] - The scale ratio on the y-axis.
     * @returns {Cropper} this
     */
    scale: function scale(scaleX) {
      var scaleY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : scaleX;
      var imageData = this.imageData;
      var transformed = false;
      scaleX = Number(scaleX);
      scaleY = Number(scaleY);

      if (this.ready && !this.disabled && this.options.scalable) {
        if (isNumber(scaleX)) {
          imageData.scaleX = scaleX;
          transformed = true;
        }

        if (isNumber(scaleY)) {
          imageData.scaleY = scaleY;
          transformed = true;
        }

        if (transformed) {
          this.renderCanvas(true, true);
        }
      }

      return this;
    },

    /**
     * Get the cropped area position and size data (base on the original image)
     * @param {boolean} [rounded=false] - Indicate if round the data values or not.
     * @returns {Object} The result cropped data.
     */
    getData: function getData() {
      var rounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var options = this.options,
          imageData = this.imageData,
          canvasData = this.canvasData,
          cropBoxData = this.cropBoxData;
      var data;

      if (this.ready && this.cropped) {
        data = {
          x: cropBoxData.left - canvasData.left,
          y: cropBoxData.top - canvasData.top,
          width: cropBoxData.width,
          height: cropBoxData.height
        };
        var ratio = imageData.width / imageData.naturalWidth;
        forEach(data, function (n, i) {
          data[i] = n / ratio;
        });

        if (rounded) {
          // In case rounding off leads to extra 1px in right or bottom border
          // we should round the top-left corner and the dimension (#343).
          var bottom = Math.round(data.y + data.height);
          var right = Math.round(data.x + data.width);
          data.x = Math.round(data.x);
          data.y = Math.round(data.y);
          data.width = right - data.x;
          data.height = bottom - data.y;
        }
      } else {
        data = {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        };
      }

      if (options.rotatable) {
        data.rotate = imageData.rotate || 0;
      }

      if (options.scalable) {
        data.scaleX = imageData.scaleX || 1;
        data.scaleY = imageData.scaleY || 1;
      }

      return data;
    },

    /**
     * Set the cropped area position and size with new data
     * @param {Object} data - The new data.
     * @returns {Cropper} this
     */
    setData: function setData(data) {
      var options = this.options,
          imageData = this.imageData,
          canvasData = this.canvasData;
      var cropBoxData = {};

      if (this.ready && !this.disabled && isPlainObject(data)) {
        var transformed = false;

        if (options.rotatable) {
          if (isNumber(data.rotate) && data.rotate !== imageData.rotate) {
            imageData.rotate = data.rotate;
            transformed = true;
          }
        }

        if (options.scalable) {
          if (isNumber(data.scaleX) && data.scaleX !== imageData.scaleX) {
            imageData.scaleX = data.scaleX;
            transformed = true;
          }

          if (isNumber(data.scaleY) && data.scaleY !== imageData.scaleY) {
            imageData.scaleY = data.scaleY;
            transformed = true;
          }
        }

        if (transformed) {
          this.renderCanvas(true, true);
        }

        var ratio = imageData.width / imageData.naturalWidth;

        if (isNumber(data.x)) {
          cropBoxData.left = data.x * ratio + canvasData.left;
        }

        if (isNumber(data.y)) {
          cropBoxData.top = data.y * ratio + canvasData.top;
        }

        if (isNumber(data.width)) {
          cropBoxData.width = data.width * ratio;
        }

        if (isNumber(data.height)) {
          cropBoxData.height = data.height * ratio;
        }

        this.setCropBoxData(cropBoxData);
      }

      return this;
    },

    /**
     * Get the container size data.
     * @returns {Object} The result container data.
     */
    getContainerData: function getContainerData() {
      return this.ready ? assign({}, this.containerData) : {};
    },

    /**
     * Get the image position and size data.
     * @returns {Object} The result image data.
     */
    getImageData: function getImageData() {
      return this.sized ? assign({}, this.imageData) : {};
    },

    /**
     * Get the canvas position and size data.
     * @returns {Object} The result canvas data.
     */
    getCanvasData: function getCanvasData() {
      var canvasData = this.canvasData;
      var data = {};

      if (this.ready) {
        forEach(['left', 'top', 'width', 'height', 'naturalWidth', 'naturalHeight'], function (n) {
          data[n] = canvasData[n];
        });
      }

      return data;
    },

    /**
     * Set the canvas position and size with new data.
     * @param {Object} data - The new canvas data.
     * @returns {Cropper} this
     */
    setCanvasData: function setCanvasData(data) {
      var canvasData = this.canvasData;
      var aspectRatio = canvasData.aspectRatio;

      if (this.ready && !this.disabled && isPlainObject(data)) {
        if (isNumber(data.left)) {
          canvasData.left = data.left;
        }

        if (isNumber(data.top)) {
          canvasData.top = data.top;
        }

        if (isNumber(data.width)) {
          canvasData.width = data.width;
          canvasData.height = data.width / aspectRatio;
        } else if (isNumber(data.height)) {
          canvasData.height = data.height;
          canvasData.width = data.height * aspectRatio;
        }

        this.renderCanvas(true);
      }

      return this;
    },

    /**
     * Get the crop box position and size data.
     * @returns {Object} The result crop box data.
     */
    getCropBoxData: function getCropBoxData() {
      var cropBoxData = this.cropBoxData;
      var data;

      if (this.ready && this.cropped) {
        data = {
          left: cropBoxData.left,
          top: cropBoxData.top,
          width: cropBoxData.width,
          height: cropBoxData.height
        };
      }

      return data || {};
    },

    /**
     * Set the crop box position and size with new data.
     * @param {Object} data - The new crop box data.
     * @returns {Cropper} this
     */
    setCropBoxData: function setCropBoxData(data) {
      var cropBoxData = this.cropBoxData;
      var aspectRatio = this.options.aspectRatio;
      var widthChanged;
      var heightChanged;

      if (this.ready && this.cropped && !this.disabled && isPlainObject(data)) {
        if (isNumber(data.left)) {
          cropBoxData.left = data.left;
        }

        if (isNumber(data.top)) {
          cropBoxData.top = data.top;
        }

        if (isNumber(data.width) && data.width !== cropBoxData.width) {
          widthChanged = true;
          cropBoxData.width = data.width;
        }

        if (isNumber(data.height) && data.height !== cropBoxData.height) {
          heightChanged = true;
          cropBoxData.height = data.height;
        }

        if (aspectRatio) {
          if (widthChanged) {
            cropBoxData.height = cropBoxData.width / aspectRatio;
          } else if (heightChanged) {
            cropBoxData.width = cropBoxData.height * aspectRatio;
          }
        }

        this.renderCropBox();
      }

      return this;
    },

    /**
     * Get a canvas drawn the cropped image.
     * @param {Object} [options={}] - The config options.
     * @returns {HTMLCanvasElement} - The result canvas.
     */
    getCroppedCanvas: function getCroppedCanvas() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (!this.ready || !window.HTMLCanvasElement) {
        return null;
      }

      var canvasData = this.canvasData;
      var source = getSourceCanvas(this.image, this.imageData, canvasData, options); // Returns the source canvas if it is not cropped.

      if (!this.cropped) {
        return source;
      }

      var _this$getData = this.getData(),
          initialX = _this$getData.x,
          initialY = _this$getData.y,
          initialWidth = _this$getData.width,
          initialHeight = _this$getData.height;

      var ratio = source.width / Math.floor(canvasData.naturalWidth);

      if (ratio !== 1) {
        initialX *= ratio;
        initialY *= ratio;
        initialWidth *= ratio;
        initialHeight *= ratio;
      }

      var aspectRatio = initialWidth / initialHeight;
      var maxSizes = getAdjustedSizes({
        aspectRatio: aspectRatio,
        width: options.maxWidth || Infinity,
        height: options.maxHeight || Infinity
      });
      var minSizes = getAdjustedSizes({
        aspectRatio: aspectRatio,
        width: options.minWidth || 0,
        height: options.minHeight || 0
      }, 'cover');

      var _getAdjustedSizes = getAdjustedSizes({
        aspectRatio: aspectRatio,
        width: options.width || (ratio !== 1 ? source.width : initialWidth),
        height: options.height || (ratio !== 1 ? source.height : initialHeight)
      }),
          width = _getAdjustedSizes.width,
          height = _getAdjustedSizes.height;

      width = Math.min(maxSizes.width, Math.max(minSizes.width, width));
      height = Math.min(maxSizes.height, Math.max(minSizes.height, height));
      var canvas = document.createElement('canvas');
      var context = canvas.getContext('2d');
      canvas.width = normalizeDecimalNumber(width);
      canvas.height = normalizeDecimalNumber(height);
      context.fillStyle = options.fillColor || 'transparent';
      context.fillRect(0, 0, width, height);
      var _options$imageSmoothi = options.imageSmoothingEnabled,
          imageSmoothingEnabled = _options$imageSmoothi === void 0 ? true : _options$imageSmoothi,
          imageSmoothingQuality = options.imageSmoothingQuality;
      context.imageSmoothingEnabled = imageSmoothingEnabled;

      if (imageSmoothingQuality) {
        context.imageSmoothingQuality = imageSmoothingQuality;
      } // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D.drawImage


      var sourceWidth = source.width;
      var sourceHeight = source.height; // Source canvas parameters

      var srcX = initialX;
      var srcY = initialY;
      var srcWidth;
      var srcHeight; // Destination canvas parameters

      var dstX;
      var dstY;
      var dstWidth;
      var dstHeight;

      if (srcX <= -initialWidth || srcX > sourceWidth) {
        srcX = 0;
        srcWidth = 0;
        dstX = 0;
        dstWidth = 0;
      } else if (srcX <= 0) {
        dstX = -srcX;
        srcX = 0;
        srcWidth = Math.min(sourceWidth, initialWidth + srcX);
        dstWidth = srcWidth;
      } else if (srcX <= sourceWidth) {
        dstX = 0;
        srcWidth = Math.min(initialWidth, sourceWidth - srcX);
        dstWidth = srcWidth;
      }

      if (srcWidth <= 0 || srcY <= -initialHeight || srcY > sourceHeight) {
        srcY = 0;
        srcHeight = 0;
        dstY = 0;
        dstHeight = 0;
      } else if (srcY <= 0) {
        dstY = -srcY;
        srcY = 0;
        srcHeight = Math.min(sourceHeight, initialHeight + srcY);
        dstHeight = srcHeight;
      } else if (srcY <= sourceHeight) {
        dstY = 0;
        srcHeight = Math.min(initialHeight, sourceHeight - srcY);
        dstHeight = srcHeight;
      }

      var params = [srcX, srcY, srcWidth, srcHeight]; // Avoid "IndexSizeError"

      if (dstWidth > 0 && dstHeight > 0) {
        var scale = width / initialWidth;
        params.push(dstX * scale, dstY * scale, dstWidth * scale, dstHeight * scale);
      } // All the numerical parameters should be integer for `drawImage`
      // https://github.com/fengyuanchen/cropper/issues/476


      context.drawImage.apply(context, [source].concat(_toConsumableArray(params.map(function (param) {
        return Math.floor(normalizeDecimalNumber(param));
      }))));
      return canvas;
    },

    /**
     * Change the aspect ratio of the crop box.
     * @param {number} aspectRatio - The new aspect ratio.
     * @returns {Cropper} this
     */
    setAspectRatio: function setAspectRatio(aspectRatio) {
      var options = this.options;

      if (!this.disabled && !isUndefined(aspectRatio)) {
        // 0 -> NaN
        options.aspectRatio = Math.max(0, aspectRatio) || NaN;

        if (this.ready) {
          this.initCropBox();

          if (this.cropped) {
            this.renderCropBox();
          }
        }
      }

      return this;
    },

    /**
     * Change the drag mode.
     * @param {string} mode - The new drag mode.
     * @returns {Cropper} this
     */
    setDragMode: function setDragMode(mode) {
      var options = this.options,
          dragBox = this.dragBox,
          face = this.face;

      if (this.ready && !this.disabled) {
        var croppable = mode === DRAG_MODE_CROP;
        var movable = options.movable && mode === DRAG_MODE_MOVE;
        mode = croppable || movable ? mode : DRAG_MODE_NONE;
        options.dragMode = mode;
        setData(dragBox, DATA_ACTION, mode);
        toggleClass(dragBox, CLASS_CROP, croppable);
        toggleClass(dragBox, CLASS_MOVE, movable);

        if (!options.cropBoxMovable) {
          // Sync drag mode to crop box when it is not movable
          setData(face, DATA_ACTION, mode);
          toggleClass(face, CLASS_CROP, croppable);
          toggleClass(face, CLASS_MOVE, movable);
        }
      }

      return this;
    }
  };

  var AnotherCropper = WINDOW.Cropper;

  var Cropper = /*#__PURE__*/function () {
    /**
     * Create a new Cropper.
     * @param {Element} element - The target element for cropping.
     * @param {Object} [options={}] - The configuration options.
     */
    function Cropper(element) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, Cropper);

      if (!element || !REGEXP_TAG_NAME.test(element.tagName)) {
        throw new Error('The first argument is required and must be an <img> or <canvas> element.');
      }

      this.element = element;
      this.options = assign({}, DEFAULTS, isPlainObject(options) && options);
      this.cropped = false;
      this.disabled = false;
      this.pointers = {};
      this.ready = false;
      this.reloading = false;
      this.replaced = false;
      this.sized = false;
      this.sizing = false;
      this.init();
    }

    _createClass(Cropper, [{
      key: "init",
      value: function init() {
        var element = this.element;
        var tagName = element.tagName.toLowerCase();
        var url;

        if (element[NAMESPACE]) {
          return;
        }

        element[NAMESPACE] = this;

        if (tagName === 'img') {
          this.isImg = true; // e.g.: "img/picture.jpg"

          url = element.getAttribute('src') || '';
          this.originalUrl = url; // Stop when it's a blank image

          if (!url) {
            return;
          } // e.g.: "https://example.com/img/picture.jpg"


          url = element.src;
        } else if (tagName === 'canvas' && window.HTMLCanvasElement) {
          url = element.toDataURL();
        }

        this.load(url);
      }
    }, {
      key: "load",
      value: function load(url) {
        var _this = this;

        if (!url) {
          return;
        }

        this.url = url;
        this.imageData = {};
        var element = this.element,
            options = this.options;

        if (!options.rotatable && !options.scalable) {
          options.checkOrientation = false;
        } // Only IE10+ supports Typed Arrays


        if (!options.checkOrientation || !window.ArrayBuffer) {
          this.clone();
          return;
        } // Detect the mime type of the image directly if it is a Data URL


        if (REGEXP_DATA_URL.test(url)) {
          // Read ArrayBuffer from Data URL of JPEG images directly for better performance
          if (REGEXP_DATA_URL_JPEG.test(url)) {
            this.read(dataURLToArrayBuffer(url));
          } else {
            // Only a JPEG image may contains Exif Orientation information,
            // the rest types of Data URLs are not necessary to check orientation at all.
            this.clone();
          }

          return;
        } // 1. Detect the mime type of the image by a XMLHttpRequest.
        // 2. Load the image as ArrayBuffer for reading orientation if its a JPEG image.


        var xhr = new XMLHttpRequest();
        var clone = this.clone.bind(this);
        this.reloading = true;
        this.xhr = xhr; // 1. Cross origin requests are only supported for protocol schemes:
        // http, https, data, chrome, chrome-extension.
        // 2. Access to XMLHttpRequest from a Data URL will be blocked by CORS policy
        // in some browsers as IE11 and Safari.

        xhr.onabort = clone;
        xhr.onerror = clone;
        xhr.ontimeout = clone;

        xhr.onprogress = function () {
          // Abort the request directly if it not a JPEG image for better performance
          if (xhr.getResponseHeader('content-type') !== MIME_TYPE_JPEG) {
            xhr.abort();
          }
        };

        xhr.onload = function () {
          _this.read(xhr.response);
        };

        xhr.onloadend = function () {
          _this.reloading = false;
          _this.xhr = null;
        }; // Bust cache when there is a "crossOrigin" property to avoid browser cache error


        if (options.checkCrossOrigin && isCrossOriginURL(url) && element.crossOrigin) {
          url = addTimestamp(url);
        } // The third parameter is required for avoiding side-effect (#682)


        xhr.open('GET', url, true);
        xhr.responseType = 'arraybuffer';
        xhr.withCredentials = element.crossOrigin === 'use-credentials';
        xhr.send();
      }
    }, {
      key: "read",
      value: function read(arrayBuffer) {
        var options = this.options,
            imageData = this.imageData; // Reset the orientation value to its default value 1
        // as some iOS browsers will render image with its orientation

        var orientation = resetAndGetOrientation(arrayBuffer);
        var rotate = 0;
        var scaleX = 1;
        var scaleY = 1;

        if (orientation > 1) {
          // Generate a new URL which has the default orientation value
          this.url = arrayBufferToDataURL(arrayBuffer, MIME_TYPE_JPEG);

          var _parseOrientation = parseOrientation(orientation);

          rotate = _parseOrientation.rotate;
          scaleX = _parseOrientation.scaleX;
          scaleY = _parseOrientation.scaleY;
        }

        if (options.rotatable) {
          imageData.rotate = rotate;
        }

        if (options.scalable) {
          imageData.scaleX = scaleX;
          imageData.scaleY = scaleY;
        }

        this.clone();
      }
    }, {
      key: "clone",
      value: function clone() {
        var element = this.element,
            url = this.url;
        var crossOrigin = element.crossOrigin;
        var crossOriginUrl = url;

        if (this.options.checkCrossOrigin && isCrossOriginURL(url)) {
          if (!crossOrigin) {
            crossOrigin = 'anonymous';
          } // Bust cache when there is not a "crossOrigin" property (#519)


          crossOriginUrl = addTimestamp(url);
        }

        this.crossOrigin = crossOrigin;
        this.crossOriginUrl = crossOriginUrl;
        var image = document.createElement('img');

        if (crossOrigin) {
          image.crossOrigin = crossOrigin;
        }

        image.src = crossOriginUrl || url;
        image.alt = element.alt || 'The image to crop';
        this.image = image;
        image.onload = this.start.bind(this);
        image.onerror = this.stop.bind(this);
        addClass(image, CLASS_HIDE);
        element.parentNode.insertBefore(image, element.nextSibling);
      }
    }, {
      key: "start",
      value: function start() {
        var _this2 = this;

        var image = this.image;
        image.onload = null;
        image.onerror = null;
        this.sizing = true; // Match all browsers that use WebKit as the layout engine in iOS devices,
        // such as Safari for iOS, Chrome for iOS, and in-app browsers.

        var isIOSWebKit = WINDOW.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(WINDOW.navigator.userAgent);

        var done = function done(naturalWidth, naturalHeight) {
          assign(_this2.imageData, {
            naturalWidth: naturalWidth,
            naturalHeight: naturalHeight,
            aspectRatio: naturalWidth / naturalHeight
          });
          _this2.initialImageData = assign({}, _this2.imageData);
          _this2.sizing = false;
          _this2.sized = true;

          _this2.build();
        }; // Most modern browsers (excepts iOS WebKit)


        if (image.naturalWidth && !isIOSWebKit) {
          done(image.naturalWidth, image.naturalHeight);
          return;
        }

        var sizingImage = document.createElement('img');
        var body = document.body || document.documentElement;
        this.sizingImage = sizingImage;

        sizingImage.onload = function () {
          done(sizingImage.width, sizingImage.height);

          if (!isIOSWebKit) {
            body.removeChild(sizingImage);
          }
        };

        sizingImage.src = image.src; // iOS WebKit will convert the image automatically
        // with its orientation once append it into DOM (#279)

        if (!isIOSWebKit) {
          sizingImage.style.cssText = 'left:0;' + 'max-height:none!important;' + 'max-width:none!important;' + 'min-height:0!important;' + 'min-width:0!important;' + 'opacity:0;' + 'position:absolute;' + 'top:0;' + 'z-index:-1;';
          body.appendChild(sizingImage);
        }
      }
    }, {
      key: "stop",
      value: function stop() {
        var image = this.image;
        image.onload = null;
        image.onerror = null;
        image.parentNode.removeChild(image);
        this.image = null;
      }
    }, {
      key: "build",
      value: function build() {
        if (!this.sized || this.ready) {
          return;
        }

        var element = this.element,
            options = this.options,
            image = this.image; // Create cropper elements

        var container = element.parentNode;
        var template = document.createElement('div');
        template.innerHTML = TEMPLATE;
        var cropper = template.querySelector(".".concat(NAMESPACE, "-container"));
        var canvas = cropper.querySelector(".".concat(NAMESPACE, "-canvas"));
        var dragBox = cropper.querySelector(".".concat(NAMESPACE, "-drag-box"));
        var cropBox = cropper.querySelector(".".concat(NAMESPACE, "-crop-box"));
        var face = cropBox.querySelector(".".concat(NAMESPACE, "-face"));
        this.container = container;
        this.cropper = cropper;
        this.canvas = canvas;
        this.dragBox = dragBox;
        this.cropBox = cropBox;
        this.viewBox = cropper.querySelector(".".concat(NAMESPACE, "-view-box"));
        this.face = face;
        canvas.appendChild(image); // Hide the original image

        addClass(element, CLASS_HIDDEN); // Inserts the cropper after to the current image

        container.insertBefore(cropper, element.nextSibling); // Show the image if is hidden

        if (!this.isImg) {
          removeClass(image, CLASS_HIDE);
        }

        this.initPreview();
        this.bind();
        options.initialAspectRatio = Math.max(0, options.initialAspectRatio) || NaN;
        options.aspectRatio = Math.max(0, options.aspectRatio) || NaN;
        options.viewMode = Math.max(0, Math.min(3, Math.round(options.viewMode))) || 0;
        addClass(cropBox, CLASS_HIDDEN);

        if (!options.guides) {
          addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-dashed")), CLASS_HIDDEN);
        }

        if (!options.center) {
          addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-center")), CLASS_HIDDEN);
        }

        if (options.background) {
          addClass(cropper, "".concat(NAMESPACE, "-bg"));
        }

        if (!options.highlight) {
          addClass(face, CLASS_INVISIBLE);
        }

        if (options.cropBoxMovable) {
          addClass(face, CLASS_MOVE);
          setData(face, DATA_ACTION, ACTION_ALL);
        }

        if (!options.cropBoxResizable) {
          addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-line")), CLASS_HIDDEN);
          addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-point")), CLASS_HIDDEN);
        }

        this.render();
        this.ready = true;
        this.setDragMode(options.dragMode);

        if (options.autoCrop) {
          this.crop();
        }

        this.setData(options.data);

        if (isFunction(options.ready)) {
          addListener(element, EVENT_READY, options.ready, {
            once: true
          });
        }

        dispatchEvent(element, EVENT_READY);
      }
    }, {
      key: "unbuild",
      value: function unbuild() {
        if (!this.ready) {
          return;
        }

        this.ready = false;
        this.unbind();
        this.resetPreview();
        this.cropper.parentNode.removeChild(this.cropper);
        removeClass(this.element, CLASS_HIDDEN);
      }
    }, {
      key: "uncreate",
      value: function uncreate() {
        if (this.ready) {
          this.unbuild();
          this.ready = false;
          this.cropped = false;
        } else if (this.sizing) {
          this.sizingImage.onload = null;
          this.sizing = false;
          this.sized = false;
        } else if (this.reloading) {
          this.xhr.onabort = null;
          this.xhr.abort();
        } else if (this.image) {
          this.stop();
        }
      }
      /**
       * Get the no conflict cropper class.
       * @returns {Cropper} The cropper class.
       */

    }], [{
      key: "noConflict",
      value: function noConflict() {
        window.Cropper = AnotherCropper;
        return Cropper;
      }
      /**
       * Change the default options.
       * @param {Object} options - The new default options.
       */

    }, {
      key: "setDefaults",
      value: function setDefaults(options) {
        assign(DEFAULTS, isPlainObject(options) && options);
      }
    }]);

    return Cropper;
  }();

  assign(Cropper.prototype, render, preview, events, handlers, change, methods);

  return Cropper;

})));


/***/ }),

/***/ "de21":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_Loading_vue_vue_type_style_index_0_id_51a355a2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5623");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_Loading_vue_vue_type_style_index_0_id_51a355a2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_Loading_vue_vue_type_style_index_0_id_51a355a2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "e61e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_Picker_vue_vue_type_style_index_0_id_69fbbba3_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3e4b");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_Picker_vue_vue_type_style_index_0_id_69fbbba3_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_Picker_vue_vue_type_style_index_0_id_69fbbba3_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "ed74":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_Scanner_vue_vue_type_style_index_0_id_60580ea2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("72c5");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_Scanner_vue_vue_type_style_index_0_id_60580ea2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_Scanner_vue_vue_type_style_index_0_id_60580ea2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "fa49":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("7349");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("0b9245bc", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/App.vue?vue&type=template&id=29a66147

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Picker = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("Picker");

  const _component_Editor = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("Editor");

  return !$data.src ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_Picker, {
    key: 0,
    onPaste: _cache[0] || (_cache[0] = $event => $options.onPaste($event)),
    errorMsg: $data.errorMsg,
    "onFile:changed": $options.onChange
  }, null, 8, ["errorMsg", "onFile:changed"])) : (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_Editor, {
    key: 1,
    src: $data.src,
    apiUrl: $data.apiUrl
  }, null, 8, ["src", "apiUrl"]));
}
// CONCATENATED MODULE: ./src/App.vue?vue&type=template&id=29a66147

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/Picker.vue?vue&type=template&id=69fbbba3&scoped=true


const _withScopeId = n => (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["pushScopeId"])("data-v-69fbbba3"), n = n(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["popScopeId"])(), n);

const _hoisted_1 = {
  id: "main-box"
};
const _hoisted_2 = {
  id: "prepare-box"
};

const _hoisted_3 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" 粘贴或拖拽图片至此，或从本地图片中 ");

const _hoisted_4 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("label", {
  onclick: "document.querySelector('#image-file').click();"
}, "选取...", -1));

const _hoisted_5 = {
  key: 0,
  id: "error-box"
};
function Pickervue_type_template_id_69fbbba3_scoped_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", _hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_2, [_hoisted_3, _hoisted_4, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    type: "file",
    id: "image-file",
    accept: "image/*",
    title: "选择图片",
    onChange: _cache[0] || (_cache[0] = $event => _ctx.$emit('file:changed', $event.target))
  }, null, 32)]), $props.errorMsg ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", _hoisted_5, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.errorMsg), 1)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)]);
}
// CONCATENATED MODULE: ./src/components/Picker.vue?vue&type=template&id=69fbbba3&scoped=true

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/Picker.vue?vue&type=script&lang=js
/* harmony default export */ var Pickervue_type_script_lang_js = ({
  name: "Picker",
  props: {
    errorMsg: Error
  },
  emits: ["file:changed"]
});
// CONCATENATED MODULE: ./src/components/Picker.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/components/Picker.vue?vue&type=style&index=0&id=69fbbba3&scoped=true&lang=css
var Pickervue_type_style_index_0_id_69fbbba3_scoped_true_lang_css = __webpack_require__("e61e");

// EXTERNAL MODULE: ./node_modules/vue-loader-v16/dist/exportHelper.js
var exportHelper = __webpack_require__("6b0d");
var exportHelper_default = /*#__PURE__*/__webpack_require__.n(exportHelper);

// CONCATENATED MODULE: ./src/components/Picker.vue







const __exports__ = /*#__PURE__*/exportHelper_default()(Pickervue_type_script_lang_js, [['render',Pickervue_type_template_id_69fbbba3_scoped_true_render],['__scopeId',"data-v-69fbbba3"]])

/* harmony default export */ var Picker = (__exports__);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/Editor.vue?vue&type=template&id=968fb2d6&scoped=true


const Editorvue_type_template_id_968fb2d6_scoped_true_withScopeId = n => (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["pushScopeId"])("data-v-968fb2d6"), n = n(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["popScopeId"])(), n);

const Editorvue_type_template_id_968fb2d6_scoped_true_hoisted_1 = {
  id: "cropperjs-box"
};
const Editorvue_type_template_id_968fb2d6_scoped_true_hoisted_2 = ["src"];
function Editorvue_type_template_id_968fb2d6_scoped_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Loading = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("Loading");

  const _component_Previewer = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("Previewer");

  const _component_Scanner = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("Scanner");

  const _component_Toolbar = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("Toolbar");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Editorvue_type_template_id_968fb2d6_scoped_true_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("img", {
    id: "image",
    src: $props.src,
    alt: "an image",
    onError: _cache[0] || (_cache[0] = (...args) => $options.onError && $options.onError(...args))
  }, null, 40, Editorvue_type_template_id_968fb2d6_scoped_true_hoisted_2)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Loading, null, null, 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], $data.loading]]), $data.cropStatus.previewUrl ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_Previewer, {
    key: 0,
    previewUrl: $data.cropStatus.previewUrl
  }, null, 8, ["previewUrl"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Scanner, {
    croppedData: $data.croppedData,
    imageData: $data.imageData
  }, null, 8, ["croppedData", "imageData"]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Toolbar, {
    cropStatus: $data.cropStatus,
    onDelete: $options.onDelete,
    onClear: $options.onClear,
    onPreview: $options.onPreview,
    onExport: $options.onExport,
    onUpload: $options.onUpload,
    "onDrag:mode": $options.onDragMode,
    "onAspectratio:set": $options.onAspectRatioSet,
    onZoom: $options.onZoom,
    onRotate: $options.onRotate,
    onScale: $options.onScale,
    "onCropbox:move": $options.onCropBoxMove,
    "onCropbox:resize": $options.onCropBoxResize
  }, null, 8, ["cropStatus", "onDelete", "onClear", "onPreview", "onExport", "onUpload", "onDrag:mode", "onAspectratio:set", "onZoom", "onRotate", "onScale", "onCropbox:move", "onCropbox:resize"])], 64);
}
// CONCATENATED MODULE: ./src/components/Editor.vue?vue&type=template&id=968fb2d6&scoped=true

// EXTERNAL MODULE: ./node_modules/cropperjs/dist/cropper.js
var dist_cropper = __webpack_require__("bab4");
var cropper_default = /*#__PURE__*/__webpack_require__.n(dist_cropper);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/Loading.vue?vue&type=template&id=51a355a2&scoped=true


const Loadingvue_type_template_id_51a355a2_scoped_true_withScopeId = n => (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["pushScopeId"])("data-v-51a355a2"), n = n(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["popScopeId"])(), n);

const Loadingvue_type_template_id_51a355a2_scoped_true_hoisted_1 = {
  class: "outer"
};

const Loadingvue_type_template_id_51a355a2_scoped_true_hoisted_2 = /*#__PURE__*/Loadingvue_type_template_id_51a355a2_scoped_true_withScopeId(() => /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
  class: "loading"
}, [/*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", null, "Loading")], -1));

const Loadingvue_type_template_id_51a355a2_scoped_true_hoisted_3 = [Loadingvue_type_template_id_51a355a2_scoped_true_hoisted_2];
function Loadingvue_type_template_id_51a355a2_scoped_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", Loadingvue_type_template_id_51a355a2_scoped_true_hoisted_1, Loadingvue_type_template_id_51a355a2_scoped_true_hoisted_3);
}
// CONCATENATED MODULE: ./src/components/Loading.vue?vue&type=template&id=51a355a2&scoped=true

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/Loading.vue?vue&type=script&lang=js
/* harmony default export */ var Loadingvue_type_script_lang_js = ({
  name: "Loading"
});
// CONCATENATED MODULE: ./src/components/Loading.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/components/Loading.vue?vue&type=style&index=0&id=51a355a2&scoped=true&lang=css
var Loadingvue_type_style_index_0_id_51a355a2_scoped_true_lang_css = __webpack_require__("de21");

// CONCATENATED MODULE: ./src/components/Loading.vue







const Loading_exports_ = /*#__PURE__*/exportHelper_default()(Loadingvue_type_script_lang_js, [['render',Loadingvue_type_template_id_51a355a2_scoped_true_render],['__scopeId',"data-v-51a355a2"]])

/* harmony default export */ var Loading = (Loading_exports_);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/Previewer.vue?vue&type=template&id=85651772&scoped=true


const Previewervue_type_template_id_85651772_scoped_true_withScopeId = n => (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["pushScopeId"])("data-v-85651772"), n = n(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["popScopeId"])(), n);

const Previewervue_type_template_id_85651772_scoped_true_hoisted_1 = {
  class: "preview-box"
};
const Previewervue_type_template_id_85651772_scoped_true_hoisted_2 = {
  id: "previewer"
};
const Previewervue_type_template_id_85651772_scoped_true_hoisted_3 = ["src"];
function Previewervue_type_template_id_85651772_scoped_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", Previewervue_type_template_id_85651772_scoped_true_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Previewervue_type_template_id_85651772_scoped_true_hoisted_2, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("img", {
    src: $props.previewUrl,
    alt: "预览"
  }, null, 8, Previewervue_type_template_id_85651772_scoped_true_hoisted_3)])]);
}
// CONCATENATED MODULE: ./src/components/Previewer.vue?vue&type=template&id=85651772&scoped=true

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/Previewer.vue?vue&type=script&lang=js
/* harmony default export */ var Previewervue_type_script_lang_js = ({
  name: "Previewer",
  props: {
    previewUrl: String
  }
});
// CONCATENATED MODULE: ./src/components/Previewer.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/components/Previewer.vue?vue&type=style&index=0&id=85651772&scoped=true&lang=css
var Previewervue_type_style_index_0_id_85651772_scoped_true_lang_css = __webpack_require__("fef0");

// CONCATENATED MODULE: ./src/components/Previewer.vue







const Previewer_exports_ = /*#__PURE__*/exportHelper_default()(Previewervue_type_script_lang_js, [['render',Previewervue_type_template_id_85651772_scoped_true_render],['__scopeId',"data-v-85651772"]])

/* harmony default export */ var Previewer = (Previewer_exports_);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/Scanner.vue?vue&type=template&id=60580ea2&scoped=true


const Scannervue_type_template_id_60580ea2_scoped_true_withScopeId = n => (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["pushScopeId"])("data-v-60580ea2"), n = n(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["popScopeId"])(), n);

const Scannervue_type_template_id_60580ea2_scoped_true_hoisted_1 = {
  key: 0,
  id: "image-data"
};

const Scannervue_type_template_id_60580ea2_scoped_true_hoisted_2 = /*#__PURE__*/Scannervue_type_template_id_60580ea2_scoped_true_withScopeId(() => /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("label", null, "About Image", -1));

const Scannervue_type_template_id_60580ea2_scoped_true_hoisted_3 = {
  key: 1,
  id: "cropped-data"
};

const Scannervue_type_template_id_60580ea2_scoped_true_hoisted_4 = /*#__PURE__*/Scannervue_type_template_id_60580ea2_scoped_true_withScopeId(() => /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("label", null, "Cropped Data", -1));

function Scannervue_type_template_id_60580ea2_scoped_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, [$props.imageData ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", Scannervue_type_template_id_60580ea2_scoped_true_hoisted_1, [Scannervue_type_template_id_60580ea2_scoped_true_hoisted_2, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("ul", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("li", null, "W, H: " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.imageData.naturalWidth) + ", " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.imageData.naturalHeight), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("li", null, "AR: " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.imageData.aspectRatio.toFixed(3)), 1)])])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), $props.croppedData ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", Scannervue_type_template_id_60580ea2_scoped_true_hoisted_3, [Scannervue_type_template_id_60580ea2_scoped_true_hoisted_4, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("ul", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("li", null, "x, y: " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.croppedData.x) + ", " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.croppedData.y), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("li", null, "W, H: " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.croppedData.width) + ", " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.croppedData.height), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("li", null, "R: " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.croppedData.rotate), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("li", null, "SX, SY: " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.croppedData.scaleX) + ", " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.croppedData.scaleY), 1)])])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)], 64);
}
// CONCATENATED MODULE: ./src/components/Scanner.vue?vue&type=template&id=60580ea2&scoped=true

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/Scanner.vue?vue&type=script&lang=js
/* harmony default export */ var Scannervue_type_script_lang_js = ({
  name: "Scanner",
  props: {
    imageData: Object,
    croppedData: Object
  }
});
// CONCATENATED MODULE: ./src/components/Scanner.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/components/Scanner.vue?vue&type=style&index=0&id=60580ea2&scoped=true&lang=css
var Scannervue_type_style_index_0_id_60580ea2_scoped_true_lang_css = __webpack_require__("ed74");

// CONCATENATED MODULE: ./src/components/Scanner.vue







const Scanner_exports_ = /*#__PURE__*/exportHelper_default()(Scannervue_type_script_lang_js, [['render',Scannervue_type_template_id_60580ea2_scoped_true_render],['__scopeId',"data-v-60580ea2"]])

/* harmony default export */ var Scanner = (Scanner_exports_);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/Toolbar.vue?vue&type=template&id=885c4430&scoped=true


const Toolbarvue_type_template_id_885c4430_scoped_true_withScopeId = n => (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["pushScopeId"])("data-v-885c4430"), n = n(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["popScopeId"])(), n);

const Toolbarvue_type_template_id_885c4430_scoped_true_hoisted_1 = {
  class: "toolbar top"
};
const Toolbarvue_type_template_id_885c4430_scoped_true_hoisted_2 = {
  class: "toolbar middle"
};

const Toolbarvue_type_template_id_885c4430_scoped_true_hoisted_3 = /*#__PURE__*/Toolbarvue_type_template_id_885c4430_scoped_true_withScopeId(() => /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", null, null, -1));

const Toolbarvue_type_template_id_885c4430_scoped_true_hoisted_4 = /*#__PURE__*/Toolbarvue_type_template_id_885c4430_scoped_true_withScopeId(() => /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", null, null, -1));

const Toolbarvue_type_template_id_885c4430_scoped_true_hoisted_5 = /*#__PURE__*/Toolbarvue_type_template_id_885c4430_scoped_true_withScopeId(() => /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", null, null, -1));

const _hoisted_6 = /*#__PURE__*/Toolbarvue_type_template_id_885c4430_scoped_true_withScopeId(() => /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", null, null, -1));

const _hoisted_7 = /*#__PURE__*/Toolbarvue_type_template_id_885c4430_scoped_true_withScopeId(() => /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", null, null, -1));

const _hoisted_8 = /*#__PURE__*/Toolbarvue_type_template_id_885c4430_scoped_true_withScopeId(() => /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", null, null, -1));

const _hoisted_9 = /*#__PURE__*/Toolbarvue_type_template_id_885c4430_scoped_true_withScopeId(() => /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", null, null, -1));

const _hoisted_10 = /*#__PURE__*/Toolbarvue_type_template_id_885c4430_scoped_true_withScopeId(() => /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", null, null, -1));

const _hoisted_11 = /*#__PURE__*/Toolbarvue_type_template_id_885c4430_scoped_true_withScopeId(() => /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", null, null, -1));

const _hoisted_12 = /*#__PURE__*/Toolbarvue_type_template_id_885c4430_scoped_true_withScopeId(() => /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", null, null, -1));

const _hoisted_13 = /*#__PURE__*/Toolbarvue_type_template_id_885c4430_scoped_true_withScopeId(() => /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", null, null, -1));

const _hoisted_14 = /*#__PURE__*/Toolbarvue_type_template_id_885c4430_scoped_true_withScopeId(() => /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", null, null, -1));

const _hoisted_15 = /*#__PURE__*/Toolbarvue_type_template_id_885c4430_scoped_true_withScopeId(() => /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", null, null, -1));

const _hoisted_16 = /*#__PURE__*/Toolbarvue_type_template_id_885c4430_scoped_true_withScopeId(() => /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", null, null, -1));

const _hoisted_17 = /*#__PURE__*/Toolbarvue_type_template_id_885c4430_scoped_true_withScopeId(() => /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", null, null, -1));

const _hoisted_18 = /*#__PURE__*/Toolbarvue_type_template_id_885c4430_scoped_true_withScopeId(() => /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", null, null, -1));

const _hoisted_19 = {
  class: "toolbar bottom"
};
const _hoisted_20 = {
  class: "toolbar ruler"
};
function Toolbarvue_type_template_id_885c4430_scoped_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Toolbarvue_type_template_id_885c4430_scoped_true_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("i", {
    title: "删除",
    onClick: _cache[0] || (_cache[0] = $event => _ctx.$emit('delete')),
    class: "ri-xl ri-delete-bin-line"
  }), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("i", {
    title: "撤销",
    onClick: _cache[1] || (_cache[1] = $event => _ctx.$emit('clear')),
    class: "ri-xl ri-arrow-go-back-line"
  }), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("i", {
    title: "预览",
    onClick: _cache[2] || (_cache[2] = $event => _ctx.$emit('preview')),
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(`ri-xl ri-eye-${!$props.cropStatus.previewUrl ? '' : 'close-'}line`)
  }, null, 2), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("i", {
    title: "导出",
    onClick: _cache[3] || (_cache[3] = $event => _ctx.$emit('export')),
    class: "ri-xl ri-download-2-line"
  }), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("i", {
    title: "上载",
    onClick: _cache[4] || (_cache[4] = $event => _ctx.$emit('upload')),
    class: "ri-xl ri-upload-2-line"
  })], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], !$props.cropStatus.cropping]]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Toolbarvue_type_template_id_885c4430_scoped_true_hoisted_2, [Toolbarvue_type_template_id_885c4430_scoped_true_hoisted_3, Toolbarvue_type_template_id_885c4430_scoped_true_hoisted_4, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("i", {
    title: "轻微上扩",
    class: "ri-xl ri-arrow-up-line",
    onClick: _cache[5] || (_cache[5] = $event => _ctx.$emit('cropbox:resize', 'vertical', 0 - $data.span, $data.span))
  }), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("i", {
    title: "轻微下裁",
    class: "ri-xl ri-arrow-down-line",
    onClick: _cache[6] || (_cache[6] = $event => _ctx.$emit('cropbox:resize', 'vertical', $data.span, 0 - $data.span))
  })]), Toolbarvue_type_template_id_885c4430_scoped_true_hoisted_5, _hoisted_6, _hoisted_7, _hoisted_8, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("i", {
    title: "轻微上移",
    class: "ri-xl ri-arrow-up-circle-line",
    onClick: _cache[7] || (_cache[7] = $event => _ctx.$emit('cropbox:move', 0, 0 - $data.span))
  })]), _hoisted_9, _hoisted_10, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("i", {
    title: "轻微左扩",
    class: "ri-xl ri-arrow-left-line",
    onClick: _cache[8] || (_cache[8] = $event => _ctx.$emit('cropbox:resize', 'horizontal', 0 - $data.span, $data.span))
  }), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("i", {
    title: "轻微右裁",
    class: "ri-xl ri-arrow-right-line",
    onClick: _cache[9] || (_cache[9] = $event => _ctx.$emit('cropbox:resize', 'horizontal', $data.span, 0 - $data.span))
  })]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("i", {
    title: "轻微左移",
    class: "ri-xl ri-arrow-left-circle-line",
    onClick: _cache[10] || (_cache[10] = $event => _ctx.$emit('cropbox:move', 0 - $data.span, 0))
  })]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("i", {
    title: "轻微左旋",
    class: "ri-xl ri-anticlockwise-2-line",
    onClick: _cache[11] || (_cache[11] = $event => _ctx.$emit('rotate', 0 - $data.span))
  }), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("i", {
    title: "轻微右旋",
    class: "ri-xl ri-clockwise-2-line",
    onClick: _cache[12] || (_cache[12] = $event => _ctx.$emit('rotate', $data.span))
  })]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("i", {
    title: "轻微右移",
    class: "ri-xl ri-arrow-right-circle-line",
    onClick: _cache[13] || (_cache[13] = $event => _ctx.$emit('cropbox:move', $data.span, 0))
  })]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("i", {
    title: "轻微左裁",
    class: "ri-xl ri-arrow-left-line",
    onClick: _cache[14] || (_cache[14] = $event => _ctx.$emit('cropbox:resize', 'horizontal', 0, 0 - $data.span))
  }), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("i", {
    title: "轻微右扩",
    class: "ri-xl ri-arrow-right-line",
    onClick: _cache[15] || (_cache[15] = $event => _ctx.$emit('cropbox:resize', 'horizontal', 0, $data.span))
  })]), _hoisted_11, _hoisted_12, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("i", {
    title: "轻微下移",
    class: "ri-xl ri-arrow-down-circle-line",
    onClick: _cache[16] || (_cache[16] = $event => _ctx.$emit('cropbox:move', 0, $data.span))
  })]), _hoisted_13, _hoisted_14, _hoisted_15, _hoisted_16, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("i", {
    title: "轻微上裁",
    class: "ri-xl ri-arrow-up-line",
    onClick: _cache[17] || (_cache[17] = $event => _ctx.$emit('cropbox:resize', 'vertical', 0, 0 - $data.span))
  }), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("i", {
    title: "轻微下扩",
    class: "ri-xl ri-arrow-down-line",
    onClick: _cache[18] || (_cache[18] = $event => _ctx.$emit('cropbox:resize', 'vertical', 0, $data.span))
  })]), _hoisted_17, _hoisted_18], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], !$props.cropStatus.cropping && $data.more]]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_19, [$props.cropStatus.dragMode != 'move' ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("i", {
    key: 0,
    title: "移动",
    onClick: _cache[19] || (_cache[19] = $event => _ctx.$emit('drag:mode', 'move')),
    class: "ri-xl ri-drag-move-2-line"
  })) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), $props.cropStatus.dragMode != 'crop' ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("i", {
    key: 1,
    title: "裁剪",
    onClick: _cache[20] || (_cache[20] = $event => _ctx.$emit('drag:mode', 'crop')),
    class: "ri-xl ri-crop-line"
  })) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("i", {
    title: "方形",
    onClick: _cache[21] || (_cache[21] = $event => _ctx.$emit('aspectratio:set', ($data.square = !$data.square) ? 1 : NaN)),
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([{
      active: $data.square
    }, "ri-xl ri-shape-2-line"])
  }, null, 2), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("i", {
    title: "放大",
    onClick: _cache[22] || (_cache[22] = $event => _ctx.$emit('zoom', 0.1)),
    class: "ri-xl ri-zoom-in-line"
  }), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("i", {
    title: "缩小",
    onClick: _cache[23] || (_cache[23] = $event => _ctx.$emit('zoom', -0.1)),
    class: "ri-xl ri-zoom-out-line"
  }), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("i", {
    title: "左旋",
    onClick: _cache[24] || (_cache[24] = $event => _ctx.$emit('rotate', -45)),
    class: "ri-xl ri-anticlockwise-line"
  }), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("i", {
    title: "右旋",
    onClick: _cache[25] || (_cache[25] = $event => _ctx.$emit('rotate', 45)),
    class: "ri-xl ri-clockwise-line"
  }), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("i", {
    title: "倒置",
    onClick: _cache[26] || (_cache[26] = $event => _ctx.$emit('scale', 'x')),
    class: "ri-xl ri-arrow-left-right-line"
  }), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("i", {
    title: "翻转",
    onClick: _cache[27] || (_cache[27] = $event => _ctx.$emit('scale', 'y')),
    class: "ri-xl ri-arrow-up-down-line"
  }), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("i", {
    title: "更多",
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([{
      active: $data.more
    }, "ri-xl ri-tools-line"]),
    onClick: _cache[28] || (_cache[28] = $event => $data.more = !$data.more)
  }, null, 2), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("i", {
    title: "对比",
    class: "ri-xl ri-contrast-drop-line",
    onClick: _cache[29] || (_cache[29] = (...args) => $options.setContrast && $options.setContrast(...args))
  })], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], !$props.cropStatus.cropping]]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_20, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("i", {
    class: "ri-xl ri-ruler-line",
    title: "标尺",
    onClick: _cache[30] || (_cache[30] = (...args) => $options.changeSpan && $options.changeSpan(...args))
  }, " x " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($data.span), 1)], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], !$props.cropStatus.cropping && $data.more]])], 64);
}
// CONCATENATED MODULE: ./src/components/Toolbar.vue?vue&type=template&id=885c4430&scoped=true

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/Toolbar.vue?vue&type=script&lang=js
/* harmony default export */ var Toolbarvue_type_script_lang_js = ({
  name: "Toolbar",
  props: {
    cropStatus: {
      type: Object,
      default: () => {
        return {
          cropping: false,
          dragMode: "move",
          previewUrl: null
        };
      }
    }
  },
  emits: ["delete", "clear", "preview", "export", "upload", "drag:mode", "zoom", "rotate", "scale", "aspectratio:set", "cropbox:move", "cropbox:resize"],

  data() {
    return {
      square: false,
      more: false,
      span: 1,
      contrast: false
    };
  },

  methods: {
    changeSpan() {
      if (this.span === 1) {
        this.span = 5;
      } else if (this.span === 5) {
        this.span = 10;
      } else {
        this.span = 1;
      }
    },

    // 调整按钮图标背景，增加对比度
    setContrast() {
      this.contrast = !this.contrast;
      let bg = this.contrast ? 'rgb(36 32 36)' : '';
      document.querySelectorAll('i').forEach(i => {
        i.style.background = bg;
      });
    }

  }
});
// CONCATENATED MODULE: ./src/components/Toolbar.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/components/Toolbar.vue?vue&type=style&index=0&id=885c4430&scoped=true&lang=css
var Toolbarvue_type_style_index_0_id_885c4430_scoped_true_lang_css = __webpack_require__("3af8");

// CONCATENATED MODULE: ./src/components/Toolbar.vue







const Toolbar_exports_ = /*#__PURE__*/exportHelper_default()(Toolbarvue_type_script_lang_js, [['render',Toolbarvue_type_template_id_885c4430_scoped_true_render],['__scopeId',"data-v-885c4430"]])

/* harmony default export */ var Toolbar = (Toolbar_exports_);
// EXTERNAL MODULE: ./node_modules/cropperjs/dist/cropper.min.css
var cropper_min = __webpack_require__("4604");

// EXTERNAL MODULE: ./node_modules/remixicon/fonts/remixicon.css
var remixicon = __webpack_require__("ab05");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/Editor.vue?vue&type=script&lang=js







cropper_default.a.setDefaults({
  autoCrop: false,
  viewMode: 2,
  background: false,
  dragMode: "move"
});
/* harmony default export */ var Editorvue_type_script_lang_js = ({
  name: "Editor",
  props: {
    src: String,
    apiUrl: String,

    /*
     * 裁剪方式：
     * server - 服务端裁剪，上传起点位置、宽高、旋转、缩放等参数即可；
     * js - 页面裁剪，上传裁剪好的图片本身（Blob）
     */
    cropType: {
      type: String,
      default: 'Server'
    }
  },
  components: {
    Loading: Loading,
    Previewer: Previewer,
    Scanner: Scanner,
    Toolbar: Toolbar
  },

  data() {
    return {
      loading: true,
      cropper: null,
      imageData: null,
      croppedData: null,
      cropStatus: {
        cropping: false,
        dragMode: "move",
        previewUrl: null
      }
    };
  },

  mounted() {
    const image = document.getElementById("image");
    let this_ = this;
    let cropper = this.cropper = new cropper_default.a(image, {
      ready() {
        this_.imageData = cropper.getImageData();
        this_.loading = false;
        cropper.crop();
      },

      crop() {
        this_.croppedData = cropper.getData(true);
      },

      cropmove() {
        this_.cropStatus.cropping = true;
      },

      cropend() {
        this_.cropStatus.cropping = false;
      }

    });
  },

  methods: {
    onError() {
      this.loading = false;
      this.cropper.destroy();
      this.$parent.error(new Error("图片资源错误或加载失败: " + this.src));
    },

    onDelete() {
      if (this.cropper) {
        this.cropper.destroy();
      }

      this.$parent.delete(); // 到此，cropper 部分不被渲染，其中的预览也就不存在了，无需手动关闭
      // this.closePreview();
    },

    onClear() {
      this.cropper.clear();
      this.closePreview();
    },

    closePreview() {
      // 如果预览已打开，关闭它
      if (this.cropStatus.previewUrl) {
        this.cropStatus.previewUrl = null;
      }
    },

    onPreview() {
      // 切换预览
      if (this.cropStatus.previewUrl) {
        this.cropStatus.previewUrl = null;
      } else {
        let canvas = this.cropper.getCroppedCanvas({
          imageSmoothingEnabled: true,
          imageSmoothingQuality: "high"
        });
        this.cropStatus.previewUrl = canvas.toDataURL();
      }
    },

    onExport() {
      let dataUrl = this.cropper.getCroppedCanvas({
        imageSmoothingEnabled: true,
        imageSmoothingQuality: "high"
      }).toDataURL();
      let a = document.createElement("a");
      a.download = "cropped";
      a.href = dataUrl;
      a.click();
    },

    onUpload() {
      console.log(this.cropType);
      console.log(this.croppedData);
      console.log(this.apiUrl);

      if (this.apiUrl) {
        console.log('可上传');

        if (this.cropType.toLowerCase() == 'server') {
          console.log('服务端裁剪');
        } else {
          console.log('页面裁剪');
        }
      }
    },

    onDragMode(mode) {
      this.cropper.setDragMode(mode);
      this.cropStatus.dragMode = mode;
    },

    onAspectRatioSet(ratio) {
      this.cropper.setAspectRatio(ratio);
    },

    onZoom(ratio) {
      this.cropper.zoom(ratio);
    },

    onRotate(deg) {
      this.cropper.rotate(deg);
    },

    onScale(axis) {
      if (axis === "x") {
        this.cropper.scaleX(-1 * this.croppedData.scaleX);
      } else if (axis === "y") {
        this.cropper.scaleY(-1 * this.croppedData.scaleY);
      }
    },

    onCropBoxMove(offsetX, offsetY) {
      let data = this.croppedData;
      data.x = data.x + offsetX;
      data.y = data.y + offsetY;
      this.cropper.setData(data);
    },

    onCropBoxResize(direction, offset, len) {
      let data = this.croppedData;

      if (direction === "vertical") {
        data.y = data.y + offset;
        data.height = data.height + len;
      } else if (direction === "horizontal") {
        data.x = data.x + offset;
        data.width = data.width + len;
      }

      this.cropper.setData(data);
    }

  }
});
// CONCATENATED MODULE: ./src/components/Editor.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/components/Editor.vue?vue&type=style&index=0&id=968fb2d6&scoped=true&lang=css
var Editorvue_type_style_index_0_id_968fb2d6_scoped_true_lang_css = __webpack_require__("6fdf");

// CONCATENATED MODULE: ./src/components/Editor.vue







const Editor_exports_ = /*#__PURE__*/exportHelper_default()(Editorvue_type_script_lang_js, [['render',Editorvue_type_template_id_968fb2d6_scoped_true_render],['__scopeId',"data-v-968fb2d6"]])

/* harmony default export */ var Editor = (Editor_exports_);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/App.vue?vue&type=script&lang=js


/* harmony default export */ var Appvue_type_script_lang_js = ({
  name: "App",
  props: ['registerData'],
  components: {
    Picker: Picker,
    Editor: Editor
  },

  data() {
    return {
      // 图片源
      src: '',
      // 图片保存接口地址
      apiUrl: null,
      // 裁剪方式： server, js
      cropType: null,
      errorMsg: null
    };
  },

  mounted() {
    this.src = this.registerData.src;
    this.apiUrl = this.registerData.apiUrl;
    this.cropType = this.registerData.cropType;
  },

  methods: {
    delete() {
      this.src = null;
    },

    error(errorMsg) {
      // 显示错误信息
      this.errorMsg = errorMsg;
      this.src = null;
    },

    onPaste(e) {
      const {
        items
      } = e.clipboardData || window.clipboardData;
      e.preventDefault();

      if (items && items.length > 0) {
        new Promise((resolve, reject) => {
          const item = Array.from(items).pop();
          const error = new Error("请粘贴图片文件或URL");

          if (item.kind === "file") {
            resolve(item.getAsFile());
          } else if (item.kind === "string") {
            item.getAsString(url => {
              if (/^(?:https?|data):/.test(url)) {
                const xhr = new XMLHttpRequest();

                const alert = () => {
                  reject(error);
                };

                xhr.onabort = alert;
                xhr.onerror = alert;
                xhr.ontimeout = alert;

                xhr.onprogress = () => {
                  if (!/^image\/\w+$/.test(xhr.getResponseHeader("content-type"))) {
                    xhr.abort();
                  }
                };

                xhr.onload = () => {
                  resolve(xhr.response);
                };

                xhr.open("GET", url, true);
                xhr.responseType = "blob";
                xhr.send();
              } else {
                reject(error);
              }
            });
          } else {
            reject(error);
          }
        }).then(blob => this.read(blob, e).then(data => {
          this.src = data.url;
        })).catch(this.error);
      }
    },

    read(file, event) {
      return new Promise((resolve, reject) => {
        if (!file) {
          resolve();
          return;
        }

        if (/^image\/\w+$/.test(file.type)) {
          if (URL) {
            resolve({
              loaded: true,
              name: file.name,
              type: file.type,
              url: URL.createObjectURL(file)
            });
          } else {
            reject(new Error("您的浏览器不支持此操作。"));
          }
        } else {
          reject(new Error(`请 ${event ? event.type : "选择"}图片文件。`));
        }
      });
    },

    onChange($e) {
      this.errorMsg = null;
      let file = $e.files[0];

      if (!file) {
        return;
      }

      let fr = new FileReader();

      fr.onload = event => {
        this.src = event.target.result;
      };

      fr.readAsDataURL(file);
    }

  }
});
// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/App.vue





const App_exports_ = /*#__PURE__*/exportHelper_default()(Appvue_type_script_lang_js, [['render',render]])

/* harmony default export */ var App = (App_exports_);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (App);



/***/ }),

/***/ "fb51":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__("1de5");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__("7181");
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__("18e1");
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__("fc42");
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__("aef5");
var ___CSS_LOADER_URL_IMPORT_4___ = __webpack_require__("8e10");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___, { hash: "#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___, { hash: "#remixicon" });
// Module
exports.push([module.i, "@font-face{font-family:remixicon;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");src:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"embedded-opentype\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"woff2\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"woff\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"truetype\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"svg\");font-display:swap}[class*=\" ri-\"],[class^=ri-]{font-family:remixicon!important;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.ri-lg{font-size:1.3333em;line-height:.75em;vertical-align:-.0667em}.ri-xl{font-size:1.5em;line-height:.6666em;vertical-align:-.075em}.ri-xxs{font-size:.5em}.ri-xs{font-size:.75em}.ri-sm{font-size:.875em}.ri-1x{font-size:1em}.ri-2x{font-size:2em}.ri-3x{font-size:3em}.ri-4x{font-size:4em}.ri-5x{font-size:5em}.ri-6x{font-size:6em}.ri-7x{font-size:7em}.ri-8x{font-size:8em}.ri-9x{font-size:9em}.ri-10x{font-size:10em}.ri-fw{text-align:center;width:1.25em}.ri-24-hours-fill:before{content:\"\\ea01\"}.ri-24-hours-line:before{content:\"\\ea02\"}.ri-4k-fill:before{content:\"\\ea03\"}.ri-4k-line:before{content:\"\\ea04\"}.ri-a-b:before{content:\"\\ea05\"}.ri-account-box-fill:before{content:\"\\ea06\"}.ri-account-box-line:before{content:\"\\ea07\"}.ri-account-circle-fill:before{content:\"\\ea08\"}.ri-account-circle-line:before{content:\"\\ea09\"}.ri-account-pin-box-fill:before{content:\"\\ea0a\"}.ri-account-pin-box-line:before{content:\"\\ea0b\"}.ri-account-pin-circle-fill:before{content:\"\\ea0c\"}.ri-account-pin-circle-line:before{content:\"\\ea0d\"}.ri-add-box-fill:before{content:\"\\ea0e\"}.ri-add-box-line:before{content:\"\\ea0f\"}.ri-add-circle-fill:before{content:\"\\ea10\"}.ri-add-circle-line:before{content:\"\\ea11\"}.ri-add-fill:before{content:\"\\ea12\"}.ri-add-line:before{content:\"\\ea13\"}.ri-admin-fill:before{content:\"\\ea14\"}.ri-admin-line:before{content:\"\\ea15\"}.ri-advertisement-fill:before{content:\"\\ea16\"}.ri-advertisement-line:before{content:\"\\ea17\"}.ri-airplay-fill:before{content:\"\\ea18\"}.ri-airplay-line:before{content:\"\\ea19\"}.ri-alarm-fill:before{content:\"\\ea1a\"}.ri-alarm-line:before{content:\"\\ea1b\"}.ri-alarm-warning-fill:before{content:\"\\ea1c\"}.ri-alarm-warning-line:before{content:\"\\ea1d\"}.ri-album-fill:before{content:\"\\ea1e\"}.ri-album-line:before{content:\"\\ea1f\"}.ri-alert-fill:before{content:\"\\ea20\"}.ri-alert-line:before{content:\"\\ea21\"}.ri-aliens-fill:before{content:\"\\ea22\"}.ri-aliens-line:before{content:\"\\ea23\"}.ri-align-bottom:before{content:\"\\ea24\"}.ri-align-center:before{content:\"\\ea25\"}.ri-align-justify:before{content:\"\\ea26\"}.ri-align-left:before{content:\"\\ea27\"}.ri-align-right:before{content:\"\\ea28\"}.ri-align-top:before{content:\"\\ea29\"}.ri-align-vertically:before{content:\"\\ea2a\"}.ri-alipay-fill:before{content:\"\\ea2b\"}.ri-alipay-line:before{content:\"\\ea2c\"}.ri-amazon-fill:before{content:\"\\ea2d\"}.ri-amazon-line:before{content:\"\\ea2e\"}.ri-anchor-fill:before{content:\"\\ea2f\"}.ri-anchor-line:before{content:\"\\ea30\"}.ri-ancient-gate-fill:before{content:\"\\ea31\"}.ri-ancient-gate-line:before{content:\"\\ea32\"}.ri-ancient-pavilion-fill:before{content:\"\\ea33\"}.ri-ancient-pavilion-line:before{content:\"\\ea34\"}.ri-android-fill:before{content:\"\\ea35\"}.ri-android-line:before{content:\"\\ea36\"}.ri-angularjs-fill:before{content:\"\\ea37\"}.ri-angularjs-line:before{content:\"\\ea38\"}.ri-anticlockwise-2-fill:before{content:\"\\ea39\"}.ri-anticlockwise-2-line:before{content:\"\\ea3a\"}.ri-anticlockwise-fill:before{content:\"\\ea3b\"}.ri-anticlockwise-line:before{content:\"\\ea3c\"}.ri-app-store-fill:before{content:\"\\ea3d\"}.ri-app-store-line:before{content:\"\\ea3e\"}.ri-apple-fill:before{content:\"\\ea3f\"}.ri-apple-line:before{content:\"\\ea40\"}.ri-apps-2-fill:before{content:\"\\ea41\"}.ri-apps-2-line:before{content:\"\\ea42\"}.ri-apps-fill:before{content:\"\\ea43\"}.ri-apps-line:before{content:\"\\ea44\"}.ri-archive-drawer-fill:before{content:\"\\ea45\"}.ri-archive-drawer-line:before{content:\"\\ea46\"}.ri-archive-fill:before{content:\"\\ea47\"}.ri-archive-line:before{content:\"\\ea48\"}.ri-arrow-down-circle-fill:before{content:\"\\ea49\"}.ri-arrow-down-circle-line:before{content:\"\\ea4a\"}.ri-arrow-down-fill:before{content:\"\\ea4b\"}.ri-arrow-down-line:before{content:\"\\ea4c\"}.ri-arrow-down-s-fill:before{content:\"\\ea4d\"}.ri-arrow-down-s-line:before{content:\"\\ea4e\"}.ri-arrow-drop-down-fill:before{content:\"\\ea4f\"}.ri-arrow-drop-down-line:before{content:\"\\ea50\"}.ri-arrow-drop-left-fill:before{content:\"\\ea51\"}.ri-arrow-drop-left-line:before{content:\"\\ea52\"}.ri-arrow-drop-right-fill:before{content:\"\\ea53\"}.ri-arrow-drop-right-line:before{content:\"\\ea54\"}.ri-arrow-drop-up-fill:before{content:\"\\ea55\"}.ri-arrow-drop-up-line:before{content:\"\\ea56\"}.ri-arrow-go-back-fill:before{content:\"\\ea57\"}.ri-arrow-go-back-line:before{content:\"\\ea58\"}.ri-arrow-go-forward-fill:before{content:\"\\ea59\"}.ri-arrow-go-forward-line:before{content:\"\\ea5a\"}.ri-arrow-left-circle-fill:before{content:\"\\ea5b\"}.ri-arrow-left-circle-line:before{content:\"\\ea5c\"}.ri-arrow-left-down-fill:before{content:\"\\ea5d\"}.ri-arrow-left-down-line:before{content:\"\\ea5e\"}.ri-arrow-left-fill:before{content:\"\\ea5f\"}.ri-arrow-left-line:before{content:\"\\ea60\"}.ri-arrow-left-right-fill:before{content:\"\\ea61\"}.ri-arrow-left-right-line:before{content:\"\\ea62\"}.ri-arrow-left-s-fill:before{content:\"\\ea63\"}.ri-arrow-left-s-line:before{content:\"\\ea64\"}.ri-arrow-left-up-fill:before{content:\"\\ea65\"}.ri-arrow-left-up-line:before{content:\"\\ea66\"}.ri-arrow-right-circle-fill:before{content:\"\\ea67\"}.ri-arrow-right-circle-line:before{content:\"\\ea68\"}.ri-arrow-right-down-fill:before{content:\"\\ea69\"}.ri-arrow-right-down-line:before{content:\"\\ea6a\"}.ri-arrow-right-fill:before{content:\"\\ea6b\"}.ri-arrow-right-line:before{content:\"\\ea6c\"}.ri-arrow-right-s-fill:before{content:\"\\ea6d\"}.ri-arrow-right-s-line:before{content:\"\\ea6e\"}.ri-arrow-right-up-fill:before{content:\"\\ea6f\"}.ri-arrow-right-up-line:before{content:\"\\ea70\"}.ri-arrow-up-circle-fill:before{content:\"\\ea71\"}.ri-arrow-up-circle-line:before{content:\"\\ea72\"}.ri-arrow-up-down-fill:before{content:\"\\ea73\"}.ri-arrow-up-down-line:before{content:\"\\ea74\"}.ri-arrow-up-fill:before{content:\"\\ea75\"}.ri-arrow-up-line:before{content:\"\\ea76\"}.ri-arrow-up-s-fill:before{content:\"\\ea77\"}.ri-arrow-up-s-line:before{content:\"\\ea78\"}.ri-artboard-2-fill:before{content:\"\\ea79\"}.ri-artboard-2-line:before{content:\"\\ea7a\"}.ri-artboard-fill:before{content:\"\\ea7b\"}.ri-artboard-line:before{content:\"\\ea7c\"}.ri-article-fill:before{content:\"\\ea7d\"}.ri-article-line:before{content:\"\\ea7e\"}.ri-aspect-ratio-fill:before{content:\"\\ea7f\"}.ri-aspect-ratio-line:before{content:\"\\ea80\"}.ri-asterisk:before{content:\"\\ea81\"}.ri-at-fill:before{content:\"\\ea82\"}.ri-at-line:before{content:\"\\ea83\"}.ri-attachment-2:before{content:\"\\ea84\"}.ri-attachment-fill:before{content:\"\\ea85\"}.ri-attachment-line:before{content:\"\\ea86\"}.ri-auction-fill:before{content:\"\\ea87\"}.ri-auction-line:before{content:\"\\ea88\"}.ri-award-fill:before{content:\"\\ea89\"}.ri-award-line:before{content:\"\\ea8a\"}.ri-baidu-fill:before{content:\"\\ea8b\"}.ri-baidu-line:before{content:\"\\ea8c\"}.ri-ball-pen-fill:before{content:\"\\ea8d\"}.ri-ball-pen-line:before{content:\"\\ea8e\"}.ri-bank-card-2-fill:before{content:\"\\ea8f\"}.ri-bank-card-2-line:before{content:\"\\ea90\"}.ri-bank-card-fill:before{content:\"\\ea91\"}.ri-bank-card-line:before{content:\"\\ea92\"}.ri-bank-fill:before{content:\"\\ea93\"}.ri-bank-line:before{content:\"\\ea94\"}.ri-bar-chart-2-fill:before{content:\"\\ea95\"}.ri-bar-chart-2-line:before{content:\"\\ea96\"}.ri-bar-chart-box-fill:before{content:\"\\ea97\"}.ri-bar-chart-box-line:before{content:\"\\ea98\"}.ri-bar-chart-fill:before{content:\"\\ea99\"}.ri-bar-chart-grouped-fill:before{content:\"\\ea9a\"}.ri-bar-chart-grouped-line:before{content:\"\\ea9b\"}.ri-bar-chart-horizontal-fill:before{content:\"\\ea9c\"}.ri-bar-chart-horizontal-line:before{content:\"\\ea9d\"}.ri-bar-chart-line:before{content:\"\\ea9e\"}.ri-barcode-box-fill:before{content:\"\\ea9f\"}.ri-barcode-box-line:before{content:\"\\eaa0\"}.ri-barcode-fill:before{content:\"\\eaa1\"}.ri-barcode-line:before{content:\"\\eaa2\"}.ri-barricade-fill:before{content:\"\\eaa3\"}.ri-barricade-line:before{content:\"\\eaa4\"}.ri-base-station-fill:before{content:\"\\eaa5\"}.ri-base-station-line:before{content:\"\\eaa6\"}.ri-basketball-fill:before{content:\"\\eaa7\"}.ri-basketball-line:before{content:\"\\eaa8\"}.ri-battery-2-charge-fill:before{content:\"\\eaa9\"}.ri-battery-2-charge-line:before{content:\"\\eaaa\"}.ri-battery-2-fill:before{content:\"\\eaab\"}.ri-battery-2-line:before{content:\"\\eaac\"}.ri-battery-charge-fill:before{content:\"\\eaad\"}.ri-battery-charge-line:before{content:\"\\eaae\"}.ri-battery-fill:before{content:\"\\eaaf\"}.ri-battery-line:before{content:\"\\eab0\"}.ri-battery-low-fill:before{content:\"\\eab1\"}.ri-battery-low-line:before{content:\"\\eab2\"}.ri-battery-saver-fill:before{content:\"\\eab3\"}.ri-battery-saver-line:before{content:\"\\eab4\"}.ri-battery-share-fill:before{content:\"\\eab5\"}.ri-battery-share-line:before{content:\"\\eab6\"}.ri-bear-smile-fill:before{content:\"\\eab7\"}.ri-bear-smile-line:before{content:\"\\eab8\"}.ri-behance-fill:before{content:\"\\eab9\"}.ri-behance-line:before{content:\"\\eaba\"}.ri-bell-fill:before{content:\"\\eabb\"}.ri-bell-line:before{content:\"\\eabc\"}.ri-bike-fill:before{content:\"\\eabd\"}.ri-bike-line:before{content:\"\\eabe\"}.ri-bilibili-fill:before{content:\"\\eabf\"}.ri-bilibili-line:before{content:\"\\eac0\"}.ri-bill-fill:before{content:\"\\eac1\"}.ri-bill-line:before{content:\"\\eac2\"}.ri-billiards-fill:before{content:\"\\eac3\"}.ri-billiards-line:before{content:\"\\eac4\"}.ri-bit-coin-fill:before{content:\"\\eac5\"}.ri-bit-coin-line:before{content:\"\\eac6\"}.ri-blaze-fill:before{content:\"\\eac7\"}.ri-blaze-line:before{content:\"\\eac8\"}.ri-bluetooth-connect-fill:before{content:\"\\eac9\"}.ri-bluetooth-connect-line:before{content:\"\\eaca\"}.ri-bluetooth-fill:before{content:\"\\eacb\"}.ri-bluetooth-line:before{content:\"\\eacc\"}.ri-blur-off-fill:before{content:\"\\eacd\"}.ri-blur-off-line:before{content:\"\\eace\"}.ri-body-scan-fill:before{content:\"\\eacf\"}.ri-body-scan-line:before{content:\"\\ead0\"}.ri-bold:before{content:\"\\ead1\"}.ri-book-2-fill:before{content:\"\\ead2\"}.ri-book-2-line:before{content:\"\\ead3\"}.ri-book-3-fill:before{content:\"\\ead4\"}.ri-book-3-line:before{content:\"\\ead5\"}.ri-book-fill:before{content:\"\\ead6\"}.ri-book-line:before{content:\"\\ead7\"}.ri-book-mark-fill:before{content:\"\\ead8\"}.ri-book-mark-line:before{content:\"\\ead9\"}.ri-book-open-fill:before{content:\"\\eada\"}.ri-book-open-line:before{content:\"\\eadb\"}.ri-book-read-fill:before{content:\"\\eadc\"}.ri-book-read-line:before{content:\"\\eadd\"}.ri-booklet-fill:before{content:\"\\eade\"}.ri-booklet-line:before{content:\"\\eadf\"}.ri-bookmark-2-fill:before{content:\"\\eae0\"}.ri-bookmark-2-line:before{content:\"\\eae1\"}.ri-bookmark-3-fill:before{content:\"\\eae2\"}.ri-bookmark-3-line:before{content:\"\\eae3\"}.ri-bookmark-fill:before{content:\"\\eae4\"}.ri-bookmark-line:before{content:\"\\eae5\"}.ri-boxing-fill:before{content:\"\\eae6\"}.ri-boxing-line:before{content:\"\\eae7\"}.ri-braces-fill:before{content:\"\\eae8\"}.ri-braces-line:before{content:\"\\eae9\"}.ri-brackets-fill:before{content:\"\\eaea\"}.ri-brackets-line:before{content:\"\\eaeb\"}.ri-briefcase-2-fill:before{content:\"\\eaec\"}.ri-briefcase-2-line:before{content:\"\\eaed\"}.ri-briefcase-3-fill:before{content:\"\\eaee\"}.ri-briefcase-3-line:before{content:\"\\eaef\"}.ri-briefcase-4-fill:before{content:\"\\eaf0\"}.ri-briefcase-4-line:before{content:\"\\eaf1\"}.ri-briefcase-5-fill:before{content:\"\\eaf2\"}.ri-briefcase-5-line:before{content:\"\\eaf3\"}.ri-briefcase-fill:before{content:\"\\eaf4\"}.ri-briefcase-line:before{content:\"\\eaf5\"}.ri-bring-forward:before{content:\"\\eaf6\"}.ri-bring-to-front:before{content:\"\\eaf7\"}.ri-broadcast-fill:before{content:\"\\eaf8\"}.ri-broadcast-line:before{content:\"\\eaf9\"}.ri-brush-2-fill:before{content:\"\\eafa\"}.ri-brush-2-line:before{content:\"\\eafb\"}.ri-brush-3-fill:before{content:\"\\eafc\"}.ri-brush-3-line:before{content:\"\\eafd\"}.ri-brush-4-fill:before{content:\"\\eafe\"}.ri-brush-4-line:before{content:\"\\eaff\"}.ri-brush-fill:before{content:\"\\eb00\"}.ri-brush-line:before{content:\"\\eb01\"}.ri-bubble-chart-fill:before{content:\"\\eb02\"}.ri-bubble-chart-line:before{content:\"\\eb03\"}.ri-bug-2-fill:before{content:\"\\eb04\"}.ri-bug-2-line:before{content:\"\\eb05\"}.ri-bug-fill:before{content:\"\\eb06\"}.ri-bug-line:before{content:\"\\eb07\"}.ri-building-2-fill:before{content:\"\\eb08\"}.ri-building-2-line:before{content:\"\\eb09\"}.ri-building-3-fill:before{content:\"\\eb0a\"}.ri-building-3-line:before{content:\"\\eb0b\"}.ri-building-4-fill:before{content:\"\\eb0c\"}.ri-building-4-line:before{content:\"\\eb0d\"}.ri-building-fill:before{content:\"\\eb0e\"}.ri-building-line:before{content:\"\\eb0f\"}.ri-bus-2-fill:before{content:\"\\eb10\"}.ri-bus-2-line:before{content:\"\\eb11\"}.ri-bus-fill:before{content:\"\\eb12\"}.ri-bus-line:before{content:\"\\eb13\"}.ri-bus-wifi-fill:before{content:\"\\eb14\"}.ri-bus-wifi-line:before{content:\"\\eb15\"}.ri-cactus-fill:before{content:\"\\eb16\"}.ri-cactus-line:before{content:\"\\eb17\"}.ri-cake-2-fill:before{content:\"\\eb18\"}.ri-cake-2-line:before{content:\"\\eb19\"}.ri-cake-3-fill:before{content:\"\\eb1a\"}.ri-cake-3-line:before{content:\"\\eb1b\"}.ri-cake-fill:before{content:\"\\eb1c\"}.ri-cake-line:before{content:\"\\eb1d\"}.ri-calculator-fill:before{content:\"\\eb1e\"}.ri-calculator-line:before{content:\"\\eb1f\"}.ri-calendar-2-fill:before{content:\"\\eb20\"}.ri-calendar-2-line:before{content:\"\\eb21\"}.ri-calendar-check-fill:before{content:\"\\eb22\"}.ri-calendar-check-line:before{content:\"\\eb23\"}.ri-calendar-event-fill:before{content:\"\\eb24\"}.ri-calendar-event-line:before{content:\"\\eb25\"}.ri-calendar-fill:before{content:\"\\eb26\"}.ri-calendar-line:before{content:\"\\eb27\"}.ri-calendar-todo-fill:before{content:\"\\eb28\"}.ri-calendar-todo-line:before{content:\"\\eb29\"}.ri-camera-2-fill:before{content:\"\\eb2a\"}.ri-camera-2-line:before{content:\"\\eb2b\"}.ri-camera-3-fill:before{content:\"\\eb2c\"}.ri-camera-3-line:before{content:\"\\eb2d\"}.ri-camera-fill:before{content:\"\\eb2e\"}.ri-camera-lens-fill:before{content:\"\\eb2f\"}.ri-camera-lens-line:before{content:\"\\eb30\"}.ri-camera-line:before{content:\"\\eb31\"}.ri-camera-off-fill:before{content:\"\\eb32\"}.ri-camera-off-line:before{content:\"\\eb33\"}.ri-camera-switch-fill:before{content:\"\\eb34\"}.ri-camera-switch-line:before{content:\"\\eb35\"}.ri-capsule-fill:before{content:\"\\eb36\"}.ri-capsule-line:before{content:\"\\eb37\"}.ri-car-fill:before{content:\"\\eb38\"}.ri-car-line:before{content:\"\\eb39\"}.ri-car-washing-fill:before{content:\"\\eb3a\"}.ri-car-washing-line:before{content:\"\\eb3b\"}.ri-caravan-fill:before{content:\"\\eb3c\"}.ri-caravan-line:before{content:\"\\eb3d\"}.ri-cast-fill:before{content:\"\\eb3e\"}.ri-cast-line:before{content:\"\\eb3f\"}.ri-cellphone-fill:before{content:\"\\eb40\"}.ri-cellphone-line:before{content:\"\\eb41\"}.ri-celsius-fill:before{content:\"\\eb42\"}.ri-celsius-line:before{content:\"\\eb43\"}.ri-centos-fill:before{content:\"\\eb44\"}.ri-centos-line:before{content:\"\\eb45\"}.ri-character-recognition-fill:before{content:\"\\eb46\"}.ri-character-recognition-line:before{content:\"\\eb47\"}.ri-charging-pile-2-fill:before{content:\"\\eb48\"}.ri-charging-pile-2-line:before{content:\"\\eb49\"}.ri-charging-pile-fill:before{content:\"\\eb4a\"}.ri-charging-pile-line:before{content:\"\\eb4b\"}.ri-chat-1-fill:before{content:\"\\eb4c\"}.ri-chat-1-line:before{content:\"\\eb4d\"}.ri-chat-2-fill:before{content:\"\\eb4e\"}.ri-chat-2-line:before{content:\"\\eb4f\"}.ri-chat-3-fill:before{content:\"\\eb50\"}.ri-chat-3-line:before{content:\"\\eb51\"}.ri-chat-4-fill:before{content:\"\\eb52\"}.ri-chat-4-line:before{content:\"\\eb53\"}.ri-chat-check-fill:before{content:\"\\eb54\"}.ri-chat-check-line:before{content:\"\\eb55\"}.ri-chat-delete-fill:before{content:\"\\eb56\"}.ri-chat-delete-line:before{content:\"\\eb57\"}.ri-chat-download-fill:before{content:\"\\eb58\"}.ri-chat-download-line:before{content:\"\\eb59\"}.ri-chat-follow-up-fill:before{content:\"\\eb5a\"}.ri-chat-follow-up-line:before{content:\"\\eb5b\"}.ri-chat-forward-fill:before{content:\"\\eb5c\"}.ri-chat-forward-line:before{content:\"\\eb5d\"}.ri-chat-heart-fill:before{content:\"\\eb5e\"}.ri-chat-heart-line:before{content:\"\\eb5f\"}.ri-chat-history-fill:before{content:\"\\eb60\"}.ri-chat-history-line:before{content:\"\\eb61\"}.ri-chat-new-fill:before{content:\"\\eb62\"}.ri-chat-new-line:before{content:\"\\eb63\"}.ri-chat-off-fill:before{content:\"\\eb64\"}.ri-chat-off-line:before{content:\"\\eb65\"}.ri-chat-poll-fill:before{content:\"\\eb66\"}.ri-chat-poll-line:before{content:\"\\eb67\"}.ri-chat-private-fill:before{content:\"\\eb68\"}.ri-chat-private-line:before{content:\"\\eb69\"}.ri-chat-quote-fill:before{content:\"\\eb6a\"}.ri-chat-quote-line:before{content:\"\\eb6b\"}.ri-chat-settings-fill:before{content:\"\\eb6c\"}.ri-chat-settings-line:before{content:\"\\eb6d\"}.ri-chat-smile-2-fill:before{content:\"\\eb6e\"}.ri-chat-smile-2-line:before{content:\"\\eb6f\"}.ri-chat-smile-3-fill:before{content:\"\\eb70\"}.ri-chat-smile-3-line:before{content:\"\\eb71\"}.ri-chat-smile-fill:before{content:\"\\eb72\"}.ri-chat-smile-line:before{content:\"\\eb73\"}.ri-chat-upload-fill:before{content:\"\\eb74\"}.ri-chat-upload-line:before{content:\"\\eb75\"}.ri-chat-voice-fill:before{content:\"\\eb76\"}.ri-chat-voice-line:before{content:\"\\eb77\"}.ri-check-double-fill:before{content:\"\\eb78\"}.ri-check-double-line:before{content:\"\\eb79\"}.ri-check-fill:before{content:\"\\eb7a\"}.ri-check-line:before{content:\"\\eb7b\"}.ri-checkbox-blank-circle-fill:before{content:\"\\eb7c\"}.ri-checkbox-blank-circle-line:before{content:\"\\eb7d\"}.ri-checkbox-blank-fill:before{content:\"\\eb7e\"}.ri-checkbox-blank-line:before{content:\"\\eb7f\"}.ri-checkbox-circle-fill:before{content:\"\\eb80\"}.ri-checkbox-circle-line:before{content:\"\\eb81\"}.ri-checkbox-fill:before{content:\"\\eb82\"}.ri-checkbox-indeterminate-fill:before{content:\"\\eb83\"}.ri-checkbox-indeterminate-line:before{content:\"\\eb84\"}.ri-checkbox-line:before{content:\"\\eb85\"}.ri-checkbox-multiple-blank-fill:before{content:\"\\eb86\"}.ri-checkbox-multiple-blank-line:before{content:\"\\eb87\"}.ri-checkbox-multiple-fill:before{content:\"\\eb88\"}.ri-checkbox-multiple-line:before{content:\"\\eb89\"}.ri-china-railway-fill:before{content:\"\\eb8a\"}.ri-china-railway-line:before{content:\"\\eb8b\"}.ri-chrome-fill:before{content:\"\\eb8c\"}.ri-chrome-line:before{content:\"\\eb8d\"}.ri-clapperboard-fill:before{content:\"\\eb8e\"}.ri-clapperboard-line:before{content:\"\\eb8f\"}.ri-clipboard-fill:before{content:\"\\eb90\"}.ri-clipboard-line:before{content:\"\\eb91\"}.ri-clockwise-2-fill:before{content:\"\\eb92\"}.ri-clockwise-2-line:before{content:\"\\eb93\"}.ri-clockwise-fill:before{content:\"\\eb94\"}.ri-clockwise-line:before{content:\"\\eb95\"}.ri-close-circle-fill:before{content:\"\\eb96\"}.ri-close-circle-line:before{content:\"\\eb97\"}.ri-close-fill:before{content:\"\\eb98\"}.ri-close-line:before{content:\"\\eb99\"}.ri-closed-captioning-fill:before{content:\"\\eb9a\"}.ri-closed-captioning-line:before{content:\"\\eb9b\"}.ri-cloud-fill:before{content:\"\\eb9c\"}.ri-cloud-line:before{content:\"\\eb9d\"}.ri-cloud-off-fill:before{content:\"\\eb9e\"}.ri-cloud-off-line:before{content:\"\\eb9f\"}.ri-cloud-windy-fill:before{content:\"\\eba0\"}.ri-cloud-windy-line:before{content:\"\\eba1\"}.ri-cloudy-2-fill:before{content:\"\\eba2\"}.ri-cloudy-2-line:before{content:\"\\eba3\"}.ri-cloudy-fill:before{content:\"\\eba4\"}.ri-cloudy-line:before{content:\"\\eba5\"}.ri-code-box-fill:before{content:\"\\eba6\"}.ri-code-box-line:before{content:\"\\eba7\"}.ri-code-fill:before{content:\"\\eba8\"}.ri-code-line:before{content:\"\\eba9\"}.ri-code-s-fill:before{content:\"\\ebaa\"}.ri-code-s-line:before{content:\"\\ebab\"}.ri-code-s-slash-fill:before{content:\"\\ebac\"}.ri-code-s-slash-line:before{content:\"\\ebad\"}.ri-code-view:before{content:\"\\ebae\"}.ri-codepen-fill:before{content:\"\\ebaf\"}.ri-codepen-line:before{content:\"\\ebb0\"}.ri-coin-fill:before{content:\"\\ebb1\"}.ri-coin-line:before{content:\"\\ebb2\"}.ri-coins-fill:before{content:\"\\ebb3\"}.ri-coins-line:before{content:\"\\ebb4\"}.ri-collage-fill:before{content:\"\\ebb5\"}.ri-collage-line:before{content:\"\\ebb6\"}.ri-command-fill:before{content:\"\\ebb7\"}.ri-command-line:before{content:\"\\ebb8\"}.ri-community-fill:before{content:\"\\ebb9\"}.ri-community-line:before{content:\"\\ebba\"}.ri-compass-2-fill:before{content:\"\\ebbb\"}.ri-compass-2-line:before{content:\"\\ebbc\"}.ri-compass-3-fill:before{content:\"\\ebbd\"}.ri-compass-3-line:before{content:\"\\ebbe\"}.ri-compass-4-fill:before{content:\"\\ebbf\"}.ri-compass-4-line:before{content:\"\\ebc0\"}.ri-compass-discover-fill:before{content:\"\\ebc1\"}.ri-compass-discover-line:before{content:\"\\ebc2\"}.ri-compass-fill:before{content:\"\\ebc3\"}.ri-compass-line:before{content:\"\\ebc4\"}.ri-compasses-2-fill:before{content:\"\\ebc5\"}.ri-compasses-2-line:before{content:\"\\ebc6\"}.ri-compasses-fill:before{content:\"\\ebc7\"}.ri-compasses-line:before{content:\"\\ebc8\"}.ri-computer-fill:before{content:\"\\ebc9\"}.ri-computer-line:before{content:\"\\ebca\"}.ri-contacts-book-2-fill:before{content:\"\\ebcb\"}.ri-contacts-book-2-line:before{content:\"\\ebcc\"}.ri-contacts-book-fill:before{content:\"\\ebcd\"}.ri-contacts-book-line:before{content:\"\\ebce\"}.ri-contacts-book-upload-fill:before{content:\"\\ebcf\"}.ri-contacts-book-upload-line:before{content:\"\\ebd0\"}.ri-contacts-fill:before{content:\"\\ebd1\"}.ri-contacts-line:before{content:\"\\ebd2\"}.ri-contrast-2-fill:before{content:\"\\ebd3\"}.ri-contrast-2-line:before{content:\"\\ebd4\"}.ri-contrast-drop-2-fill:before{content:\"\\ebd5\"}.ri-contrast-drop-2-line:before{content:\"\\ebd6\"}.ri-contrast-drop-fill:before{content:\"\\ebd7\"}.ri-contrast-drop-line:before{content:\"\\ebd8\"}.ri-contrast-fill:before{content:\"\\ebd9\"}.ri-contrast-line:before{content:\"\\ebda\"}.ri-copper-coin-fill:before{content:\"\\ebdb\"}.ri-copper-coin-line:before{content:\"\\ebdc\"}.ri-copper-diamond-fill:before{content:\"\\ebdd\"}.ri-copper-diamond-line:before{content:\"\\ebde\"}.ri-copyleft-fill:before{content:\"\\ebdf\"}.ri-copyleft-line:before{content:\"\\ebe0\"}.ri-copyright-fill:before{content:\"\\ebe1\"}.ri-copyright-line:before{content:\"\\ebe2\"}.ri-coreos-fill:before{content:\"\\ebe3\"}.ri-coreos-line:before{content:\"\\ebe4\"}.ri-coupon-2-fill:before{content:\"\\ebe5\"}.ri-coupon-2-line:before{content:\"\\ebe6\"}.ri-coupon-3-fill:before{content:\"\\ebe7\"}.ri-coupon-3-line:before{content:\"\\ebe8\"}.ri-coupon-4-fill:before{content:\"\\ebe9\"}.ri-coupon-4-line:before{content:\"\\ebea\"}.ri-coupon-5-fill:before{content:\"\\ebeb\"}.ri-coupon-5-line:before{content:\"\\ebec\"}.ri-coupon-fill:before{content:\"\\ebed\"}.ri-coupon-line:before{content:\"\\ebee\"}.ri-cpu-fill:before{content:\"\\ebef\"}.ri-cpu-line:before{content:\"\\ebf0\"}.ri-creative-commons-by-fill:before{content:\"\\ebf1\"}.ri-creative-commons-by-line:before{content:\"\\ebf2\"}.ri-creative-commons-fill:before{content:\"\\ebf3\"}.ri-creative-commons-line:before{content:\"\\ebf4\"}.ri-creative-commons-nc-fill:before{content:\"\\ebf5\"}.ri-creative-commons-nc-line:before{content:\"\\ebf6\"}.ri-creative-commons-nd-fill:before{content:\"\\ebf7\"}.ri-creative-commons-nd-line:before{content:\"\\ebf8\"}.ri-creative-commons-sa-fill:before{content:\"\\ebf9\"}.ri-creative-commons-sa-line:before{content:\"\\ebfa\"}.ri-creative-commons-zero-fill:before{content:\"\\ebfb\"}.ri-creative-commons-zero-line:before{content:\"\\ebfc\"}.ri-criminal-fill:before{content:\"\\ebfd\"}.ri-criminal-line:before{content:\"\\ebfe\"}.ri-crop-2-fill:before{content:\"\\ebff\"}.ri-crop-2-line:before{content:\"\\ec00\"}.ri-crop-fill:before{content:\"\\ec01\"}.ri-crop-line:before{content:\"\\ec02\"}.ri-css3-fill:before{content:\"\\ec03\"}.ri-css3-line:before{content:\"\\ec04\"}.ri-cup-fill:before{content:\"\\ec05\"}.ri-cup-line:before{content:\"\\ec06\"}.ri-currency-fill:before{content:\"\\ec07\"}.ri-currency-line:before{content:\"\\ec08\"}.ri-cursor-fill:before{content:\"\\ec09\"}.ri-cursor-line:before{content:\"\\ec0a\"}.ri-customer-service-2-fill:before{content:\"\\ec0b\"}.ri-customer-service-2-line:before{content:\"\\ec0c\"}.ri-customer-service-fill:before{content:\"\\ec0d\"}.ri-customer-service-line:before{content:\"\\ec0e\"}.ri-dashboard-2-fill:before{content:\"\\ec0f\"}.ri-dashboard-2-line:before{content:\"\\ec10\"}.ri-dashboard-3-fill:before{content:\"\\ec11\"}.ri-dashboard-3-line:before{content:\"\\ec12\"}.ri-dashboard-fill:before{content:\"\\ec13\"}.ri-dashboard-line:before{content:\"\\ec14\"}.ri-database-2-fill:before{content:\"\\ec15\"}.ri-database-2-line:before{content:\"\\ec16\"}.ri-database-fill:before{content:\"\\ec17\"}.ri-database-line:before{content:\"\\ec18\"}.ri-delete-back-2-fill:before{content:\"\\ec19\"}.ri-delete-back-2-line:before{content:\"\\ec1a\"}.ri-delete-back-fill:before{content:\"\\ec1b\"}.ri-delete-back-line:before{content:\"\\ec1c\"}.ri-delete-bin-2-fill:before{content:\"\\ec1d\"}.ri-delete-bin-2-line:before{content:\"\\ec1e\"}.ri-delete-bin-3-fill:before{content:\"\\ec1f\"}.ri-delete-bin-3-line:before{content:\"\\ec20\"}.ri-delete-bin-4-fill:before{content:\"\\ec21\"}.ri-delete-bin-4-line:before{content:\"\\ec22\"}.ri-delete-bin-5-fill:before{content:\"\\ec23\"}.ri-delete-bin-5-line:before{content:\"\\ec24\"}.ri-delete-bin-6-fill:before{content:\"\\ec25\"}.ri-delete-bin-6-line:before{content:\"\\ec26\"}.ri-delete-bin-7-fill:before{content:\"\\ec27\"}.ri-delete-bin-7-line:before{content:\"\\ec28\"}.ri-delete-bin-fill:before{content:\"\\ec29\"}.ri-delete-bin-line:before{content:\"\\ec2a\"}.ri-delete-column:before{content:\"\\ec2b\"}.ri-delete-row:before{content:\"\\ec2c\"}.ri-device-fill:before{content:\"\\ec2d\"}.ri-device-line:before{content:\"\\ec2e\"}.ri-device-recover-fill:before{content:\"\\ec2f\"}.ri-device-recover-line:before{content:\"\\ec30\"}.ri-dingding-fill:before{content:\"\\ec31\"}.ri-dingding-line:before{content:\"\\ec32\"}.ri-direction-fill:before{content:\"\\ec33\"}.ri-direction-line:before{content:\"\\ec34\"}.ri-disc-fill:before{content:\"\\ec35\"}.ri-disc-line:before{content:\"\\ec36\"}.ri-discord-fill:before{content:\"\\ec37\"}.ri-discord-line:before{content:\"\\ec38\"}.ri-discuss-fill:before{content:\"\\ec39\"}.ri-discuss-line:before{content:\"\\ec3a\"}.ri-dislike-fill:before{content:\"\\ec3b\"}.ri-dislike-line:before{content:\"\\ec3c\"}.ri-disqus-fill:before{content:\"\\ec3d\"}.ri-disqus-line:before{content:\"\\ec3e\"}.ri-divide-fill:before{content:\"\\ec3f\"}.ri-divide-line:before{content:\"\\ec40\"}.ri-donut-chart-fill:before{content:\"\\ec41\"}.ri-donut-chart-line:before{content:\"\\ec42\"}.ri-door-closed-fill:before{content:\"\\ec43\"}.ri-door-closed-line:before{content:\"\\ec44\"}.ri-door-fill:before{content:\"\\ec45\"}.ri-door-line:before{content:\"\\ec46\"}.ri-door-lock-box-fill:before{content:\"\\ec47\"}.ri-door-lock-box-line:before{content:\"\\ec48\"}.ri-door-lock-fill:before{content:\"\\ec49\"}.ri-door-lock-line:before{content:\"\\ec4a\"}.ri-door-open-fill:before{content:\"\\ec4b\"}.ri-door-open-line:before{content:\"\\ec4c\"}.ri-dossier-fill:before{content:\"\\ec4d\"}.ri-dossier-line:before{content:\"\\ec4e\"}.ri-douban-fill:before{content:\"\\ec4f\"}.ri-douban-line:before{content:\"\\ec50\"}.ri-double-quotes-l:before{content:\"\\ec51\"}.ri-double-quotes-r:before{content:\"\\ec52\"}.ri-download-2-fill:before{content:\"\\ec53\"}.ri-download-2-line:before{content:\"\\ec54\"}.ri-download-cloud-2-fill:before{content:\"\\ec55\"}.ri-download-cloud-2-line:before{content:\"\\ec56\"}.ri-download-cloud-fill:before{content:\"\\ec57\"}.ri-download-cloud-line:before{content:\"\\ec58\"}.ri-download-fill:before{content:\"\\ec59\"}.ri-download-line:before{content:\"\\ec5a\"}.ri-draft-fill:before{content:\"\\ec5b\"}.ri-draft-line:before{content:\"\\ec5c\"}.ri-drag-drop-fill:before{content:\"\\ec5d\"}.ri-drag-drop-line:before{content:\"\\ec5e\"}.ri-drag-move-2-fill:before{content:\"\\ec5f\"}.ri-drag-move-2-line:before{content:\"\\ec60\"}.ri-drag-move-fill:before{content:\"\\ec61\"}.ri-drag-move-line:before{content:\"\\ec62\"}.ri-dribbble-fill:before{content:\"\\ec63\"}.ri-dribbble-line:before{content:\"\\ec64\"}.ri-drive-fill:before{content:\"\\ec65\"}.ri-drive-line:before{content:\"\\ec66\"}.ri-drizzle-fill:before{content:\"\\ec67\"}.ri-drizzle-line:before{content:\"\\ec68\"}.ri-drop-fill:before{content:\"\\ec69\"}.ri-drop-line:before{content:\"\\ec6a\"}.ri-dropbox-fill:before{content:\"\\ec6b\"}.ri-dropbox-line:before{content:\"\\ec6c\"}.ri-dual-sim-1-fill:before{content:\"\\ec6d\"}.ri-dual-sim-1-line:before{content:\"\\ec6e\"}.ri-dual-sim-2-fill:before{content:\"\\ec6f\"}.ri-dual-sim-2-line:before{content:\"\\ec70\"}.ri-dv-fill:before{content:\"\\ec71\"}.ri-dv-line:before{content:\"\\ec72\"}.ri-dvd-fill:before{content:\"\\ec73\"}.ri-dvd-line:before{content:\"\\ec74\"}.ri-e-bike-2-fill:before{content:\"\\ec75\"}.ri-e-bike-2-line:before{content:\"\\ec76\"}.ri-e-bike-fill:before{content:\"\\ec77\"}.ri-e-bike-line:before{content:\"\\ec78\"}.ri-earth-fill:before{content:\"\\ec79\"}.ri-earth-line:before{content:\"\\ec7a\"}.ri-earthquake-fill:before{content:\"\\ec7b\"}.ri-earthquake-line:before{content:\"\\ec7c\"}.ri-edge-fill:before{content:\"\\ec7d\"}.ri-edge-line:before{content:\"\\ec7e\"}.ri-edit-2-fill:before{content:\"\\ec7f\"}.ri-edit-2-line:before{content:\"\\ec80\"}.ri-edit-box-fill:before{content:\"\\ec81\"}.ri-edit-box-line:before{content:\"\\ec82\"}.ri-edit-circle-fill:before{content:\"\\ec83\"}.ri-edit-circle-line:before{content:\"\\ec84\"}.ri-edit-fill:before{content:\"\\ec85\"}.ri-edit-line:before{content:\"\\ec86\"}.ri-eject-fill:before{content:\"\\ec87\"}.ri-eject-line:before{content:\"\\ec88\"}.ri-emotion-2-fill:before{content:\"\\ec89\"}.ri-emotion-2-line:before{content:\"\\ec8a\"}.ri-emotion-fill:before{content:\"\\ec8b\"}.ri-emotion-happy-fill:before{content:\"\\ec8c\"}.ri-emotion-happy-line:before{content:\"\\ec8d\"}.ri-emotion-laugh-fill:before{content:\"\\ec8e\"}.ri-emotion-laugh-line:before{content:\"\\ec8f\"}.ri-emotion-line:before{content:\"\\ec90\"}.ri-emotion-normal-fill:before{content:\"\\ec91\"}.ri-emotion-normal-line:before{content:\"\\ec92\"}.ri-emotion-sad-fill:before{content:\"\\ec93\"}.ri-emotion-sad-line:before{content:\"\\ec94\"}.ri-emotion-unhappy-fill:before{content:\"\\ec95\"}.ri-emotion-unhappy-line:before{content:\"\\ec96\"}.ri-empathize-fill:before{content:\"\\ec97\"}.ri-empathize-line:before{content:\"\\ec98\"}.ri-emphasis-cn:before{content:\"\\ec99\"}.ri-emphasis:before{content:\"\\ec9a\"}.ri-english-input:before{content:\"\\ec9b\"}.ri-equalizer-fill:before{content:\"\\ec9c\"}.ri-equalizer-line:before{content:\"\\ec9d\"}.ri-eraser-fill:before{content:\"\\ec9e\"}.ri-eraser-line:before{content:\"\\ec9f\"}.ri-error-warning-fill:before{content:\"\\eca0\"}.ri-error-warning-line:before{content:\"\\eca1\"}.ri-evernote-fill:before{content:\"\\eca2\"}.ri-evernote-line:before{content:\"\\eca3\"}.ri-exchange-box-fill:before{content:\"\\eca4\"}.ri-exchange-box-line:before{content:\"\\eca5\"}.ri-exchange-cny-fill:before{content:\"\\eca6\"}.ri-exchange-cny-line:before{content:\"\\eca7\"}.ri-exchange-dollar-fill:before{content:\"\\eca8\"}.ri-exchange-dollar-line:before{content:\"\\eca9\"}.ri-exchange-fill:before{content:\"\\ecaa\"}.ri-exchange-funds-fill:before{content:\"\\ecab\"}.ri-exchange-funds-line:before{content:\"\\ecac\"}.ri-exchange-line:before{content:\"\\ecad\"}.ri-external-link-fill:before{content:\"\\ecae\"}.ri-external-link-line:before{content:\"\\ecaf\"}.ri-eye-2-fill:before{content:\"\\ecb0\"}.ri-eye-2-line:before{content:\"\\ecb1\"}.ri-eye-close-fill:before{content:\"\\ecb2\"}.ri-eye-close-line:before{content:\"\\ecb3\"}.ri-eye-fill:before{content:\"\\ecb4\"}.ri-eye-line:before{content:\"\\ecb5\"}.ri-eye-off-fill:before{content:\"\\ecb6\"}.ri-eye-off-line:before{content:\"\\ecb7\"}.ri-facebook-box-fill:before{content:\"\\ecb8\"}.ri-facebook-box-line:before{content:\"\\ecb9\"}.ri-facebook-circle-fill:before{content:\"\\ecba\"}.ri-facebook-circle-line:before{content:\"\\ecbb\"}.ri-facebook-fill:before{content:\"\\ecbc\"}.ri-facebook-line:before{content:\"\\ecbd\"}.ri-fahrenheit-fill:before{content:\"\\ecbe\"}.ri-fahrenheit-line:before{content:\"\\ecbf\"}.ri-feedback-fill:before{content:\"\\ecc0\"}.ri-feedback-line:before{content:\"\\ecc1\"}.ri-file-2-fill:before{content:\"\\ecc2\"}.ri-file-2-line:before{content:\"\\ecc3\"}.ri-file-3-fill:before{content:\"\\ecc4\"}.ri-file-3-line:before{content:\"\\ecc5\"}.ri-file-4-fill:before{content:\"\\ecc6\"}.ri-file-4-line:before{content:\"\\ecc7\"}.ri-file-add-fill:before{content:\"\\ecc8\"}.ri-file-add-line:before{content:\"\\ecc9\"}.ri-file-chart-2-fill:before{content:\"\\ecca\"}.ri-file-chart-2-line:before{content:\"\\eccb\"}.ri-file-chart-fill:before{content:\"\\eccc\"}.ri-file-chart-line:before{content:\"\\eccd\"}.ri-file-cloud-fill:before{content:\"\\ecce\"}.ri-file-cloud-line:before{content:\"\\eccf\"}.ri-file-code-fill:before{content:\"\\ecd0\"}.ri-file-code-line:before{content:\"\\ecd1\"}.ri-file-copy-2-fill:before{content:\"\\ecd2\"}.ri-file-copy-2-line:before{content:\"\\ecd3\"}.ri-file-copy-fill:before{content:\"\\ecd4\"}.ri-file-copy-line:before{content:\"\\ecd5\"}.ri-file-damage-fill:before{content:\"\\ecd6\"}.ri-file-damage-line:before{content:\"\\ecd7\"}.ri-file-download-fill:before{content:\"\\ecd8\"}.ri-file-download-line:before{content:\"\\ecd9\"}.ri-file-edit-fill:before{content:\"\\ecda\"}.ri-file-edit-line:before{content:\"\\ecdb\"}.ri-file-excel-2-fill:before{content:\"\\ecdc\"}.ri-file-excel-2-line:before{content:\"\\ecdd\"}.ri-file-excel-fill:before{content:\"\\ecde\"}.ri-file-excel-line:before{content:\"\\ecdf\"}.ri-file-fill:before{content:\"\\ece0\"}.ri-file-forbid-fill:before{content:\"\\ece1\"}.ri-file-forbid-line:before{content:\"\\ece2\"}.ri-file-gif-fill:before{content:\"\\ece3\"}.ri-file-gif-line:before{content:\"\\ece4\"}.ri-file-history-fill:before{content:\"\\ece5\"}.ri-file-history-line:before{content:\"\\ece6\"}.ri-file-hwp-fill:before{content:\"\\ece7\"}.ri-file-hwp-line:before{content:\"\\ece8\"}.ri-file-info-fill:before{content:\"\\ece9\"}.ri-file-info-line:before{content:\"\\ecea\"}.ri-file-line:before{content:\"\\eceb\"}.ri-file-list-2-fill:before{content:\"\\ecec\"}.ri-file-list-2-line:before{content:\"\\eced\"}.ri-file-list-3-fill:before{content:\"\\ecee\"}.ri-file-list-3-line:before{content:\"\\ecef\"}.ri-file-list-fill:before{content:\"\\ecf0\"}.ri-file-list-line:before{content:\"\\ecf1\"}.ri-file-lock-fill:before{content:\"\\ecf2\"}.ri-file-lock-line:before{content:\"\\ecf3\"}.ri-file-mark-fill:before{content:\"\\ecf4\"}.ri-file-mark-line:before{content:\"\\ecf5\"}.ri-file-music-fill:before{content:\"\\ecf6\"}.ri-file-music-line:before{content:\"\\ecf7\"}.ri-file-paper-2-fill:before{content:\"\\ecf8\"}.ri-file-paper-2-line:before{content:\"\\ecf9\"}.ri-file-paper-fill:before{content:\"\\ecfa\"}.ri-file-paper-line:before{content:\"\\ecfb\"}.ri-file-pdf-fill:before{content:\"\\ecfc\"}.ri-file-pdf-line:before{content:\"\\ecfd\"}.ri-file-ppt-2-fill:before{content:\"\\ecfe\"}.ri-file-ppt-2-line:before{content:\"\\ecff\"}.ri-file-ppt-fill:before{content:\"\\ed00\"}.ri-file-ppt-line:before{content:\"\\ed01\"}.ri-file-reduce-fill:before{content:\"\\ed02\"}.ri-file-reduce-line:before{content:\"\\ed03\"}.ri-file-search-fill:before{content:\"\\ed04\"}.ri-file-search-line:before{content:\"\\ed05\"}.ri-file-settings-fill:before{content:\"\\ed06\"}.ri-file-settings-line:before{content:\"\\ed07\"}.ri-file-shield-2-fill:before{content:\"\\ed08\"}.ri-file-shield-2-line:before{content:\"\\ed09\"}.ri-file-shield-fill:before{content:\"\\ed0a\"}.ri-file-shield-line:before{content:\"\\ed0b\"}.ri-file-shred-fill:before{content:\"\\ed0c\"}.ri-file-shred-line:before{content:\"\\ed0d\"}.ri-file-text-fill:before{content:\"\\ed0e\"}.ri-file-text-line:before{content:\"\\ed0f\"}.ri-file-transfer-fill:before{content:\"\\ed10\"}.ri-file-transfer-line:before{content:\"\\ed11\"}.ri-file-unknow-fill:before{content:\"\\ed12\"}.ri-file-unknow-line:before{content:\"\\ed13\"}.ri-file-upload-fill:before{content:\"\\ed14\"}.ri-file-upload-line:before{content:\"\\ed15\"}.ri-file-user-fill:before{content:\"\\ed16\"}.ri-file-user-line:before{content:\"\\ed17\"}.ri-file-warning-fill:before{content:\"\\ed18\"}.ri-file-warning-line:before{content:\"\\ed19\"}.ri-file-word-2-fill:before{content:\"\\ed1a\"}.ri-file-word-2-line:before{content:\"\\ed1b\"}.ri-file-word-fill:before{content:\"\\ed1c\"}.ri-file-word-line:before{content:\"\\ed1d\"}.ri-file-zip-fill:before{content:\"\\ed1e\"}.ri-file-zip-line:before{content:\"\\ed1f\"}.ri-film-fill:before{content:\"\\ed20\"}.ri-film-line:before{content:\"\\ed21\"}.ri-filter-2-fill:before{content:\"\\ed22\"}.ri-filter-2-line:before{content:\"\\ed23\"}.ri-filter-3-fill:before{content:\"\\ed24\"}.ri-filter-3-line:before{content:\"\\ed25\"}.ri-filter-fill:before{content:\"\\ed26\"}.ri-filter-line:before{content:\"\\ed27\"}.ri-filter-off-fill:before{content:\"\\ed28\"}.ri-filter-off-line:before{content:\"\\ed29\"}.ri-find-replace-fill:before{content:\"\\ed2a\"}.ri-find-replace-line:before{content:\"\\ed2b\"}.ri-finder-fill:before{content:\"\\ed2c\"}.ri-finder-line:before{content:\"\\ed2d\"}.ri-fingerprint-2-fill:before{content:\"\\ed2e\"}.ri-fingerprint-2-line:before{content:\"\\ed2f\"}.ri-fingerprint-fill:before{content:\"\\ed30\"}.ri-fingerprint-line:before{content:\"\\ed31\"}.ri-fire-fill:before{content:\"\\ed32\"}.ri-fire-line:before{content:\"\\ed33\"}.ri-firefox-fill:before{content:\"\\ed34\"}.ri-firefox-line:before{content:\"\\ed35\"}.ri-first-aid-kit-fill:before{content:\"\\ed36\"}.ri-first-aid-kit-line:before{content:\"\\ed37\"}.ri-flag-2-fill:before{content:\"\\ed38\"}.ri-flag-2-line:before{content:\"\\ed39\"}.ri-flag-fill:before{content:\"\\ed3a\"}.ri-flag-line:before{content:\"\\ed3b\"}.ri-flashlight-fill:before{content:\"\\ed3c\"}.ri-flashlight-line:before{content:\"\\ed3d\"}.ri-flask-fill:before{content:\"\\ed3e\"}.ri-flask-line:before{content:\"\\ed3f\"}.ri-flight-land-fill:before{content:\"\\ed40\"}.ri-flight-land-line:before{content:\"\\ed41\"}.ri-flight-takeoff-fill:before{content:\"\\ed42\"}.ri-flight-takeoff-line:before{content:\"\\ed43\"}.ri-flood-fill:before{content:\"\\ed44\"}.ri-flood-line:before{content:\"\\ed45\"}.ri-flow-chart:before{content:\"\\ed46\"}.ri-flutter-fill:before{content:\"\\ed47\"}.ri-flutter-line:before{content:\"\\ed48\"}.ri-focus-2-fill:before{content:\"\\ed49\"}.ri-focus-2-line:before{content:\"\\ed4a\"}.ri-focus-3-fill:before{content:\"\\ed4b\"}.ri-focus-3-line:before{content:\"\\ed4c\"}.ri-focus-fill:before{content:\"\\ed4d\"}.ri-focus-line:before{content:\"\\ed4e\"}.ri-foggy-fill:before{content:\"\\ed4f\"}.ri-foggy-line:before{content:\"\\ed50\"}.ri-folder-2-fill:before{content:\"\\ed51\"}.ri-folder-2-line:before{content:\"\\ed52\"}.ri-folder-3-fill:before{content:\"\\ed53\"}.ri-folder-3-line:before{content:\"\\ed54\"}.ri-folder-4-fill:before{content:\"\\ed55\"}.ri-folder-4-line:before{content:\"\\ed56\"}.ri-folder-5-fill:before{content:\"\\ed57\"}.ri-folder-5-line:before{content:\"\\ed58\"}.ri-folder-add-fill:before{content:\"\\ed59\"}.ri-folder-add-line:before{content:\"\\ed5a\"}.ri-folder-chart-2-fill:before{content:\"\\ed5b\"}.ri-folder-chart-2-line:before{content:\"\\ed5c\"}.ri-folder-chart-fill:before{content:\"\\ed5d\"}.ri-folder-chart-line:before{content:\"\\ed5e\"}.ri-folder-download-fill:before{content:\"\\ed5f\"}.ri-folder-download-line:before{content:\"\\ed60\"}.ri-folder-fill:before{content:\"\\ed61\"}.ri-folder-forbid-fill:before{content:\"\\ed62\"}.ri-folder-forbid-line:before{content:\"\\ed63\"}.ri-folder-history-fill:before{content:\"\\ed64\"}.ri-folder-history-line:before{content:\"\\ed65\"}.ri-folder-info-fill:before{content:\"\\ed66\"}.ri-folder-info-line:before{content:\"\\ed67\"}.ri-folder-keyhole-fill:before{content:\"\\ed68\"}.ri-folder-keyhole-line:before{content:\"\\ed69\"}.ri-folder-line:before{content:\"\\ed6a\"}.ri-folder-lock-fill:before{content:\"\\ed6b\"}.ri-folder-lock-line:before{content:\"\\ed6c\"}.ri-folder-music-fill:before{content:\"\\ed6d\"}.ri-folder-music-line:before{content:\"\\ed6e\"}.ri-folder-open-fill:before{content:\"\\ed6f\"}.ri-folder-open-line:before{content:\"\\ed70\"}.ri-folder-received-fill:before{content:\"\\ed71\"}.ri-folder-received-line:before{content:\"\\ed72\"}.ri-folder-reduce-fill:before{content:\"\\ed73\"}.ri-folder-reduce-line:before{content:\"\\ed74\"}.ri-folder-settings-fill:before{content:\"\\ed75\"}.ri-folder-settings-line:before{content:\"\\ed76\"}.ri-folder-shared-fill:before{content:\"\\ed77\"}.ri-folder-shared-line:before{content:\"\\ed78\"}.ri-folder-shield-2-fill:before{content:\"\\ed79\"}.ri-folder-shield-2-line:before{content:\"\\ed7a\"}.ri-folder-shield-fill:before{content:\"\\ed7b\"}.ri-folder-shield-line:before{content:\"\\ed7c\"}.ri-folder-transfer-fill:before{content:\"\\ed7d\"}.ri-folder-transfer-line:before{content:\"\\ed7e\"}.ri-folder-unknow-fill:before{content:\"\\ed7f\"}.ri-folder-unknow-line:before{content:\"\\ed80\"}.ri-folder-upload-fill:before{content:\"\\ed81\"}.ri-folder-upload-line:before{content:\"\\ed82\"}.ri-folder-user-fill:before{content:\"\\ed83\"}.ri-folder-user-line:before{content:\"\\ed84\"}.ri-folder-warning-fill:before{content:\"\\ed85\"}.ri-folder-warning-line:before{content:\"\\ed86\"}.ri-folder-zip-fill:before{content:\"\\ed87\"}.ri-folder-zip-line:before{content:\"\\ed88\"}.ri-folders-fill:before{content:\"\\ed89\"}.ri-folders-line:before{content:\"\\ed8a\"}.ri-font-color:before{content:\"\\ed8b\"}.ri-font-size-2:before{content:\"\\ed8c\"}.ri-font-size:before{content:\"\\ed8d\"}.ri-football-fill:before{content:\"\\ed8e\"}.ri-football-line:before{content:\"\\ed8f\"}.ri-footprint-fill:before{content:\"\\ed90\"}.ri-footprint-line:before{content:\"\\ed91\"}.ri-forbid-2-fill:before{content:\"\\ed92\"}.ri-forbid-2-line:before{content:\"\\ed93\"}.ri-forbid-fill:before{content:\"\\ed94\"}.ri-forbid-line:before{content:\"\\ed95\"}.ri-format-clear:before{content:\"\\ed96\"}.ri-fridge-fill:before{content:\"\\ed97\"}.ri-fridge-line:before{content:\"\\ed98\"}.ri-fullscreen-exit-fill:before{content:\"\\ed99\"}.ri-fullscreen-exit-line:before{content:\"\\ed9a\"}.ri-fullscreen-fill:before{content:\"\\ed9b\"}.ri-fullscreen-line:before{content:\"\\ed9c\"}.ri-function-fill:before{content:\"\\ed9d\"}.ri-function-line:before{content:\"\\ed9e\"}.ri-functions:before{content:\"\\ed9f\"}.ri-funds-box-fill:before{content:\"\\eda0\"}.ri-funds-box-line:before{content:\"\\eda1\"}.ri-funds-fill:before{content:\"\\eda2\"}.ri-funds-line:before{content:\"\\eda3\"}.ri-gallery-fill:before{content:\"\\eda4\"}.ri-gallery-line:before{content:\"\\eda5\"}.ri-gallery-upload-fill:before{content:\"\\eda6\"}.ri-gallery-upload-line:before{content:\"\\eda7\"}.ri-game-fill:before{content:\"\\eda8\"}.ri-game-line:before{content:\"\\eda9\"}.ri-gamepad-fill:before{content:\"\\edaa\"}.ri-gamepad-line:before{content:\"\\edab\"}.ri-gas-station-fill:before{content:\"\\edac\"}.ri-gas-station-line:before{content:\"\\edad\"}.ri-gatsby-fill:before{content:\"\\edae\"}.ri-gatsby-line:before{content:\"\\edaf\"}.ri-genderless-fill:before{content:\"\\edb0\"}.ri-genderless-line:before{content:\"\\edb1\"}.ri-ghost-2-fill:before{content:\"\\edb2\"}.ri-ghost-2-line:before{content:\"\\edb3\"}.ri-ghost-fill:before{content:\"\\edb4\"}.ri-ghost-line:before{content:\"\\edb5\"}.ri-ghost-smile-fill:before{content:\"\\edb6\"}.ri-ghost-smile-line:before{content:\"\\edb7\"}.ri-gift-2-fill:before{content:\"\\edb8\"}.ri-gift-2-line:before{content:\"\\edb9\"}.ri-gift-fill:before{content:\"\\edba\"}.ri-gift-line:before{content:\"\\edbb\"}.ri-git-branch-fill:before{content:\"\\edbc\"}.ri-git-branch-line:before{content:\"\\edbd\"}.ri-git-commit-fill:before{content:\"\\edbe\"}.ri-git-commit-line:before{content:\"\\edbf\"}.ri-git-merge-fill:before{content:\"\\edc0\"}.ri-git-merge-line:before{content:\"\\edc1\"}.ri-git-pull-request-fill:before{content:\"\\edc2\"}.ri-git-pull-request-line:before{content:\"\\edc3\"}.ri-git-repository-commits-fill:before{content:\"\\edc4\"}.ri-git-repository-commits-line:before{content:\"\\edc5\"}.ri-git-repository-fill:before{content:\"\\edc6\"}.ri-git-repository-line:before{content:\"\\edc7\"}.ri-git-repository-private-fill:before{content:\"\\edc8\"}.ri-git-repository-private-line:before{content:\"\\edc9\"}.ri-github-fill:before{content:\"\\edca\"}.ri-github-line:before{content:\"\\edcb\"}.ri-gitlab-fill:before{content:\"\\edcc\"}.ri-gitlab-line:before{content:\"\\edcd\"}.ri-global-fill:before{content:\"\\edce\"}.ri-global-line:before{content:\"\\edcf\"}.ri-globe-fill:before{content:\"\\edd0\"}.ri-globe-line:before{content:\"\\edd1\"}.ri-goblet-fill:before{content:\"\\edd2\"}.ri-goblet-line:before{content:\"\\edd3\"}.ri-google-fill:before{content:\"\\edd4\"}.ri-google-line:before{content:\"\\edd5\"}.ri-google-play-fill:before{content:\"\\edd6\"}.ri-google-play-line:before{content:\"\\edd7\"}.ri-government-fill:before{content:\"\\edd8\"}.ri-government-line:before{content:\"\\edd9\"}.ri-gps-fill:before{content:\"\\edda\"}.ri-gps-line:before{content:\"\\eddb\"}.ri-gradienter-fill:before{content:\"\\eddc\"}.ri-gradienter-line:before{content:\"\\eddd\"}.ri-grid-fill:before{content:\"\\edde\"}.ri-grid-line:before{content:\"\\eddf\"}.ri-group-2-fill:before{content:\"\\ede0\"}.ri-group-2-line:before{content:\"\\ede1\"}.ri-group-fill:before{content:\"\\ede2\"}.ri-group-line:before{content:\"\\ede3\"}.ri-guide-fill:before{content:\"\\ede4\"}.ri-guide-line:before{content:\"\\ede5\"}.ri-h-1:before{content:\"\\ede6\"}.ri-h-2:before{content:\"\\ede7\"}.ri-h-3:before{content:\"\\ede8\"}.ri-h-4:before{content:\"\\ede9\"}.ri-h-5:before{content:\"\\edea\"}.ri-h-6:before{content:\"\\edeb\"}.ri-hail-fill:before{content:\"\\edec\"}.ri-hail-line:before{content:\"\\eded\"}.ri-hammer-fill:before{content:\"\\edee\"}.ri-hammer-line:before{content:\"\\edef\"}.ri-hand-coin-fill:before{content:\"\\edf0\"}.ri-hand-coin-line:before{content:\"\\edf1\"}.ri-hand-heart-fill:before{content:\"\\edf2\"}.ri-hand-heart-line:before{content:\"\\edf3\"}.ri-hand-sanitizer-fill:before{content:\"\\edf4\"}.ri-hand-sanitizer-line:before{content:\"\\edf5\"}.ri-handbag-fill:before{content:\"\\edf6\"}.ri-handbag-line:before{content:\"\\edf7\"}.ri-hard-drive-2-fill:before{content:\"\\edf8\"}.ri-hard-drive-2-line:before{content:\"\\edf9\"}.ri-hard-drive-fill:before{content:\"\\edfa\"}.ri-hard-drive-line:before{content:\"\\edfb\"}.ri-hashtag:before{content:\"\\edfc\"}.ri-haze-2-fill:before{content:\"\\edfd\"}.ri-haze-2-line:before{content:\"\\edfe\"}.ri-haze-fill:before{content:\"\\edff\"}.ri-haze-line:before{content:\"\\ee00\"}.ri-hd-fill:before{content:\"\\ee01\"}.ri-hd-line:before{content:\"\\ee02\"}.ri-heading:before{content:\"\\ee03\"}.ri-headphone-fill:before{content:\"\\ee04\"}.ri-headphone-line:before{content:\"\\ee05\"}.ri-health-book-fill:before{content:\"\\ee06\"}.ri-health-book-line:before{content:\"\\ee07\"}.ri-heart-2-fill:before{content:\"\\ee08\"}.ri-heart-2-line:before{content:\"\\ee09\"}.ri-heart-3-fill:before{content:\"\\ee0a\"}.ri-heart-3-line:before{content:\"\\ee0b\"}.ri-heart-add-fill:before{content:\"\\ee0c\"}.ri-heart-add-line:before{content:\"\\ee0d\"}.ri-heart-fill:before{content:\"\\ee0e\"}.ri-heart-line:before{content:\"\\ee0f\"}.ri-heart-pulse-fill:before{content:\"\\ee10\"}.ri-heart-pulse-line:before{content:\"\\ee11\"}.ri-hearts-fill:before{content:\"\\ee12\"}.ri-hearts-line:before{content:\"\\ee13\"}.ri-heavy-showers-fill:before{content:\"\\ee14\"}.ri-heavy-showers-line:before{content:\"\\ee15\"}.ri-history-fill:before{content:\"\\ee16\"}.ri-history-line:before{content:\"\\ee17\"}.ri-home-2-fill:before{content:\"\\ee18\"}.ri-home-2-line:before{content:\"\\ee19\"}.ri-home-3-fill:before{content:\"\\ee1a\"}.ri-home-3-line:before{content:\"\\ee1b\"}.ri-home-4-fill:before{content:\"\\ee1c\"}.ri-home-4-line:before{content:\"\\ee1d\"}.ri-home-5-fill:before{content:\"\\ee1e\"}.ri-home-5-line:before{content:\"\\ee1f\"}.ri-home-6-fill:before{content:\"\\ee20\"}.ri-home-6-line:before{content:\"\\ee21\"}.ri-home-7-fill:before{content:\"\\ee22\"}.ri-home-7-line:before{content:\"\\ee23\"}.ri-home-8-fill:before{content:\"\\ee24\"}.ri-home-8-line:before{content:\"\\ee25\"}.ri-home-fill:before{content:\"\\ee26\"}.ri-home-gear-fill:before{content:\"\\ee27\"}.ri-home-gear-line:before{content:\"\\ee28\"}.ri-home-heart-fill:before{content:\"\\ee29\"}.ri-home-heart-line:before{content:\"\\ee2a\"}.ri-home-line:before{content:\"\\ee2b\"}.ri-home-smile-2-fill:before{content:\"\\ee2c\"}.ri-home-smile-2-line:before{content:\"\\ee2d\"}.ri-home-smile-fill:before{content:\"\\ee2e\"}.ri-home-smile-line:before{content:\"\\ee2f\"}.ri-home-wifi-fill:before{content:\"\\ee30\"}.ri-home-wifi-line:before{content:\"\\ee31\"}.ri-honor-of-kings-fill:before{content:\"\\ee32\"}.ri-honor-of-kings-line:before{content:\"\\ee33\"}.ri-honour-fill:before{content:\"\\ee34\"}.ri-honour-line:before{content:\"\\ee35\"}.ri-hospital-fill:before{content:\"\\ee36\"}.ri-hospital-line:before{content:\"\\ee37\"}.ri-hotel-bed-fill:before{content:\"\\ee38\"}.ri-hotel-bed-line:before{content:\"\\ee39\"}.ri-hotel-fill:before{content:\"\\ee3a\"}.ri-hotel-line:before{content:\"\\ee3b\"}.ri-hotspot-fill:before{content:\"\\ee3c\"}.ri-hotspot-line:before{content:\"\\ee3d\"}.ri-hq-fill:before{content:\"\\ee3e\"}.ri-hq-line:before{content:\"\\ee3f\"}.ri-html5-fill:before{content:\"\\ee40\"}.ri-html5-line:before{content:\"\\ee41\"}.ri-ie-fill:before{content:\"\\ee42\"}.ri-ie-line:before{content:\"\\ee43\"}.ri-image-2-fill:before{content:\"\\ee44\"}.ri-image-2-line:before{content:\"\\ee45\"}.ri-image-add-fill:before{content:\"\\ee46\"}.ri-image-add-line:before{content:\"\\ee47\"}.ri-image-edit-fill:before{content:\"\\ee48\"}.ri-image-edit-line:before{content:\"\\ee49\"}.ri-image-fill:before{content:\"\\ee4a\"}.ri-image-line:before{content:\"\\ee4b\"}.ri-inbox-archive-fill:before{content:\"\\ee4c\"}.ri-inbox-archive-line:before{content:\"\\ee4d\"}.ri-inbox-fill:before{content:\"\\ee4e\"}.ri-inbox-line:before{content:\"\\ee4f\"}.ri-inbox-unarchive-fill:before{content:\"\\ee50\"}.ri-inbox-unarchive-line:before{content:\"\\ee51\"}.ri-increase-decrease-fill:before{content:\"\\ee52\"}.ri-increase-decrease-line:before{content:\"\\ee53\"}.ri-indent-decrease:before{content:\"\\ee54\"}.ri-indent-increase:before{content:\"\\ee55\"}.ri-indeterminate-circle-fill:before{content:\"\\ee56\"}.ri-indeterminate-circle-line:before{content:\"\\ee57\"}.ri-information-fill:before{content:\"\\ee58\"}.ri-information-line:before{content:\"\\ee59\"}.ri-infrared-thermometer-fill:before{content:\"\\ee5a\"}.ri-infrared-thermometer-line:before{content:\"\\ee5b\"}.ri-ink-bottle-fill:before{content:\"\\ee5c\"}.ri-ink-bottle-line:before{content:\"\\ee5d\"}.ri-input-cursor-move:before{content:\"\\ee5e\"}.ri-input-method-fill:before{content:\"\\ee5f\"}.ri-input-method-line:before{content:\"\\ee60\"}.ri-insert-column-left:before{content:\"\\ee61\"}.ri-insert-column-right:before{content:\"\\ee62\"}.ri-insert-row-bottom:before{content:\"\\ee63\"}.ri-insert-row-top:before{content:\"\\ee64\"}.ri-instagram-fill:before{content:\"\\ee65\"}.ri-instagram-line:before{content:\"\\ee66\"}.ri-install-fill:before{content:\"\\ee67\"}.ri-install-line:before{content:\"\\ee68\"}.ri-invision-fill:before{content:\"\\ee69\"}.ri-invision-line:before{content:\"\\ee6a\"}.ri-italic:before{content:\"\\ee6b\"}.ri-kakao-talk-fill:before{content:\"\\ee6c\"}.ri-kakao-talk-line:before{content:\"\\ee6d\"}.ri-key-2-fill:before{content:\"\\ee6e\"}.ri-key-2-line:before{content:\"\\ee6f\"}.ri-key-fill:before{content:\"\\ee70\"}.ri-key-line:before{content:\"\\ee71\"}.ri-keyboard-box-fill:before{content:\"\\ee72\"}.ri-keyboard-box-line:before{content:\"\\ee73\"}.ri-keyboard-fill:before{content:\"\\ee74\"}.ri-keyboard-line:before{content:\"\\ee75\"}.ri-keynote-fill:before{content:\"\\ee76\"}.ri-keynote-line:before{content:\"\\ee77\"}.ri-knife-blood-fill:before{content:\"\\ee78\"}.ri-knife-blood-line:before{content:\"\\ee79\"}.ri-knife-fill:before{content:\"\\ee7a\"}.ri-knife-line:before{content:\"\\ee7b\"}.ri-landscape-fill:before{content:\"\\ee7c\"}.ri-landscape-line:before{content:\"\\ee7d\"}.ri-layout-2-fill:before{content:\"\\ee7e\"}.ri-layout-2-line:before{content:\"\\ee7f\"}.ri-layout-3-fill:before{content:\"\\ee80\"}.ri-layout-3-line:before{content:\"\\ee81\"}.ri-layout-4-fill:before{content:\"\\ee82\"}.ri-layout-4-line:before{content:\"\\ee83\"}.ri-layout-5-fill:before{content:\"\\ee84\"}.ri-layout-5-line:before{content:\"\\ee85\"}.ri-layout-6-fill:before{content:\"\\ee86\"}.ri-layout-6-line:before{content:\"\\ee87\"}.ri-layout-bottom-2-fill:before{content:\"\\ee88\"}.ri-layout-bottom-2-line:before{content:\"\\ee89\"}.ri-layout-bottom-fill:before{content:\"\\ee8a\"}.ri-layout-bottom-line:before{content:\"\\ee8b\"}.ri-layout-column-fill:before{content:\"\\ee8c\"}.ri-layout-column-line:before{content:\"\\ee8d\"}.ri-layout-fill:before{content:\"\\ee8e\"}.ri-layout-grid-fill:before{content:\"\\ee8f\"}.ri-layout-grid-line:before{content:\"\\ee90\"}.ri-layout-left-2-fill:before{content:\"\\ee91\"}.ri-layout-left-2-line:before{content:\"\\ee92\"}.ri-layout-left-fill:before{content:\"\\ee93\"}.ri-layout-left-line:before{content:\"\\ee94\"}.ri-layout-line:before{content:\"\\ee95\"}.ri-layout-masonry-fill:before{content:\"\\ee96\"}.ri-layout-masonry-line:before{content:\"\\ee97\"}.ri-layout-right-2-fill:before{content:\"\\ee98\"}.ri-layout-right-2-line:before{content:\"\\ee99\"}.ri-layout-right-fill:before{content:\"\\ee9a\"}.ri-layout-right-line:before{content:\"\\ee9b\"}.ri-layout-row-fill:before{content:\"\\ee9c\"}.ri-layout-row-line:before{content:\"\\ee9d\"}.ri-layout-top-2-fill:before{content:\"\\ee9e\"}.ri-layout-top-2-line:before{content:\"\\ee9f\"}.ri-layout-top-fill:before{content:\"\\eea0\"}.ri-layout-top-line:before{content:\"\\eea1\"}.ri-leaf-fill:before{content:\"\\eea2\"}.ri-leaf-line:before{content:\"\\eea3\"}.ri-lifebuoy-fill:before{content:\"\\eea4\"}.ri-lifebuoy-line:before{content:\"\\eea5\"}.ri-lightbulb-fill:before{content:\"\\eea6\"}.ri-lightbulb-flash-fill:before{content:\"\\eea7\"}.ri-lightbulb-flash-line:before{content:\"\\eea8\"}.ri-lightbulb-line:before{content:\"\\eea9\"}.ri-line-chart-fill:before{content:\"\\eeaa\"}.ri-line-chart-line:before{content:\"\\eeab\"}.ri-line-fill:before{content:\"\\eeac\"}.ri-line-height:before{content:\"\\eead\"}.ri-line-line:before{content:\"\\eeae\"}.ri-link-m:before{content:\"\\eeaf\"}.ri-link-unlink-m:before{content:\"\\eeb0\"}.ri-link-unlink:before{content:\"\\eeb1\"}.ri-link:before{content:\"\\eeb2\"}.ri-linkedin-box-fill:before{content:\"\\eeb3\"}.ri-linkedin-box-line:before{content:\"\\eeb4\"}.ri-linkedin-fill:before{content:\"\\eeb5\"}.ri-linkedin-line:before{content:\"\\eeb6\"}.ri-links-fill:before{content:\"\\eeb7\"}.ri-links-line:before{content:\"\\eeb8\"}.ri-list-check-2:before{content:\"\\eeb9\"}.ri-list-check:before{content:\"\\eeba\"}.ri-list-ordered:before{content:\"\\eebb\"}.ri-list-settings-fill:before{content:\"\\eebc\"}.ri-list-settings-line:before{content:\"\\eebd\"}.ri-list-unordered:before{content:\"\\eebe\"}.ri-live-fill:before{content:\"\\eebf\"}.ri-live-line:before{content:\"\\eec0\"}.ri-loader-2-fill:before{content:\"\\eec1\"}.ri-loader-2-line:before{content:\"\\eec2\"}.ri-loader-3-fill:before{content:\"\\eec3\"}.ri-loader-3-line:before{content:\"\\eec4\"}.ri-loader-4-fill:before{content:\"\\eec5\"}.ri-loader-4-line:before{content:\"\\eec6\"}.ri-loader-5-fill:before{content:\"\\eec7\"}.ri-loader-5-line:before{content:\"\\eec8\"}.ri-loader-fill:before{content:\"\\eec9\"}.ri-loader-line:before{content:\"\\eeca\"}.ri-lock-2-fill:before{content:\"\\eecb\"}.ri-lock-2-line:before{content:\"\\eecc\"}.ri-lock-fill:before{content:\"\\eecd\"}.ri-lock-line:before{content:\"\\eece\"}.ri-lock-password-fill:before{content:\"\\eecf\"}.ri-lock-password-line:before{content:\"\\eed0\"}.ri-lock-unlock-fill:before{content:\"\\eed1\"}.ri-lock-unlock-line:before{content:\"\\eed2\"}.ri-login-box-fill:before{content:\"\\eed3\"}.ri-login-box-line:before{content:\"\\eed4\"}.ri-login-circle-fill:before{content:\"\\eed5\"}.ri-login-circle-line:before{content:\"\\eed6\"}.ri-logout-box-fill:before{content:\"\\eed7\"}.ri-logout-box-line:before{content:\"\\eed8\"}.ri-logout-box-r-fill:before{content:\"\\eed9\"}.ri-logout-box-r-line:before{content:\"\\eeda\"}.ri-logout-circle-fill:before{content:\"\\eedb\"}.ri-logout-circle-line:before{content:\"\\eedc\"}.ri-logout-circle-r-fill:before{content:\"\\eedd\"}.ri-logout-circle-r-line:before{content:\"\\eede\"}.ri-luggage-cart-fill:before{content:\"\\eedf\"}.ri-luggage-cart-line:before{content:\"\\eee0\"}.ri-luggage-deposit-fill:before{content:\"\\eee1\"}.ri-luggage-deposit-line:before{content:\"\\eee2\"}.ri-lungs-fill:before{content:\"\\eee3\"}.ri-lungs-line:before{content:\"\\eee4\"}.ri-mac-fill:before{content:\"\\eee5\"}.ri-mac-line:before{content:\"\\eee6\"}.ri-macbook-fill:before{content:\"\\eee7\"}.ri-macbook-line:before{content:\"\\eee8\"}.ri-magic-fill:before{content:\"\\eee9\"}.ri-magic-line:before{content:\"\\eeea\"}.ri-mail-add-fill:before{content:\"\\eeeb\"}.ri-mail-add-line:before{content:\"\\eeec\"}.ri-mail-check-fill:before{content:\"\\eeed\"}.ri-mail-check-line:before{content:\"\\eeee\"}.ri-mail-close-fill:before{content:\"\\eeef\"}.ri-mail-close-line:before{content:\"\\eef0\"}.ri-mail-download-fill:before{content:\"\\eef1\"}.ri-mail-download-line:before{content:\"\\eef2\"}.ri-mail-fill:before{content:\"\\eef3\"}.ri-mail-forbid-fill:before{content:\"\\eef4\"}.ri-mail-forbid-line:before{content:\"\\eef5\"}.ri-mail-line:before{content:\"\\eef6\"}.ri-mail-lock-fill:before{content:\"\\eef7\"}.ri-mail-lock-line:before{content:\"\\eef8\"}.ri-mail-open-fill:before{content:\"\\eef9\"}.ri-mail-open-line:before{content:\"\\eefa\"}.ri-mail-send-fill:before{content:\"\\eefb\"}.ri-mail-send-line:before{content:\"\\eefc\"}.ri-mail-settings-fill:before{content:\"\\eefd\"}.ri-mail-settings-line:before{content:\"\\eefe\"}.ri-mail-star-fill:before{content:\"\\eeff\"}.ri-mail-star-line:before{content:\"\\ef00\"}.ri-mail-unread-fill:before{content:\"\\ef01\"}.ri-mail-unread-line:before{content:\"\\ef02\"}.ri-mail-volume-fill:before{content:\"\\ef03\"}.ri-mail-volume-line:before{content:\"\\ef04\"}.ri-map-2-fill:before{content:\"\\ef05\"}.ri-map-2-line:before{content:\"\\ef06\"}.ri-map-fill:before{content:\"\\ef07\"}.ri-map-line:before{content:\"\\ef08\"}.ri-map-pin-2-fill:before{content:\"\\ef09\"}.ri-map-pin-2-line:before{content:\"\\ef0a\"}.ri-map-pin-3-fill:before{content:\"\\ef0b\"}.ri-map-pin-3-line:before{content:\"\\ef0c\"}.ri-map-pin-4-fill:before{content:\"\\ef0d\"}.ri-map-pin-4-line:before{content:\"\\ef0e\"}.ri-map-pin-5-fill:before{content:\"\\ef0f\"}.ri-map-pin-5-line:before{content:\"\\ef10\"}.ri-map-pin-add-fill:before{content:\"\\ef11\"}.ri-map-pin-add-line:before{content:\"\\ef12\"}.ri-map-pin-fill:before{content:\"\\ef13\"}.ri-map-pin-line:before{content:\"\\ef14\"}.ri-map-pin-range-fill:before{content:\"\\ef15\"}.ri-map-pin-range-line:before{content:\"\\ef16\"}.ri-map-pin-time-fill:before{content:\"\\ef17\"}.ri-map-pin-time-line:before{content:\"\\ef18\"}.ri-map-pin-user-fill:before{content:\"\\ef19\"}.ri-map-pin-user-line:before{content:\"\\ef1a\"}.ri-mark-pen-fill:before{content:\"\\ef1b\"}.ri-mark-pen-line:before{content:\"\\ef1c\"}.ri-markdown-fill:before{content:\"\\ef1d\"}.ri-markdown-line:before{content:\"\\ef1e\"}.ri-markup-fill:before{content:\"\\ef1f\"}.ri-markup-line:before{content:\"\\ef20\"}.ri-mastercard-fill:before{content:\"\\ef21\"}.ri-mastercard-line:before{content:\"\\ef22\"}.ri-mastodon-fill:before{content:\"\\ef23\"}.ri-mastodon-line:before{content:\"\\ef24\"}.ri-medal-2-fill:before{content:\"\\ef25\"}.ri-medal-2-line:before{content:\"\\ef26\"}.ri-medal-fill:before{content:\"\\ef27\"}.ri-medal-line:before{content:\"\\ef28\"}.ri-medicine-bottle-fill:before{content:\"\\ef29\"}.ri-medicine-bottle-line:before{content:\"\\ef2a\"}.ri-medium-fill:before{content:\"\\ef2b\"}.ri-medium-line:before{content:\"\\ef2c\"}.ri-men-fill:before{content:\"\\ef2d\"}.ri-men-line:before{content:\"\\ef2e\"}.ri-mental-health-fill:before{content:\"\\ef2f\"}.ri-mental-health-line:before{content:\"\\ef30\"}.ri-menu-2-fill:before{content:\"\\ef31\"}.ri-menu-2-line:before{content:\"\\ef32\"}.ri-menu-3-fill:before{content:\"\\ef33\"}.ri-menu-3-line:before{content:\"\\ef34\"}.ri-menu-4-fill:before{content:\"\\ef35\"}.ri-menu-4-line:before{content:\"\\ef36\"}.ri-menu-5-fill:before{content:\"\\ef37\"}.ri-menu-5-line:before{content:\"\\ef38\"}.ri-menu-add-fill:before{content:\"\\ef39\"}.ri-menu-add-line:before{content:\"\\ef3a\"}.ri-menu-fill:before{content:\"\\ef3b\"}.ri-menu-fold-fill:before{content:\"\\ef3c\"}.ri-menu-fold-line:before{content:\"\\ef3d\"}.ri-menu-line:before{content:\"\\ef3e\"}.ri-menu-unfold-fill:before{content:\"\\ef3f\"}.ri-menu-unfold-line:before{content:\"\\ef40\"}.ri-merge-cells-horizontal:before{content:\"\\ef41\"}.ri-merge-cells-vertical:before{content:\"\\ef42\"}.ri-message-2-fill:before{content:\"\\ef43\"}.ri-message-2-line:before{content:\"\\ef44\"}.ri-message-3-fill:before{content:\"\\ef45\"}.ri-message-3-line:before{content:\"\\ef46\"}.ri-message-fill:before{content:\"\\ef47\"}.ri-message-line:before{content:\"\\ef48\"}.ri-messenger-fill:before{content:\"\\ef49\"}.ri-messenger-line:before{content:\"\\ef4a\"}.ri-meteor-fill:before{content:\"\\ef4b\"}.ri-meteor-line:before{content:\"\\ef4c\"}.ri-mic-2-fill:before{content:\"\\ef4d\"}.ri-mic-2-line:before{content:\"\\ef4e\"}.ri-mic-fill:before{content:\"\\ef4f\"}.ri-mic-line:before{content:\"\\ef50\"}.ri-mic-off-fill:before{content:\"\\ef51\"}.ri-mic-off-line:before{content:\"\\ef52\"}.ri-mickey-fill:before{content:\"\\ef53\"}.ri-mickey-line:before{content:\"\\ef54\"}.ri-microscope-fill:before{content:\"\\ef55\"}.ri-microscope-line:before{content:\"\\ef56\"}.ri-microsoft-fill:before{content:\"\\ef57\"}.ri-microsoft-line:before{content:\"\\ef58\"}.ri-mind-map:before{content:\"\\ef59\"}.ri-mini-program-fill:before{content:\"\\ef5a\"}.ri-mini-program-line:before{content:\"\\ef5b\"}.ri-mist-fill:before{content:\"\\ef5c\"}.ri-mist-line:before{content:\"\\ef5d\"}.ri-money-cny-box-fill:before{content:\"\\ef5e\"}.ri-money-cny-box-line:before{content:\"\\ef5f\"}.ri-money-cny-circle-fill:before{content:\"\\ef60\"}.ri-money-cny-circle-line:before{content:\"\\ef61\"}.ri-money-dollar-box-fill:before{content:\"\\ef62\"}.ri-money-dollar-box-line:before{content:\"\\ef63\"}.ri-money-dollar-circle-fill:before{content:\"\\ef64\"}.ri-money-dollar-circle-line:before{content:\"\\ef65\"}.ri-money-euro-box-fill:before{content:\"\\ef66\"}.ri-money-euro-box-line:before{content:\"\\ef67\"}.ri-money-euro-circle-fill:before{content:\"\\ef68\"}.ri-money-euro-circle-line:before{content:\"\\ef69\"}.ri-money-pound-box-fill:before{content:\"\\ef6a\"}.ri-money-pound-box-line:before{content:\"\\ef6b\"}.ri-money-pound-circle-fill:before{content:\"\\ef6c\"}.ri-money-pound-circle-line:before{content:\"\\ef6d\"}.ri-moon-clear-fill:before{content:\"\\ef6e\"}.ri-moon-clear-line:before{content:\"\\ef6f\"}.ri-moon-cloudy-fill:before{content:\"\\ef70\"}.ri-moon-cloudy-line:before{content:\"\\ef71\"}.ri-moon-fill:before{content:\"\\ef72\"}.ri-moon-foggy-fill:before{content:\"\\ef73\"}.ri-moon-foggy-line:before{content:\"\\ef74\"}.ri-moon-line:before{content:\"\\ef75\"}.ri-more-2-fill:before{content:\"\\ef76\"}.ri-more-2-line:before{content:\"\\ef77\"}.ri-more-fill:before{content:\"\\ef78\"}.ri-more-line:before{content:\"\\ef79\"}.ri-motorbike-fill:before{content:\"\\ef7a\"}.ri-motorbike-line:before{content:\"\\ef7b\"}.ri-mouse-fill:before{content:\"\\ef7c\"}.ri-mouse-line:before{content:\"\\ef7d\"}.ri-movie-2-fill:before{content:\"\\ef7e\"}.ri-movie-2-line:before{content:\"\\ef7f\"}.ri-movie-fill:before{content:\"\\ef80\"}.ri-movie-line:before{content:\"\\ef81\"}.ri-music-2-fill:before{content:\"\\ef82\"}.ri-music-2-line:before{content:\"\\ef83\"}.ri-music-fill:before{content:\"\\ef84\"}.ri-music-line:before{content:\"\\ef85\"}.ri-mv-fill:before{content:\"\\ef86\"}.ri-mv-line:before{content:\"\\ef87\"}.ri-navigation-fill:before{content:\"\\ef88\"}.ri-navigation-line:before{content:\"\\ef89\"}.ri-netease-cloud-music-fill:before{content:\"\\ef8a\"}.ri-netease-cloud-music-line:before{content:\"\\ef8b\"}.ri-netflix-fill:before{content:\"\\ef8c\"}.ri-netflix-line:before{content:\"\\ef8d\"}.ri-newspaper-fill:before{content:\"\\ef8e\"}.ri-newspaper-line:before{content:\"\\ef8f\"}.ri-node-tree:before{content:\"\\ef90\"}.ri-notification-2-fill:before{content:\"\\ef91\"}.ri-notification-2-line:before{content:\"\\ef92\"}.ri-notification-3-fill:before{content:\"\\ef93\"}.ri-notification-3-line:before{content:\"\\ef94\"}.ri-notification-4-fill:before{content:\"\\ef95\"}.ri-notification-4-line:before{content:\"\\ef96\"}.ri-notification-badge-fill:before{content:\"\\ef97\"}.ri-notification-badge-line:before{content:\"\\ef98\"}.ri-notification-fill:before{content:\"\\ef99\"}.ri-notification-line:before{content:\"\\ef9a\"}.ri-notification-off-fill:before{content:\"\\ef9b\"}.ri-notification-off-line:before{content:\"\\ef9c\"}.ri-npmjs-fill:before{content:\"\\ef9d\"}.ri-npmjs-line:before{content:\"\\ef9e\"}.ri-number-0:before{content:\"\\ef9f\"}.ri-number-1:before{content:\"\\efa0\"}.ri-number-2:before{content:\"\\efa1\"}.ri-number-3:before{content:\"\\efa2\"}.ri-number-4:before{content:\"\\efa3\"}.ri-number-5:before{content:\"\\efa4\"}.ri-number-6:before{content:\"\\efa5\"}.ri-number-7:before{content:\"\\efa6\"}.ri-number-8:before{content:\"\\efa7\"}.ri-number-9:before{content:\"\\efa8\"}.ri-numbers-fill:before{content:\"\\efa9\"}.ri-numbers-line:before{content:\"\\efaa\"}.ri-nurse-fill:before{content:\"\\efab\"}.ri-nurse-line:before{content:\"\\efac\"}.ri-oil-fill:before{content:\"\\efad\"}.ri-oil-line:before{content:\"\\efae\"}.ri-omega:before{content:\"\\efaf\"}.ri-open-arm-fill:before{content:\"\\efb0\"}.ri-open-arm-line:before{content:\"\\efb1\"}.ri-open-source-fill:before{content:\"\\efb2\"}.ri-open-source-line:before{content:\"\\efb3\"}.ri-opera-fill:before{content:\"\\efb4\"}.ri-opera-line:before{content:\"\\efb5\"}.ri-order-play-fill:before{content:\"\\efb6\"}.ri-order-play-line:before{content:\"\\efb7\"}.ri-organization-chart:before{content:\"\\efb8\"}.ri-outlet-2-fill:before{content:\"\\efb9\"}.ri-outlet-2-line:before{content:\"\\efba\"}.ri-outlet-fill:before{content:\"\\efbb\"}.ri-outlet-line:before{content:\"\\efbc\"}.ri-page-separator:before{content:\"\\efbd\"}.ri-pages-fill:before{content:\"\\efbe\"}.ri-pages-line:before{content:\"\\efbf\"}.ri-paint-brush-fill:before{content:\"\\efc0\"}.ri-paint-brush-line:before{content:\"\\efc1\"}.ri-paint-fill:before{content:\"\\efc2\"}.ri-paint-line:before{content:\"\\efc3\"}.ri-palette-fill:before{content:\"\\efc4\"}.ri-palette-line:before{content:\"\\efc5\"}.ri-pantone-fill:before{content:\"\\efc6\"}.ri-pantone-line:before{content:\"\\efc7\"}.ri-paragraph:before{content:\"\\efc8\"}.ri-parent-fill:before{content:\"\\efc9\"}.ri-parent-line:before{content:\"\\efca\"}.ri-parentheses-fill:before{content:\"\\efcb\"}.ri-parentheses-line:before{content:\"\\efcc\"}.ri-parking-box-fill:before{content:\"\\efcd\"}.ri-parking-box-line:before{content:\"\\efce\"}.ri-parking-fill:before{content:\"\\efcf\"}.ri-parking-line:before{content:\"\\efd0\"}.ri-passport-fill:before{content:\"\\efd1\"}.ri-passport-line:before{content:\"\\efd2\"}.ri-patreon-fill:before{content:\"\\efd3\"}.ri-patreon-line:before{content:\"\\efd4\"}.ri-pause-circle-fill:before{content:\"\\efd5\"}.ri-pause-circle-line:before{content:\"\\efd6\"}.ri-pause-fill:before{content:\"\\efd7\"}.ri-pause-line:before{content:\"\\efd8\"}.ri-pause-mini-fill:before{content:\"\\efd9\"}.ri-pause-mini-line:before{content:\"\\efda\"}.ri-paypal-fill:before{content:\"\\efdb\"}.ri-paypal-line:before{content:\"\\efdc\"}.ri-pen-nib-fill:before{content:\"\\efdd\"}.ri-pen-nib-line:before{content:\"\\efde\"}.ri-pencil-fill:before{content:\"\\efdf\"}.ri-pencil-line:before{content:\"\\efe0\"}.ri-pencil-ruler-2-fill:before{content:\"\\efe1\"}.ri-pencil-ruler-2-line:before{content:\"\\efe2\"}.ri-pencil-ruler-fill:before{content:\"\\efe3\"}.ri-pencil-ruler-line:before{content:\"\\efe4\"}.ri-percent-fill:before{content:\"\\efe5\"}.ri-percent-line:before{content:\"\\efe6\"}.ri-phone-camera-fill:before{content:\"\\efe7\"}.ri-phone-camera-line:before{content:\"\\efe8\"}.ri-phone-fill:before{content:\"\\efe9\"}.ri-phone-find-fill:before{content:\"\\efea\"}.ri-phone-find-line:before{content:\"\\efeb\"}.ri-phone-line:before{content:\"\\efec\"}.ri-phone-lock-fill:before{content:\"\\efed\"}.ri-phone-lock-line:before{content:\"\\efee\"}.ri-picture-in-picture-2-fill:before{content:\"\\efef\"}.ri-picture-in-picture-2-line:before{content:\"\\eff0\"}.ri-picture-in-picture-exit-fill:before{content:\"\\eff1\"}.ri-picture-in-picture-exit-line:before{content:\"\\eff2\"}.ri-picture-in-picture-fill:before{content:\"\\eff3\"}.ri-picture-in-picture-line:before{content:\"\\eff4\"}.ri-pie-chart-2-fill:before{content:\"\\eff5\"}.ri-pie-chart-2-line:before{content:\"\\eff6\"}.ri-pie-chart-box-fill:before{content:\"\\eff7\"}.ri-pie-chart-box-line:before{content:\"\\eff8\"}.ri-pie-chart-fill:before{content:\"\\eff9\"}.ri-pie-chart-line:before{content:\"\\effa\"}.ri-pin-distance-fill:before{content:\"\\effb\"}.ri-pin-distance-line:before{content:\"\\effc\"}.ri-ping-pong-fill:before{content:\"\\effd\"}.ri-ping-pong-line:before{content:\"\\effe\"}.ri-pinterest-fill:before{content:\"\\efff\"}.ri-pinterest-line:before{content:\"\\f000\"}.ri-pinyin-input:before{content:\"\\f001\"}.ri-pixelfed-fill:before{content:\"\\f002\"}.ri-pixelfed-line:before{content:\"\\f003\"}.ri-plane-fill:before{content:\"\\f004\"}.ri-plane-line:before{content:\"\\f005\"}.ri-plant-fill:before{content:\"\\f006\"}.ri-plant-line:before{content:\"\\f007\"}.ri-play-circle-fill:before{content:\"\\f008\"}.ri-play-circle-line:before{content:\"\\f009\"}.ri-play-fill:before{content:\"\\f00a\"}.ri-play-line:before{content:\"\\f00b\"}.ri-play-list-2-fill:before{content:\"\\f00c\"}.ri-play-list-2-line:before{content:\"\\f00d\"}.ri-play-list-add-fill:before{content:\"\\f00e\"}.ri-play-list-add-line:before{content:\"\\f00f\"}.ri-play-list-fill:before{content:\"\\f010\"}.ri-play-list-line:before{content:\"\\f011\"}.ri-play-mini-fill:before{content:\"\\f012\"}.ri-play-mini-line:before{content:\"\\f013\"}.ri-playstation-fill:before{content:\"\\f014\"}.ri-playstation-line:before{content:\"\\f015\"}.ri-plug-2-fill:before{content:\"\\f016\"}.ri-plug-2-line:before{content:\"\\f017\"}.ri-plug-fill:before{content:\"\\f018\"}.ri-plug-line:before{content:\"\\f019\"}.ri-polaroid-2-fill:before{content:\"\\f01a\"}.ri-polaroid-2-line:before{content:\"\\f01b\"}.ri-polaroid-fill:before{content:\"\\f01c\"}.ri-polaroid-line:before{content:\"\\f01d\"}.ri-police-car-fill:before{content:\"\\f01e\"}.ri-police-car-line:before{content:\"\\f01f\"}.ri-price-tag-2-fill:before{content:\"\\f020\"}.ri-price-tag-2-line:before{content:\"\\f021\"}.ri-price-tag-3-fill:before{content:\"\\f022\"}.ri-price-tag-3-line:before{content:\"\\f023\"}.ri-price-tag-fill:before{content:\"\\f024\"}.ri-price-tag-line:before{content:\"\\f025\"}.ri-printer-cloud-fill:before{content:\"\\f026\"}.ri-printer-cloud-line:before{content:\"\\f027\"}.ri-printer-fill:before{content:\"\\f028\"}.ri-printer-line:before{content:\"\\f029\"}.ri-product-hunt-fill:before{content:\"\\f02a\"}.ri-product-hunt-line:before{content:\"\\f02b\"}.ri-profile-fill:before{content:\"\\f02c\"}.ri-profile-line:before{content:\"\\f02d\"}.ri-projector-2-fill:before{content:\"\\f02e\"}.ri-projector-2-line:before{content:\"\\f02f\"}.ri-projector-fill:before{content:\"\\f030\"}.ri-projector-line:before{content:\"\\f031\"}.ri-psychotherapy-fill:before{content:\"\\f032\"}.ri-psychotherapy-line:before{content:\"\\f033\"}.ri-pulse-fill:before{content:\"\\f034\"}.ri-pulse-line:before{content:\"\\f035\"}.ri-pushpin-2-fill:before{content:\"\\f036\"}.ri-pushpin-2-line:before{content:\"\\f037\"}.ri-pushpin-fill:before{content:\"\\f038\"}.ri-pushpin-line:before{content:\"\\f039\"}.ri-qq-fill:before{content:\"\\f03a\"}.ri-qq-line:before{content:\"\\f03b\"}.ri-qr-code-fill:before{content:\"\\f03c\"}.ri-qr-code-line:before{content:\"\\f03d\"}.ri-qr-scan-2-fill:before{content:\"\\f03e\"}.ri-qr-scan-2-line:before{content:\"\\f03f\"}.ri-qr-scan-fill:before{content:\"\\f040\"}.ri-qr-scan-line:before{content:\"\\f041\"}.ri-question-answer-fill:before{content:\"\\f042\"}.ri-question-answer-line:before{content:\"\\f043\"}.ri-question-fill:before{content:\"\\f044\"}.ri-question-line:before{content:\"\\f045\"}.ri-question-mark:before{content:\"\\f046\"}.ri-questionnaire-fill:before{content:\"\\f047\"}.ri-questionnaire-line:before{content:\"\\f048\"}.ri-quill-pen-fill:before{content:\"\\f049\"}.ri-quill-pen-line:before{content:\"\\f04a\"}.ri-radar-fill:before{content:\"\\f04b\"}.ri-radar-line:before{content:\"\\f04c\"}.ri-radio-2-fill:before{content:\"\\f04d\"}.ri-radio-2-line:before{content:\"\\f04e\"}.ri-radio-button-fill:before{content:\"\\f04f\"}.ri-radio-button-line:before{content:\"\\f050\"}.ri-radio-fill:before{content:\"\\f051\"}.ri-radio-line:before{content:\"\\f052\"}.ri-rainbow-fill:before{content:\"\\f053\"}.ri-rainbow-line:before{content:\"\\f054\"}.ri-rainy-fill:before{content:\"\\f055\"}.ri-rainy-line:before{content:\"\\f056\"}.ri-reactjs-fill:before{content:\"\\f057\"}.ri-reactjs-line:before{content:\"\\f058\"}.ri-record-circle-fill:before{content:\"\\f059\"}.ri-record-circle-line:before{content:\"\\f05a\"}.ri-record-mail-fill:before{content:\"\\f05b\"}.ri-record-mail-line:before{content:\"\\f05c\"}.ri-recycle-fill:before{content:\"\\f05d\"}.ri-recycle-line:before{content:\"\\f05e\"}.ri-red-packet-fill:before{content:\"\\f05f\"}.ri-red-packet-line:before{content:\"\\f060\"}.ri-reddit-fill:before{content:\"\\f061\"}.ri-reddit-line:before{content:\"\\f062\"}.ri-refresh-fill:before{content:\"\\f063\"}.ri-refresh-line:before{content:\"\\f064\"}.ri-refund-2-fill:before{content:\"\\f065\"}.ri-refund-2-line:before{content:\"\\f066\"}.ri-refund-fill:before{content:\"\\f067\"}.ri-refund-line:before{content:\"\\f068\"}.ri-registered-fill:before{content:\"\\f069\"}.ri-registered-line:before{content:\"\\f06a\"}.ri-remixicon-fill:before{content:\"\\f06b\"}.ri-remixicon-line:before{content:\"\\f06c\"}.ri-remote-control-2-fill:before{content:\"\\f06d\"}.ri-remote-control-2-line:before{content:\"\\f06e\"}.ri-remote-control-fill:before{content:\"\\f06f\"}.ri-remote-control-line:before{content:\"\\f070\"}.ri-repeat-2-fill:before{content:\"\\f071\"}.ri-repeat-2-line:before{content:\"\\f072\"}.ri-repeat-fill:before{content:\"\\f073\"}.ri-repeat-line:before{content:\"\\f074\"}.ri-repeat-one-fill:before{content:\"\\f075\"}.ri-repeat-one-line:before{content:\"\\f076\"}.ri-reply-all-fill:before{content:\"\\f077\"}.ri-reply-all-line:before{content:\"\\f078\"}.ri-reply-fill:before{content:\"\\f079\"}.ri-reply-line:before{content:\"\\f07a\"}.ri-reserved-fill:before{content:\"\\f07b\"}.ri-reserved-line:before{content:\"\\f07c\"}.ri-rest-time-fill:before{content:\"\\f07d\"}.ri-rest-time-line:before{content:\"\\f07e\"}.ri-restart-fill:before{content:\"\\f07f\"}.ri-restart-line:before{content:\"\\f080\"}.ri-restaurant-2-fill:before{content:\"\\f081\"}.ri-restaurant-2-line:before{content:\"\\f082\"}.ri-restaurant-fill:before{content:\"\\f083\"}.ri-restaurant-line:before{content:\"\\f084\"}.ri-rewind-fill:before{content:\"\\f085\"}.ri-rewind-line:before{content:\"\\f086\"}.ri-rewind-mini-fill:before{content:\"\\f087\"}.ri-rewind-mini-line:before{content:\"\\f088\"}.ri-rhythm-fill:before{content:\"\\f089\"}.ri-rhythm-line:before{content:\"\\f08a\"}.ri-riding-fill:before{content:\"\\f08b\"}.ri-riding-line:before{content:\"\\f08c\"}.ri-road-map-fill:before{content:\"\\f08d\"}.ri-road-map-line:before{content:\"\\f08e\"}.ri-roadster-fill:before{content:\"\\f08f\"}.ri-roadster-line:before{content:\"\\f090\"}.ri-robot-fill:before{content:\"\\f091\"}.ri-robot-line:before{content:\"\\f092\"}.ri-rocket-2-fill:before{content:\"\\f093\"}.ri-rocket-2-line:before{content:\"\\f094\"}.ri-rocket-fill:before{content:\"\\f095\"}.ri-rocket-line:before{content:\"\\f096\"}.ri-rotate-lock-fill:before{content:\"\\f097\"}.ri-rotate-lock-line:before{content:\"\\f098\"}.ri-rounded-corner:before{content:\"\\f099\"}.ri-route-fill:before{content:\"\\f09a\"}.ri-route-line:before{content:\"\\f09b\"}.ri-router-fill:before{content:\"\\f09c\"}.ri-router-line:before{content:\"\\f09d\"}.ri-rss-fill:before{content:\"\\f09e\"}.ri-rss-line:before{content:\"\\f09f\"}.ri-ruler-2-fill:before{content:\"\\f0a0\"}.ri-ruler-2-line:before{content:\"\\f0a1\"}.ri-ruler-fill:before{content:\"\\f0a2\"}.ri-ruler-line:before{content:\"\\f0a3\"}.ri-run-fill:before{content:\"\\f0a4\"}.ri-run-line:before{content:\"\\f0a5\"}.ri-safari-fill:before{content:\"\\f0a6\"}.ri-safari-line:before{content:\"\\f0a7\"}.ri-safe-2-fill:before{content:\"\\f0a8\"}.ri-safe-2-line:before{content:\"\\f0a9\"}.ri-safe-fill:before{content:\"\\f0aa\"}.ri-safe-line:before{content:\"\\f0ab\"}.ri-sailboat-fill:before{content:\"\\f0ac\"}.ri-sailboat-line:before{content:\"\\f0ad\"}.ri-save-2-fill:before{content:\"\\f0ae\"}.ri-save-2-line:before{content:\"\\f0af\"}.ri-save-3-fill:before{content:\"\\f0b0\"}.ri-save-3-line:before{content:\"\\f0b1\"}.ri-save-fill:before{content:\"\\f0b2\"}.ri-save-line:before{content:\"\\f0b3\"}.ri-scales-2-fill:before{content:\"\\f0b4\"}.ri-scales-2-line:before{content:\"\\f0b5\"}.ri-scales-3-fill:before{content:\"\\f0b6\"}.ri-scales-3-line:before{content:\"\\f0b7\"}.ri-scales-fill:before{content:\"\\f0b8\"}.ri-scales-line:before{content:\"\\f0b9\"}.ri-scan-2-fill:before{content:\"\\f0ba\"}.ri-scan-2-line:before{content:\"\\f0bb\"}.ri-scan-fill:before{content:\"\\f0bc\"}.ri-scan-line:before{content:\"\\f0bd\"}.ri-scissors-2-fill:before{content:\"\\f0be\"}.ri-scissors-2-line:before{content:\"\\f0bf\"}.ri-scissors-cut-fill:before{content:\"\\f0c0\"}.ri-scissors-cut-line:before{content:\"\\f0c1\"}.ri-scissors-fill:before{content:\"\\f0c2\"}.ri-scissors-line:before{content:\"\\f0c3\"}.ri-screenshot-2-fill:before{content:\"\\f0c4\"}.ri-screenshot-2-line:before{content:\"\\f0c5\"}.ri-screenshot-fill:before{content:\"\\f0c6\"}.ri-screenshot-line:before{content:\"\\f0c7\"}.ri-sd-card-fill:before{content:\"\\f0c8\"}.ri-sd-card-line:before{content:\"\\f0c9\"}.ri-sd-card-mini-fill:before{content:\"\\f0ca\"}.ri-sd-card-mini-line:before{content:\"\\f0cb\"}.ri-search-2-fill:before{content:\"\\f0cc\"}.ri-search-2-line:before{content:\"\\f0cd\"}.ri-search-eye-fill:before{content:\"\\f0ce\"}.ri-search-eye-line:before{content:\"\\f0cf\"}.ri-search-fill:before{content:\"\\f0d0\"}.ri-search-line:before{content:\"\\f0d1\"}.ri-secure-payment-fill:before{content:\"\\f0d2\"}.ri-secure-payment-line:before{content:\"\\f0d3\"}.ri-seedling-fill:before{content:\"\\f0d4\"}.ri-seedling-line:before{content:\"\\f0d5\"}.ri-send-backward:before{content:\"\\f0d6\"}.ri-send-plane-2-fill:before{content:\"\\f0d7\"}.ri-send-plane-2-line:before{content:\"\\f0d8\"}.ri-send-plane-fill:before{content:\"\\f0d9\"}.ri-send-plane-line:before{content:\"\\f0da\"}.ri-send-to-back:before{content:\"\\f0db\"}.ri-sensor-fill:before{content:\"\\f0dc\"}.ri-sensor-line:before{content:\"\\f0dd\"}.ri-separator:before{content:\"\\f0de\"}.ri-server-fill:before{content:\"\\f0df\"}.ri-server-line:before{content:\"\\f0e0\"}.ri-service-fill:before{content:\"\\f0e1\"}.ri-service-line:before{content:\"\\f0e2\"}.ri-settings-2-fill:before{content:\"\\f0e3\"}.ri-settings-2-line:before{content:\"\\f0e4\"}.ri-settings-3-fill:before{content:\"\\f0e5\"}.ri-settings-3-line:before{content:\"\\f0e6\"}.ri-settings-4-fill:before{content:\"\\f0e7\"}.ri-settings-4-line:before{content:\"\\f0e8\"}.ri-settings-5-fill:before{content:\"\\f0e9\"}.ri-settings-5-line:before{content:\"\\f0ea\"}.ri-settings-6-fill:before{content:\"\\f0eb\"}.ri-settings-6-line:before{content:\"\\f0ec\"}.ri-settings-fill:before{content:\"\\f0ed\"}.ri-settings-line:before{content:\"\\f0ee\"}.ri-shape-2-fill:before{content:\"\\f0ef\"}.ri-shape-2-line:before{content:\"\\f0f0\"}.ri-shape-fill:before{content:\"\\f0f1\"}.ri-shape-line:before{content:\"\\f0f2\"}.ri-share-box-fill:before{content:\"\\f0f3\"}.ri-share-box-line:before{content:\"\\f0f4\"}.ri-share-circle-fill:before{content:\"\\f0f5\"}.ri-share-circle-line:before{content:\"\\f0f6\"}.ri-share-fill:before{content:\"\\f0f7\"}.ri-share-forward-2-fill:before{content:\"\\f0f8\"}.ri-share-forward-2-line:before{content:\"\\f0f9\"}.ri-share-forward-box-fill:before{content:\"\\f0fa\"}.ri-share-forward-box-line:before{content:\"\\f0fb\"}.ri-share-forward-fill:before{content:\"\\f0fc\"}.ri-share-forward-line:before{content:\"\\f0fd\"}.ri-share-line:before{content:\"\\f0fe\"}.ri-shield-check-fill:before{content:\"\\f0ff\"}.ri-shield-check-line:before{content:\"\\f100\"}.ri-shield-cross-fill:before{content:\"\\f101\"}.ri-shield-cross-line:before{content:\"\\f102\"}.ri-shield-fill:before{content:\"\\f103\"}.ri-shield-flash-fill:before{content:\"\\f104\"}.ri-shield-flash-line:before{content:\"\\f105\"}.ri-shield-keyhole-fill:before{content:\"\\f106\"}.ri-shield-keyhole-line:before{content:\"\\f107\"}.ri-shield-line:before{content:\"\\f108\"}.ri-shield-star-fill:before{content:\"\\f109\"}.ri-shield-star-line:before{content:\"\\f10a\"}.ri-shield-user-fill:before{content:\"\\f10b\"}.ri-shield-user-line:before{content:\"\\f10c\"}.ri-ship-2-fill:before{content:\"\\f10d\"}.ri-ship-2-line:before{content:\"\\f10e\"}.ri-ship-fill:before{content:\"\\f10f\"}.ri-ship-line:before{content:\"\\f110\"}.ri-shirt-fill:before{content:\"\\f111\"}.ri-shirt-line:before{content:\"\\f112\"}.ri-shopping-bag-2-fill:before{content:\"\\f113\"}.ri-shopping-bag-2-line:before{content:\"\\f114\"}.ri-shopping-bag-3-fill:before{content:\"\\f115\"}.ri-shopping-bag-3-line:before{content:\"\\f116\"}.ri-shopping-bag-fill:before{content:\"\\f117\"}.ri-shopping-bag-line:before{content:\"\\f118\"}.ri-shopping-basket-2-fill:before{content:\"\\f119\"}.ri-shopping-basket-2-line:before{content:\"\\f11a\"}.ri-shopping-basket-fill:before{content:\"\\f11b\"}.ri-shopping-basket-line:before{content:\"\\f11c\"}.ri-shopping-cart-2-fill:before{content:\"\\f11d\"}.ri-shopping-cart-2-line:before{content:\"\\f11e\"}.ri-shopping-cart-fill:before{content:\"\\f11f\"}.ri-shopping-cart-line:before{content:\"\\f120\"}.ri-showers-fill:before{content:\"\\f121\"}.ri-showers-line:before{content:\"\\f122\"}.ri-shuffle-fill:before{content:\"\\f123\"}.ri-shuffle-line:before{content:\"\\f124\"}.ri-shut-down-fill:before{content:\"\\f125\"}.ri-shut-down-line:before{content:\"\\f126\"}.ri-side-bar-fill:before{content:\"\\f127\"}.ri-side-bar-line:before{content:\"\\f128\"}.ri-signal-tower-fill:before{content:\"\\f129\"}.ri-signal-tower-line:before{content:\"\\f12a\"}.ri-signal-wifi-1-fill:before{content:\"\\f12b\"}.ri-signal-wifi-1-line:before{content:\"\\f12c\"}.ri-signal-wifi-2-fill:before{content:\"\\f12d\"}.ri-signal-wifi-2-line:before{content:\"\\f12e\"}.ri-signal-wifi-3-fill:before{content:\"\\f12f\"}.ri-signal-wifi-3-line:before{content:\"\\f130\"}.ri-signal-wifi-error-fill:before{content:\"\\f131\"}.ri-signal-wifi-error-line:before{content:\"\\f132\"}.ri-signal-wifi-fill:before{content:\"\\f133\"}.ri-signal-wifi-line:before{content:\"\\f134\"}.ri-signal-wifi-off-fill:before{content:\"\\f135\"}.ri-signal-wifi-off-line:before{content:\"\\f136\"}.ri-sim-card-2-fill:before{content:\"\\f137\"}.ri-sim-card-2-line:before{content:\"\\f138\"}.ri-sim-card-fill:before{content:\"\\f139\"}.ri-sim-card-line:before{content:\"\\f13a\"}.ri-single-quotes-l:before{content:\"\\f13b\"}.ri-single-quotes-r:before{content:\"\\f13c\"}.ri-sip-fill:before{content:\"\\f13d\"}.ri-sip-line:before{content:\"\\f13e\"}.ri-skip-back-fill:before{content:\"\\f13f\"}.ri-skip-back-line:before{content:\"\\f140\"}.ri-skip-back-mini-fill:before{content:\"\\f141\"}.ri-skip-back-mini-line:before{content:\"\\f142\"}.ri-skip-forward-fill:before{content:\"\\f143\"}.ri-skip-forward-line:before{content:\"\\f144\"}.ri-skip-forward-mini-fill:before{content:\"\\f145\"}.ri-skip-forward-mini-line:before{content:\"\\f146\"}.ri-skull-2-fill:before{content:\"\\f147\"}.ri-skull-2-line:before{content:\"\\f148\"}.ri-skull-fill:before{content:\"\\f149\"}.ri-skull-line:before{content:\"\\f14a\"}.ri-skype-fill:before{content:\"\\f14b\"}.ri-skype-line:before{content:\"\\f14c\"}.ri-slack-fill:before{content:\"\\f14d\"}.ri-slack-line:before{content:\"\\f14e\"}.ri-slice-fill:before{content:\"\\f14f\"}.ri-slice-line:before{content:\"\\f150\"}.ri-slideshow-2-fill:before{content:\"\\f151\"}.ri-slideshow-2-line:before{content:\"\\f152\"}.ri-slideshow-3-fill:before{content:\"\\f153\"}.ri-slideshow-3-line:before{content:\"\\f154\"}.ri-slideshow-4-fill:before{content:\"\\f155\"}.ri-slideshow-4-line:before{content:\"\\f156\"}.ri-slideshow-fill:before{content:\"\\f157\"}.ri-slideshow-line:before{content:\"\\f158\"}.ri-smartphone-fill:before{content:\"\\f159\"}.ri-smartphone-line:before{content:\"\\f15a\"}.ri-snapchat-fill:before{content:\"\\f15b\"}.ri-snapchat-line:before{content:\"\\f15c\"}.ri-snowy-fill:before{content:\"\\f15d\"}.ri-snowy-line:before{content:\"\\f15e\"}.ri-sort-asc:before{content:\"\\f15f\"}.ri-sort-desc:before{content:\"\\f160\"}.ri-sound-module-fill:before{content:\"\\f161\"}.ri-sound-module-line:before{content:\"\\f162\"}.ri-soundcloud-fill:before{content:\"\\f163\"}.ri-soundcloud-line:before{content:\"\\f164\"}.ri-space-ship-fill:before{content:\"\\f165\"}.ri-space-ship-line:before{content:\"\\f166\"}.ri-space:before{content:\"\\f167\"}.ri-spam-2-fill:before{content:\"\\f168\"}.ri-spam-2-line:before{content:\"\\f169\"}.ri-spam-3-fill:before{content:\"\\f16a\"}.ri-spam-3-line:before{content:\"\\f16b\"}.ri-spam-fill:before{content:\"\\f16c\"}.ri-spam-line:before{content:\"\\f16d\"}.ri-speaker-2-fill:before{content:\"\\f16e\"}.ri-speaker-2-line:before{content:\"\\f16f\"}.ri-speaker-3-fill:before{content:\"\\f170\"}.ri-speaker-3-line:before{content:\"\\f171\"}.ri-speaker-fill:before{content:\"\\f172\"}.ri-speaker-line:before{content:\"\\f173\"}.ri-spectrum-fill:before{content:\"\\f174\"}.ri-spectrum-line:before{content:\"\\f175\"}.ri-speed-fill:before{content:\"\\f176\"}.ri-speed-line:before{content:\"\\f177\"}.ri-speed-mini-fill:before{content:\"\\f178\"}.ri-speed-mini-line:before{content:\"\\f179\"}.ri-split-cells-horizontal:before{content:\"\\f17a\"}.ri-split-cells-vertical:before{content:\"\\f17b\"}.ri-spotify-fill:before{content:\"\\f17c\"}.ri-spotify-line:before{content:\"\\f17d\"}.ri-spy-fill:before{content:\"\\f17e\"}.ri-spy-line:before{content:\"\\f17f\"}.ri-stack-fill:before{content:\"\\f180\"}.ri-stack-line:before{content:\"\\f181\"}.ri-stack-overflow-fill:before{content:\"\\f182\"}.ri-stack-overflow-line:before{content:\"\\f183\"}.ri-stackshare-fill:before{content:\"\\f184\"}.ri-stackshare-line:before{content:\"\\f185\"}.ri-star-fill:before{content:\"\\f186\"}.ri-star-half-fill:before{content:\"\\f187\"}.ri-star-half-line:before{content:\"\\f188\"}.ri-star-half-s-fill:before{content:\"\\f189\"}.ri-star-half-s-line:before{content:\"\\f18a\"}.ri-star-line:before{content:\"\\f18b\"}.ri-star-s-fill:before{content:\"\\f18c\"}.ri-star-s-line:before{content:\"\\f18d\"}.ri-star-smile-fill:before{content:\"\\f18e\"}.ri-star-smile-line:before{content:\"\\f18f\"}.ri-steam-fill:before{content:\"\\f190\"}.ri-steam-line:before{content:\"\\f191\"}.ri-steering-2-fill:before{content:\"\\f192\"}.ri-steering-2-line:before{content:\"\\f193\"}.ri-steering-fill:before{content:\"\\f194\"}.ri-steering-line:before{content:\"\\f195\"}.ri-stethoscope-fill:before{content:\"\\f196\"}.ri-stethoscope-line:before{content:\"\\f197\"}.ri-sticky-note-2-fill:before{content:\"\\f198\"}.ri-sticky-note-2-line:before{content:\"\\f199\"}.ri-sticky-note-fill:before{content:\"\\f19a\"}.ri-sticky-note-line:before{content:\"\\f19b\"}.ri-stock-fill:before{content:\"\\f19c\"}.ri-stock-line:before{content:\"\\f19d\"}.ri-stop-circle-fill:before{content:\"\\f19e\"}.ri-stop-circle-line:before{content:\"\\f19f\"}.ri-stop-fill:before{content:\"\\f1a0\"}.ri-stop-line:before{content:\"\\f1a1\"}.ri-stop-mini-fill:before{content:\"\\f1a2\"}.ri-stop-mini-line:before{content:\"\\f1a3\"}.ri-store-2-fill:before{content:\"\\f1a4\"}.ri-store-2-line:before{content:\"\\f1a5\"}.ri-store-3-fill:before{content:\"\\f1a6\"}.ri-store-3-line:before{content:\"\\f1a7\"}.ri-store-fill:before{content:\"\\f1a8\"}.ri-store-line:before{content:\"\\f1a9\"}.ri-strikethrough-2:before{content:\"\\f1aa\"}.ri-strikethrough:before{content:\"\\f1ab\"}.ri-subscript-2:before{content:\"\\f1ac\"}.ri-subscript:before{content:\"\\f1ad\"}.ri-subtract-fill:before{content:\"\\f1ae\"}.ri-subtract-line:before{content:\"\\f1af\"}.ri-subway-fill:before{content:\"\\f1b0\"}.ri-subway-line:before{content:\"\\f1b1\"}.ri-subway-wifi-fill:before{content:\"\\f1b2\"}.ri-subway-wifi-line:before{content:\"\\f1b3\"}.ri-suitcase-2-fill:before{content:\"\\f1b4\"}.ri-suitcase-2-line:before{content:\"\\f1b5\"}.ri-suitcase-3-fill:before{content:\"\\f1b6\"}.ri-suitcase-3-line:before{content:\"\\f1b7\"}.ri-suitcase-fill:before{content:\"\\f1b8\"}.ri-suitcase-line:before{content:\"\\f1b9\"}.ri-sun-cloudy-fill:before{content:\"\\f1ba\"}.ri-sun-cloudy-line:before{content:\"\\f1bb\"}.ri-sun-fill:before{content:\"\\f1bc\"}.ri-sun-foggy-fill:before{content:\"\\f1bd\"}.ri-sun-foggy-line:before{content:\"\\f1be\"}.ri-sun-line:before{content:\"\\f1bf\"}.ri-superscript-2:before{content:\"\\f1c0\"}.ri-superscript:before{content:\"\\f1c1\"}.ri-surgical-mask-fill:before{content:\"\\f1c2\"}.ri-surgical-mask-line:before{content:\"\\f1c3\"}.ri-surround-sound-fill:before{content:\"\\f1c4\"}.ri-surround-sound-line:before{content:\"\\f1c5\"}.ri-survey-fill:before{content:\"\\f1c6\"}.ri-survey-line:before{content:\"\\f1c7\"}.ri-swap-box-fill:before{content:\"\\f1c8\"}.ri-swap-box-line:before{content:\"\\f1c9\"}.ri-swap-fill:before{content:\"\\f1ca\"}.ri-swap-line:before{content:\"\\f1cb\"}.ri-switch-fill:before{content:\"\\f1cc\"}.ri-switch-line:before{content:\"\\f1cd\"}.ri-sword-fill:before{content:\"\\f1ce\"}.ri-sword-line:before{content:\"\\f1cf\"}.ri-syringe-fill:before{content:\"\\f1d0\"}.ri-syringe-line:before{content:\"\\f1d1\"}.ri-t-box-fill:before{content:\"\\f1d2\"}.ri-t-box-line:before{content:\"\\f1d3\"}.ri-t-shirt-2-fill:before{content:\"\\f1d4\"}.ri-t-shirt-2-line:before{content:\"\\f1d5\"}.ri-t-shirt-air-fill:before{content:\"\\f1d6\"}.ri-t-shirt-air-line:before{content:\"\\f1d7\"}.ri-t-shirt-fill:before{content:\"\\f1d8\"}.ri-t-shirt-line:before{content:\"\\f1d9\"}.ri-table-2:before{content:\"\\f1da\"}.ri-table-alt-fill:before{content:\"\\f1db\"}.ri-table-alt-line:before{content:\"\\f1dc\"}.ri-table-fill:before{content:\"\\f1dd\"}.ri-table-line:before{content:\"\\f1de\"}.ri-tablet-fill:before{content:\"\\f1df\"}.ri-tablet-line:before{content:\"\\f1e0\"}.ri-takeaway-fill:before{content:\"\\f1e1\"}.ri-takeaway-line:before{content:\"\\f1e2\"}.ri-taobao-fill:before{content:\"\\f1e3\"}.ri-taobao-line:before{content:\"\\f1e4\"}.ri-tape-fill:before{content:\"\\f1e5\"}.ri-tape-line:before{content:\"\\f1e6\"}.ri-task-fill:before{content:\"\\f1e7\"}.ri-task-line:before{content:\"\\f1e8\"}.ri-taxi-fill:before{content:\"\\f1e9\"}.ri-taxi-line:before{content:\"\\f1ea\"}.ri-taxi-wifi-fill:before{content:\"\\f1eb\"}.ri-taxi-wifi-line:before{content:\"\\f1ec\"}.ri-team-fill:before{content:\"\\f1ed\"}.ri-team-line:before{content:\"\\f1ee\"}.ri-telegram-fill:before{content:\"\\f1ef\"}.ri-telegram-line:before{content:\"\\f1f0\"}.ri-temp-cold-fill:before{content:\"\\f1f1\"}.ri-temp-cold-line:before{content:\"\\f1f2\"}.ri-temp-hot-fill:before{content:\"\\f1f3\"}.ri-temp-hot-line:before{content:\"\\f1f4\"}.ri-terminal-box-fill:before{content:\"\\f1f5\"}.ri-terminal-box-line:before{content:\"\\f1f6\"}.ri-terminal-fill:before{content:\"\\f1f7\"}.ri-terminal-line:before{content:\"\\f1f8\"}.ri-terminal-window-fill:before{content:\"\\f1f9\"}.ri-terminal-window-line:before{content:\"\\f1fa\"}.ri-test-tube-fill:before{content:\"\\f1fb\"}.ri-test-tube-line:before{content:\"\\f1fc\"}.ri-text-direction-l:before{content:\"\\f1fd\"}.ri-text-direction-r:before{content:\"\\f1fe\"}.ri-text-spacing:before{content:\"\\f1ff\"}.ri-text-wrap:before{content:\"\\f200\"}.ri-text:before{content:\"\\f201\"}.ri-thermometer-fill:before{content:\"\\f202\"}.ri-thermometer-line:before{content:\"\\f203\"}.ri-thumb-down-fill:before{content:\"\\f204\"}.ri-thumb-down-line:before{content:\"\\f205\"}.ri-thumb-up-fill:before{content:\"\\f206\"}.ri-thumb-up-line:before{content:\"\\f207\"}.ri-thunderstorms-fill:before{content:\"\\f208\"}.ri-thunderstorms-line:before{content:\"\\f209\"}.ri-ticket-2-fill:before{content:\"\\f20a\"}.ri-ticket-2-line:before{content:\"\\f20b\"}.ri-ticket-fill:before{content:\"\\f20c\"}.ri-ticket-line:before{content:\"\\f20d\"}.ri-time-fill:before{content:\"\\f20e\"}.ri-time-line:before{content:\"\\f20f\"}.ri-timer-2-fill:before{content:\"\\f210\"}.ri-timer-2-line:before{content:\"\\f211\"}.ri-timer-fill:before{content:\"\\f212\"}.ri-timer-flash-fill:before{content:\"\\f213\"}.ri-timer-flash-line:before{content:\"\\f214\"}.ri-timer-line:before{content:\"\\f215\"}.ri-todo-fill:before{content:\"\\f216\"}.ri-todo-line:before{content:\"\\f217\"}.ri-toggle-fill:before{content:\"\\f218\"}.ri-toggle-line:before{content:\"\\f219\"}.ri-tools-fill:before{content:\"\\f21a\"}.ri-tools-line:before{content:\"\\f21b\"}.ri-tornado-fill:before{content:\"\\f21c\"}.ri-tornado-line:before{content:\"\\f21d\"}.ri-trademark-fill:before{content:\"\\f21e\"}.ri-trademark-line:before{content:\"\\f21f\"}.ri-traffic-light-fill:before{content:\"\\f220\"}.ri-traffic-light-line:before{content:\"\\f221\"}.ri-train-fill:before{content:\"\\f222\"}.ri-train-line:before{content:\"\\f223\"}.ri-train-wifi-fill:before{content:\"\\f224\"}.ri-train-wifi-line:before{content:\"\\f225\"}.ri-translate-2:before{content:\"\\f226\"}.ri-translate:before{content:\"\\f227\"}.ri-travesti-fill:before{content:\"\\f228\"}.ri-travesti-line:before{content:\"\\f229\"}.ri-treasure-map-fill:before{content:\"\\f22a\"}.ri-treasure-map-line:before{content:\"\\f22b\"}.ri-trello-fill:before{content:\"\\f22c\"}.ri-trello-line:before{content:\"\\f22d\"}.ri-trophy-fill:before{content:\"\\f22e\"}.ri-trophy-line:before{content:\"\\f22f\"}.ri-truck-fill:before{content:\"\\f230\"}.ri-truck-line:before{content:\"\\f231\"}.ri-tumblr-fill:before{content:\"\\f232\"}.ri-tumblr-line:before{content:\"\\f233\"}.ri-tv-2-fill:before{content:\"\\f234\"}.ri-tv-2-line:before{content:\"\\f235\"}.ri-tv-fill:before{content:\"\\f236\"}.ri-tv-line:before{content:\"\\f237\"}.ri-twitch-fill:before{content:\"\\f238\"}.ri-twitch-line:before{content:\"\\f239\"}.ri-twitter-fill:before{content:\"\\f23a\"}.ri-twitter-line:before{content:\"\\f23b\"}.ri-typhoon-fill:before{content:\"\\f23c\"}.ri-typhoon-line:before{content:\"\\f23d\"}.ri-u-disk-fill:before{content:\"\\f23e\"}.ri-u-disk-line:before{content:\"\\f23f\"}.ri-ubuntu-fill:before{content:\"\\f240\"}.ri-ubuntu-line:before{content:\"\\f241\"}.ri-umbrella-fill:before{content:\"\\f242\"}.ri-umbrella-line:before{content:\"\\f243\"}.ri-underline:before{content:\"\\f244\"}.ri-uninstall-fill:before{content:\"\\f245\"}.ri-uninstall-line:before{content:\"\\f246\"}.ri-unsplash-fill:before{content:\"\\f247\"}.ri-unsplash-line:before{content:\"\\f248\"}.ri-upload-2-fill:before{content:\"\\f249\"}.ri-upload-2-line:before{content:\"\\f24a\"}.ri-upload-cloud-2-fill:before{content:\"\\f24b\"}.ri-upload-cloud-2-line:before{content:\"\\f24c\"}.ri-upload-cloud-fill:before{content:\"\\f24d\"}.ri-upload-cloud-line:before{content:\"\\f24e\"}.ri-upload-fill:before{content:\"\\f24f\"}.ri-upload-line:before{content:\"\\f250\"}.ri-usb-fill:before{content:\"\\f251\"}.ri-usb-line:before{content:\"\\f252\"}.ri-user-2-fill:before{content:\"\\f253\"}.ri-user-2-line:before{content:\"\\f254\"}.ri-user-3-fill:before{content:\"\\f255\"}.ri-user-3-line:before{content:\"\\f256\"}.ri-user-4-fill:before{content:\"\\f257\"}.ri-user-4-line:before{content:\"\\f258\"}.ri-user-5-fill:before{content:\"\\f259\"}.ri-user-5-line:before{content:\"\\f25a\"}.ri-user-6-fill:before{content:\"\\f25b\"}.ri-user-6-line:before{content:\"\\f25c\"}.ri-user-add-fill:before{content:\"\\f25d\"}.ri-user-add-line:before{content:\"\\f25e\"}.ri-user-fill:before{content:\"\\f25f\"}.ri-user-follow-fill:before{content:\"\\f260\"}.ri-user-follow-line:before{content:\"\\f261\"}.ri-user-heart-fill:before{content:\"\\f262\"}.ri-user-heart-line:before{content:\"\\f263\"}.ri-user-line:before{content:\"\\f264\"}.ri-user-location-fill:before{content:\"\\f265\"}.ri-user-location-line:before{content:\"\\f266\"}.ri-user-received-2-fill:before{content:\"\\f267\"}.ri-user-received-2-line:before{content:\"\\f268\"}.ri-user-received-fill:before{content:\"\\f269\"}.ri-user-received-line:before{content:\"\\f26a\"}.ri-user-search-fill:before{content:\"\\f26b\"}.ri-user-search-line:before{content:\"\\f26c\"}.ri-user-settings-fill:before{content:\"\\f26d\"}.ri-user-settings-line:before{content:\"\\f26e\"}.ri-user-shared-2-fill:before{content:\"\\f26f\"}.ri-user-shared-2-line:before{content:\"\\f270\"}.ri-user-shared-fill:before{content:\"\\f271\"}.ri-user-shared-line:before{content:\"\\f272\"}.ri-user-smile-fill:before{content:\"\\f273\"}.ri-user-smile-line:before{content:\"\\f274\"}.ri-user-star-fill:before{content:\"\\f275\"}.ri-user-star-line:before{content:\"\\f276\"}.ri-user-unfollow-fill:before{content:\"\\f277\"}.ri-user-unfollow-line:before{content:\"\\f278\"}.ri-user-voice-fill:before{content:\"\\f279\"}.ri-user-voice-line:before{content:\"\\f27a\"}.ri-video-add-fill:before{content:\"\\f27b\"}.ri-video-add-line:before{content:\"\\f27c\"}.ri-video-chat-fill:before{content:\"\\f27d\"}.ri-video-chat-line:before{content:\"\\f27e\"}.ri-video-download-fill:before{content:\"\\f27f\"}.ri-video-download-line:before{content:\"\\f280\"}.ri-video-fill:before{content:\"\\f281\"}.ri-video-line:before{content:\"\\f282\"}.ri-video-upload-fill:before{content:\"\\f283\"}.ri-video-upload-line:before{content:\"\\f284\"}.ri-vidicon-2-fill:before{content:\"\\f285\"}.ri-vidicon-2-line:before{content:\"\\f286\"}.ri-vidicon-fill:before{content:\"\\f287\"}.ri-vidicon-line:before{content:\"\\f288\"}.ri-vimeo-fill:before{content:\"\\f289\"}.ri-vimeo-line:before{content:\"\\f28a\"}.ri-vip-crown-2-fill:before{content:\"\\f28b\"}.ri-vip-crown-2-line:before{content:\"\\f28c\"}.ri-vip-crown-fill:before{content:\"\\f28d\"}.ri-vip-crown-line:before{content:\"\\f28e\"}.ri-vip-diamond-fill:before{content:\"\\f28f\"}.ri-vip-diamond-line:before{content:\"\\f290\"}.ri-vip-fill:before{content:\"\\f291\"}.ri-vip-line:before{content:\"\\f292\"}.ri-virus-fill:before{content:\"\\f293\"}.ri-virus-line:before{content:\"\\f294\"}.ri-visa-fill:before{content:\"\\f295\"}.ri-visa-line:before{content:\"\\f296\"}.ri-voice-recognition-fill:before{content:\"\\f297\"}.ri-voice-recognition-line:before{content:\"\\f298\"}.ri-voiceprint-fill:before{content:\"\\f299\"}.ri-voiceprint-line:before{content:\"\\f29a\"}.ri-volume-down-fill:before{content:\"\\f29b\"}.ri-volume-down-line:before{content:\"\\f29c\"}.ri-volume-mute-fill:before{content:\"\\f29d\"}.ri-volume-mute-line:before{content:\"\\f29e\"}.ri-volume-off-vibrate-fill:before{content:\"\\f29f\"}.ri-volume-off-vibrate-line:before{content:\"\\f2a0\"}.ri-volume-up-fill:before{content:\"\\f2a1\"}.ri-volume-up-line:before{content:\"\\f2a2\"}.ri-volume-vibrate-fill:before{content:\"\\f2a3\"}.ri-volume-vibrate-line:before{content:\"\\f2a4\"}.ri-vuejs-fill:before{content:\"\\f2a5\"}.ri-vuejs-line:before{content:\"\\f2a6\"}.ri-walk-fill:before{content:\"\\f2a7\"}.ri-walk-line:before{content:\"\\f2a8\"}.ri-wallet-2-fill:before{content:\"\\f2a9\"}.ri-wallet-2-line:before{content:\"\\f2aa\"}.ri-wallet-3-fill:before{content:\"\\f2ab\"}.ri-wallet-3-line:before{content:\"\\f2ac\"}.ri-wallet-fill:before{content:\"\\f2ad\"}.ri-wallet-line:before{content:\"\\f2ae\"}.ri-water-flash-fill:before{content:\"\\f2af\"}.ri-water-flash-line:before{content:\"\\f2b0\"}.ri-webcam-fill:before{content:\"\\f2b1\"}.ri-webcam-line:before{content:\"\\f2b2\"}.ri-wechat-2-fill:before{content:\"\\f2b3\"}.ri-wechat-2-line:before{content:\"\\f2b4\"}.ri-wechat-fill:before{content:\"\\f2b5\"}.ri-wechat-line:before{content:\"\\f2b6\"}.ri-wechat-pay-fill:before{content:\"\\f2b7\"}.ri-wechat-pay-line:before{content:\"\\f2b8\"}.ri-weibo-fill:before{content:\"\\f2b9\"}.ri-weibo-line:before{content:\"\\f2ba\"}.ri-whatsapp-fill:before{content:\"\\f2bb\"}.ri-whatsapp-line:before{content:\"\\f2bc\"}.ri-wheelchair-fill:before{content:\"\\f2bd\"}.ri-wheelchair-line:before{content:\"\\f2be\"}.ri-wifi-fill:before{content:\"\\f2bf\"}.ri-wifi-line:before{content:\"\\f2c0\"}.ri-wifi-off-fill:before{content:\"\\f2c1\"}.ri-wifi-off-line:before{content:\"\\f2c2\"}.ri-window-2-fill:before{content:\"\\f2c3\"}.ri-window-2-line:before{content:\"\\f2c4\"}.ri-window-fill:before{content:\"\\f2c5\"}.ri-window-line:before{content:\"\\f2c6\"}.ri-windows-fill:before{content:\"\\f2c7\"}.ri-windows-line:before{content:\"\\f2c8\"}.ri-windy-fill:before{content:\"\\f2c9\"}.ri-windy-line:before{content:\"\\f2ca\"}.ri-wireless-charging-fill:before{content:\"\\f2cb\"}.ri-wireless-charging-line:before{content:\"\\f2cc\"}.ri-women-fill:before{content:\"\\f2cd\"}.ri-women-line:before{content:\"\\f2ce\"}.ri-wubi-input:before{content:\"\\f2cf\"}.ri-xbox-fill:before{content:\"\\f2d0\"}.ri-xbox-line:before{content:\"\\f2d1\"}.ri-xing-fill:before{content:\"\\f2d2\"}.ri-xing-line:before{content:\"\\f2d3\"}.ri-youtube-fill:before{content:\"\\f2d4\"}.ri-youtube-line:before{content:\"\\f2d5\"}.ri-zcool-fill:before{content:\"\\f2d6\"}.ri-zcool-line:before{content:\"\\f2d7\"}.ri-zhihu-fill:before{content:\"\\f2d8\"}.ri-zhihu-line:before{content:\"\\f2d9\"}.ri-zoom-in-fill:before{content:\"\\f2da\"}.ri-zoom-in-line:before{content:\"\\f2db\"}.ri-zoom-out-fill:before{content:\"\\f2dc\"}.ri-zoom-out-line:before{content:\"\\f2dd\"}.ri-zzz-fill:before{content:\"\\f2de\"}.ri-zzz-line:before{content:\"\\f2df\"}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "fc42":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/fonts/remixicon.881fbc46.woff";

/***/ }),

/***/ "fef0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_Previewer_vue_vue_type_style_index_0_id_85651772_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1384");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_Previewer_vue_vue_type_style_index_0_id_85651772_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_Previewer_vue_vue_type_style_index_0_id_85651772_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ })

/******/ })["default"];
});
//# sourceMappingURL=PE.umd.js.map