webpackHotUpdate("static\\development\\pages\\JobsPage.js",{

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
/* harmony import */ var react_s_alert__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-s-alert */ "./node_modules/react-s-alert/index.js");
/* harmony import */ var react_s_alert__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_s_alert__WEBPACK_IMPORTED_MODULE_12__);








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
      itemId: '',
      jobId: ""
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "componentDidMount", function () {
      _this.loadMoreJobs();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "changeInputHandle", function (name, value) {
      _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])({}, name, value));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "pressOnEnter", function (event) {
      console.log(event);

      if (event.keyCode === 13 || event.key === "Enter") {
        if (_this.state.jobId.trim() !== "") {
          if (!isNaN(_this.state.jobId)) {
            _this.setState({
              hasMore: true,
              pageNum: 1,
              jobsCardArr: []
            }, function () {
              _this.loadMoreJobs();
            });
          } else {
            react_s_alert__WEBPACK_IMPORTED_MODULE_12___default.a.error('Test message 3', {
              position: 'bottom-right',
              effect: 'slide',
              timeout: 'none'
            });
          }
        } else {
          _this.setState({
            pageNum: 1,
            jobsCardArr: [],
            hasMore: true
          }, function () {
            _this.loadMoreJobs();
          });
        }
      }
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

      axios__WEBPACK_IMPORTED_MODULE_9___default.a.get("https://api.for9a.com/opportunity/filter?".concat(_this.state.jobId.trim() !== "" ? 'id=' + _this.state.jobId : 'id=', "&count=").concat(_this.state.limit, "&page=").concat(_this.state.pageNum, "&type=29")).then(function (res) {
        console.log("reeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee", res.data.result);

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
          padding: "0px",
          minHeight: "680px",
          marginTop: "15px",
          backgroundColor: "#fff"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
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
          lineNumber: 98
        },
        __self: this
      }, __jsx("p", {
        style: {
          color: '#fff',
          padding: "4px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, "\u0627\u0644\u0648\u0638\u0627\u0626\u0641")), __jsx("div", {
        className: "col-xs-12 col-sm-12 col-md-12 col-lg-12",
        style: {
          height: "660px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, __jsx("div", {
        className: "col-xs-6 col-sm-6 col-md-6 col-lg-6",
        style: {
          padding: "0px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, __jsx("input", {
        "class": "form-control form-control-sm",
        type: "text",
        style: {
          margin: "15px 0px 7px 0px"
        },
        onKeyPress: this.pressOnEnter,
        placeholder: ".form-control-sm",
        onChange: function onChange() {
          return _this2.changeInputHandle("jobId", event.target.value);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      })), __jsx("div", {
        className: "col-xs-12 col-sm-12 col-md-12 col-lg-12",
        style: {
          height: "575px",
          overflowY: "auto"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
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
            lineNumber: 114
          },
          __self: this
        }, __jsx(react_spinners__WEBPACK_IMPORTED_MODULE_11__["ClipLoader"], {
          color: "#339eba",
          loading: this.state.isLoading,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 114
          },
          __self: this
        })),
        useWindow: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
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
            lineNumber: 120
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
            lineNumber: 128
          },
          __self: this
        }), __jsx("div", {
          className: "col-xs-9 col-sm-9 col-md-9 col-lg-9",
          style: {
            minHeight: "70px"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 130
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
            lineNumber: 132
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
            lineNumber: 135
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
            lineNumber: 138
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
            lineNumber: 141
          },
          __self: this
        }, "\u0627\u062E\u0631 \u0645\u0648\u0639\u062F \u0644\u0644\u062A\u0642\u062F\u064A\u0645 : ".concat(item.deadline))));
      })))));
    }
  }]);

  return JobsCards;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (JobsCards);

/***/ }),

