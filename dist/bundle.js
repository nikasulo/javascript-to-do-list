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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/stylesheets/main.scss":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/stylesheets/main.scss ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0; }\n\nbody {\n  background-color: #58B19F; }\n\nnav {\n  justify-content: center;\n  padding: 2em 0; }\n  nav .new-list-btn {\n    background-color: #2C3A47;\n    color: white;\n    transition: .5s;\n    border: none;\n    padding: .3em .8em;\n    border-radius: 5px; }\n    nav .new-list-btn:hover {\n      cursor: pointer;\n      background-color: #10161b; }\n\n.modal {\n  display: none;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1;\n  background-color: #00cec9;\n  justify-content: center;\n  align-items: center; }\n  .modal form {\n    width: 30%; }\n    .modal form input {\n      width: 100%;\n      padding: 1em;\n      margin-bottom: .5em;\n      border-radius: 5px;\n      border: none; }\n\n.open {\n  display: flex; }\n\n.row {\n  display: flex;\n  flex-flow: row wrap; }\n\n.column {\n  display: flex;\n  flex-flow: column nowrap; }\n\n.lists-container {\n  padding: 2em;\n  align-items: flex-start; }\n  .lists-container .list {\n    box-shadow: 0 0 5px .5px grey;\n    border-radius: 5px;\n    width: 30%;\n    margin-right: 1em;\n    margin-bottom: 1em; }\n    .lists-container .list .list-title {\n      text-align: center;\n      color: white;\n      padding: 1em;\n      background-color: #535353;\n      border-top-right-radius: 5px;\n      border-top-left-radius: 5px; }\n    .lists-container .list .item {\n      padding: 1em;\n      background-color: white;\n      border-bottom: 0.5px solid rgba(128, 128, 128, 0.55);\n      position: relative; }\n      .lists-container .list .item.done {\n        background-color: #00cec9;\n        color: white; }\n      .lists-container .list .item .item-heading {\n        justify-content: space-between; }\n    .lists-container .list .item-controls {\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      right: 0;\n      left: 0;\n      background-color: #2C3A47;\n      opacity: 0;\n      align-items: center;\n      justify-content: center; }\n      .lists-container .list .item-controls:hover {\n        animation: itemControls .3s ease-in-out 0s normal forwards; }\n      .lists-container .list .item-controls .delete-btn, .lists-container .list .item-controls .done-btn {\n        border: 1px solid white;\n        border-radius: 5px;\n        background: 0 0;\n        color: white;\n        padding: .3em .7em;\n        transition: .5s;\n        margin-right: .3em; }\n        .lists-container .list .item-controls .delete-btn:hover, .lists-container .list .item-controls .done-btn:hover {\n          border: none;\n          background-color: #00cec9; }\n    .lists-container .list .new-item-btn {\n      border: none;\n      background-color: #00cec9;\n      color: white;\n      padding: 1em;\n      border-bottom-left-radius: 5px;\n      border-bottom-right-radius: 5px;\n      transition: .5s; }\n      .lists-container .list .new-item-btn:hover {\n        background-color: #008987; }\n    .lists-container .list .high {\n      color: white;\n      background-color: salmon; }\n    .lists-container .list .moderate {\n      color: white;\n      background-color: orange; }\n\n@keyframes itemControls {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
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
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
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
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
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

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/auxiliaries.js":
/*!****************************!*\
  !*** ./src/auxiliaries.js ***!
  \****************************/
/*! exports provided: Item, List, itemForm, render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "itemForm", function() { return itemForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
class Item{
  constructor(title, description, dueDate, priority, listId){
    
    this.setTitle = (title) =>{
      this.title = title;
    }
  
    this.setDueDate = (dueDate) =>{
      this.dueDate = dueDate;
    }

    this.setDone = (done) => {
      this.done = done;
    }
  
    this.setItemPriority = (priority) =>{
      this.priority = priority;
    }
  
    this.setDescription = (description) =>{
      this.description = description;
    }
  
    this.setListId = (listId) =>{
      this.listId = listId;
    }

    this.setId = (id) =>{
      this.id = id;
    }

    this.setDueDate(dueDate);
    this.setDescription(description);
    this.setItemPriority(priority);
    this.setListId(listId)
    this.setTitle(title);
    
  }
  
}

class List{
  constructor(){
    this.items = [];

    this.getId = () => this.listId;
    
    this.setId = (id) =>{
      this.id = id;
    }
    
    this.setTitle = (title) => {
      this.title = title;
    }


    this.getTitle = () => this.title;
    this.addItem = (item) => this.items.push(item)
    this.getItems = () => this.items
  }
}

const itemForm = (listId) => 
  `<form class="item-create-form">
    <div class="fields">
        <input placeholder = "Task name">
    </div>
    <div class="fields">
      <input placeholder = "Task description">
    </div>
    <div class="fields">
      <input placeholder = "Due date" type="date">
    </div>
    <div class="fields">
      <select placeholder = "Priority">
        <option value = "Low">Low</option>
        <option value = "Moderate">Moderate</option>
        <option value = "High">High</option>
      </select>
    </div>
    <div class="actions">
      <input type = "submit" value = "Create item" id="${listId}" class="create-item-btn"/>
    </div>
    </form>`

const render = (template, node) => {
  node.innerHTML = template;
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stylesheets_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stylesheets/main.scss */ "./src/stylesheets/main.scss");
/* harmony import */ var _stylesheets_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_stylesheets_main_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _auxiliaries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auxiliaries */ "./src/auxiliaries.js");




