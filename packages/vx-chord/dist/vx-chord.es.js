import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { chord, ribbon } from 'd3-chord';

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

Chord.propTypes = {
  matrix: PropTypes.array.isRequired,
  padAngle: PropTypes.number,
  sortGroups: PropTypes.func,
  sortSubgroups: PropTypes.func,
  sortChords: PropTypes.func,
  children: PropTypes.func.isRequired
};
function Chord(_ref) {
  var matrix = _ref.matrix,
      padAngle = _ref.padAngle,
      sortGroups = _ref.sortGroups,
      sortSubgroups = _ref.sortSubgroups,
      sortChords = _ref.sortChords,
      children = _ref.children,
      restProps = _objectWithoutProperties(_ref, ["matrix", "padAngle", "sortGroups", "sortSubgroups", "sortChords", "children"]);

  var chord$$1 = chord();
  if (padAngle) chord$$1.padAngle(padAngle);
  if (sortGroups) chord$$1.sortGroups(sortGroups);
  if (sortSubgroups) chord$$1.sortSubgroups(sortSubgroups);
  if (sortChords) chord$$1.sortChords(sortChords);
  var chords = chord$$1(matrix);
  if (!!children) return children({
    chords: chords
  }); // so react-docgen picks it up

  return React.createElement("g", null);
}

Ribbon.propTypes = {
  chord: PropTypes.object.isRequired,
  source: PropTypes.func,
  target: PropTypes.func,
  radius: PropTypes.oneOfType([PropTypes.func, PropTypes.number]),
  startAngle: PropTypes.oneOfType([PropTypes.func, PropTypes.number]),
  endAngle: PropTypes.oneOfType([PropTypes.func, PropTypes.number]),
  children: PropTypes.func,
  className: PropTypes.string
};
function Ribbon(_ref) {
  var chord$$1 = _ref.chord,
      source = _ref.source,
      target = _ref.target,
      radius = _ref.radius,
      startAngle = _ref.startAngle,
      endAngle = _ref.endAngle,
      children = _ref.children,
      className = _ref.className,
      restProps = _objectWithoutProperties(_ref, ["chord", "source", "target", "radius", "startAngle", "endAngle", "children", "className"]);

  var ribbon$$1 = ribbon();
  if (source) ribbon$$1.source(source);
  if (target) ribbon$$1.target(target);
  if (radius) ribbon$$1.radius(radius);
  if (startAngle) ribbon$$1.startAngle(startAngle);
  if (endAngle) ribbon$$1.endAngle(endAngle);
  var path = ribbon$$1(chord$$1);
  if (!!children) return children({
    path: path
  });
  return React.createElement("path", _extends({
    className: cx('vx-ribbon', className),
    d: path
  }, restProps));
}

export { Chord, Ribbon };
