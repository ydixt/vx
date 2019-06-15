"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = PatternWaves;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Path = _interopRequireDefault(require("./Path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function PatternWaves(_ref) {
  var id = _ref.id,
      width = _ref.width,
      height = _ref.height,
      fill = _ref.fill,
      stroke = _ref.stroke,
      strokeWidth = _ref.strokeWidth,
      strokeDasharray = _ref.strokeDasharray,
      strokeLinecap = _ref.strokeLinecap,
      shapeRendering = _ref.shapeRendering,
      background = _ref.background,
      className = _ref.className;
  return _react["default"].createElement(_Path["default"], {
    className: (0, _classnames["default"])('vx-pattern-wave', className),
    path: "M 0 ".concat(height / 2, " c ").concat(height / 8, " ").concat(-height / 4, " , ").concat(height * 3 / 8, " ").concat(-height / 4, " , ").concat(height / 2, " 0\n             c ").concat(height / 8, " ").concat(height / 4, " , ").concat(height * 3 / 8, " ").concat(height / 4, " , ").concat(height / 2, " 0 M ").concat(-height / 2, " ").concat(height / 2, "\n             c ").concat(height / 8, " ").concat(height / 4, " , ").concat(height * 3 / 8, " ").concat(height / 4, " , ").concat(height / 2, " 0 M ").concat(height, " ").concat(height / 2, "\n             c ").concat(height / 8, " ").concat(-height / 4, " , ").concat(height * 3 / 8, " ").concat(-height / 4, " , ").concat(height / 2, " 0"),
    id: id,
    width: width,
    height: height,
    fill: fill,
    stroke: stroke,
    strokeWidth: strokeWidth,
    strokeDasharray: strokeDasharray,
    strokeLinecap: strokeLinecap,
    shapeRendering: shapeRendering,
    background: background
  });
}

PatternWaves.propTypes = {
  id: _propTypes["default"].string.isRequired,
  width: _propTypes["default"].number.isRequired,
  height: _propTypes["default"].number.isRequired,
  fill: _propTypes["default"].string,
  className: _propTypes["default"].string,
  background: _propTypes["default"].string,
  stroke: _propTypes["default"].string,
  strokeWidth: _propTypes["default"].number,
  strokeDasharray: _propTypes["default"].string,
  strokeLinecap: _propTypes["default"].string,
  shapeRendering: _propTypes["default"].string
};