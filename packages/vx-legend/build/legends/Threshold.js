"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = LegendThreshold;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Legend = _interopRequireDefault(require("./Legend"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

LegendThreshold.propTypes = {
  scale: _propTypes["default"].func.isRequired,
  domain: _propTypes["default"].array,
  labelTransform: _propTypes["default"].func,
  labelFormat: _propTypes["default"].func,
  labelDelimiter: _propTypes["default"].string,
  labelLower: _propTypes["default"].string,
  labelUpper: _propTypes["default"].string
};

function LegendThreshold(_ref) {
  var scale = _ref.scale,
      domain = _ref.domain,
      _ref$labelFormat = _ref.labelFormat,
      labelFormat = _ref$labelFormat === void 0 ? function (x) {
    return x;
  } : _ref$labelFormat,
      labelTransform = _ref.labelTransform,
      _ref$labelDelimiter = _ref.labelDelimiter,
      labelDelimiter = _ref$labelDelimiter === void 0 ? 'to' : _ref$labelDelimiter,
      _ref$labelLower = _ref.labelLower,
      labelLower = _ref$labelLower === void 0 ? 'Less than ' : _ref$labelLower,
      _ref$labelUpper = _ref.labelUpper,
      labelUpper = _ref$labelUpper === void 0 ? 'More than ' : _ref$labelUpper,
      restProps = _objectWithoutProperties(_ref, ["scale", "domain", "labelFormat", "labelTransform", "labelDelimiter", "labelLower", "labelUpper"]);

  domain = domain || scale.range();
  labelTransform = labelTransform || defaultTransform({
    labelDelimiter: labelDelimiter,
    labelLower: labelLower,
    labelUpper: labelUpper
  });
  return _react["default"].createElement(_Legend["default"], _extends({
    scale: scale,
    domain: domain,
    labelFormat: labelFormat,
    labelTransform: labelTransform
  }, restProps));
}

function defaultTransform(_ref2) {
  var labelDelimiter = _ref2.labelDelimiter,
      labelLower = _ref2.labelLower,
      labelUpper = _ref2.labelUpper;
  return function (_ref3) {
    var scale = _ref3.scale,
        labelFormat = _ref3.labelFormat;

    function format(_labelFormat, value, i) {
      var formattedValue = _labelFormat(value, i);

      if (formattedValue === 0) return '0';
      return formattedValue || '';
    }

    return function (d, i) {
      var _scale$invertExtent = scale.invertExtent(d),
          _scale$invertExtent2 = _slicedToArray(_scale$invertExtent, 2),
          x0 = _scale$invertExtent2[0],
          x1 = _scale$invertExtent2[1];

      var delimiter = " ".concat(labelDelimiter, " ");
      var value;

      if (x0 !== 0 && !x0 && (x1 === 0 || !!x1)) {
        // lower threshold
        value = x1 - 1;
        delimiter = labelLower;
      } else if ((x0 === 0 || !!x0) && (x1 === 0 || !!x1)) {
        // threshold step
        value = x0;
      } else if (!x1 && (x0 === 0 || !!x0)) {
        // upper threshold
        value = x0 + scale.domain()[1];
        x1 = x0;
        x0 = undefined;
        delimiter = labelUpper;
      }

      return {
        extent: [x0, x1],
        text: "".concat(format(labelFormat, x0, i)).concat(delimiter).concat(format(labelFormat, x1, i)),
        value: scale(value),
        datum: d,
        index: i
      };
    };
  };
}