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
      pageNum: 1
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "componentDidMount", function () {
      _this.loadMoreJobs();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "loadMoreJobs", function () {
      if (!_this.state.hasMore) {
        return;
      }

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
          pageNum: _this.state.pageNum + 1
        }, function () {
          console.log("//////////////////////////////", _this.state.jobsCardArr);
        }); // this.setState({
        //   jobsCardArr:res.data.result.items
        // })

      })["catch"](function (err) {
        console.log(err);
      });
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
          height: "500px",
          minHeight: "500px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, __jsx("header", {
        style: {
          backgroundColor: "#eb751d",
          minHeight: "30px",
          borderRadius: '5px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, __jsx("p", {
        style: {
          color: '#fff',
          padding: "4px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "Jobs Cards")), __jsx("div", {
        className: "col-xs-12 col-sm-12 col-md-12 col-lg-12",
        style: {
          padding: "0px",
          height: "200px",
          overflowY: "auto",
          backgroundColor: "#fff"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, __jsx(react_infinite_scroller__WEBPACK_IMPORTED_MODULE_10___default.a, {
        pageStart: 0,
        initialLoad: false,
        loadMore: function loadMore() {
          console.log("load more true");

          _this2.loadMoreJobs();
        },
        hasMore: this.state.hasMore,
        loader: __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          },
          __self: this
        }),
        useWindow: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, this.state.jobsCardArr.map(function (item) {
        return __jsx("div", {
          key: Math.random(),
          className: "col-xs-12 col-sm-12 col-md-12 col-lg-12",
          style: {
            padding: "10px 0px 0px 0px"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
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
            lineNumber: 68
          },
          __self: this
        }), __jsx("div", {
          className: "col-xs-9 col-sm-9 col-md-9 col-lg-9",
          style: {
            border: "1px solid #ccc",
            minHeight: "70px"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          },
          __self: this
        }, __jsx("div", {
          className: "col-xs-10 col-sm-10 col-md-10 col-lg-10",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          },
          __self: this
        }, item.title)));
      }))));
    }
  }]);

  return JobsCards;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (JobsCards);

/***/ })

})
//# sourceMappingURL=index.js.5e23af9bb1a12118e710.hot-update.js.map