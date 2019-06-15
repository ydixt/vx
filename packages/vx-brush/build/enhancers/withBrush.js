"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _recompose = require("recompose");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = (0, _recompose.compose)((0, _recompose.withState)('brush', 'updateBrush', {
  start: undefined,
  end: undefined,
  domain: undefined,
  isBrushing: false
}), (0, _recompose.withHandlers)({
  onBrushStart: function onBrushStart(_ref) {
    var updateBrush = _ref.updateBrush;
    return function (_ref2) {
      var x = _ref2.x,
          y = _ref2.y;
      updateBrush(function (prevState) {
        return _objectSpread({}, prevState, {
          start: {
            x: x,
            y: y
          },
          isBrushing: true,
          end: undefined,
          domain: undefined
        });
      });
    };
  },
  onBrushDrag: function onBrushDrag(_ref3) {
    var updateBrush = _ref3.updateBrush;
    return function (_ref4) {
      var x = _ref4.x,
          y = _ref4.y;
      updateBrush(function (prevState) {
        return _objectSpread({}, prevState, {
          end: {
            x: x,
            y: y
          },
          domain: undefined
        });
      });
    };
  },
  onBrushEnd: function onBrushEnd(_ref5) {
    var updateBrush = _ref5.updateBrush;
    return function (_ref6) {
      var x = _ref6.x,
          y = _ref6.y;
      updateBrush(function (prevState) {
        var start = prevState.start;
        return _objectSpread({}, prevState, {
          isBrushing: false,
          domain: {
            x0: Math.min(start.x, x),
            x1: Math.max(start.x, x),
            y0: Math.min(start.y, y),
            y1: Math.max(start.y, y)
          }
        });
      });
    };
  },
  onBrushReset: function onBrushReset(_ref7) {
    var updateBrush = _ref7.updateBrush;
    return function (event) {
      updateBrush(function (prevState) {
        return {
          start: undefined,
          end: undefined,
          domain: undefined,
          isBrushing: false
        };
      });
    };
  }
}));

exports["default"] = _default;