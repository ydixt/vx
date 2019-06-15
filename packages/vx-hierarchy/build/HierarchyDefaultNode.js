"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = HierarchyDefaultNode;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

HierarchyDefaultNode.propTypes = {
  node: _propTypes["default"].object
};

function HierarchyDefaultNode(_ref) {
  var node = _ref.node;
  return _react["default"].createElement("circle", {
    cx: node.x,
    cy: node.y,
    r: 15,
    fill: "#21D4FD"
  });
}