"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Axis;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _shape = require("@vx/shape");

var _point = require("@vx/point");

var _group = require("@vx/group");

var _text = require("@vx/text");

var _center = _interopRequireDefault(require("../utils/center"));

var _identity = _interopRequireDefault(require("../utils/identity"));

var _labelTransform = _interopRequireDefault(require("../utils/labelTransform"));

var _orientation = _interopRequireDefault(require("../constants/orientation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  orientation: _propTypes["default"].oneOf([_orientation["default"].top, _orientation["default"].right, _orientation["default"].bottom, _orientation["default"].left]),
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

function Axis(_ref) {
  var children = _ref.children,
      axisClassName = _ref.axisClassName,
      axisLineClassName = _ref.axisLineClassName,
      _ref$hideAxisLine = _ref.hideAxisLine,
      hideAxisLine = _ref$hideAxisLine === void 0 ? false : _ref$hideAxisLine,
      _ref$hideTicks = _ref.hideTicks,
      hideTicks = _ref$hideTicks === void 0 ? false : _ref$hideTicks,
      _ref$hideZero = _ref.hideZero,
      hideZero = _ref$hideZero === void 0 ? false : _ref$hideZero,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? '' : _ref$label,
      labelClassName = _ref.labelClassName,
      _ref$labelOffset = _ref.labelOffset,
      labelOffset = _ref$labelOffset === void 0 ? 14 : _ref$labelOffset,
      _ref$labelProps = _ref.labelProps,
      labelProps = _ref$labelProps === void 0 ? {
    textAnchor: 'middle',
    fontFamily: 'Arial',
    fontSize: 10,
    fill: 'black'
  } : _ref$labelProps,
      _ref$left = _ref.left,
      left = _ref$left === void 0 ? 0 : _ref$left,
      _ref$numTicks = _ref.numTicks,
      numTicks = _ref$numTicks === void 0 ? 10 : _ref$numTicks,
      _ref$orientation = _ref.orientation,
      orientation = _ref$orientation === void 0 ? _orientation["default"].bottom : _ref$orientation,
      _ref$rangePadding = _ref.rangePadding,
      rangePadding = _ref$rangePadding === void 0 ? 0 : _ref$rangePadding,
      scale = _ref.scale,
      _ref$stroke = _ref.stroke,
      stroke = _ref$stroke === void 0 ? 'black' : _ref$stroke,
      _ref$strokeWidth = _ref.strokeWidth,
      strokeWidth = _ref$strokeWidth === void 0 ? 1 : _ref$strokeWidth,
      strokeDasharray = _ref.strokeDasharray,
      tickClassName = _ref.tickClassName,
      tickFormat = _ref.tickFormat,
      _ref$tickLabelProps = _ref.tickLabelProps,
      tickLabelProps = _ref$tickLabelProps === void 0 ? function (tickValue, index) {
    return {
      textAnchor: 'middle',
      fontFamily: 'Arial',
      fontSize: 10,
      fill: 'black'
    };
  } : _ref$tickLabelProps,
      _ref$tickLength = _ref.tickLength,
      tickLength = _ref$tickLength === void 0 ? 8 : _ref$tickLength,
      _ref$tickStroke = _ref.tickStroke,
      tickStroke = _ref$tickStroke === void 0 ? 'black' : _ref$tickStroke,
      tickTransform = _ref.tickTransform,
      tickValues = _ref.tickValues,
      tickComponent = _ref.tickComponent,
      _ref$top = _ref.top,
      top = _ref$top === void 0 ? 0 : _ref$top;
  var values = scale.ticks ? scale.ticks(numTicks) : scale.domain();
  if (tickValues) values = tickValues;
  var format = scale.tickFormat ? scale.tickFormat() : _identity["default"];
  if (tickFormat) format = tickFormat;
  var range = scale.range();
  var range0 = range[0] + 0.5 - rangePadding;
  var range1 = range[range.length - 1] + 0.5 + rangePadding;
  var horizontal = orientation !== _orientation["default"].left && orientation !== _orientation["default"].right;
  var isLeft = orientation === _orientation["default"].left;
  var isTop = orientation === _orientation["default"].top;
  var tickSign = isLeft || isTop ? -1 : 1;
  var position = (scale.bandwidth ? _center["default"] : _identity["default"])(scale.copy());
  var axisFromPoint = new _point.Point({
    x: horizontal ? range0 : 0,
    y: horizontal ? 0 : range0
  });
  var axisToPoint = new _point.Point({
    x: horizontal ? range1 : 0,
    y: horizontal ? 0 : range1
  });
  var tickLabelFontSize = 10; // track the max tick label size to compute label offset

  if (!!children) {
    return _react["default"].createElement(_group.Group, {
      className: (0, _classnames["default"])('vx-axis', axisClassName),
      top: top,
      left: left
    }, children({
      axisFromPoint: axisFromPoint,
      axisToPoint: axisToPoint,
      horizontal: horizontal,
      tickSign: tickSign,
      numTicks: numTicks,
      label: label,
      rangePadding: rangePadding,
      tickLength: tickLength,
      tickFormat: format,
      tickPosition: position,
      ticks: values.map(function (value, index) {
        var from = new _point.Point({
          x: horizontal ? position(value) : 0,
          y: horizontal ? 0 : position(value)
        });
        var to = new _point.Point({
          x: horizontal ? position(value) : tickSign * tickLength,
          y: horizontal ? tickLength * tickSign : position(value)
        });
        return {
          value: value,
          index: index,
          from: from,
          to: to,
          formattedValue: format(value, index)
        };
      })
    }));
  }

  return _react["default"].createElement(_group.Group, {
    className: (0, _classnames["default"])('vx-axis', axisClassName),
    top: top,
    left: left
  }, values.map(function (val, index) {
    if (hideZero && val === 0) return null;
    var tickFromPoint = new _point.Point({
      x: horizontal ? position(val) : 0,
      y: horizontal ? 0 : position(val)
    });
    var tickToPoint = new _point.Point({
      x: horizontal ? position(val) : tickSign * tickLength,
      y: horizontal ? tickLength * tickSign : position(val)
    });
    var tickLabelPropsObj = tickLabelProps(val, index);
    tickLabelFontSize = Math.max(tickLabelFontSize, tickLabelPropsObj.fontSize || 0);
    return _react["default"].createElement(_group.Group, {
      key: "vx-tick-".concat(val, "-").concat(index),
      className: (0, _classnames["default"])('vx-axis-tick', tickClassName),
      transform: tickTransform
    }, !hideTicks && _react["default"].createElement(_shape.Line, {
      from: tickFromPoint,
      to: tickToPoint,
      stroke: tickStroke
    }), tickComponent ? tickComponent(_objectSpread({
      x: tickToPoint.x,
      y: tickToPoint.y + (horizontal && !isTop ? tickLabelFontSize : 0),
      formattedValue: format(val, index)
    }, tickLabelPropsObj)) : _react["default"].createElement(_text.Text, _extends({
      x: tickToPoint.x,
      y: tickToPoint.y + (horizontal && !isTop ? tickLabelFontSize : 0)
    }, tickLabelPropsObj), format(val, index)));
  }), !hideAxisLine && _react["default"].createElement(_shape.Line, {
    className: (0, _classnames["default"])('vx-axis-line', axisLineClassName),
    from: axisFromPoint,
    to: axisToPoint,
    stroke: stroke,
    strokeWidth: strokeWidth,
    strokeDasharray: strokeDasharray
  }), label && _react["default"].createElement(_text.Text, _extends({
    className: (0, _classnames["default"])('vx-axis-label', labelClassName)
  }, (0, _labelTransform["default"])({
    labelOffset: labelOffset,
    labelProps: labelProps,
    orientation: orientation,
    range: range,
    tickLabelFontSize: tickLabelFontSize,
    tickLength: tickLength
  }), labelProps), label));
}

Axis.propTypes = propTypes;