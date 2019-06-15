"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = AxisTop;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Axis = _interopRequireDefault(require("./Axis"));

var _orientation = _interopRequireDefault(require("../constants/orientation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var propTypes = {
  axisClassName: _propTypes["default"].string,
  axisLineClassName: _propTypes["default"].string,
  hideAxisLine: _propTypes["default"].bool,
  hideTicks: _propTypes["default"].bool,
  hideZero: _propTypes["default"].bool,
  label: _propTypes["default"].string,
  labelClassName: _propTypes["default"].string,
  labelOffset: _propTypes["default"].number,
  labelProps: _propTypes["default"].object,
  left: _propTypes["default"].number,
  numTicks: _propTypes["default"].number,
  rangePadding: _propTypes["default"].number,
  scale: _propTypes["default"].func.isRequired,
  stroke: _propTypes["default"].string,
  strokeWidth: _propTypes["default"].number,
  strokeDasharray: _propTypes["default"].string,
  tickClassName: _propTypes["default"].string,
  tickFormat: _propTypes["default"].func,
  tickLabelProps: _propTypes["default"].func,
  tickLength: _propTypes["default"].number,
  tickStroke: _propTypes["default"].string,
  tickTransform: _propTypes["default"].string,
  tickValues: _propTypes["default"].array,
  tickComponent: _propTypes["default"].func,
  top: _propTypes["default"].number,
  children: _propTypes["default"].func
};

function AxisTop(_ref) {
  var children = _ref.children,
      axisClassName = _ref.axisClassName,
      axisLineClassName = _ref.axisLineClassName,
      hideAxisLine = _ref.hideAxisLine,
      hideTicks = _ref.hideTicks,
      hideZero = _ref.hideZero,
      label = _ref.label,
      labelClassName = _ref.labelClassName,
      _ref$labelOffset = _ref.labelOffset,
      labelOffset = _ref$labelOffset === void 0 ? 8 : _ref$labelOffset,
      labelProps = _ref.labelProps,
      left = _ref.left,
      numTicks = _ref.numTicks,
      rangePadding = _ref.rangePadding,
      scale = _ref.scale,
      stroke = _ref.stroke,
      strokeWidth = _ref.strokeWidth,
      strokeDasharray = _ref.strokeDasharray,
      tickClassName = _ref.tickClassName,
      tickFormat = _ref.tickFormat,
      _ref$tickLabelProps = _ref.tickLabelProps,
      tickLabelProps = _ref$tickLabelProps === void 0 ? function (_ref2) {
    var tick = _ref2.tick,
        index = _ref2.index;
    return {
      dy: '-0.25em',
      fill: 'black',
      fontFamily: 'Arial',
      fontSize: 10,
      textAnchor: 'middle'
    };
  } : _ref$tickLabelProps,
      _ref$tickLength = _ref.tickLength,
      tickLength = _ref$tickLength === void 0 ? 8 : _ref$tickLength,
      tickStroke = _ref.tickStroke,
      tickTransform = _ref.tickTransform,
      tickValues = _ref.tickValues,
      tickComponent = _ref.tickComponent,
      top = _ref.top;
  return _react["default"].createElement(_Axis["default"], {
    axisClassName: (0, _classnames["default"])('vx-axis-top', axisClassName),
    axisLineClassName: axisLineClassName,
    hideAxisLine: hideAxisLine,
    hideTicks: hideTicks,
    hideZero: hideZero,
    label: label,
    labelClassName: labelClassName,
    labelOffset: labelOffset,
    labelProps: labelProps,
    left: left,
    numTicks: numTicks,
    orientation: _orientation["default"].top,
    rangePadding: rangePadding,
    scale: scale,
    stroke: stroke,
    strokeWidth: strokeWidth,
    strokeDasharray: strokeDasharray,
    tickClassName: tickClassName,
    tickFormat: tickFormat,
    tickLabelProps: tickLabelProps,
    tickLength: tickLength,
    tickStroke: tickStroke,
    tickTransform: tickTransform,
    tickValues: tickValues,
    tickComponent: tickComponent,
    top: top,
    children: children
  });
}

AxisTop.propTypes = propTypes;