/***/ "./node_modules/react-s-alert/dist/SAlert.js":
/*!***************************************************!*\
  !*** ./node_modules/react-s-alert/dist/SAlert.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! ./SAlertContent */ "./node_modules/react-s-alert/dist/SAlertContent.js"), __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"), __webpack_require__(/*! ./s-alert-parts/s-alert-store */ "./node_modules/react-s-alert/dist/s-alert-parts/s-alert-store.js"), __webpack_require__(/*! ./s-alert-parts/s-alert-tools */ "./node_modules/react-s-alert/dist/s-alert-parts/s-alert-tools.js"), __webpack_require__(/*! ./s-alert-parts/s-alert-data-prep */ "./node_modules/react-s-alert/dist/s-alert-parts/s-alert-data-prep.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var mod; }
})(this, function (exports, _react, _SAlertContent, _propTypes, _sAlertStore, _sAlertTools, _sAlertDataPrep) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _SAlertContent2 = _interopRequireDefault(_SAlertContent);

    var _propTypes2 = _interopRequireDefault(_propTypes);

    var _sAlertStore2 = _interopRequireDefault(_sAlertStore);

    var _sAlertTools2 = _interopRequireDefault(_sAlertTools);

    var _sAlertDataPrep2 = _interopRequireDefault(_sAlertDataPrep);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var _extends = Object.assign || function (target) {
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

    var insertFunc = function insertFunc(msg, data, condition) {
        var id = _sAlertTools2.default.randomId();
        _sAlertStore2.default.dispatch({
            type: 'INSERT',
            data: _extends({}, data, {
                id: id,
                condition: condition,
                message: msg
            })
        });
        return id;
    };

    var SAlert = function (_React$Component) {
        _inherits(SAlert, _React$Component);

        function SAlert(props) {
            _classCallCheck(this, SAlert);

            var _this = _possibleConstructorReturn(this, (SAlert.__proto__ || Object.getPrototypeOf(SAlert)).call(this, props));

            _this.state = {
                dataRight: [],
                dataLeft: [],
                dataTop: [],
                dataBottom: []
            };
            return _this;
        }

        _createClass(SAlert, [{
            key: 'componentDidMount',
            value: function componentDidMount() {
                var _this2 = this;

                var storeStateLeft = void 0;
                var storeStateRight = void 0;
                var storeStateTop = void 0;
                var storeStateBottom = void 0;

                var addToStoreRight = function addToStoreRight() {
                    requestAnimationFrame(function () {
                        return requestAnimationFrame(function () {
                            var length = void 0;
                            storeStateRight = (0, _sAlertDataPrep2.default)('right', _this2) || [];
                            length = storeStateRight.length;
                            if (_this2.props.stack && _this2.props.stack.limit && length > _this2.props.stack.limit) {
                                var id = storeStateRight[0].id;
                                _sAlertStore2.default.dispatch({ type: 'REMOVE', data: { id: id } });
                                storeStateRight = (0, _sAlertDataPrep2.default)('right', _this2) || [];
                            }
                            _this2.setState({ dataRight: storeStateRight });
                        });
                    });
                };
                this.unsubStoreRight = _sAlertStore2.default.subscribe(addToStoreRight);

                var addToStoreLeft = function addToStoreLeft() {
                    requestAnimationFrame(function () {
                        return requestAnimationFrame(function () {
                            var length = void 0;
                            storeStateLeft = (0, _sAlertDataPrep2.default)('left', _this2) || [];
                            length = storeStateLeft.length;
                            if (_this2.props.stack && _this2.props.stack.limit && length > _this2.props.stack.limit) {
                                var id = storeStateLeft[0].id;
                                _sAlertStore2.default.dispatch({ type: 'REMOVE', data: { id: id } });
                                storeStateLeft = (0, _sAlertDataPrep2.default)('left', _this2) || [];
                            }
                            _this2.setState({ dataLeft: storeStateLeft });
                        });
                    });
                };
                this.unsubStoreLeft = _sAlertStore2.default.subscribe(addToStoreLeft);

                var addToStoreTop = function addToStoreTop() {
                    requestAnimationFrame(function () {
                        return requestAnimationFrame(function () {
                            var length = void 0;
                            storeStateTop = (0, _sAlertDataPrep2.default)('full-top', _this2) || [];
                            length = storeStateTop.length;
                            if (_this2.props.stack && _this2.props.stack.limit && length > _this2.props.stack.limit) {
                                var id = storeStateTop[0].id;
                                _sAlertStore2.default.dispatch({ type: 'REMOVE', data: { id: id } });
                                storeStateTop = (0, _sAlertDataPrep2.default)('full-top', _this2) || [];
                            }
                            _this2.setState({ dataTop: storeStateTop });
                        });
                    });
                };
                this.unsubStoreTop = _sAlertStore2.default.subscribe(addToStoreTop);

                var addToStoreBottom = function addToStoreBottom() {
                    requestAnimationFrame(function () {
                        return requestAnimationFrame(function () {
                            var length = void 0;
                            storeStateBottom = (0, _sAlertDataPrep2.default)('full-bottom', _this2) || [];
                            length = storeStateBottom.length;
                            if (_this2.props.stack && _this2.props.stack.limit && length > _this2.props.stack.limit) {
                                var id = storeStateBottom[0].id;
                                _sAlertStore2.default.dispatch({ type: 'REMOVE', data: { id: id } });
                                storeStateBottom = (0, _sAlertDataPrep2.default)('full-bottom', _this2) || [];
                            }
                            _this2.setState({ dataBottom: storeStateBottom });
                        });
                    });
                };
                this.unsubStoreBottom = _sAlertStore2.default.subscribe(addToStoreBottom);

                // set up global config from global SAlert props
                // only stuff needed for getAlertData
                var globalConfig = {
                    contentTemplate: this.props.contentTemplate,
                    offset: this.props.offset,
                    message: this.props.message,
                    stack: this.props.stack,
                    html: this.props.html,
                    customFields: this.props.customFields,
                    position: this.props.position || 'top-right',
                    preserveContext: this.props.preserveContext || false
                };
                _sAlertTools2.default.setGlobalConfig(globalConfig);
            }
        }, {
            key: 'componentWillUnmount',
            value: function componentWillUnmount() {
                this.unsubStoreTop();
                this.unsubStoreBottom();
                this.unsubStoreLeft();
                this.unsubStoreRight();
            }
        }, {
            key: 'render',
            value: function render() {
                var _this3 = this;

                var mapFunc = function mapFunc(alert, index) {
                    var customKey = 'alert-key-' + alert.id + '-' + alert.position;
                    var id = alert.id;
                    var condition = _sAlertTools2.default.returnFirstDefined(alert.condition, 'info');
                    var message = _sAlertTools2.default.returnFirstDefined(alert.message, _this3.props.message, '');
                    var position = _sAlertTools2.default.returnFirstDefined(alert.position, _this3.props.position, 'top-right');
                    var offset = _sAlertTools2.default.returnFirstDefined(alert.offset, _this3.props.offset, 0);
                    var effect = _sAlertTools2.default.returnFirstDefined(alert.effect, _this3.props.effect);
                    var boxPosition = alert.boxPosition;
                    var beep = _sAlertTools2.default.returnFirstDefined(alert.beep, _this3.props.beep, false);
                    var timeout = _sAlertTools2.default.returnFirstDefined(alert.timeout, _this3.props.timeout, 5000);
                    var html = _sAlertTools2.default.returnFirstDefined(alert.html, _this3.props.html);
                    var onClose = _sAlertTools2.default.returnFirstDefined(alert.onClose, _this3.props.onClose);
                    var onShow = _sAlertTools2.default.returnFirstDefined(alert.onShow, _this3.props.onShow);
                    var customFields = _sAlertTools2.default.returnFirstDefined(alert.customFields, _this3.props.customFields);
                    var contentTemplate = _this3.props.contentTemplate;

                    return _react2.default.createElement(_SAlertContent2.default, {
                        key: customKey,
                        id: id,
                        customFields: customFields,
                        condition: condition,
                        message: message,
                        position: position,
                        effect: effect,
                        boxPosition: boxPosition,
                        beep: beep,
                        timeout: timeout,
                        html: html,
                        onClose: onClose,
                        onShow: onShow,
                        contentTemplate: contentTemplate });
                };
                var sAlertElemsRight = this.state.dataRight.map(mapFunc);
                var sAlertElemsLeft = this.state.dataLeft.map(mapFunc);
                var sAlertElemsTop = this.state.dataTop.map(mapFunc);
                var sAlertElemsBottom = this.state.dataBottom.map(mapFunc);
                return _react2.default.createElement(
                    'div',
                    { className: 's-alert-wrapper' },
                    sAlertElemsRight,
                    sAlertElemsLeft,
                    sAlertElemsTop,
                    sAlertElemsBottom
                );
            }
        }], [{
            key: 'info',
            value: function info(msg, data) {
                return insertFunc(msg, data, 'info');
            }
        }, {
            key: 'error',
            value: function error(msg, data) {
                return insertFunc(msg, data, 'error');
            }
        }, {
            key: 'warning',
            value: function warning(msg, data) {
                return insertFunc(msg, data, 'warning');
            }
        }, {
            key: 'success',
            value: function success(msg, data) {
                return insertFunc(msg, data, 'success');
            }
        }, {
            key: 'close',
            value: function close(id) {
                _sAlertStore2.default.dispatch({ type: 'REMOVE', data: { id: id } });
            }
        }, {
            key: 'closeAll',
            value: function closeAll() {
                _sAlertStore2.default.dispatch({ type: 'REMOVEALL' });
            }
        }]);

        return SAlert;
    }(_react2.default.Component);

    SAlert.propTypes = {
        message: _propTypes2.default.string,
        position: _propTypes2.default.string,
        offset: _propTypes2.default.number,
        stack: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.object]),
        effect: _propTypes2.default.string,
        beep: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object, _propTypes2.default.bool]),
        timeout: _propTypes2.default.oneOfType([_propTypes2.default.oneOf(['none']), _propTypes2.default.number]),
        html: _propTypes2.default.bool,
        preserveContext: _propTypes2.default.bool,
        onClose: _propTypes2.default.func,
        onShow: _propTypes2.default.func,
        customFields: _propTypes2.default.object,
        contentTemplate: _propTypes2.default.func
    };

    exports.default = SAlert;
});

