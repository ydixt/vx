"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = genBin;

var defaultCount = function defaultCount(i, n) {
  return Math.random() * (25 * (n - i));
};

var defaultBin = function defaultBin(i, n) {
  return i * 150;
};

function genBin(n) {
  var bin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultBin;
  var count = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultCount;
  return Array(n).fill(1).reduce(function (data, d, i) {
    return data.concat([{
      bin: bin(i, n),
      count: count(i, n)
    }]);
  }, []);
}