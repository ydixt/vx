"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Pie;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _group = require("@vx/group");

var _d3Shape = require("d3-shape");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

Pie.propTypes = {
  className: _propTypes["default"].string,
  top: _propTypes["default"].number,
  left: _propTypes["default"].number,
  data: _propTypes["default"].array,
  centroid: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].number]),
  innerRadius: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].number]),
  outerRadius: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].number]),
  cornerRadius: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].number]),
  startAngle: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].number]),
  endAngle: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].number]),
  padAngle: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].number]),
  padRadius: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].number]),
  pieValue: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].number]),
  pieSort: _propTypes["default"].func,
  pieSortValues: _propTypes["default"].func,
  children: _propTypes["default"].func
};

function Pie(_ref) {
  var className = _ref.className,
      top = _ref.top,
      left = _ref.left,
      data = _ref.data,
      centroid = _ref.centroid,
      _ref$innerRadius = _ref.innerRadius,
      innerRadius = _ref$innerRadius === void 0 ? 0 : _ref$innerRadius,
      outerRadius = _ref.outerRadius,
      cornerRadius = _ref.cornerRadius,
      startAngle = _ref.startAngle,
      endAngle = _ref.endAngle,
      padAngle = _ref.padAngle,
      padRadius = _ref.padRadius,
      pieSort = _ref.pieSort,
      pieSortValues = _ref.pieSortValues,
      pieValue = _ref.pieValue,
      children = _ref.children,
      restProps = _objectWithoutProperties(_ref, ["className", "top", "left", "data", "centroid", "innerRadius", "outerRadius", "cornerRadius", "startAngle", "endAngle", "padAngle", "padRadius", "pieSort", "pieSortValues", "pieValue", "children"]);

  var path = (0, _d3Shape.arc)();
  if (innerRadius != null) path.innerRadius(innerRadius);
  if (outerRadius != null) path.outerRadius(outerRadius);
  if (cornerRadius != null) path.cornerRadius(cornerRadius);
  if (padRadius != null) path.padRadius(padRadius);
  var pie = (0, _d3Shape.pie)();
  if (pieSort !== undefined) pie.sort(pieSort);
  if (pieSortValues !== undefined) pie.sortValues(pieSortValues);
  if (pieValue !== undefined) pie.value(pieValue);
  if (padAngle != null) pie.padAngle(padAngle);
  if (startAngle != null) pie.startAngle(startAngle);
  if (endAngle != null) pie.endAngle(endAngle);
  var arcs = pie(data);
  if (children) return children({
    arcs: arcs,
    path: path,
    pie: pie
  });
  return _react["default"].createElement(_group.Group, {
    className: "vx-pie-arcs-group",
    top: top,
    left: left
  }, arcs.map(function (arc, i) {
    return _react["default"].createElement("g", {
      key: "pie-arc-".concat(i)
    }, _react["default"].createElement("path", _extends({
      className: (0, _classnames["default"])('vx-pie-arc', className),
      d: path(arc)
    }, restProps)), centroid && centroid(path.centroid(arc), arc));
  }));
}