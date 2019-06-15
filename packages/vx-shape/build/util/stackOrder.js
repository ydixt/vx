"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = stackOrder;
exports.STACK_ORDER_NAMES = exports.STACK_ORDERS = void 0;

var _d3Shape = require("d3-shape");

var STACK_ORDERS = {
  ascending: _d3Shape.stackOrderAscending,
  descending: _d3Shape.stackOrderDescending,
  insideout: _d3Shape.stackOrderInsideOut,
  none: _d3Shape.stackOrderNone,
  reverse: _d3Shape.stackOrderReverse
};
exports.STACK_ORDERS = STACK_ORDERS;
var STACK_ORDER_NAMES = Object.keys(STACK_ORDERS);
exports.STACK_ORDER_NAMES = STACK_ORDER_NAMES;

function stackOrder(order) {
  return STACK_ORDERS[order] || STACK_ORDERS.none;
}