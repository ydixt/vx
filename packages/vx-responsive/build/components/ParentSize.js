"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _debounce = _interopRequireDefault(require("lodash/debounce"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _resizeObserverPolyfill = _interopRequireDefault(require("resize-observer-polyfill"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ParentSize =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ParentSize, _React$Component);

  function ParentSize(props) {
    var _this;

    _classCallCheck(this, ParentSize);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ParentSize).call(this, props));
    _this.state = {
      width: 0,
      height: 0,
      top: 0,
      left: 0
    };
    _this.resize = (0, _debounce["default"])(_this.resize.bind(_assertThisInitialized(_this)), props.debounceTime);
    _this.setTarget = _this.setTarget.bind(_assertThisInitialized(_this));
    _this.animationFrameID = null;
    return _this;
  }

  _createClass(ParentSize, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.ro = new _resizeObserverPolyfill["default"](function () {
        var entries = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var observer = arguments.length > 1 ? arguments[1] : undefined;
        entries.forEach(function (entry) {
          var _entry$contentRect = entry.contentRect,
              left = _entry$contentRect.left,
              top = _entry$contentRect.top,
              width = _entry$contentRect.width,
              height = _entry$contentRect.height;
          _this2.animationFrameID = window.requestAnimationFrame(function () {
            _this2.resize({
              width: width,
              height: height,
              top: top,
              left: left
            });
          });
        });
      });
      this.ro.observe(this.target);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.cancelAnimationFrame(this.animationFrameID);
      this.ro.disconnect();
    }
  }, {
    key: "resize",
    value: function resize(_ref) {
      var width = _ref.width,
          height = _ref.height,
          top = _ref.top,
          left = _ref.left;
      this.setState(function () {
        return {
          width: width,
          height: height,
          top: top,
          left: left
        };
      });
    }
  }, {
    key: "setTarget",
    value: function setTarget(ref) {
      this.target = ref;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          debounceTime = _this$props.debounceTime,
          restProps = _objectWithoutProperties(_this$props, ["className", "children", "debounceTime"]);

      return _react["default"].createElement("div", _extends({
        style: {
          width: '100%',
          height: '100%'
        },
        ref: this.setTarget,
        className: className
      }, restProps), children(_objectSpread({}, this.state, {
        ref: this.target,
        resize: this.resize
      })));
    }
  }]);

  return ParentSize;
}(_react["default"].Component);

exports["default"] = ParentSize;
ParentSize.defaultProps = {
  debounceTime: 300
};
ParentSize.propTypes = {
  className: _propTypes["default"].string,
  children: _propTypes["default"].func.isRequired,
  debounceTime: _propTypes["default"].number
};