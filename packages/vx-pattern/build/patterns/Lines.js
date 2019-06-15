"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = PatternLines;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Pattern = _interopRequireDefault(require("./Pattern"));

var _constants = _interopRequireDefault(require("../constants"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function pathForOrientation(_ref) {
  var height = _ref.height,
      orientation = _ref.orientation;
  var path;

  switch (orientation) {
    case _constants["default"].vertical:
      path = "M ".concat(height / 2, ", 0 l 0, ").concat(height);
      break;

    case _constants["default"].horizontal:
      path = "M 0,".concat(height / 2, " l ").concat(height, ",0");
      break;

    case _constants["default"].diagonal:
      path = "M 0,".concat(height, " l ").concat(height, ",").concat(-height, " M ").concat(-height / 4, ",").concat(height / 4, " l ").concat(height / 2, ",").concat(-height / 2, "\n             M ").concat(3 / 4 * height, ",").concat(5 / 4 * height, " l ").concat(height / 2, ",").concat(-height / 2);
      break;

    default:
      path = "M ".concat(height / 2, ", 0 l 0, ").concat(height);
  }

  return path;
}

function PatternLines(_ref2) {
  var id = _ref2.id,
      width = _ref2.width,
      height = _ref2.height,
      stroke = _ref2.stroke,
      strokeWidth = _ref2.strokeWidth,
      strokeDasharray = _ref2.strokeDasharray,
      _ref2$strokeLinecap = _ref2.strokeLinecap,
      strokeLinecap = _ref2$strokeLinecap === void 0 ? 'square' : _ref2$strokeLinecap,
      _ref2$shapeRendering = _ref2.shapeRendering,
      shapeRendering = _ref2$shapeRendering === void 0 ? 'auto' : _ref2$shapeRendering,
      _ref2$orientation = _ref2.orientation,
      orientation = _ref2$orientation === void 0 ? ['vertical'] : _ref2$orientation,
      background = _ref2.background,
      className = _ref2.className;
  if (!Array.isArray(orientation)) orientation = [orientation];
  return _react["default"].createElement(_Pattern["default"], {
    id: id,
    width: width,
    height: height
  }, !!background && _react["default"].createElement("rect", {
    className: (0, _classnames["default"])('vx-pattern-line-background'),
    width: width,
    height: height,
    fill: background
  }), orientation.map(function (o, i) {
    return _react["default"].createElement("path", {
      key: "vx-".concat(id, "-line-").concat(o, "-").concat(i),
      className: (0, _classnames["default"])('vx-pattern-line', className),
      d: pathForOrientation({
        orientation: o,
        height: height
      }),
      stroke: stroke,
      strokeWidth: strokeWidth,
      strokeDasharray: strokeDasharray,
      strokeLinecap: strokeLinecap,
      shapeRendering: shapeRendering
    });
  }));
}

PatternLines.propTypes = {
  id: _propTypes["default"].string.isRequired,
  width: _propTypes["default"].number.isRequired,
  height: _propTypes["default"].number.isRequired,
  background: _propTypes["default"].string,
  stroke: _propTypes["default"].string.isRequired,
  strokeWidth: _propTypes["default"].number.isRequired,
  strokeDasharray: _propTypes["default"].string,
  className: _propTypes["default"].string,
  strokeLinecap: _propTypes["default"].string,
  shapeRendering: _propTypes["default"].string,
  orientation: _propTypes["default"].array
};