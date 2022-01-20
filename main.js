/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html,body{\\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\\n    margin:0;\\n    height: 100%;\\n    display: flex;\\n    flex-direction: column;\\n}\\n.header{\\n    padding:30px;\\n    font-size: 48px;\\n    color: rgb(228, 227, 227);\\n    background-color: rgb(51, 47, 47);\\n}\\n#content{\\n    display: flex;\\n    flex-direction: column;\\n    height: 100%;\\n}\\n.mainpage{\\n    display: flex;\\n    flex:1;\\n}\\n.sidebar{\\n    padding: 25px;\\n    display: flex;\\n    flex-direction: column;\\n    background-color: rgb(228, 227, 227);\\n    color: rgb(51, 47, 47);\\n}\\n.options{\\n    display: flex;\\n    flex-direction: column;\\n}\\n:hover.addBtn, :hover.sideBtn{\\n    background-color: rgb(209, 205, 205) !important;\\n}\\n.sideBtn, .addBtn{\\n    font-size: 18px;\\n    background-color: rgb(228, 227, 227);\\n    color:rgb(51, 47, 47) ;\\n    padding: 5px 120px 5px 15px;\\n    border: 0px;\\n    border-radius: 5px;\\n    text-align: start;\\n}\\ni {\\n    margin-right: 10px;\\n  }\\n.Title{\\n      font-size: 26px;\\n      font-weight: bold;\\n      padding: 20px 10px;\\n  }\\n.main{\\n    display: flex;\\n    flex-direction: column;\\n    background-color: rgb(243, 243, 243);\\n    color:rgb(51, 47, 47) ;\\n    flex:1;\\n    padding: 25px 100px;\\n}\\n.footer{\\n    flex:0;\\n    width: 100%;\\n    text-align: center;\\n    color: rgb(228, 227, 227);\\n    background-color: rgb(51, 47, 47);\\n    padding: 15px;\\n}\\nbutton{\\n    cursor: pointer;\\n}\\na{\\n    text-decoration: none;\\n    color: rgb(228, 227, 227);\\n}\\n.projectPopUp{\\n    display: none;\\n    background-color:rgb(243, 243, 243);\\n    border:2px solid rgb(228, 227, 227);\\n    width: 300px;\\n    height: 180px;\\n    border-radius: 10px;\\n    position: fixed;\\n    top:calc(50% - 90px);\\n    left: calc(50% - 150px);\\n}\\n.Projects{\\n    display: flex;\\n    flex-direction: column;\\n}\\n.todoPopUp{\\n    display: none;\\n    background-color:rgb(243, 243, 243);\\n    border:2px solid rgb(228, 227, 227);\\n    width: 600px;\\n    height: 250px;\\n    border-radius: 10px;\\n    position: fixed;\\n    top: calc(50% - 125px);\\n    left: calc(50% - 300px);\\n}\\nform{\\n    padding: 15px 25px;\\n    display: flex;\\n    flex-direction: column;\\n    gap: 5px;\\n    flex: 1;\\n}\\n.formContent{\\n    display: flex;\\n    width:100%; \\n    gap:15px;\\n}\\n.leftForm{\\n    flex: 1 0 40%;\\n}\\ntextarea{\\n    width:97%; \\n    height: 69px;\\n    font-size: 16px;\\n}\\ninput{\\n    width:97%; \\n    font-size: 16px;\\n}\\n#T_date{\\n    color:rgb(128, 119, 119) ;\\n    height: 23px;\\n}\\nselect{\\n    font-size: 16px;\\n    background-color: white;\\n    color:rgb(128, 119, 119) ;\\n    cursor: pointer;\\n    border: 1px solid rgb(139, 130, 130);\\n    border-radius: 2px;\\n}\\n.formBtns, .taskBtns{\\n    display: flex;\\n    justify-content: flex-end;\\n    padding-top: 5px;\\n    gap: 5px;\\n}\\n.taskBtns{\\n    padding-top: 15px;\\n}\\n.formBtn{\\n    font-size: 18px;\\n    background-color: rgb(51, 47, 47);\\n    color:rgb(228, 227, 227) ;\\n    padding: 5px 10px;\\n    border: 0px;\\n    border-radius: 5px; \\n}\\n:hover.formBtn{\\n    opacity: 80%;\\n}\\n.formTitle{\\n    font-size: 26px;\\n    font-weight: bold;\\n    padding-bottom: 10px;\\n}\\np{\\n    margin: 5px 0px;\\n    font-size: 18px;\\n}\\n.btnDel{\\n    display: flex;\\n    width: 100%;\\n    justify-content: flex-end;\\n}\\n.delete{\\n    color:rgb(51, 47, 47) ;\\n}\\n.list{\\n    display: flex;\\n    flex-direction: column;\\n    padding-bottom: 15px;\\n    gap: 10px;\\n}\\n.taskName{\\n    display: flex;\\n    justify-content:start;\\n    width: 100%;\\n}\\n.infoTask{\\n    display: flex;\\n    justify-content: flex-end;\\n    align-items: center;\\n    gap: 5px;\\n}\\n.checkbox{\\n    width: 15px; \\n    margin: 0;\\n    margin-right: 5px;\\n    cursor: pointer;\\n}\\n.edit, .delete_T{\\n    background-color: rgb(243, 243, 243);\\n    font-size: 18px;\\n    color:rgb(51, 47, 47) ;\\n    border: none;\\n}\\n.Tasks{\\n    display:flex;\\n    align-items:center;\\n    padding:5px 15px; gap:5px;\\n    font-size: 18px;\\n    color:rgb(51, 47, 47) ;\\n    border: 0px;\\n    border-radius: 5px;\\n    text-align: start;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo_list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo_list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo_list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo_list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo_list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo_list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo_list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo_list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo_list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo_list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\nlet content=document.querySelector(\"#content\");\ncontent=(()=>{\n    let index=0;\n    let myProjects=[];\n    let selection=2;\n    let userSelection=0;\n    let myTasks=[];\n    let index1=0;\n    let idCode=0;\n    let projects=document.querySelector('.Projects');\n    let list=document.querySelector('.list');\n    let change=0;\n    let toChange=\"\";\n    let home=document.querySelector('#Inbox');\n    let today=document.querySelector('#Today');\n    let week=document.querySelector('#Week');\n    let state=0;\n    let state1=0;\n\n    function mainBuild(){\n        let main=document.querySelector('.main');\n        addTask();\n        if(state==0){\n            if(userSelection>2 || userSelection==0){\n                let addButton=document.createElement('button');\n                addButton.classList.add('addBtn');\n                addButton.id=\"addTask\";\n                addButton.value=\"2\";\n                addButton.innerHTML=`<i class=\"fas fa-plus\"></i>Add Task`;\n                main.appendChild(addButton);\n                addButton.addEventListener('click',()=>{\n                    VisualizePopUp(addButton.value);\n                })\n                state=1;\n            }\n        }\n        else if(state1==state){\n            let remove=document.querySelector('#addTask');\n            let trash=main.removeChild(remove);\n            state=0;\n        }\n    } \n    \n    function start() {\n        let sideBtn=document.querySelectorAll('.sideBtn');\n        let name=document.querySelector('#selected');\n        sideBtn.forEach((sideBtn)=>{\n            if(userSelection>2 || sideBtn.value>2){\n                sideBtn.style.cssText=\"background-color: rgb(228, 227, 227);display:flex;align-items:center;padding:5px 15px;\";\n                if(sideBtn.value==userSelection){\n                    sideBtn.style.cssText=\"background-color: rgb(209, 205, 205);display:flex;align-items:center;padding:5px 15px;\";\n                    name.textContent=sideBtn.id;\n                }\n            }else{\n                sideBtn.style.cssText=\"background-color: rgb(228, 227, 227);\";\n                if(sideBtn.value==userSelection){\n                    sideBtn.style.cssText=\"background-color: rgb(209, 205, 205);\"\n                    if(sideBtn.id==\"Week\"){\n                        name.textContent=\"This week\"\n                    }else{name.textContent=sideBtn.id;} \n                }\n            }\n        })\n        mainBuild();\n    }\n\n    start();\n\n    home.addEventListener('click',()=>{\n        userSelection=0;\n        state1=0;\n        start();\n    })\n    today.addEventListener('click',()=>{\n        userSelection=1;\n        state1=1;\n        start();\n    })\n    week.addEventListener('click',()=>{\n        userSelection=2;\n        state1=1;\n        start();\n    })\n\n    class project{\n        constructor(name){\n            this.name=name;\n            this.selection=selection;\n        };\n    }\n\n    class task{\n        constructor(name,description,date,priority,id){\n            this.name=name;\n            this.description=description;\n            this.date=date;\n            this.priority=priority;\n            this.id=id;\n            this.selection=userSelection;\n        }\n    }\n\n    function VisualizePopUp(value){\n        let PopUp=\"\";\n        if(value==\"1\"){\n            PopUp=document.querySelector('.projectPopUp');\n            document.getElementById(\"form\").reset();  \n        }else{\n            PopUp=document.querySelector('.todoPopUp');\n            document.getElementById(\"form1\").reset(); \n        }\n        document.getElementById(\"content\").style.cssText=\"opacity:60%;\"\n        PopUp.style.cssText=\"display:flex\";\n    }\n\n    function close(value){\n        let PopUp=\"\";\n        if(value==\"1\"){\n            PopUp=document.querySelector('.projectPopUp');  \n        }else{\n            PopUp=document.querySelector('.todoPopUp');\n        }\n        document.getElementById(\"content\").style.cssText=\"opacity:100%;\"\n        PopUp.style.cssText=\"display:none\"; \n    }\n\n    function addProject() {\n        while(projects.firstChild){\n            projects.removeChild(projects.firstChild); \n        }\n        if(index!=0){\n            for(let i=0;i<index;i++){\n                let newProjects=document.createElement('button');\n                newProjects.classList.add('sideBtn');\n                newProjects.style.cssText=\"display:flex;align-items:center;padding:5px 15px;\"\n                newProjects.id = myProjects[i].name;\n                newProjects.value = myProjects[i].selection;\n                newProjects.innerHTML=`<i class=\"fas fa-tasks\"></i>${myProjects[i].name}<div class= \"btnDel\"> <div class=\"delete\" id=\"${myProjects[i].selection}\"> <i class=\"fas fa-trash-alt\" id=\"${myProjects[i].name}\"></i></div></div>`;\n                projects.appendChild(newProjects);\n                state1=0;\n                start();\n                newProjects.addEventListener('click',()=>{\n                    userSelection=myProjects[i].selection;\n                    start();\n                })\n            }\n            \n            let del=document.querySelectorAll('.delete');\n            del.forEach((del)=>{\n                del.addEventListener('click',()=>{\n                    for(let i=0;i<index;i++){\n                        if(myProjects[i].selection==del.id){\n                            myProjects.splice(i,1);\n                            state1=0;\n                            index=index-1;\n                        }\n                    }\n                    userSelection=0;\n                    addProject();\n                })\n            })\n        }else{\n            userSelection=0;\n            start();\n        }\n    }\n\n    function addTask(){\n        while(list.firstChild){\n            list.removeChild(list.firstChild); \n        }\n        for(let i=0;i<index1;i++){\n            if(userSelection==myTasks[i].selection){\n                let newTask=document.createElement('div');\n                newTask.classList.add('Tasks');\n                newTask.id = myTasks[i].name;\n                let color=\"\";\n                if(myTasks[i].priority==\"high\"){\n                    color=\"#DE4C4A\";\n                }else if(myTasks[i].priority==\"medium\"){\n                    color=\"orange\";\n                }\n                newTask.innerHTML=`<div class=\"taskName\"><input class=\"checkbox\" type=\"checkbox\" id=\"${myTasks[i].name}\">${myTasks[i].name}</div>\n                                    <div class= \"infoTask\">${myTasks[i].date}\n                                        <button class=\"edit\" id=\"${myTasks[i].id}\"><i class=\"fas fa-edit\"></i></button>\n                                        <i class=\"fas fa-flag\" style=\"color:${color}\"></i>\n                                        <button class=\"delete_T\" id=\"${myTasks[i].id}\"><i class=\"fas fa-trash-alt\"></i></button>\n                                    </div>`;\n                list.appendChild(newTask); \n            }\n        }\n\n        let del=document.querySelectorAll('.delete_T');\n        del.forEach((del)=>{\n            del.addEventListener('click',()=>{\n                for(let i=0;i<index1;i++){\n                    if(myTasks[i].id==del.id){\n                        myTasks.splice(i,1);\n                        index1=index1-1;\n                    }\n                }\n                addTask();\n            })\n        })\n\n        let edit=document.querySelectorAll('.edit');\n        edit.forEach((edit)=>{\n            edit.addEventListener('click',()=>{\n                for(let i=0;i<index1;i++){\n                    if(myTasks[i].id==edit.id){\n                        change=1;\n                        toChange=myTasks[i].id;\n                        VisualizePopUp(\"2\");\n                    }\n                }\n                addTask();\n            })\n            \n        })\n    }\n    \n    let btnAddT=document.querySelector('#addT');\n    btnAddT.addEventListener('click', (ev)=>{\n        ev.preventDefault();\n        let T_name=document.querySelector('#T_name');\n        let T_desc=document.querySelector('#T_desc');\n        let T_priority=document.querySelector('#T_priority');\n        let T_date=document.querySelector('#T_date');\n        if(T_name.value!=\"\" && T_desc!=\"\" && T_priority!=\"null\" && T_date!=\"\"){\n            let taskName=T_name.value;\n            if(change==0){\n                taskName=new task(T_name.value,T_desc.value,T_date.value,T_priority.value,idCode);\n                myTasks[index1]=taskName;\n                index1=index1+1;\n                addTask();\n                idCode=idCode+1;   \n            }else{\n                for(let i=0;i<index1;i++){\n                    taskName=new task(T_name.value,T_desc.value,T_date.value,T_priority.value,toChange);\n                    if(myTasks[i].id==toChange){\n                        myTasks[i]=taskName;\n                        addTask();\n                        change=0;\n                        toChange=\"\";\n                    }\n                }\n            }\n            close(\"2\");\n        }else{alert(\"Please complete all the fields!\")} \n    })\n\n    let addP=document.querySelector('#addProject');\n    addP.addEventListener('click',()=>{\n        VisualizePopUp(addP.value);\n    })\n\n    let btnAddP=document.querySelector('#addP')\n    btnAddP.addEventListener('click',(ev)=>{\n        ev.preventDefault();\n        let projectName=document.querySelector('#P_name');\n        if(projectName.value!=\"\"){\n            selection=selection+1;\n            let p=projectName.value;\n            p=new project(projectName.value);\n            myProjects[index]=p;\n            index=index+1;\n            addProject();\n            userSelection=selection;\n            start();\n            close(\"1\");\n        }else{alert(\"Please enter a name!\")}\n    })\n\n    let closePopUp=document.querySelectorAll('#close');\n    closePopUp.forEach((closePopUp)=>{\n        closePopUp.addEventListener('click',(ev)=>{\n            ev.preventDefault();\n            close(closePopUp.value);\n        })\n    })\n\n})();\n\n//# sourceURL=webpack://todo_list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;