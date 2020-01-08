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
/* harmony import */ var _Characters_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Characters.json */ "./Characters.json");
var _Characters_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../Characters.json */ "./Characters.json", 1);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout/index.js");
/* harmony import */ var _components_CharCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/CharCard */ "./components/CharCard/index.js");
/* harmony import */ var _components_GridComp___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/GridComp/ */ "./components/GridComp/index.js");
/* harmony import */ var _components_PaperComp___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PaperComp/ */ "./components/PaperComp/index.js");
/* harmony import */ var _components_Alert___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Alert/ */ "./components/Alert/index.js");
/* harmony import */ var _components_Score___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Score/ */ "./components/Score/index.js");
var _jsxFileName = "C:\\Users\\ollep\\Documents\\clickmeguy\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var index = function index(props) {
  // console.log(props)
  // CHARCTERS ARRAY
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_Characters_json__WEBPACK_IMPORTED_MODULE_1__),
      character = _useState[0],
      setCharacters = _useState[1];

  console.log(character); // SCORE

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      score = _useState2[0],
      setScore = _useState2[1];

  console.log(score); // ALERT MESSAGE

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      alert = _useState3[0],
      setAlert = _useState3[1];

  console.log(alert); // METHODS

  var handlePicked = function handlePicked(e) {
    var name = e.target.attributes.getNamedItem('name').value;
    console.log(name);
    shuffleCharacters();
    checkGuess(name, updateTopScore);
  };

  var updateTopScore = function updateTopScore(currentScore) {
    console.log(currentScore);
  }; // * calledback from handlePicked


  var checkGuess = function checkGuess(name, cb) {
    console.log(name);
    console.log(cb);
  }; // * calledback from handlePicked


  var shuffleCharacters = function shuffleCharacters() {
    setCharacters(shuffleArray(character));
    console.log(character); // ** characters shuffle but pics dont shuffle as the data does...
  }; // * callback from shuffleCharacters


  var shuffleArray = function shuffleArray(arr) {
    var j, x, i;

    for (i = arr.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = arr[i];
      arr[i] = arr[j];
      arr[j] = x;
    }

    return arr;
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx(_components_GridComp___WEBPACK_IMPORTED_MODULE_4__["default"], {
    container: true,
    direction: "column",
    style: {
      mrgin: "0 auto",
      maxWidth: 945
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx(_components_GridComp___WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    lg: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx(_components_PaperComp___WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, alert === "Good Choice!" ? __jsx(_components_Alert___WEBPACK_IMPORTED_MODULE_6__["default"], {
    message: alert,
    style: {
      color: 'green'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }) : __jsx(_components_Alert___WEBPACK_IMPORTED_MODULE_6__["default"], {
    message: alert,
    style: {
      color: 'blue'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }))), __jsx(_components_GridComp___WEBPACK_IMPORTED_MODULE_4__["default"], {
    container: true,
    justify: "space-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx(_components_GridComp___WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    lg: 6,
    md: 6,
    sm: 12,
    xs: 12,
    style: {
      padingLeft: '100px',
      marginLeft: "101.8px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx(_components_PaperComp___WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx(_components_Score___WEBPACK_IMPORTED_MODULE_7__["default"], {
    type: "Score To Win",
    Score: character.length,
    currentScore: score,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }))))), __jsx(_components_GridComp___WEBPACK_IMPORTED_MODULE_4__["default"], {
    container: true,
    spacing: 8,
    justify: "center",
    style: {
      maxWidth: 945,
      margin: '0 auto'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, character.map(function (_char) {
    return __jsx(_components_CharCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
      id: _char.id,
      key: _char.id,
      name: _char.name,
      image: _char.image,
      handlePicked: handlePicked,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    });
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ })

})
//# sourceMappingURL=index.js.e02276e6650dea4d13d9.hot-update.js.map