"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Legend;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _LegendItem = _interopRequireDefault(require("./LegendItem"));

var _LegendLabel = _interopRequireDefault(require("./LegendLabel"));

var _LegendShape = _interopRequireDefault(require("./LegendShape"));

var _valueOrIdentity = _interopRequireDefault(require("../util/valueOrIdentity"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

Legend.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].any,
  domain: _propTypes["default"].array,
  scale: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].object]).isRequired,
  shapeWidth: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  shapeHeight: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  shapeMargin: _propTypes["default"].any,
  labelAlign: _propTypes["default"].string,
  labelFlex: _propTypes["default"].string,
  labelMargin: _propTypes["default"].string,
  itemMargin: _propTypes["default"].string,
  direction: _propTypes["default"].string,
  itemDirection: _propTypes["default"].string,
  fill: _propTypes["default"].any,
  size: _propTypes["default"].any,
  shape: _propTypes["default"].any,
  shapeStyle: _propTypes["default"].any,
  labelFormat: _propTypes["default"].func,
  labelTransform: _propTypes["default"].func,
  children: _propTypes["default"].func
};
var defaultStyle = {
  display: 'flex'
};

function Legend(_ref) {
  var className = _ref.className,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? defaultStyle : _ref$style,
      shapeStyle = _ref.shapeStyle,
      scale = _ref.scale,
      shape = _ref.shape,
      domain = _ref.domain,
      _ref$fill = _ref.fill,
      fill = _ref$fill === void 0 ? _valueOrIdentity["default"] : _ref$fill,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? _valueOrIdentity["default"] : _ref$size,
      _ref$labelFormat = _ref.labelFormat,
      labelFormat = _ref$labelFormat === void 0 ? _valueOrIdentity["default"] : _ref$labelFormat,
      _ref$labelTransform = _ref.labelTransform,
      labelTransform = _ref$labelTransform === void 0 ? defaultTransform : _ref$labelTransform,
      _ref$shapeWidth = _ref.shapeWidth,
      shapeWidth = _ref$shapeWidth === void 0 ? 15 : _ref$shapeWidth,
      _ref$shapeHeight = _ref.shapeHeight,
      shapeHeight = _ref$shapeHeight === void 0 ? 15 : _ref$shapeHeight,
      _ref$shapeMargin = _ref.shapeMargin,
      shapeMargin = _ref$shapeMargin === void 0 ? '2px 4px 2px 0' : _ref$shapeMargin,
      _ref$labelAlign = _ref.labelAlign,
      labelAlign = _ref$labelAlign === void 0 ? 'left' : _ref$labelAlign,
      _ref$labelFlex = _ref.labelFlex,
      labelFlex = _ref$labelFlex === void 0 ? '1' : _ref$labelFlex,
      _ref$labelMargin = _ref.labelMargin,
      labelMargin = _ref$labelMargin === void 0 ? '0 4px' : _ref$labelMargin,
      _ref$itemMargin = _ref.itemMargin,
      itemMargin = _ref$itemMargin === void 0 ? '0' : _ref$itemMargin,
      _ref$direction = _ref.direction,
      direction = _ref$direction === void 0 ? 'column' : _ref$direction,
      _ref$itemDirection = _ref.itemDirection,
      itemDirection = _ref$itemDirection === void 0 ? 'row' : _ref$itemDirection,
      children = _ref.children,
      restProps = _objectWithoutProperties(_ref, ["className", "style", "shapeStyle", "scale", "shape", "domain", "fill", "size", "labelFormat", "labelTransform", "shapeWidth", "shapeHeight", "shapeMargin", "labelAlign", "labelFlex", "labelMargin", "itemMargin", "direction", "itemDirection", "children"]);

  domain = domain || scale.domain();
  var labels = domain.map(labelTransform({
    scale: scale,
    labelFormat: labelFormat
  }));
  if (children) return children(labels);
  return _react["default"].createElement("div", {
    className: (0, _classnames["default"])('vx-legend', className),
    style: _objectSpread({}, style, {
      flexDirection: direction
    })
  }, labels.map(function (label, i) {
    var text = label.text;
    return _react["default"].createElement(_LegendItem["default"], _extends({
      key: "legend-".concat(label, "-").concat(i),
      margin: itemMargin,
      flexDirection: itemDirection,
      label: label
    }, restProps), _react["default"].createElement(_LegendShape["default"], {
      shape: shape,
      height: shapeHeight,
      width: shapeWidth,
      margin: shapeMargin,
      label: label,
      fill: fill,
      size: size,
      shapeStyle: shapeStyle
    }), _react["default"].createElement(_LegendLabel["default"], {
      label: text,
      flex: labelFlex,
      margin: labelMargin,
      align: labelAlign
    }));
  }));
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