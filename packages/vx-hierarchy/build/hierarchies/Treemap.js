"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Treemap;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _group = require("@vx/group");

var _d3Hierarchy = require("d3-hierarchy");

var _HierarchyDefaultNode = _interopRequireDefault(require("../HierarchyDefaultNode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

Treemap.propTypes = {
  root: _propTypes["default"].object.isRequired,
  children: _propTypes["default"].func,
  top: _propTypes["default"].number,
  left: _propTypes["default"].number,
  className: _propTypes["default"].string,
  tile: _propTypes["default"].func,
  size: _propTypes["default"].arrayOf(_propTypes["default"].number),
  round: _propTypes["default"].bool,
  padding: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].func]),
  paddingInner: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].func]),
  paddingOuter: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].func]),
  paddingTop: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].func]),
  paddingRight: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].func]),
  paddingBottom: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].func]),
  paddingLeft: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].func]),
  nodeComponent: _propTypes["default"].any
};

function Treemap(_ref) {
  var top = _ref.top,
      left = _ref.left,
      className = _ref.className,
      root = _ref.root,
      tile = _ref.tile,
      size = _ref.size,
      round = _ref.round,
      padding = _ref.padding,
      paddingInner = _ref.paddingInner,
      paddingOuter = _ref.paddingOuter,
      paddingTop = _ref.paddingTop,
      paddingRight = _ref.paddingRight,
      paddingBottom = _ref.paddingBottom,
      paddingLeft = _ref.paddingLeft,
      children = _ref.children,
      _ref$nodeComponent = _ref.nodeComponent,
      nodeComponent = _ref$nodeComponent === void 0 ? _HierarchyDefaultNode["default"] : _ref$nodeComponent,
      restProps = _objectWithoutProperties(_ref, ["top", "left", "className", "root", "tile", "size", "round", "padding", "paddingInner", "paddingOuter", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "children", "nodeComponent"]);

  var treemap = (0, _d3Hierarchy.treemap)();
  if (tile) treemap.tile(tile);
  if (size) treemap.size(size);
  if (round) treemap.round(round);
  if (padding) treemap.padding(padding);
  if (paddingInner) treemap.paddingInner(paddingInner);
  if (paddingOuter) treemap.paddingOuter(paddingOuter);
  if (paddingTop) treemap.paddingTop(paddingTop);
  if (paddingRight) treemap.paddingRight(paddingRight);
  if (paddingBottom) treemap.paddingBottom(paddingBottom);
  if (paddingLeft) treemap.paddingLeft(paddingLeft);
  var data = treemap(root);
  if (children) return children(data);
  return _react["default"].createElement(_group.Group, {
    top: top,
    left: left,
    className: (0, _classnames["default"])('vx-treemap', className)
  }, nodeComponent && data.descendants().map(function (node, i) {
    return _react["default"].createElement(_group.Group, {
      key: "treemap-node-".concat(i)
    }, _react["default"].createElement(nodeComponent, {
      node: node
    }));
  }));
}