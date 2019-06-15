"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Partition;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _group = require("@vx/group");

var _d3Hierarchy = require("d3-hierarchy");

var _HierarchyDefaultNode = _interopRequireDefault(require("../HierarchyDefaultNode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

Partition.propTypes = {
  root: _propTypes["default"].object.isRequired,
  children: _propTypes["default"].func,
  top: _propTypes["default"].number,
  left: _propTypes["default"].number,
  className: _propTypes["default"].string,
  size: _propTypes["default"].arrayOf(_propTypes["default"].number),
  round: _propTypes["default"].bool,
  padding: _propTypes["default"].number,
  nodeComponent: _propTypes["default"].any
};

function Partition(_ref) {
  var top = _ref.top,
      left = _ref.left,
      className = _ref.className,
      root = _ref.root,
      size = _ref.size,
      round = _ref.round,
      padding = _ref.padding,
      children = _ref.children,
      _ref$nodeComponent = _ref.nodeComponent,
      nodeComponent = _ref$nodeComponent === void 0 ? _HierarchyDefaultNode["default"] : _ref$nodeComponent,
      restProps = _objectWithoutProperties(_ref, ["top", "left", "className", "root", "size", "round", "padding", "children", "nodeComponent"]);

  var partition = (0, _d3Hierarchy.partition)();
  if (size) partition.size(size);
  if (round) partition.round(round);
  if (padding) partition.padding(padding);
  var data = partition(root);
  if (children) return children(data);
  return _react["default"].createElement(_group.Group, {
    top: top,
    left: left,
    className: (0, _classnames["default"])('vx-partition', className)
  }, nodeComponent && data.descendants().map(function (node, i) {
    return _react["default"].createElement(_group.Group, {
      key: "partition-node-".concat(i)
    }, _react["default"].createElement(nodeComponent, {
      node: node
    }));
  }));
}