/***/ }),

/***/ "./node_modules/react-s-alert/dist/SAlertContent.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-s-alert/dist/SAlertContent.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"), __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"), __webpack_require__(/*! ./s-alert-parts/s-alert-tools */ "./node_modules/react-s-alert/dist/s-alert-parts/s-alert-tools.js"), __webpack_require__(/*! ./s-alert-parts/s-alert-store */ "./node_modules/react-s-alert/dist/s-alert-parts/s-alert-store.js"), __webpack_require__(/*! ./SAlertContentTmpl */ "./node_modules/react-s-alert/dist/SAlertContentTmpl.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var mod; }
})(this, function (exports, _react, _reactDom, _propTypes, _sAlertTools, _sAlertStore, _SAlertContentTmpl) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _reactDom2 = _interopRequireDefault(_reactDom);

    var _propTypes2 = _interopRequireDefault(_propTypes);

    var _sAlertTools2 = _interopRequireDefault(_sAlertTools);

    var _sAlertStore2 = _interopRequireDefault(_sAlertStore);

    var _SAlertContentTmpl2 = _interopRequireDefault(_SAlertContentTmpl);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var SAlertContent = function (_React$Component) {
        _inherits(SAlertContent, _React$Component);

        function SAlertContent(props) {
            _classCallCheck(this, SAlertContent);

            return _possibleConstructorReturn(this, (SAlertContent.__proto__ || Object.getPrototypeOf(SAlertContent)).call(this, props));
        }

        _createClass(SAlertContent, [{
            key: 'handleCloseAlert',
            value: function handleCloseAlert() {
                var closingTimeout = void 0;
                var alertId = this.props.id;
                var currentAlertElem = _reactDom2.default.findDOMNode(this);
                var animationClose = function animationClose() {
                    currentAlertElem.style.display = 'none';
                    _sAlertStore2.default.dispatch({ type: 'REMOVE', data: { id: alertId } });
                    clearTimeout(closingTimeout);
                };
                if (document.hidden || document.webkitHidden || !currentAlertElem.classList.contains('s-alert-is-effect')) {
                    _sAlertStore2.default.dispatch({ type: 'REMOVE', data: { id: alertId } });
                } else {
                    currentAlertElem.classList.remove('s-alert-show');
                    closingTimeout = setTimeout(function () {
                        currentAlertElem.classList.add('s-alert-hide');
                    }, 100);
                    currentAlertElem.removeEventListener('webkitAnimationEnd', animationClose, false);
                    currentAlertElem.removeEventListener('animationend', animationClose, false);
                    currentAlertElem.addEventListener('webkitAnimationEnd', animationClose, false);
                    currentAlertElem.addEventListener('animationend', animationClose, false);
                }
                // stop audio when closing
                this.alertAudio && this.alertAudio.load();
            }
        }, {
            key: 'componentWillMount',
            value: function componentWillMount() {
                var beep = this.props.beep;
                var condition = this.props.condition;
                if (beep && typeof beep === 'string') {
                    this.alertAudio = new Audio(beep);
                    this.alertAudio.load();
                    this.alertAudio.play();
                }
                if (beep && (typeof beep === 'undefined' ? 'undefined' : _typeof(beep)) === 'object' && condition === 'info') {
                    this.alertAudio = new Audio(beep.info);
                    this.alertAudio.load();
                    this.alertAudio.play();
                }
                if (beep && (typeof beep === 'undefined' ? 'undefined' : _typeof(beep)) === 'object' && condition === 'error') {
                    this.alertAudio = new Audio(beep.error);
                    this.alertAudio.load();
                    this.alertAudio.play();
                }
                if (beep && (typeof beep === 'undefined' ? 'undefined' : _typeof(beep)) === 'object' && condition === 'success') {
                    this.alertAudio = new Audio(beep.success);
                    this.alertAudio.load();
                    this.alertAudio.play();
                }
                if (beep && (typeof beep === 'undefined' ? 'undefined' : _typeof(beep)) === 'object' && condition === 'warning') {
                    this.alertAudio = new Audio(beep.warning);
                    this.alertAudio.load();
                    this.alertAudio.play();
                }
            }
        }, {
            key: 'componentDidMount',
            value: function componentDidMount() {
                var _this2 = this;

                if (typeof this.props.timeout === 'number') {
                    this.closeTimer = setTimeout(function () {
                        _this2.handleCloseAlert();
                    }, this.props.timeout);
                }
                if (this.props.onShow) {
                    this.props.onShow();
                }
            }
        }, {
            key: 'componentWillUnmount',
            value: function componentWillUnmount() {
                if (this.closeTimer) {
                    clearTimeout(this.closeTimer);
                }
                if (this.props.onClose) {
                    this.props.onClose();
                }
            }
        }, {
            key: 'render',
            value: function render() {
                var classNames = 's-alert-box s-alert-' + this.props.condition + ' s-alert-' + this.props.position + ' ' + (this.props.effect ? 's-alert-is-effect s-alert-effect-' + this.props.effect : '') + ' s-alert-show';
                var message = this.props.html ? _react2.default.createElement('span', { dangerouslySetInnerHTML: { __html: this.props.message } }) : this.props.message;
                var styles = this.props.boxPosition ? _sAlertTools2.default.styleToObj(this.props.boxPosition) : {};
                var id = this.props.id;
                var handleClose = this.handleCloseAlert.bind(this);
                var contentTemplate = this.props.contentTemplate || _SAlertContentTmpl2.default;
                var customFields = this.props.customFields || {};
                var condition = this.props.condition;

                return _react2.default.createElement(contentTemplate, { classNames: classNames, id: id, styles: styles, message: message, handleClose: handleClose, customFields: customFields, condition: condition });
            }
        }]);

        return SAlertContent;
    }(_react2.default.Component);

    SAlertContent.propTypes = {
        condition: _propTypes2.default.string.isRequired,
        message: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
        position: _propTypes2.default.string.isRequired,
        boxPosition: _propTypes2.default.string,
        id: _propTypes2.default.string.isRequired,
        effect: _propTypes2.default.string,
        beep: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object, _propTypes2.default.bool]),
        timeout: _propTypes2.default.oneOfType([_propTypes2.default.oneOf(['none']), _propTypes2.default.number]),
        html: _propTypes2.default.bool,
        onClose: _propTypes2.default.func,
        onShow: _propTypes2.default.func,
        customFields: _propTypes2.default.object,
        contentTemplate: _propTypes2.default.func
    };

    exports.default = SAlertContent;
});

