/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./scripts/custom-search.js":
/*!**********************************!*\
  !*** ./scripts/custom-search.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NoteCustomSearch: () => (/* binding */ NoteCustomSearch)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
var template = document.createElement("template");
template.innerHTML = "\n<style>\n  #filterNote{\n  padding: 0.8em;\n  border-radius: 5px;\n  border: 0;\n  width: 200px;\n  }\n</style>\n<input type=\"text\" placeholder=\"Search Note Title\" id=\"filterNote\">\n";
var NoteCustomSearch = /*#__PURE__*/function (_HTMLElement) {
  function NoteCustomSearch() {
    var _this;
    _classCallCheck(this, NoteCustomSearch);
    _this = _callSuper(this, NoteCustomSearch);
    _this.attachShadow({
      mode: "open"
    });
    _this.shadowRoot.appendChild(template.content.cloneNode(true));
    return _this;
  }
  _inherits(NoteCustomSearch, _HTMLElement);
  return _createClass(NoteCustomSearch, [{
    key: "searchTitle",
    value: function searchTitle(event) {
      var searchInput = event.target.value.toLowerCase();
      var notes = document.querySelectorAll(".noteItem");
      notes.forEach(function (note) {
        var title = note.querySelector(".noteTitle").textContent.toLowerCase();
        if (title.includes(searchInput)) {
          note.style.display = "block";
        } else {
          note.style.display = "none";
        }
      });
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      this.shadowRoot.querySelector("input").addEventListener("input", this.searchTitle.bind(this));
    }
  }, {
    key: "disconnectedCallBack",
    value: function disconnectedCallBack() {
      this.shadowRoot.querySelector("input").removeEventListener("input", this.searchTitle.bind(this));
    }
  }]);
}(/*#__PURE__*/_wrapNativeSuper(HTMLElement));

/***/ }),

/***/ "./scripts/custom-template.js":
/*!************************************!*\
  !*** ./scripts/custom-template.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NoteCustomAdd: () => (/* binding */ NoteCustomAdd)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var template = document.createElement("template");
