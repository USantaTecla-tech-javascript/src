const { Console } = require("./console");

const console = new Console();

// TODO
class Date {
  
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

  equals(interval) {
    return this.min === interval.min && this.max === interval.max;
  }

  symmetrical() {
    return new Interval(-this.max, -this.min);
  }

  shifted(shiftment) {
    return new Interval(this.min + shiftment, this.max + shiftment);
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
    if (!this.intersected(interval)) {
      return null;
    }
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

  clone() {
    return new Interval(this.min, this.max);
  }

}


const intervals = randomIntervals(10);
const msgs = [
  intervals.map(
    interval => `${interval.toString()}.toString() => ${interval.toString()}\n`),
  intervals.map(
    interval => `${interval.toString()}.length() => ${interval.length()}\n`)
];
let msg = ``;
msg += ``.concat(...msgs[0]) + `\n`;
msg += ``.concat(...msgs[1]) + `\n`;
msg += ``.concat(...intervals.map(
  interval => `${interval.toString()}.symmetrical() => ${interval.symmetrical()}\n`)) + `\n`;
msg += ``.concat(...intervals.map(
  (interval, index, intervals) => {
    let i = index - intervals.length / 2;
    return `${interval.toString()}.shifted(${i}) => ${interval.shifted(i)}\n`;
  })) + `\n`;
msg += ``.concat(...intervals.map(
  (interval, index) =>
    `${interval.toString()}.scale(${index}) => ${interval.scale(index)}\n`, ``)) + `\n`;
msg += ``.concat(...intervals.map(
  (interval, index, intervals) => {
    let result = ``;
    if (index < intervals.length - 1) {
      let i = index - intervals.length / 2;
      result = `${interval.toString()}.includes(${i}) => ${interval.includes(i)}\n`;
    }
    return result
  })) + `\n`;
msg += ``.concat(...intervals.map(
  (interval, index, intervals) => {
    let result = ``;
    if (index < intervals.length - 1) {
      let i = index + 1;
      result = `${interval.toString()}.includes(${intervals[i]}) => ${interval.includes(intervals[i])}\n`;
    }
    return result
  })) + `\n`;


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
