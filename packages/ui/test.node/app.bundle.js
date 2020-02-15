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
/******/ 	return __webpack_require__(__webpack_require__.s = "./integration/index.test.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../node_modules/.pnpm/registry.npmjs.org/css-loader/3.4.2_webpack@4.41.6/node_modules/css-loader/dist/cjs.js?!../../../node_modules/.pnpm/registry.npmjs.org/postcss-loader/3.0.0/node_modules/postcss-loader/src/index.js?!../src/comp-app.module.css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /mnt/d/Users/Leo.Furze-Waddock/Syncthing/Projects/Dev/github.com/react-tdd-kit/lfurzewaddock/react-tdd-kit/node_modules/.pnpm/registry.npmjs.org/css-loader/3.4.2_webpack@4.41.6/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-2-1!/mnt/d/Users/Leo.Furze-Waddock/Syncthing/Projects/Dev/github.com/react-tdd-kit/lfurzewaddock/react-tdd-kit/node_modules/.pnpm/registry.npmjs.org/postcss-loader/3.0.0/node_modules/postcss-loader/src??postcss!../src/comp-app.module.css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/.pnpm/registry.npmjs.org/css-loader/3.4.2_webpack@4.41.6/node_modules/css-loader/dist/runtime/api.js */ \"../../../node_modules/.pnpm/registry.npmjs.org/css-loader/3.4.2_webpack@4.41.6/node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".comp-app_section-container__1wccV {\\n  display: flex;\\n  flex: 1 1 100%;\\n}\\n\\n.comp-app_article-container__2r2cq {\\n  display: flex;\\n  flex-direction: column;\\n  flex: 1 1 100%;\\n}\\n\\n.comp-app_map-container__2jmvv {\\n  display: flex;\\n  height: 100%;\\n}\\n\", \"\"]);\n// Exports\nexports.locals = {\n\t\"section-container\": \"comp-app_section-container__1wccV\",\n\t\"sectionContainer\": \"comp-app_section-container__1wccV\",\n\t\"article-container\": \"comp-app_article-container__2r2cq\",\n\t\"articleContainer\": \"comp-app_article-container__2r2cq\",\n\t\"map-container\": \"comp-app_map-container__2jmvv\",\n\t\"mapContainer\": \"comp-app_map-container__2jmvv\"\n};\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///../src/comp-app.module.css?/mnt/d/Users/Leo.Furze-Waddock/Syncthing/Projects/Dev/github.com/react-tdd-kit/lfurzewaddock/react-tdd-kit/node_modules/.pnpm/registry.npmjs.org/css-loader/3.4.2_webpack@4.41.6/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-2-1!/mnt/d/Users/Leo.Furze-Waddock/Syncthing/Projects/Dev/github.com/react-tdd-kit/lfurzewaddock/react-tdd-kit/node_modules/.pnpm/registry.npmjs.org/postcss-loader/3.0.0/node_modules/postcss-loader/src??postcss");

/***/ }),

/***/ "../../../node_modules/.pnpm/registry.npmjs.org/css-loader/3.4.2_webpack@4.41.6/node_modules/css-loader/dist/cjs.js?!../../../node_modules/.pnpm/registry.npmjs.org/postcss-loader/3.0.0/node_modules/postcss-loader/src/index.js?!../src/cont-chart.css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /mnt/d/Users/Leo.Furze-Waddock/Syncthing/Projects/Dev/github.com/react-tdd-kit/lfurzewaddock/react-tdd-kit/node_modules/.pnpm/registry.npmjs.org/css-loader/3.4.2_webpack@4.41.6/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!/mnt/d/Users/Leo.Furze-Waddock/Syncthing/Projects/Dev/github.com/react-tdd-kit/lfurzewaddock/react-tdd-kit/node_modules/.pnpm/registry.npmjs.org/postcss-loader/3.0.0/node_modules/postcss-loader/src??postcss!../src/cont-chart.css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/.pnpm/registry.npmjs.org/css-loader/3.4.2_webpack@4.41.6/node_modules/css-loader/dist/runtime/api.js */ \"../../../node_modules/.pnpm/registry.npmjs.org/css-loader/3.4.2_webpack@4.41.6/node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"h1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6 {\\n  font-family: \\\"Bungee\\\", cursive;\\n}\\n\\nspan.bungee {\\n  font-family: \\\"Bungee\\\", cursive;\\n}\\n\\n.app {\\n  max-width: 720px;\\n  margin: 0 auto;\\n  text-align: center;\\n}\\n\\n.header {\\n  font-size: 60px;\\n  font-family: \\\"Bungee\\\", cursive;\\n}\\n.subheader {\\n  font-size: 20px;\\n  font-family: \\\"Bungee\\\", cursive;\\n}\\n\\na.link {\\n  text-decoration: none;\\n  color: #ff1769;\\n}\\n\\na.link:hover {\\n  text-decoration: none;\\n  border-bottom: 2px solid #000;\\n}\\n\\n.select-container select {\\n  padding: 10px;\\n  border: none;\\n  box-shadow: none;\\n  background: transparent;\\n  background-image: none;\\n  -webkit-appearance: none;\\n  font-family: \\\"Bungee\\\", cursive;\\n  cursor: pointer;\\n  color: #ff1769;\\n  font-size: 18px;\\n  max-width: 210px;\\n  white-space: nowrap;\\n  text-overflow: ellipsis;\\n}\\n\\n.select-container select:focus {\\n  outline: none;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///../src/cont-chart.css?/mnt/d/Users/Leo.Furze-Waddock/Syncthing/Projects/Dev/github.com/react-tdd-kit/lfurzewaddock/react-tdd-kit/node_modules/.pnpm/registry.npmjs.org/css-loader/3.4.2_webpack@4.41.6/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!/mnt/d/Users/Leo.Furze-Waddock/Syncthing/Projects/Dev/github.com/react-tdd-kit/lfurzewaddock/react-tdd-kit/node_modules/.pnpm/registry.npmjs.org/postcss-loader/3.0.0/node_modules/postcss-loader/src??postcss");

/***/ }),