template.innerHTML = "\n<style>\n  button{\n    background-color: #7f5af0;\n    border-radius: 5px;\n    border: 0;\n    color: #fffffe;\n    width: 150px;\n    padding: 0.8em;\n    cursor: pointer;\n    margin-bottom: 1em;\n  }\n\n  #cancelNote{\n    background-color: #94A1B2;\n  }\n\n  .notesContent {\n   width:150px;\n    transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;\n    opacity: 0;\n    visibility: hidden;\n    height: 0;\n    overflow: hidden;\n  }\n\n  .notesContent.show {\n    opacity: 1;\n    visibility: visible;\n    height: auto;\n  }\n\n  .note-group {\n    display: flex;\n    flex-direction: row;\n    width: 100%;\n    margin-bottom: 1.5em;\n  }\n\n  label {\n    padding: 1em;\n    width: 20%;\n  }\n\n  #noteTitle, \n  textarea {\n    flex-grow: 1;\n  }\n\n  .note-button-group {\n    padding: 0 1em;\n    width: 20%;\n    column-gap: 20px;\n  }\n\n\n\n  .note-group input:focus,\n  .note-group textarea:focus {\n    background-color: #94A1B2;\n    font-size: 18px;\n    flex-grow:1\n    color: #fffffe;\n    outline: none;\n    border: none;\n  }\n\n  @media (max-width: 500px) {\n    .note-group {\n      width: 90%;\n    }\n\n    label {\n      width: 30%;\n    }\n\n    .note-button-group {\n      width: 60%;\n    }\n  }\n</style>\n<button id=\"addNote\">Add Note</button>\n<div class=\"notesContent\">\n<form id=\"noteForm\">\n    <div class=\"note-group\">\n        <label for=\"noteTitle\">Title</label>\n        <input type=\"text\" id=\"noteTitle\" name=\"noteTitle\" required minlength=5>\n    </div>\n    <p class=\"error-message\" id=\"titleError\"></p>\n\n    <div class=\"note-group\">\n        <label for=\"noteBody\">Body</label>\n        <textarea id=\"noteBody\" name=\"noteBody\" required></textarea>\n    </div>\n\n    <div class=\"note-group note-button-group\">\n        <button type=\"submit\" id=\"saveNote\">Save</button>\n        <button type=\"button\" id=\"cancelNote\">Cancel</button>\n    </div>\n</form>\n</div>";
var NoteCustomAdd = /*#__PURE__*/function (_HTMLElement) {
  function NoteCustomAdd(notesInstance, totalNotesInstance) {
    var _this;
    _classCallCheck(this, NoteCustomAdd);
    _this = _callSuper(this, NoteCustomAdd);
    _defineProperty(_this, "handleNoteClick", function () {
      _this.showInfo = !_this.showInfo;
      _this.updateVisbiility();
    });
    _defineProperty(_this, "handleSaveCancelNote", function (event) {
      if (event.target.id === "saveNote") {
        var form = _this.shadowRoot.querySelector("#noteForm");
        if (form.checkValidity()) {
          event.preventDefault();
          // this.addNote();
          // this.noteInstance.getNotesHtml();
          // this.totalNoteInstance.getNotesTotalHtml();
          console.log("note has been added successfully");
        } else {
          form.reportValidity();
        } //form validation when saveNote being clicked
      } else if (event.target.id === "cancelNote") {
        _this.showInfo = false;
        _this.updateVisbiility();
      } //cancelNote handling
    });
    _defineProperty(_this, "functform", function () {
      var noteTitle = _this.shadowRoot.querySelector("#noteTitle");
      var titleError = _this.shadowRoot.querySelector("#titleError");
      if (noteTitle.value.length < 5) {
        titleError.textContent = "Title should be at least 5 characters long.";
        noteTitle.setCustomValidity("Invalid Min 5 Characters");
      } else {
        titleError.textContent = "";
        noteTitle.setCustomValidity("");
      }
    });
    _this.showInfo = false;
    _this.attachShadow({
      mode: "open"
    });
    _this.shadowRoot.appendChild(template.content.cloneNode(true));
    _this.noteInstance = notesInstance;
    _this.totalNoteInstance = totalNotesInstance;
    return _this;
  }
  _inherits(NoteCustomAdd, _HTMLElement);
  return _createClass(NoteCustomAdd, [{
    key: "addNote",
    value: function addNote() {
      var noteTitle = this.shadowRoot.querySelector("#noteTitle").value;
      var noteBody = this.shadowRoot.querySelector("#noteBody").value;
      var noteData = {
        id: this.noteInstance.generateNoteId(),
        title: noteTitle,
        body: noteBody,
        createdAt: new Date(),
        archived: false
      };
      this.noteInstance.updateNote(noteData);
    }
  }, {
    key: "attributesChangedCallback",
    value: function attributesChangedCallback(name, oldValue, newValue) {
      if (name == "visibility") {
        this.showInfo = newValue.toLowerCase() === "true";
        this.updateVisbiility();
      }
    }
  }, {
    key: "updateVisbiility",
    value: function updateVisbiility() {
      if (this.showInfo) {
        this.shadowRoot.querySelector(".notesContent").style.width = "500px";
        this.shadowRoot.querySelector(".notesContent").classList.add("show");
        this.shadowRoot.querySelector("#addNote").textContent = "Hide Note";
        this.setAttribute("visibility", "true");
      } else {
        this.shadowRoot.querySelector(".notesContent").style.width = "150px";
        this.shadowRoot.querySelector(".notesContent").classList.remove("show");
        this.shadowRoot.querySelector("#addNote").textContent = "Add Note";
        this.setAttribute("visibility", "false");
      }
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      this.shadowRoot.querySelector("#addNote").addEventListener("click", this.handleNoteClick);
      this.shadowRoot.querySelector(".note-button-group").addEventListener("click", this.handleSaveCancelNote);
      this.shadowRoot.querySelector("#noteForm").addEventListener("input", this.functform);
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      this.shadowRoot.querySelector("#addNote").removeEventListener("click", this.handleNoteClick);
      this.shadowRoot.querySelector(".note-button-group").removeEventListener("click", this.handleSaveCancelNote);
      this.shadowRoot.querySelector("#noteForm").removeEventListener("input", this.functform);
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      return ["visibility"];
    }
  }]);
}(/*#__PURE__*/_wrapNativeSuper(HTMLElement));

