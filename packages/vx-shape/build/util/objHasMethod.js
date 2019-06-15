"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = objHasMethod;

function objHasMethod(obj, funcName) {
  return !!obj[funcName] && typeof obj[funcName] === 'function';
}