module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Characters.json":
/*!*************************!*\
  !*** ./Characters.json ***!
  \*************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":1,\"name\":\"PeterChainsawsDoor\",\"image\":\"https://media.giphy.com/media/TpCql2eRfPwqes1rVG/giphy.gif\"},{\"id\":2,\"name\":\"Brian\",\"image\":\"https://media0.giphy.com/media/HG05lYgPrD1Re/giphy.gif?cid=01592e1e6220cadd380e7525049b512868a8ee99c4b7734d&rid=giphy.gif\"},{\"id\":3,\"name\":\"Peter\",\"image\":\"https://media3.giphy.com/media/FeFVaCaun5Yt2/giphy.gif?cid=01592e1e6301b6a40ee7320d4c6b7fe3b49b421a1ab4b58a&rid=giphy.gif\"},{\"id\":4,\"name\":\"Lois\",\"image\":\"https://media1.giphy.com/media/3o6ZtpRoYe9wbyfcBi/giphy.gif?cid=01592e1e6220cadd380e7525049b512868a8ee99c4b7734d&rid=giphy.gif\"},{\"id\":5,\"name\":\"CandyHoodiePoopJoke\",\"image\":\"https://media.giphy.com/media/AswNFxTY50VcA/giphy.gif\"},{\"id\":6,\"name\":\"Peter&Jesus\",\"image\":\"https://media.giphy.com/media/KYPnZKeN8aiFW/giphy.gif\"},{\"id\":7,\"name\":\"Quagmire\",\"image\":\"https://media.giphy.com/media/hDSy8w6rGHeTe/giphy.gif\"},{\"id\":8,\"name\":\"West\",\"image\":\"https://media.giphy.com/media/Dvle3DdIB46XK/giphy.gif\"},{\"id\":9,\"name\":\"Horse\",\"image\":\"https://media.giphy.com/media/Hv7CK0eIOfc0E/giphy.gif\"},{\"id\":10,\"name\":\"Joyce\",\"image\":\"https://media0.giphy.com/media/l0HlL6eH6eEew5FpS/giphy.gif?cid=01592e1e6220cadd380e7525049b512868a8ee99c4b7734d&rid=giphy.gif\"},{\"id\":11,\"name\":\"Bonnie\",\"image\":\"https://media0.giphy.com/media/l0HlPwMAzh13pcZ20/giphy.gif?cid=01592e1e6301b6a40ee7320d4c6b7fe3b49b421a1ab4b58a&rid=giphy.gif\"},{\"id\":12,\"name\":\"MonkeyPointingAngry\",\"image\":\"https://media.giphy.com/media/l0HluVRlGyuCOYQhi/giphy.gif\"}]");

/***/ }),

/***/ "./components/Alert/Alert.js":
/*!***********************************!*\
  !*** ./components/Alert/Alert.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\ollep\\Documents\\clickmeguy\\components\\Alert\\Alert.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Alert = props => {
  return __jsx("div", {
    className: "default",
    style: props.style,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, props.message ? __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 17
    }
  }, props.message) : __jsx("h3", {
    className: "default-msg black",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  }, "Click a pic to start!"));
};

/* harmony default export */ __webpack_exports__["default"] = (Alert);

/***/ }),

/***/ "./components/Alert/index.js":
/*!***********************************!*\
  !*** ./components/Alert/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Alert */ "./components/Alert/Alert.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Alert__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/CharCard/CharCard.css":
/*!******************************************!*\
  !*** ./components/CharCard/CharCard.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"card": "_1n-RFF_0mRUt0qQLxzdp80"
};

/***/ }),

/***/ "./components/CharCard/CharCard.js":
/*!*****************************************!*\
  !*** ./components/CharCard/CharCard.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CharCard_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CharCard.css */ "./components/CharCard/CharCard.css");