/***/ }),

/***/ "./scripts/notes.js":
/*!**************************!*\
  !*** ./scripts/notes.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Notes: () => (/* binding */ Notes)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var apiUrl = "https://notes-api.dicoding.dev/v2#/";
var Notes = /*#__PURE__*/function () {
  function Notes() {
    _classCallCheck(this, Notes);
    this.notes = [];
  }
  return _createClass(Notes, [{
    key: "getNotes",
    value: function () {
      var _getNotes = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var response;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return fetch(apiUrl);
            case 3:
              response = _context.sent;
              if (response.ok) {
                _context.next = 6;
                break;
              }
              throw new Error("ERROR FETCHING API!, status: ".concat(response.status));
            case 6:
              _context.next = 8;
              return response.json();
            case 8:
              this.notes = _context.sent;
              console.log(this.notes);
              return _context.abrupt("return", this.notes);
            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);
            case 16:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[0, 13]]);
      }));
      function getNotes() {
        return _getNotes.apply(this, arguments);
      }
      return getNotes;
    }()
  }, {
    key: "getNotesHtml",
    value: function getNotesHtml() {
      if (this.notes.length > 0) {
        this.notes.sort(function (a, b) {
          return new Date(b.createdAt) - new Date(a.createdAt);
        });
        this.notes.forEach(function (note) {
          notesHtml.push("<div data-noteId=\"".concat(note.id, "\" class=\"noteItem\">\n                <div class=\"noteTitle\">").concat(note.title, "\n                <button id=\"deleteIcon\" aria-label=\"Cancel\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1.5em\" height=\"2em\" viewBox=\"0 0 24 24\">\n                  <path fill=\"none\" stroke=\"white\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243\" />\n                </svg>\n              </button>\n                </div>\n                <div class=\"noteBody\">").concat(note.body, "</div>\n                \n                <div class=\"note-creation\">\n                  <div class=\"noteArchived\">").concat(note.archived, "</div>\n                  <div class=\"noteCreatedAt\">").concat(note.createdAt, "</div>\n                </div>\n            </div>"));
        });
        var notesContainer = document.querySelector(".notes");
        notesContainer.innerHTML = notesHtml.join("");
      }
    }
  }, {
    key: "generateNoteId",
    value: function generateNoteId() {
      return "notes-".concat(Math.random().toString(36).substring(2, 8), "-").concat(Math.random().toString(36).substring(2, 8));
    }
  }, {
    key: "updateNote",
    value: function updateNote(note) {
      console.log(note);
    }
  }, {
    key: "deleteNote",
    value: function deleteNote(noteId) {
      console.log(noteId);
    }
  }]);
}();

/***/ }),

