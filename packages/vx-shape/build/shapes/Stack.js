"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Stack;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _group = require("@vx/group");

var _d3Shape = require("d3-shape");

var _stackOrder = _interopRequireDefault(require("../util/stackOrder"));

var _stackOffset = _interopRequireDefault(require("../util/stackOffset"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

Stack.propTypes = {
  data: _propTypes["default"].array.isRequired,
  className: _propTypes["default"].string,
  top: _propTypes["default"].number,
  left: _propTypes["default"].number,
  curve: _propTypes["default"].func,
  color: _propTypes["default"].func,
  keys: _propTypes["default"].array,
  children: _propTypes["default"].func,
  x: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].number]),
  x0: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].number]),
  x1: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].number]),
  y: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].number]),
  y0: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].number]),
  y1: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].number]),
  value: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].number]),
  defined: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].bool]),
  order: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].array, _propTypes["default"].string]),
  offset: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].array, _propTypes["default"].string])
};

function Stack(_ref) {
  var className = _ref.className,
      top = _ref.top,
      left = _ref.left,
      keys = _ref.keys,
      data = _ref.data,
      curve = _ref.curve,
      defined = _ref.defined,
      x = _ref.x,
      x0 = _ref.x0,
      x1 = _ref.x1,
      y0 = _ref.y0,
      y1 = _ref.y1,
      value = _ref.value,
      order = _ref.order,
      offset = _ref.offset,
      color = _ref.color,
      children = _ref.children,
      restProps = _objectWithoutProperties(_ref, ["className", "top", "left", "keys", "data", "curve", "defined", "x", "x0", "x1", "y0", "y1", "value", "order", "offset", "color", "children"]);

  var stack = (0, _d3Shape.stack)();
  if (keys) stack.keys(keys);
  if (value) stack.value(value);
  if (order) stack.order((0, _stackOrder["default"])(order));
  if (offset) stack.offset((0, _stackOffset["default"])(offset));
  var path = (0, _d3Shape.area)();
  if (x) path.x(x);
  if (x0) path.x0(x0);
  if (x1) path.x1(x1);
  if (y0) path.y0(y0);
  if (y1) path.y1(y1);
  if (curve) path.curve(curve);
  if (defined) path.defined(defined);
  var stacks = stack(data);
  if (children) return children({
    stacks: stacks,
    path: path,
    stack: stack
  });
  return _react["default"].createElement(_group.Group, {
    top: top,
    left: left
  }, stacks.map(function (series, i) {
    return _react["default"].createElement("path", _extends({
      className: (0, _classnames["default"])('vx-stack', className),
      key: "stack-".concat(i, "-").concat(series.key || ''),
      d: path(series),
      fill: color(series.key, i)
    }, restProps));
  }));
}