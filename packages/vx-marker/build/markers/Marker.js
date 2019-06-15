"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Marker;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _shape = require("@vx/shape");

var _group = require("@vx/group");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

Marker.propTypes = {
  top: _propTypes["default"].number,
  left: _propTypes["default"].number,
  from: _propTypes["default"].object,
  to: _propTypes["default"].object,
  stroke: _propTypes["default"].string,
  strokeWidth: _propTypes["default"].number,
  strokeDasharray: _propTypes["default"].string,
  transform: _propTypes["default"].string,
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func]),
  labelAnchor: _propTypes["default"].string,
  labelDx: _propTypes["default"].number,
  labelDy: _propTypes["default"].number,
  labelFill: _propTypes["default"].string,
  labelStroke: _propTypes["default"].string,
  labelStrokeWidth: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  labelFontSize: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  labelPaintOrder: _propTypes["default"].string,
  className: _propTypes["default"].string
};

function Marker(_ref) {
  var _ref$top = _ref.top,
      top = _ref$top === void 0 ? 0 : _ref$top,
      _ref$left = _ref.left,
      left = _ref$left === void 0 ? 0 : _ref$left,
      from = _ref.from,
      to = _ref.to,
      _ref$stroke = _ref.stroke,
      stroke = _ref$stroke === void 0 ? 'magenta' : _ref$stroke,
      _ref$strokeWidth = _ref.strokeWidth,
      strokeWidth = _ref$strokeWidth === void 0 ? 2 : _ref$strokeWidth,
      strokeDasharray = _ref.strokeDasharray,
      transform = _ref.transform,
      label = _ref.label,
      _ref$labelAnchor = _ref.labelAnchor,
      labelAnchor = _ref$labelAnchor === void 0 ? 'left' : _ref$labelAnchor,
      _ref$labelDx = _ref.labelDx,
      labelDx = _ref$labelDx === void 0 ? 0 : _ref$labelDx,
      _ref$labelDy = _ref.labelDy,
      labelDy = _ref$labelDy === void 0 ? 0 : _ref$labelDy,
      labelFill = _ref.labelFill,
      _ref$labelFontSize = _ref.labelFontSize,
      labelFontSize = _ref$labelFontSize === void 0 ? 10 : _ref$labelFontSize,
      _ref$labelStroke = _ref.labelStroke,
      labelStroke = _ref$labelStroke === void 0 ? 'white' : _ref$labelStroke,
      _ref$labelStrokeWidth = _ref.labelStrokeWidth,
      labelStrokeWidth = _ref$labelStrokeWidth === void 0 ? 3 : _ref$labelStrokeWidth,
      _ref$labelPaintOrder = _ref.labelPaintOrder,
      labelPaintOrder = _ref$labelPaintOrder === void 0 ? 'stroke' : _ref$labelPaintOrder,
      className = _ref.className;
  return _react["default"].createElement(_group.Group, {
    top: top,
    left: left
  }, _react["default"].createElement(_shape.Line, {
    className: (0, _classnames["default"])('vx-marker-line', className),
    from: from,
    to: to,
    stroke: stroke,
    strokeWidth: strokeWidth,
    strokeDasharray: strokeDasharray,
    transform: transform
  }), label && _react["default"].createElement("text", {
    x: from.x,
    y: from.y,
    dx: labelDx,
    dy: labelDy,
    fontSize: labelFontSize,
    fill: labelFill || stroke,
    stroke: labelStroke,
    strokeWidth: labelStrokeWidth,
    textAnchor: labelAnchor,
    paintOrder: labelPaintOrder
  }, label));
}