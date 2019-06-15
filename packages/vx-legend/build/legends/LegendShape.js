"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = LegendShape;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Rect = _interopRequireDefault(require("../shapes/Rect"));

var _renderShape = _interopRequireDefault(require("../util/renderShape"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

LegendShape.propTypes = {
  shape: _propTypes["default"].any,
  width: _propTypes["default"].any,
  height: _propTypes["default"].any,
  margin: _propTypes["default"].any,
  label: _propTypes["default"].any,
  fill: _propTypes["default"].any,
  size: _propTypes["default"].any,
  shapeStyle: _propTypes["default"].any
};

function LegendShape(_ref) {
  var _ref$shape = _ref.shape,
      shape = _ref$shape === void 0 ? _Rect["default"] : _ref$shape,
      width = _ref.width,
      height = _ref.height,
      margin = _ref.margin,
      label = _ref.label,
      fill = _ref.fill,
      size = _ref.size,
      shapeStyle = _ref.shapeStyle;
  return _react["default"].createElement("div", {
    className: "vx-legend-shape",
    style: {
      display: 'flex',
      width: !!size ? size(_objectSpread({}, label)) : width,
      height: !!size ? size(_objectSpread({}, label)) : height,
      margin: margin
    }
  }, (0, _renderShape["default"])({
    shape: shape,
    label: label,
    width: width,
    height: height,
    fill: fill,
    shapeStyle: shapeStyle
  }));
}