"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = CustomProjection;

var _react = _interopRequireDefault(require("react"));

var _Projection = _interopRequireDefault(require("./Projection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * All props pass through to `<Projection projection={customProjection} {...props} />`
 */
function CustomProjection(props) {
  return _react["default"].createElement(_Projection["default"], props);
}