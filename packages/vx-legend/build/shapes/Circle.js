"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ShapeCircle;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _group = require("@vx/group");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

ShapeCircle.propTypes = {
  fill: _propTypes["default"].any,
  width: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  height: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  style: _propTypes["default"].object
};

function ShapeCircle(_ref) {
  var fill = _ref.fill,
      width = _ref.width,
      height = _ref.height,
      style = _ref.style;
  if (typeof width === 'string') width = 0;
  if (typeof height === 'string') height = 0;
  var size = Math.max(width, height);
  var radius = size / 2;
  return _react["default"].createElement("svg", {
    width: size,
    height: size
  }, _react["default"].createElement(_group.Group, {
    top: radius,
    left: radius
  }, _react["default"].createElement("circle", {
    r: radius,
    fill: fill,
    style: style
  })));
}