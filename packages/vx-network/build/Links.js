"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Links;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _group = require("@vx/group");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

Links.propTypes = {
  links: _propTypes["default"].array,
  linkComponent: _propTypes["default"].any,
  className: _propTypes["default"].string
};

function Links(_ref) {
  var links = _ref.links,
      linkComponent = _ref.linkComponent,
      className = _ref.className;
  return _react["default"].createElement(_group.Group, null, links.map(function (link, i) {
    return _react["default"].createElement(_group.Group, {
      className: (0, _classnames["default"])('vx-network-links', className),
      key: "network-link-".concat(i)
    }, _react["default"].createElement(linkComponent, {
      link: link
    }));
  }));
}