/***/ "../../../node_modules/.pnpm/registry.npmjs.org/css-loader/3.4.2_webpack@4.41.6/node_modules/css-loader/dist/runtime/api.js":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** /mnt/d/Users/Leo.Furze-Waddock/Syncthing/Projects/Dev/github.com/react-tdd-kit/lfurzewaddock/react-tdd-kit/node_modules/.pnpm/registry.npmjs.org/css-loader/3.4.2_webpack@4.41.6/node_modules/css-loader/dist/runtime/api.js ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:////mnt/d/Users/Leo.Furze-Waddock/Syncthing/Projects/Dev/github.com/react-tdd-kit/lfurzewaddock/react-tdd-kit/node_modules/.pnpm/registry.npmjs.org/css-loader/3.4.2_webpack@4.41.6/node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "../../../node_modules/.pnpm/registry.npmjs.org/style-loader/1.1.3_webpack@4.41.6/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /mnt/d/Users/Leo.Furze-Waddock/Syncthing/Projects/Dev/github.com/react-tdd-kit/lfurzewaddock/react-tdd-kit/node_modules/.pnpm/registry.npmjs.org/style-loader/1.1.3_webpack@4.41.6/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:////mnt/d/Users/Leo.Furze-Waddock/Syncthing/Projects/Dev/github.com/react-tdd-kit/lfurzewaddock/react-tdd-kit/node_modules/.pnpm/registry.npmjs.org/style-loader/1.1.3_webpack@4.41.6/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "../src/CompApp.js":
/*!*************************!*\
  !*** ../src/CompApp.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ContChart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContChart */ \"../src/ContChart.js\");\n/* harmony import */ var _comp_app_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comp-app.module.css */ \"../src/comp-app.module.css\");\n/* harmony import */ var _comp_app_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_comp_app_module_css__WEBPACK_IMPORTED_MODULE_2__);\nfunction cov_1xyufhk11z(){var path=\"/mnt/d/Users/Leo.Furze-Waddock/Syncthing/Projects/Dev/github.com/react-tdd-kit/lfurzewaddock/react-tdd-kit/packages/ui/src/CompApp.js\";var hash=\"ef39310cbb280569eed456846fd6ffcb27dc82e6\";var global=new Function(\"return this\")();var gcv=\"__coverage__\";var coverageData={path:\"/mnt/d/Users/Leo.Furze-Waddock/Syncthing/Projects/Dev/github.com/react-tdd-kit/lfurzewaddock/react-tdd-kit/packages/ui/src/CompApp.js\",statementMap:{\"0\":{start:{line:7,column:16},end:{line:15,column:1}},\"1\":{start:{line:8,column:2},end:{line:14,column:4}}},fnMap:{\"0\":{name:\"(anonymous_0)\",decl:{start:{line:7,column:16},end:{line:7,column:17}},loc:{start:{line:7,column:22},end:{line:15,column:1}},line:7}},branchMap:{},s:{\"0\":0,\"1\":0},f:{\"0\":0},b:{},_coverageSchema:\"1a1c01bbd47fc00a2c39e90264f33305004495a9\",hash:\"ef39310cbb280569eed456846fd6ffcb27dc82e6\"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];cov_1xyufhk11z=function(){return actualCoverage;};return actualCoverage;}cov_1xyufhk11z();cov_1xyufhk11z().s[0]++;var CompApp=function CompApp(){cov_1xyufhk11z().f[0]++;cov_1xyufhk11z().s[1]++;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\",{className:_comp_app_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.sectionContainer},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"article\",{className:_comp_app_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.articleContainer},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ContChart__WEBPACK_IMPORTED_MODULE_1__[\"default\"],null)));};/* harmony default export */ __webpack_exports__[\"default\"] = (CompApp);\n\n//# sourceURL=webpack:///../src/CompApp.js?");

/***/ }),

/***/ "../src/CompHeader.js":
/*!****************************!*\
  !*** ../src/CompHeader.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\nfunction cov_2hl3368tq1(){var path=\"/mnt/d/Users/Leo.Furze-Waddock/Syncthing/Projects/Dev/github.com/react-tdd-kit/lfurzewaddock/react-tdd-kit/packages/ui/src/CompHeader.js\";var hash=\"c672095820e375af9e408fec5d13962591abb44a\";var global=new Function(\"return this\")();var gcv=\"__coverage__\";var coverageData={path:\"/mnt/d/Users/Leo.Furze-Waddock/Syncthing/Projects/Dev/github.com/react-tdd-kit/lfurzewaddock/react-tdd-kit/packages/ui/src/CompHeader.js\",statementMap:{\"0\":{start:{line:4,column:19},end:{line:26,column:1}},\"1\":{start:{line:5,column:2},end:{line:25,column:11}},\"2\":{start:{line:28,column:0},end:{line:30,column:2}}},fnMap:{\"0\":{name:\"(anonymous_0)\",decl:{start:{line:4,column:19},end:{line:4,column:20}},loc:{start:{line:5,column:2},end:{line:25,column:11}},line:5}},branchMap:{},s:{\"0\":0,\"1\":0,\"2\":0},f:{\"0\":0},b:{},_coverageSchema:\"1a1c01bbd47fc00a2c39e90264f33305004495a9\",hash:\"c672095820e375af9e408fec5d13962591abb44a\"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];cov_2hl3368tq1=function(){return actualCoverage;};return actualCoverage;}cov_2hl3368tq1();cov_2hl3368tq1().s[0]++;var CompHeader=function CompHeader(_ref){var title=_ref.title;cov_2hl3368tq1().f[0]++;cov_2hl3368tq1().s[1]++;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"header\",{style:{marginBottom:10}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\",{className:\"header\"},\" \",title,\" \")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\",{className:\"subheader-body\"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\",{className:\"subheader\"},\" \",\"Powered by\",\" \",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\",{className:\"link\",target:\"_blank\",rel:\"noopener noreferrer\",href:\"https://www.coindesk.com/price/\"},\"CoinDesk\"),\".\",\" \")));};cov_2hl3368tq1().s[2]++;CompHeader.propTypes={title:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired};/* harmony default export */ __webpack_exports__[\"default\"] = (CompHeader);\n\n//# sourceURL=webpack:///../src/CompHeader.js?");

/***/ }),

