"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Nodes;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _group = require("@vx/group");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

Nodes.propTypes = {
  nodes: _propTypes["default"].array,
  nodeComponent: _propTypes["default"].any,
  className: _propTypes["default"].string
};

function Nodes(_ref) {
  var nodes = _ref.nodes,
      nodeComponent = _ref.nodeComponent,
      className = _ref.className;
  return _react["default"].createElement(_group.Group, null, nodes.map(function (node, i) {
    return _react["default"].createElement(_group.Group, {
      key: "network-node-".concat(i),
      className: (0, _classnames["default"])('vx-network-nodes', className),
      transform: "translate(".concat(node.x, ", ").concat(node.y, ")")
    }, _react["default"].createElement(nodeComponent, {
      node: node
    }));
  }));
}