const lists = localStorage.getItem('listsArray') ? JSON.parse(localStorage.getItem('listsArray')) : [];

const newList = (e) => {
  openListModal(e)
}

const createList = (e) => {
  e.preventDefault();
  let form = document.querySelector('.list-create-form');
  let title = form[0].value;
  let currentList = new _auxiliaries__WEBPACK_IMPORTED_MODULE_1__["List"]();
  currentList.setTitle(title);
  currentList.setId(lists.length);
  lists.push(currentList);
  localStorage.setItem('listsArray', JSON.stringify(lists));
  renderLists();
  closeListModal();
}

const markAsDone = (e) => {
  const listId = e.target.dataset.listid
  const itemPosition = e.target.dataset.itemposition;
  const item = lists[listId].items[itemPosition];
  item.setDone(true);
  renderLists(); 
}

const deleteItem = (e) => {
  const listId = e.target.dataset.listid
  const itemId = e.target.dataset.itemposition;
  const list = lists[listId];
  list.items = list.items.filter((item) => item.id != itemId);
  localStorage.setItem('listsArray', JSON.stringify(lists));
  renderLists(); 
}

const renderLists = () => {
  let listsContainer = document.querySelector(".lists-container");
  let currentLists = lists.map((list) => {
    let items = list.items.map((item) => 
    `<div class = "item ${item.priority === 'High' ? 'high' : ''} 
                        ${item.priority === 'Moderate' ? 'moderate' : ''} 
                        ${item.done ? 'done' : ''}">
      <div class="item-heading row">
        <h3>${item.title}</h3>
        <h4>Due: ${item.dueDate}</h4>
      </div>
      <div class="item-description"><p>${item.description}</p></div>
      <div class="item-controls row">
        <button class='done-btn' data-listid = "${list.id}" data-itemposition = "${item.id}">Done</button>
        <button class='delete-btn' data-listid = "${list.id}" data-itemposition = "${item.id}">Delete</button>
      </div>
    </div>
    `)
      
    return (`<div class = "column list">
    <div class = "list-title">${list.title}</div>
    <div class="items-${list.id}">
        ${items.length > 0 ? items.join('') : ''}
        </div>
        <button id = "${list.id}" class = "new-item-btn">New Item</button>
        </div>`)
        
      }).join('')
  Object(_auxiliaries__WEBPACK_IMPORTED_MODULE_1__["render"])(currentLists, listsContainer);
  const newItemButtons = document.querySelectorAll('.new-item-btn');
  const doneButtons = document.querySelectorAll('.done-btn');
  const deleteButtons = document.querySelectorAll('.delete-btn');
  if (newItemButtons.length > 0){
    newItemButtons.forEach((btn) => btn.addEventListener('click', (event) => newItem(event)));
  }
  if (doneButtons.length > 0){
    doneButtons.forEach((btn) => btn.addEventListener('click', (event) => markAsDone(event)));
  }
  if (deleteButtons.length > 0){
    deleteButtons.forEach((btn) => btn.addEventListener('click', (event) => deleteItem(event)));
  }
  localStorage.setItem('lists', lists);
}

const newItem = (event) => {
  openItemModal(event.target.id);
}

const createItem = (e) => {
  const listId = e.target.id;
  e.preventDefault();
  let form = document.querySelector('.item-create-form');
  let title = form[0].value;
  let description = form[1].value;
  let dueDate = form[2].value;
  let priority = form[3].value;
  let newItem = new _auxiliaries__WEBPACK_IMPORTED_MODULE_1__["Item"](title, description, dueDate, priority, false);
  newItem.setId(lists[listId].items.length);
  newItem.setDone(false);
  lists[listId].items.push(newItem);
  localStorage.setItem('listsArray', JSON.stringify(lists));
  renderLists();
  closeListModal();
  closeItemModal();
}

const openListModal = () => {
  const modal = document.querySelector(".create-list-modal");
  modal.classList.toggle('open');
}

