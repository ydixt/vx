"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Zoom", {
  enumerable: true,
  get: function get() {
    return _Zoom["default"];
  }
});
Object.defineProperty(exports, "identityMatrix", {
  enumerable: true,
  get: function get() {
    return _matrix.identityMatrix;
  }
});
Object.defineProperty(exports, "createMatrix", {
  enumerable: true,
  get: function get() {
    return _matrix.createMatrix;
  }
});
Object.defineProperty(exports, "inverseMatrix", {
  enumerable: true,
  get: function get() {
    return _matrix.inverseMatrix;
  }
});
Object.defineProperty(exports, "applyMatrixToPoint", {
  enumerable: true,
  get: function get() {
    return _matrix.applyMatrixToPoint;
  }
});
Object.defineProperty(exports, "applyInverseMatrixToPoint", {
  enumerable: true,
  get: function get() {
    return _matrix.applyInverseMatrixToPoint;
  }
});
Object.defineProperty(exports, "scaleMatrix", {
  enumerable: true,
  get: function get() {
    return _matrix.scaleMatrix;
  }
});
Object.defineProperty(exports, "translateMatrix", {
  enumerable: true,
  get: function get() {
    return _matrix.translateMatrix;
  }
});
Object.defineProperty(exports, "multiplyMatrices", {
  enumerable: true,
  get: function get() {
    return _matrix.multiplyMatrices;
  }
});
Object.defineProperty(exports, "composeMatrices", {
  enumerable: true,
  get: function get() {
    return _matrix.composeMatrices;
  }
});

var _Zoom = _interopRequireDefault(require("./Zoom"));

var _matrix = require("./util/matrix");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }