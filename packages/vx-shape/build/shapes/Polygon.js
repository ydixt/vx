"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Polygon;
exports.getPoints = exports.getPoint = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _point = require("@vx/point");

var _trigonometry = require("../util/trigonometry");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

Polygon.propTypes = {
  sides: _propTypes["default"].number.isRequired,
  size: _propTypes["default"].number.isRequired,
  className: _propTypes["default"].string,
  rotate: _propTypes["default"].number,
  children: _propTypes["default"].func,
  innerRef: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].object]),
  center: _propTypes["default"].shape({
    x: _propTypes["default"].number,
    y: _propTypes["default"].number
  })
};

var getPoint = function getPoint(_ref) {
  var sides = _ref.sides,
      size = _ref.size,
      center = _ref.center,
      rotate = _ref.rotate,
      side = _ref.side;
  var degrees = 360 / sides * side - rotate;
  var radians = (0, _trigonometry.degreesToRadians)(degrees);
  return new _point.Point({
    x: center.x + size * Math.cos(radians),
    y: center.y + size * Math.sin(radians)
  });
};

exports.getPoint = getPoint;

var getPoints = function getPoints(_ref2) {
  var sides = _ref2.sides,
      size = _ref2.size,
      center = _ref2.center,
      rotate = _ref2.rotate;
  return _toConsumableArray(Array(sides).keys()).map(function (side) {
    return getPoint({
      sides: sides,
      size: size,
      center: center,
      rotate: rotate,
      side: side
    });
  });
};

exports.getPoints = getPoints;

function Polygon(_ref3) {
  var sides = _ref3.sides,
      _ref3$size = _ref3.size,
      size = _ref3$size === void 0 ? 25 : _ref3$size,
      _ref3$center = _ref3.center,
      center = _ref3$center === void 0 ? new _point.Point({
    x: 0,
    y: 0
  }) : _ref3$center,
      _ref3$rotate = _ref3.rotate,
      rotate = _ref3$rotate === void 0 ? 0 : _ref3$rotate,
      className = _ref3.className,
      children = _ref3.children,
      innerRef = _ref3.innerRef,
      restProps = _objectWithoutProperties(_ref3, ["sides", "size", "center", "rotate", "className", "children", "innerRef"]);

  var points = getPoints({
    sides: sides,
    size: size,
    center: center,
    rotate: rotate
  }).map(function (p) {
    return p.toArray();
  });
  if (children) return children({
    points: points
  });
  return _react["default"].createElement("polygon", _extends({
    ref: innerRef,
    className: (0, _classnames["default"])('vx-polygon', className),
    points: points.join(' ')
  }, restProps));
}