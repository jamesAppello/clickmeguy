webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_ollep_Documents_clickmeguy_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var C_Users_ollep_Documents_clickmeguy_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_ollep_Documents_clickmeguy_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_ollep_Documents_clickmeguy_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var C_Users_ollep_Documents_clickmeguy_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_ollep_Documents_clickmeguy_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_ollep_Documents_clickmeguy_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var C_Users_ollep_Documents_clickmeguy_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Characters_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Characters.json */ "./Characters.json");
var _Characters_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../Characters.json */ "./Characters.json", 1);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout/index.js");
/* harmony import */ var _components_CharCard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/CharCard */ "./components/CharCard/index.js");
/* harmony import */ var _components_GridComp___WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/GridComp/ */ "./components/GridComp/index.js");
/* harmony import */ var _components_PaperComp___WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/PaperComp/ */ "./components/PaperComp/index.js");
/* harmony import */ var _components_Alert___WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Alert/ */ "./components/Alert/index.js");
/* harmony import */ var _components_Score___WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/Score/ */ "./components/Score/index.js");








var _jsxFileName = "C:\\Users\\ollep\\Documents\\clickmeguy\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_ollep_Documents_clickmeguy_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(C_Users_ollep_Documents_clickmeguy_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(C_Users_ollep_Documents_clickmeguy_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(C_Users_ollep_Documents_clickmeguy_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

// import { useState } from 'react'








