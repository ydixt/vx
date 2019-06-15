import React from 'react';
import PropTypes from 'prop-types';
import { localPoint } from '@vx/event';

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

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

/* eslint-disable no-trailing-spaces */

/* eslint-disable no-case-declarations */
function identityMatrix() {
  return {
    scaleX: 1,
    scaleY: 1,
    translateX: 0,
    translateY: 0,
    skewX: 0,
    skewY: 0
  };
}
function createMatrix(_ref) {
  var _ref$scaleX = _ref.scaleX,
      scaleX = _ref$scaleX === void 0 ? 1 : _ref$scaleX,
      _ref$scaleY = _ref.scaleY,
      scaleY = _ref$scaleY === void 0 ? 1 : _ref$scaleY,
      _ref$translateX = _ref.translateX,
      translateX = _ref$translateX === void 0 ? 0 : _ref$translateX,
      _ref$translateY = _ref.translateY,
      translateY = _ref$translateY === void 0 ? 0 : _ref$translateY,
      _ref$skewX = _ref.skewX,
      skewX = _ref$skewX === void 0 ? 0 : _ref$skewX,
      _ref$skewY = _ref.skewY,
      skewY = _ref$skewY === void 0 ? 0 : _ref$skewY;
  return {
    scaleX: scaleX,
    scaleY: scaleY,
    translateX: translateX,
    translateY: translateY,
    skewX: skewX,
    skewY: skewY
  };
}
function inverseMatrix(_ref2) {
  var scaleX = _ref2.scaleX,
      scaleY = _ref2.scaleY,
      translateX = _ref2.translateX,
      translateY = _ref2.translateY,
      skewX = _ref2.skewX,
      skewY = _ref2.skewY;
  var denominator = scaleX * scaleY - skewY * skewX;
  return {
    scaleX: scaleY / denominator,
    scaleY: scaleX / denominator,
    translateX: (scaleY * translateX - skewX * translateY) / -denominator,
    translateY: (skewY * translateX - scaleX * translateY) / denominator,
    skewX: skewX / -denominator,
    skewY: skewY / -denominator
  };
}
function applyMatrixToPoint(matrix, _ref3) {
  var x = _ref3.x,
      y = _ref3.y;
  return {
    x: matrix.scaleX * x + matrix.skewX * y + matrix.translateX,
    y: matrix.skewY * x + matrix.scaleY * y + matrix.translateY
  };
}
function applyInverseMatrixToPoint(matrix, _ref4) {
  var x = _ref4.x,
      y = _ref4.y;
  return applyMatrixToPoint(inverseMatrix(matrix), {
    x: x,
    y: y
  });
}
function scaleMatrix(scaleX) {
  var scaleY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
  if (!scaleY) scaleY = scaleX;
  return createMatrix({
    scaleX: scaleX,
    scaleY: scaleY
  });
}
function translateMatrix(translateX, translateY) {
  return createMatrix({
    translateX: translateX,
    translateY: translateY
  });
}
function multiplyMatrices(matrix1, matrix2) {
  return {
    scaleX: matrix1.scaleX * matrix2.scaleX + matrix1.skewX * matrix2.skewY,
    scaleY: matrix1.skewY * matrix2.skewX + matrix1.scaleY * matrix2.scaleY,
    translateX: matrix1.scaleX * matrix2.translateX + matrix1.skewX * matrix2.translateY + matrix1.translateX,
    translateY: matrix1.skewY * matrix2.translateX + matrix1.scaleY * matrix2.translateY + matrix1.translateY,
    skewX: matrix1.scaleX * matrix2.skewX + matrix1.skewX * matrix2.scaleY,
    skewY: matrix1.skewY * matrix2.scaleX + matrix1.scaleY * matrix2.skewY
  };
}
function composeMatrices() {
  for (var _len = arguments.length, matrices = new Array(_len), _key = 0; _key < _len; _key++) {
    matrices[_key] = arguments[_key];
  }

  switch (matrices.length) {
    case 0:
      throw new Error('composeMatrices() requires arguments: was called with no args');

    case 1:
      return matrices[0];

    case 2:
      return multiplyMatrices(matrices[0], matrices[1]);

    default:
      var matrix1 = matrices[0],
          matrix2 = matrices[1],
          restMatrices = matrices.slice(2);
      var matrix = multiplyMatrices(matrix1, matrix2);
      return composeMatrices.apply(void 0, [matrix].concat(_toConsumableArray(restMatrices)));
  }
}

