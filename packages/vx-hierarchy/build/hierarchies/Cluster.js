"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Cluster;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _group = require("@vx/group");

var _d3Hierarchy = require("d3-hierarchy");

var _HierarchyDefaultLink = _interopRequireDefault(require("../HierarchyDefaultLink"));

var _HierarchyDefaultNode = _interopRequireDefault(require("../HierarchyDefaultNode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

Cluster.propTypes = {
  root: _propTypes["default"].object.isRequired,
  children: _propTypes["default"].func,
  top: _propTypes["default"].number,
  left: _propTypes["default"].number,
  className: _propTypes["default"].string,
  size: _propTypes["default"].arrayOf(_propTypes["default"].number),
  nodeSize: _propTypes["default"].arrayOf(_propTypes["default"].number),
  separation: _propTypes["default"].func,
  linkComponent: _propTypes["default"].any,
  nodeComponent: _propTypes["default"].any
};

function Cluster(_ref) {
  var top = _ref.top,
      left = _ref.left,
      className = _ref.className,
      root = _ref.root,
      size = _ref.size,
      nodeSize = _ref.nodeSize,
      separation = _ref.separation,
      children = _ref.children,
      _ref$linkComponent = _ref.linkComponent,
      linkComponent = _ref$linkComponent === void 0 ? _HierarchyDefaultLink["default"] : _ref$linkComponent,
      _ref$nodeComponent = _ref.nodeComponent,
      nodeComponent = _ref$nodeComponent === void 0 ? _HierarchyDefaultNode["default"] : _ref$nodeComponent,
      restProps = _objectWithoutProperties(_ref, ["top", "left", "className", "root", "size", "nodeSize", "separation", "children", "linkComponent", "nodeComponent"]);

  var cluster = (0, _d3Hierarchy.cluster)();
  if (size) cluster.size(size);
  if (nodeSize) cluster.nodeSize(nodeSize);
  if (separation) cluster.separation(separation);
  var data = cluster(root);
  if (children) return children(data);
  return _react["default"].createElement(_group.Group, {
    top: top,
    left: left,
    className: (0, _classnames["default"])('vx-cluster', className)
  }, linkComponent && data.links().map(function (link, i) {
    return _react["default"].createElement(_group.Group, {
      key: "cluster-link-".concat(i)
    }, _react["default"].createElement(linkComponent, {
      link: link
    }));
  }), nodeComponent && data.descendants().map(function (node, i) {
    return _react["default"].createElement(_group.Group, {
      key: "cluster-node-".concat(i)
    }, _react["default"].createElement(nodeComponent, {
      node: node
    }));
  }));
}