/***/ "./scripts/total-notes.js":
/*!********************************!*\
  !*** ./scripts/total-notes.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TotalNotes: () => (/* binding */ TotalNotes)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var TotalNotes = /*#__PURE__*/function () {
  function TotalNotes(notesInstance) {
    _classCallCheck(this, TotalNotes);
    this.notesInstance = notesInstance;
  }
  return _createClass(TotalNotes, [{
    key: "sumCreatedNotes",
    value: function sumCreatedNotes() {
      return this.notesInstance.notes.length;
    }
  }, {
    key: "latestCreatedDate",
    value: function latestCreatedDate() {
      if (this.notesInstance.notes.length === 0) {
        return null;
      }
      var sortedNotes = this.notesInstance.notes.sort(function (a, b) {
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
      return sortedNotes[0].createdAt;
    }
  }, {
    key: "sumArchivedNotes",
    value: function sumArchivedNotes() {
      return this.notesInstance.notes.filter(function (note) {
        return note.archived;
      }).length;
    }
  }, {
    key: "getNotesTotalHtml",
    value: function getNotesTotalHtml() {
      document.querySelector("#created-date-value").innerHTML = this.latestCreatedDate();
      document.querySelector("#total-created-notes-value").innerHTML = this.sumCreatedNotes();
      document.querySelector("#total-archived-notes-value").innerHTML = this.sumArchivedNotes();
    }
  }]);
}();

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/mediastyles.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/mediastyles.css ***!
  \**************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@media (max-width: 1200px) {
  main {
    padding: 1.5em;
  }

  .notes {
    overflow: auto;
    grid-template-columns: 1fr;
    padding: 1em;
  }

  .notes-menu {
    grid-template-columns: repeat(3, 250px);
    padding: 0;
  }
  .notes {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .notes {
    overflow: auto;
    grid-template-columns: 1fr;
  }

  main {
    padding: 1em;
  }
  body {
    font-size: 0.9em;
  }

  .note-container {
    overflow: auto;
  }

  #notesList {
    max-height: 500px; /* Set a maximum height */
    overflow-y: auto; /* Enable vertical scrolling */
    display: grid; /* Use grid for layout */
    grid-template-columns: 1fr; /* Single column layout */
    gap: 10px; /* Space between notes */
  }

  .notes-menu {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }

  .noteItem {
    overflow: auto;
  }
}
`, "",{"version":3,"sources":["webpack://./src/styles/mediastyles.css"],"names":[],"mappings":"AAAA;EACE;IACE,cAAc;EAChB;;EAEA;IACE,cAAc;IACd,0BAA0B;IAC1B,YAAY;EACd;;EAEA;IACE,uCAAuC;IACvC,UAAU;EACZ;EACA;IACE,qCAAqC;EACvC;AACF;;AAEA;EACE;IACE,cAAc;IACd,0BAA0B;EAC5B;;EAEA;IACE,YAAY;EACd;EACA;IACE,gBAAgB;EAClB;;EAEA;IACE,cAAc;EAChB;;EAEA;IACE,iBAAiB,EAAE,yBAAyB;IAC5C,gBAAgB,EAAE,8BAA8B;IAChD,aAAa,EAAE,wBAAwB;IACvC,0BAA0B,EAAE,yBAAyB;IACrD,SAAS,EAAE,wBAAwB;EACrC;;EAEA;IACE,aAAa;IACb,mBAAmB;IACnB,SAAS;EACX;;EAEA;IACE,cAAc;EAChB;AACF","sourcesContent":["@media (max-width: 1200px) {\r\n  main {\r\n    padding: 1.5em;\r\n  }\r\n\r\n  .notes {\r\n    overflow: auto;\r\n    grid-template-columns: 1fr;\r\n    padding: 1em;\r\n  }\r\n\r\n  .notes-menu {\r\n    grid-template-columns: repeat(3, 250px);\r\n    padding: 0;\r\n  }\r\n  .notes {\r\n    grid-template-columns: repeat(2, 1fr);\r\n  }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .notes {\r\n    overflow: auto;\r\n    grid-template-columns: 1fr;\r\n  }\r\n\r\n  main {\r\n    padding: 1em;\r\n  }\r\n  body {\r\n    font-size: 0.9em;\r\n  }\r\n\r\n  .note-container {\r\n    overflow: auto;\r\n  }\r\n\r\n  #notesList {\r\n    max-height: 500px; /* Set a maximum height */\r\n    overflow-y: auto; /* Enable vertical scrolling */\r\n    display: grid; /* Use grid for layout */\r\n    grid-template-columns: 1fr; /* Single column layout */\r\n    gap: 10px; /* Space between notes */\r\n  }\r\n\r\n  .notes-menu {\r\n    display: flex;\r\n    flex-direction: row;\r\n    gap: 10px;\r\n  }\r\n\r\n  .noteItem {\r\n    overflow: auto;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  background-color: rgb(0, 0, 0);
  font-family: "Quicksand", "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
    sans-serif;
  font-size: 1em;
  color: #fffffe;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

main {
  padding: 1em 3rem; /* Add padding to the left and right */
  margin-bottom: 1em;
}

.note-container {
  display: flex;
  flex-direction: column;
}

.notes-menu {
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(3, 250px);
  align-items: center;
  justify-content: space-around;
  border: 1px solid #504e4e;
  border-radius: 10px;
  margin-bottom: 1em;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -ms-border-radius: 10px;
  -o-border-radius: 10px;
}

.notes {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 equal columns */
  justify-content: center;
  padding: 2em;
  gap: 20px;
  border: 1px solid #504e4e;
  border-radius: 10px;
  align-items: stretch; /* Stretch items to fill the grid cell */
}

.notes-menu p {
  text-align: center;
}

.noteItem {
  display: flex; /* Use flex to align content inside */
  flex-direction: column; /* Stack children vertically */
  justify-content: space-between;
  border: 1px solid #504e4e;
  overflow: auto;
}

.noteTitle {
  padding: 1em;
  border-bottom: 3px solid #504e4e;
}

.noteBody {
  padding: 1em;
}

.note-creation {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

.noteCreatedAt,
.noteArchived {
  text-align: end;
  padding: 0.5em;
}

.addNote {
  display: flex;
  flex-direction: row;
  column-gap: 35px;
}

.noteTitle {
  display: flex;
  justify-content: space-between;
}

#deleteIcon {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: inline-flex;
  align-items: center;
}

.end-container {
  margin-top: 15px;
  padding: 1em;
  border: 1px solid #504e4e;
  border-radius: 10px;
}
`, "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"AAAA;EACE,8BAA8B;EAC9B;cACY;EACZ,cAAc;EACd,cAAc;EACd,UAAU;EACV,SAAS;EACT,sBAAsB;AACxB;;AAEA;EACE,iBAAiB,EAAE,sCAAsC;EACzD,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,qBAAqB;EACrB,uCAAuC;EACvC,mBAAmB;EACnB,6BAA6B;EAC7B,yBAAyB;EACzB,mBAAmB;EACnB,kBAAkB;EAClB,2BAA2B;EAC3B,wBAAwB;EACxB,uBAAuB;EACvB,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,qCAAqC,EAAE,oBAAoB;EAC3D,uBAAuB;EACvB,YAAY;EACZ,SAAS;EACT,yBAAyB;EACzB,mBAAmB;EACnB,oBAAoB,EAAE,wCAAwC;AAChE;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa,EAAE,qCAAqC;EACpD,sBAAsB,EAAE,8BAA8B;EACtD,8BAA8B;EAC9B,yBAAyB;EACzB,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,gCAAgC;AAClC;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,yBAAyB;AAC3B;;AAEA;;EAEE,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,eAAe;EACf,UAAU;EACV,oBAAoB;EACpB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,yBAAyB;EACzB,mBAAmB;AACrB","sourcesContent":["body {\r\n  background-color: rgb(0, 0, 0);\r\n  font-family: \"Quicksand\", \"Gill Sans\", \"Gill Sans MT\", Calibri, \"Trebuchet MS\",\r\n    sans-serif;\r\n  font-size: 1em;\r\n  color: #fffffe;\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nmain {\r\n  padding: 1em 3rem; /* Add padding to the left and right */\r\n  margin-bottom: 1em;\r\n}\r\n\r\n.note-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.notes-menu {\r\n  display: grid;\r\n  justify-items: center;\r\n  grid-template-columns: repeat(3, 250px);\r\n  align-items: center;\r\n  justify-content: space-around;\r\n  border: 1px solid #504e4e;\r\n  border-radius: 10px;\r\n  margin-bottom: 1em;\r\n  -webkit-border-radius: 10px;\r\n  -moz-border-radius: 10px;\r\n  -ms-border-radius: 10px;\r\n  -o-border-radius: 10px;\r\n}\r\n\r\n.notes {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr); /* 3 equal columns */\r\n  justify-content: center;\r\n  padding: 2em;\r\n  gap: 20px;\r\n  border: 1px solid #504e4e;\r\n  border-radius: 10px;\r\n  align-items: stretch; /* Stretch items to fill the grid cell */\r\n}\r\n\r\n.notes-menu p {\r\n  text-align: center;\r\n}\r\n\r\n.noteItem {\r\n  display: flex; /* Use flex to align content inside */\r\n  flex-direction: column; /* Stack children vertically */\r\n  justify-content: space-between;\r\n  border: 1px solid #504e4e;\r\n  overflow: auto;\r\n}\r\n\r\n.noteTitle {\r\n  padding: 1em;\r\n  border-bottom: 3px solid #504e4e;\r\n}\r\n\r\n.noteBody {\r\n  padding: 1em;\r\n}\r\n\r\n.note-creation {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-end;\r\n}\r\n\r\n.noteCreatedAt,\r\n.noteArchived {\r\n  text-align: end;\r\n  padding: 0.5em;\r\n}\r\n\r\n.addNote {\r\n  display: flex;\r\n  flex-direction: row;\r\n  column-gap: 35px;\r\n}\r\n\r\n.noteTitle {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n#deleteIcon {\r\n  background: none;\r\n  border: none;\r\n  cursor: pointer;\r\n  padding: 0;\r\n  display: inline-flex;\r\n  align-items: center;\r\n}\r\n\r\n.end-container {\r\n  margin-top: 15px;\r\n  padding: 1em;\r\n  border: 1px solid #504e4e;\r\n  border-radius: 10px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/styles/mediastyles.css":
/*!************************************!*\
  !*** ./src/styles/mediastyles.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_mediastyles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./mediastyles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/mediastyles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_mediastyles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_mediastyles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_mediastyles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_mediastyles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*************************!*\
  !*** ./scripts/main.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _custom_template_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./custom-template.js */ "./scripts/custom-template.js");
/* harmony import */ var _notes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notes.js */ "./scripts/notes.js");
/* harmony import */ var _total_notes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./total-notes.js */ "./scripts/total-notes.js");
/* harmony import */ var _custom_search_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./custom-search.js */ "./scripts/custom-search.js");
/* harmony import */ var _src_styles_styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/styles/styles.css */ "./src/styles/styles.css");
/* harmony import */ var _src_styles_mediastyles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/styles/mediastyles.css */ "./src/styles/mediastyles.css");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }




