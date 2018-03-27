'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _marked = /*#__PURE__*/regeneratorRuntime.mark(generateSequence);

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rectangle = function () {
  function Rectangle(height, width) {
    _classCallCheck(this, Rectangle);

    this.height = height;
    this.width = width;
  }

  _createClass(Rectangle, [{
    key: 'getArea',
    value: function getArea() {
      return this.height * this.width;
    }
  }, {
    key: 'getColor',
    value: function getColor() {
      return 'default color is green';
    }
  }, {
    key: 'setColor',
    value: function setColor(color) {
      return 'setting color to ' + color;
    }
  }]);

  return Rectangle;
}();

;

var Square = function (_Rectangle) {
  _inherits(Square, _Rectangle);

  function Square(height, width) {
    _classCallCheck(this, Square);

    var _this = _possibleConstructorReturn(this, (Square.__proto__ || Object.getPrototypeOf(Square)).call(this, height));

    _this.width = height;
    return _this;
  }

  _createClass(Square, [{
    key: 'getArea',
    value: function getArea() {
      return _get(Square.prototype.__proto__ || Object.getPrototypeOf(Square.prototype), 'getArea', this).call(this) + ' square meters';
    }
  }]);

  return Square;
}(Rectangle);

var rect = new Rectangle(2, 3);
console.log(rect.getArea());
console.log(rect.getColor());
console.log(rect.setColor('blue'));

var sq = new Square(2);
console.log(sq.getArea());

function generateSequence() {
  var sum, num, i;
  return regeneratorRuntime.wrap(function generateSequence$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          sum = 0;
          num = 1;
          i = 1;

        case 3:
          if (!(i <= num)) {
            _context.next = 10;
            break;
          }

          num++;
          _context.next = 7;
          return sum += i;

        case 7:
          i++;
          _context.next = 3;
          break;

        case 10:
          ;

        case 11:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this);
};

var sequence = generateSequence();
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);

function sum(val) {
  var result = val;

  for (var _len = arguments.length, other = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    other[_key - 1] = arguments[_key];
  }

  other.forEach(function (num) {
    return result += num;
  });
  return result;
}

console.log(sum(2, 5, 7, 8));