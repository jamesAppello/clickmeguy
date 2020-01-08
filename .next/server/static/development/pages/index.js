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

module.exports = JSON.parse("[{\"id\":1,\"name\":\"Stewie\",\"image\":\"http://img1.wikia.nocookie.net/__cb20140403200841/creepypasta/images/f/f8/Stewie_griffin_family_guy.jpg\"},{\"id\":2,\"name\":\"Brian\",\"image\":\"https://cdn.quotesgram.com/small/60/22/339223338-How-To-Draw-Brian-Griffin-681x681.jpg\"},{\"id\":3,\"name\":\"Peter\",\"image\":\"http://img2.wikia.nocookie.net/__cb20140910031820/tdrpw/images/f/ff/PeterGriffin.jpg\"},{\"id\":4,\"name\":\"Lois\",\"image\":\"https://i.imgflip.com/1g76ai.jpg\"},{\"id\":5,\"name\":\"Meg\",\"image\":\"https://images3.wikia.nocookie.net/degrassi/images/2/23/Meg-griffin-2.jpg\"},{\"id\":6,\"name\":\"Chris\",\"image\":\"http://img4.wikia.nocookie.net/__cb20110509000016/ideas/images/f/f7/Family_guy_chris_griffin.jpg\"},{\"id\":7,\"name\":\"Quagmire\",\"image\":\"http://img1.wikia.nocookie.net/__cb20100104153000/familyguy/images/8/83/Quagmire_111.jpg\"},{\"id\":8,\"name\":\"Joe\",\"image\":\"http://vignette4.wikia.nocookie.net/powerlisting/images/2/21/Joe_swanson_of_family_guy_by_sketchheroes-d3128a6.jpg/revision/latest?cb=20131222032932\"},{\"id\":9,\"name\":\"Cleveland\",\"image\":\"http://vectorish.com/wp-content/plugins/vectorish-function/file/preview/cleveland-brown-from-family-guy.jpg\"},{\"id\":10,\"name\":\"Joyce\",\"image\":\"http://static1.wikia.nocookie.net/__cb20110720013345/familyguy/images/b/b6/Joyce_Kinney_-_1.jpg\"},{\"id\":11,\"name\":\"Bonnie\",\"image\":\"https://vignette.wikia.nocookie.net/degrassi/images/b/b1/FAMILY_GUY_BONNIE.jpg/revision/latest?cb=20130218175024\"},{\"id\":12,\"name\":\"Tom Tucker\",\"image\":\"http://oyster.ignimgs.com/mediawiki/wiki-api.ign.com/family-guy/0/01/Tom-tucker_pictureboxart_160w.jpg\"}]");

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
  }, props.message ? __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, props.message) : __jsx("p", {
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
var _jsxFileName = "C:\\Users\\ollep\\Documents\\clickmeguy\\components\\CharCard\\CharCard.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

// import './CharCard.css'
const CharCard = ({
  id,
  name,
  image,
  handlePicked
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("img", {
    className: "card",
    key: id,
    name: name,
    src: image,
    onClick: handlePicked,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
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
    lineNumber: 6
  },
  __self: undefined
}, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx("title", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, "ClickMeGuy"), __jsx("link", {
  rel: "stylesheet",
  href: "https://bootswatch.com/4/cerulean/bootstrap.min.css",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}), __jsx("link", {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}), __jsx("link", {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/icon?family=Material+Icons",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
})), __jsx(_NavBar__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}), __jsx("div", {
  className: "container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
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
      lineNumber: 7
    },
    __self: undefined
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Toolbar"], {
    style: {
      backgroundColor: 'blue'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h1",
    color: "inherit",
    align: "center",
    style: {
      color: 'yellow',
      fontWeight: 'bolder'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
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
var _jsxFileName = "C:\\Users\\ollep\\Documents\\clickmeguy\\components\\Score\\Score.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

// import './Score.css'
const Score = props => {
  return __jsx("div", {
    className: "score",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, props.type, ": ", props.Score, __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }), "Current score : ", props.currentScore);
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









const index = props => {
  // console.log(props)
  // CHARCTERS ARRAY
  const {
    0: character,
    1: setCharacters
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_Characters_json__WEBPACK_IMPORTED_MODULE_1__);
  console.log(character); // SCORE

  const {
    0: score,
    1: setScore
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  console.log(score); // ALERT MESSAGE

  const {
    0: alert,
    1: setAlert
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  console.log(alert); // METHODS

  const handlePicked = e => {
    const name = e.target.attributes.getNamedItem('name').value;
    console.log(name);
    shuffleCharacters();
    checkGuess(name, updateTopScore);
  };

  const updateTopScore = currentScore => {
    console.log(currentScore);
  }; // * calledback from handlePicked


  const checkGuess = (name, cb) => {
    console.log(name);
    console.log(cb);
  }; // * calledback from handlePicked


  const shuffleCharacters = () => {
    setCharacters(shuffleArray(character));
    console.log(character); // ** characters shuffle but pics dont shuffle as the data does...
  }; // * callback from shuffleCharacters


  const shuffleArray = arr => {
    let j, x, i;

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
    __self: undefined
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
    __self: undefined
  }, __jsx(_components_GridComp___WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    lg: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, __jsx(_components_PaperComp___WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, alert === "Good Choice!" ? __jsx(_components_Alert___WEBPACK_IMPORTED_MODULE_6__["default"], {
    message: alert,
    style: {
      color: 'green'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }) : __jsx(_components_Alert___WEBPACK_IMPORTED_MODULE_6__["default"], {
    message: alert,
    style: {
      color: 'blue'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }))), __jsx(_components_GridComp___WEBPACK_IMPORTED_MODULE_4__["default"], {
    container: true,
    justify: "space-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
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
    __self: undefined
  }, __jsx(_components_PaperComp___WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }, __jsx(_components_Score___WEBPACK_IMPORTED_MODULE_7__["default"], {
    type: "Score To Win",
    Score: character.length,
    currentScore: score,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
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
    __self: undefined
  }, character.map(char => __jsx(_components_CharCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: char.id,
    key: char.id,
    name: char.name,
    image: char.image,
    handlePicked: handlePicked,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: undefined
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (index);

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