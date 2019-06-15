"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = LinePathAnnotation;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _group = require("@vx/group");

var _shape = require("@vx/shape");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var identity = function identity(x) {
  return x;
};

LinePathAnnotation.propTypes = {
  /**
   * A top pixel offset applied to the entire bar group.
   */
  top: _propTypes["default"].number,

  /**
   * A left pixel offset applied to the entire bar group.
   */
  left: _propTypes["default"].number,

  /**
   * An array of points describing the line path.
   */
  points: _propTypes["default"].array,

  /**
   * The color of the line.
   */
  stroke: _propTypes["default"].string,

  /**
   * The pixel width of the line.
   */
  strokeWidth: _propTypes["default"].number,

  /**
   * Add a class name to the line path.
   */
  className: _propTypes["default"].string,

  /**
   * The text for your label.
   */
  label: _propTypes["default"].string,

  /**
   * The label's textAnchor.
   */
  labelAnchor: _propTypes["default"].oneOf(['start', 'middle', 'end']),

  /**
   * The x-coordinate shift to the label.
   */
  labelDx: _propTypes["default"].number,

  /**
   * The y-coordinate shift to the label
   */
  labelDy: _propTypes["default"].number,

  /**
   * The color of label. Defaults to *props*.**stroke**.
   */
  labelFill: _propTypes["default"].string,

  /**
   * The font size of the label text.
   */
  labelFontSize: _propTypes["default"].number,

  /**
   * The color of the label.
   */
  labelStroke: _propTypes["default"].string,

  /**
   * The stroke width of the label text.
   */
  labelStrokeWidth: _propTypes["default"].number,

  /**
   * The label's SVG [paint-order](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/paint-order).
   */
  labelPaintOrder: _propTypes["default"].string
};

function LinePathAnnotation(_ref) {
  var _ref$top = _ref.top,
      top = _ref$top === void 0 ? 0 : _ref$top,
      _ref$left = _ref.left,
      left = _ref$left === void 0 ? 0 : _ref$left,
      _ref$points = _ref.points,
      points = _ref$points === void 0 ? [] : _ref$points,
      _ref$stroke = _ref.stroke,
      stroke = _ref$stroke === void 0 ? 'black' : _ref$stroke,
      _ref$strokeWidth = _ref.strokeWidth,
      strokeWidth = _ref$strokeWidth === void 0 ? 1 : _ref$strokeWidth,
      className = _ref.className,
      label = _ref.label,
      _ref$labelAnchor = _ref.labelAnchor,
      labelAnchor = _ref$labelAnchor === void 0 ? 'middle' : _ref$labelAnchor,
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
      labelPaintOrder = _ref$labelPaintOrder === void 0 ? 'stroke' : _ref$labelPaintOrder;
  var endPoint = points[points.length - 1];
  return _react["default"].createElement(_group.Group, {
    className: "vx-line-path-annotation-group",
    top: top,
    left: left
  }, _react["default"].createElement(_shape.LinePath, {
    className: (0, _classnames["default"])('vx-line-path-annotation', className),
    data: points,
    x: function x(p) {
      return p.x;
    },
    y: function y(p) {
      return p.y;
    },
    xScale: identity,
    yScale: identity,
    stroke: stroke,
    strokeWidth: strokeWidth
  }), label && _react["default"].createElement("text", {
    x: endPoint.x,
    y: endPoint.y,
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