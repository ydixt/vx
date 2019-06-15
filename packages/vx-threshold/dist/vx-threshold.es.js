import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { Area } from '@vx/shape';
import { ClipPath } from '@vx/clip-path';

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

Threshold.propTypes = {
  className: PropTypes.string,
  curve: PropTypes.func,
  clipAboveTo: PropTypes.oneOfType([PropTypes.func, PropTypes.number]),
  clipBelowTo: PropTypes.oneOfType([PropTypes.func, PropTypes.number]),
  id: PropTypes.string,
  data: PropTypes.any.isRequired,
  x: PropTypes.oneOfType([PropTypes.func, PropTypes.number]).isRequired,
  y0: PropTypes.oneOfType([PropTypes.func, PropTypes.number]).isRequired,
  y1: PropTypes.oneOfType([PropTypes.func, PropTypes.number]).isRequired,
  aboveAreaProps: PropTypes.object,
  belowAreaProps: PropTypes.object
};
function Threshold(_ref) {
  var className = _ref.className,
      curve = _ref.curve,
      clipAboveTo = _ref.clipAboveTo,
      clipBelowTo = _ref.clipBelowTo,
      data = _ref.data,
      x = _ref.x,
      y0 = _ref.y0,
      y1 = _ref.y1,
      aboveAreaProps = _ref.aboveAreaProps,
      belowAreaProps = _ref.belowAreaProps,
      _ref$id = _ref.id,
      id = _ref$id === void 0 ? '' : _ref$id;
  return React.createElement("g", {
    className: cx('vx-threshold', className)
  }, React.createElement(Area, {
    curve: curve,
    data: data,
    x: x,
    y1: y1
  }, function (_ref2) {
    var path = _ref2.path;
    return React.createElement("g", null, React.createElement(ClipPath, {
      id: "threshold-clip-below-".concat(id)
    }, React.createElement("path", {
      d: path.y0(clipBelowTo)(data)
    })), React.createElement(ClipPath, {
      id: "threshold-clip-above-".concat(id)
    }, React.createElement("path", {
      d: path.y0(clipAboveTo)(data)
    })));
  }), React.createElement(Area, _extends({
    curve: curve,
    data: data,
    x: x,
    y0: y0,
    y1: y1,
    strokeWidth: 0,
    clipPath: "url(#threshold-clip-below-".concat(id, ")")
  }, belowAreaProps)), React.createElement(Area, _extends({
    curve: curve,
    data: data,
    x: x,
    y0: y0,
    y1: y1,
    strokeWidth: 0,
    clipPath: "url(#threshold-clip-above-".concat(id, ")")
  }, aboveAreaProps)));
}

export { Threshold };
