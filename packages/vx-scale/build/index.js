"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "scaleBand", {
  enumerable: true,
  get: function get() {
    return _band["default"];
  }
});
Object.defineProperty(exports, "scalePoint", {
  enumerable: true,
  get: function get() {
    return _point["default"];
  }
});
Object.defineProperty(exports, "scaleLinear", {
  enumerable: true,
  get: function get() {
    return _linear["default"];
  }
});
Object.defineProperty(exports, "scaleTime", {
  enumerable: true,
  get: function get() {
    return _time["default"];
  }
});
Object.defineProperty(exports, "scaleUtc", {
  enumerable: true,
  get: function get() {
    return _utc["default"];
  }
});
Object.defineProperty(exports, "scaleLog", {
  enumerable: true,
  get: function get() {
    return _log["default"];
  }
});
Object.defineProperty(exports, "scalePower", {
  enumerable: true,
  get: function get() {
    return _power["default"];
  }
});
Object.defineProperty(exports, "scaleOrdinal", {
  enumerable: true,
  get: function get() {
    return _ordinal["default"];
  }
});
Object.defineProperty(exports, "scaleQuantize", {
  enumerable: true,
  get: function get() {
    return _quantize["default"];
  }
});
Object.defineProperty(exports, "scaleQuantile", {
  enumerable: true,
  get: function get() {
    return _quantile["default"];
  }
});
Object.defineProperty(exports, "scaleThreshold", {
  enumerable: true,
  get: function get() {
    return _threshold["default"];
  }
});
Object.defineProperty(exports, "updateScale", {
  enumerable: true,
  get: function get() {
    return _updateScale["default"];
  }
});

var _band = _interopRequireDefault(require("./scales/band"));

var _point = _interopRequireDefault(require("./scales/point"));

var _linear = _interopRequireDefault(require("./scales/linear"));

var _time = _interopRequireDefault(require("./scales/time"));

var _utc = _interopRequireDefault(require("./scales/utc"));

var _log = _interopRequireDefault(require("./scales/log"));

var _power = _interopRequireDefault(require("./scales/power"));

var _ordinal = _interopRequireDefault(require("./scales/ordinal"));

var _quantize = _interopRequireDefault(require("./scales/quantize"));

var _quantile = _interopRequireDefault(require("./scales/quantile"));

var _threshold = _interopRequireDefault(require("./scales/threshold"));

var _updateScale = _interopRequireDefault(require("./util/updateScale"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }