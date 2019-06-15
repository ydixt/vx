"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = withScreenSize;

var _debounce = _interopRequireDefault(require("lodash/debounce"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function withScreenSize(BaseComponent) {
  var WrappedComponent =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(WrappedComponent, _React$Component);

    function WrappedComponent(props) {
      var _this;

      _classCallCheck(this, WrappedComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(WrappedComponent).call(this, props));
      _this.state = {
        screenWidth: null,
        screenHeight: null
      };
      _this.handleResize = (0, _debounce["default"])(_this.resize.bind(_assertThisInitialized(_this)), props.windowResizeDebounceTime).bind(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(WrappedComponent, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        window.addEventListener('resize', this.handleResize, false);
        this.resize();
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize, false);
      }
    }, {
      key: "resize",
      value: function resize(event) {
        this.setState(function (prevState, props) {
          return {
            screenWidth: window.innerWidth,
            screenHeight: window.innerHeight
          };
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _this$state = this.state,
            screenWidth = _this$state.screenWidth,
            screenHeight = _this$state.screenHeight;
        if (!screenWidth && !screenHeight) return null;
        return _react["default"].createElement(BaseComponent, _extends({
          screenWidth: screenWidth,
          screenHeight: screenHeight
        }, this.props));
      }
    }]);

    return WrappedComponent;
  }(_react["default"].Component);

  WrappedComponent.defaultProps = {
    windowResizeDebounceTime: 300
  };
  return WrappedComponent;
}