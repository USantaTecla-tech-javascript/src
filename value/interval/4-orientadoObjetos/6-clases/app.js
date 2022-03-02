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
    return new Interval(
      this.min >= interval.min ? this.min : interval.min,
      this.max >= interval.max ? this.max : interval.max,
    );
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
    return new Interval(
      this.min < interval.min ? this.min : interval.min,
      this.max > interval.max ? this.max : interval.max
    );
  }

  values(amount) {
    let distance = this.length() / amount;
    let result = [this.min];
    for (let i = 1; i < this.length(); i++) {
      result[i] = result[i - 1] + distance;
    }
    result[result.length] = this.max;
    return result;
  }

  split(amount) {
    let values = this.values(amount + 1);
    let result = [];
    for (let i = 0; i < amount; i++) {
      result[i] = new Interval(result[i], result[i + 1]);
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
let msgs = [
  intervals.map(
    interval => `${interval.toString()}.toString() => ${interval.toString()}\n`),
  intervals.map(
    interval => `${interval.toString()}.length() => ${interval.length()}\n`),
  intervals.map(
    (interval, index, intervals) => {
      let i = index - intervals.length / 2;
      return `${interval.toString()}.shifted(${i}) => ${interval.shifted(i)}\n`;
    }),
  intervals.map(
    (interval, index) =>
      `${interval.toString()}.scale(${index}) => ${interval.scale(index)}\n`, ``),
  intervals.map(
    (interval, index, intervals) => {
      let i = index - intervals.length / 2;
      return `${interval.toString()}.includes(${i}) => ${interval.includes(i)}\n`;
    })
  //   ,
  // intervals.map(
  //   (interval, index, intervals) => {
  //     let i = (index + 1) % intervals.length;
  //     return `${interval.toString()}.includes(${intervals[i].toString()}) => ${interval.includes(intervals[i])}\n`;
  //   })
];
let msg = ``;
msg += ``.concat(...msgs[0]) + `\n`;
msg += ``.concat(...msgs[1]) + `\n`;
msg += ``.concat(...msgs[2]) + `\n`;
msg += ``.concat(...msgs[3]) + `\n`;
msg += ``.concat(...msgs[4]) + `\n`;
// msg += ``.concat(...msgs[5]) + `\n`;

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
