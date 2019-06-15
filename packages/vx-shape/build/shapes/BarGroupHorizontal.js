"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = BarGroupHorizontal;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _group = require("@vx/group");

var _objHasMethod = _interopRequireDefault(require("../util/objHasMethod"));

var _Bar = _interopRequireDefault(require("./Bar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

BarGroupHorizontal.propTypes = {
  data: _propTypes["default"].array.isRequired,
  y0: _propTypes["default"].func.isRequired,
  y0Scale: _propTypes["default"].func.isRequired,
  y1Scale: _propTypes["default"].func.isRequired,
  xScale: _propTypes["default"].func.isRequired,
  color: _propTypes["default"].func.isRequired,
  keys: _propTypes["default"].array.isRequired,
  width: _propTypes["default"].number.isRequired,
  className: _propTypes["default"].string,
  x: _propTypes["default"].func,
  top: _propTypes["default"].number,
  left: _propTypes["default"].number,
  children: _propTypes["default"].func
};

function BarGroupHorizontal(_ref) {
  var data = _ref.data,
      className = _ref.className,
      top = _ref.top,
      left = _ref.left,
      _ref$x = _ref.x,
      x = _ref$x === void 0 ? function (val) {
    return 0;
  } : _ref$x,
      y0 = _ref.y0,
      y0Scale = _ref.y0Scale,
      y1Scale = _ref.y1Scale,
      xScale = _ref.xScale,
      color = _ref.color,
      keys = _ref.keys,
      width = _ref.width,
      children = _ref.children,
      restProps = _objectWithoutProperties(_ref, ["data", "className", "top", "left", "x", "y0", "y0Scale", "y1Scale", "xScale", "color", "keys", "width", "children"]);

  var y1Range = y1Scale.range();
  var y1Domain = y1Scale.domain();
  var barHeight = (0, _objHasMethod["default"])(y1Scale, 'bandwidth') ? y1Scale.bandwidth() : Math.abs(y1Range[y1Range.length - 1] - y1Range[0]) / y1Domain.length;
  var barGroups = data.map(function (group, i) {
    return {
      index: i,
      y0: y0Scale(y0(group)),
      bars: keys.map(function (key, j) {
        var value = group[key];
        return {
          index: j,
          key: key,
          value: value,
          height: barHeight,
          x: x(value),
          y: y1Scale(key),
          color: color(key, j),
          width: width - xScale(value)
        };
      })
    };
  });
  if (children) return children(barGroups);
  return _react["default"].createElement(_group.Group, {
    className: (0, _classnames["default"])('vx-bar-group-horizontal', className),
    top: top,
    left: left
  }, barGroups.map(function (barGroup) {
    return _react["default"].createElement(_group.Group, {
      key: "bar-group-".concat(barGroup.index, "-").concat(barGroup.y0),
      top: barGroup.y0
    }, barGroup.bars.map(function (bar) {
      return _react["default"].createElement(_Bar["default"], _extends({
        key: "bar-group-bar-".concat(barGroup.index, "-").concat(bar.index, "-").concat(bar.value, "-").concat(bar.key),
        x: bar.x,
        y: bar.y,
        width: bar.width,
        height: bar.height,
        fill: bar.color
      }, restProps));
    }));
  }));
}