/***/ "../src/ContChart.js":
/*!***************************!*\
  !*** ../src/ContChart.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ \"core-js/modules/es.object.to-string\");\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise */ \"core-js/modules/es.promise\");\n/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_values__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/values */ \"@babel/runtime-corejs3/core-js-stable/instance/values\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_values__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_values__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/keys */ \"@babel/runtime-corejs3/core-js-stable/instance/keys\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_keys__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_keys__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ \"@babel/runtime-corejs3/core-js-stable/instance/map\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ \"@babel/runtime-corejs3/core-js-stable/instance/concat\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/bind */ \"@babel/runtime-corejs3/core-js-stable/instance/bind\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/classCallCheck */ \"@babel/runtime-corejs3/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/createClass */ \"@babel/runtime-corejs3/helpers/createClass\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/possibleConstructorReturn */ \"@babel/runtime-corejs3/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/getPrototypeOf */ \"@babel/runtime-corejs3/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/assertThisInitialized */ \"@babel/runtime-corejs3/helpers/assertThisInitialized\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_inherits__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/inherits */ \"@babel/runtime-corejs3/helpers/inherits\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_inherits__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_inherits__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-chartjs-2 */ \"react-chartjs-2\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! moment */ \"moment\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_17__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_18__);\n/* harmony import */ var _cont_chart_css__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./cont-chart.css */ \"../src/cont-chart.css\");\n/* harmony import */ var _cont_chart_css__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_cont_chart_css__WEBPACK_IMPORTED_MODULE_19__);\n/* harmony import */ var _CompHeader__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./CompHeader */ \"../src/CompHeader.js\");\n/* harmony import */ var _modules_currencies_actions_fetch__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./modules/currencies/actions/fetch */ \"../src/modules/currencies/actions/fetch.js\");\nfunction cov_2iascvpln1(){var path=\"/mnt/d/Users/Leo.Furze-Waddock/Syncthing/Projects/Dev/github.com/react-tdd-kit/lfurzewaddock/react-tdd-kit/packages/ui/src/ContChart.js\";var hash=\"cb127eb5937c9272a1931e61c3116d93ffa20ed1\";var global=new Function(\"return this\")();var gcv=\"__coverage__\";var coverageData={path:\"/mnt/d/Users/Leo.Furze-Waddock/Syncthing/Projects/Dev/github.com/react-tdd-kit/lfurzewaddock/react-tdd-kit/packages/ui/src/ContChart.js\",statementMap:{\"0\":{start:{line:16,column:4},end:{line:16,column:17}},\"1\":{start:{line:19,column:4},end:{line:19,column:52}},\"2\":{start:{line:20,column:4},end:{line:20,column:47}},\"3\":{start:{line:22,column:4},end:{line:26,column:6}},\"4\":{start:{line:27,column:4},end:{line:27,column:61}},\"5\":{start:{line:31,column:4},end:{line:31,column:26}},\"6\":{start:{line:32,column:39},end:{line:32,column:49}},\"7\":{start:{line:33,column:4},end:{line:33,column:29}},\"8\":{start:{line:37,column:4},end:{line:37,column:37}},\"9\":{start:{line:41,column:4},end:{line:41,column:61}},\"10\":{start:{line:45,column:42},end:{line:45,column:52}},\"11\":{start:{line:47,column:4},end:{line:50,column:21}},\"12\":{start:{line:48,column:24},end:{line:48,column:39}},\"13\":{start:{line:49,column:30},end:{line:49,column:63}},\"14\":{start:{line:50,column:18},end:{line:50,column:19}},\"15\":{start:{line:54,column:31},end:{line:54,column:41}},\"16\":{start:{line:55,column:20},end:{line:55,column:34}},\"17\":{start:{line:57,column:4},end:{line:82,column:6}},\"18\":{start:{line:58,column:41},end:{line:58,column:66}},\"19\":{start:{line:86,column:49},end:{line:86,column:59}},\"20\":{start:{line:87,column:25},end:{line:87,column:35}},\"21\":{start:{line:88,column:4},end:{line:128,column:5}},\"22\":{start:{line:89,column:6},end:{line:127,column:8}},\"23\":{start:{line:99,column:16},end:{line:105,column:25}},\"24\":{start:{line:113,column:33},end:{line:113,column:56}},\"25\":{start:{line:130,column:4},end:{line:130,column:16}},\"26\":{start:{line:134,column:24},end:{line:136,column:2}},\"27\":{start:{line:134,column:34},end:{line:136,column:1}},\"28\":{start:{line:138,column:27},end:{line:142,column:2}},\"29\":{start:{line:138,column:40},end:{line:142,column:1}},\"30\":{start:{line:140,column:4},end:{line:140,column:47}},\"31\":{start:{line:144,column:0},end:{line:151,column:2}}},fnMap:{\"0\":{name:\"(anonymous_0)\",decl:{start:{line:15,column:2},end:{line:15,column:3}},loc:{start:{line:15,column:21},end:{line:28,column:3}},line:15},\"1\":{name:\"(anonymous_1)\",decl:{start:{line:30,column:2},end:{line:30,column:3}},loc:{start:{line:30,column:22},end:{line:34,column:3}},line:30},\"2\":{name:\"(anonymous_2)\",decl:{start:{line:36,column:2},end:{line:36,column:3}},loc:{start:{line:36,column:22},end:{line:38,column:3}},line:36},\"3\":{name:\"(anonymous_3)\",decl:{start:{line:40,column:2},end:{line:40,column:3}},loc:{start:{line:40,column:32},end:{line:42,column:3}},line:40},\"4\":{name:\"(anonymous_4)\",decl:{start:{line:44,column:2},end:{line:44,column:3}},loc:{start:{line:44,column:19},end:{line:51,column:3}},line:44},\"5\":{name:\"(anonymous_5)\",decl:{start:{line:48,column:12},end:{line:48,column:13}},loc:{start:{line:48,column:24},end:{line:48,column:39}},line:48},\"6\":{name:\"(anonymous_6)\",decl:{start:{line:49,column:12},end:{line:49,column:13}},loc:{start:{line:49,column:30},end:{line:49,column:63}},line:49},\"7\":{name:\"(anonymous_7)\",decl:{start:{line:50,column:13},end:{line:50,column:14}},loc:{start:{line:50,column:18},end:{line:50,column:19}},line:50},\"8\":{name:\"(anonymous_8)\",decl:{start:{line:53,column:2},end:{line:53,column:3}},loc:{start:{line:53,column:20},end:{line:83,column:3}},line:53},\"9\":{name:\"(anonymous_9)\",decl:{start:{line:58,column:33},end:{line:58,column:34}},loc:{start:{line:58,column:41},end:{line:58,column:66}},line:58},\"10\":{name:\"(anonymous_10)\",decl:{start:{line:85,column:2},end:{line:85,column:3}},loc:{start:{line:85,column:11},end:{line:131,column:3}},line:85},\"11\":{name:\"(anonymous_11)\",decl:{start:{line:98,column:36},end:{line:98,column:37}},loc:{start:{line:99,column:16},end:{line:105,column:25}},line:99},\"12\":{name:\"(anonymous_12)\",decl:{start:{line:113,column:27},end:{line:113,column:28}},loc:{start:{line:113,column:33},end:{line:113,column:56}},line:113},\"13\":{name:\"(anonymous_13)\",decl:{start:{line:134,column:24},end:{line:134,column:25}},loc:{start:{line:134,column:34},end:{line:136,column:1}},line:134},\"14\":{name:\"(anonymous_14)\",decl:{start:{line:138,column:27},end:{line:138,column:28}},loc:{start:{line:138,column:40},end:{line:142,column:1}},line:138},\"15\":{name:\"(anonymous_15)\",decl:{start:{line:139,column:26},end:{line:139,column:27}},loc:{start:{line:139,column:32},end:{line:141,column:3}},line:139}},branchMap:{\"0\":{loc:{start:{line:88,column:4},end:{line:128,column:5}},type:\"if\",locations:[{start:{line:88,column:4},end:{line:128,column:5}},{start:{line:88,column:4},end:{line:128,column:5}}],line:88},\"1\":{loc:{start:{line:108,column:13},end:{line:120,column:13}},type:\"binary-expr\",locations:[{start:{line:108,column:13},end:{line:108,column:39}},{start:{line:109,column:14},end:{line:119,column:20}}],line:108}},s:{\"0\":0,\"1\":0,\"2\":0,\"3\":0,\"4\":0,\"5\":0,\"6\":0,\"7\":0,\"8\":0,\"9\":0,\"10\":0,\"11\":0,\"12\":0,\"13\":0,\"14\":0,\"15\":0,\"16\":0,\"17\":0,\"18\":0,\"19\":0,\"20\":0,\"21\":0,\"22\":0,\"23\":0,\"24\":0,\"25\":0,\"26\":0,\"27\":0,\"28\":0,\"29\":0,\"30\":0,\"31\":0},f:{\"0\":0,\"1\":0,\"2\":0,\"3\":0,\"4\":0,\"5\":0,\"6\":0,\"7\":0,\"8\":0,\"9\":0,\"10\":0,\"11\":0,\"12\":0,\"13\":0,\"14\":0,\"15\":0},b:{\"0\":[0,0],\"1\":[0,0]},_coverageSchema:\"1a1c01bbd47fc00a2c39e90264f33305004495a9\",hash:\"cb127eb5937c9272a1931e61c3116d93ffa20ed1\"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];cov_2iascvpln1=function(){return actualCoverage;};return actualCoverage;}cov_2iascvpln1();var ContChart=/*#__PURE__*/function(_Component){_babel_runtime_corejs3_helpers_inherits__WEBPACK_IMPORTED_MODULE_12___default()(ContChart,_Component);function ContChart(props){var _context;var _this;_babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7___default()(this,ContChart);cov_2iascvpln1().f[0]++;cov_2iascvpln1().s[0]++;_this=_babel_runtime_corejs3_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9___default()(this,_babel_runtime_corejs3_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10___default()(ContChart).call(this,props));// chart.js defaults\ncov_2iascvpln1().s[1]++;react_chartjs_2__WEBPACK_IMPORTED_MODULE_16__[\"Chart\"].defaults.global.defaultFontColor=\"#000\";cov_2iascvpln1().s[2]++;react_chartjs_2__WEBPACK_IMPORTED_MODULE_16__[\"Chart\"].defaults.global.defaultFontSize=16;cov_2iascvpln1().s[3]++;_this.state={historicalData:null,selectedCurrency:\"GBP\",baseUrl:\"https://api.coindesk.com/\"};cov_2iascvpln1().s[4]++;_this.onCurrencySelect=_babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_6___default()(_context=_this.onCurrencySelect).call(_context,_babel_runtime_corejs3_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_11___default()(_this));return _this;}_babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_8___default()(ContChart,[{key:\"componentDidMount\",value:function componentDidMount(){cov_2iascvpln1().f[1]++;cov_2iascvpln1().s[5]++;this.getBitcoinData();var _ref=(cov_2iascvpln1().s[6]++,this.props),getCurrencyDataHandler=_ref.getCurrencyDataHandler;cov_2iascvpln1().s[7]++;getCurrencyDataHandler();}},{key:\"onCurrencySelect\",value:function onCurrencySelect(e){cov_2iascvpln1().f[2]++;cov_2iascvpln1().s[8]++;this.setCurrency(e.target.value);}},{key:\"setCurrency\",value:function setCurrency(selectedCurrency){cov_2iascvpln1().f[3]++;cov_2iascvpln1().s[9]++;this.setState({selectedCurrency:selectedCurrency},this.getBitcoinData);}},{key:\"getBitcoinData\",value:function getBitcoinData(){var _context2,_this2=this;cov_2iascvpln1().f[4]++;var _ref2=(cov_2iascvpln1().s[10]++,this.state),baseUrl=_ref2.baseUrl,selectedCurrency=_ref2.selectedCurrency;cov_2iascvpln1().s[11]++;fetch(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_5___default()(_context2=\"\".concat(baseUrl,\"v1/bpi/historical/close.json?currency=\")).call(_context2,selectedCurrency)).then(function(response){cov_2iascvpln1().f[5]++;cov_2iascvpln1().s[12]++;return response.json();}).then(function(historicalData){cov_2iascvpln1().f[6]++;cov_2iascvpln1().s[13]++;return _this2.setState({historicalData:historicalData});}).catch(function(e){cov_2iascvpln1().f[7]++;cov_2iascvpln1().s[14]++;return e;});}},{key:\"formatChartData\",value:function formatChartData(){cov_2iascvpln1().f[8]++;var _ref3=(cov_2iascvpln1().s[15]++,this.state),historicalData=_ref3.historicalData;var _ref4=(cov_2iascvpln1().s[16]++,historicalData),bpi=_ref4.bpi;cov_2iascvpln1().s[17]++;return{labels:_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_4___default()(lodash__WEBPACK_IMPORTED_MODULE_15___default.a).call(lodash__WEBPACK_IMPORTED_MODULE_15___default.a,_babel_runtime_corejs3_core_js_stable_instance_keys__WEBPACK_IMPORTED_MODULE_3___default()(lodash__WEBPACK_IMPORTED_MODULE_15___default.a).call(lodash__WEBPACK_IMPORTED_MODULE_15___default.a,bpi),function(date){cov_2iascvpln1().f[9]++;cov_2iascvpln1().s[18]++;return moment__WEBPACK_IMPORTED_MODULE_17___default()(date).format(\"ll\");}),datasets:[{label:\"Bitcoin\",fill:true,lineTension:0.1,backgroundColor:\"rgba(75,192,192,0.4)\",borderColor:\"rgba(75,192,192,1)\",borderCapStyle:\"butt\",borderDash:[],borderDashOffset:0.0,borderJoinStyle:\"miter\",pointBorderColor:\"rgba(75,192,192,1)\",pointBackgroundColor:\"#fff\",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:\"rgba(75,192,192,1)\",pointHoverBorderColor:\"rgba(220,220,220,1)\",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:_babel_runtime_corejs3_core_js_stable_instance_values__WEBPACK_IMPORTED_MODULE_2___default()(lodash__WEBPACK_IMPORTED_MODULE_15___default.a).call(lodash__WEBPACK_IMPORTED_MODULE_15___default.a,bpi)}]};}},{key:\"render\",value:function render(){var _this3=this;cov_2iascvpln1().f[10]++;var _ref5=(cov_2iascvpln1().s[19]++,this.state),historicalData=_ref5.historicalData,selectedCurrency=_ref5.selectedCurrency;var _ref6=(cov_2iascvpln1().s[20]++,this.props),currency=_ref6.currency;cov_2iascvpln1().s[21]++;if(historicalData){var _context3;cov_2iascvpln1().b[0][0]++;cov_2iascvpln1().s[22]++;return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(\"div\",{className:\"app\"},react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_CompHeader__WEBPACK_IMPORTED_MODULE_20__[\"default\"],{title:\"BITCOIN PRICE INDEX\"}),react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(\"div\",{className:\"select-container\"},react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(\"span\",{style:{fontSize:18,fontFamily:\"Bungee\"}},\" \",\"Select your currency:\",\" \"),react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(\"select\",{value:selectedCurrency,onChange:this.onCurrencySelect},_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_4___default()(_context3=currency.options).call(_context3,function(obj){var _context4;cov_2iascvpln1().f[11]++;cov_2iascvpln1().s[23]++;return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(\"option\",{key:_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_5___default()(_context4=\"\".concat(obj.currency)).call(_context4,obj.country),value:obj.currency},\" \",obj.country,\" \");})),(cov_2iascvpln1().b[1][0]++,selectedCurrency!==\"PHP\")&&(cov_2iascvpln1().b[1][1]++,react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(\"div\",null,react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(\"button\",{className:\"link\",type:\"button\",onClick:function onClick(){cov_2iascvpln1().f[12]++;cov_2iascvpln1().s[24]++;return _this3.setCurrency(\"PHP\");},style:{color:\"black\",fontSize:16,fontFamily:\"Bungee\"}},\" \",\"[CLICK HERE TO RESET]\",\" \")))),react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(\"div\",{style:{marginTop:10}},react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_16__[\"Line\"],{data:this.formatChartData(),height:250})));}else{cov_2iascvpln1().b[0][1]++;}cov_2iascvpln1().s[25]++;return null;}}]);return ContChart;}(react__WEBPACK_IMPORTED_MODULE_13__[\"Component\"]);cov_2iascvpln1().s[26]++;var mapStateToProps=function mapStateToProps(state){cov_2iascvpln1().f[13]++;cov_2iascvpln1().s[27]++;return{currency:state.currency};};cov_2iascvpln1().s[28]++;var mapDispatchToProps=function mapDispatchToProps(dispatch){cov_2iascvpln1().f[14]++;cov_2iascvpln1().s[29]++;return{getCurrencyDataHandler:function getCurrencyDataHandler(){cov_2iascvpln1().f[15]++;cov_2iascvpln1().s[30]++;dispatch(_modules_currencies_actions_fetch__WEBPACK_IMPORTED_MODULE_21__[\"getCurrencyDataHandler\"]());}};};cov_2iascvpln1().s[31]++;ContChart.propTypes={currency:prop_types__WEBPACK_IMPORTED_MODULE_14___default.a.shape({isPending:prop_types__WEBPACK_IMPORTED_MODULE_14___default.a.bool.isRequired,errorMsg:prop_types__WEBPACK_IMPORTED_MODULE_14___default.a.string,options:prop_types__WEBPACK_IMPORTED_MODULE_14___default.a.array}).isRequired,getCurrencyDataHandler:prop_types__WEBPACK_IMPORTED_MODULE_14___default.a.func.isRequired};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_18__[\"connect\"])(mapStateToProps,mapDispatchToProps)(ContChart));\n\n//# sourceURL=webpack:///../src/ContChart.js?");

