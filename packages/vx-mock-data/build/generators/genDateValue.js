"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = genDateValue;

function genDateValue(n) {
  return Array(n).fill(1).map(function (d, i) {
    return {
      date: new Date(Date.now() - i * 3600000),
      value: Math.max(250, Math.random() * 3000 | 0)
    };
  });
}