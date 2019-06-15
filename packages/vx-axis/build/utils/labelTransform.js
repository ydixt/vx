"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = labelTransform;

var _orientation = _interopRequireDefault(require("../constants/orientation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function labelTransform(_ref) {
  var labelOffset = _ref.labelOffset,
      labelProps = _ref.labelProps,
      orientation = _ref.orientation,
      range = _ref.range,
      tickLabelFontSize = _ref.tickLabelFontSize,
      tickLength = _ref.tickLength;
  var sign = orientation === _orientation["default"].left || orientation === _orientation["default"].top ? -1 : 1;
  var x;
  var y;
  var transform = null;

  if (orientation === _orientation["default"].top || orientation === _orientation["default"].bottom) {
    x = (range[0] + range[range.length - 1]) / 2;
    y = sign * (tickLength + labelOffset + tickLabelFontSize + (orientation === _orientation["default"].bottom ? labelProps.fontSize : 0));
  } else {
    x = sign * ((range[0] + range[range.length - 1]) / 2);
    y = -(tickLength + labelOffset);
    transform = "rotate(".concat(sign * 90, ")");
  }

  return {
    x: x,
    y: y,
    transform: transform
  };
}