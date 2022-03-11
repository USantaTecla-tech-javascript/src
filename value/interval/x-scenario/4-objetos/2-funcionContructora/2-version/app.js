const { Console } = require("./console");

const console = new Console();
const intervals = randomIntervals(10);
const tests = [
  interval =>
    `${interval.toString()}.toString() => ${interval.toString()}`,
  interval =>
    `${interval.toString()}.length() => ${interval.length()}`,
  (interval, index) => {
    let value = index - intervals.length / 2;
    return `${interval.toString()}.shifted(${value}) => ${interval.shifted(value)}`
  },
  interval =>
    `${interval.toString()}.symmetrical() => ${interval.symmetrical()}`,
  (interval, index, intervals) => {
    let next = (index + 1) % intervals.length;
    return `${interval.toString()}.adjust(${intervals[next].toString()}) => ${interval.adjust(intervals[next])}`;
  },
  (interval, index) =>
    `${interval.toString()}.scale(${index}) => ${interval.scale(index)}`,
  (interval, index, intervals) => {
    let value = index - intervals.length / 2;
    return `${interval.toString()}.includes(${value}) => ${interval.includes(value)}`;
  },
  (interval, index, intervals) => {
    let next = (index + 1) % intervals.length;
    return `${interval.toString()}.includes(${intervals[next].toString()}) => ${interval.includes(intervals[next])}`;
  },
  (interval, index, intervals) => {
    let next = (index + 1) % intervals.length;
    return `${interval.toString()}.intersected(${intervals[next].toString()}) => ${interval.intersected(intervals[next])}`;
  },
  (interval, index, intervals) => {
    let next = (index + 1) % intervals.length;
    return `${interval.toString()}.intersection(${intervals[next].toString()}) => ${interval.intersection(intervals[next])}`;
  },
  (interval, index, intervals) => {
    let next = (index + 1) % intervals.length;
    return `${interval.toString()}.union(${intervals[next].toString()}) => ${interval.union(intervals[next])}`;
  },
  (interval, index) => {
    let amount = index + 1;
    return `${interval.toString()}.values(${amount}) => ${interval.values(amount).reduce((previous, current) => `${previous}${current} `, ``)}`
  },
  (interval, index) => {
    let amount = index + 1;
    return `${interval.toString()}.split(${amount}) => ${interval.split(amount).reduce((previous, current) => `${previous}${current.toString()} `, ``)}`
  }
];

console.writeln(
  tests.map(
    test => intervals.map(test)).reduce(
      (previous, block) =>
        `${previous}${block.reduce(
          (previous, msg) =>
            `${previous}${msg}\n`,
          ``)}\n`,
      ``));

function randomIntervals(amount) {
  let intervals = [];
  for (let i = 0; i < amount; i++) {
    let min = randomValue();
    let max = randomValue();
    if (min > max) {
      let temp = min;
      min = max;
      max = temp;
    }
    intervals[i] = new Interval(min, max);
  }
  return intervals;

  function randomValue() {
    return parseInt(Math.random() * 100) - 50;
  }
}

function Interval(min, max) {

  this.getMin = function() {
    return min;
  },
  this.getMax = function() {
    return max;
  },
  this.read = function() {
    let error;
    do {
      min = console.readNumber(`Introduzca el mínimo: `);
      max = console.readNumber(`Introduzca el máximo: `);
      error = min > max;
      if (error) {
        console.writeln(`El mínimo debe ser menor o igual al máximo`);
      }
    } while (error);
  };

  this.writeln = function() {
    this.write();
    console.writeln();
  };

  this.write = function() {
    console.write(this.toString());
  };

  this.toString = function() {
    return `[${min}, ${max}]`;
  };

  this.length = function() {
    return max - min;
  };

  this.middlePoint = function() {
    return min + this.length() / 2;
  }

  this.shifted = function(shiftment) {
    return new Interval(min + shiftment, max + shiftment);
  };

  this.symmetrical = function() {
    return new Interval(-max, -min);
  };

  this.adjust = function(interval) {
    return new Interval(adjustValue(min), adjustValue(max));

    function adjustValue(value) {
      if (value < interval.getMin()) {
        return interval.getMin();
      } else if (value > interval.getMax()) {
        return interval.getMax();
      }
      return value;
    }
  };

  this.scale = function(value) {
    let scaledMiddle = min + this.length() / 2;
    let scaledHalfLength = this.length() * value / 2;
    return new Interval(scaledMiddle - scaledHalfLength, scaledMiddle + scaledHalfLength);
  };

  this.includes = function(value) {
    if (typeof value === `number`) {
      return min <= value && value <= max;
    }
    return this.includes(value.getMin()) && this.includes(value.getMax());
  };

  this.intersected = function(interval) {
    return this.includes(interval.getMin())
      || this.includes(interval.getMax())
      || interval.includes(this);
  };

  this.intersection = function(interval) {
    if (this.includes(interval)) {
      return interval;
    }
    if (interval.includes(this)) {
      return this;
    }
    if (this.includes(interval.getMin())) {
      return new Interval(interval.getMin(), max);
    }
    if (this.includes(interval.getMax())) {
      return new Interval(min, interval.getMax());
    }
    return null;
  };

  this.union = function(interval) {
    if (!this.intersected(interval)) {
      return null;
    }
    return new Interval(
      min < interval.getMin() ? min : interval.getMin(),
      max > interval.getMax() ? max : interval.getMax()
    );
  };

  this.values = function(amount) {
    if (amount === 1){
      return [this.middlePoint()];
    }
    let distance = this.length() / (amount - 1);
    let result = [min];
    for (let i = 1; i < amount - 1; i++) {
      result[i] = result[i - 1] + distance;
    }
    result[result.length] = max;
    return result;
  };

  this.split = function(amount) {
    let values = this.values(amount + 1);
    let result = [];
    for (let i = 0; i < amount; i++) {
      result[i] = new Interval(values[i], values[i + 1]);
    }
    return result;
  };

  this.equals = function(interval) {
    return min === interval.getMin() && max === interval.getMax();
  };

  this.clone = function() {
    return new Interval(min, max);
  };

}