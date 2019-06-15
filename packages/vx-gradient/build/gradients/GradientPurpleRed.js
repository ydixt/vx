"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = GradientPurpleRed;

var _react = _interopRequireDefault(require("react"));

var _LinearGradient = _interopRequireDefault(require("./LinearGradient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * All props pass through to `<LinearGradient {...props} />`
 */
function GradientPurpleRed(_ref) {
  var _ref$from = _ref.from,
      from = _ref$from === void 0 ? '#622774' : _ref$from,
      _ref$to = _ref.to,
      to = _ref$to === void 0 ? '#C53364' : _ref$to,
      restProps = _objectWithoutProperties(_ref, ["from", "to"]);

  return _react["default"].createElement(_LinearGradient["default"], _extends({
    from: from,
    to: to
  }, restProps));
}