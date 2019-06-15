"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _d3Scale = require("d3-scale");

var _default = function _default(_ref) {
  var range = _ref.range,
      domain = _ref.domain,
      unknown = _ref.unknown;
  var scale = (0, _d3Scale.scaleOrdinal)();
  scale.type = 'ordinal';
  if (range) scale.range(range);
  if (domain) scale.domain(domain);
  if (unknown) scale.unknown(unknown);
  return scale;
};

exports["default"] = _default;