var index = /*#__PURE__*/function (_React$Component) {
  Object(C_Users_ollep_Documents_clickmeguy_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(index, _React$Component);

  var _super = _createSuper(index);

  function index() {
    var _this;

    Object(C_Users_ollep_Documents_clickmeguy_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(C_Users_ollep_Documents_clickmeguy_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(C_Users_ollep_Documents_clickmeguy_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "state", {
      characters: _Characters_json__WEBPACK_IMPORTED_MODULE_9__,
      pickedChars: [],
      topScore: 0,
      alertMessage: ""
    });

    Object(C_Users_ollep_Documents_clickmeguy_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(C_Users_ollep_Documents_clickmeguy_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "handlePicked", function (e) {
      // storing name attribute and its value to its charCard in a const variable
      var name = e.target.attributes.getNamedItem("name").value; // cb >> shuffleCharacter 'function'

      _this.shuffleCharacters(); // cb >> check guess takes 'name variable' holding the data value for the given card handling ...
      // ... >>> second parameter for checkGuess is a method that is used as a ...
      // ... >>> callback in the checkguess function denoted >> 'cb'


      _this.checkGuess(name, _this.updateTopScore);
    });

    Object(C_Users_ollep_Documents_clickmeguy_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(C_Users_ollep_Documents_clickmeguy_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "updateTopScore", function (currentState) {
      switch (currentState) {
        case _this.checkGuess = false:
          _this.setState(_this.state.topScore + 1);

          if (_this.state.topScore >= 12) {
            _this.setState(_this.state.topScore = 0);
          }

          break;

        case _this.checkGuess = true:
          _this.setState(_this.state.topScore = 0);

          break;
      } // console.log(this.state);

    });

    Object(C_Users_ollep_Documents_clickmeguy_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(C_Users_ollep_Documents_clickmeguy_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "shuffleCharacters", function () {
      _this.setState(_this.state.characters = _this.shuffleArray(_this.state.characters));
    });

    Object(C_Users_ollep_Documents_clickmeguy_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(C_Users_ollep_Documents_clickmeguy_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "shuffleArray", function (arr) {
      var j, x, i;

      for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = arr[i];
        arr[i] = arr[j];
        arr[j] = x;
      }

      return arr;
    });

    Object(C_Users_ollep_Documents_clickmeguy_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(C_Users_ollep_Documents_clickmeguy_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "checkGuess", function (name, cb) {
      var newState = _objectSpread({}, _this.state);

      if (newState.pickedChars.includes(name)) {
        newState.alertMessage = "YOU ALREADY PICKED THAT GIF!!! TRY AGAIN!!!";
        newState.pickedChars = [];

        _this.setState(_this.state = newState);
      } else {
        newState.pickedChars.push(name);
        newState.alertMessage = "GOOD CHOICE!!!";

        _this.setState(_this.state = newState);
      } //cb(newState, this.alertWinner);


      _this.alertWinner(newState);
    });

    Object(C_Users_ollep_Documents_clickmeguy_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(C_Users_ollep_Documents_clickmeguy_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "alertWinner", function (newState) {
      if (newState.pickedChars.length === 12) {
        newState.alertMessage = alert("CONGRADULATIONS! YOU WON!");
        window.location.reload(false); //newState.pickedChars = [];

        _this.setState(_this.state = newState);
      } else {}
    });

    return _this;
  }

  Object(C_Users_ollep_Documents_clickmeguy_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(index, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 9
        }
      }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_10__["default"], Object(C_Users_ollep_Documents_clickmeguy_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 11
        }
      }), __jsx(_components_GridComp___WEBPACK_IMPORTED_MODULE_12__["default"], {
        container: true,
        direction: "column",
        style: {
          margin: "0 auto",
          maxWidth: 945,
          textAlign: 'center'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 11
        }
      }, __jsx(_components_GridComp___WEBPACK_IMPORTED_MODULE_12__["default"], {
        item: true,
        lg: 12,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 11
        }
      }, __jsx(_components_PaperComp___WEBPACK_IMPORTED_MODULE_13__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 15
        }
      }, this.state.alertMessage === "GOOD CHOICE!" ? __jsx(_components_Alert___WEBPACK_IMPORTED_MODULE_14__["default"], {
        message: this.state.alertMessage,
        style: {
          color: "green",
          fontWeight: "bolder"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 19
        }
      }) : __jsx(_components_Alert___WEBPACK_IMPORTED_MODULE_14__["default"], {
        message: this.state.alertMessage,
        style: {
          color: "blue",
          fontWeight: "bolder"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 21
        }
      }))), __jsx(_components_GridComp___WEBPACK_IMPORTED_MODULE_12__["default"], {
        container: true,
        justify: "space-between",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 13
        }
      }, __jsx(_components_GridComp___WEBPACK_IMPORTED_MODULE_12__["default"], {
        item: true,
        lg: 6,
        md: 6,
        sm: 12,
        xs: 12,
        style: {
          paddingLeft: "100px",
          marginLeft: "161.8px"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 15
        }
      }, __jsx(_components_PaperComp___WEBPACK_IMPORTED_MODULE_13__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 17
        }
      }, __jsx(_components_Score___WEBPACK_IMPORTED_MODULE_15__["default"], {
        type: "Current Score",
        score: this.state.pickedChars.length,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 19
        }
      }))))), __jsx(_components_GridComp___WEBPACK_IMPORTED_MODULE_12__["default"], {
        container: true,
        spacing: 6,
        justify: "center",
        style: {
          maxWidth: 945,
          margin: "0 auto"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 11
        }
      }, this.state.characters.map(function (_char) {
        return __jsx(_components_GridComp___WEBPACK_IMPORTED_MODULE_12__["default"], {
          item: true,
          lg: 3,
          md: 3,
          sm: 4,
          xs: 6,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 15
          }
        }, __jsx(_components_CharCard__WEBPACK_IMPORTED_MODULE_11__["default"], {
          id: _char.id,
          name: _char.name,
          image: _char.image,
          key: _char.id,
          handlePicked: _this2.handlePicked,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 15
          }
        }));
      }))));
    }
  }]);

  return index;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (index);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiaW5kZXgiLCJjaGFyYWN0ZXJzIiwiQ2hhcmFjdGVycyIsInBpY2tlZENoYXJzIiwidG9wU2NvcmUiLCJhbGVydE1lc3NhZ2UiLCJlIiwibmFtZSIsInRhcmdldCIsImF0dHJpYnV0ZXMiLCJnZXROYW1lZEl0ZW0iLCJ2YWx1ZSIsInNodWZmbGVDaGFyYWN0ZXJzIiwiY2hlY2tHdWVzcyIsInVwZGF0ZVRvcFNjb3JlIiwiY3VycmVudFN0YXRlIiwic2V0U3RhdGUiLCJzdGF0ZSIsInNodWZmbGVBcnJheSIsImFyciIsImoiLCJ4IiwiaSIsImxlbmd0aCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImNiIiwibmV3U3RhdGUiLCJpbmNsdWRlcyIsInB1c2giLCJhbGVydFdpbm5lciIsImFsZXJ0Iiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJwcm9wcyIsIm1hcmdpbiIsIm1heFdpZHRoIiwidGV4dEFsaWduIiwiY29sb3IiLCJmb250V2VpZ2h0IiwicGFkZGluZ0xlZnQiLCJtYXJnaW5MZWZ0IiwibWFwIiwiY2hhciIsImlkIiwiaW1hZ2UiLCJoYW5kbGVQaWNrZWQiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBR01BLEs7Ozs7Ozs7Ozs7Ozs7Ozs7OFNBRU07QUFDUEMsZ0JBQVUsRUFBRUMsNkNBREw7QUFFUEMsaUJBQVcsRUFBRSxFQUZOO0FBR1BDLGNBQVEsRUFBRSxDQUhIO0FBSVBDLGtCQUFZLEVBQUU7QUFKUCxLOztxVEFRTyxVQUFDQyxDQUFELEVBQU87QUFDcEI7QUFDQSxVQUFNQyxJQUFJLEdBQUdELENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxVQUFULENBQW9CQyxZQUFwQixDQUFp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LEtBQUksQ0FBQ0MsRUFKWjtBQUtFLHNCQUFZLEVBQUUsTUFBSSxDQUFDRSxZQUxyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREEsQ0FENkI7QUFBQSxPQUE5QixDQURILENBekJBLENBREYsQ0FERjtBQTZDRDs7OztFQWhJZUMsNENBQUssQ0FBQ0MsUzs7QUFxSVRsRCxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41NTdhMzU5ZjdhNTcwOTdkYmMwYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IENoYXJhY3RlcnMgZnJvbSAnLi4vQ2hhcmFjdGVycy5qc29uJ1xyXG5cclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcclxuaW1wb3J0IENoYXJDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvQ2hhckNhcmQnXHJcbmltcG9ydCBHcmlkQ29tcCBmcm9tICcuLi9jb21wb25lbnRzL0dyaWRDb21wLydcclxuaW1wb3J0IFBhcGVyQ29tcCBmcm9tICcuLi9jb21wb25lbnRzL1BhcGVyQ29tcC8nXHJcbmltcG9ydCBBbGVydCBmcm9tICcuLi9jb21wb25lbnRzL0FsZXJ0LydcclxuaW1wb3J0IFNjb3JlIGZyb20gJy4uL2NvbXBvbmVudHMvU2NvcmUvJ1xyXG5cclxuXHJcbmNsYXNzIGluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICBjaGFyYWN0ZXJzOiBDaGFyYWN0ZXJzLFxyXG4gICAgIHBpY2tlZENoYXJzOiBbXSxcclxuICAgICB0b3BTY29yZTogMCxcclxuICAgICBhbGVydE1lc3NhZ2U6IFwiXCIgXHJcbiAgICB9XHJcbiAgICBcclxuICBcclxuICAgIGhhbmRsZVBpY2tlZCA9IChlKSA9PiB7XHJcbiAgICAgIC8vIHN0b3JpbmcgbmFtZSBhdHRyaWJ1dGUgYW5kIGl0cyB2YWx1ZSB0byBpdHMgY2hhckNhcmQgaW4gYSBjb25zdCB2YXJpYWJsZVxyXG4gICAgICBjb25zdCBuYW1lID0gZS50YXJnZXQuYXR0cmlidXRlcy5nZXROYW1lZEl0ZW0oXCJuYW1lXCIpLnZhbHVlO1xyXG4gICAgICAvLyBjYiA+PiBzaHVmZmxlQ2hhcmFjdGVyICdmdW5jdGlvbidcclxuICAgICAgdGhpcy5zaHVmZmxlQ2hhcmFjdGVycygpO1xyXG4gICAgICAvLyBjYiA+PiBjaGVjayBndWVzcyB0YWtlcyAnbmFtZSB2YXJpYWJsZScgaG9sZGluZyB0aGUgZGF0YSB2YWx1ZSBmb3IgdGhlIGdpdmVuIGNhcmQgaGFuZGxpbmcgLi4uXHJcbiAgICAgIC8vIC4uLiA+Pj4gc2Vjb25kIHBhcmFtZXRlciBmb3IgY2hlY2tHdWVzcyBpcyBhIG1ldGhvZCB0aGF0IGlzIHVzZWQgYXMgYSAuLi5cclxuICAgICAgLy8gLi4uID4+PiBjYWxsYmFjayBpbiB0aGUgY2hlY2tndWVzcyBmdW5jdGlvbiBkZW5vdGVkID4+ICdjYidcclxuICAgICAgdGhpcy5jaGVja0d1ZXNzKG5hbWUsIHRoaXMudXBkYXRlVG9wU2NvcmUpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgICB1cGRhdGVUb3BTY29yZSA9IChjdXJyZW50U3RhdGUpID0+IHtcclxuICAgICAgICBzd2l0Y2ggKGN1cnJlbnRTdGF0ZSkge1xyXG4gICAgICAgICAgY2FzZSB0aGlzLmNoZWNrR3Vlc3MgPSBmYWxzZTpcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLnN0YXRlLnRvcFNjb3JlICsgMSlcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUudG9wU2NvcmUgPj0gMTIpIHtcclxuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHRoaXMuc3RhdGUudG9wU2NvcmUgPSAwKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBjYXNlIHRoaXMuY2hlY2tHdWVzcyA9IHRydWU6IFxyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLnN0YXRlLnRvcFNjb3JlID0gMClcclxuICAgICAgICAgIGJyZWFrOyAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgc2h1ZmZsZUNoYXJhY3RlcnMgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5zdGF0ZS5jaGFyYWN0ZXJzID0gdGhpcy5zaHVmZmxlQXJyYXkodGhpcy5zdGF0ZS5jaGFyYWN0ZXJzKSlcclxuICAgIH1cclxuICBcclxuICAgIHNodWZmbGVBcnJheSA9IChhcnIpID0+IHtcclxuICAgICAgdmFyIGosIHgsIGk7XHJcbiAgICAgIGZvciAoaSA9IGFyci5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XHJcbiAgICAgICAgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChpICsxKSk7XHJcbiAgICAgICAgeCA9IGFycltpXTtcclxuICAgICAgICBhcnJbaV0gPSBhcnJbal07XHJcbiAgICAgICAgYXJyW2pdID0geDtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gYXJyO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgY2hlY2tHdWVzcyA9IChuYW1lLGNiKSA9PiB7XHJcbiAgICAgIGNvbnN0IG5ld1N0YXRlID0geyAuLi50aGlzLnN0YXRlIH07XHJcbiAgXHJcbiAgICAgIGlmIChuZXdTdGF0ZS5waWNrZWRDaGFycy5pbmNsdWRlcyhuYW1lKSkge1xyXG4gICAgICAgIG5ld1N0YXRlLmFsZXJ0TWVzc2FnZSA9IGBZT1UgQUxSRUFEWSBQSUNLRUQgVEhBVCBHSUYhISEgVFJZIEFHQUlOISEhYDtcclxuICAgICAgICBuZXdTdGF0ZS5waWNrZWRDaGFycyA9IFtdO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5zdGF0ZSA9IG5ld1N0YXRlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBuZXdTdGF0ZS5waWNrZWRDaGFycy5wdXNoKG5hbWUpO1xyXG4gICAgICAgIG5ld1N0YXRlLmFsZXJ0TWVzc2FnZSA9IGBHT09EIENIT0lDRSEhIWA7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLnN0YXRlID1uZXdTdGF0ZSk7XHJcbiAgICAgIH0gXHJcbiAgICAgICAgIFxyXG4gICAgICAvL2NiKG5ld1N0YXRlLCB0aGlzLmFsZXJ0V2lubmVyKTtcclxuICAgICAgdGhpcy5hbGVydFdpbm5lcihuZXdTdGF0ZSlcclxuICAgIH1cclxuICBcclxuICAgIFxyXG4gIFxyXG4gICAgYWxlcnRXaW5uZXIgPSAobmV3U3RhdGUpID0+IHtcclxuICAgICAgaWYgKG5ld1N0YXRlLnBpY2tlZENoYXJzLmxlbmd0aCA9PT0gMTIpIHtcclxuICAgICAgICBuZXdTdGF0ZS5hbGVydE1lc3NhZ2UgPSBhbGVydChcIkNPTkdSQURVTEFUSU9OUyEgWU9VIFdPTiFcIik7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZChmYWxzZSk7XHJcbiAgICAgICAgLy9uZXdTdGF0ZS5waWNrZWRDaGFycyA9IFtdO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5zdGF0ZSA9IG5ld1N0YXRlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxMYXlvdXQgey4uLnRoaXMucHJvcHN9PlxyXG4gICAgICAgICAgPEdyaWRDb21wIGNvbnRhaW5lciBkaXJlY3Rpb249XCJjb2x1bW5cIiBzdHlsZT17eyBtYXJnaW46IFwiMCBhdXRvXCIsIG1heFdpZHRoOiA5NDUsIHRleHRBbGlnbjonY2VudGVyJyB9fT5cclxuICAgICAgICAgIDxHcmlkQ29tcCBpdGVtIGxnPXsxMn0+XHJcbiAgICAgICAgICAgICAgPFBhcGVyQ29tcD5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmFsZXJ0TWVzc2FnZSA9PT0gXCJHT09EIENIT0lDRSFcIiA/IChcclxuICAgICAgICAgICAgICAgICAgPEFsZXJ0IG1lc3NhZ2U9e3RoaXMuc3RhdGUuYWxlcnRNZXNzYWdlfSBzdHlsZT17eyBjb2xvcjogXCJncmVlblwiLCBmb250V2VpZ2h0OiBcImJvbGRlclwiIH19IC8+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxBbGVydCBtZXNzYWdlPXt0aGlzLnN0YXRlLmFsZXJ0TWVzc2FnZX0gc3R5bGU9e3sgY29sb3I6IFwiYmx1ZVwiLCBmb250V2VpZ2h0OiBcImJvbGRlclwiIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9QYXBlckNvbXA+XHJcbiAgICAgICAgICAgIDwvR3JpZENvbXA+XHJcbiAgXHJcbiAgICAgICAgICAgIDxHcmlkQ29tcCBjb250YWluZXIganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICA8R3JpZENvbXAgXHJcbiAgICAgICAgICAgICAgICBpdGVtIGxnPXs2fSBtZD17Nn0gXHJcbiAgICAgICAgICAgICAgICBzbT17MTJ9IHhzPXsxMn0gXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nTGVmdDogXCIxMDBweFwiLCBtYXJnaW5MZWZ0OiBcIjE2MS44cHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFBhcGVyQ29tcD5cclxuICAgICAgICAgICAgICAgICAgPFNjb3JlIHR5cGU9XCJDdXJyZW50IFNjb3JlXCIgc2NvcmU9e3RoaXMuc3RhdGUucGlja2VkQ2hhcnMubGVuZ3RofSAvPlxyXG4gICAgICAgICAgICAgICAgPC9QYXBlckNvbXA+XHJcbiAgICAgICAgICAgICAgPC9HcmlkQ29tcD5cclxuICAgICAgICAgICAgPC9HcmlkQ29tcD5cclxuICAgICAgICAgIDwvR3JpZENvbXA+XHJcbiAgXHJcbiAgICAgICAgICA8R3JpZENvbXAgY29udGFpbmVyIHNwYWNpbmc9ezZ9IGp1c3RpZnk9XCJjZW50ZXJcIiBzdHlsZT17eyBtYXhXaWR0aDogOTQ1LCBtYXJnaW46IFwiMCBhdXRvXCIgfX0+XHJcbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmNoYXJhY3RlcnMubWFwKGNoYXIgPT4gKFxyXG4gICAgICAgICAgICAgIDxHcmlkQ29tcCBpdGVtIGxnPXszfSBtZD17M30gc209ezR9IHhzPXs2fT5cclxuICAgICAgICAgICAgICA8Q2hhckNhcmRcclxuICAgICAgICAgICAgICAgIGlkPXtjaGFyLmlkfVxyXG4gICAgICAgICAgICAgICAgbmFtZT17Y2hhci5uYW1lfVxyXG4gICAgICAgICAgICAgICAgaW1hZ2U9e2NoYXIuaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICBrZXk9e2NoYXIuaWR9XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVQaWNrZWQ9e3RoaXMuaGFuZGxlUGlja2VkfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9HcmlkQ29tcD5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L0dyaWRDb21wPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKVxyXG4gICAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIH1cclxuICBleHBvcnQgZGVmYXVsdCBpbmRleDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==