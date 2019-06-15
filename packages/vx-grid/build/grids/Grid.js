"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Grid;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _group = require("@vx/group");

var _GridRows = _interopRequireDefault(require("./GridRows"));

var _GridColumns = _interopRequireDefault(require("./GridColumns"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

Grid.propTypes = {
  top: _propTypes["default"].number,
  left: _propTypes["default"].number,
  className: _propTypes["default"].string,
  stroke: _propTypes["default"].string,
  strokeWidth: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  strokeDasharray: _propTypes["default"].string,
  numTicksRows: _propTypes["default"].number,
  numTicksColumns: _propTypes["default"].number,
  rowLineStyle: _propTypes["default"].object,
  columnLineStyle: _propTypes["default"].object,
  xOffset: _propTypes["default"].number,
  yOffset: _propTypes["default"].number,
  xScale: _propTypes["default"].func.isRequired,
  yScale: _propTypes["default"].func.isRequired,
  height: _propTypes["default"].number.isRequired,
  width: _propTypes["default"].number.isRequired,
  rowTickValues: _propTypes["default"].array,
  columnTickValues: _propTypes["default"].array
};

function Grid(_ref) {
  var top = _ref.top,
      left = _ref.left,
      xScale = _ref.xScale,
      yScale = _ref.yScale,
      width = _ref.width,
      height = _ref.height,
      className = _ref.className,
      stroke = _ref.stroke,
      strokeWidth = _ref.strokeWidth,
      strokeDasharray = _ref.strokeDasharray,
      numTicksRows = _ref.numTicksRows,
      numTicksColumns = _ref.numTicksColumns,
      rowLineStyle = _ref.rowLineStyle,
      columnLineStyle = _ref.columnLineStyle,
      xOffset = _ref.xOffset,
      yOffset = _ref.yOffset,
      rowTickValues = _ref.rowTickValues,
      columnTickValues = _ref.columnTickValues,
      restProps = _objectWithoutProperties(_ref, ["top", "left", "xScale", "yScale", "width", "height", "className", "stroke", "strokeWidth", "strokeDasharray", "numTicksRows", "numTicksColumns", "rowLineStyle", "columnLineStyle", "xOffset", "yOffset", "rowTickValues", "columnTickValues"]);

  return _react["default"].createElement(_group.Group, {
    className: (0, _classnames["default"])('vx-grid', className),
    top: top,
    left: left
  }, _react["default"].createElement(_GridRows["default"], _extends({
    className: className,
    scale: yScale,
    width: width,
    stroke: stroke,
    strokeWidth: strokeWidth,
    strokeDasharray: strokeDasharray,
    numTicks: numTicksRows,
    style: rowLineStyle,
    offset: yOffset,
    tickValues: rowTickValues
  }, restProps)), _react["default"].createElement(_GridColumns["default"], _extends({
    className: className,
    scale: xScale,
    height: height,
    stroke: stroke,
    strokeWidth: strokeWidth,
    strokeDasharray: strokeDasharray,
    numTicks: numTicksColumns,
    style: columnLineStyle,
    offset: xOffset,
    tickValues: columnTickValues
  }, restProps)));
}