"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = DefaultNode;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function DefaultNode() {
  return _react["default"].createElement("circle", {
    r: 15,
    fill: "#21D4FD"
  });
}