/* harmony import */ var _CharCard_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_CharCard_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\ollep\\Documents\\clickmeguy\\components\\CharCard\\CharCard.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const CharCard = ({
  id,
  name,
  image,
  handlePicked
}) => {
  // console.log(handlePicked)
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx("img", {
    id: id,
    className: "card",
    key: id,
    name: name,
    src: image,
    onClick: handlePicked,
    width: 200,
    height: 200,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 11
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (CharCard);

/***/ }),

/***/ "./components/CharCard/index.js":
/*!**************************************!*\
  !*** ./components/CharCard/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CharCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CharCard */ "./components/CharCard/CharCard.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _CharCard__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/GridComp/GridComp.js":
/*!*****************************************!*\
  !*** ./components/GridComp/GridComp.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\ollep\\Documents\\clickmeguy\\components\\GridComp\\GridComp.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



const GridComp = props => {
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], _extends({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }), props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (GridComp);

/***/ }),

/***/ "./components/GridComp/index.js":
/*!**************************************!*\
  !*** ./components/GridComp/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GridComp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GridComp */ "./components/GridComp/GridComp.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _GridComp__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/Layout/Layout.js":
/*!*************************************!*\
  !*** ./components/Layout/Layout.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../NavBar */ "./components/NavBar/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\ollep\\Documents\\clickmeguy\\components\\Layout\\Layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Layout = props => __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }
}, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }
}, __jsx("meta", {
  charSet: "UTF-8",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 13
  }
}), __jsx("meta", {
  name: "viewport",
  content: "initial-scale=1.0, width=device-width",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 13
  }
}), __jsx("title", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 13
  }
}, "ClickMeGuy"), __jsx("link", {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 13
  }
}), __jsx("link", {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/icon?family=Material+Icons",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 13
  }
})), __jsx(_NavBar__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 9
  }
}), __jsx("div", {
  className: "container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 9
  }
}, props.children));

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Layout/index.js":
/*!************************************!*\
  !*** ./components/Layout/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layout */ "./components/Layout/Layout.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Layout__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/NavBar/NavBar.js":
/*!*************************************!*\
  !*** ./components/NavBar/NavBar.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\ollep\\Documents\\clickmeguy\\components\\NavBar\\NavBar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// import Link from 'next/link';


const NavBar = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["AppBar"], _extends({
    position: "static"
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Toolbar"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h2",
    color: "inherit",
    align: "center",
    style: {
      color: 'yellow',
      fontWeight: 'bolder',
      padding: "0.2em"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 21
    }
  }, "Welcome to ClickMe'Guy!"))));
};

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ }),

/***/ "./components/NavBar/index.js":
/*!************************************!*\
  !*** ./components/NavBar/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavBar */ "./components/NavBar/NavBar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _NavBar__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/PaperComp/PaperComp.js":
/*!*******************************************!*\
  !*** ./components/PaperComp/PaperComp.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\ollep\\Documents\\clickmeguy\\components\\PaperComp\\PaperComp.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const PaperComp = props => {
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Paper"], {
    style: {
      display: 'block',
      textAlign: 'center'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (PaperComp);

/***/ }),

/***/ "./components/PaperComp/index.js":
/*!***************************************!*\
  !*** ./components/PaperComp/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PaperComp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PaperComp */ "./components/PaperComp/PaperComp.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _PaperComp__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/Score/Score.css":
/*!************************************!*\
  !*** ./components/Score/Score.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"score": "_3xTb0w4Rt5zP4pL__KV_hp"
};

/***/ }),

/***/ "./components/Score/Score.js":
/*!***********************************!*\
  !*** ./components/Score/Score.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Score_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Score.css */ "./components/Score/Score.css");
/* harmony import */ var _Score_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Score_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\ollep\\Documents\\clickmeguy\\components\\Score\\Score.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Score = props => {
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    className: "score",
    style: {
      padding: '6.18%',
      backgroundColor: '#37AEF5',
      borderRadius: 20
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("h2", {
    style: {
      color: 'yellow'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, "Current Score: ", props.score), __jsx("h2", {
    style: {
      color: 'white'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, "Score to WIN: 12"));
};

/* harmony default export */ __webpack_exports__["default"] = (Score);

/***/ }),

/***/ "./components/Score/index.js":
/*!***********************************!*\
  !*** ./components/Score/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Score__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Score */ "./components/Score/Score.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Score__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Characters_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Characters.json */ "./Characters.json");
var _Characters_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../Characters.json */ "./Characters.json", 1);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout/index.js");
/* harmony import */ var _components_CharCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/CharCard */ "./components/CharCard/index.js");
/* harmony import */ var _components_GridComp___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/GridComp/ */ "./components/GridComp/index.js");
/* harmony import */ var _components_PaperComp___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PaperComp/ */ "./components/PaperComp/index.js");
/* harmony import */ var _components_Alert___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Alert/ */ "./components/Alert/index.js");
/* harmony import */ var _components_Score___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Score/ */ "./components/Score/index.js");
/* harmony import */ var _static_styles_index_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../static/styles/index.css */ "./static/styles/index.css");
/* harmony import */ var _static_styles_index_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_static_styles_index_css__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Users\\ollep\\Documents\\clickmeguy\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import { useState } from 'react'