const openItemModal = (id) => {
  const modal = document.querySelector(".create-item-modal");
  const form = Object(_auxiliaries__WEBPACK_IMPORTED_MODULE_1__["itemForm"])(id);
  modal.innerHTML = form;
  closeListModal();
  modal.classList.toggle('open');
  document.querySelector('.create-item-btn').addEventListener('click', (event) => createItem(event));
}

const closeListModal = () => {
  const modal = document.querySelector('.create-list-modal');
  modal.classList.toggle('open');
}

const closeItemModal = () => {
  const modal = document.querySelector('.create-item-modal');
  modal.classList.toggle('open');
}

const addEventListeners = () => {
  document.querySelector('.create-list-btn').addEventListener('click', (event) => createList(event))
  document.querySelector('.new-list-btn').addEventListener('click', newList);
}

const setup = () => {
  if (lists.length === 0){
    let currentList = new _auxiliaries__WEBPACK_IMPORTED_MODULE_1__["List"]();
    currentList.setTitle("A placeholder list");
    currentList.setId(lists.length);
    
    let title = "An item";
    let description = "A description";
    let dueDate = "12-09-12";
    let priority = "medium";
  
    let newItem = new _auxiliaries__WEBPACK_IMPORTED_MODULE_1__["Item"](title, description, dueDate, priority, false);
    newItem.setId(currentList.items.length);
    newItem.setDone(false);
    currentList.items.push(newItem);
  
    lists.push(currentList);
    localStorage.setItem('listsArray', JSON.stringify(lists));
  
  }
  renderLists();
}
document.addEventListener('DOMContentLoaded', addEventListeners());
document.addEventListener('DOMContentLoaded', setup());

/***/ }),