/***/ }),

/***/ "../src/app-config.js":
/*!****************************!*\
  !*** ../src/app-config.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction cov_yvv3kmled(){var path=\"/mnt/d/Users/Leo.Furze-Waddock/Syncthing/Projects/Dev/github.com/react-tdd-kit/lfurzewaddock/react-tdd-kit/packages/ui/src/app-config.js\";var hash=\"d0c653dd090405ed75d101f1a002e79da9f20fff\";var global=new Function(\"return this\")();var gcv=\"__coverage__\";var coverageData={path:\"/mnt/d/Users/Leo.Furze-Waddock/Syncthing/Projects/Dev/github.com/react-tdd-kit/lfurzewaddock/react-tdd-kit/packages/ui/src/app-config.js\",statementMap:{},fnMap:{},branchMap:{},s:{},f:{},b:{},_coverageSchema:\"1a1c01bbd47fc00a2c39e90264f33305004495a9\",hash:\"d0c653dd090405ed75d101f1a002e79da9f20fff\"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];cov_yvv3kmled=function(){return actualCoverage;};return actualCoverage;}cov_yvv3kmled();/* harmony default export */ __webpack_exports__[\"default\"] = ({api:{baseUrl:{production:\"\",staging:\"\",development:\"http://localhost:3000\"}},exchangeApi:{baseUrl:{production:\"\",staging:\"\",development:\"https://api.coindesk.com\"}}});\n\n//# sourceURL=webpack:///../src/app-config.js?");

