"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.genPointsRange = genPointsRange;
exports["default"] = genPoints;

var _d3Random = require("d3-random");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var random = (0, _d3Random.randomNormal)(0, 0.2);
var sqrt3 = Math.sqrt(3);

function range(n) {
  return Array(n).fill(1);
}

function genPointsRange(n, _ref) {
  var _ref2 = _slicedToArray(_ref, 3),
      offsetX = _ref2[0],
      offsetY = _ref2[1],
      index = _ref2[2];

  return range(n).map(function () {
    return [random() + offsetX, random() + offsetY, index];
  });
}

function genPoints() {
  var count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 300;
  return [].concat(_toConsumableArray(genPointsRange(count, [sqrt3, 1, 0])), _toConsumableArray(genPointsRange(count, [-sqrt3, 1, 1])), _toConsumableArray(genPointsRange(count, [0, -1, 2])));
}