"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = constrainToRegion;

function constrainToRegion(_ref) {
  var region = _ref.region,
      x = _ref.x,
      y = _ref.y;
  var x0 = region.x0,
      x1 = region.x1,
      y0 = region.y0,
      y1 = region.y1;
  return {
    x: x < x0 ? x0 : x > x1 ? x1 : x,
    y: y < y0 ? y0 : y > y1 ? y1 : y
  };
}