"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCircles = createCircles;
exports["default"] = PatternCircles;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Pattern = _interopRequireDefault(require("./Pattern"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Creates an array of cirlces for a list of corners
 * in the format [[cornerX, cornerY], ...]
 */
function createCircles(_ref) {
  var corners = _ref.corners,
      id = _ref.id,
      radius = _ref.radius,
      fill = _ref.fill,
      stroke = _ref.stroke,
      strokeWidth = _ref.strokeWidth,
      strokeDasharray = _ref.strokeDasharray,
      className = _ref.className;
  return corners.map(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
        cornerX = _ref3[0],
        cornerY = _ref3[1];

    return _react["default"].createElement("circle", {
      key: "".concat(id, "-complement-").concat(cornerX, "-").concat(cornerY),
      className: (0, _classnames["default"])('vx-pattern-circle vx-pattern-circle-complement', className),
      cx: cornerX,
      cy: cornerY,
      r: radius,
      fill: fill,
      stroke: stroke,
      strokeWidth: strokeWidth,
      strokeDasharray: strokeDasharray
    });
  });
}

PatternCircles.propTypes = {
  id: _propTypes["default"].string.isRequired,
  width: _propTypes["default"].number.isRequired,
  height: _propTypes["default"].number.isRequired,
  radius: _propTypes["default"].number,
  fill: _propTypes["default"].string,
  className: _propTypes["default"].string,
  stroke: _propTypes["default"].string,
  strokeWidth: _propTypes["default"].number,
  strokeDasharray: _propTypes["default"].string,
  complement: _propTypes["default"].bool,
  background: _propTypes["default"].string
};

function PatternCircles(_ref4) {
  var id = _ref4.id,
      width = _ref4.width,
      height = _ref4.height,
      _ref4$radius = _ref4.radius,
      radius = _ref4$radius === void 0 ? 2 : _ref4$radius,
      fill = _ref4.fill,
      stroke = _ref4.stroke,
      strokeWidth = _ref4.strokeWidth,
      strokeDasharray = _ref4.strokeDasharray,
      background = _ref4.background,
      _ref4$complement = _ref4.complement,
      complement = _ref4$complement === void 0 ? false : _ref4$complement,
      className = _ref4.className;
  var corners;

  if (complement) {
    corners = [[0, 0], [0, height], [width, 0], [width, height]];
  }

  return _react["default"].createElement(_Pattern["default"], {
    id: id,
    width: width,
    height: height
  }, !!background && _react["default"].createElement("rect", {
    width: width,
    height: height,
    fill: background
  }), _react["default"].createElement("circle", {
    className: (0, _classnames["default"])('vx-pattern-circle', className),
    cx: width / 2,
    cy: height / 2,
    r: radius,
    fill: fill,
    stroke: stroke,
    strokeWidth: strokeWidth,
    strokeDasharray: strokeDasharray
  }), complement && createCircles({
    corners: corners,
    id: id,
    radius: radius,
    fill: fill,
    stroke: stroke,
    strokeWidth: strokeWidth,
    strokeDasharray: strokeDasharray
  }));
}