"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = touchPoint;

var _point = require("@vx/point");

function touchPoint(node, event) {
  if (!node) return;
  var svg = node.ownerSVGElement || node;

  if (svg.createSVGPoint) {
    var point = svg.createSVGPoint();
    point.x = event.changedTouches[0].clientX;
    point.y = event.changedTouches[0].clientY;
    point = point.matrixTransform(node.getScreenCTM().inverse());
    return new _point.Point({
      x: point.x,
      y: point.y
    });
  }

  var rect = node.getBoundingClientRect();
  return new _point.Point({
    x: event.changedTouches[0].clientX - rect.left - node.clientLeft,
    y: event.changedTouches[0].clientY - rect.top - node.clientTop
  });
}