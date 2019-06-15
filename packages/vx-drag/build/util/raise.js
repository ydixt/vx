"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = raise;

function raise(items, raiseIndex) {
  var array = items.slice();
  var lastIndex = array.length - 1;
  var raiseItem = array.splice(raiseIndex, 1)[0];
  array.splice(lastIndex, 0, raiseItem);
  return array;
}