"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = DefaultLink;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

DefaultLink.propTypes = {
  link: _propTypes["default"].object
};

function DefaultLink(_ref) {
  var link = _ref.link;
  return _react["default"].createElement("line", {
    x1: link.source.x,
    y1: link.source.y,
    x2: link.target.x,
    y2: link.target.y,
    strokeWidth: 2,
    stroke: "#999",
    strokeOpacity: 0.6
  });
}