class index extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      characters: _Characters_json__WEBPACK_IMPORTED_MODULE_1__,
      pickedChars: [],
      topScore: 0,
      alertMessage: ""
    });

    _defineProperty(this, "handlePicked", e => {
      // storing name attribute and its value to its charCard in a const variable
      const name = e.target.attributes.getNamedItem("name").value; // cb >> shuffleCharacter 'function'

      this.shuffleCharacters(); // cb >> check guess takes 'name variable' holding the data value for the given card handling ...
      // ... >>> second parameter for checkGuess is a method that is used as a ...
      // ... >>> callback in the checkguess function denoted >> 'cb'

      this.checkGuess(name, this.updateTopScore);
    });

    _defineProperty(this, "updateTopScore", currentState => {
      switch (currentState) {
        case this.checkGuess = false:
          this.setState(this.state.topScore + 1);

          if (this.state.topScore >= 12) {
            this.setState(this.state.topScore = 0);
          }

          break;

        case this.checkGuess = true:
          this.setState(this.state.topScore = 0);
          break;
      } // console.log(this.state);

    });

    _defineProperty(this, "shuffleCharacters", () => {
      this.setState(this.state.characters = this.shuffleArray(this.state.characters));
    });

    _defineProperty(this, "shuffleArray", arr => {
      var j, x, i;

      for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = arr[i];
        arr[i] = arr[j];
        arr[j] = x;
      }

      return arr;
    });

    _defineProperty(this, "checkGuess", (name, cb) => {
      const newState = _objectSpread({}, this.state);

      if (newState.pickedChars.includes(name)) {
        newState.alertMessage = `YOU ALREADY PICKED THAT GIF!!! TRY AGAIN!!!`;
        newState.pickedChars = [];
        this.setState(this.state = newState);
      } else {
        newState.pickedChars.push(name);
        newState.alertMessage = `GOOD CHOICE!!!`;
        this.setState(this.state = newState);
      }

      this.alertWinner(newState);
    });

    _defineProperty(this, "alertWinner", newState => {
      if (newState.pickedChars.length === 12) {
        newState.alertMessage = alert("CONGRADULATIONS! YOU WON!");
        window.location.reload(false);
        this.setState(this.state = newState);
      } else {}
    });
  }

  render() {
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }
    }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, this.props, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 11
      }
    }), __jsx(_components_GridComp___WEBPACK_IMPORTED_MODULE_4__["default"], {
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
        lineNumber: 96,
        columnNumber: 11
      }
    }, __jsx(_components_GridComp___WEBPACK_IMPORTED_MODULE_4__["default"], {
      item: true,
      lg: 12,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 11
      }
    }, __jsx(_components_PaperComp___WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 15
      }
    }, this.state.alertMessage === "GOOD CHOICE!" ? __jsx(_components_Alert___WEBPACK_IMPORTED_MODULE_6__["default"], {
      message: this.state.alertMessage,
      style: {
        color: "green",
        fontWeight: "bolder"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 19
      }
    }) : __jsx(_components_Alert___WEBPACK_IMPORTED_MODULE_6__["default"], {
      message: this.state.alertMessage,
      style: {
        color: "blue",
        fontWeight: "bolder"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 21
      }
    }))), __jsx(_components_GridComp___WEBPACK_IMPORTED_MODULE_4__["default"], {
      container: true,
      justify: "space-between",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 13
      }
    }, __jsx(_components_GridComp___WEBPACK_IMPORTED_MODULE_4__["default"], {
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
        lineNumber: 111,
        columnNumber: 15
      }
    }, __jsx(_components_PaperComp___WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 17
      }
    }, __jsx(_components_Score___WEBPACK_IMPORTED_MODULE_7__["default"], {
      type: "Current Score",
      score: this.state.pickedChars.length,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 19
      }
    }))))), __jsx(_components_GridComp___WEBPACK_IMPORTED_MODULE_4__["default"], {
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
        lineNumber: 123,
        columnNumber: 11
      }
    }, this.state.characters.map(char => __jsx(_components_GridComp___WEBPACK_IMPORTED_MODULE_4__["default"], {
      item: true,
      lg: 3,
      md: 3,
      sm: 4,
      xs: 6,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 15
      }
    }, __jsx(_components_CharCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
      id: char.id,
      name: char.name,
      image: char.image,
      key: char.id,
      handlePicked: this.handlePicked,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 15
      }
    }))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "./static/styles/index.css":
