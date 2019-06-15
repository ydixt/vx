"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = LinePath;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _d3Shape = require("d3-shape");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

LinePath.propTypes = {
  data: _propTypes["default"].array,
  curve: _propTypes["default"].func,
  innerRef: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].object]),
  defined: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].bool]),
  x: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].number]),
  y: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].number])
};

function LinePath(_ref) {
  var children = _ref.children,
      data = _ref.data,
      x = _ref.x,
      y = _ref.y,
      _ref$fill = _ref.fill,
      fill = _ref$fill === void 0 ? 'transparent' : _ref$fill,
      className = _ref.className,
      curve = _ref.curve,
      innerRef = _ref.innerRef,
      _ref$defined = _ref.defined,
      defined = _ref$defined === void 0 ? function () {
    return true;
  } : _ref$defined,
      restProps = _objectWithoutProperties(_ref, ["children", "data", "x", "y", "fill", "className", "curve", "innerRef", "defined"]);

  var path = (0, _d3Shape.line)();
  if (x) path.x(x);
  if (y) path.y(y);
  if (defined) path.defined(defined);
  if (curve) path.curve(curve);
  if (children) return children({
    path: path
  });
  return _react["default"].createElement("path", _extends({
    ref: innerRef,
    className: (0, _classnames["default"])('vx-linepath', className),
    d: path(data),
    fill: fill
  }, restProps));
}