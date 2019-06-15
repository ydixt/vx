"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _d3Scale = require("d3-scale");

var _default = function _default(_ref) {
  var range = _ref.range,
      rangeRound = _ref.rangeRound,
      domain = _ref.domain,
      padding = _ref.padding,
      align = _ref.align,
      _ref$nice = _ref.nice,
      nice = _ref$nice === void 0 ? false : _ref$nice;
  var scale = (0, _d3Scale.scalePoint)();
  scale.type = 'point';
  if (range) scale.range(range);
  if (rangeRound) scale.rangeRound(rangeRound);
  if (domain) scale.domain(domain);
  if (nice) scale.nice();
  if (padding) scale.padding(padding);
  if (align) scale.align(align);
  return scale;
};

exports["default"] = _default;