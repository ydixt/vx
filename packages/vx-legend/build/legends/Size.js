"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = LegendSize;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Legend = _interopRequireDefault(require("./Legend"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function LegendSize(_ref) {
  var scale = _ref.scale,
      domain = _ref.domain,
      _ref$steps = _ref.steps,
      steps = _ref$steps === void 0 ? 5 : _ref$steps,
      _ref$labelFormat = _ref.labelFormat,
      labelFormat = _ref$labelFormat === void 0 ? function (x) {
    return x;
  } : _ref$labelFormat,
      _ref$labelTransform = _ref.labelTransform,
      labelTransform = _ref$labelTransform === void 0 ? defaultTransform : _ref$labelTransform,
      restProps = _objectWithoutProperties(_ref, ["scale", "domain", "steps", "labelFormat", "labelTransform"]);

  domain = domain || defaultDomain({
    steps: steps,
    scale: scale
  });
  return _react["default"].createElement(_Legend["default"], _extends({
    scale: scale,
    domain: domain,
    labelFormat: labelFormat,
    labelTransform: labelTransform
  }, restProps));
}

function defaultDomain(_ref2) {
  var steps = _ref2.steps,
      scale = _ref2.scale;
  var domain = scale.domain();
  var start = domain[0];
  var end = domain[domain.length - 1];
  var step = (end - start) / (steps - 1);
  return new Array(steps).fill(1).reduce(function (acc, cur, i) {
    acc.push(start + i * step);
    return acc;
  }, []);
}

function defaultTransform(_ref3) {
  var scale = _ref3.scale,
      labelFormat = _ref3.labelFormat;
  return function (d, i) {
    return {
      text: "".concat(labelFormat(d, i)),
      value: scale(d),
      datum: d,
      index: i
    };
  };
}