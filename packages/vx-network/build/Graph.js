"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Graph;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _group = require("@vx/group");

var _Links = _interopRequireDefault(require("./Links"));

var _Nodes = _interopRequireDefault(require("./Nodes"));

var _DefaultLink = _interopRequireDefault(require("./DefaultLink"));

var _DefaultNode = _interopRequireDefault(require("./DefaultNode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

Graph.propTypes = {
  graph: _propTypes["default"].object,
  linkComponent: _propTypes["default"].any,
  nodeComponent: _propTypes["default"].any
};

function Graph(_ref) {
  var graph = _ref.graph,
      _ref$linkComponent = _ref.linkComponent,
      linkComponent = _ref$linkComponent === void 0 ? _DefaultLink["default"] : _ref$linkComponent,
      _ref$nodeComponent = _ref.nodeComponent,
      nodeComponent = _ref$nodeComponent === void 0 ? _DefaultNode["default"] : _ref$nodeComponent;
  return _react["default"].createElement(_group.Group, null, _react["default"].createElement(_Links["default"], {
    links: graph.links,
    linkComponent: linkComponent
  }), _react["default"].createElement(_Nodes["default"], {
    nodes: graph.nodes,
    nodeComponent: nodeComponent
  }));
}