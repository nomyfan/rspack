(self['webpackChunkwebpack'] = self['webpackChunkwebpack'] || []).push([["main"], {
"./a.js": function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
'use strict';
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  'aaa': function() { return _app__WEBPACK_IMPORTED_MODULE_1_; },
  'routes': function() { return routes; }
});
/* harmony import */var _answer__WEBPACK_IMPORTED_MODULE_0_ = __webpack_require__(/* ./answer */"./answer.js");
/* harmony import */var _answer__WEBPACK_IMPORTED_MODULE_0__default = /*#__PURE__*/__webpack_require__.n(_answer__WEBPACK_IMPORTED_MODULE_0_);
/* harmony import */var _app__WEBPACK_IMPORTED_MODULE_1_ = __webpack_require__(/* ./app */"./app.js");
/* harmony import */var _app__WEBPACK_IMPORTED_MODULE_1__default = /*#__PURE__*/__webpack_require__.n(_app__WEBPACK_IMPORTED_MODULE_1_);


 const routes = {
    answer: _answer__WEBPACK_IMPORTED_MODULE_0_.something
};
},
"./answer.js": function (__unused_webpack_module, exports, __webpack_require__) {
},
"./app.js": function (__unused_webpack_module, exports, __webpack_require__) {
},
"./index.js": function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
'use strict';
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _a_js__WEBPACK_IMPORTED_MODULE_0_ = __webpack_require__(/* ./a.js */"./a.js");

_a_js__WEBPACK_IMPORTED_MODULE_0_.routes;
_a_js__WEBPACK_IMPORTED_MODULE_0_.aaa.result;
},

},function(__webpack_require__) {
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId) }
var __webpack_exports__ = (__webpack_exec__("./index.js"));

}
]);