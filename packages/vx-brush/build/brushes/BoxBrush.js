"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _default = function _default(props) {
  var brush = props.brush,
      className = props.className,
      _props$fill = props.fill,
      fill = _props$fill === void 0 ? 'rgba(102, 181, 245, 0.1)' : _props$fill,
      _props$stroke = props.stroke,
      stroke = _props$stroke === void 0 ? 'rgba(102, 181, 245, 1)' : _props$stroke,
      _props$strokeWidth = props.strokeWidth,
      strokeWidth = _props$strokeWidth === void 0 ? 1 : _props$strokeWidth,
      otherProps = _objectWithoutProperties(props, ["brush", "className", "fill", "stroke", "strokeWidth"]);

  var start = brush.start,
      end = brush.end,
      isBrushing = brush.isBrushing;
  if (!start) return null;
  if (!end) return null;
  var x = end.x > start.x ? start.x : end.x;
  var y = end.y > start.y ? start.y : end.y;
  var width = Math.abs(start.x - end.x);
  var height = Math.abs(start.y - end.y);
  return _react["default"].createElement("g", {
    className: (0, _classnames["default"])('vx-brush', className)
  }, isBrushing && _react["default"].createElement("rect", _extends({
    fill: fill,
    stroke: stroke,
    strokeWidth: strokeWidth,
    x: x,
    y: y,
    width: width,
    height: height
  }, otherProps)));
};

exports["default"] = _default;