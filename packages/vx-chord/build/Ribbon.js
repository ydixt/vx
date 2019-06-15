"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Ribbon;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _d3Chord = require("d3-chord");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

Ribbon.propTypes = {
  chord: _propTypes["default"].object.isRequired,
  source: _propTypes["default"].func,
  target: _propTypes["default"].func,
  radius: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].number]),
  startAngle: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].number]),
  endAngle: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].number]),
  children: _propTypes["default"].func,
  className: _propTypes["default"].string
};

function Ribbon(_ref) {
  var chord = _ref.chord,
      source = _ref.source,
      target = _ref.target,
      radius = _ref.radius,
      startAngle = _ref.startAngle,
      endAngle = _ref.endAngle,
      children = _ref.children,
      className = _ref.className,
      restProps = _objectWithoutProperties(_ref, ["chord", "source", "target", "radius", "startAngle", "endAngle", "children", "className"]);

  var ribbon = (0, _d3Chord.ribbon)();
  if (source) ribbon.source(source);
  if (target) ribbon.target(target);
  if (radius) ribbon.radius(radius);
  if (startAngle) ribbon.startAngle(startAngle);
  if (endAngle) ribbon.endAngle(endAngle);
  var path = ribbon(chord);
  if (!!children) return children({
    path: path
  });
  return _react["default"].createElement("path", _extends({
    className: (0, _classnames["default"])('vx-ribbon', className),
    d: path
  }, restProps));
}