// In your main.js file


var NoteClass = new _notes_js__WEBPACK_IMPORTED_MODULE_1__.Notes();
var TotalNotesClass = new _total_notes_js__WEBPACK_IMPORTED_MODULE_2__.TotalNotes(NoteClass);
customElements.define("note-custom-add", /*#__PURE__*/function (_NoteCustomAdd) {
  function _class() {
    _classCallCheck(this, _class);
    return _callSuper(this, _class, [NoteClass, TotalNotesClass]); // Pass instances to the constructor
  }
  _inherits(_class, _NoteCustomAdd);
  return _createClass(_class);
}(_custom_template_js__WEBPACK_IMPORTED_MODULE_0__.NoteCustomAdd));
customElements.define("note-custom-filter", /*#__PURE__*/function (_NoteCustomSearch) {
  function _class2() {
    _classCallCheck(this, _class2);
    return _callSuper(this, _class2);
  }
  _inherits(_class2, _NoteCustomSearch);
  return _createClass(_class2);
}(_custom_search_js__WEBPACK_IMPORTED_MODULE_3__.NoteCustomSearch));
document.addEventListener("DOMContentLoaded", function (event) {
  NoteClass.getNotesHtml();
  TotalNotesClass.getNotesTotalHtml();
  setupDeleteBtnListener();
});
function setupDeleteBtnListener() {
  var notesContainer = document.getElementById("notesList"); // Adjust as needed

  // Use event delegation to listen for clicks on delete buttons
  notesContainer.addEventListener("click", function (event) {
    if (event.target.parentElement.id == "deleteIcon") {
      var noteItem = event.target.closest(".noteItem");
      if (noteItem) {
        var noteId = noteItem.getAttribute("data-noteid");

        // Remove the note item from the DOM
        noteItem.remove();

        // Delete the note from the data structure
        NoteClass.deleteNote(noteId);

        // Update the total notes count
        TotalNotesClass.getNotesTotalHtml();
      }
    }
  });
}
/******/ })()
;
//# sourceMappingURL=bundlef30f997272fff692ccf4.js.map