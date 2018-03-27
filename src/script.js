class Rectangle {
  constructor (height, width) {
    this.height = height;
    this.width = width;
  }

  getArea () {
    return this.height * this.width;
  }

  getColor () {
    return 'default color is green';
  }

  setColor(color) {
    return 'setting color to ' + color;
  }
};

class Square extends Rectangle {
  constructor (height, width) {
    super(height);
    this.width = height;
  }

  getArea () {
    return super.getArea() + ' square meters';
  }
}

let rect = new Rectangle(2, 3);
console.log(rect.getArea());
console.log(rect.getColor());
console.log(rect.setColor('blue'));

let sq = new Square(2);
console.log(sq.getArea());

function* generateSequence() {
  let sum = 0;
  let num = 1;
  for (let i = 1; i <=num; i++) {
    num++;
    yield sum +=i;
};
};

let sequence = generateSequence();
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);

function sum (val, ...other) {
  let result = val;
  other.forEach(num => result +=num);
  return result;
}

console.log(sum(2,5,7,8));
