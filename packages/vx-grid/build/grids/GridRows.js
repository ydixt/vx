"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Rows;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _shape = require("@vx/shape");

var _group = require("@vx/group");

var _point = require("@vx/point");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

Rows.propTypes = {
  top: _propTypes["default"].number,
  left: _propTypes["default"].number,
  className: _propTypes["default"].string,
  stroke: _propTypes["default"].string,
  strokeWidth: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  strokeDasharray: _propTypes["default"].string,
  numTicks: _propTypes["default"].number,
  lineStyle: _propTypes["default"].object,
  offset: _propTypes["default"].number,
  scale: _propTypes["default"].func.isRequired,
  width: _propTypes["default"].number.isRequired,
  tickValues: _propTypes["default"].array
};

function Rows(_ref) {
  var _ref$top = _ref.top,
      top = _ref$top === void 0 ? 0 : _ref$top,
      _ref$left = _ref.left,
      left = _ref$left === void 0 ? 0 : _ref$left,
      scale = _ref.scale,
      width = _ref.width,
      _ref$stroke = _ref.stroke,
      stroke = _ref$stroke === void 0 ? '#eaf0f6' : _ref$stroke,
      _ref$strokeWidth = _ref.strokeWidth,
      strokeWidth = _ref$strokeWidth === void 0 ? 1 : _ref$strokeWidth,
      strokeDasharray = _ref.strokeDasharray,
      className = _ref.className,
      _ref$numTicks = _ref.numTicks,
      numTicks = _ref$numTicks === void 0 ? 10 : _ref$numTicks,
      lineStyle = _ref.lineStyle,
      offset = _ref.offset,
      tickValues = _ref.tickValues,
      restProps = _objectWithoutProperties(_ref, ["top", "left", "scale", "width", "stroke", "strokeWidth", "strokeDasharray", "className", "numTicks", "lineStyle", "offset", "tickValues"]);

  var ticks = scale.ticks ? scale.ticks(numTicks) : scale.domain();
  if (tickValues) ticks = tickValues;
  return _react["default"].createElement(_group.Group, {
    className: (0, _classnames["default"])('vx-rows', className),
    top: top,
    left: left
  }, ticks.map(function (d, i) {
    var y = offset ? scale(d) + offset : scale(d);
    var fromPoint = new _point.Point({
      x: 0,
      y: y
    });
    var toPoint = new _point.Point({
      x: width,
      y: y
    });
    return _react["default"].createElement(_shape.Line, _extends({
      key: "row-line-".concat(d, "-").concat(i),
      from: fromPoint,
      to: toPoint,
      stroke: stroke,
      strokeWidth: strokeWidth,
      strokeDasharray: strokeDasharray,
      style: lineStyle
    }, restProps));
  }));
}