/***/ }),

/***/ "./node_modules/react-s-alert/dist/SAlertContentTmpl.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-s-alert/dist/SAlertContentTmpl.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var mod; }
})(this, function (exports, _react, _propTypes) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _propTypes2 = _interopRequireDefault(_propTypes);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var SAlertContentTmpl = function (_React$Component) {
        _inherits(SAlertContentTmpl, _React$Component);

        function SAlertContentTmpl(props) {
            _classCallCheck(this, SAlertContentTmpl);

            return _possibleConstructorReturn(this, (SAlertContentTmpl.__proto__ || Object.getPrototypeOf(SAlertContentTmpl)).call(this, props));
        }

        _createClass(SAlertContentTmpl, [{
            key: 'render',
            value: function render() {
                return _react2.default.createElement(
                    'div',
                    { className: this.props.classNames, id: this.props.id, style: this.props.styles },
                    _react2.default.createElement(
                        'div',
                        { className: 's-alert-box-inner' },
                        this.props.message
                    ),
                    _react2.default.createElement('span', { className: 's-alert-close', onClick: this.props.handleClose })
                );
            }
        }]);

        return SAlertContentTmpl;
    }(_react2.default.Component);

    SAlertContentTmpl.propTypes = {
        id: _propTypes2.default.string.isRequired,
        classNames: _propTypes2.default.string.isRequired,
        condition: _propTypes2.default.string.isRequired,
        styles: _propTypes2.default.object.isRequired,
        message: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]).isRequired,
        handleClose: _propTypes2.default.func.isRequired,
        customFields: _propTypes2.default.object
    };

    exports.default = SAlertContentTmpl;
});

