const { Console } = require("./console");

const console = new Console();

class Interval {

  constructor(min, max) {
    this.min = min;
    this.max = max;
  }

  read() {
    let error;
    do {
      this.min = console.readNumber(`Introduzca el mínimo: `);
      this.max = console.readNumber(`Introduzca el máximo: `);
      error = this.min > this.max;
      if (error) {
        console.writeln(`El mínimo debe ser menor o igual al máximo`);
      }
    } while (error);
  }

  writeln() {
    this.write();
    console.writeln();
  }

  write() {
    console.write(this.toString());
  }

  toString() {
    return `[${this.min}, ${this.max}]`;
  }

  length() {
    return this.max - this.min;
  }

  shifted(shiftment) {
    return new Interval(this.min + shiftment, this.max + shiftment);
  }

  symmetrical() {
    return new Interval(-this.max, -this.min);
  }

  adjust(interval) {
    return new Interval(adjustValue(this.min), adjustValue(this.max));

    function adjustValue(value) {
      if (value < interval.min) {
        return interval.min;
      } else if (value > interval.max) {
        return interval.max;
      }
      return value;
    }
  }

  scale(value) {
    let scaledMiddle = this.min + this.length() / 2;
    let scaledHalfLength = this.length() * value / 2;
    return new Interval(scaledMiddle - scaledHalfLength, scaledMiddle + scaledHalfLength);
  }

  includes(value) {
    if (typeof value === `number`) {
      return this.min <= value && value <= this.max;
    }
    let { min, max } = value;
    return this.includes(min) && this.includes(max);
  }

  intersected(interval) {
    return this.includes(interval.min)
      || this.includes(interval.max)
      || interval.includes(this);
  }

  intersection(interval) {
    if (this.includes(interval)) {
      return interval;
    }
    if (interval.includes(this)) {
      return this;
    }
    if (this.includes(interval.min)) {
      return new Interval(interval.min, this.max);
    }
    if (this.includes(interval.max)) {
      return new Interval(this.min, interval.max);
    }
    return null;
  }

  union(interval) {
    if (!this.intersected(interval)) {
      return null;
    }
    return new Interval(
      this.min < interval.min ? this.min : interval.min,
      this.max > interval.max ? this.max : interval.max
    );
  }

  values(amount) {
    let distance = this.length() / (amount - 1);
    let result = [this.min];
    for (let i = 1; i < amount - 1; i++) {
      result[i] = result[i - 1] + distance;
    }
    result[result.length] = this.max;
    return result;
  }

  split(amount) {
    let values = this.values(amount + 1);
    let result = [];
    for (let i = 0; i < amount; i++) {
      result[i] = new Interval(values[i], values[i + 1]);
    }
    return result;
  }

  min() {
    return this.min;
  }

  max() {
    return this.max;
  }

  equals(interval) {
    return this.min === interval.min && this.max === interval.max;
  }

  clone() {
    return new Interval(this.min, this.max);
  }

}

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
    return `${interval.toString()}.values(${amount}) => ${
        interval.values(amount).reduce((previous, current) => `${previous}${current} `, ``)}`
  },
  (interval, index) => {
    let amount = index + 1;
    return `${interval.toString()}.split(${amount}) => ${
        interval.split(amount).reduce((previous, current) => `${previous}${current.toString()} `, ``)}`
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

// extends, super
// static
// *generators
// get set
// toString
