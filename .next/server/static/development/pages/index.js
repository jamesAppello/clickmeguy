module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Characters.json":
/*!*************************!*\
  !*** ./Characters.json ***!
  \*************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":1,\"name\":\"Stewie\",\"image\":\"https://media3.giphy.com/media/BT0Sz6qPIcdq0/giphy.gif?cid=01592e1e6220cadd380e7525049b512868a8ee99c4b7734d&rid=giphy.gif\"},{\"id\":2,\"name\":\"Brian\",\"image\":\"https://media0.giphy.com/media/HG05lYgPrD1Re/giphy.gif?cid=01592e1e6220cadd380e7525049b512868a8ee99c4b7734d&rid=giphy.gif\"},{\"id\":3,\"name\":\"Peter\",\"image\":\"https://media3.giphy.com/media/FeFVaCaun5Yt2/giphy.gif?cid=01592e1e6301b6a40ee7320d4c6b7fe3b49b421a1ab4b58a&rid=giphy.gif\"},{\"id\":4,\"name\":\"Lois\",\"image\":\"https://media1.giphy.com/media/3o6ZtpRoYe9wbyfcBi/giphy.gif?cid=01592e1e6220cadd380e7525049b512868a8ee99c4b7734d&rid=giphy.gif\"},{\"id\":5,\"name\":\"Meg\",\"image\":\"https://media0.giphy.com/media/l2SpTPSxDsMJVXxi8/giphy.gif?cid=01592e1e6301b6a40ee7320d4c6b7fe3b49b421a1ab4b58a&rid=giphy.gif\"},{\"id\":6,\"name\":\"Chris\",\"image\":\"https://media2.giphy.com/media/QH3zfREoX0luU/giphy.gif?cid=01592e1e6220cadd380e7525049b512868a8ee99c4b7734d&rid=giphy.gif\"},{\"id\":7,\"name\":\"Quagmire\",\"image\":\"https://media0.giphy.com/media/NqGFCRe8A6XFm/giphy.gif?cid=01592e1e6301b6a40ee7320d4c6b7fe3b49b421a1ab4b58a&rid=giphy.gif\"},{\"id\":8,\"name\":\"Joe\",\"image\":\"https://media2.giphy.com/media/l0IsGRJ5DZCEnCmyI/giphy.gif?cid=01592e1e6301b6a40ee7320d4c6b7fe3b49b421a1ab4b58a&rid=giphy.gif\"},{\"id\":9,\"name\":\"Cleveland\",\"image\":\"https://media2.giphy.com/media/YKq54CCqHpeeY/giphy.gif?cid=01592e1e6301b6a40ee7320d4c6b7fe3b49b421a1ab4b58a&rid=giphy.gif\"},{\"id\":10,\"name\":\"Joyce\",\"image\":\"https://media0.giphy.com/media/l0HlL6eH6eEew5FpS/giphy.gif?cid=01592e1e6220cadd380e7525049b512868a8ee99c4b7734d&rid=giphy.gif\"},{\"id\":11,\"name\":\"Bonnie\",\"image\":\"https://media0.giphy.com/media/l0HlPwMAzh13pcZ20/giphy.gif?cid=01592e1e6301b6a40ee7320d4c6b7fe3b49b421a1ab4b58a&rid=giphy.gif\"},{\"id\":12,\"name\":\"Tom Tucker\",\"image\":\"https://media3.giphy.com/media/kr0OMSLiyKUF2/giphy.gif?cid=01592e1e6220cadd380e7525049b512868a8ee99c4b7734d&rid=giphy.gif\"}]");

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
    lineNumber: 20,
    columnNumber: 9
  }
}), __jsx("div", {
  className: "container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
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
    style: {
      backgroundColor: 'blue'
    },
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
      fontWeight: 'bolder'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 21
    }
  }, "Welcome to ClickMe'Guy!"))));
};

/* harmony default export */ __webpack_exports__["default"] = (NavBar); // const NavBar = () => (
//     <nav className="navbar navbar-expand navbar-dark bg-dark mb-4">
//         <div className="container">
//             <a className="navbar-brand" href="#">Click-Me-Guy</a>
//             <div className="collapse navbar-collapse">
//                 <ul className="navbar-nav m1-auto">
//                     <li className="nav-item">
//                         <Link href='/'>
//                             <a className="nav-link">HOME</a>
//                         </Link>
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     </nav>
// )
// export default NavBar;

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
      lineNumber: 15,
      columnNumber: 13
    }
  }, "Current Score: ", props.score), __jsx("h2", {
    style: {
      color: 'white'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
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
        this.setState(this.state = newState); // console.log(newState);
      } else {
        newState.pickedChars.push(name);
        newState.alertMessage = `GOOD CHOICE!!!`; // * \/\/~ THIS CHANGES THE TOP SCORE ~\/\/ *
        // ***** put and if-statement for each run thru if the choice is wrong then the state is held to the top score!
        // newState.topScore++;
        // *INSERT* cb to a function to control the topscore

        this.setState(this.state = newState); // console.log(newState);
      } //cb(newState, this.alertWinner);


      this.alertWinner(newState);
    });

    _defineProperty(this, "alertWinner", newState => {
      if (newState.pickedChars.length === 12) {
        newState.alertMessage = alert("CONGRADULATIONS! YOU WON!");
        window.location.reload(false); //newState.pickedChars = [];

        this.setState(this.state = newState);
      } else {}
    });
  }

  render() {
    // console.log(this.state.charGifs[0])
    const GIFDATA = this.state.charGifs; // console.log(GIFDATA)

    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 9
      }
    }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, this.props, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 13
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
        lineNumber: 108,
        columnNumber: 11
      }
    }, __jsx(_components_GridComp___WEBPACK_IMPORTED_MODULE_4__["default"], {
      item: true,
      lg: 12,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 11
      }
    }, __jsx(_components_PaperComp___WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
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
        lineNumber: 113,
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
        lineNumber: 115,
        columnNumber: 21
      }
    }))), __jsx(_components_GridComp___WEBPACK_IMPORTED_MODULE_4__["default"], {
      container: true,
      justify: "space-between",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
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
        lineNumber: 121,
        columnNumber: 15
      }
    }, __jsx(_components_PaperComp___WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 17
      }
    }, __jsx(_components_Score___WEBPACK_IMPORTED_MODULE_7__["default"], {
      type: "Current Score",
      score: this.state.pickedChars.length,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
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
        lineNumber: 133,
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
        lineNumber: 135,
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
        lineNumber: 136,
        columnNumber: 15
      }
    }))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ollep\Documents\clickmeguy\pages\index.js */"./pages/index.js");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BbGVydC9BbGVydC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FsZXJ0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2hhckNhcmQvQ2hhckNhcmQuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2hhckNhcmQvQ2hhckNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DaGFyQ2FyZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0dyaWRDb21wL0dyaWRDb21wLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvR3JpZENvbXAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF5b3V0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTmF2QmFyL05hdkJhci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdkJhci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1BhcGVyQ29tcC9QYXBlckNvbXAuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9QYXBlckNvbXAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TY29yZS9TY29yZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TY29yZS9TY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Njb3JlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJBbGVydCIsInByb3BzIiwic3R5bGUiLCJtZXNzYWdlIiwiQ2hhckNhcmQiLCJpZCIsIm5hbWUiLCJpbWFnZSIsImhhbmRsZVBpY2tlZCIsIkdyaWRDb21wIiwiY2hpbGRyZW4iLCJMYXlvdXQiLCJOYXZCYXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImZvbnRXZWlnaHQiLCJQYXBlckNvbXAiLCJTY29yZSIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJzY29yZSIsImluZGV4IiwiUmVhY3QiLCJDb21wb25lbnQiLCJjaGFyYWN0ZXJzIiwiQ2hhcmFjdGVycyIsInBpY2tlZENoYXJzIiwidG9wU2NvcmUiLCJhbGVydE1lc3NhZ2UiLCJlIiwidGFyZ2V0IiwiYXR0cmlidXRlcyIsImdldE5hbWVkSXRlbSIsInZhbHVlIiwic2h1ZmZsZUNoYXJhY3RlcnMiLCJjaGVja0d1ZXNzIiwidXBkYXRlVG9wU2NvcmUiLCJjdXJyZW50U3RhdGUiLCJzZXRTdGF0ZSIsInN0YXRlIiwic2h1ZmZsZUFycmF5IiwiYXJyIiwiaiIsIngiLCJpIiwibGVuZ3RoIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiY2IiLCJuZXdTdGF0ZSIsImluY2x1ZGVzIiwicHVzaCIsImFsZXJ0V2lubmVyIiwiYWxlcnQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsInJlbmRlciIsIkdJRkRBVEEiLCJjaGFyR2lmcyIsIm1hcmdpbiIsIm1heFdpZHRoIiwidGV4dEFsaWduIiwicGFkZGluZ0xlZnQiLCJtYXJnaW5MZWZ0IiwibWFwIiwiY2hhciJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FB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QUNHLEtBQUt0QixLQUFMLENBQVdmLFVBQVgsQ0FBc0IwQyxHQUF0QixDQUEwQkMsSUFBSSxJQUM3QixNQUFDLDZEQUFEO0FBQVUsVUFBSSxNQUFkO0FBQWUsUUFBRSxFQUFFLENBQW5CO0FBQXNCLFFBQUUsRUFBRSxDQUExQjtBQUE2QixRQUFFLEVBQUUsQ0FBakM7QUFBb0MsUUFBRSxFQUFFLENBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDQSxNQUFDLDREQUFEO0FBQ0UsUUFBRSxFQUFFQSxJQUFJLENBQUM5RCxFQURYO0FBRUUsVUFBSSxFQUFFOEQsSUFBSSxDQUFDN0QsSUFGYjtBQUdFLFdBQUssRUFBRTZELElBQUksQ0FBQzVELEtBSGQ7QUFJRSxTQUFHLEVBQUU0RCxJQUFJLENBQUM5RCxFQUpaO0FBS0Usa0JBQVksRUFBRSxLQUFLRyxZQUxyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREEsQ0FERCxDQURILENBM0JFLENBREosQ0FERjtBQStDRDs7QUEzSStCOztBQWdKbkJhLG9FQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0pGLDhDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcbiIsIlxyXG5cclxuY29uc3QgQWxlcnQgPSAocHJvcHMpID0+IHtcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlZmF1bHRcIiBzdHlsZT17cHJvcHMuc3R5bGV9PlxyXG4gICAgICAgICAgICB7cHJvcHMubWVzc2FnZSA/IChcclxuICAgICAgICAgICAgICAgIDxoMz57cHJvcHMubWVzc2FnZX08L2gzPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0nZGVmYXVsdC1tc2cgYmxhY2snPkNsaWNrIGEgcGljIHRvIHN0YXJ0ITwvaDM+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQWxlcnQiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9BbGVydCciLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjYXJkXCI6IFwiXzFuLVJGRl8wbVJVdDBxUUx4emRwODBcIlxufTsiLCJpbXBvcnQgJy4vQ2hhckNhcmQuY3NzJ1xyXG5cclxuY29uc3QgQ2hhckNhcmQgPSAoeyBpZCwgbmFtZSwgaW1hZ2UsIGhhbmRsZVBpY2tlZCB9KSA9PiB7XHJcbiAgLy8gY29uc29sZS5sb2coaGFuZGxlUGlja2VkKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGltZyBcclxuICAgICAgICAgICAgaWQ9e2lkfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9J2NhcmQnXHJcbiAgICAgICAgICAgIGtleT17aWR9XHJcbiAgICAgICAgICAgIG5hbWU9e25hbWV9XHJcbiAgICAgICAgICAgIHNyYz17aW1hZ2V9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVBpY2tlZH1cclxuICAgICAgICAgICAgd2lkdGg9ezIwMH1cclxuICAgICAgICAgICAgaGVpZ2h0PXsyMDB9XHJcbiAgICAgICAgICAvPiAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQ2hhckNhcmRcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vQ2hhckNhcmQnIiwiaW1wb3J0IHsgR3JpZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5cclxuY29uc3QgR3JpZENvbXAgPShwcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxHcmlkIHsuLi5wcm9wc30+XHJcbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgR3JpZENvbXAiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9HcmlkQ29tcCciLCJpbXBvcnQgTmF2QmFyIGZyb20gJy4uL05hdkJhcic7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcblxyXG5cclxuY29uc3QgTGF5b3V0ID0gKHByb3BzKSA9PiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICA8bWV0YSBjaGFyU2V0PSdVVEYtOCcvPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XHJcbiAgICAgICAgICAgIDx0aXRsZT5DbGlja01lR3V5PC90aXRsZT5cclxuICAgICAgICAgICAgPGxpbmsgXHJcbiAgICAgICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCIgXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzozMDAsNDAwLDUwMCw3MDAmZGlzcGxheT1zd2FwXCIgLz5cclxuXHJcbiAgICAgICAgICAgIDxsaW5rIFxyXG4gICAgICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiIFxyXG4gICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vaWNvbj9mYW1pbHk9TWF0ZXJpYWwrSWNvbnNcIiAvPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICB7LyogPEJPRFk+ICovfVxyXG4gICAgICAgIDxOYXZCYXIgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgey8qIDwvQk9EWT4gKi99XHJcblxyXG4gICAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9MYXlvdXQnIiwiLy8gaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgXHJcbiAgICBBcHBCYXIsIFxyXG4gICAgVG9vbGJhciwgXHJcbiAgICBUeXBvZ3JhcGh5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbiAgICBcclxuXHJcbmNvbnN0IE5hdkJhciA9IChwcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxBcHBCYXIgcG9zaXRpb249J3N0YXRpYycgey4uLnByb3BzfT5cclxuICAgICAgICAgICAgICAgIDxUb29sYmFyIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOidibHVlJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PSdoMicgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPSdpbmhlcml0JyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ249J2NlbnRlcicgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Y29sb3I6J3llbGxvdycsIGZvbnRXZWlnaHQ6J2JvbGRlcid9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICBXZWxjb21lIHRvIENsaWNrTWUnR3V5IVxyXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICAgICAgPC9BcHBCYXI+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn0gXHJcbmV4cG9ydCBkZWZhdWx0IE5hdkJhclxyXG5cclxuLy8gY29uc3QgTmF2QmFyID0gKCkgPT4gKFxyXG4vLyAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWV4cGFuZCBuYXZiYXItZGFyayBiZy1kYXJrIG1iLTRcIj5cclxuLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4vLyAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIiBocmVmPVwiI1wiPkNsaWNrLU1lLUd1eTwvYT5cclxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIj5cclxuLy8gICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2IG0xLWF1dG9cIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nLyc+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPkhPTUU8L2E+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4vLyAgICAgICAgICAgICAgICAgPC91bD5cclxuLy8gICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgPC9kaXY+XHJcbi8vICAgICA8L25hdj5cclxuLy8gKVxyXG4vLyBleHBvcnQgZGVmYXVsdCBOYXZCYXI7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL05hdkJhciciLCJpbXBvcnQgeyBQYXBlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuXHJcbmNvbnN0IFBhcGVyQ29tcCA9IChwcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxQYXBlcj5cclxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIDwvUGFwZXI+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUGFwZXJDb21wIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vUGFwZXJDb21wJyIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInNjb3JlXCI6IFwiXzN4VGIwdzRSdDV6UDRwTF9fS1ZfaHBcIlxufTsiLCJpbXBvcnQgJy4vU2NvcmUuY3NzJ1xyXG5pbXBvcnQgeyBDYXJkLCBCYWRnZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5cclxuXHJcbmNvbnN0IFNjb3JlID0gKHByb3BzKSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJzY29yZVwiIHN0eWxlPXt7IHBhZGRpbmc6ICc2LjE4JScsIGJhY2tncm91bmRDb2xvcjogJyMzN0FFRjUnLCBib3JkZXJSYWRpdXM6IDIwIH19PlxyXG4gICAgICAgICAgICB7LyogPEJhZGdlIGJhZGdlQ29udGVudD17cHJvcHMuc2NvcmV9IGNvbG9yPSdwcmltYXJ5Jz5cclxuICAgICAgICAgICAgICAgIDxDYXJkIHN0eWxlPXt7IGJvcmRlclJhZGl1czogMTIsIHBhZGRpbmc6IDEwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoND5DdXJyZW50U2NvcmU8L2g0PlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkPlxyXG5cclxuICAgICAgICAgICAgPC9CYWRnZT4gKi99XHJcbiAgICAgICAgICAgIDxoMiBzdHlsZT17e2NvbG9yOid5ZWxsb3cnfX0+Q3VycmVudCBTY29yZToge3Byb3BzLnNjb3JlfTwvaDI+XHJcbiAgICAgICAgICAgIHsvKiA8YnIgLz4gKi99XHJcbiAgICAgICAgICAgIHsvKiA8YnIgLz4gKi99XHJcbiAgICAgICAgICAgIDxoMiBzdHlsZT17e2NvbG9yOid3aGl0ZSd9fT5TY29yZSB0byBXSU46IDEyPC9oMj5cclxuICAgICAgICAgICAgey8qIDxCYWRnZSBiYWRnZUNvbnRlbnQ9ezEyfSBjb2xvcj0nc2Vjb25kYXJ5Jz5cclxuICAgICAgICAgICAgICAgIDxDYXJkIHN0eWxlPXt7IGJvcmRlclJhZGl1czogMTIsIHBhZGRpbmc6IDEwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoND5QT0lOVFMgVE8gV0lOPC9oND5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgPC9CYWRnZT4gKi99XHJcbiAgICAgICAgPC9DYXJkPlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFNjb3JlIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vU2NvcmUnIiwiLy8gaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IENoYXJhY3RlcnMgZnJvbSAnLi4vQ2hhcmFjdGVycy5qc29uJ1xyXG5cclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcclxuaW1wb3J0IENoYXJDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvQ2hhckNhcmQnXHJcbmltcG9ydCBHcmlkQ29tcCBmcm9tICcuLi9jb21wb25lbnRzL0dyaWRDb21wLydcclxuaW1wb3J0IFBhcGVyQ29tcCBmcm9tICcuLi9jb21wb25lbnRzL1BhcGVyQ29tcC8nXHJcbmltcG9ydCBBbGVydCBmcm9tICcuLi9jb21wb25lbnRzL0FsZXJ0LydcclxuaW1wb3J0IFNjb3JlIGZyb20gJy4uL2NvbXBvbmVudHMvU2NvcmUvJ1xyXG5cclxuXHJcbmNsYXNzIGluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICBjaGFyYWN0ZXJzOiBDaGFyYWN0ZXJzLFxyXG4gICAgIHBpY2tlZENoYXJzOiBbXSxcclxuICAgICB0b3BTY29yZTogMCxcclxuICAgICBhbGVydE1lc3NhZ2U6IFwiXCIgXHJcbiAgICB9XHJcbiAgICBcclxuICBcclxuICAgIGhhbmRsZVBpY2tlZCA9IChlKSA9PiB7XHJcbiAgICAgIC8vIHN0b3JpbmcgbmFtZSBhdHRyaWJ1dGUgYW5kIGl0cyB2YWx1ZSB0byBpdHMgY2hhckNhcmQgaW4gYSBjb25zdCB2YXJpYWJsZVxyXG4gICAgICBjb25zdCBuYW1lID0gZS50YXJnZXQuYXR0cmlidXRlcy5nZXROYW1lZEl0ZW0oXCJuYW1lXCIpLnZhbHVlO1xyXG4gICAgICAvLyBjYiA+PiBzaHVmZmxlQ2hhcmFjdGVyICdmdW5jdGlvbidcclxuICAgICAgdGhpcy5zaHVmZmxlQ2hhcmFjdGVycygpO1xyXG4gICAgICAvLyBjYiA+PiBjaGVjayBndWVzcyB0YWtlcyAnbmFtZSB2YXJpYWJsZScgaG9sZGluZyB0aGUgZGF0YSB2YWx1ZSBmb3IgdGhlIGdpdmVuIGNhcmQgaGFuZGxpbmcgLi4uXHJcbiAgICAgIC8vIC4uLiA+Pj4gc2Vjb25kIHBhcmFtZXRlciBmb3IgY2hlY2tHdWVzcyBpcyBhIG1ldGhvZCB0aGF0IGlzIHVzZWQgYXMgYSAuLi5cclxuICAgICAgLy8gLi4uID4+PiBjYWxsYmFjayBpbiB0aGUgY2hlY2tndWVzcyBmdW5jdGlvbiBkZW5vdGVkID4+ICdjYidcclxuICAgICAgdGhpcy5jaGVja0d1ZXNzKG5hbWUsIHRoaXMudXBkYXRlVG9wU2NvcmUpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgICB1cGRhdGVUb3BTY29yZSA9IChjdXJyZW50U3RhdGUpID0+IHtcclxuICAgICAgICBzd2l0Y2ggKGN1cnJlbnRTdGF0ZSkge1xyXG4gICAgICAgICAgY2FzZSB0aGlzLmNoZWNrR3Vlc3MgPSBmYWxzZTpcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLnN0YXRlLnRvcFNjb3JlICsgMSlcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUudG9wU2NvcmUgPj0gMTIpIHtcclxuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHRoaXMuc3RhdGUudG9wU2NvcmUgPSAwKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBjYXNlIHRoaXMuY2hlY2tHdWVzcyA9IHRydWU6IFxyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLnN0YXRlLnRvcFNjb3JlID0gMClcclxuICAgICAgICAgIGJyZWFrOyAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgc2h1ZmZsZUNoYXJhY3RlcnMgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5zdGF0ZS5jaGFyYWN0ZXJzID0gdGhpcy5zaHVmZmxlQXJyYXkodGhpcy5zdGF0ZS5jaGFyYWN0ZXJzKSlcclxuICAgIH1cclxuICBcclxuICAgIHNodWZmbGVBcnJheSA9IChhcnIpID0+IHtcclxuICAgICAgdmFyIGosIHgsIGk7XHJcbiAgICAgIGZvciAoaSA9IGFyci5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XHJcbiAgICAgICAgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChpICsxKSk7XHJcbiAgICAgICAgeCA9IGFycltpXTtcclxuICAgICAgICBhcnJbaV0gPSBhcnJbal07XHJcbiAgICAgICAgYXJyW2pdID0geDtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gYXJyO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgY2hlY2tHdWVzcyA9IChuYW1lLGNiKSA9PiB7XHJcbiAgICAgIGNvbnN0IG5ld1N0YXRlID0geyAuLi50aGlzLnN0YXRlIH07XHJcbiAgXHJcbiAgICAgIGlmIChuZXdTdGF0ZS5waWNrZWRDaGFycy5pbmNsdWRlcyhuYW1lKSkge1xyXG4gICAgICAgIG5ld1N0YXRlLmFsZXJ0TWVzc2FnZSA9IGBZT1UgQUxSRUFEWSBQSUNLRUQgVEhBVCBHSUYhISEgVFJZIEFHQUlOISEhYDtcclxuICAgICAgICBuZXdTdGF0ZS5waWNrZWRDaGFycyA9IFtdO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5zdGF0ZSA9IG5ld1N0YXRlKVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG5ld1N0YXRlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBuZXdTdGF0ZS5waWNrZWRDaGFycy5wdXNoKG5hbWUpO1xyXG4gICAgICAgIG5ld1N0YXRlLmFsZXJ0TWVzc2FnZSA9IGBHT09EIENIT0lDRSEhIWA7XHJcbiAgICAgICAgLy8gKiBcXC9cXC9+IFRISVMgQ0hBTkdFUyBUSEUgVE9QIFNDT1JFIH5cXC9cXC8gKlxyXG4gICAgICAgIC8vICoqKioqIHB1dCBhbmQgaWYtc3RhdGVtZW50IGZvciBlYWNoIHJ1biB0aHJ1IGlmIHRoZSBjaG9pY2UgaXMgd3JvbmcgdGhlbiB0aGUgc3RhdGUgaXMgaGVsZCB0byB0aGUgdG9wIHNjb3JlIVxyXG4gICAgICAgLy8gbmV3U3RhdGUudG9wU2NvcmUrKztcclxuICAgICAgIC8vICpJTlNFUlQqIGNiIHRvIGEgZnVuY3Rpb24gdG8gY29udHJvbCB0aGUgdG9wc2NvcmVcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHRoaXMuc3RhdGUgPW5ld1N0YXRlKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhuZXdTdGF0ZSk7XHJcbiAgICAgIH0gXHJcbiAgICAgICAgIFxyXG4gICAgICAvL2NiKG5ld1N0YXRlLCB0aGlzLmFsZXJ0V2lubmVyKTtcclxuICAgICAgdGhpcy5hbGVydFdpbm5lcihuZXdTdGF0ZSlcclxuICAgIH1cclxuICBcclxuICAgIFxyXG4gIFxyXG4gICAgYWxlcnRXaW5uZXIgPSAobmV3U3RhdGUpID0+IHtcclxuICAgICAgaWYgKG5ld1N0YXRlLnBpY2tlZENoYXJzLmxlbmd0aCA9PT0gMTIpIHtcclxuICAgICAgICBuZXdTdGF0ZS5hbGVydE1lc3NhZ2UgPSBhbGVydChcIkNPTkdSQURVTEFUSU9OUyEgWU9VIFdPTiFcIik7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZChmYWxzZSk7XHJcbiAgICAgICAgLy9uZXdTdGF0ZS5waWNrZWRDaGFycyA9IFtdO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5zdGF0ZSA9IG5ld1N0YXRlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmNoYXJHaWZzWzBdKVxyXG4gICAgICBjb25zdCBHSUZEQVRBID0gdGhpcy5zdGF0ZS5jaGFyR2lmc1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhHSUZEQVRBKVxyXG4gICAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPExheW91dCB7Li4udGhpcy5wcm9wc30+XHJcbiAgICAgICAgICB7LyogPE5hdkJhciBzdHlsZT17eyBiYWNrZ3JvdW5kOiBcIiMzMTMxMzNcIiwgbWFyZ2luQm90dG9tOiBcIjVweFwiIH19IC8+ICovfVxyXG4gICAgICAgICAgPEdyaWRDb21wIGNvbnRhaW5lciBkaXJlY3Rpb249XCJjb2x1bW5cIiBzdHlsZT17eyBtYXJnaW46IFwiMCBhdXRvXCIsIG1heFdpZHRoOiA5NDUsIHRleHRBbGlnbjonY2VudGVyJyB9fT5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPEdyaWRDb21wIGl0ZW0gbGc9ezEyfT5cclxuICAgICAgICAgICAgICA8UGFwZXJDb21wPlxyXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuYWxlcnRNZXNzYWdlID09PSBcIkdPT0QgQ0hPSUNFIVwiID8gKFxyXG4gICAgICAgICAgICAgICAgICA8QWxlcnQgbWVzc2FnZT17dGhpcy5zdGF0ZS5hbGVydE1lc3NhZ2V9IHN0eWxlPXt7IGNvbG9yOiBcImdyZWVuXCIsIGZvbnRXZWlnaHQ6IFwiYm9sZGVyXCIgfX0gLz5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPEFsZXJ0IG1lc3NhZ2U9e3RoaXMuc3RhdGUuYWxlcnRNZXNzYWdlfSBzdHlsZT17eyBjb2xvcjogXCJibHVlXCIsIGZvbnRXZWlnaHQ6IFwiYm9sZGVyXCIgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L1BhcGVyQ29tcD5cclxuICAgICAgICAgICAgPC9HcmlkQ29tcD5cclxuICBcclxuICAgICAgICAgICAgPEdyaWRDb21wIGNvbnRhaW5lciBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgIDxHcmlkQ29tcCBcclxuICAgICAgICAgICAgICAgIGl0ZW0gbGc9ezZ9IG1kPXs2fSBcclxuICAgICAgICAgICAgICAgIHNtPXsxMn0geHM9ezEyfSBcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiBcIjEwMHB4XCIsIG1hcmdpbkxlZnQ6IFwiMTYxLjhweFwiIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8UGFwZXJDb21wPlxyXG4gICAgICAgICAgICAgICAgICA8U2NvcmUgdHlwZT1cIkN1cnJlbnQgU2NvcmVcIiBzY29yZT17dGhpcy5zdGF0ZS5waWNrZWRDaGFycy5sZW5ndGh9IC8+XHJcbiAgICAgICAgICAgICAgICA8L1BhcGVyQ29tcD5cclxuICAgICAgICAgICAgICA8L0dyaWRDb21wPlxyXG4gICAgICAgICAgICA8L0dyaWRDb21wPlxyXG4gICAgICAgICAgPC9HcmlkQ29tcD5cclxuICBcclxuICAgICAgICAgIDxHcmlkQ29tcCBjb250YWluZXIgc3BhY2luZz17Nn0ganVzdGlmeT1cImNlbnRlclwiIHN0eWxlPXt7IG1heFdpZHRoOiA5NDUsIG1hcmdpbjogXCIwIGF1dG9cIiB9fT5cclxuICAgICAgICAgICAge3RoaXMuc3RhdGUuY2hhcmFjdGVycy5tYXAoY2hhciA9PiAoXHJcbiAgICAgICAgICAgICAgPEdyaWRDb21wIGl0ZW0gbGc9ezN9IG1kPXszfSBzbT17NH0geHM9ezZ9PlxyXG4gICAgICAgICAgICAgIDxDaGFyQ2FyZFxyXG4gICAgICAgICAgICAgICAgaWQ9e2NoYXIuaWR9XHJcbiAgICAgICAgICAgICAgICBuYW1lPXtjaGFyLm5hbWV9XHJcbiAgICAgICAgICAgICAgICBpbWFnZT17Y2hhci5pbWFnZX1cclxuICAgICAgICAgICAgICAgIGtleT17Y2hhci5pZH1cclxuICAgICAgICAgICAgICAgIGhhbmRsZVBpY2tlZD17dGhpcy5oYW5kbGVQaWNrZWR9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0dyaWRDb21wPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvR3JpZENvbXA+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgfVxyXG4gIGV4cG9ydCBkZWZhdWx0IGluZGV4O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==