"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = BarGroup;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _group = require("@vx/group");

var _objHasMethod = _interopRequireDefault(require("../util/objHasMethod"));

var _Bar = _interopRequireDefault(require("./Bar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

BarGroup.propTypes = {
  /**
   * An array of bar group objects.
   */
  data: _propTypes["default"].array.isRequired,

  /**
   * ```js
   * x0(barGroup)
   * ```
   * An accessor function that returns the `x0` value for each datum in *props*.**data**.
   */
  x0: _propTypes["default"].func.isRequired,

  /**
   * ```js
   * x0Scale(x0(barGroup))
   * ```
   * A scale function that returns the x position of the bar group.
   */
  x0Scale: _propTypes["default"].func.isRequired,

  /**
   * ```js
   * x1Scale(key)
   * ```
   * A scale function that returns the x position of the bar within a bar group.
   */
  x1Scale: _propTypes["default"].func.isRequired,

  /**
   * ```js
   * yScale(value)
   * ```
   * A scale function that retuns the y position of the bar within a bar group. `value` is the value of the `key` in the bar group.
   */
  yScale: _propTypes["default"].func.isRequired,

  /**
   * ```js
   * color(key, barIndex)
   * ```
   * A function that returns color for each bar within a bar group.
   */
  color: _propTypes["default"].func.isRequired,

  /**
   * An array of strings containing the key for each bar group. Each bar within a bar group will follow the order of this array.
   */
  keys: _propTypes["default"].array.isRequired,

  /**
   * Height is used to align the bottom of the the bars. barHeight = height - yScale(bar.value), where bar.y = yScale(bar.value).
   */
  height: _propTypes["default"].number.isRequired,

  /**
   * Add a class name to the containing `<g>` element.
   */
  className: _propTypes["default"].string,

  /**
   * A top pixel offset applied to the entire bar group.
   */
  top: _propTypes["default"].number,

  /**
   * A left pixel offset applied to the entire bar group.
   */
  left: _propTypes["default"].number,

  /**
   * A function that returns a react component. Useful for generating the bar group data with full control over what is rendered. The functions first argument will be the bar groups data as an array of objects with the following properties:
   *
   *  - `index<number>` - the index of the group based on *props*.**data** array.
   *  - `x0<number>` - the position of the group based on *props*.**x0** & *props*.**x0Scale**.
   *  - `bars<array>` - array of objects, ordered by *props*.**keys**, with the following properties:
   *    + `index<number>` - the index of the bar for the current group.
   *    + `key<string>` - the key of the bar.
   *    + `width<number>` - the width of the bar. This will be `x1Scale.bandwidth()`. If `x1Scale` does not have a bandwidth property, then it becomes:
   *      ```js
   *      x1Range = x1Scale.range();
   *      x1Domain = x1Scale.domain();
   *      barWidth = Math.abs(x1Range[x1Range.length - 1] - x1Range[0]) / x1Domain.length
   *      ```
   *    + `height<number>` - the height of the bar.
   *    + `x<number>` - the x position of the bar.
   *    + `y<number>` - the y position of the bar.
   *    + `color<string>` - the color of the bar.
   */
  children: _propTypes["default"].func
};
/**
 * Generates bar groups as an array of objects and renders `<rect />`s for each datum grouped by `key`. A general setup might look like this:
 *
 * ```js
 * const data = [{
 *  date: date1,
 *  key1: value,
 *  key2: value,
 *  key3: value
 * }, {
 *  date: date2,
 *  key1: value,
 *  key2: value,
 *  key3: value,
 * }];
 *
 * const x0 = d => d.date;
 * const keys = [key1, key2, key3];
 *
 * const x0Scale = scaleBand({
 *  domain: data.map(x0),
 *  padding: 0.2
 * });
 * const x1Scale = scaleBand({
 *  domain: keys,
 *  padding: 0.1
 * });
 * const yScale = scaleLinear({
 *   domain: [0, Math.max(...data.map(d => Math.max(...keys.map(key => d[key]))))]
 * });
 * const color = scaleOrdinal({
 *   domain: keys,
 *   range: [blue, green, purple]
 * });
 * ```
 *
 * Example: [https://vx-demo.now.sh/bargroup](https://vx-demo.now.sh/bargroup)
 */

function BarGroup(_ref) {
  var data = _ref.data,
      className = _ref.className,
      top = _ref.top,
      left = _ref.left,
      x0 = _ref.x0,
      x0Scale = _ref.x0Scale,
      x1Scale = _ref.x1Scale,
      yScale = _ref.yScale,
      color = _ref.color,
      keys = _ref.keys,
      height = _ref.height,
      children = _ref.children,
      restProps = _objectWithoutProperties(_ref, ["data", "className", "top", "left", "x0", "x0Scale", "x1Scale", "yScale", "color", "keys", "height", "children"]);

  var x1Range = x1Scale.range();
  var x1Domain = x1Scale.domain();
  var barWidth = (0, _objHasMethod["default"])(x1Scale, 'bandwidth') ? x1Scale.bandwidth() : Math.abs(x1Range[x1Range.length - 1] - x1Range[0]) / x1Domain.length;
  var barGroups = data.map(function (group, i) {
    return {
      index: i,
      x0: x0Scale(x0(group)),
      bars: keys.map(function (key, j) {
        var value = group[key];
        return {
          index: j,
          key: key,
          value: value,
          width: barWidth,
          x: x1Scale(key),
          y: yScale(value),
          color: color(key, j),
          height: height - yScale(value)
        };
      })
    };
  });
  if (children) return children(barGroups);
  return _react["default"].createElement(_group.Group, {
    className: (0, _classnames["default"])('vx-bar-group', className),
    top: top,
    left: left
  }, barGroups.map(function (barGroup) {
    return _react["default"].createElement(_group.Group, {
      key: "bar-group-".concat(barGroup.index, "-").concat(barGroup.x0),
      left: barGroup.x0
    }, barGroup.bars.map(function (bar) {
      return _react["default"].createElement(_Bar["default"], _extends({
        key: "bar-group-bar-".concat(barGroup.index, "-").concat(bar.index, "-").concat(bar.value, "-").concat(bar.key),
        x: bar.x,
        y: bar.y,
        width: bar.width,
        height: bar.height,
        fill: bar.color
      }, restProps));
    }));
  }));
}