"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _event = require("@vx/event");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Drag =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Drag, _React$Component);

  function Drag(props) {
    var _this;

    _classCallCheck(this, Drag);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Drag).call(this, props));
    _this.state = {
      x: undefined,
      y: undefined,
      dx: 0,
      dy: 0,
      isDragging: false
    };
    _this.dragEnd = _this.dragEnd.bind(_assertThisInitialized(_this));
    _this.dragMove = _this.dragMove.bind(_assertThisInitialized(_this));
    _this.dragStart = _this.dragStart.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Drag, [{
    key: "dragStart",
    value: function dragStart(event) {
      var _this$props = this.props,
          onDragStart = _this$props.onDragStart,
          resetOnStart = _this$props.resetOnStart;
      var _this$state = this.state,
          dx = _this$state.dx,
          dy = _this$state.dy;
      var point = (0, _event.localPoint)(event);

      var nextState = _objectSpread({}, this.state, {
        isDragging: true,
        dx: resetOnStart ? 0 : dx,
        dy: resetOnStart ? 0 : dy,
        x: resetOnStart ? point.x : -dx + point.x,
        y: resetOnStart ? point.y : -dy + point.y
      });

      if (onDragStart) onDragStart(_objectSpread({}, nextState, {
        event: event
      }));
      this.setState(function () {
        return nextState;
      });
    }
  }, {
    key: "dragMove",
    value: function dragMove(event) {
      var onDragMove = this.props.onDragMove;
      var _this$state2 = this.state,
          x = _this$state2.x,
          y = _this$state2.y,
          isDragging = _this$state2.isDragging;
      if (!isDragging) return;
      var point = (0, _event.localPoint)(event);

      var nextState = _objectSpread({}, this.state, {
        isDragging: true,
        dx: -(x - point.x),
        dy: -(y - point.y)
      });

      if (onDragMove) onDragMove(_objectSpread({}, nextState, {
        event: event
      }));
      this.setState(function () {
        return nextState;
      });
    }
  }, {
    key: "dragEnd",
    value: function dragEnd(event) {
      var onDragEnd = this.props.onDragEnd;
      var point = (0, _event.localPoint)(event);

      var nextState = _objectSpread({}, this.state, {
        isDragging: false
      });

      if (onDragEnd) onDragEnd(_objectSpread({}, nextState, {
        event: event
      }));
      this.setState(function () {
        return nextState;
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state3 = this.state,
          x = _this$state3.x,
          y = _this$state3.y,
          dx = _this$state3.dx,
          dy = _this$state3.dy,
          isDragging = _this$state3.isDragging;
      var _this$props2 = this.props,
          children = _this$props2.children,
          width = _this$props2.width,
          height = _this$props2.height,
          captureDragArea = _this$props2.captureDragArea;
      return _react["default"].createElement("g", null, isDragging && captureDragArea && _react["default"].createElement("rect", {
        width: width,
        height: height,
        onMouseMove: this.dragMove,
        onMouseUp: this.dragEnd,
        fill: "transparent"
      }), children({
        x: x,
        y: y,
        dx: dx,
        dy: dy,
        isDragging: isDragging,
        dragEnd: this.dragEnd,
        dragMove: this.dragMove,
        dragStart: this.dragStart
      }));
    }
  }]);

  return Drag;
}(_react["default"].Component);

exports["default"] = Drag;
Drag.propTypes = {
  children: _propTypes["default"].func.isRequired,
  width: _propTypes["default"].number.isRequired,
  height: _propTypes["default"].number.isRequired,
  captureDragArea: _propTypes["default"].bool,
  resetOnStart: _propTypes["default"].bool,
  onDragEnd: _propTypes["default"].func,
  onDragMove: _propTypes["default"].func,
  onDragStart: _propTypes["default"].func
};
Drag.defaultProps = {
  captureDragArea: true,
  resetOnStart: false
};