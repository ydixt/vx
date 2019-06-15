"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Arc;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _d3Shape = require("d3-shape");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

Arc.propTypes = {
  className: _propTypes["default"].string,
  data: _propTypes["default"].any,
  children: _propTypes["default"].func,
  innerRef: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].object]),
  centroid: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].number]),
  innerRadius: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].number]),
  outerRadius: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].number]),
  cornerRadius: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].number]),
  startAngle: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].number]),
  endAngle: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].number]),
  padAngle: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].number]),
  padRadius: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].number])
};

function Arc(_ref) {
  var className = _ref.className,
      data = _ref.data,
      centroid = _ref.centroid,
      innerRadius = _ref.innerRadius,
      outerRadius = _ref.outerRadius,
      cornerRadius = _ref.cornerRadius,
      startAngle = _ref.startAngle,
      endAngle = _ref.endAngle,
      padAngle = _ref.padAngle,
      padRadius = _ref.padRadius,
      children = _ref.children,
      innerRef = _ref.innerRef,
      restProps = _objectWithoutProperties(_ref, ["className", "data", "centroid", "innerRadius", "outerRadius", "cornerRadius", "startAngle", "endAngle", "padAngle", "padRadius", "children", "innerRef"]);

  var arc = (0, _d3Shape.arc)();
  if (centroid) arc.centroid(centroid);
  if (innerRadius !== undefined) arc.innerRadius(innerRadius);
  if (outerRadius !== undefined) arc.outerRadius(outerRadius);
  if (cornerRadius !== undefined) arc.cornerRadius(cornerRadius);
  if (startAngle !== undefined) arc.startAngle(startAngle);
  if (endAngle !== undefined) arc.endAngle(endAngle);
  if (padAngle !== undefined) arc.padAngle(padAngle);
  if (padRadius !== undefined) arc.padRadius(padRadius);
  if (children) return children({
    path: arc
  });
  return _react["default"].createElement("path", _extends({
    ref: innerRef,
    className: (0, _classnames["default"])('vx-arc', className),
    d: arc(data)
  }, restProps));
}