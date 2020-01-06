webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout/index.js");
/* harmony import */ var _Characters_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Characters.json */ "./Characters.json");
var _Characters_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../Characters.json */ "./Characters.json", 1);
var _jsxFileName = "C:\\Users\\ollep\\Documents\\clickmeguy\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var index = function index(props) {
  console.log(props);
  console.log(_Characters_json__WEBPACK_IMPORTED_MODULE_2__);
  var charTEST = _Characters_json__WEBPACK_IMPORTED_MODULE_2__.map(function (_char) {
    return __jsx("div", {
      key: _char.name,
      className: "card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, " ", _char.name, " "));
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Welcome to ClickMeGuy!"), __jsx("div", {
    className: "container Holder",
    style: {
      textAlign: 'center',
      backgroundColor: 'lightgrey',
      borderRadius: 10.1618
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "this is a TEST_H1_TAG"), __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }))));
}; // index.getInitialProps = async function


/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ })

})
//# sourceMappingURL=index.js.afbcd8f48400e10a6acc.hot-update.js.map