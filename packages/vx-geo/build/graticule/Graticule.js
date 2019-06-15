"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Graticule;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _group = require("@vx/group");

var _d3Geo = require("d3-geo");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

Graticule.propTypes = {
  graticule: _propTypes["default"].func,
  lines: _propTypes["default"].func,
  outline: _propTypes["default"].func,
  children: _propTypes["default"].func
};

function Graticule(_ref) {
  var graticule = _ref.graticule,
      lines = _ref.lines,
      outline = _ref.outline,
      extent = _ref.extent,
      extentMajor = _ref.extentMajor,
      extentMinor = _ref.extentMinor,
      step = _ref.step,
      stepMajor = _ref.stepMajor,
      stepMinor = _ref.stepMinor,
      precision = _ref.precision,
      children = _ref.children,
      restProps = _objectWithoutProperties(_ref, ["graticule", "lines", "outline", "extent", "extentMajor", "extentMinor", "step", "stepMajor", "stepMinor", "precision", "children"]);

  var currGraticule = (0, _d3Geo.geoGraticule)();
  if (extent) currGraticule.extent(extent);
  if (extentMajor) currGraticule.extentMajor(extentMajor);
  if (extentMinor) currGraticule.extentMinor(extentMinor);
  if (step) currGraticule.step(step);
  if (stepMajor) currGraticule.stepMajor(stepMajor);
  if (stepMinor) currGraticule.stepMinor(stepMinor);
  if (precision) currGraticule.stepMinor(precision);
  if (children) return children({
    graticule: currGraticule
  });
  return _react["default"].createElement(_group.Group, {
    className: "vx-geo-graticule"
  }, graticule && _react["default"].createElement("path", _extends({
    d: graticule(currGraticule()),
    fill: "none",
    stroke: "black"
  }, restProps)), lines && currGraticule.lines().map(function (line, i) {
    return _react["default"].createElement("g", {
      key: i
    }, _react["default"].createElement("path", _extends({
      d: lines(line),
      fill: "none",
      stroke: "black"
    }, restProps)));
  }), outline && _react["default"].createElement("path", _extends({
    d: outline(currGraticule.outline()),
    fill: "none",
    stroke: "black"
  }, restProps)));
}