/*!*********************************!*\
  !*** ./static/styles/index.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BbGVydC9BbGVydC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FsZXJ0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2hhckNhcmQvQ2hhckNhcmQuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2hhckNhcmQvQ2hhckNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DaGFyQ2FyZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0dyaWRDb21wL0dyaWRDb21wLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvR3JpZENvbXAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF5b3V0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTmF2QmFyL05hdkJhci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdkJhci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1BhcGVyQ29tcC9QYXBlckNvbXAuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9QYXBlckNvbXAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TY29yZS9TY29yZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TY29yZS9TY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Njb3JlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJBbGVydCIsInByb3BzIiwic3R5bGUiLCJtZXNzYWdlIiwiQ2hhckNhcmQiLCJpZCIsIm5hbWUiLCJpbWFnZSIsImhhbmRsZVBpY2tlZCIsIkdyaWRDb21wIiwiY2hpbGRyZW4iLCJMYXlvdXQiLCJOYXZCYXIiLCJjb2xvciIsImZvbnRXZWlnaHQiLCJwYWRkaW5nIiwiUGFwZXJDb21wIiwiZGlzcGxheSIsInRleHRBbGlnbiIsIlNjb3JlIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyUmFkaXVzIiwic2NvcmUiLCJpbmRleCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY2hhcmFjdGVycyIsIkNoYXJhY3RlcnMiLCJwaWNrZWRDaGFycyIsInRvcFNjb3JlIiwiYWxlcnRNZXNzYWdlIiwiZSIsInRhcmdldCIsImF0dHJpYnV0ZXMiLCJnZXROYW1lZEl0ZW0iLCJ2YWx1ZSIsInNodWZmbGVDaGFyYWN0ZXJzIiwiY2hlY2tHdWVzcyIsInVwZGF0ZVRvcFNjb3JlIiwiY3VycmVudFN0YXRlIiwic2V0U3RhdGUiLCJzdGF0ZSIsInNodWZmbGVBcnJheSIsImFyciIsImoiLCJ4IiwiaSIsImxlbmd0aCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImNiIiwibmV3U3RhdGUiLCJpbmNsdWRlcyIsInB1c2giLCJhbGVydFdpbm5lciIsImFsZXJ0Iiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJyZW5kZXIiLCJtYXJnaW4iLCJtYXhXaWR0aCIsInBhZGRpbmdMZWZ0IiwibWFyZ2luTGVmdCIsIm1hcCIsImNoYXIiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxn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O0FBQUE7QUFBQTtBQUFBLE9BQ0EsTUFBQyw0REFBRDtBQUNFLFFBQUUsRUFBRUEsSUFBSSxDQUFDN0QsRUFEWDtBQUVFLFVBQUksRUFBRTZELElBQUksQ0FBQzVELElBRmI7QUFHRSxXQUFLLEVBQUU0RCxJQUFJLENBQUMzRCxLQUhkO0FBSUUsU0FBRyxFQUFFMkQsSUFBSSxDQUFDN0QsRUFKWjtBQUtFLGtCQUFZLEVBQUUsS0FBS0csWUFMckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURBLENBREQsQ0FESCxDQTVCQSxDQURGLENBREY7QUFnREQ7O0FBaEkrQjs7QUFxSW5CZSxvRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakpGLDhDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsIlxyXG5cclxuY29uc3QgQWxlcnQgPSAocHJvcHMpID0+IHtcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlZmF1bHRcIiBzdHlsZT17cHJvcHMuc3R5bGV9PlxyXG4gICAgICAgICAgICB7cHJvcHMubWVzc2FnZSA/IChcclxuICAgICAgICAgICAgICAgIDxoMz57cHJvcHMubWVzc2FnZX08L2gzPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0nZGVmYXVsdC1tc2cgYmxhY2snPkNsaWNrIGEgcGljIHRvIHN0YXJ0ITwvaDM+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQWxlcnQiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9BbGVydCciLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjYXJkXCI6IFwiXzFuLVJGRl8wbVJVdDBxUUx4emRwODBcIlxufTsiLCJpbXBvcnQgJy4vQ2hhckNhcmQuY3NzJ1xyXG5cclxuY29uc3QgQ2hhckNhcmQgPSAoeyBpZCwgbmFtZSwgaW1hZ2UsIGhhbmRsZVBpY2tlZCB9KSA9PiB7XHJcbiAgLy8gY29uc29sZS5sb2coaGFuZGxlUGlja2VkKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGltZyBcclxuICAgICAgICAgICAgaWQ9e2lkfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9J2NhcmQnXHJcbiAgICAgICAgICAgIGtleT17aWR9XHJcbiAgICAgICAgICAgIG5hbWU9e25hbWV9XHJcbiAgICAgICAgICAgIHNyYz17aW1hZ2V9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVBpY2tlZH1cclxuICAgICAgICAgICAgd2lkdGg9ezIwMH1cclxuICAgICAgICAgICAgaGVpZ2h0PXsyMDB9XHJcbiAgICAgICAgICAvPiAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQ2hhckNhcmRcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vQ2hhckNhcmQnIiwiaW1wb3J0IHsgR3JpZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5cclxuY29uc3QgR3JpZENvbXAgPShwcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxHcmlkIHsuLi5wcm9wc30+XHJcbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgR3JpZENvbXAiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9HcmlkQ29tcCciLCJpbXBvcnQgTmF2QmFyIGZyb20gJy4uL05hdkJhcic7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcblxyXG5cclxuY29uc3QgTGF5b3V0ID0gKHByb3BzKSA9PiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICA8bWV0YSBjaGFyU2V0PSdVVEYtOCcvPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XHJcbiAgICAgICAgICAgIDx0aXRsZT5DbGlja01lR3V5PC90aXRsZT5cclxuICAgICAgICAgICAgPGxpbmsgXHJcbiAgICAgICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCIgXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzozMDAsNDAwLDUwMCw3MDAmZGlzcGxheT1zd2FwXCIgLz5cclxuXHJcbiAgICAgICAgICAgIDxsaW5rIFxyXG4gICAgICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiIFxyXG4gICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vaWNvbj9mYW1pbHk9TWF0ZXJpYWwrSWNvbnNcIiAvPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgey8qIDxCT0RZPiAqL31cclxuICAgICAgICA8TmF2QmFyIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHsvKiA8L0JPRFk+ICovfVxyXG5cclxuICAgIDwvZGl2PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vTGF5b3V0JyIsIi8vIGltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IFxyXG4gICAgQXBwQmFyLCBcclxuICAgIFRvb2xiYXIsIFxyXG4gICAgVHlwb2dyYXBoeSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG4gICAgXHJcblxyXG5jb25zdCBOYXZCYXIgPSAocHJvcHMpID0+IHtcclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8QXBwQmFyIHBvc2l0aW9uPSdzdGF0aWMnIHsuLi5wcm9wc30+XHJcbiAgICAgICAgICAgICAgICA8VG9vbGJhcj5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD0naDInIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj0naW5oZXJpdCcgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduPSdjZW50ZXInIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2NvbG9yOid5ZWxsb3cnLCBmb250V2VpZ2h0Oidib2xkZXInLCBwYWRkaW5nOiBcIjAuMmVtXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICBXZWxjb21lIHRvIENsaWNrTWUnR3V5IVxyXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICAgICAgPC9BcHBCYXI+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn0gXHJcbmV4cG9ydCBkZWZhdWx0IE5hdkJhclxyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9OYXZCYXInIiwiaW1wb3J0IHsgUGFwZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcblxyXG5jb25zdCBQYXBlckNvbXAgPSAocHJvcHMpID0+IHtcclxuICAgIHJldHVybihcclxuICAgICAgICA8UGFwZXIgc3R5bGU9e3tkaXNwbGF5OidibG9jaycsIHRleHRBbGlnbjonY2VudGVyJ319PlxyXG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgPC9QYXBlcj5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBQYXBlckNvbXAiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9QYXBlckNvbXAnIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwic2NvcmVcIjogXCJfM3hUYjB3NFJ0NXpQNHBMX19LVl9ocFwiXG59OyIsImltcG9ydCAnLi9TY29yZS5jc3MnXHJcbmltcG9ydCB7IENhcmQsIEJhZGdlIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcblxyXG5cclxuY29uc3QgU2NvcmUgPSAocHJvcHMpID0+IHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cInNjb3JlXCIgc3R5bGU9e3sgcGFkZGluZzogJzYuMTglJywgYmFja2dyb3VuZENvbG9yOiAnIzM3QUVGNScsIGJvcmRlclJhZGl1czogMjAgfX0+XHJcbiAgICAgICAgICAgIDxoMiBzdHlsZT17e2NvbG9yOid5ZWxsb3cnfX0+Q3VycmVudCBTY29yZToge3Byb3BzLnNjb3JlfTwvaDI+XHJcbiAgICAgICAgICAgIDxoMiBzdHlsZT17e2NvbG9yOid3aGl0ZSd9fT5TY29yZSB0byBXSU46IDEyPC9oMj5cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgU2NvcmUiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9TY29yZSciLCIvLyBpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQ2hhcmFjdGVycyBmcm9tICcuLi9DaGFyYWN0ZXJzLmpzb24nXHJcblxyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xyXG5pbXBvcnQgQ2hhckNhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9DaGFyQ2FyZCdcclxuaW1wb3J0IEdyaWRDb21wIGZyb20gJy4uL2NvbXBvbmVudHMvR3JpZENvbXAvJ1xyXG5pbXBvcnQgUGFwZXJDb21wIGZyb20gJy4uL2NvbXBvbmVudHMvUGFwZXJDb21wLydcclxuaW1wb3J0IEFsZXJ0IGZyb20gJy4uL2NvbXBvbmVudHMvQWxlcnQvJ1xyXG5pbXBvcnQgU2NvcmUgZnJvbSAnLi4vY29tcG9uZW50cy9TY29yZS8nXHJcblxyXG5pbXBvcnQgXCIuLi9zdGF0aWMvc3R5bGVzL2luZGV4LmNzc1wiXHJcblxyXG5jbGFzcyBpbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgY2hhcmFjdGVyczogQ2hhcmFjdGVycyxcclxuICAgICBwaWNrZWRDaGFyczogW10sXHJcbiAgICAgdG9wU2NvcmU6IDAsXHJcbiAgICAgYWxlcnRNZXNzYWdlOiBcIlwiIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgXHJcbiAgICBoYW5kbGVQaWNrZWQgPSAoZSkgPT4ge1xyXG4gICAgICAvLyBzdG9yaW5nIG5hbWUgYXR0cmlidXRlIGFuZCBpdHMgdmFsdWUgdG8gaXRzIGNoYXJDYXJkIGluIGEgY29uc3QgdmFyaWFibGVcclxuICAgICAgY29uc3QgbmFtZSA9IGUudGFyZ2V0LmF0dHJpYnV0ZXMuZ2V0TmFtZWRJdGVtKFwibmFtZVwiKS52YWx1ZTtcclxuICAgICAgLy8gY2IgPj4gc2h1ZmZsZUNoYXJhY3RlciAnZnVuY3Rpb24nXHJcbiAgICAgIHRoaXMuc2h1ZmZsZUNoYXJhY3RlcnMoKTtcclxuICAgICAgLy8gY2IgPj4gY2hlY2sgZ3Vlc3MgdGFrZXMgJ25hbWUgdmFyaWFibGUnIGhvbGRpbmcgdGhlIGRhdGEgdmFsdWUgZm9yIHRoZSBnaXZlbiBjYXJkIGhhbmRsaW5nIC4uLlxyXG4gICAgICAvLyAuLi4gPj4+IHNlY29uZCBwYXJhbWV0ZXIgZm9yIGNoZWNrR3Vlc3MgaXMgYSBtZXRob2QgdGhhdCBpcyB1c2VkIGFzIGEgLi4uXHJcbiAgICAgIC8vIC4uLiA+Pj4gY2FsbGJhY2sgaW4gdGhlIGNoZWNrZ3Vlc3MgZnVuY3Rpb24gZGVub3RlZCA+PiAnY2InXHJcbiAgICAgIHRoaXMuY2hlY2tHdWVzcyhuYW1lLCB0aGlzLnVwZGF0ZVRvcFNjb3JlKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgICAgdXBkYXRlVG9wU2NvcmUgPSAoY3VycmVudFN0YXRlKSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChjdXJyZW50U3RhdGUpIHtcclxuICAgICAgICAgIGNhc2UgdGhpcy5jaGVja0d1ZXNzID0gZmFsc2U6XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5zdGF0ZS50b3BTY29yZSArIDEpXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnRvcFNjb3JlID49IDEyKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLnN0YXRlLnRvcFNjb3JlID0gMClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgY2FzZSB0aGlzLmNoZWNrR3Vlc3MgPSB0cnVlOiBcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5zdGF0ZS50b3BTY29yZSA9IDApXHJcbiAgICAgICAgICBicmVhazsgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgIHNodWZmbGVDaGFyYWN0ZXJzID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHRoaXMuc3RhdGUuY2hhcmFjdGVycyA9IHRoaXMuc2h1ZmZsZUFycmF5KHRoaXMuc3RhdGUuY2hhcmFjdGVycykpXHJcbiAgICB9XHJcbiAgXHJcbiAgICBzaHVmZmxlQXJyYXkgPSAoYXJyKSA9PiB7XHJcbiAgICAgIHZhciBqLCB4LCBpO1xyXG4gICAgICBmb3IgKGkgPSBhcnIubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xyXG4gICAgICAgIGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaSArMSkpO1xyXG4gICAgICAgIHggPSBhcnJbaV07XHJcbiAgICAgICAgYXJyW2ldID0gYXJyW2pdO1xyXG4gICAgICAgIGFycltqXSA9IHg7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGFycjtcclxuICAgIH1cclxuICBcclxuICAgIGNoZWNrR3Vlc3MgPSAobmFtZSxjYikgPT4ge1xyXG4gICAgICBjb25zdCBuZXdTdGF0ZSA9IHsgLi4udGhpcy5zdGF0ZSB9O1xyXG4gIFxyXG4gICAgICBpZiAobmV3U3RhdGUucGlja2VkQ2hhcnMuaW5jbHVkZXMobmFtZSkpIHtcclxuICAgICAgICBuZXdTdGF0ZS5hbGVydE1lc3NhZ2UgPSBgWU9VIEFMUkVBRFkgUElDS0VEIFRIQVQgR0lGISEhIFRSWSBBR0FJTiEhIWA7XHJcbiAgICAgICAgbmV3U3RhdGUucGlja2VkQ2hhcnMgPSBbXTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHRoaXMuc3RhdGUgPSBuZXdTdGF0ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbmV3U3RhdGUucGlja2VkQ2hhcnMucHVzaChuYW1lKTtcclxuICAgICAgICBuZXdTdGF0ZS5hbGVydE1lc3NhZ2UgPSBgR09PRCBDSE9JQ0UhISFgO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5zdGF0ZSA9bmV3U3RhdGUpO1xyXG4gICAgICB9IFxyXG4gICAgICB0aGlzLmFsZXJ0V2lubmVyKG5ld1N0YXRlKTtcclxuICAgIH1cclxuICBcclxuICAgIFxyXG4gIFxyXG4gICAgYWxlcnRXaW5uZXIgPSAobmV3U3RhdGUpID0+IHtcclxuICAgICAgaWYgKG5ld1N0YXRlLnBpY2tlZENoYXJzLmxlbmd0aCA9PT0gMTIpIHtcclxuICAgICAgICBuZXdTdGF0ZS5hbGVydE1lc3NhZ2UgPSBhbGVydChcIkNPTkdSQURVTEFUSU9OUyEgWU9VIFdPTiFcIik7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZChmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLnN0YXRlID0gbmV3U3RhdGUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPExheW91dCB7Li4udGhpcy5wcm9wc30+XHJcbiAgICAgICAgICA8R3JpZENvbXAgXHJcbiAgICAgICAgICAgIGNvbnRhaW5lciBcclxuICAgICAgICAgICAgZGlyZWN0aW9uPVwiY29sdW1uXCIgXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogXCIwIGF1dG9cIiwgbWF4V2lkdGg6IDk0NSwgdGV4dEFsaWduOidjZW50ZXInIH19PlxyXG4gICAgICAgICAgPEdyaWRDb21wIGl0ZW0gbGc9ezEyfT5cclxuICAgICAgICAgICAgICA8UGFwZXJDb21wPlxyXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuYWxlcnRNZXNzYWdlID09PSBcIkdPT0QgQ0hPSUNFIVwiID8gKFxyXG4gICAgICAgICAgICAgICAgICA8QWxlcnQgbWVzc2FnZT17dGhpcy5zdGF0ZS5hbGVydE1lc3NhZ2V9IHN0eWxlPXt7IGNvbG9yOiBcImdyZWVuXCIsIGZvbnRXZWlnaHQ6IFwiYm9sZGVyXCIgfX0gLz5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPEFsZXJ0IG1lc3NhZ2U9e3RoaXMuc3RhdGUuYWxlcnRNZXNzYWdlfSBzdHlsZT17eyBjb2xvcjogXCJibHVlXCIsIGZvbnRXZWlnaHQ6IFwiYm9sZGVyXCIgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L1BhcGVyQ29tcD5cclxuICAgICAgICAgICAgPC9HcmlkQ29tcD5cclxuICBcclxuICAgICAgICAgICAgPEdyaWRDb21wIGNvbnRhaW5lciBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgIDxHcmlkQ29tcCBcclxuICAgICAgICAgICAgICAgIGl0ZW0gbGc9ezZ9IG1kPXs2fSBcclxuICAgICAgICAgICAgICAgIHNtPXsxMn0geHM9ezEyfSBcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiBcIjEwMHB4XCIsIG1hcmdpbkxlZnQ6IFwiMTYxLjhweFwiIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8UGFwZXJDb21wPlxyXG4gICAgICAgICAgICAgICAgICA8U2NvcmUgdHlwZT1cIkN1cnJlbnQgU2NvcmVcIiBzY29yZT17dGhpcy5zdGF0ZS5waWNrZWRDaGFycy5sZW5ndGh9IC8+XHJcbiAgICAgICAgICAgICAgICA8L1BhcGVyQ29tcD5cclxuICAgICAgICAgICAgICA8L0dyaWRDb21wPlxyXG4gICAgICAgICAgICA8L0dyaWRDb21wPlxyXG4gICAgICAgICAgPC9HcmlkQ29tcD5cclxuICBcclxuICAgICAgICAgIDxHcmlkQ29tcCBjb250YWluZXIgc3BhY2luZz17Nn0ganVzdGlmeT1cImNlbnRlclwiIHN0eWxlPXt7IG1heFdpZHRoOiA5NDUsIG1hcmdpbjogXCIwIGF1dG9cIiB9fT5cclxuICAgICAgICAgICAge3RoaXMuc3RhdGUuY2hhcmFjdGVycy5tYXAoY2hhciA9PiAoXHJcbiAgICAgICAgICAgICAgPEdyaWRDb21wIGl0ZW0gbGc9ezN9IG1kPXszfSBzbT17NH0geHM9ezZ9PlxyXG4gICAgICAgICAgICAgIDxDaGFyQ2FyZFxyXG4gICAgICAgICAgICAgICAgaWQ9e2NoYXIuaWR9XHJcbiAgICAgICAgICAgICAgICBuYW1lPXtjaGFyLm5hbWV9XHJcbiAgICAgICAgICAgICAgICBpbWFnZT17Y2hhci5pbWFnZX1cclxuICAgICAgICAgICAgICAgIGtleT17Y2hhci5pZH1cclxuICAgICAgICAgICAgICAgIGhhbmRsZVBpY2tlZD17dGhpcy5oYW5kbGVQaWNrZWR9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0dyaWRDb21wPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvR3JpZENvbXA+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgfVxyXG4gIGV4cG9ydCBkZWZhdWx0IGluZGV4O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==