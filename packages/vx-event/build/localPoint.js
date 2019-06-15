"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = localPoint;

var _point = require("@vx/point");

function localPoint(node, event) {
  // called with no args
  if (!node) return; // called with localPoint(event)

  if (node.target) {
    event = node; // set node to targets owner svg

    node = event.target.ownerSVGElement; // find the outermost svg

    while (node.ownerSVGElement) {
      node = node.ownerSVGElement;
    }
  } // default to mouse event


  var _event = event,
      clientX = _event.clientX,
      clientY = _event.clientY; // support touch event

  if (event.changedTouches) {
    clientX = event.changedTouches[0].clientX;
    clientY = event.changedTouches[0].clientY;
  } // calculate coordinates from svg


  if (node.createSVGPoint) {
    var point = node.createSVGPoint();
    point.x = clientX;
    point.y = clientY;
    point = point.matrixTransform(node.getScreenCTM().inverse());
    return new _point.Point({
      x: point.x,
      y: point.y
    });
  } // fallback to calculating position from non-svg dom node


  var rect = node.getBoundingClientRect();
  return new _point.Point({
    x: clientX - rect.left - node.clientLeft,
    y: clientY - rect.top - node.clientTop
  });
}