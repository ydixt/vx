"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = LegendItem;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

LegendItem.propTypes = {
  flexDirection: _propTypes["default"].string,
  alignItems: _propTypes["default"].string,
  margin: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  children: _propTypes["default"].any
};

function LegendItem(_ref) {
  var _ref$flexDirection = _ref.flexDirection,
      flexDirection = _ref$flexDirection === void 0 ? 'row' : _ref$flexDirection,
      _ref$alignItems = _ref.alignItems,
      alignItems = _ref$alignItems === void 0 ? 'center' : _ref$alignItems,
      _ref$margin = _ref.margin,
      margin = _ref$margin === void 0 ? '0' : _ref$margin,
      _ref$display = _ref.display,
      display = _ref$display === void 0 ? 'flex' : _ref$display,
      children = _ref.children,
      restProps = _objectWithoutProperties(_ref, ["flexDirection", "alignItems", "margin", "display", "children"]);

  return _react["default"].createElement("div", _extends({
    className: "vx-legend-item",
    style: {
      display: display,
      alignItems: alignItems,
      flexDirection: flexDirection,
      margin: margin
    }
  }, restProps), children);
}