var Zoom =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Zoom, _React$Component);

  function Zoom(props) {
    var _this;

    _classCallCheck(this, Zoom);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Zoom).call(this, props));
    _this.state = {
      initialTransformMatrix: props.transformMatrix,
      transformMatrix: props.transformMatrix,
      isDragging: false
    };
    _this.toString = _this.toString.bind(_assertThisInitialized(_this));
    _this.clear = _this.clear.bind(_assertThisInitialized(_this));
    _this.center = _this.center.bind(_assertThisInitialized(_this));
    _this.handleWheel = _this.handleWheel.bind(_assertThisInitialized(_this));
    _this.dragStart = _this.dragStart.bind(_assertThisInitialized(_this));
    _this.dragMove = _this.dragMove.bind(_assertThisInitialized(_this));
    _this.dragEnd = _this.dragEnd.bind(_assertThisInitialized(_this));
    _this.reset = _this.reset.bind(_assertThisInitialized(_this));
    _this.constrain = props.constrain ? props.constrain.bind(_assertThisInitialized(_this)) : _this.constrain.bind(_assertThisInitialized(_this));
    _this.scale = _this.scale.bind(_assertThisInitialized(_this));
    _this.translate = _this.translate.bind(_assertThisInitialized(_this));
    _this.translateTo = _this.translateTo.bind(_assertThisInitialized(_this));
    _this.setTranslate = _this.setTranslate.bind(_assertThisInitialized(_this));
    _this.setTransformMatrix = _this.setTransformMatrix.bind(_assertThisInitialized(_this));
    _this.invert = _this.invert.bind(_assertThisInitialized(_this));
    _this.applyToPoint = _this.applyToPoint.bind(_assertThisInitialized(_this));
    _this.applyInverseToPoint = _this.applyInverseToPoint.bind(_assertThisInitialized(_this));
    _this.toStringInvert = _this.toStringInvert.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Zoom, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var passive = this.props.passive;

      if (this.containerRef && !passive) {
        this.containerRef.addEventListener('wheel', this.handleWheel, {
          passive: false
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var passive = this.props.passive;

      if (this.containerRef && !passive) {
        this.containerRef.removeEventListener('wheel', this.handleWheel, {
          passive: false
        });
      }
    }
  }, {
    key: "applyToPoint",
    value: function applyToPoint(_ref) {
      var x = _ref.x,
          y = _ref.y;
      var transformMatrix = this.state.transformMatrix;
      return applyMatrixToPoint(transformMatrix, {
        x: x,
        y: y
      });
    }
  }, {
    key: "applyInverseToPoint",
    value: function applyInverseToPoint(_ref2) {
      var x = _ref2.x,
          y = _ref2.y;
      var transformMatrix = this.state.transformMatrix;
      return applyInverseMatrixToPoint(transformMatrix, {
        x: x,
        y: y
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      var initialTransformMatrix = this.state.initialTransformMatrix;
      this.setTransformMatrix(initialTransformMatrix);
    }
  }, {
    key: "scale",
    value: function scale(_ref3) {
      var scaleX = _ref3.scaleX,
          scaleY = _ref3.scaleY,
          point = _ref3.point;
      if (!scaleY) scaleY = scaleX;
      var transformMatrix = this.state.transformMatrix;
      var _this$props = this.props,
          width = _this$props.width,
          height = _this$props.height;
      point = point || {
        x: width / 2,
        y: height / 2
      };
      var translate = applyInverseMatrixToPoint(transformMatrix, point);
      var nextMatrix = composeMatrices(transformMatrix, translateMatrix(translate.x, translate.y), scaleMatrix(scaleX, scaleY), translateMatrix(-translate.x, -translate.y));
      this.setTransformMatrix(nextMatrix);
    }
  }, {
    key: "translate",
    value: function translate(_ref4) {
      var translateX = _ref4.translateX,
          translateY = _ref4.translateY;
      var transformMatrix = this.state.transformMatrix;
      var nextMatrix = composeMatrices(transformMatrix, translateMatrix(translateX, translateY));
      this.setTransformMatrix(nextMatrix);
    }
  }, {
    key: "translateTo",
    value: function translateTo(_ref5) {
      var x = _ref5.x,
          y = _ref5.y;
      var transformMatrix = this.state.transformMatrix;
      var point = applyInverseMatrixToPoint(transformMatrix, {
        x: x,
        y: y
      });
      this.setTranslate({
        translateX: point.x,
        translateY: point.y
      });
    }
  }, {
    key: "setTranslate",
    value: function setTranslate(_ref6) {
      var translateX = _ref6.translateX,
          translateY = _ref6.translateY;
      var transformMatrix = this.state.transformMatrix;

      var nextMatrix = _objectSpread({}, transformMatrix, {
        translateX: translateX,
        translateY: translateY
      });

      this.setTransformMatrix(nextMatrix);
    }
  }, {
    key: "setTransformMatrix",
    value: function setTransformMatrix(transformMatrix) {
      var _this2 = this;

      this.setState(function (prevState) {
        return {
          transformMatrix: _this2.constrain(transformMatrix, prevState.transformMatrix)
        };
      });
    }
  }, {
    key: "invert",
    value: function invert() {
      return inverseMatrix(this.state.transformMatrix);
    }
  }, {
    key: "toStringInvert",
    value: function toStringInvert() {
      var _this$invert = this.invert(),
          translateX = _this$invert.translateX,
          translateY = _this$invert.translateY,
          scaleX = _this$invert.scaleX,
          scaleY = _this$invert.scaleY,
          skewX = _this$invert.skewX,
          skewY = _this$invert.skewY;

      return "matrix(".concat(scaleX, ", ").concat(skewY, ", ").concat(skewX, ", ").concat(scaleY, ", ").concat(translateX, ", ").concat(translateY, ")");
    }
  }, {
    key: "constrain",
    value: function constrain(transformMatrix, prevTransformMatrix) {
      var _this$props2 = this.props,
          scaleXMin = _this$props2.scaleXMin,
          scaleXMax = _this$props2.scaleXMax,
          scaleYMin = _this$props2.scaleYMin,
          scaleYMax = _this$props2.scaleYMax,
          constrain = _this$props2.constrain;
      var scaleX = transformMatrix.scaleX,
          scaleY = transformMatrix.scaleY;
      var shouldConstrainScaleX = scaleX > scaleXMax || scaleX < scaleXMin;
      var shouldConstrainScaleY = scaleY > scaleYMax || scaleY < scaleYMin;

      if (shouldConstrainScaleX || shouldConstrainScaleY) {
        return prevTransformMatrix;
      }

      return transformMatrix;
    }
  }, {
    key: "dragStart",
    value: function dragStart(event) {
      var transformMatrix = this.state.transformMatrix;
      var translateX = transformMatrix.translateX,
          translateY = transformMatrix.translateY;
      this.startPoint = localPoint(event);
      this.startTranslate = {
        translateX: translateX,
        translateY: translateY
      };
      this.setState({
        isDragging: true
      });
    }
  }, {
    key: "dragMove",
    value: function dragMove(event) {
      if (!this.state.isDragging) return;
      var currentPoint = localPoint(event);
      var dx = -(this.startPoint.x - currentPoint.x);
      var dy = -(this.startPoint.y - currentPoint.y);
      this.setTranslate({
        translateX: this.startTranslate.translateX + dx,
        translateY: this.startTranslate.translateY + dy
      });
    }
  }, {
    key: "dragEnd",
    value: function dragEnd(event) {
      this.startPoint = undefined;
      this.startTranslate = undefined;
      this.setState({
        isDragging: false
      });
    }
  }, {
    key: "handleWheel",
    value: function handleWheel(event) {
      var passive = this.props.passive;
      if (!passive) event.preventDefault();
      var wheelDelta = this.props.wheelDelta;
      var point = localPoint(event);

      var _wheelDelta = wheelDelta(event),
          scaleX = _wheelDelta.scaleX,
          scaleY = _wheelDelta.scaleY;

      this.scale({
        scaleX: scaleX,
        scaleY: scaleY,
        point: point
      });
    }
  }, {
    key: "toString",
    value: function toString() {
      var transformMatrix = this.state.transformMatrix;
      var translateX = transformMatrix.translateX,
          translateY = transformMatrix.translateY,
          scaleX = transformMatrix.scaleX,
          scaleY = transformMatrix.scaleY,
          skewX = transformMatrix.skewX,
          skewY = transformMatrix.skewY;
      return "matrix(".concat(scaleX, ", ").concat(skewY, ", ").concat(skewX, ", ").concat(scaleY, ", ").concat(translateX, ", ").concat(translateY, ")");
    }
  }, {
    key: "center",
    value: function center() {
      var _this$props3 = this.props,
          width = _this$props3.width,
          height = _this$props3.height;
      var center = {
        x: width / 2,
        y: height / 2
      };
      var inverseCentroid = this.applyInverseToPoint(center);
      this.translate({
        translateX: inverseCentroid.x - center.x,
        translateY: inverseCentroid.y - center.y
      });
    }
  }, {
    key: "clear",
    value: function clear() {
      this.setTransformMatrix(identityMatrix());
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props4 = this.props,
          passive = _this$props4.passive,
          children = _this$props4.children,
          style = _this$props4.style,
          className = _this$props4.className;

      var zoom = _objectSpread({}, this.state, {
        center: this.center,
        clear: this.clear,
        scale: this.scale,
        scaleTo: this.scaleTo,
        translate: this.translate,
        translateTo: this.translateTo,
        setTranslate: this.setTranslate,
        setTransformMatrix: this.setTransformMatrix,
        reset: this.reset,
        handleWheel: this.handleWheel,
        dragEnd: this.dragEnd,
        dragMove: this.dragMove,
        dragStart: this.dragStart,
        toString: this.toString,
        invert: this.invert,
        toStringInvert: this.toStringInvert,
        applyToPoint: this.applyToPoint,
        applyInverseToPoint: this.applyInverseToPoint
      });

      if (!passive) {
        return React.createElement("div", {
          ref: function ref(c) {
            _this3.containerRef = c;
          },
          style: style,
          className: className
        }, children(zoom));
      }

      return children(zoom);
    }
  }]);

  return Zoom;
}(React.Component);

