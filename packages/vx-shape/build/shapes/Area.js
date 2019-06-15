"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Area;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _d3Shape = require("d3-shape");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

Area.propTypes = {
  children: _propTypes["default"].func,
  className: _propTypes["default"].string,
  data: _propTypes["default"].any,
  defined: _propTypes["default"].func,
  curve: _propTypes["default"].func,
  innerRef: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].object]),
  x: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].number]),
  x0: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].number]),
  x1: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].number]),
  y: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].number]),
  y0: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].number]),
  y1: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].number])
};

function Area(_ref) {
  var children = _ref.children,
      x = _ref.x,
      x0 = _ref.x0,
      x1 = _ref.x1,
      y = _ref.y,
      y0 = _ref.y0,
      y1 = _ref.y1,
      data = _ref.data,
      _ref$defined = _ref.defined,
      defined = _ref$defined === void 0 ? function () {
    return true;
  } : _ref$defined,
      className = _ref.className,
      curve = _ref.curve,
      innerRef = _ref.innerRef,
      restProps = _objectWithoutProperties(_ref, ["children", "x", "x0", "x1", "y", "y0", "y1", "data", "defined", "className", "curve", "innerRef"]);

  var path = (0, _d3Shape.area)();
  if (x) path.x(x);
  if (x0) path.x0(x0);
  if (x1) path.x1(x1);
  if (y) path.y(y);
  if (y0) path.y0(y0);
  if (y1) path.y1(y1);
  if (defined) path.defined(defined);
  if (curve) path.curve(curve);
  if (children) return children({
    path: path
  });
  return _react["default"].createElement("g", null, _react["default"].createElement("path", _extends({
    ref: innerRef,
    className: (0, _classnames["default"])('vx-area', className),
    d: path(data)
  }, restProps)));
}