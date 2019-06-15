"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = updateScale;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var has = Object.prototype.hasOwnProperty;

function updateScale(scale, _ref) {
  var args = _extends({}, _ref);

  var nextScale = scale.copy();
  Object.keys(args).forEach(function (key) {
    if (has.call(nextScale, key)) nextScale[key](args[key]);
  });
  return nextScale;
}