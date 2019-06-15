"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Line;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _point = require("@vx/point");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

Line.propTypes = {
  className: _propTypes["default"].string,
  innerRef: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].object]),
  from: _propTypes["default"].shape({
    x: _propTypes["default"].number,
    y: _propTypes["default"].number
  }),
  to: _propTypes["default"].shape({
    x: _propTypes["default"].number,
    y: _propTypes["default"].number
  })
};

function Line(_ref) {
  var _ref$from = _ref.from,
      from = _ref$from === void 0 ? new _point.Point({
    x: 0,
    y: 0
  }) : _ref$from,
      _ref$to = _ref.to,
      to = _ref$to === void 0 ? new _point.Point({
    x: 1,
    y: 1
  }) : _ref$to,
      _ref$fill = _ref.fill,
      fill = _ref$fill === void 0 ? 'transparent' : _ref$fill,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      innerRef = _ref.innerRef,
      restProps = _objectWithoutProperties(_ref, ["from", "to", "fill", "className", "innerRef"]);

  return _react["default"].createElement("line", _extends({
    ref: innerRef,
    className: (0, _classnames["default"])('vx-line', className),
    x1: from.x,
    y1: from.y,
    x2: to.x,
    y2: to.y,
    fill: fill
  }, restProps));
}