"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = GlyphDot;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Glyph = _interopRequireDefault(require("./Glyph"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

GlyphDot.propTypes = {
  children: _propTypes["default"].func,
  className: _propTypes["default"].string,
  top: _propTypes["default"].number,
  left: _propTypes["default"].number
};

function GlyphDot(_ref) {
  var _ref$top = _ref.top,
      top = _ref$top === void 0 ? 0 : _ref$top,
      _ref$left = _ref.left,
      left = _ref$left === void 0 ? 0 : _ref$left,
      className = _ref.className,
      children = _ref.children,
      restProps = _objectWithoutProperties(_ref, ["top", "left", "className", "children"]);

  return _react["default"].createElement(_Glyph["default"], {
    top: top,
    left: left
  }, _react["default"].createElement("circle", _extends({
    className: (0, _classnames["default"])('vx-glyph-dot', className)
  }, restProps)));
}