Zoom.propTypes = {
  children: PropTypes.func.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,

  /**
   * ```js
   *  wheelDelta(event.deltaY)
   * ```
   *
   * A function that returns {scaleX,scaleY} factors to scale the matrix by.
   * Scale factors greater than 1 will increase (zoom in), less than 1 will descrease (zoom out).
   */
  wheelDelta: PropTypes.func,
  scaleXMin: PropTypes.number,
  scaleXMax: PropTypes.number,
  scaleYMin: PropTypes.number,
  scaleYMax: PropTypes.number,

  /**
   * By default constrain() will only constrain scale values. To change
   * constraints you can pass in your own constrain function as a prop.
   *
   * For example, if you wanted to constrain your view to within [[0, 0], [width, height]]:
   *
   * ```js
   * function constrain(transformMatrix, prevTransformMatrix) {
   *   const min = applyMatrixToPoint(transformMatrix, { x: 0, y: 0 });
   *   const max = applyMatrixToPoint(transformMatrix, { x: width, y: height });
   *   if (max.x < width || max.y < height) {
   *     return prevTransformMatrix;
   *   }
   *   if (min.x > 0 || min.y > 0) {
   *     return prevTransformMatrix;
   *   }
   *   return transformMatrix;
   * }
   * ```
   *
   * @param {matrix} transformMatrix
   * @param {matrix} prevTransformMatrix
   * @returns {martix}
   */
  constrain: PropTypes.func,
  transformMatrix: PropTypes.shape({
    scaleX: PropTypes.number,
    scaleY: PropTypes.number,
    translateX: PropTypes.number,
    translateY: PropTypes.number,
    skewX: PropTypes.number,
    skewY: PropTypes.number
  }),

  /**
   * By default passive is `false`. This will wrap <Zoom> children in a <div> and add an active wheel
   * event listener (handleWheel). `handleWheel()` will call `event.preventDefault()` before other
   * execution. This prevents an outer parent from scrolling when the mouse wheel is used to zoom.
   *
   * When passive is `true` it is required to add `<MyComponent onWheel={zoom.handleWheel} />` to handle
   * wheel events. **Note:** By default you do not need to add `<MyComponent onWheel={zoom.handleWheel} />`.
   * This is only necessary when `<Zoom passive={true} />`.
   */
  passive: PropTypes.bool,
  style: PropTypes.object,
  className: PropTypes.string
};
Zoom.defaultProps = {
  passive: false,
  scaleXMin: 0,
  scaleXMax: Infinity,
  scaleYMin: 0,
  scaleYMax: Infinity,
  transformMatrix: {
    scaleX: 1,
    scaleY: 1,
    translateX: 0,
    translateY: 0,
    skewX: 0,
    skewY: 0
  },
  wheelDelta: function wheelDelta(event) {
    return -event.deltaY > 0 ? {
      scaleX: 1.1,
      scaleY: 1.1
    } : {
      scaleX: 0.9,
      scaleY: 0.9
    };
  },
  style: undefined,
  className: undefined
};

export { Zoom, identityMatrix, createMatrix, inverseMatrix, applyMatrixToPoint, applyInverseMatrixToPoint, scaleMatrix, translateMatrix, multiplyMatrices, composeMatrices };
