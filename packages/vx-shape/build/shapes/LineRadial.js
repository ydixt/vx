"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = LineRadial;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _d3Shape = require("d3-shape");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

LineRadial.propTypes = {
  className: _propTypes["default"].string,
  data: _propTypes["default"].any,
  curve: _propTypes["default"].func,
  angle: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].number]),
  radius: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].number]),
  innerRef: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].object])
};

function LineRadial(_ref) {
  var className = _ref.className,
      angle = _ref.angle,
      radius = _ref.radius,
      defined = _ref.defined,
      curve = _ref.curve,
      data = _ref.data,
      innerRef = _ref.innerRef,
      children = _ref.children,
      _ref$fill = _ref.fill,
      fill = _ref$fill === void 0 ? 'transparent' : _ref$fill,
      restProps = _objectWithoutProperties(_ref, ["className", "angle", "radius", "defined", "curve", "data", "innerRef", "children", "fill"]);

  var path = (0, _d3Shape.radialLine)();
  if (angle) path.angle(angle);
  if (radius) path.radius(radius);
  if (defined) path.defined(defined);
  if (curve) path.curve(curve);
  if (children) return children({
    path: path
  });
  return _react["default"].createElement("path", _extends({
    ref: innerRef,
    className: (0, _classnames["default"])('vx-line-radial', className),
    d: path(data),
    fill: fill
  }, restProps));
}