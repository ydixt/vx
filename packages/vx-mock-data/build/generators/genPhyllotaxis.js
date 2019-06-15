"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = genPhyllotaxis;

function genPhyllotaxis(_ref) {
  var radius = _ref.radius,
      width = _ref.width,
      height = _ref.height;
  var theta = Math.PI * (3 - Math.sqrt(5));
  return function (i) {
    var r = radius * Math.sqrt(i);
    var a = theta * i;
    return {
      x: width / 2 + r * Math.cos(a),
      y: height / 2 + r * Math.sin(a)
    };
  };
}