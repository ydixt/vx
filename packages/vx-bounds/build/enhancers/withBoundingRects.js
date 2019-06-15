"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = withBoundingRects;
exports.withBoundingRectsProps = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

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

var emptyRect = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  width: 0,
  height: 0
};

var rectShape = _propTypes["default"].shape({
  top: _propTypes["default"].number.isRequired,
  right: _propTypes["default"].number.isRequired,
  bottom: _propTypes["default"].number.isRequired,
  left: _propTypes["default"].number.isRequired,
  width: _propTypes["default"].number.isRequired,
  height: _propTypes["default"].number.isRequired
});

var withBoundingRectsProps = {
  getRects: _propTypes["default"].func,
  rect: rectShape,
  parentRect: rectShape
};
exports.withBoundingRectsProps = withBoundingRectsProps;

function withBoundingRects(BaseComponent) {
  var WrappedComponent =
  /*#__PURE__*/
  function (_React$PureComponent) {
    _inherits(WrappedComponent, _React$PureComponent);

    function WrappedComponent(props) {
      var _this;

      _classCallCheck(this, WrappedComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(WrappedComponent).call(this, props));
      _this.state = {
        rect: undefined,
        parentRect: undefined
      };
      _this.getRects = _this.getRects.bind(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(WrappedComponent, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        this.node = _reactDom["default"].findDOMNode(this);
        this.setState(function () {
          return _this2.getRects();
        });
      }
    }, {
      key: "getRects",
      value: function getRects() {
        if (!this.node) return this.state;
        var node = this.node;
        var parentNode = this.node.parentNode;
        var rect = node.getBoundingClientRect ? node.getBoundingClientRect() : emptyRect;
        var parentRect = parentNode && parentNode.getBoundingClientRect ? parentNode.getBoundingClientRect() : emptyRect;
        return {
          rect: rect,
          parentRect: parentRect
        };
      }
    }, {
      key: "render",
      value: function render() {
        return _react["default"].createElement(BaseComponent, _extends({
          getRects: this.getRects
        }, this.state, this.props));
      }
    }]);

    return WrappedComponent;
  }(_react["default"].PureComponent);

  WrappedComponent.propTypes = BaseComponent.propTypes;
  WrappedComponent.defaultProps = BaseComponent.defaultProps;
  WrappedComponent.displayName = "withBoundingRects(".concat(BaseComponent.displayName || '', ")");
  return WrappedComponent;
}