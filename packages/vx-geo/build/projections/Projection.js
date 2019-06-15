"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Projection;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _group = require("@vx/group");

var _Graticule = _interopRequireDefault(require("../graticule/Graticule"));

var _d3Geo = require("d3-geo");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// TODO: Implement all projections of d3-geo
var projectionMapping = {
  orthographic: function orthographic() {
    return (0, _d3Geo.geoOrthographic)();
  },
  albers: function albers() {
    return (0, _d3Geo.geoAlbers)();
  },
  albersUsa: function albersUsa() {
    return (0, _d3Geo.geoAlbersUsa)();
  },
  mercator: function mercator() {
    return (0, _d3Geo.geoMercator)();
  },
  naturalEarth: function naturalEarth() {
    return (0, _d3Geo.geoNaturalEarth1)();
  },
  equalEarth: function equalEarth() {
    return (0, _d3Geo.geoEqualEarth)();
  }
};
Projection.propTypes = {
  data: _propTypes["default"].array.isRequired,
  projection: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func]),
  projectionFunc: _propTypes["default"].func,
  clipAngle: _propTypes["default"].number,
  clipExtent: _propTypes["default"].array,
  scale: _propTypes["default"].number,
  translate: _propTypes["default"].array,
  center: _propTypes["default"].array,
  rotate: _propTypes["default"].array,
  precision: _propTypes["default"].number,
  fitExtent: _propTypes["default"].array,
  fitSize: _propTypes["default"].array,
  centroid: _propTypes["default"].func,
  className: _propTypes["default"].string,
  children: _propTypes["default"].func,
  innerRef: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].object])
};
/**
 * Component for all projections.
 */

function Projection(_ref) {
  var data = _ref.data,
      _ref$projection = _ref.projection,
      projection = _ref$projection === void 0 ? 'mercator' : _ref$projection,
      projectionFunc = _ref.projectionFunc,
      clipAngle = _ref.clipAngle,
      clipExtent = _ref.clipExtent,
      scale = _ref.scale,
      translate = _ref.translate,
      center = _ref.center,
      rotate = _ref.rotate,
      precision = _ref.precision,
      fitExtent = _ref.fitExtent,
      fitSize = _ref.fitSize,
      centroid = _ref.centroid,
      graticule = _ref.graticule,
      graticuleLines = _ref.graticuleLines,
      graticuleOutline = _ref.graticuleOutline,
      className = _ref.className,
      innerRef = _ref.innerRef,
      pointRadius = _ref.pointRadius,
      children = _ref.children,
      restProps = _objectWithoutProperties(_ref, ["data", "projection", "projectionFunc", "clipAngle", "clipExtent", "scale", "translate", "center", "rotate", "precision", "fitExtent", "fitSize", "centroid", "graticule", "graticuleLines", "graticuleOutline", "className", "innerRef", "pointRadius", "children"]);

  var maybeCustomProjection = projectionMapping[projection] || projection;
  var currProjection = maybeCustomProjection();
  if (clipAngle) currProjection.clipAngle(clipAngle);
  if (clipExtent) currProjection.clipExtent(clipExtent);
  if (scale) currProjection.scale(scale);
  if (translate) currProjection.translate(translate);
  if (center) currProjection.center(center);
  if (rotate) currProjection.rotate(rotate);
  if (precision) currProjection.rotate(precision);
  if (fitExtent) currProjection.fitExtent.apply(currProjection, _toConsumableArray(fitExtent));
  if (fitSize) currProjection.fitSize.apply(currProjection, _toConsumableArray(fitSize));
  var path = (0, _d3Geo.geoPath)().projection(currProjection);
  if (pointRadius) path.pointRadius(pointRadius);
  var features = data.map(function (feature, i) {
    return {
      feature: feature,
      type: projection,
      projection: currProjection,
      index: i,
      centroid: path.centroid(feature),
      path: path(feature)
    };
  });
  if (children) return children({
    path: path,
    features: features
  });
  return _react["default"].createElement(_group.Group, {
    className: "vx-geo"
  }, graticule && !graticule.foreground && _react["default"].createElement(_Graticule["default"], _extends({
    graticule: function graticule(g) {
      return path(g);
    }
  }, graticule)), graticuleLines && !graticuleLines.foreground && _react["default"].createElement(_Graticule["default"], _extends({
    lines: function lines(g) {
      return path(g);
    }
  }, graticuleLines)), graticuleOutline && !graticuleOutline.foreground && _react["default"].createElement(_Graticule["default"], _extends({
    outline: function outline(g) {
      return path(g);
    }
  }, graticuleOutline)), features.map(function (feature, i) {
    return _react["default"].createElement("g", {
      key: "".concat(projection, "-").concat(i)
    }, _react["default"].createElement("path", _extends({
      className: (0, _classnames["default"])("vx-geo-".concat(projection), className),
      d: feature.path,
      ref: innerRef && innerRef(feature, i)
    }, restProps)), centroid && centroid(feature.centroid, feature));
  }), projectionFunc && projectionFunc(currProjection), graticule && graticule.foreground && _react["default"].createElement(_Graticule["default"], _extends({
    graticule: function graticule(g) {
      return path(g);
    }
  }, graticule)), graticuleLines && graticuleLines.foreground && _react["default"].createElement(_Graticule["default"], _extends({
    lines: function lines(g) {
      return path(g);
    }
  }, graticuleLines)), graticuleOutline && graticuleOutline.foreground && _react["default"].createElement(_Graticule["default"], _extends({
    outline: function outline(g) {
      return path(g);
    }
  }, graticuleOutline)));
}