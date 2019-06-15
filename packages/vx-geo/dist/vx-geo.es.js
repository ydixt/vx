import cx from 'classnames';
import PropTypes from 'prop-types';
import { Group } from '@vx/group';
import { geoGraticule, geoOrthographic, geoAlbers, geoAlbersUsa, geoMercator, geoNaturalEarth1, geoEqualEarth, geoPath } from 'd3-geo';
import React from 'react';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

Graticule.propTypes = {
  graticule: PropTypes.func,
  lines: PropTypes.func,
  outline: PropTypes.func,
  children: PropTypes.func
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

  var currGraticule = geoGraticule();
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
  return React.createElement(Group, {
    className: "vx-geo-graticule"
  }, graticule && React.createElement("path", _extends({
    d: graticule(currGraticule()),
    fill: "none",
    stroke: "black"
  }, restProps)), lines && currGraticule.lines().map(function (line, i) {
    return React.createElement("g", {
      key: i
    }, React.createElement("path", _extends({
      d: lines(line),
      fill: "none",
      stroke: "black"
    }, restProps)));
  }), outline && React.createElement("path", _extends({
    d: outline(currGraticule.outline()),
    fill: "none",
    stroke: "black"
  }, restProps)));
}

var projectionMapping = {
  orthographic: function orthographic() {
    return geoOrthographic();
  },
  albers: function albers() {
    return geoAlbers();
  },
  albersUsa: function albersUsa() {
    return geoAlbersUsa();
  },
  mercator: function mercator() {
    return geoMercator();
  },
  naturalEarth: function naturalEarth() {
    return geoNaturalEarth1();
  },
  equalEarth: function equalEarth() {
    return geoEqualEarth();
  }
};
Projection.propTypes = {
  data: PropTypes.array.isRequired,
  projection: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  projectionFunc: PropTypes.func,
  clipAngle: PropTypes.number,
  clipExtent: PropTypes.array,
  scale: PropTypes.number,
  translate: PropTypes.array,
  center: PropTypes.array,
  rotate: PropTypes.array,
  precision: PropTypes.number,
  fitExtent: PropTypes.array,
  fitSize: PropTypes.array,
  centroid: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.func,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
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
  var path = geoPath().projection(currProjection);
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
  return React.createElement(Group, {
    className: "vx-geo"
  }, graticule && !graticule.foreground && React.createElement(Graticule, _extends({
    graticule: function graticule(g) {
      return path(g);
    }
  }, graticule)), graticuleLines && !graticuleLines.foreground && React.createElement(Graticule, _extends({
    lines: function lines(g) {
      return path(g);
    }
  }, graticuleLines)), graticuleOutline && !graticuleOutline.foreground && React.createElement(Graticule, _extends({
    outline: function outline(g) {
      return path(g);
    }
  }, graticuleOutline)), features.map(function (feature, i) {
    return React.createElement("g", {
      key: "".concat(projection, "-").concat(i)
    }, React.createElement("path", _extends({
      className: cx("vx-geo-".concat(projection), className),
      d: feature.path,
      ref: innerRef && innerRef(feature, i)
    }, restProps)), centroid && centroid(feature.centroid, feature));
  }), projectionFunc && projectionFunc(currProjection), graticule && graticule.foreground && React.createElement(Graticule, _extends({
    graticule: function graticule(g) {
      return path(g);
    }
  }, graticule)), graticuleLines && graticuleLines.foreground && React.createElement(Graticule, _extends({
    lines: function lines(g) {
      return path(g);
    }
  }, graticuleLines)), graticuleOutline && graticuleOutline.foreground && React.createElement(Graticule, _extends({
    outline: function outline(g) {
      return path(g);
    }
  }, graticuleOutline)));
}

/**
 * All props pass through to `<Projection projection="albers" {...props} />`
 */

function Albers(props) {
  return React.createElement(Projection, _extends({
    projection: "albers"
  }, props));
}

/**
 * All props pass through to `<Projection projection="albersUsa" {...props} />`
 */

function AlbersUsa(props) {
  return React.createElement(Projection, _extends({
    projection: "albersUsa"
  }, props));
}

/**
 * All props pass through to `<Projection projection="mercator" {...props} />`
 */

function Mercator(props) {
  return React.createElement(Projection, _extends({
    projection: "mercator"
  }, props));
}

/**
 * All props pass through to `<Projection projection="orthographic" {...props} />`
 */

function Orthographic(props) {
  return React.createElement(Projection, _extends({
    projection: "orthographic"
  }, props));
}

/**
 * All props pass through to `<Projection projection="naturalEarth" {...props} />`
 */

function NaturalEarth(props) {
  return React.createElement(Projection, _extends({
    projection: "naturalEarth"
  }, props));
}

/**
 * All props pass through to `<Projection projection="equalEarth" {...props} />`
 */

function EqualEarth(props) {
  return React.createElement(Projection, _extends({
    projection: "equalEarth"
  }, props));
}

/**
 * All props pass through to `<Projection projection={customProjection} {...props} />`
 */

function CustomProjection(props) {
  return React.createElement(Projection, props);
}

export { Albers, AlbersUsa, Mercator, Orthographic, NaturalEarth, EqualEarth, CustomProjection, Graticule };
