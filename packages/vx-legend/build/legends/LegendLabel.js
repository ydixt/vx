"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = LegendLabel;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

LegendLabel.propTypes = {
  align: _propTypes["default"].string,
  label: _propTypes["default"].any,
  flex: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  margin: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  children: _propTypes["default"].any
};

function LegendLabel(_ref) {
  var _ref$flex = _ref.flex,
      flex = _ref$flex === void 0 ? '1' : _ref$flex,
      label = _ref.label,
      _ref$margin = _ref.margin,
      margin = _ref$margin === void 0 ? '5px 0' : _ref$margin,
      _ref$align = _ref.align,
      align = _ref$align === void 0 ? 'left' : _ref$align,
      children = _ref.children;
  return _react["default"].createElement("div", {
    className: "vx-legend-label",
    style: {
      justifyContent: align,
      display: 'flex',
      flex: flex,
      margin: margin
    }
  }, children || label);
}