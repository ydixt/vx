"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Glyph;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _group = require("@vx/group");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

Glyph.propTypes = {
  top: _propTypes["default"].number,
  left: _propTypes["default"].number,
  className: _propTypes["default"].string,
  children: _propTypes["default"].any
};

function Glyph(_ref) {
  var _ref$top = _ref.top,
      top = _ref$top === void 0 ? 0 : _ref$top,
      _ref$left = _ref.left,
      left = _ref$left === void 0 ? 0 : _ref$left,
      className = _ref.className,
      children = _ref.children;
  return _react["default"].createElement(_group.Group, {
    className: (0, _classnames["default"])('vx-glyph', className),
    top: top,
    left: left
  }, children);
}