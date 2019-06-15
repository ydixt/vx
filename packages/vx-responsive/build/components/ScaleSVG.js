"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ResponsiveSVG;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

ResponsiveSVG.propTypes = {
  children: _propTypes["default"].any,
  width: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  height: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  xOrigin: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  yOrigin: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  preserveAspectRatio: _propTypes["default"].string,
  innerRef: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].object])
};

function ResponsiveSVG(_ref) {
  var children = _ref.children,
      width = _ref.width,
      height = _ref.height,
      _ref$xOrigin = _ref.xOrigin,
      xOrigin = _ref$xOrigin === void 0 ? 0 : _ref$xOrigin,
      _ref$yOrigin = _ref.yOrigin,
      yOrigin = _ref$yOrigin === void 0 ? 0 : _ref$yOrigin,
      _ref$preserveAspectRa = _ref.preserveAspectRatio,
      preserveAspectRatio = _ref$preserveAspectRa === void 0 ? 'xMinYMin meet' : _ref$preserveAspectRa,
      innerRef = _ref.innerRef;
  return _react["default"].createElement("div", {
    style: {
      display: 'inline-block',
      position: 'relative',
      width: '100%',
      verticalAlign: 'top',
      overflow: 'hidden'
    }
  }, _react["default"].createElement("svg", {
    preserveAspectRatio: preserveAspectRatio,
    viewBox: "".concat(xOrigin, " ").concat(yOrigin, " ").concat(width, " ").concat(height),
    ref: innerRef
  }, children));
}