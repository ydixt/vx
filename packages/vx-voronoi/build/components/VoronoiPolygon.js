"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = VoronoiPolygon;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

VoronoiPolygon.propTypes = {
  polygon: _propTypes["default"].arrayOf(_propTypes["default"].array),
  className: _propTypes["default"].string,
  children: _propTypes["default"].func
};

function VoronoiPolygon(_ref) {
  var polygon = _ref.polygon,
      className = _ref.className,
      children = _ref.children,
      restProps = _objectWithoutProperties(_ref, ["polygon", "className", "children"]);

  if (!polygon) return null;
  var path = "M".concat(polygon.join('L'), "Z");
  if (children) return children({
    path: path,
    polygon: polygon
  });
  return _react["default"].createElement("path", _extends({
    className: (0, _classnames["default"])('vx-voronoi-polygon', className),
    d: path
  }, restProps));
}