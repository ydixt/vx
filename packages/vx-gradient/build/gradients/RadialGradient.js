"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = RadialGradient;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

RadialGradient.propTypes = {
  id: _propTypes["default"].string.isRequired,
  from: _propTypes["default"].string,
  to: _propTypes["default"].string,
  fromOffset: _propTypes["default"].string,
  fromOpacity: _propTypes["default"].number,
  toOffset: _propTypes["default"].string,
  toOpacity: _propTypes["default"].number,
  rotate: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  transform: _propTypes["default"].string
};

function RadialGradient(_ref) {
  var children = _ref.children,
      id = _ref.id,
      from = _ref.from,
      to = _ref.to,
      _ref$fromOffset = _ref.fromOffset,
      fromOffset = _ref$fromOffset === void 0 ? '0%' : _ref$fromOffset,
      _ref$fromOpacity = _ref.fromOpacity,
      fromOpacity = _ref$fromOpacity === void 0 ? 1 : _ref$fromOpacity,
      _ref$toOffset = _ref.toOffset,
      toOffset = _ref$toOffset === void 0 ? '100%' : _ref$toOffset,
      _ref$toOpacity = _ref.toOpacity,
      toOpacity = _ref$toOpacity === void 0 ? 1 : _ref$toOpacity,
      rotate = _ref.rotate,
      transform = _ref.transform,
      restProps = _objectWithoutProperties(_ref, ["children", "id", "from", "to", "fromOffset", "fromOpacity", "toOffset", "toOpacity", "rotate", "transform"]);

  return _react["default"].createElement("defs", null, _react["default"].createElement("radialGradient", _extends({
    id: id,
    gradientTransform: rotate ? "rotate(".concat(rotate, ")") : transform
  }, restProps), !!children && children, !children && _react["default"].createElement("stop", {
    offset: fromOffset,
    stopColor: from,
    stopOpacity: fromOpacity
  }), !children && _react["default"].createElement("stop", {
    offset: toOffset,
    stopColor: to,
    stopOpacity: toOpacity
  })));
}