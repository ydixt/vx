"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _d3Voronoi = require("d3-voronoi");

// returns a d3 voronoi *layout*, for a voronoi *diagram* call `layout(data)`
// alternatively call layout.polygons(data), layout.triangles(data), layout.links(data)
var _default = function _default(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? 0 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 0 : _ref$height,
      x = _ref.x,
      y = _ref.y;
  var voronoi = (0, _d3Voronoi.voronoi)();
  if (x) voronoi.x(x);
  if (y) voronoi.y(y);
  voronoi.extent([[-1, -1], [width + 1, height + 1]]);
  return voronoi;
};

exports["default"] = _default;