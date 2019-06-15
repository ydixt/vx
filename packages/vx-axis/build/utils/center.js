"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = center;

function center(scale) {
  var offset = scale.bandwidth() / 2;
  if (scale.round()) offset = Math.round(offset);
  return function (d) {
    return scale(d) + offset;
  };
}