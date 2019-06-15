"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = renderShape;

var _react = _interopRequireDefault(require("react"));

var _Rect = _interopRequireDefault(require("../shapes/Rect"));

var _Circle = _interopRequireDefault(require("../shapes/Circle"));

var _valueOrIdentity = _interopRequireDefault(require("./valueOrIdentity"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function renderShape(_ref) {
  var _ref$shape = _ref.shape,
      shape = _ref$shape === void 0 ? 'rect' : _ref$shape,
      _ref$fill = _ref.fill,
      fill = _ref$fill === void 0 ? _valueOrIdentity["default"] : _ref$fill,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? _valueOrIdentity["default"] : _ref$size,
      width = _ref.width,
      height = _ref.height,
      label = _ref.label,
      _ref$shapeStyle = _ref.shapeStyle,
      shapeStyle = _ref$shapeStyle === void 0 ? function (x) {
    return undefined;
  } : _ref$shapeStyle;
  var props = {
    width: width,
    height: height,
    label: label,
    fill: fill(_objectSpread({}, label)),
    size: size(_objectSpread({}, label)),
    style: shapeStyle(_objectSpread({}, label))
  };

  if (typeof shape === 'string') {
    if (shape === 'rect') {
      return _react["default"].createElement(_Rect["default"], props);
    }

    return _react["default"].createElement(_Circle["default"], props);
  }

  if (_react["default"].isValidElement(shape)) {
    return _react["default"].cloneElement(shape, props);
  }

  return _react["default"].createElement(shape, props);
}