/***/ }),

/***/ "../src/comp-app.module.css":
/*!**********************************!*\
  !*** ../src/comp-app.module.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/.pnpm/registry.npmjs.org/style-loader/1.1.3_webpack@4.41.6/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../../../node_modules/.pnpm/registry.npmjs.org/style-loader/1.1.3_webpack@4.41.6/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/.pnpm/registry.npmjs.org/css-loader/3.4.2_webpack@4.41.6/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-2-1!../../../node_modules/.pnpm/registry.npmjs.org/postcss-loader/3.0.0/node_modules/postcss-loader/src??postcss!./comp-app.module.css */ \"../../../node_modules/.pnpm/registry.npmjs.org/css-loader/3.4.2_webpack@4.41.6/node_modules/css-loader/dist/cjs.js?!../../../node_modules/.pnpm/registry.npmjs.org/postcss-loader/3.0.0/node_modules/postcss-loader/src/index.js?!../src/comp-app.module.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///../src/comp-app.module.css?");

/***/ }),

/***/ "../src/cont-chart.css":
/*!*****************************!*\
  !*** ../src/cont-chart.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/.pnpm/registry.npmjs.org/style-loader/1.1.3_webpack@4.41.6/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../../../node_modules/.pnpm/registry.npmjs.org/style-loader/1.1.3_webpack@4.41.6/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/.pnpm/registry.npmjs.org/css-loader/3.4.2_webpack@4.41.6/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../node_modules/.pnpm/registry.npmjs.org/postcss-loader/3.0.0/node_modules/postcss-loader/src??postcss!./cont-chart.css */ \"../../../node_modules/.pnpm/registry.npmjs.org/css-loader/3.4.2_webpack@4.41.6/node_modules/css-loader/dist/cjs.js?!../../../node_modules/.pnpm/registry.npmjs.org/postcss-loader/3.0.0/node_modules/postcss-loader/src/index.js?!../src/cont-chart.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///../src/cont-chart.css?");

/***/ }),

/***/ "../src/modules/ajax-base.js":
/*!***********************************!*\
  !*** ../src/modules/ajax-base.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app-config */ \"../src/app-config.js\");\nfunction cov_1is04zym80(){var path=\"/mnt/d/Users/Leo.Furze-Waddock/Syncthing/Projects/Dev/github.com/react-tdd-kit/lfurzewaddock/react-tdd-kit/packages/ui/src/modules/ajax-base.js\";var hash=\"4ab972507216cd219405f8d2887a363e31e323fb\";var global=new Function(\"return this\")();var gcv=\"__coverage__\";var coverageData={path:\"/mnt/d/Users/Leo.Furze-Waddock/Syncthing/Projects/Dev/github.com/react-tdd-kit/lfurzewaddock/react-tdd-kit/packages/ui/src/modules/ajax-base.js\",statementMap:{},fnMap:{},branchMap:{\"0\":{loc:{start:{line:6,column:33},end:{line:6,column:70}},type:\"binary-expr\",locations:[{start:{line:6,column:33},end:{line:6,column:53}},{start:{line:6,column:57},end:{line:6,column:70}}],line:6}},s:{},f:{},b:{\"0\":[0,0]},_coverageSchema:\"1a1c01bbd47fc00a2c39e90264f33305004495a9\",hash:\"4ab972507216cd219405f8d2887a363e31e323fb\"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];cov_1is04zym80=function(){return actualCoverage;};return actualCoverage;}cov_1is04zym80();/* harmony default export */ __webpack_exports__[\"default\"] = (axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({baseURL:\"\".concat(_app_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].api.baseUrl[(cov_1is04zym80().b[0][0]++,\"development\")||(cov_1is04zym80().b[0][1]++,\"development\")])}));\n\n//# sourceURL=webpack:///../src/modules/ajax-base.js?");

/***/ }),

/***/ "../src/modules/currencies/actions/fetch.js":
/*!**************************************************!*\
  !*** ../src/modules/currencies/actions/fetch.js ***!
  \**************************************************/