/***/ }),

/***/ "./node_modules/react-s-alert/dist/s-alert-parts/s-alert-data-prep.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-s-alert/dist/s-alert-parts/s-alert-data-prep.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"), __webpack_require__(/*! ../SAlertContent */ "./node_modules/react-s-alert/dist/SAlertContent.js"), __webpack_require__(/*! ./s-alert-store */ "./node_modules/react-s-alert/dist/s-alert-parts/s-alert-store.js"), __webpack_require__(/*! ./s-alert-tools */ "./node_modules/react-s-alert/dist/s-alert-parts/s-alert-tools.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var mod; }
})(this, function (exports, _react, _reactDom, _SAlertContent, _sAlertStore, _sAlertTools) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _reactDom2 = _interopRequireDefault(_reactDom);

    var _SAlertContent2 = _interopRequireDefault(_SAlertContent);

    var _sAlertStore2 = _interopRequireDefault(_sAlertStore);

    var _sAlertTools2 = _interopRequireDefault(_sAlertTools);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var _extends = Object.assign || function (target) {
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

    var getAlertData = function getAlertData(sAlertPosition, parentComponent) {
        var positionTop = 0;
        var positionBottom = 0;
        var padding = 0;
        var alerts = {};
        var style = void 0;
        var docElement = void 0;
        var sAlertBoxHeight = void 0;
        var positionTypeTop = void 0;
        var positionTypeBottom = void 0;
        var checkFirst = function checkFirst(type, objId) {
            var collectionOfType = sAlertCollection.filter(function (obj) {
                return obj.position === type || sAlertGlobalConfig.position === type;
            });
            return collectionOfType && collectionOfType[0].id === objId;
        };
        var positionFunc = function positionFunc(position, positionType, alert, docElement, sAlertBoxHeight, reactComponent) {
            padding = aStack.spacing || parseInt(getComputedStyle(_reactDom2.default.findDOMNode(reactComponent))[positionType]);
            if (checkFirst(aPosition, alert.id) && aOffset) {
                position = 0;
                position = position + parseInt(aOffset);
            }
            if (checkFirst(aPosition, alert.id) && aStack.spacing) {
                position = position;
            } else {
                position = position + parseInt(padding);
            }
            style = positionType + ': ' + position + 'px;';
            position = position + sAlertBoxHeight;
            return position;
        };

        var sAlertGlobalConfig = _sAlertTools2.default.getGlobalConfig();
        var aStack = void 0;
        var aContentTemplate = void 0;
        var aOffset = void 0;
        var aMessage = void 0;
        var aHtml = void 0;
        var aCustomFields = void 0;
        var aPosition = void 0;
        var preserveContext = void 0;

        var query = {};
        if (sAlertPosition === 'left') {
            query = function query(item) {
                return item.position === 'top-left' || item.position === 'bottom-left' || !item.position && (sAlertGlobalConfig.position === 'top-left' || sAlertGlobalConfig.position === 'bottom-left');
            };
        }
        if (sAlertPosition === 'right') {
            query = function query(item) {
                return item.position === 'top-right' || item.position === 'bottom-right' || !item.position && (sAlertGlobalConfig.position === 'top-right' || sAlertGlobalConfig.position === 'bottom-right');
            };
        }
        if (sAlertPosition === 'full-top') {
            query = function query(item) {
                return item.position === 'top' || !item.position && sAlertGlobalConfig.position === 'top';
            };
        }
        if (sAlertPosition === 'full-bottom') {
            query = function query(item) {
                return item.position === 'bottom' || !item.position && sAlertGlobalConfig.position === 'bottom';
            };
        }

        var currentState = _sAlertStore2.default.getState();
        var sAlertCollection = currentState.slice().filter(query);

        return sAlertCollection.map(function (alert) {
            aStack = sAlertGlobalConfig.stack;
            aContentTemplate = sAlertGlobalConfig.contentTemplate;
            aOffset = _sAlertTools2.default.returnFirstDefined(alert.offset, sAlertGlobalConfig.offset);
            aMessage = _sAlertTools2.default.returnFirstDefined(alert.message, sAlertGlobalConfig.message);
            aHtml = _sAlertTools2.default.returnFirstDefined(alert.html, sAlertGlobalConfig.html);
            aCustomFields = _sAlertTools2.default.returnFirstDefined(alert.customFields, sAlertGlobalConfig.customFields);
            aPosition = _sAlertTools2.default.returnFirstDefined(alert.position, sAlertGlobalConfig.position);
            preserveContext = _sAlertTools2.default.returnFirstDefined(alert.preserveContext, sAlertGlobalConfig.preserveContext);
            positionTypeTop = aPosition && /top/g.test(aPosition);
            positionTypeBottom = aPosition && /bottom/g.test(aPosition);

            if (aStack) {
                // checking alert box height - needed to calculate position
                docElement = document.createElement('div');
                docElement.classList.add('s-alert-box-height');

                // mock element, needed for positions calculations
                var reactElement = _react2.default.createElement(_SAlertContent2.default, {
                    key: _sAlertTools2.default.randomId(),
                    id: _sAlertTools2.default.randomId(),
                    condition: alert.condition,
                    message: aMessage,
                    position: aPosition,
                    effect: alert.effect,
                    boxPosition: alert.boxPosition,
                    beep: false,
                    timeout: 'none',
                    html: aHtml,
                    contentTemplate: aContentTemplate,
                    customFields: aCustomFields
                });

                var reactComponent = void 0;

                if (preserveContext) {
                    reactComponent = _reactDom2.default.unstable_renderSubtreeIntoContainer(parentComponent, reactElement, docElement);
                } else {
                    reactComponent = _reactDom2.default.render(reactElement, docElement);
                }

                document.body.appendChild(docElement);
                sAlertBoxHeight = parseInt(getComputedStyle(_reactDom2.default.findDOMNode(reactComponent))['height']);
                if (positionTypeTop) {
                    positionTop = positionFunc(positionTop, 'top', alert, docElement, sAlertBoxHeight, reactComponent);
                }
                if (positionTypeBottom) {
                    positionBottom = positionFunc(positionBottom, 'bottom', alert, docElement, sAlertBoxHeight, reactComponent);
                }
                var sAlertComputedStyle = getComputedStyle(_reactDom2.default.findDOMNode(reactComponent));
                if (sAlertPosition === 'left') {
                    style = style + 'left: ' + (aStack.spacing || parseInt(sAlertComputedStyle.left)) + 'px;';
                }
                if (sAlertPosition === 'right') {
                    style = style + 'right: ' + (aStack.spacing || parseInt(sAlertComputedStyle.right)) + 'px;';
                }
                alerts = _extends({}, alert, { boxPosition: style });
                _reactDom2.default.unmountComponentAtNode(docElement);
                docElement.parentNode.removeChild(docElement);
            } else if (aOffset && positionTypeTop) {
                alerts = _extends({}, alert, { boxPosition: 'top: ' + parseInt(aOffset) + 'px;' });
            } else if (aOffset && positionTypeBottom) {
                alerts = _extends({}, alert, { boxPosition: 'bottom: ' + parseInt(aOffset) + 'px;' });
            } else {
                alerts = alert;
            }
            return alerts;
        });
    };

    exports.default = getAlertData;
});

