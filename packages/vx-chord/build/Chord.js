"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Chord;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _d3Chord = require("d3-chord");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

Chord.propTypes = {
  matrix: _propTypes["default"].array.isRequired,
  padAngle: _propTypes["default"].number,
  sortGroups: _propTypes["default"].func,
  sortSubgroups: _propTypes["default"].func,
  sortChords: _propTypes["default"].func,
  children: _propTypes["default"].func.isRequired
};

function Chord(_ref) {
  var matrix = _ref.matrix,
      padAngle = _ref.padAngle,
      sortGroups = _ref.sortGroups,
      sortSubgroups = _ref.sortSubgroups,
      sortChords = _ref.sortChords,
      children = _ref.children,
      restProps = _objectWithoutProperties(_ref, ["matrix", "padAngle", "sortGroups", "sortSubgroups", "sortChords", "children"]);

  var chord = (0, _d3Chord.chord)();
  if (padAngle) chord.padAngle(padAngle);
  if (sortGroups) chord.sortGroups(sortGroups);
  if (sortSubgroups) chord.sortSubgroups(sortSubgroups);
  if (sortChords) chord.sortChords(sortChords);
  var chords = chord(matrix);
  if (!!children) return children({
    chords: chords
  }); // so react-docgen picks it up

  return _react["default"].createElement("g", null);
}