/*! exports provided: getDataBegin, getDataFailure, getDataSuccess, getCurrencyDataHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getDataBegin\", function() { return getDataBegin; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getDataFailure\", function() { return getDataFailure; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getDataSuccess\", function() { return getDataSuccess; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCurrencyDataHandler\", function() { return getCurrencyDataHandler; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"../src/modules/currencies/constants.js\");\n/* harmony import */ var _ajax_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ajax-base */ \"../src/modules/ajax-base.js\");\nfunction cov_1nuig8uhow(){var path=\"/mnt/d/Users/Leo.Furze-Waddock/Syncthing/Projects/Dev/github.com/react-tdd-kit/lfurzewaddock/react-tdd-kit/packages/ui/src/modules/currencies/actions/fetch.js\";var hash=\"f2d6a9a374ee411535863170dd42b78111ff53e7\";var global=new Function(\"return this\")();var gcv=\"__coverage__\";var coverageData={path:\"/mnt/d/Users/Leo.Furze-Waddock/Syncthing/Projects/Dev/github.com/react-tdd-kit/lfurzewaddock/react-tdd-kit/packages/ui/src/modules/currencies/actions/fetch.js\",statementMap:{\"0\":{start:{line:4,column:28},end:{line:6,column:2}},\"1\":{start:{line:4,column:35},end:{line:6,column:1}},\"2\":{start:{line:8,column:30},end:{line:11,column:2}},\"3\":{start:{line:8,column:40},end:{line:11,column:1}},\"4\":{start:{line:13,column:30},end:{line:16,column:2}},\"5\":{start:{line:13,column:39},end:{line:16,column:1}},\"6\":{start:{line:18,column:38},end:{line:33,column:1}},\"7\":{start:{line:18,column:44},end:{line:33,column:1}},\"8\":{start:{line:19,column:2},end:{line:19,column:27}},\"9\":{start:{line:20,column:14},end:{line:20,column:30}},\"10\":{start:{line:21,column:2},end:{line:32,column:7}},\"11\":{start:{line:26,column:6},end:{line:26,column:41}},\"12\":{start:{line:30,column:6},end:{line:30,column:47}},\"13\":{start:{line:31,column:6},end:{line:31,column:44}}},fnMap:{\"0\":{name:\"(anonymous_0)\",decl:{start:{line:4,column:28},end:{line:4,column:29}},loc:{start:{line:4,column:35},end:{line:6,column:1}},line:4},\"1\":{name:\"(anonymous_1)\",decl:{start:{line:8,column:30},end:{line:8,column:31}},loc:{start:{line:8,column:40},end:{line:11,column:1}},line:8},\"2\":{name:\"(anonymous_2)\",decl:{start:{line:13,column:30},end:{line:13,column:31}},loc:{start:{line:13,column:39},end:{line:16,column:1}},line:13},\"3\":{name:\"(anonymous_3)\",decl:{start:{line:18,column:38},end:{line:18,column:39}},loc:{start:{line:18,column:44},end:{line:33,column:1}},line:18},\"4\":{name:\"(anonymous_4)\",decl:{start:{line:18,column:44},end:{line:18,column:45}},loc:{start:{line:18,column:56},end:{line:33,column:1}},line:18},\"5\":{name:\"(anonymous_5)\",decl:{start:{line:23,column:10},end:{line:23,column:11}},loc:{start:{line:23,column:17},end:{line:27,column:5}},line:23},\"6\":{name:\"(anonymous_6)\",decl:{start:{line:28,column:11},end:{line:28,column:12}},loc:{start:{line:28,column:18},end:{line:32,column:5}},line:28}},branchMap:{},s:{\"0\":0,\"1\":0,\"2\":0,\"3\":0,\"4\":0,\"5\":0,\"6\":0,\"7\":0,\"8\":0,\"9\":0,\"10\":0,\"11\":0,\"12\":0,\"13\":0},f:{\"0\":0,\"1\":0,\"2\":0,\"3\":0,\"4\":0,\"5\":0,\"6\":0},b:{},_coverageSchema:\"1a1c01bbd47fc00a2c39e90264f33305004495a9\",hash:\"f2d6a9a374ee411535863170dd42b78111ff53e7\"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];cov_1nuig8uhow=function(){return actualCoverage;};return actualCoverage;}cov_1nuig8uhow();cov_1nuig8uhow().s[0]++;var getDataBegin=function getDataBegin(){cov_1nuig8uhow().f[0]++;cov_1nuig8uhow().s[1]++;return{type:_constants__WEBPACK_IMPORTED_MODULE_0__[\"CURRENCY_OPTIONS_LOAD_REQUEST\"]};};cov_1nuig8uhow().s[2]++;var getDataFailure=function getDataFailure(error){cov_1nuig8uhow().f[1]++;cov_1nuig8uhow().s[3]++;return{type:_constants__WEBPACK_IMPORTED_MODULE_0__[\"CURRENCY_OPTIONS_LOAD_FAILED\"],payload:error};};cov_1nuig8uhow().s[4]++;var getDataSuccess=function getDataSuccess(data){cov_1nuig8uhow().f[2]++;cov_1nuig8uhow().s[5]++;return{type:_constants__WEBPACK_IMPORTED_MODULE_0__[\"CURRENCY_OPTIONS_LOAD_SUCCESS\"],payload:data};};cov_1nuig8uhow().s[6]++;var getCurrencyDataHandler=function getCurrencyDataHandler(){cov_1nuig8uhow().f[3]++;cov_1nuig8uhow().s[7]++;return function(dispatch){cov_1nuig8uhow().f[4]++;cov_1nuig8uhow().s[8]++;dispatch(getDataBegin());var url=(cov_1nuig8uhow().s[9]++,\"/v1/currencies\");cov_1nuig8uhow().s[10]++;_ajax_base__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(url).then(function(res){cov_1nuig8uhow().f[5]++;cov_1nuig8uhow().s[11]++;/* eslint-disable-next-line no-console */ // console.log(JSON.stringify(res));\ndispatch(getDataSuccess(res.data));}).catch(function(err){cov_1nuig8uhow().f[6]++;cov_1nuig8uhow().s[12]++;/* eslint-disable-next-line no-console */console.log(\"\".concat(err.message,\" error\"),err);cov_1nuig8uhow().s[13]++;dispatch(getDataFailure(err.message));});};};\n\n//# sourceURL=webpack:///../src/modules/currencies/actions/fetch.js?");

/***/ }),

/***/ "../src/modules/currencies/constants.js":
/*!**********************************************!*\
  !*** ../src/modules/currencies/constants.js ***!
  \**********************************************/
/*! exports provided: CURRENCY_OPTIONS_LOAD_REQUEST, CURRENCY_OPTIONS_LOAD_FAILED, CURRENCY_OPTIONS_LOAD_SUCCESS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CURRENCY_OPTIONS_LOAD_REQUEST\", function() { return CURRENCY_OPTIONS_LOAD_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CURRENCY_OPTIONS_LOAD_FAILED\", function() { return CURRENCY_OPTIONS_LOAD_FAILED; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CURRENCY_OPTIONS_LOAD_SUCCESS\", function() { return CURRENCY_OPTIONS_LOAD_SUCCESS; });\nfunction cov_4pmiek0zs(){var path=\"/mnt/d/Users/Leo.Furze-Waddock/Syncthing/Projects/Dev/github.com/react-tdd-kit/lfurzewaddock/react-tdd-kit/packages/ui/src/modules/currencies/constants.js\";var hash=\"b4953b12e6a2fb65bb2e756369f0bf1cbce0c4c1\";var global=new Function(\"return this\")();var gcv=\"__coverage__\";var coverageData={path:\"/mnt/d/Users/Leo.Furze-Waddock/Syncthing/Projects/Dev/github.com/react-tdd-kit/lfurzewaddock/react-tdd-kit/packages/ui/src/modules/currencies/constants.js\",statementMap:{\"0\":{start:{line:1,column:45},end:{line:1,column:76}},\"1\":{start:{line:2,column:44},end:{line:2,column:74}},\"2\":{start:{line:3,column:45},end:{line:3,column:76}}},fnMap:{},branchMap:{},s:{\"0\":0,\"1\":0,\"2\":0},f:{},b:{},_coverageSchema:\"1a1c01bbd47fc00a2c39e90264f33305004495a9\",hash:\"b4953b12e6a2fb65bb2e756369f0bf1cbce0c4c1\"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];cov_4pmiek0zs=function(){return actualCoverage;};return actualCoverage;}cov_4pmiek0zs();var CURRENCY_OPTIONS_LOAD_REQUEST=(cov_4pmiek0zs().s[0]++,\"CURRENCY_OPTIONS_LOAD_REQUEST\");var CURRENCY_OPTIONS_LOAD_FAILED=(cov_4pmiek0zs().s[1]++,\"CURRENCY_OPTIONS_LOAD_FAILED\");var CURRENCY_OPTIONS_LOAD_SUCCESS=(cov_4pmiek0zs().s[2]++,\"CURRENCY_OPTIONS_LOAD_SUCCESS\");\n\n//# sourceURL=webpack:///../src/modules/currencies/constants.js?");

/***/ }),

