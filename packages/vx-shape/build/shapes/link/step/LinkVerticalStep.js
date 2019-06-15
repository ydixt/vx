"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pathVerticalStep = pathVerticalStep;
exports["default"] = LinkVerticalStep;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _d3Path = require("d3-path");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function pathVerticalStep(_ref) {
  var source = _ref.source,
      target = _ref.target,
      x = _ref.x,
      y = _ref.y,
      percent = _ref.percent;
  return function (data) {
    var sourceData = source(data);
    var targetData = target(data);
    var sx = x(sourceData);
    var sy = y(sourceData);
    var tx = x(targetData);
    var ty = y(targetData);
    var path = (0, _d3Path.path)();
    path.moveTo(sx, sy);
    path.lineTo(sx, sy + (ty - sy) * percent);
    path.lineTo(tx, sy + (ty - sy) * percent);
    path.lineTo(tx, ty);
    return path.toString();
  };
}

LinkVerticalStep.propTypes = {
  innerRef: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].object]),
  percent: _propTypes["default"].number,
  x: _propTypes["default"].func,
  y: _propTypes["default"].func,
  source: _propTypes["default"].func,
  target: _propTypes["default"].func,
  path: _propTypes["default"].func,
  children: _propTypes["default"].func
};

function LinkVerticalStep(_ref2) {
  var className = _ref2.className,
      innerRef = _ref2.innerRef,
      data = _ref2.data,
      path = _ref2.path,
      _ref2$percent = _ref2.percent,
      percent = _ref2$percent === void 0 ? 0.5 : _ref2$percent,
      _ref2$x = _ref2.x,
      x = _ref2$x === void 0 ? function (d) {
    return d.x;
  } : _ref2$x,
      _ref2$y = _ref2.y,
      y = _ref2$y === void 0 ? function (d) {
    return d.y;
  } : _ref2$y,
      _ref2$source = _ref2.source,
      source = _ref2$source === void 0 ? function (d) {
    return d.source;
  } : _ref2$source,
      _ref2$target = _ref2.target,
      target = _ref2$target === void 0 ? function (d) {
    return d.target;
  } : _ref2$target,
      children = _ref2.children,
      restProps = _objectWithoutProperties(_ref2, ["className", "innerRef", "data", "path", "percent", "x", "y", "source", "target", "children"]);

  path = path || pathVerticalStep({
    source: source,
    target: target,
    x: x,
    y: y,
    percent: percent
  });
  if (children) return children({
    path: path
  });
  return _react["default"].createElement("path", _extends({
    ref: innerRef,
    className: (0, _classnames["default"])('vx-link vx-link-vertical-step', className),
    d: path(data)
  }, restProps));
}