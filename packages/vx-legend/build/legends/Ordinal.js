"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = LegendOrdinal;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Legend = _interopRequireDefault(require("./Legend"));

var _valueOrIdentity = _interopRequireDefault(require("../util/valueOrIdentity"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

LegendOrdinal.propTypes = {
  scale: _propTypes["default"].func.isRequired,
  domain: _propTypes["default"].array,
  labelTransform: _propTypes["default"].func,
  labelFormat: _propTypes["default"].func
};

function LegendOrdinal(_ref) {
  var scale = _ref.scale,
      domain = _ref.domain,
      _ref$labelTransform = _ref.labelTransform,
      labelTransform = _ref$labelTransform === void 0 ? defaultTransform : _ref$labelTransform,
      _ref$labelFormat = _ref.labelFormat,
      labelFormat = _ref$labelFormat === void 0 ? _valueOrIdentity["default"] : _ref$labelFormat,
      restProps = _objectWithoutProperties(_ref, ["scale", "domain", "labelTransform", "labelFormat"]);

  return _react["default"].createElement(_Legend["default"], _extends({
    scale: scale,
    domain: domain,
    labelFormat: labelFormat,
    labelTransform: labelTransform
  }, restProps));
}

function defaultTransform(_ref2) {
  var scale = _ref2.scale,
      labelFormat = _ref2.labelFormat;
  return function (d, i) {
    return {
      datum: d,
      index: i,
      text: "".concat(labelFormat(d, i)),
      value: scale(d)
    };
  };
}