/***/ "../src/modules/currencies/reducers/fetch.js":
/*!***************************************************!*\
  !*** ../src/modules/currencies/reducers/fetch.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"@babel/runtime-corejs3/core-js-stable/object/define-property\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-properties */ \"@babel/runtime-corejs3/core-js-stable/object/define-properties\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors */ \"@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/for-each */ \"@babel/runtime-corejs3/core-js-stable/instance/for-each\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor */ \"@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ \"@babel/runtime-corejs3/core-js-stable/instance/filter\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols */ \"@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/keys */ \"@babel/runtime-corejs3/core-js-stable/object/keys\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/defineProperty */ \"@babel/runtime-corejs3/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../constants */ \"../src/modules/currencies/constants.js\");\nfunction cov_ysvs1vzfk(){var path=\"/mnt/d/Users/Leo.Furze-Waddock/Syncthing/Projects/Dev/github.com/react-tdd-kit/lfurzewaddock/react-tdd-kit/packages/ui/src/modules/currencies/reducers/fetch.js\";var hash=\"a74aa7845bd07799bba0ebab11accc218d437dfd\";var global=new Function(\"return this\")();var gcv=\"__coverage__\";var coverageData={path:\"/mnt/d/Users/Leo.Furze-Waddock/Syncthing/Projects/Dev/github.com/react-tdd-kit/lfurzewaddock/react-tdd-kit/packages/ui/src/modules/currencies/reducers/fetch.js\",statementMap:{\"0\":{start:{line:3,column:21},end:{line:7,column:1}},\"1\":{start:{line:9,column:14},end:{line:32,column:1}},\"2\":{start:{line:10,column:2},end:{line:31,column:3}},\"3\":{start:{line:12,column:6},end:{line:15,column:8}},\"4\":{start:{line:17,column:6},end:{line:21,column:8}},\"5\":{start:{line:23,column:6},end:{line:28,column:8}},\"6\":{start:{line:30,column:6},end:{line:30,column:19}}},fnMap:{\"0\":{name:\"(anonymous_0)\",decl:{start:{line:9,column:14},end:{line:9,column:15}},loc:{start:{line:9,column:48},end:{line:32,column:1}},line:9}},branchMap:{\"0\":{loc:{start:{line:9,column:15},end:{line:9,column:35}},type:\"default-arg\",locations:[{start:{line:9,column:23},end:{line:9,column:35}}],line:9},\"1\":{loc:{start:{line:10,column:2},end:{line:31,column:3}},type:\"switch\",locations:[{start:{line:11,column:4},end:{line:15,column:8}},{start:{line:16,column:4},end:{line:21,column:8}},{start:{line:22,column:4},end:{line:28,column:8}},{start:{line:29,column:4},end:{line:30,column:19}}],line:10}},s:{\"0\":0,\"1\":0,\"2\":0,\"3\":0,\"4\":0,\"5\":0,\"6\":0},f:{\"0\":0},b:{\"0\":[0],\"1\":[0,0,0,0]},_coverageSchema:\"1a1c01bbd47fc00a2c39e90264f33305004495a9\",hash:\"a74aa7845bd07799bba0ebab11accc218d437dfd\"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];cov_ysvs1vzfk=function(){return actualCoverage;};return actualCoverage;}cov_ysvs1vzfk();function ownKeys(object,enumerableOnly){var keys=_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_7___default()(object);if(_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_6___default.a){var symbols=_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_6___default()(object);if(enumerableOnly)symbols=_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5___default()(symbols).call(symbols,function(sym){return _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default()(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){var _context;_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3___default()(_context=ownKeys(Object(source),true)).call(_context,function(key){_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(target,key,source[key]);});}else if(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a){_babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target,_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source));}else{var _context2;_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3___default()(_context2=ownKeys(Object(source))).call(_context2,function(key){_babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target,key,_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default()(source,key));});}}return target;}var initialState=(cov_ysvs1vzfk().s[0]++,{isPending:false,errorMsg:\"\",options:[]});cov_ysvs1vzfk().s[1]++;var fetch=function fetch(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:(cov_ysvs1vzfk().b[0][0]++,initialState);var action=arguments.length>1?arguments[1]:undefined;cov_ysvs1vzfk().f[0]++;cov_ysvs1vzfk().s[2]++;switch(action.type){case _constants__WEBPACK_IMPORTED_MODULE_9__[\"CURRENCY_OPTIONS_LOAD_REQUEST\"]:cov_ysvs1vzfk().b[1][0]++;cov_ysvs1vzfk().s[3]++;return _objectSpread({},state,{isPending:true});case _constants__WEBPACK_IMPORTED_MODULE_9__[\"CURRENCY_OPTIONS_LOAD_FAILED\"]:cov_ysvs1vzfk().b[1][1]++;cov_ysvs1vzfk().s[4]++;return _objectSpread({},state,{isPending:false,errorMsg:action.payload});case _constants__WEBPACK_IMPORTED_MODULE_9__[\"CURRENCY_OPTIONS_LOAD_SUCCESS\"]:cov_ysvs1vzfk().b[1][2]++;cov_ysvs1vzfk().s[5]++;return _objectSpread({},state,{isPending:false,errorMsg:\"\",options:action.payload});default:cov_ysvs1vzfk().b[1][3]++;cov_ysvs1vzfk().s[6]++;return state;}};/* harmony default export */ __webpack_exports__[\"default\"] = (fetch);\n\n//# sourceURL=webpack:///../src/modules/currencies/reducers/fetch.js?");

/***/ }),

/***/ "../src/modules/currencies/reducers/index.js":
/*!***************************************************!*\
  !*** ../src/modules/currencies/reducers/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch */ \"../src/modules/currencies/reducers/fetch.js\");\nfunction cov_ezwsvt3qj(){var path=\"/mnt/d/Users/Leo.Furze-Waddock/Syncthing/Projects/Dev/github.com/react-tdd-kit/lfurzewaddock/react-tdd-kit/packages/ui/src/modules/currencies/reducers/index.js\";var hash=\"538bdd0075d2eb40e5bc8008be392ec1c2182490\";var global=new Function(\"return this\")();var gcv=\"__coverage__\";var coverageData={path:\"/mnt/d/Users/Leo.Furze-Waddock/Syncthing/Projects/Dev/github.com/react-tdd-kit/lfurzewaddock/react-tdd-kit/packages/ui/src/modules/currencies/reducers/index.js\",statementMap:{},fnMap:{},branchMap:{},s:{},f:{},b:{},_coverageSchema:\"1a1c01bbd47fc00a2c39e90264f33305004495a9\",hash:\"538bdd0075d2eb40e5bc8008be392ec1c2182490\"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];cov_ezwsvt3qj=function(){return actualCoverage;};return actualCoverage;}cov_ezwsvt3qj();/* harmony default export */ __webpack_exports__[\"default\"] = ({currency:_fetch__WEBPACK_IMPORTED_MODULE_0__[\"default\"]});\n\n//# sourceURL=webpack:///../src/modules/currencies/reducers/index.js?");

/***/ }),

/***/ "../src/modules/reducers.js":
/*!**********************************!*\
  !*** ../src/modules/reducers.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _currencies_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currencies/reducers */ \"../src/modules/currencies/reducers/index.js\");\nfunction cov_ddhobdhtf(){var path=\"/mnt/d/Users/Leo.Furze-Waddock/Syncthing/Projects/Dev/github.com/react-tdd-kit/lfurzewaddock/react-tdd-kit/packages/ui/src/modules/reducers.js\";var hash=\"3a851f0a7d387622ebbd5b67b0da1e2cd69db32c\";var global=new Function(\"return this\")();var gcv=\"__coverage__\";var coverageData={path:\"/mnt/d/Users/Leo.Furze-Waddock/Syncthing/Projects/Dev/github.com/react-tdd-kit/lfurzewaddock/react-tdd-kit/packages/ui/src/modules/reducers.js\",statementMap:{\"0\":{start:{line:5,column:17},end:{line:7,column:2}}},fnMap:{},branchMap:{},s:{\"0\":0},f:{},b:{},_coverageSchema:\"1a1c01bbd47fc00a2c39e90264f33305004495a9\",hash:\"3a851f0a7d387622ebbd5b67b0da1e2cd69db32c\"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];cov_ddhobdhtf=function(){return actualCoverage;};return actualCoverage;}cov_ddhobdhtf();var reducers=(cov_ddhobdhtf().s[0]++,Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({currency:_currencies_reducers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].currency}));/* harmony default export */ __webpack_exports__[\"default\"] = (reducers);\n\n//# sourceURL=webpack:///../src/modules/reducers.js?");

/***/ }),

/***/ "./enzyme-setup.js":
/*!*************************!*\
  !*** ./enzyme-setup.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var enzyme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! enzyme */ \"enzyme\");\n/* harmony import */ var enzyme__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(enzyme__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var enzyme_adapter_react_16__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! enzyme-adapter-react-16 */ \"enzyme-adapter-react-16\");\n/* harmony import */ var enzyme_adapter_react_16__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(enzyme_adapter_react_16__WEBPACK_IMPORTED_MODULE_1__);\n/* eslint-disable-next-line import/no-extraneous-dependencies */\n\n/* eslint-disable-next-line import/no-extraneous-dependencies */\n\n\nObject(enzyme__WEBPACK_IMPORTED_MODULE_0__[\"configure\"])({ adapter: new enzyme_adapter_react_16__WEBPACK_IMPORTED_MODULE_1___default.a() });\n\n\n//# sourceURL=webpack:///./enzyme-setup.js?");

