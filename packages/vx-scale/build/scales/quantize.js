"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _d3Scale = require("d3-scale");

var _default = function _default(_ref) {
  var range = _ref.range,
      domain = _ref.domain,
      ticks = _ref.ticks,
      tickFormat = _ref.tickFormat,
      _ref$nice = _ref.nice,
      nice = _ref$nice === void 0 ? false : _ref$nice;
  var scale = (0, _d3Scale.scaleQuantize)();
  scale.type = 'quantize';
  if (range) scale.range(range);
  if (domain) scale.domain(domain);
  if (nice) scale.nice();
  if (ticks) scale.ticks(ticks);
  if (tickFormat) scale.tickFormat(tickFormat);
  return scale;
};

exports["default"] = _default;