/***/ }),

/***/ "./node_modules/react-s-alert/dist/s-alert-parts/s-alert-store.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-s-alert/dist/s-alert-parts/s-alert-store.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var mod; }
})(this, function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _toConsumableArray(arr) {
        if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
                arr2[i] = arr[i];
            }

            return arr2;
        } else {
            return Array.from(arr);
        }
    }

    // custom simple store based on a awesome Redux library https://github.com/rackt/redux

    var createSAlertStore = function createSAlertStore(reducer) {
        var state = void 0;
        var listeners = [];
        var getState = function getState() {
            return state;
        };
        var dispatch = function dispatch(action) {
            state = reducer(state, action);
            listeners.forEach(function (listener) {
                return listener();
            });
        };
        var subscribe = function subscribe(listener) {
            listeners.push(listener);
            return function () {
                listeners = listeners.filter(function (l) {
                    return l !== listener;
                });
            };
        };
        dispatch({});
        return {
            getState: getState, dispatch: dispatch, subscribe: subscribe
        };
    };

    var insert = function insert(state, action) {
        return [].concat(_toConsumableArray(state), [action.data]);
    };

    var remove = function remove(state, action) {
        var elemToRemoveArray = state.slice().filter(function (item) {
            return item.id === action.data.id;
        });
        if (Array.isArray(elemToRemoveArray)) {
            var elemToRemoveIndex = state.indexOf(elemToRemoveArray[0]);
            return [].concat(_toConsumableArray(state.slice(0, elemToRemoveIndex)), _toConsumableArray(state.slice(elemToRemoveIndex + 1)));
        }
        return state;
    };

    var alertsReducer = function alertsReducer() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var action = arguments[1];

        switch (action.type) {
            case 'INSERT':
                return insert(state, action);
            case 'REMOVE':
                return remove(state, action);
            case 'REMOVEALL':
                return [];
            default:
                return state;
        }
    };

    var sAlertStore = createSAlertStore(alertsReducer);

    exports.default = sAlertStore;
});

