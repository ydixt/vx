"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = PatternPath;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Pattern = _interopRequireDefault(require("./Pattern"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function PatternPath(_ref) {
  var id = _ref.id,
      width = _ref.width,
      height = _ref.height,
      path = _ref.path,
      _ref$fill = _ref.fill,
      fill = _ref$fill === void 0 ? 'transparent' : _ref$fill,
      stroke = _ref.stroke,
      strokeWidth = _ref.strokeWidth,
      strokeDasharray = _ref.strokeDasharray,
      _ref$strokeLinecap = _ref.strokeLinecap,
      strokeLinecap = _ref$strokeLinecap === void 0 ? 'square' : _ref$strokeLinecap,
      _ref$shapeRendering = _ref.shapeRendering,
      shapeRendering = _ref$shapeRendering === void 0 ? 'auto' : _ref$shapeRendering,
      background = _ref.background,
      className = _ref.className;
  return _react["default"].createElement(_Pattern["default"], {
    id: id,
    width: width,
    height: height
  }, !!background && _react["default"].createElement("rect", {
    width: width,
    height: height,
    fill: background
  }), _react["default"].createElement("path", {
    className: (0, _classnames["default"])('vx-pattern-path', className),
    d: path,
    fill: fill,
    stroke: stroke,
    strokeWidth: strokeWidth,
    strokeDasharray: strokeDasharray,
    strokeLinecap: strokeLinecap,
    shapeRendering: shapeRendering
  }));
}

PatternPath.propTypes = {
  id: _propTypes["default"].string.isRequired,
  width: _propTypes["default"].number.isRequired,
  height: _propTypes["default"].number.isRequired,
  path: _propTypes["default"].string,
  fill: _propTypes["default"].string,
  className: _propTypes["default"].string,
  background: _propTypes["default"].string,
  stroke: _propTypes["default"].string,
  strokeWidth: _propTypes["default"].number,
  strokeDasharray: _propTypes["default"].string,
  strokeLinecap: _propTypes["default"].string,
  shapeRendering: _propTypes["default"].string
};