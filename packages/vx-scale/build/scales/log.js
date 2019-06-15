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
      base = _ref.base,
      _ref$nice = _ref.nice,
      nice = _ref$nice === void 0 ? false : _ref$nice,
      _ref$clamp = _ref.clamp,
      clamp = _ref$clamp === void 0 ? false : _ref$clamp;
  var scale = (0, _d3Scale.scaleLog)();
  scale.type = 'log';
  if (range) scale.range(range);
  if (rangeRound) scale.rangeRound(rangeRound);
  if (domain) scale.domain(domain);
  if (nice) scale.nice();
  if (clamp) scale.clamp(true);
  if (base) scale.base(base);
  return scale;
};

exports["default"] = _default;