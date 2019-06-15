"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = GlyphCross;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _d3Shape = require("d3-shape");

var _Glyph = _interopRequireDefault(require("./Glyph"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

GlyphCross.propTypes = {
  children: _propTypes["default"].func,
  className: _propTypes["default"].string,
  top: _propTypes["default"].number,
  left: _propTypes["default"].number,
  size: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].func])
};

function GlyphCross(_ref) {
  var children = _ref.children,
      className = _ref.className,
      top = _ref.top,
      left = _ref.left,
      size = _ref.size,
      restProps = _objectWithoutProperties(_ref, ["children", "className", "top", "left", "size"]);

  var path = (0, _d3Shape.symbol)();
  path.type(_d3Shape.symbolCross);
  if (size) path.size(size);
  if (children) return children({
    path: path
  });
  return _react["default"].createElement(_Glyph["default"], {
    top: top,
    left: left
  }, _react["default"].createElement("path", _extends({
    className: (0, _classnames["default"])('vx-glyph-cross', className),
    d: path()
  }, restProps)));
}