/***/ "./src/stylesheets/main.scss":
/*!***********************************!*\
  !*** ./src/stylesheets/main.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/stylesheets/main.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlc2hlZXRzL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXV4aWxpYXJpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXNoZWV0cy9tYWluLnNjc3M/N2RhNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsMkJBQTJCLG1CQUFPLENBQUMsd0dBQW1EO0FBQ3RGO0FBQ0Es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XHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDsgfVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU4QjE5RjsgfVxcblxcbm5hdiB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDJlbSAwOyB9XFxuICBuYXYgLm5ldy1saXN0LWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyQzNBNDc7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdHJhbnNpdGlvbjogLjVzO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IC4zZW0gLjhlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4OyB9XFxuICAgIG5hdiAubmV3LWxpc3QtYnRuOmhvdmVyIHtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzEwMTYxYjsgfVxcblxcbi5tb2RhbCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgei1pbmRleDogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGNlYzk7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG4gIC5tb2RhbCBmb3JtIHtcXG4gICAgd2lkdGg6IDMwJTsgfVxcbiAgICAubW9kYWwgZm9ybSBpbnB1dCB7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgcGFkZGluZzogMWVtO1xcbiAgICAgIG1hcmdpbi1ib3R0b206IC41ZW07XFxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgIGJvcmRlcjogbm9uZTsgfVxcblxcbi5vcGVuIHtcXG4gIGRpc3BsYXk6IGZsZXg7IH1cXG5cXG4ucm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IHJvdyB3cmFwOyB9XFxuXFxuLmNvbHVtbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwOyB9XFxuXFxuLmxpc3RzLWNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAyZW07XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgfVxcbiAgLmxpc3RzLWNvbnRhaW5lciAubGlzdCB7XFxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggLjVweCBncmV5O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHdpZHRoOiAzMCU7XFxuICAgIG1hcmdpbi1yaWdodDogMWVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07IH1cXG4gICAgLmxpc3RzLWNvbnRhaW5lciAubGlzdCAubGlzdC10aXRsZSB7XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICBwYWRkaW5nOiAxZW07XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzUzNTM1MztcXG4gICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDsgfVxcbiAgICAubGlzdHMtY29udGFpbmVyIC5saXN0IC5pdGVtIHtcXG4gICAgICBwYWRkaW5nOiAxZW07XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgICAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjU1KTtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG4gICAgICAubGlzdHMtY29udGFpbmVyIC5saXN0IC5pdGVtLmRvbmUge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwY2VjOTtcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTsgfVxcbiAgICAgIC5saXN0cy1jb250YWluZXIgLmxpc3QgLml0ZW0gLml0ZW0taGVhZGluZyB7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IH1cXG4gICAgLmxpc3RzLWNvbnRhaW5lciAubGlzdCAuaXRlbS1jb250cm9scyB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRvcDogMDtcXG4gICAgICBib3R0b206IDA7XFxuICAgICAgcmlnaHQ6IDA7XFxuICAgICAgbGVmdDogMDtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkMzQTQ3O1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxcbiAgICAgIC5saXN0cy1jb250YWluZXIgLmxpc3QgLml0ZW0tY29udHJvbHM6aG92ZXIge1xcbiAgICAgICAgYW5pbWF0aW9uOiBpdGVtQ29udHJvbHMgLjNzIGVhc2UtaW4tb3V0IDBzIG5vcm1hbCBmb3J3YXJkczsgfVxcbiAgICAgIC5saXN0cy1jb250YWluZXIgLmxpc3QgLml0ZW0tY29udHJvbHMgLmRlbGV0ZS1idG4sIC5saXN0cy1jb250YWluZXIgLmxpc3QgLml0ZW0tY29udHJvbHMgLmRvbmUtYnRuIHtcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgYmFja2dyb3VuZDogMCAwO1xcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgcGFkZGluZzogLjNlbSAuN2VtO1xcbiAgICAgICAgdHJhbnNpdGlvbjogLjVzO1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAuM2VtOyB9XFxuICAgICAgICAubGlzdHMtY29udGFpbmVyIC5saXN0IC5pdGVtLWNvbnRyb2xzIC5kZWxldGUtYnRuOmhvdmVyLCAubGlzdHMtY29udGFpbmVyIC5saXN0IC5pdGVtLWNvbnRyb2xzIC5kb25lLWJ0bjpob3ZlciB7XFxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwY2VjOTsgfVxcbiAgICAubGlzdHMtY29udGFpbmVyIC5saXN0IC5uZXctaXRlbS1idG4ge1xcbiAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBjZWM5O1xcbiAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICBwYWRkaW5nOiAxZW07XFxuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xcbiAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XFxuICAgICAgdHJhbnNpdGlvbjogLjVzOyB9XFxuICAgICAgLmxpc3RzLWNvbnRhaW5lciAubGlzdCAubmV3LWl0ZW0tYnRuOmhvdmVyIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDg5ODc7IH1cXG4gICAgLmxpc3RzLWNvbnRhaW5lciAubGlzdCAuaGlnaCB7XFxuICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHNhbG1vbjsgfVxcbiAgICAubGlzdHMtY29udGFpbmVyIC5saXN0IC5tb2RlcmF0ZSB7XFxuICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTsgfVxcblxcbkBrZXlmcmFtZXMgaXRlbUNvbnRyb2xzIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwOyB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7IH0gfVxcblwiLCBcIlwiXSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIntcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gbW9kdWxlc1tfaV07IC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcbiAgICAgIC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG4gICAgICAvLyB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG4gICAgICAvLyBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cbiAgICAgIGlmIChpdGVtWzBdID09IG51bGwgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgaWYgKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiKFwiLmNvbmNhdChpdGVtWzJdLCBcIikgYW5kIChcIikuY29uY2F0KG1lZGlhUXVlcnksIFwiKVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290KS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZXMgPSBbXTtcbiAgdmFyIG5ld1N0eWxlcyA9IHt9O1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY3NzID0gaXRlbVsxXTtcbiAgICB2YXIgbWVkaWEgPSBpdGVtWzJdO1xuICAgIHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuICAgIHZhciBwYXJ0ID0ge1xuICAgICAgY3NzOiBjc3MsXG4gICAgICBtZWRpYTogbWVkaWEsXG4gICAgICBzb3VyY2VNYXA6IHNvdXJjZU1hcFxuICAgIH07XG5cbiAgICBpZiAoIW5ld1N0eWxlc1tpZF0pIHtcbiAgICAgIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7XG4gICAgICAgIGlkOiBpZCxcbiAgICAgICAgcGFydHM6IFtwYXJ0XVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXTtcbiAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcbiAgICB2YXIgaiA9IDA7XG5cbiAgICBpZiAoZG9tU3R5bGUpIHtcbiAgICAgIGRvbVN0eWxlLnJlZnMrKztcblxuICAgICAgZm9yICg7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcbiAgICAgIH1cblxuICAgICAgZm9yICg7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcGFydHMgPSBbXTtcblxuICAgICAgZm9yICg7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuICAgICAgfVxuXG4gICAgICBzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtcbiAgICAgICAgaWQ6IGl0ZW0uaWQsXG4gICAgICAgIHJlZnM6IDEsXG4gICAgICAgIHBhcnRzOiBwYXJ0c1xuICAgICAgfTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBvcHRpb25zLmF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhvcHRpb25zLmF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIG9wdGlvbnMuYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBvcHRpb25zLmF0dHJpYnV0ZXMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRyaWJ1dGVzID09PSAnb2JqZWN0JyA/IG9wdGlvbnMuYXR0cmlidXRlcyA6IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG4gIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIHZhciBtYXlSZW1vdmUgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXTtcbiAgICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG4gICAgICBpZiAoZG9tU3R5bGUpIHtcbiAgICAgICAgZG9tU3R5bGUucmVmcy0tO1xuICAgICAgICBtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG5ld0xpc3QpIHtcbiAgICAgIHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgICBhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtYXlSZW1vdmUubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2RvbVN0eWxlID0gbWF5UmVtb3ZlW19pXTtcblxuICAgICAgaWYgKF9kb21TdHlsZS5yZWZzID09PSAwKSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgX2RvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgX2RvbVN0eWxlLnBhcnRzW2pdKCk7XG4gICAgICAgIH1cblxuICAgICAgICBkZWxldGUgc3R5bGVzSW5Eb21bX2RvbVN0eWxlLmlkXTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59OyIsImV4cG9ydCBjbGFzcyBJdGVte1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBsaXN0SWQpe1xuICAgIFxuICAgIHRoaXMuc2V0VGl0bGUgPSAodGl0bGUpID0+e1xuICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIH1cbiAgXG4gICAgdGhpcy5zZXREdWVEYXRlID0gKGR1ZURhdGUpID0+e1xuICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB9XG5cbiAgICB0aGlzLnNldERvbmUgPSAoZG9uZSkgPT4ge1xuICAgICAgdGhpcy5kb25lID0gZG9uZTtcbiAgICB9XG4gIFxuICAgIHRoaXMuc2V0SXRlbVByaW9yaXR5ID0gKHByaW9yaXR5KSA9PntcbiAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB9XG4gIFxuICAgIHRoaXMuc2V0RGVzY3JpcHRpb24gPSAoZGVzY3JpcHRpb24pID0+e1xuICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIH1cbiAgXG4gICAgdGhpcy5zZXRMaXN0SWQgPSAobGlzdElkKSA9PntcbiAgICAgIHRoaXMubGlzdElkID0gbGlzdElkO1xuICAgIH1cblxuICAgIHRoaXMuc2V0SWQgPSAoaWQpID0+e1xuICAgICAgdGhpcy5pZCA9IGlkO1xuICAgIH1cblxuICAgIHRoaXMuc2V0RHVlRGF0ZShkdWVEYXRlKTtcbiAgICB0aGlzLnNldERlc2NyaXB0aW9uKGRlc2NyaXB0aW9uKTtcbiAgICB0aGlzLnNldEl0ZW1Qcmlvcml0eShwcmlvcml0eSk7XG4gICAgdGhpcy5zZXRMaXN0SWQobGlzdElkKVxuICAgIHRoaXMuc2V0VGl0bGUodGl0bGUpO1xuICAgIFxuICB9XG4gIFxufVxuXG5leHBvcnQgY2xhc3MgTGlzdHtcbiAgY29uc3RydWN0b3IoKXtcbiAgICB0aGlzLml0ZW1zID0gW107XG5cbiAgICB0aGlzLmdldElkID0gKCkgPT4gdGhpcy5saXN0SWQ7XG4gICAgXG4gICAgdGhpcy5zZXRJZCA9IChpZCkgPT57XG4gICAgICB0aGlzLmlkID0gaWQ7XG4gICAgfVxuICAgIFxuICAgIHRoaXMuc2V0VGl0bGUgPSAodGl0bGUpID0+IHtcbiAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB9XG5cblxuICAgIHRoaXMuZ2V0VGl0bGUgPSAoKSA9PiB0aGlzLnRpdGxlO1xuICAgIHRoaXMuYWRkSXRlbSA9IChpdGVtKSA9PiB0aGlzLml0ZW1zLnB1c2goaXRlbSlcbiAgICB0aGlzLmdldEl0ZW1zID0gKCkgPT4gdGhpcy5pdGVtc1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBpdGVtRm9ybSA9IChsaXN0SWQpID0+IFxuICBgPGZvcm0gY2xhc3M9XCJpdGVtLWNyZWF0ZS1mb3JtXCI+XG4gICAgPGRpdiBjbGFzcz1cImZpZWxkc1wiPlxuICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXIgPSBcIlRhc2sgbmFtZVwiPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJmaWVsZHNcIj5cbiAgICAgIDxpbnB1dCBwbGFjZWhvbGRlciA9IFwiVGFzayBkZXNjcmlwdGlvblwiPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJmaWVsZHNcIj5cbiAgICAgIDxpbnB1dCBwbGFjZWhvbGRlciA9IFwiRHVlIGRhdGVcIiB0eXBlPVwiZGF0ZVwiPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJmaWVsZHNcIj5cbiAgICAgIDxzZWxlY3QgcGxhY2Vob2xkZXIgPSBcIlByaW9yaXR5XCI+XG4gICAgICAgIDxvcHRpb24gdmFsdWUgPSBcIkxvd1wiPkxvdzwvb3B0aW9uPlxuICAgICAgICA8b3B0aW9uIHZhbHVlID0gXCJNb2RlcmF0ZVwiPk1vZGVyYXRlPC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24gdmFsdWUgPSBcIkhpZ2hcIj5IaWdoPC9vcHRpb24+XG4gICAgICA8L3NlbGVjdD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiYWN0aW9uc1wiPlxuICAgICAgPGlucHV0IHR5cGUgPSBcInN1Ym1pdFwiIHZhbHVlID0gXCJDcmVhdGUgaXRlbVwiIGlkPVwiJHtsaXN0SWR9XCIgY2xhc3M9XCJjcmVhdGUtaXRlbS1idG5cIi8+XG4gICAgPC9kaXY+XG4gICAgPC9mb3JtPmBcblxuZXhwb3J0IGNvbnN0IHJlbmRlciA9ICh0ZW1wbGF0ZSwgbm9kZSkgPT4ge1xuICBub2RlLmlubmVySFRNTCA9IHRlbXBsYXRlO1xufSIsImltcG9ydCAnLi9zdHlsZXNoZWV0cy9tYWluLnNjc3MnO1xuaW1wb3J0IHsgSXRlbSwgcmVuZGVyLCBMaXN0LCBsaXN0Rm9ybSwgaXRlbUZvcm19IFxuZnJvbSAnLi9hdXhpbGlhcmllcyc7XG5cblxuY29uc3QgbGlzdHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGlzdHNBcnJheScpID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGlzdHNBcnJheScpKSA6IFtdO1xuXG5jb25zdCBuZXdMaXN0ID0gKGUpID0+IHtcbiAgb3Blbkxpc3RNb2RhbChlKVxufVxuXG5jb25zdCBjcmVhdGVMaXN0ID0gKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBsZXQgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0LWNyZWF0ZS1mb3JtJyk7XG4gIGxldCB0aXRsZSA9IGZvcm1bMF0udmFsdWU7XG4gIGxldCBjdXJyZW50TGlzdCA9IG5ldyBMaXN0KCk7XG4gIGN1cnJlbnRMaXN0LnNldFRpdGxlKHRpdGxlKTtcbiAgY3VycmVudExpc3Quc2V0SWQobGlzdHMubGVuZ3RoKTtcbiAgbGlzdHMucHVzaChjdXJyZW50TGlzdCk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsaXN0c0FycmF5JywgSlNPTi5zdHJpbmdpZnkobGlzdHMpKTtcbiAgcmVuZGVyTGlzdHMoKTtcbiAgY2xvc2VMaXN0TW9kYWwoKTtcbn1cblxuY29uc3QgbWFya0FzRG9uZSA9IChlKSA9PiB7XG4gIGNvbnN0IGxpc3RJZCA9IGUudGFyZ2V0LmRhdGFzZXQubGlzdGlkXG4gIGNvbnN0IGl0ZW1Qb3NpdGlvbiA9IGUudGFyZ2V0LmRhdGFzZXQuaXRlbXBvc2l0aW9uO1xuICBjb25zdCBpdGVtID0gbGlzdHNbbGlzdElkXS5pdGVtc1tpdGVtUG9zaXRpb25dO1xuICBpdGVtLnNldERvbmUodHJ1ZSk7XG4gIHJlbmRlckxpc3RzKCk7IFxufVxuXG5jb25zdCBkZWxldGVJdGVtID0gKGUpID0+IHtcbiAgY29uc3QgbGlzdElkID0gZS50YXJnZXQuZGF0YXNldC5saXN0aWRcbiAgY29uc3QgaXRlbUlkID0gZS50YXJnZXQuZGF0YXNldC5pdGVtcG9zaXRpb247XG4gIGNvbnN0IGxpc3QgPSBsaXN0c1tsaXN0SWRdO1xuICBsaXN0Lml0ZW1zID0gbGlzdC5pdGVtcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgIT0gaXRlbUlkKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xpc3RzQXJyYXknLCBKU09OLnN0cmluZ2lmeShsaXN0cykpO1xuICByZW5kZXJMaXN0cygpOyBcbn1cblxuY29uc3QgcmVuZGVyTGlzdHMgPSAoKSA9PiB7XG4gIGxldCBsaXN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlzdHMtY29udGFpbmVyXCIpO1xuICBsZXQgY3VycmVudExpc3RzID0gbGlzdHMubWFwKChsaXN0KSA9PiB7XG4gICAgbGV0IGl0ZW1zID0gbGlzdC5pdGVtcy5tYXAoKGl0ZW0pID0+IFxuICAgIGA8ZGl2IGNsYXNzID0gXCJpdGVtICR7aXRlbS5wcmlvcml0eSA9PT0gJ0hpZ2gnID8gJ2hpZ2gnIDogJyd9IFxuICAgICAgICAgICAgICAgICAgICAgICAgJHtpdGVtLnByaW9yaXR5ID09PSAnTW9kZXJhdGUnID8gJ21vZGVyYXRlJyA6ICcnfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICR7aXRlbS5kb25lID8gJ2RvbmUnIDogJyd9XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiaXRlbS1oZWFkaW5nIHJvd1wiPlxuICAgICAgICA8aDM+JHtpdGVtLnRpdGxlfTwvaDM+XG4gICAgICAgIDxoND5EdWU6ICR7aXRlbS5kdWVEYXRlfTwvaDQ+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJpdGVtLWRlc2NyaXB0aW9uXCI+PHA+JHtpdGVtLmRlc2NyaXB0aW9ufTwvcD48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJpdGVtLWNvbnRyb2xzIHJvd1wiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPSdkb25lLWJ0bicgZGF0YS1saXN0aWQgPSBcIiR7bGlzdC5pZH1cIiBkYXRhLWl0ZW1wb3NpdGlvbiA9IFwiJHtpdGVtLmlkfVwiPkRvbmU8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz0nZGVsZXRlLWJ0bicgZGF0YS1saXN0aWQgPSBcIiR7bGlzdC5pZH1cIiBkYXRhLWl0ZW1wb3NpdGlvbiA9IFwiJHtpdGVtLmlkfVwiPkRlbGV0ZTwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgYClcbiAgICAgIFxuICAgIHJldHVybiAoYDxkaXYgY2xhc3MgPSBcImNvbHVtbiBsaXN0XCI+XG4gICAgPGRpdiBjbGFzcyA9IFwibGlzdC10aXRsZVwiPiR7bGlzdC50aXRsZX08L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiaXRlbXMtJHtsaXN0LmlkfVwiPlxuICAgICAgICAke2l0ZW1zLmxlbmd0aCA+IDAgPyBpdGVtcy5qb2luKCcnKSA6ICcnfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiBpZCA9IFwiJHtsaXN0LmlkfVwiIGNsYXNzID0gXCJuZXctaXRlbS1idG5cIj5OZXcgSXRlbTwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5gKVxuICAgICAgICBcbiAgICAgIH0pLmpvaW4oJycpXG4gIHJlbmRlcihjdXJyZW50TGlzdHMsIGxpc3RzQ29udGFpbmVyKTtcbiAgY29uc3QgbmV3SXRlbUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmV3LWl0ZW0tYnRuJyk7XG4gIGNvbnN0IGRvbmVCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRvbmUtYnRuJyk7XG4gIGNvbnN0IGRlbGV0ZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsZXRlLWJ0bicpO1xuICBpZiAobmV3SXRlbUJ1dHRvbnMubGVuZ3RoID4gMCl7XG4gICAgbmV3SXRlbUJ1dHRvbnMuZm9yRWFjaCgoYnRuKSA9PiBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IG5ld0l0ZW0oZXZlbnQpKSk7XG4gIH1cbiAgaWYgKGRvbmVCdXR0b25zLmxlbmd0aCA+IDApe1xuICAgIGRvbmVCdXR0b25zLmZvckVhY2goKGJ0bikgPT4gYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiBtYXJrQXNEb25lKGV2ZW50KSkpO1xuICB9XG4gIGlmIChkZWxldGVCdXR0b25zLmxlbmd0aCA+IDApe1xuICAgIGRlbGV0ZUJ1dHRvbnMuZm9yRWFjaCgoYnRuKSA9PiBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IGRlbGV0ZUl0ZW0oZXZlbnQpKSk7XG4gIH1cbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xpc3RzJywgbGlzdHMpO1xufVxuXG5jb25zdCBuZXdJdGVtID0gKGV2ZW50KSA9PiB7XG4gIG9wZW5JdGVtTW9kYWwoZXZlbnQudGFyZ2V0LmlkKTtcbn1cblxuY29uc3QgY3JlYXRlSXRlbSA9IChlKSA9PiB7XG4gIGNvbnN0IGxpc3RJZCA9IGUudGFyZ2V0LmlkO1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGxldCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW0tY3JlYXRlLWZvcm0nKTtcbiAgbGV0IHRpdGxlID0gZm9ybVswXS52YWx1ZTtcbiAgbGV0IGRlc2NyaXB0aW9uID0gZm9ybVsxXS52YWx1ZTtcbiAgbGV0IGR1ZURhdGUgPSBmb3JtWzJdLnZhbHVlO1xuICBsZXQgcHJpb3JpdHkgPSBmb3JtWzNdLnZhbHVlO1xuICBsZXQgbmV3SXRlbSA9IG5ldyBJdGVtKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGZhbHNlKTtcbiAgbmV3SXRlbS5zZXRJZChsaXN0c1tsaXN0SWRdLml0ZW1zLmxlbmd0aCk7XG4gIG5ld0l0ZW0uc2V0RG9uZShmYWxzZSk7XG4gIGxpc3RzW2xpc3RJZF0uaXRlbXMucHVzaChuZXdJdGVtKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xpc3RzQXJyYXknLCBKU09OLnN0cmluZ2lmeShsaXN0cykpO1xuICByZW5kZXJMaXN0cygpO1xuICBjbG9zZUxpc3RNb2RhbCgpO1xuICBjbG9zZUl0ZW1Nb2RhbCgpO1xufVxuXG5jb25zdCBvcGVuTGlzdE1vZGFsID0gKCkgPT4ge1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3JlYXRlLWxpc3QtbW9kYWxcIik7XG4gIG1vZGFsLmNsYXNzTGlzdC50b2dnbGUoJ29wZW4nKTtcbn1cblxuY29uc3Qgb3Blbkl0ZW1Nb2RhbCA9IChpZCkgPT4ge1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3JlYXRlLWl0ZW0tbW9kYWxcIik7XG4gIGNvbnN0IGZvcm0gPSBpdGVtRm9ybShpZCk7XG4gIG1vZGFsLmlubmVySFRNTCA9IGZvcm07XG4gIGNsb3NlTGlzdE1vZGFsKCk7XG4gIG1vZGFsLmNsYXNzTGlzdC50b2dnbGUoJ29wZW4nKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZS1pdGVtLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiBjcmVhdGVJdGVtKGV2ZW50KSk7XG59XG5cbmNvbnN0IGNsb3NlTGlzdE1vZGFsID0gKCkgPT4ge1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGUtbGlzdC1tb2RhbCcpO1xuICBtb2RhbC5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuJyk7XG59XG5cbmNvbnN0IGNsb3NlSXRlbU1vZGFsID0gKCkgPT4ge1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGUtaXRlbS1tb2RhbCcpO1xuICBtb2RhbC5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuJyk7XG59XG5cbmNvbnN0IGFkZEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlLWxpc3QtYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IGNyZWF0ZUxpc3QoZXZlbnQpKVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LWxpc3QtYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBuZXdMaXN0KTtcbn1cblxuY29uc3Qgc2V0dXAgPSAoKSA9PiB7XG4gIGlmIChsaXN0cy5sZW5ndGggPT09IDApe1xuICAgIGxldCBjdXJyZW50TGlzdCA9IG5ldyBMaXN0KCk7XG4gICAgY3VycmVudExpc3Quc2V0VGl0bGUoXCJBIHBsYWNlaG9sZGVyIGxpc3RcIik7XG4gICAgY3VycmVudExpc3Quc2V0SWQobGlzdHMubGVuZ3RoKTtcbiAgICBcbiAgICBsZXQgdGl0bGUgPSBcIkFuIGl0ZW1cIjtcbiAgICBsZXQgZGVzY3JpcHRpb24gPSBcIkEgZGVzY3JpcHRpb25cIjtcbiAgICBsZXQgZHVlRGF0ZSA9IFwiMTItMDktMTJcIjtcbiAgICBsZXQgcHJpb3JpdHkgPSBcIm1lZGl1bVwiO1xuICBcbiAgICBsZXQgbmV3SXRlbSA9IG5ldyBJdGVtKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGZhbHNlKTtcbiAgICBuZXdJdGVtLnNldElkKGN1cnJlbnRMaXN0Lml0ZW1zLmxlbmd0aCk7XG4gICAgbmV3SXRlbS5zZXREb25lKGZhbHNlKTtcbiAgICBjdXJyZW50TGlzdC5pdGVtcy5wdXNoKG5ld0l0ZW0pO1xuICBcbiAgICBsaXN0cy5wdXNoKGN1cnJlbnRMaXN0KTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGlzdHNBcnJheScsIEpTT04uc3RyaW5naWZ5KGxpc3RzKSk7XG4gIFxuICB9XG4gIHJlbmRlckxpc3RzKCk7XG59XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgYWRkRXZlbnRMaXN0ZW5lcnMoKSk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgc2V0dXAoKSk7IiwidmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIik7XG5cbmlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xufVxuXG52YXIgb3B0aW9ucyA9IHt9XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmIChjb250ZW50LmxvY2Fscykge1xuICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==