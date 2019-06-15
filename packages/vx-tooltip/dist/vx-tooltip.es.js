import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { withBoundingRects } from '@vx/bounds';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

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

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

var withTooltipPropTypes = {
  tooltipOpen: PropTypes.bool,
  tooltipLeft: PropTypes.number,
  tooltipTop: PropTypes.number,
  tooltipData: PropTypes.object,
  updateTooltip: PropTypes.func,
  showTooltip: PropTypes.func,
  hideTooltip: PropTypes.func
};
function withTooltip(BaseComponent) {
  var containerProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    style: {
      position: 'relative',
      width: 'inherit',
      height: 'inherit'
    }
  };

  var WrappedComponent =
  /*#__PURE__*/
  function (_React$PureComponent) {
    _inherits(WrappedComponent, _React$PureComponent);

    function WrappedComponent(props) {
      var _this;

      _classCallCheck(this, WrappedComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(WrappedComponent).call(this, props));
      _this.state = {
        tooltipOpen: false,
        tooltipLeft: undefined,
        tooltipTop: undefined,
        tooltipData: undefined
      };
      _this.updateTooltip = _this.updateTooltip.bind(_assertThisInitialized(_this));
      _this.showTooltip = _this.showTooltip.bind(_assertThisInitialized(_this));
      _this.hideTooltip = _this.hideTooltip.bind(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(WrappedComponent, [{
      key: "updateTooltip",
      value: function updateTooltip(_ref) {
        var tooltipOpen = _ref.tooltipOpen,
            tooltipLeft = _ref.tooltipLeft,
            tooltipTop = _ref.tooltipTop,
            tooltipData = _ref.tooltipData;
        this.setState(function (prevState) {
          return _objectSpread({}, prevState, {
            tooltipOpen: tooltipOpen,
            tooltipLeft: tooltipLeft,
            tooltipTop: tooltipTop,
            tooltipData: tooltipData
          });
        });
      }
    }, {
      key: "showTooltip",
      value: function showTooltip(_ref2) {
        var tooltipLeft = _ref2.tooltipLeft,
            tooltipTop = _ref2.tooltipTop,
            tooltipData = _ref2.tooltipData;
        this.updateTooltip({
          tooltipOpen: true,
          tooltipLeft: tooltipLeft,
          tooltipTop: tooltipTop,
          tooltipData: tooltipData
        });
      }
    }, {
      key: "hideTooltip",
      value: function hideTooltip() {
        this.updateTooltip({
          tooltipOpen: false,
          tooltipLeft: undefined,
          tooltipTop: undefined,
          tooltipData: undefined
        });
      }
    }, {
      key: "render",
      value: function render() {
        return React.createElement("div", containerProps, React.createElement(BaseComponent, _extends({
          updateTooltip: this.updateTooltip,
          showTooltip: this.showTooltip,
          hideTooltip: this.hideTooltip
        }, this.state, this.props)));
      }
    }]);

    return WrappedComponent;
  }(React.PureComponent);

  return WrappedComponent;
}

Tooltip.propTypes = {
  left: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  top: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.any
};
function Tooltip(_ref) {
  var className = _ref.className,
      top = _ref.top,
      left = _ref.left,
      style = _ref.style,
      children = _ref.children,
      restProps = _objectWithoutProperties(_ref, ["className", "top", "left", "style", "children"]);

  return React.createElement("div", _extends({
    className: cx('vx-tooltip-portal', className),
    style: _objectSpread({
      position: 'absolute',
      backgroundColor: 'white',
      color: '#666666',
      padding: '.3rem .5rem',
      borderRadius: '3px',
      fontSize: '14px',
      boxShadow: '0 1px 2px rgba(33,33,33,0.2)',
      lineHeight: '1em',
      pointerEvents: 'none',
      top: top,
      left: left
    }, style)
  }, restProps), children);
}

var rectShape = PropTypes.shape({
  top: PropTypes.number.isRequired,
  right: PropTypes.number.isRequired,
  bottom: PropTypes.number.isRequired,
  left: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
});
var withBoundingRectsProps = {
  getRects: PropTypes.func,
  rect: rectShape,
  parentRect: rectShape
};
var tooltipProps = {
  left: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  top: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.any
};

var propTypes = _objectSpread({}, withBoundingRectsProps, tooltipProps, {
  offsetLeft: PropTypes.number,
  offsetTop: PropTypes.number
});

var defaultProps = {};

function TooltipWithBounds(_ref) {
  var initialLeft = _ref.left,
      initialTop = _ref.top,
      _ref$offsetLeft = _ref.offsetLeft,
      offsetLeft = _ref$offsetLeft === void 0 ? 10 : _ref$offsetLeft,
      _ref$offsetTop = _ref.offsetTop,
      offsetTop = _ref$offsetTop === void 0 ? 10 : _ref$offsetTop,
      rect = _ref.rect,
      parentRect = _ref.parentRect,
      getRects = _ref.getRects,
      children = _ref.children,
      style = _ref.style,
      otherProps = _objectWithoutProperties(_ref, ["left", "top", "offsetLeft", "offsetTop", "rect", "parentRect", "getRects", "children", "style"]);

  var left = initialLeft;
  var top = initialTop;

  if (rect && parentRect) {
    left = offsetLeft + rect.right > parentRect.right || offsetLeft + rect.right > window.innerWidth ? left - rect.width - offsetLeft : left + offsetLeft;
    top = offsetTop + rect.bottom > parentRect.bottom || offsetTop + rect.bottom > window.innerHeight ? top - rect.height - offsetTop : top + offsetTop;
  }

  left = Math.round(left);
  top = Math.round(top);
  return React.createElement(Tooltip, _extends({
    style: _objectSpread({
      top: 0,
      transform: "translate(".concat(left, "px, ").concat(top, "px)")
    }, style)
  }, otherProps), children);
}

TooltipWithBounds.propTypes = propTypes;
TooltipWithBounds.defaultProps = defaultProps;
var TooltipWithBounds$1 = withBoundingRects(TooltipWithBounds);

export { withTooltip, Tooltip, TooltipWithBounds$1 as TooltipWithBounds };
