webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./component/JobsCards.js":
/*!********************************!*\
  !*** ./component/JobsCards.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_infinite_scroller__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-infinite-scroller */ "./node_modules/react-infinite-scroller/index.js");
/* harmony import */ var react_infinite_scroller__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_infinite_scroller__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-spinners */ "./node_modules/react-spinners/index.js");
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_spinners__WEBPACK_IMPORTED_MODULE_11__);








var _jsxFileName = "C:\\Users\\Discovery1\\Desktop\\NextjsForsa\\component\\JobsCards.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;





var JobsCards =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(JobsCards, _Component);

  function JobsCards() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, JobsCards);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(JobsCards)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
      jobsCardArr: [],
      hasMore: true,
      limit: 12,
      pageNum: 1,
      isLoading: false,
      itemId: ''
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "componentDidMount", function () {
      _this.loadMoreJobs();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "loadMoreJobs", function () {
      if (_this.state.isLoading) {
        return;
      }

      if (!_this.state.hasMore) {
        return;
      }

      _this.setState({
        isLoading: true
      });

      axios__WEBPACK_IMPORTED_MODULE_9___default.a.get("https://api.for9a.com/opportunity/filter?count=".concat(_this.state.limit, "&page=").concat(_this.state.pageNum, "&type=29")).then(function (res) {
        console.log("our res eq", res.data.result.items.length);

        if (res.data.result.items.length < _this.state.limit) {
          var hasMoreStatus = false;
        } else {
          var hasMoreStatus = true;
        }

        _this.setState({
          jobsCardArr: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_this.state.jobsCardArr), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(res.data.result.items)),
          hasMore: hasMoreStatus,
          pageNum: _this.state.pageNum + 1,
          isLoading: false
        }, function () {
          console.log("//////////////////////////////", _this.state.jobsCardArr);
        }); // this.setState({
        //   jobsCardArr:res.data.result.items
        // })

      })["catch"](function (err) {
        console.log(err);
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "itemInformation", function (item) {
      _this.setState({
        itemId: item.id
      });

      _this.props.selectCard(item);
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(JobsCards, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx("div", {
        className: "col-xs-12 col-sm-12 col-md-12 col-lg-12",
        style: {
          minHeight: "750px",
          marginTop: "15px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, __jsx("header", {
        style: {
          backgroundColor: "#eb751d",
          minHeight: "30px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, __jsx("p", {
        style: {
          color: '#fff',
          padding: "4px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, "\u0627\u0644\u0648\u0638\u0627\u0626\u0641")), __jsx("div", {
        className: "col-xs-12 col-sm-12 col-md-12 col-lg-12",
        style: {
          height: "650px",
          overflowY: "auto",
          backgroundColor: "#fff"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, __jsx(react_infinite_scroller__WEBPACK_IMPORTED_MODULE_10___default.a, {
        pageStart: 0,
        initialLoad: false,
        loadMore: function loadMore() {
          _this2.loadMoreJobs();
        },
        hasMore: this.state.hasMore,
        loader: __jsx("div", {
          style: {
            textAlign: "center"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          },
          __self: this
        }, __jsx(react_spinners__WEBPACK_IMPORTED_MODULE_11__["ClipLoader"], {
          color: "#339eba",
          loading: this.state.isLoading,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          },
          __self: this
        })),
        useWindow: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, this.state.jobsCardArr.map(function (item) {
        return __jsx("div", {
          key: Math.random(),
          className: "col-xs-12 col-sm-12 col-md-12 col-lg-12",
          onClick: function onClick() {
            _this2.itemInformation(item);
          },
          style: {
            padding: "0px",
            marginTop: "15px",
            cursor: "pointer",
            border: "1px solid #ccc",
            boxShadow: _this2.state.itemId == item.id ? "#339eba 0px 0px 10px 0px" : 'rgb(88,87,87)'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          },
          __self: this
        }, __jsx("div", {
          className: "col-xs-3 col-sm-3 col-md-3 col-lg-3",
          style: {
            minHeight: "70px",
            padding: "0px",
            backgroundImage: "url(".concat(item.images.sm, ")"),
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: 'center'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: this
        }), __jsx("div", {
          className: "col-xs-9 col-sm-9 col-md-9 col-lg-9",
          style: {
            minHeight: "70px"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          },
          __self: this
        }, __jsx("div", {
          className: "col-xs-2 col-sm-2 col-md-2 col-lg-2",
          style: {
            textAlign: "center",
            padding: "10px 0px"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          __self: this
        }, item.location.title), __jsx("div", {
          className: "col-xs-10 col-sm-10 col-md-10 col-lg-10",
          style: {
            padding: "10px 0px",
            textAlign: "right"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          },
          __self: this
        }, item.title), __jsx("div", {
          className: "col-xs-2 col-sm-2 col-md-2 col-lg-2",
          style: {
            textAlign: "center",
            padding: "0px"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          },
          __self: this
        }, "# ".concat(item.id)), __jsx("div", {
          className: "col-xs-10 col-sm-10 col-md-10 col-lg-10",
          style: {
            padding: "0px",
            textAlign: "right"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102
          },
          __self: this
        }, "\u0627\u062E\u0631 \u0645\u0648\u0639\u062F \u0644\u0644\u062A\u0642\u062F\u064A\u0645 : ".concat(item.deadline))));
      }))));
    }
  }]);

  return JobsCards;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (JobsCards);

/***/ })

})
//# sourceMappingURL=index.js.7126ac91bea12365c262.hot-update.js.map