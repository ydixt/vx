"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = AreaStack;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Stack = _interopRequireDefault(require("./Stack"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

AreaStack.propTypes = {
  className: _propTypes["default"].string,
  top: _propTypes["default"].number,
  left: _propTypes["default"].number,
  keys: _propTypes["default"].array,
  data: _propTypes["default"].array,
  curve: _propTypes["default"].func,
  color: _propTypes["default"].func,
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

function AreaStack(_ref) {
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

  return _react["default"].createElement(_Stack["default"], _extends({
    className: className,
    top: top,
    left: left,
    keys: keys,
    data: data,
    curve: curve,
    defined: defined,
    x: x,
    x0: x0,
    x1: x1,
    y0: y0,
    y1: y1,
    value: value,
    order: order,
    offset: offset,
    color: color
  }, restProps), !!children ? children : function (_ref2) {
    var stacks = _ref2.stacks,
        path = _ref2.path,
        stack = _ref2.stack;
    return stacks.map(function (series, i) {
      return _react["default"].createElement("path", _extends({
        className: (0, _classnames["default"])('vx-area-stack', className),
        key: "area-stack-".concat(i, "-").concat(series.key || ''),
        d: path(series),
        fill: color(series.key, i)
      }, restProps));
    });
  });
}