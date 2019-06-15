"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = AxisBottom;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Axis = _interopRequireDefault(require("./Axis"));

var _orientation = _interopRequireDefault(require("../constants/orientation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var propTypes = {
  /**
   * The class name applied to the outermost axis group element.
   */
  axisClassName: _propTypes["default"].string,

  /**
   * The class name applied to the axis line element.
   */
  axisLineClassName: _propTypes["default"].string,

  /**
   * If true, will hide the axis line.
   */
  hideAxisLine: _propTypes["default"].bool,

  /**
   * If true, will hide the ticks (but not the tick labels).
   */
  hideTicks: _propTypes["default"].bool,

  /**
   * If true, will hide the '0' value tick and tick label.
   */
  hideZero: _propTypes["default"].bool,

  /**
   * The text for the axis label.
   */
  label: _propTypes["default"].string,

  /**
   * The class name applied to the axis label text element.
   */
  labelClassName: _propTypes["default"].string,

  /**
   * Pixel offset of the axis label (does not include tick label font size, which is accounted for automatically)
   */
  labelOffset: _propTypes["default"].number,

  /**
   * Props applied to the axis label component.
   */
  labelProps: _propTypes["default"].object,

  /**
   * A left pixel offset applied to the entire axis.
   */
  left: _propTypes["default"].number,

  /**
   * The number of ticks wanted for the axis (note this is approximate)
   */
  numTicks: _propTypes["default"].number,

  /**
   * Pixel padding to apply to both sides of the axis.
   */
  rangePadding: _propTypes["default"].number,

  /**
   * A [d3](https://github.com/d3/d3-scale) or [vx](https://github.com/hshoff/vx/tree/master/packages/vx-scale) scale function.
   */
  scale: _propTypes["default"].func.isRequired,

  /**
   * The color for the stroke of the lines.
   */
  stroke: _propTypes["default"].string,

  /**
   * The pixel value for the width of the lines.
   */
  strokeWidth: _propTypes["default"].number,

  /**
   * The pattern of dashes in the stroke.
   */
  strokeDasharray: _propTypes["default"].string,

  /**
   * The class name applied to each tick group.
   */
  tickClassName: _propTypes["default"].string,

  /**
   * A [d3 formatter](https://github.com/d3/d3-scale/blob/master/README.md#continuous_tickFormat) for the tick text.
   */
  tickFormat: _propTypes["default"].func,

  /**
   * A function that returns props for a given tick label.
   */
  tickLabelProps: _propTypes["default"].func,

  /**
   * The length of the tick lines.
   */
  tickLength: _propTypes["default"].number,

  /**
   * The color for the tick's stroke value.
   */
  tickStroke: _propTypes["default"].string,

  /**
   * A custom SVG transform value to be applied to each tick group.
   */
  tickTransform: _propTypes["default"].string,

  /**
   * An array of values that determine the number and values of the ticks. Falls back to `scale.ticks()` or `.domain()`.
   */
  tickValues: _propTypes["default"].array,
  tickComponent: _propTypes["default"].func,

  /**
   * A top pixel offset applied to the entire axis.
   */
  top: _propTypes["default"].number,

  /**
   * For more control over rendering or to add event handlers to datum, pass a function as children.
   */
  children: _propTypes["default"].func
};

function AxisBottom(_ref) {
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
      dy: '0.25em',
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
    axisClassName: (0, _classnames["default"])('vx-axis-bottom', axisClassName),
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
    orientation: _orientation["default"].bottom,
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

AxisBottom.propTypes = propTypes;