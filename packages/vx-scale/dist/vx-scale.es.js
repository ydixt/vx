import { scaleBand, scalePoint, scaleLinear, scaleTime, scaleUtc, scaleLog, scalePow, scaleOrdinal, scaleQuantize, scaleQuantile, scaleThreshold } from 'd3-scale';

var band = (function (_ref) {
  var range = _ref.range,
      rangeRound = _ref.rangeRound,
      domain = _ref.domain,
      padding = _ref.padding,
      paddingInner = _ref.paddingInner,
      paddingOuter = _ref.paddingOuter,
      align = _ref.align,
      tickFormat = _ref.tickFormat;
  var scale = scaleBand();
  scale.type = 'band';
  if (range) scale.range(range);
  if (rangeRound) scale.rangeRound(rangeRound);
  if (domain) scale.domain(domain);
  if (padding) scale.padding(padding);
  if (paddingInner) scale.paddingInner(paddingInner);
  if (paddingOuter) scale.paddingOuter(paddingOuter);
  if (align) scale.align(align);
  if (tickFormat) scale.tickFormat = tickFormat;
  return scale;
});

var point = (function (_ref) {
  var range = _ref.range,
      rangeRound = _ref.rangeRound,
      domain = _ref.domain,
      padding = _ref.padding,
      align = _ref.align,
      _ref$nice = _ref.nice,
      nice = _ref$nice === void 0 ? false : _ref$nice;
  var scale = scalePoint();
  scale.type = 'point';
  if (range) scale.range(range);
  if (rangeRound) scale.rangeRound(rangeRound);
  if (domain) scale.domain(domain);
  if (nice) scale.nice();
  if (padding) scale.padding(padding);
  if (align) scale.align(align);
  return scale;
});

var linear = (function (_ref) {
  var range = _ref.range,
      rangeRound = _ref.rangeRound,
      domain = _ref.domain,
      _ref$nice = _ref.nice,
      nice = _ref$nice === void 0 ? false : _ref$nice,
      _ref$clamp = _ref.clamp,
      clamp = _ref$clamp === void 0 ? false : _ref$clamp;
  var scale = scaleLinear();
  scale.type = 'linear';
  if (range) scale.range(range);
  if (rangeRound) scale.rangeRound(rangeRound);
  if (domain) scale.domain(domain);
  if (nice) scale.nice();
  if (clamp) scale.clamp(true);
  return scale;
});

var time = (function (_ref) {
  var range = _ref.range,
      rangeRound = _ref.rangeRound,
      domain = _ref.domain,
      _ref$nice = _ref.nice,
      nice = _ref$nice === void 0 ? false : _ref$nice,
      _ref$clamp = _ref.clamp,
      clamp = _ref$clamp === void 0 ? false : _ref$clamp;
  var scale = scaleTime();
  scale.type = 'time';
  if (range) scale.range(range);
  if (rangeRound) scale.rangeRound(rangeRound);
  if (domain) scale.domain(domain);
  if (nice) scale.nice();
  if (clamp) scale.clamp(true);
  return scale;
});

var utc = (function (_ref) {
  var range = _ref.range,
      rangeRound = _ref.rangeRound,
      domain = _ref.domain,
      _ref$nice = _ref.nice,
      nice = _ref$nice === void 0 ? false : _ref$nice,
      _ref$clamp = _ref.clamp,
      clamp = _ref$clamp === void 0 ? false : _ref$clamp;
  var scale = scaleUtc();
  scale.type = 'utc';
  if (range) scale.range(range);
  if (rangeRound) scale.rangeRound(rangeRound);
  if (domain) scale.domain(domain);
  if (nice) scale.nice();
  if (clamp) scale.clamp(true);
  return scale;
});

var log = (function (_ref) {
  var range = _ref.range,
      rangeRound = _ref.rangeRound,
      domain = _ref.domain,
      base = _ref.base,
      _ref$nice = _ref.nice,
      nice = _ref$nice === void 0 ? false : _ref$nice,
      _ref$clamp = _ref.clamp,
      clamp = _ref$clamp === void 0 ? false : _ref$clamp;
  var scale = scaleLog();
  scale.type = 'log';
  if (range) scale.range(range);
  if (rangeRound) scale.rangeRound(rangeRound);
  if (domain) scale.domain(domain);
  if (nice) scale.nice();
  if (clamp) scale.clamp(true);
  if (base) scale.base(base);
  return scale;
});

var power = (function (_ref) {
  var range = _ref.range,
      rangeRound = _ref.rangeRound,
      domain = _ref.domain,
      exponent = _ref.exponent,
      _ref$nice = _ref.nice,
      nice = _ref$nice === void 0 ? false : _ref$nice,
      _ref$clamp = _ref.clamp,
      clamp = _ref$clamp === void 0 ? false : _ref$clamp;
  var scale = scalePow();
  scale.type = 'power';
  if (range) scale.range(range);
  if (rangeRound) scale.rangeRound(rangeRound);
  if (domain) scale.domain(domain);
  if (nice) scale.nice();
  if (clamp) scale.clamp(true);
  if (exponent) scale.exponent(exponent);
  return scale;
});

var ordinal = (function (_ref) {
  var range = _ref.range,
      domain = _ref.domain,
      unknown = _ref.unknown;
  var scale = scaleOrdinal();
  scale.type = 'ordinal';
  if (range) scale.range(range);
  if (domain) scale.domain(domain);
  if (unknown) scale.unknown(unknown);
  return scale;
});

var quantize = (function (_ref) {
  var range = _ref.range,
      domain = _ref.domain,
      ticks = _ref.ticks,
      tickFormat = _ref.tickFormat,
      _ref$nice = _ref.nice,
      nice = _ref$nice === void 0 ? false : _ref$nice;
  var scale = scaleQuantize();
  scale.type = 'quantize';
  if (range) scale.range(range);
  if (domain) scale.domain(domain);
  if (nice) scale.nice();
  if (ticks) scale.ticks(ticks);
  if (tickFormat) scale.tickFormat(tickFormat);
  return scale;
});

var quantile = (function (_ref) {
  var range = _ref.range,
      domain = _ref.domain;
  var scale = scaleQuantile();
  scale.type = 'quantile';
  if (range) scale.range(range);
  if (domain) scale.domain(domain);
  return scale;
});

var threshold = (function (_ref) {
  var range = _ref.range,
      domain = _ref.domain;
  var scale = scaleThreshold();
  scale.type = 'threshold';
  if (range) scale.range(range);
  if (domain) scale.domain(domain);
  return scale;
});

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var has = Object.prototype.hasOwnProperty;
function updateScale(scale, _ref) {
  var args = _extends({}, _ref);

  var nextScale = scale.copy();
  Object.keys(args).forEach(function (key) {
    if (has.call(nextScale, key)) nextScale[key](args[key]);
  });
  return nextScale;
}

export { band as scaleBand, point as scalePoint, linear as scaleLinear, time as scaleTime, utc as scaleUtc, log as scaleLog, power as scalePower, ordinal as scaleOrdinal, quantize as scaleQuantize, quantile as scaleQuantile, threshold as scaleThreshold, updateScale };
