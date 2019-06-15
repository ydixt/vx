"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = genBins;

var _genBin = _interopRequireDefault(require("./genBin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function genBins(x, y, bin, count) {
  return Array(x).fill(1).reduce(function (data, d, i) {
    return data.concat([{
      bin: i,
      bins: (0, _genBin["default"])(y, bin, count)
    }]);
  }, []);
}