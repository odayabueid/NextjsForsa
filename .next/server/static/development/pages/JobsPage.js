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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./component/CardInfo.js":
/*!*******************************!*\
  !*** ./component/CardInfo.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-spinners */ "react-spinners");
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_spinners__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_responsive_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-responsive-modal */ "react-responsive-modal");
/* harmony import */ var react_responsive_modal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_responsive_modal__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\Discovery1\\Desktop\\NextjsForsa\\component\\CardInfo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





class CardInfo extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {
      user_id: null,
      isLoading: false,
      showModal: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "componentDidMount", () => {
      this.setState({
        user_id: localStorage.getItem('user_id')
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onCloseModal", () => {
      this.setState({
        showModal: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "jobApply", () => {
      this.setState({
        isLoading: true
      });
      let data = {};
      data.job_id = this.props.cardSelected.id;
      data.user_id = this.state.user_id;
      axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("https://api.for9a.com/u/apply", data).then(res => {
        this.setState({
          isLoading: false,
          showModal: true
        });
        this.props.applyed();
      }).catch(err => {
        console.log(err);
      });
    });
  }

  render() {
    return __jsx("div", {
      className: "col-xs-12 col-sm-12 col-md-12 col-lg-12",
      style: {
        padding: "0px",
        minHeight: "680px",
        backgroundColor: "#fff",
        marginTop: "15px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, __jsx("header", {
      style: {
        backgroundColor: "#eb751d",
        minHeight: "30px",
        textAlign: "right"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, __jsx("p", {
      style: {
        color: '#fff',
        padding: "4px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, "\u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644")), __jsx("div", {
      className: "col-xs-12 col-sm-12 col-md-12 col-lg-12",
      style: {
        height: "650px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, this.props.cardSelected ? __jsx("div", {
      className: "col-xs-12 col-sm-12 col-md-12 col-lg-12",
      style: {
        padding: "0px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, __jsx("div", {
      className: "col-xs-12 col-sm-12 col-md-12 col-lg-12",
      style: {
        textAlign: "center",
        marginTop: "20px",
        padding: "0px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, __jsx("img", {
      src: this.props.cardSelected.images.sm,
      style: {
        borderRadius: "20px",
        height: "200px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    })), __jsx("div", {
      className: "col-xs-12 col-sm-12 col-md-12 col-lg-12",
      style: {
        minHeight: "220px",
        color: "#339eba",
        marginTop: "30px",
        textAlign: "right",
        backgroundColor: "#f1f1f1",
        border: "1px solid #f1f1f1",
        borderRadius: "8px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, __jsx("div", {
      className: "col-xs-12 col-sm-12 col-md-12 col-lg-12",
      style: {
        padding: "0px",
        marginTop: "20px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, this.props.cardSelected.title), __jsx("div", {
      className: "col-xs-12 col-sm-12 col-md-12 col-lg-12",
      style: {
        margin: "30px 0",
        padding: "0px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, this.props.cardSelected.desc), __jsx("div", {
      className: "col-xs-12 col-sm-12 col-md-12 col-lg-12",
      style: {
        marginBottom: "20px",
        padding: "0px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, __jsx("div", {
      className: "col-xs-3 col-sm-3 col-md-3 col-lg-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, `البلد : ${this.props.cardSelected.location.title}`), __jsx("div", {
      className: "col-xs-6 col-sm-6 col-md-6 col-lg-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, `اخر موعد للتقديم : ${this.props.cardSelected.deadline}`), __jsx("div", {
      className: "col-xs-3 col-sm-3 col-md-3 col-lg-3",
      style: {
        padding: "0px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, ` رقم الوظيفة: ${this.props.cardSelected.id}`))), __jsx("div", {
      className: "col-xs-12 col-sm-12 col-md-12 col-lg-12",
      style: {
        marginTop: "70px",
        textAlign: "center"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, __jsx("button", {
      type: "button",
      class: "btn",
      style: {
        backgroundColor: "#eb751d",
        color: "#fff",
        minWidth: "100px"
      },
      onClick: this.jobApply,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, "\u0642\u062F\u0645 \u0627\u0644\u0627\u0646")), __jsx("div", {
      className: "col-xs-12 col-sm-12 col-md-12 col-lg-12",
      style: {
        marginTop: "10px",
        textAlign: "center"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, __jsx(react_spinners__WEBPACK_IMPORTED_MODULE_3__["ClipLoader"], {
      color: "#339eba",
      loading: this.state.isLoading,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }))) : __jsx("div", {
      className: "col-xs-12 col-sm-12 col-md-12 col-lg-12",
      style: {
        padding: "0px",
        textAlign: "center",
        marginTop: "20px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, __jsx("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, " \u0627\u0644\u0631\u062C\u0627\u0621 \u0627\u062E\u062A\u064A\u0627\u0631 \u0648\u0638\u064A\u0641\u0629 \u0644\u0627\u0638\u0647\u0627\u0631 \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644"), __jsx("div", {
      className: "col-xs-12 cols-m-12 col-md-12 col-lg-12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, __jsx(react_responsive_modal__WEBPACK_IMPORTED_MODULE_4___default.a, {
      open: this.state.showModal,
      onClose: this.onCloseModal,
      center: true,
      closeOnEsc: true,
      showCloseIcon: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, __jsx("div", {
      className: "col-xs-12 col-sm-12 col-md-12 col-lg-12",
      style: {
        padding: "0px",
        minHeight: "150px",
        minWidth: "600px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, __jsx("div", {
      className: "col-xs-12 col-sm-12 col-md-12 col-lg-12",
      style: {
        padding: "0px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, __jsx("p", {
      style: {
        textAlign: "center",
        paddingTop: "10%",
        fontSize: "23px",
        color: "#339eba"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, "\u062A\u0645\u062A \u0639\u0645\u0644\u064A\u0629 \u0627\u0644\u062A\u0642\u062F\u064A\u0645 \u0628\u0646\u062C\u0627\u062D \u0627\u0633\u0631\u0629 \u0641\u0631\u0635\u0629 \u062A\u062A\u0645\u0646\u0649 \u0644\u0643 \u0627\u0644\u062A\u0648\u0641\u064A\u0642 \u0641\u064A \u062D\u064A\u0627\u062A\u0643 \u0627\u0644\u0645\u0647\u0646\u064A\u0629"))))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CardInfo);

/***/ }),

/***/ "./component/Container.js":
/*!********************************!*\
  !*** ./component/Container.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _JobsCards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./JobsCards */ "./component/JobsCards.js");
/* harmony import */ var _CardInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CardInfo */ "./component/CardInfo.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\Discovery1\\Desktop\\NextjsForsa\\component\\Container.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





class Container extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {
      cardSelected: null
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "selectCard", card => {
      this.setState({
        cardSelected: card
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "redirectToSignIn", () => {
      next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/about');
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "signOut", () => {
      localStorage.removeItem('user_id');
      this.redirectToSignIn();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "applyed", () => {
      this.setState({
        cardSelected: null
      });
    });
  }

  render() {
    return __jsx("div", {
      className: "col-xs-12 col-sm-12 col-md-12 col-lg-12",
      style: {
        backgroundColor: "#f8f8f8",
        minHeight: "720px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, __jsx("div", {
      className: "col-xs-12 col-sm-12 col-md-6 col-lg-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, __jsx(_JobsCards__WEBPACK_IMPORTED_MODULE_2__["default"], {
      selectCard: card => this.selectCard(card),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    })), __jsx("div", {
      className: "col-xs-12 col-sm-12 col-md-6 col-lg-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, __jsx(_CardInfo__WEBPACK_IMPORTED_MODULE_3__["default"], {
      cardSelected: this.state.cardSelected,
      applyed: this.applyed,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    })), __jsx("div", {
      className: "col-xs-12 col-sm-12 col-md-12 col-lg-12",
      style: {
        textAlign: "center",
        marginTop: "10px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, __jsx("button", {
      type: "button",
      class: "btn",
      style: {
        backgroundColor: "#426d7d",
        color: "#fff",
        minWidth: "100px"
      },
      onClick: this.signOut,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C")));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Container);

/***/ }),

/***/ "./component/JobsCards.js":
/*!********************************!*\
  !*** ./component/JobsCards.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_infinite_scroller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-infinite-scroller */ "react-infinite-scroller");
/* harmony import */ var react_infinite_scroller__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_infinite_scroller__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-spinners */ "react-spinners");
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_spinners__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\Discovery1\\Desktop\\NextjsForsa\\component\\JobsCards.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





class JobsCards extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {
      jobsCardArr: [],
      hasMore: true,
      limit: 12,
      pageNum: 1,
      isLoading: false,
      itemId: '',
      jobId: "",
      notNumber: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "componentDidMount", () => {
      this.loadMoreJobs();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "changeInputHandle", (name, value) => {
      this.setState({
        [name]: value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "pressOnEnter", event => {
      if (event.keyCode === 13 || event.key === "Enter") {
        if (this.state.jobId.trim() !== "") {
          if (!isNaN(this.state.jobId)) {
            this.setState({
              hasMore: true,
              pageNum: 1,
              jobsCardArr: [],
              notNumber: false
            }, () => {
              this.loadMoreJobs();
            });
          } else {
            this.setState({
              notNumber: true
            });
          }
        } else {
          this.setState({
            pageNum: 1,
            jobsCardArr: [],
            hasMore: true,
            notNumber: false
          }, () => {
            this.loadMoreJobs();
          });
        }
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "loadMoreJobs", () => {
      if (this.state.isLoading) {
        return;
      }

      if (!this.state.hasMore) {
        return;
      }

      this.setState({
        isLoading: true
      });
      axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`https://api.for9a.com/opportunity/filter?${this.state.jobId.trim() !== "" ? 'id=' + this.state.jobId : 'id='}&count=${this.state.limit}&page=${this.state.pageNum}&type=29`).then(res => {
        if (res.data.result.items.length < this.state.limit) {
          var hasMoreStatus = false;
        } else {
          var hasMoreStatus = true;
        }

        this.setState({
          jobsCardArr: [...this.state.jobsCardArr, ...res.data.result.items],
          hasMore: hasMoreStatus,
          pageNum: this.state.pageNum + 1,
          isLoading: false
        });
      }).catch(err => {
        console.log(err);
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "itemInformation", item => {
      this.setState({
        itemId: item.id
      });
      this.props.selectCard(item);
    });
  }

  render() {
    return __jsx("div", {
      className: "col-xs-12 col-sm-12 col-md-12 col-lg-12",
      style: {
        padding: "0px",
        minHeight: "680px",
        marginTop: "15px",
        backgroundColor: "#fff"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, __jsx("header", {
      style: {
        backgroundColor: "#eb751d",
        minHeight: "30px",
        textAlign: "right"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, __jsx("p", {
      style: {
        color: '#fff',
        padding: "4px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, "\u0627\u0644\u0648\u0638\u0627\u0626\u0641")), __jsx("div", {
      className: "col-xs-12 col-sm-12 col-md-12 col-lg-12",
      style: {
        height: "660px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, __jsx("div", {
      className: "col-xs-12 col-sm-12 col-md-12 col-lg-12",
      style: {
        padding: "0px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, __jsx("div", {
      className: "col-xs-6 col-sm-6 col-md-6 col-lg-6",
      style: {
        float: 'right',
        padding: "0px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }, __jsx("input", {
      class: "form-control form-control-sm",
      type: "text",
      style: {
        margin: "15px 0px 7px 0px",
        textAlign: "right"
      },
      onKeyPress: this.pressOnEnter,
      placeholder: "\u0627\u0628\u062D\u062B \u0628\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0631\u0642\u0645 \u0627\u0644\u0648\u0638\u064A\u0641\u0629",
      onChange: () => this.changeInputHandle("jobId", event.target.value),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    })), this.state.notNumber && __jsx("div", {
      class: "col-xs-6 col-sm-6 col-md-6 col-lg-6",
      style: {
        maxHeight: "30px",
        marginTop: "15px",
        maxWidth: "150px",
        float: "right"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, __jsx("p", {
      style: {
        color: "#426d7d",
        marginTop: "7px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, "\u0627\u0644\u0631\u062C\u0627\u0621 \u0627\u0644\u0628\u062D\u062B \u0628\u0631\u0642\u0645 \u0627\u0644\u0648\u0638\u064A\u0641\u0629"))), __jsx("div", {
      className: "col-xs-12 col-sm-12 col-md-12 col-lg-12",
      style: {
        height: "575px",
        overflowY: "auto"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }, __jsx(react_infinite_scroller__WEBPACK_IMPORTED_MODULE_3___default.a, {
      pageStart: 0,
      initialLoad: false,
      loadMore: () => {
        this.loadMoreJobs();
      },
      hasMore: this.state.hasMore,
      loader: __jsx("div", {
        style: {
          textAlign: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, __jsx(react_spinners__WEBPACK_IMPORTED_MODULE_4__["ClipLoader"], {
        color: "#339eba",
        loading: this.state.isLoading,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      })),
      useWindow: false,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }, this.state.jobsCardArr.map(item => {
      return __jsx("div", {
        key: Math.random(),
        className: "col-xs-12 col-sm-12 col-md-12 col-lg-12",
        onClick: () => {
          this.itemInformation(item);
        },
        style: {
          padding: "0px",
          marginTop: "15px",
          cursor: "pointer",
          border: "1px solid #ccc",
          boxShadow: this.state.itemId == item.id ? "#339eba 0px 0px 10px 0px" : 'rgb(88,87,87)'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, __jsx("div", {
        className: "col-xs-12 col-sm-3 col-md-3 col-lg-3",
        style: {
          minHeight: "70px",
          padding: "0px",
          backgroundImage: `url(${item.images.sm})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: 'center'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }), __jsx("div", {
        className: "col-xs-12 col-sm-9 col-md-9 col-lg-9",
        style: {
          minHeight: "70px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, __jsx("div", {
        className: "col-xs-12 col-sm-2 col-md-2 col-lg-2",
        style: {
          textAlign: "center",
          padding: "10px 0px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, item.location.title.length > 8 ? `... ${item.location.title.substr(0, 8)}` : item.location.title), __jsx("div", {
        className: "col-xs-12 col-sm-10 col-md-10 col-lg-10",
        style: {
          padding: "10px 0px",
          textAlign: "right"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, item.title.length > 40 ? `... ${item.title.substr(0, 40)}` : item.title), __jsx("div", {
        className: "col-xs-12 col-sm-2 col-md-2 col-lg-2",
        style: {
          textAlign: "center",
          padding: "0px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, `# ${item.id}`), __jsx("div", {
        className: "col-xs-12 col-sm-10 col-md-10 col-lg-10",
        style: {
          padding: "0px",
          textAlign: "right"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, `اخر موعد للتقديم : ${item.deadline}`)));
    })))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (JobsCards);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

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

/***/ "./pages/jobspage.js":
/*!***************************!*\
  !*** ./pages/jobspage.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/Container */ "./component/Container.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Discovery1\\Desktop\\NextjsForsa\\pages\\jobspage.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class JobsPage extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, __jsx("title", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, "Job Website"), __jsx("link", {
      rel: "stylesheet",
      href: "https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css",
      integrity: "sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu",
      crossorigin: "anonymous",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    })), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, __jsx(_component_Container__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (JobsPage);

/***/ }),

/***/ 6:
/*!*********************************!*\
  !*** multi ./pages/jobspage.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Discovery1\Desktop\NextjsForsa\pages\jobspage.js */"./pages/jobspage.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-infinite-scroller":
/*!******************************************!*\
  !*** external "react-infinite-scroller" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-infinite-scroller");

/***/ }),

/***/ "react-responsive-modal":
/*!*****************************************!*\
  !*** external "react-responsive-modal" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-responsive-modal");

/***/ }),

/***/ "react-spinners":
/*!*********************************!*\
  !*** external "react-spinners" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-spinners");

/***/ })

/******/ });
//# sourceMappingURL=jobspage.js.map