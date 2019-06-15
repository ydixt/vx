"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "withBoundingRects", {
  enumerable: true,
  get: function get() {
    return _withBoundingRects["default"];
  }
});
Object.defineProperty(exports, "withBoundingRectsProps", {
  enumerable: true,
  get: function get() {
    return _withBoundingRects.withBoundingRectsProps;
  }
});

var _withBoundingRects = _interopRequireWildcard(require("./enhancers/withBoundingRects"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }