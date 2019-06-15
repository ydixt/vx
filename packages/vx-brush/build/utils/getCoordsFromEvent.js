"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getCoordsFromEvent;

function getCoordsFromEvent(node, event) {
  if (!node) return;
  var svg = node.ownerSVGElement || node;

  if (svg.createSVGPoint) {
    var point = svg.createSVGPoint();
    point.x = event.clientX;
    point.y = event.clientY;
    point = point.matrixTransform(node.getScreenCTM().inverse());
    return {
      x: point.x,
      y: point.y
    };
  }

  var rect = node.getBoundingClientRect();
  return {
    x: event.clientX - rect.left - node.clientLeft,
    y: event.clientY - rect.top - node.clientTop
  };
}