"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = BarStackHorizontal;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _group = require("@vx/group");

var _d3Shape = require("d3-shape");

var _stackOrder = _interopRequireDefault(require("../util/stackOrder"));

var _stackOffset = _interopRequireDefault(require("../util/stackOffset"));

var _objHasMethod = _interopRequireDefault(require("../util/objHasMethod"));

var _Bar = _interopRequireDefault(require("./Bar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

BarStackHorizontal.propTypes = {
  data: _propTypes["default"].array.isRequired,
  y: _propTypes["default"].func.isRequired,
  x0: _propTypes["default"].func,
  x1: _propTypes["default"].func,
  xScale: _propTypes["default"].func.isRequired,
  yScale: _propTypes["default"].func.isRequired,
  color: _propTypes["default"].func.isRequired,
  keys: _propTypes["default"].array.isRequired,
  className: _propTypes["default"].string,
  top: _propTypes["default"].number,
  left: _propTypes["default"].number,
  order: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].array, _propTypes["default"].string]),
  offset: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].array, _propTypes["default"].string]),
  value: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].number]),
  children: _propTypes["default"].func
};

function BarStackHorizontal(_ref) {
  var data = _ref.data,
      className = _ref.className,
      top = _ref.top,
      left = _ref.left,
      y = _ref.y,
      _ref$x = _ref.x0,
      x0 = _ref$x === void 0 ? function (d) {
    return d[0];
  } : _ref$x,
      _ref$x2 = _ref.x1,
      x1 = _ref$x2 === void 0 ? function (d) {
    return d[1];
  } : _ref$x2,
      xScale = _ref.xScale,
      yScale = _ref.yScale,
      color = _ref.color,
      keys = _ref.keys,
      value = _ref.value,
      order = _ref.order,
      offset = _ref.offset,
      children = _ref.children,
      restProps = _objectWithoutProperties(_ref, ["data", "className", "top", "left", "y", "x0", "x1", "xScale", "yScale", "color", "keys", "value", "order", "offset", "children"]);

  var stack = (0, _d3Shape.stack)();
  if (keys) stack.keys(keys);
  if (value) stack.value(value);
  if (order) stack.order((0, _stackOrder["default"])(order));
  if (offset) stack.offset((0, _stackOffset["default"])(offset));
  var stacks = stack(data);
  var yRange = yScale.range();
  var yDomain = yScale.domain();
  var barHeight = (0, _objHasMethod["default"])(yScale, 'bandwidth') ? yScale.bandwidth() : Math.abs(yRange[yRange.length - 1] - yRange[0]) / yDomain.length;
  var barStacks = stacks.map(function (barStack, i) {
    var key = barStack.key;
    return {
      index: i,
      key: key,
      bars: barStack.map(function (bar, j) {
        var barWidth = xScale(x1(bar)) - xScale(x0(bar));
        var barX = xScale(x0(bar));
        var barY = (0, _objHasMethod["default"])(yScale, 'bandwidth') ? yScale(y(bar.data)) : Math.max(yScale(y(bar.data)) - barWidth / 2);
        return {
          bar: bar,
          key: key,
          index: j,
          height: barHeight,
          width: barWidth,
          x: barX,
          y: barY,
          color: color(barStack.key, j)
        };
      })
    };
  });
  if (children) return children(barStacks);
  return _react["default"].createElement(_group.Group, {
    className: (0, _classnames["default"])('vx-bar-stack-horizontal', className),
    top: top,
    left: left
  }, barStacks.map(function (barStack) {
    return barStack.bars.map(function (bar) {
      return _react["default"].createElement(_Bar["default"], _extends({
        key: "bar-stack-".concat(barStack.index, "-").concat(bar.index),
        x: bar.x,
        y: bar.y,
        height: bar.height,
        width: bar.width,
        fill: bar.color
      }, restProps));
    });
  }));
}