/***/ }),

/***/ "./integration/index.test.js":
/*!***********************************!*\
  !*** ./integration/index.test.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var tape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tape */ \"tape\");\n/* harmony import */ var tape__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tape__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _src_CompApp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../src/CompApp */ \"../src/CompApp.js\");\n/* harmony import */ var _src_modules_reducers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../src/modules/reducers */ \"../src/modules/reducers.js\");\n/* harmony import */ var _enzyme_setup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../enzyme-setup */ \"./enzyme-setup.js\");\n// eslint-disable-next-line import/no-extraneous-dependencies\ntape__WEBPACK_IMPORTED_MODULE_0___default()(\"index.js\",function(t){t.test(\"App renders\",function(assert){var div=document.createElement(\"div\");var middleware=[redux_thunk__WEBPACK_IMPORTED_MODULE_5___default.a];var store=Object(redux__WEBPACK_IMPORTED_MODULE_3__[\"createStore\"])(_src_modules_reducers__WEBPACK_IMPORTED_MODULE_7__[\"default\"],Object(redux__WEBPACK_IMPORTED_MODULE_3__[\"compose\"])(redux__WEBPACK_IMPORTED_MODULE_3__[\"applyMiddleware\"].apply(void 0,middleware)));react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"Provider\"],{store:store},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_CompApp__WEBPACK_IMPORTED_MODULE_6__[\"default\"],null)),div,function(){// eslint-disable-next-line no-console\n// console.log(div.innerHTML);\n});react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.unmountComponentAtNode(div);assert.pass(\"renders without crashing\");assert.end();});});\n\n//# sourceURL=webpack:///./integration/index.test.js?");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/instance/bind":
/*!**********************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/instance/bind" ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime-corejs3/core-js-stable/instance/bind\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime-corejs3/core-js-stable/instance/bind%22?");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/instance/concat":
/*!************************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/instance/concat" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime-corejs3/core-js-stable/instance/concat\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime-corejs3/core-js-stable/instance/concat%22?");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/instance/filter":
/*!************************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/instance/filter" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime-corejs3/core-js-stable/instance/filter\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime-corejs3/core-js-stable/instance/filter%22?");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/instance/for-each":
/*!**************************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/instance/for-each" ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime-corejs3/core-js-stable/instance/for-each\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime-corejs3/core-js-stable/instance/for-each%22?");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/instance/keys":
/*!**********************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/instance/keys" ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime-corejs3/core-js-stable/instance/keys\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime-corejs3/core-js-stable/instance/keys%22?");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/instance/map":
/*!*********************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/instance/map" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime-corejs3/core-js-stable/instance/map\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime-corejs3/core-js-stable/instance/map%22?");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/instance/values":
/*!************************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/instance/values" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime-corejs3/core-js-stable/instance/values\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime-corejs3/core-js-stable/instance/values%22?");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/object/define-properties":
/*!*********************************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/object/define-properties" ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime-corejs3/core-js-stable/object/define-properties\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime-corejs3/core-js-stable/object/define-properties%22?");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/object/define-property":
/*!*******************************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/object/define-property" ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime-corejs3/core-js-stable/object/define-property\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime-corejs3/core-js-stable/object/define-property%22?");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor":
/*!*******************************************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor" ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor%22?");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors":
/*!********************************************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors" ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors%22?");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols":
/*!****************************************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols" ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols%22?");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/object/keys":
/*!********************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/object/keys" ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime-corejs3/core-js-stable/object/keys\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime-corejs3/core-js-stable/object/keys%22?");

/***/ }),

/***/ "@babel/runtime-corejs3/helpers/assertThisInitialized":
/*!***********************************************************************!*\
  !*** external "@babel/runtime-corejs3/helpers/assertThisInitialized" ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime-corejs3/helpers/assertThisInitialized\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime-corejs3/helpers/assertThisInitialized%22?");

/***/ }),

/***/ "@babel/runtime-corejs3/helpers/classCallCheck":
/*!****************************************************************!*\
  !*** external "@babel/runtime-corejs3/helpers/classCallCheck" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime-corejs3/helpers/classCallCheck\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime-corejs3/helpers/classCallCheck%22?");

/***/ }),

/***/ "@babel/runtime-corejs3/helpers/createClass":
/*!*************************************************************!*\
  !*** external "@babel/runtime-corejs3/helpers/createClass" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime-corejs3/helpers/createClass\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime-corejs3/helpers/createClass%22?");

/***/ }),

/***/ "@babel/runtime-corejs3/helpers/defineProperty":
/*!****************************************************************!*\
  !*** external "@babel/runtime-corejs3/helpers/defineProperty" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime-corejs3/helpers/defineProperty\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime-corejs3/helpers/defineProperty%22?");

/***/ }),

/***/ "@babel/runtime-corejs3/helpers/getPrototypeOf":
/*!****************************************************************!*\
  !*** external "@babel/runtime-corejs3/helpers/getPrototypeOf" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime-corejs3/helpers/getPrototypeOf\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime-corejs3/helpers/getPrototypeOf%22?");

/***/ }),

/***/ "@babel/runtime-corejs3/helpers/inherits":
/*!**********************************************************!*\
  !*** external "@babel/runtime-corejs3/helpers/inherits" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime-corejs3/helpers/inherits\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime-corejs3/helpers/inherits%22?");

/***/ }),

/***/ "@babel/runtime-corejs3/helpers/possibleConstructorReturn":
/*!***************************************************************************!*\
  !*** external "@babel/runtime-corejs3/helpers/possibleConstructorReturn" ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime-corejs3/helpers/possibleConstructorReturn\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime-corejs3/helpers/possibleConstructorReturn%22?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "core-js/modules/es.object.to-string":
/*!******************************************************!*\
  !*** external "core-js/modules/es.object.to-string" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es.object.to-string\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es.object.to-string%22?");

/***/ }),

/***/ "core-js/modules/es.promise":
/*!*********************************************!*\
  !*** external "core-js/modules/es.promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es.promise\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es.promise%22?");

/***/ }),

/***/ "enzyme":
/*!*************************!*\
  !*** external "enzyme" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"enzyme\");\n\n//# sourceURL=webpack:///external_%22enzyme%22?");

/***/ }),

/***/ "enzyme-adapter-react-16":
/*!******************************************!*\
  !*** external "enzyme-adapter-react-16" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"enzyme-adapter-react-16\");\n\n//# sourceURL=webpack:///external_%22enzyme-adapter-react-16%22?");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash\");\n\n//# sourceURL=webpack:///external_%22lodash%22?");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"moment\");\n\n//# sourceURL=webpack:///external_%22moment%22?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");\n\n//# sourceURL=webpack:///external_%22prop-types%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-chartjs-2":
/*!**********************************!*\
  !*** external "react-chartjs-2" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-chartjs-2\");\n\n//# sourceURL=webpack:///external_%22react-chartjs-2%22?");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom\");\n\n//# sourceURL=webpack:///external_%22react-dom%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ }),

/***/ "tape":
/*!***********************!*\
  !*** external "tape" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"tape\");\n\n//# sourceURL=webpack:///external_%22tape%22?");

/***/ })

/******/ });
//# sourceMappingURL=app.bundle.js.map