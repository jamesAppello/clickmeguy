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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, props.message ? __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, props.message) : __jsx("h3", {
    className: "default-msg black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
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
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("img", {
    id: id,
    className: "card",
    key: id,
    name: name,
    src: image,
    onClick: handlePicked,
    width: 200,
    height: 200,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\ollep\\Documents\\clickmeguy\\components\\GridComp\\GridComp.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const GridComp = props => {
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
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
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, __jsx("title", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, "ClickMeGuy"), __jsx("link", {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}), __jsx("link", {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/icon?family=Material+Icons",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
})), __jsx(_NavBar__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}), __jsx("div", {
  className: "container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\ollep\\Documents\\clickmeguy\\components\\NavBar\\NavBar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
// import Link from 'next/link';


const NavBar = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["AppBar"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    position: "static"
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Toolbar"], {
    style: {
      backgroundColor: 'blue'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h2",
    color: "inherit",
    align: "center",
    style: {
      color: 'yellow',
      fontWeight: 'bolder'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
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
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
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
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Badge"], {
    badgeContent: props.score,
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    style: {
      borderRadius: 12,
      padding: 10
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, "CurrentScore"))), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Badge"], {
    badgeContent: 12,
    color: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    style: {
      borderRadius: 12,
      padding: 10
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, "POINTS TO WIN"))));
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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptors */ "core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
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

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }

// import { useState } from 'react'








class index extends react__WEBPACK_IMPORTED_MODULE_8___default.a.Component {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(this, "state", {
      //  charGifs: GifyARRAY, 
      characters: _Characters_json__WEBPACK_IMPORTED_MODULE_9__,
      pickedChars: [],
      topScore: 0,
      alertMessage: ""
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(this, "handlePicked", e => {
      // storing name attribute and its value to its charCard in a const variable
      const name = e.target.attributes.getNamedItem("name").value; // cb >> shuffleCharacter 'function'

      this.shuffleCharacters(); // cb >> check guess takes 'name variable' holding the data value for the given card handling ...
      // ... >>> second parameter for checkGuess is a method that is used as a ...
      // ... >>> callback in the checkguess function denoted >> 'cb'

      this.checkGuess(name, this.updateTopScore);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(this, "updateTopScore", currentState => {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(this, "shuffleCharacters", () => {
      this.setState(this.state.characters = this.shuffleArray(this.state.characters));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(this, "shuffleArray", arr => {
      var j, x, i;

      for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = arr[i];
        arr[i] = arr[j];
        arr[j] = x;
      }

      return arr;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(this, "checkGuess", (name, cb) => {
      const newState = _objectSpread({}, this.state);

      if (newState.pickedChars.includes(name)) {
        newState.alertMessage = `YOU ALREADY PICKED "${name.toUpperCase()}" TRY AGAIN!!!`;
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(this, "alertWinner", newState => {
      if (newState.pickedChars.length === 12) {
        newState.alertMessage = alert("CONGRADULATIONS! YOU WON!"); //newState.pickedChars = [];

        this.setState(this.state = newState);
      } else {}
    });
  }

  componentDidMount() {}

  render() {
    // console.log(this.state.charGifs[0])
    const GIFDATA = this.state.charGifs; // console.log(GIFDATA)

    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_10__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__["default"])({}, this.props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }), __jsx(_components_GridComp___WEBPACK_IMPORTED_MODULE_12__["default"], {
      container: true,
      direction: "column",
      style: {
        margin: "0 auto",
        maxWidth: 945,
        textAlign: 'center'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }, __jsx(_components_GridComp___WEBPACK_IMPORTED_MODULE_12__["default"], {
      item: true,
      lg: 12,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }, __jsx(_components_PaperComp___WEBPACK_IMPORTED_MODULE_13__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }, this.state.alertMessage === "GOOD CHOICE!" ? __jsx(_components_Alert___WEBPACK_IMPORTED_MODULE_14__["default"], {
      message: this.state.alertMessage,
      style: {
        color: "green",
        fontWeight: "bolder"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    }) : __jsx(_components_Alert___WEBPACK_IMPORTED_MODULE_14__["default"], {
      message: this.state.alertMessage,
      style: {
        color: "blue",
        fontWeight: "bolder"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }))), __jsx(_components_GridComp___WEBPACK_IMPORTED_MODULE_12__["default"], {
      container: true,
      justify: "space-between",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
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
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }, __jsx(_components_PaperComp___WEBPACK_IMPORTED_MODULE_13__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: this
    }, __jsx(_components_Score___WEBPACK_IMPORTED_MODULE_15__["default"], {
      type: "Current Score",
      score: this.state.pickedChars.length,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: this
    }))))), __jsx(_components_GridComp___WEBPACK_IMPORTED_MODULE_12__["default"], {
      container: true,
      spacing: 6,
      justify: "center",
      style: {
        maxWidth: 945,
        margin: "0 auto"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      },
      __self: this
    }, this.state.characters.map(char => __jsx(_components_GridComp___WEBPACK_IMPORTED_MODULE_12__["default"], {
      item: true,
      lg: 3,
      md: 3,
      sm: 4,
      xs: 6,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139
      },
      __self: this
    }, __jsx(_components_CharCard__WEBPACK_IMPORTED_MODULE_11__["default"], {
      id: char.id,
      name: char.name,
      image: char.image,
      key: char.id,
      handlePicked: this.handlePicked,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: this
    }))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (index); // const index = (props) => {
//     // console.log(props)
//     // CHARCTERS ARRAY
//     const [character, setCharacters] = useState(Characters)
//     // console.log(character)
//     // SCORE
//     const [score, setScore] = useState(0);
//     // console.log(score)
//     // ALERT MESSAGE
//     const [alert, setAlert] = useState('');
//     // console.log(alert)
//     // METHODS
//     const handlePicked = e => {
//         const name = e.target.attributes.getNamedItem('name').value;
//         console.log(name)
//         shuffleCharacters()
//         //checkGuess takes a name variable that will be used as a JSX prop to the CharCard component
//         // second arg acts as a ...
//         checkGuess(name, updateTopScore)
//         updateTopScore()
//     }
//     const updateTopScore = () => {
//       console.log(score)
//       setScore(score+1)
//       console.log(score)
//     }
//     // * calledback from handlePicked
//     const checkGuess = (name, cb) => {
//         const newState = [...character]
//         console.log(newState)
//         // setAlert(`you picked ${name}`)
//         if (newState.includes(name)) {
//             setAlert(`You already selected ${name.toUpperCase()}!!`)
//             newState = []
//             setCharacters(newState)
//         } else {
//             newState.push(name)
//             setAlert("good choice!")
//         }
//         // console.log(name)
//         // console.log(cb)
//         alertWinner()
//     }
//     console.log(alert)
//     const alertWinner = () => {
//         if (score === 12) {
//             setAlert('holy shit you won!!')
//         }
//     }
//     // * calledback from handlePicked
//     const shuffleCharacters = () => {
//         setCharacters(shuffleArray(character))
//         console.log('STATE')
//         console.log(character)
//         // ** characters shuffle but pics dont shuffle as the data does...
//         console.log('JSON')
//         console.log(Characters)
//     }
//     // * callback from shuffleCharacters
//     const shuffleArray = arr => {
//         let j, x, i;
//         for (i = arr.length - 1; i > 0; i--) {
//             j = Math.floor(Math.random() * (i + 1));
//             x = arr[i];
//             arr[i] = arr[j];
//             arr[j] = x;
//         }
//         return arr
//     }
//     return (
//         <>
//             <Layout>
//                 <GridComp 
//                     container 
//                     direction='column' 
//                     style={{ mrgin: "0 auto", maxWidth: 945 }}>
//                         <GridComp item lg={12}>
//                             <PaperComp>
//                                 {alert === "Good Choice!" ? (
//                                     <Alert message={alert} style={{ color: 'green' }} />
//                                 ) : (
//                                         <Alert message={alert} style={{ color: 'blue' }} />
//                                     )}
//                             </PaperComp>
//                         </GridComp>
//                     <GridComp 
//                         container 
//                         justify="space-between">
//                         <GridComp 
//                             item 
//                                 lg={6} 
//                                 md={6} 
//                                 sm={12} 
//                                 xs={12} 
//                             style={{ padingLeft: '100px', marginLeft: "101.8px" }}>
//                             <PaperComp>
//                                 <Score type="Score To Win" Score={character.length} currentScore={score} />
//                             </PaperComp>
//                         </GridComp>
//                     </GridComp>
//                 </GridComp>
//                 <GridComp container spacing={8} justify='center' style={{ maxWidth: 945, margin: '0 auto' }}>
//                     {character.map(char => (
//                         <CharCard
//                             id={char.id}
//                             key={char.id}
//                             name={char.name}
//                             image={char.image}
//                             handlePicked={handlePicked}
//                         />
//                     ))}
//                 </GridComp>
//             </Layout>
//         </>
//     );
// };
// export default index

/***/ }),

/***/ 4:
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

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptors":
/*!*************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptors" ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

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
//# sourceMappingURL=index.js.map