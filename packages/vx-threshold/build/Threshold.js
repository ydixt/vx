"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Threshold;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _shape = require("@vx/shape");

var _clipPath = require("@vx/clip-path");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

Threshold.propTypes = {
  className: _propTypes["default"].string,
  curve: _propTypes["default"].func,
  clipAboveTo: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].number]),
  clipBelowTo: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].number]),
  id: _propTypes["default"].string,
  data: _propTypes["default"].any.isRequired,
  x: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].number]).isRequired,
  y0: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].number]).isRequired,
  y1: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].number]).isRequired,
  aboveAreaProps: _propTypes["default"].object,
  belowAreaProps: _propTypes["default"].object
};

function Threshold(_ref) {
  var className = _ref.className,
      curve = _ref.curve,
      clipAboveTo = _ref.clipAboveTo,
      clipBelowTo = _ref.clipBelowTo,
      data = _ref.data,
      x = _ref.x,
      y0 = _ref.y0,
      y1 = _ref.y1,
      aboveAreaProps = _ref.aboveAreaProps,
      belowAreaProps = _ref.belowAreaProps,
      _ref$id = _ref.id,
      id = _ref$id === void 0 ? '' : _ref$id;
  return _react["default"].createElement("g", {
    className: (0, _classnames["default"])('vx-threshold', className)
  }, _react["default"].createElement(_shape.Area, {
    curve: curve,
    data: data,
    x: x,
    y1: y1
  }, function (_ref2) {
    var path = _ref2.path;
    return _react["default"].createElement("g", null, _react["default"].createElement(_clipPath.ClipPath, {
      id: "threshold-clip-below-".concat(id)
    }, _react["default"].createElement("path", {
      d: path.y0(clipBelowTo)(data)
    })), _react["default"].createElement(_clipPath.ClipPath, {
      id: "threshold-clip-above-".concat(id)
    }, _react["default"].createElement("path", {
      d: path.y0(clipAboveTo)(data)
    })));
  }), _react["default"].createElement(_shape.Area, _extends({
    curve: curve,
    data: data,
    x: x,
    y0: y0,
    y1: y1,
    strokeWidth: 0,
    clipPath: "url(#threshold-clip-below-".concat(id, ")")
  }, belowAreaProps)), _react["default"].createElement(_shape.Area, _extends({
    curve: curve,
    data: data,
    x: x,
    y0: y0,
    y1: y1,
    strokeWidth: 0,
    clipPath: "url(#threshold-clip-above-".concat(id, ")")
  }, aboveAreaProps)));
}