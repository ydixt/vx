"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _d3Scale = require("d3-scale");

var _default = function _default(_ref) {
  var range = _ref.range,
      domain = _ref.domain;
  var scale = (0, _d3Scale.scaleQuantile)();
  scale.type = 'quantile';
  if (range) scale.range(range);
  if (domain) scale.domain(domain);
  return scale;
};

exports["default"] = _default;