/***/ }),

/***/ "./node_modules/react-s-alert/dist/s-alert-parts/s-alert-tools.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-s-alert/dist/s-alert-parts/s-alert-tools.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var mod; }
})(this, function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    var actualGlobalConfig = void 0;

    var sAlertTools = {
        randomId: function randomId() {
            return Math.random().toString(36).split('.')[1];
        },
        returnFirstDefined: function returnFirstDefined() {
            var value = void 0;
            var i = void 0;

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            for (i = 0; i < args.length; i++) {
                if (typeof args[i] !== 'undefined') {
                    value = args[i];
                    break;
                }
            }
            return value;
        },
        styleToObj: function styleToObj(input) {
            var result = {},
                i = void 0,
                entry = void 0,
                attributes = input && input.split(';').filter(Boolean);

            for (i = 0; i < attributes.length; i++) {
                entry = attributes[i].split(':');
                result[entry.splice(0, 1)[0].trim()] = entry.join(':').trim();
            }
            return result;
        },
        setGlobalConfig: function setGlobalConfig(config) {
            if ((typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object') {
                actualGlobalConfig = config;
            }
        },
        getGlobalConfig: function getGlobalConfig() {
            return actualGlobalConfig;
        }
    };

    exports.default = sAlertTools;
});

/***/ }),

/***/ "./node_modules/react-s-alert/index.js":
/*!*********************************************!*\
  !*** ./node_modules/react-s-alert/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/SAlert */ "./node_modules/react-s-alert/dist/SAlert.js");

/***/ })

})
//# sourceMappingURL=JobsPage.js.79efbac587e50e57b9f8.hot-update.js.map