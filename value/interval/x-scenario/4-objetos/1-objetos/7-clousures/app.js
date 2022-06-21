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
let msg = ``;
for (let i = 0; i < tests.length; i++) {
  for (let j = 0; j < intervals.length; j++) {
    msg += `${tests[i](intervals[j], j, intervals)}\n`;
  }
  msg += `\n`;
}
console.writeln(msg);

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
    intervals[i] = createInterval(min, max);
  }
  return intervals;

  function randomValue() {
    return parseInt(Math.random() * 100) - 50;
  }
}

function createInterval(min, max) {
  return {
    read: function () {
      let error;
      do {
        min =  console.readNumber(`Introduzca el mínimo: `);
        max = console.readNumber(`Introduzca el máximo: `);
        error = min > max;
        if (error) {
          console.writeln(`El mínimo debe ser menor o igual al máximo`);
        }
      } while (error);
    },
    writeln: function () {
      this.write();
      console.writeln();
    },
    write: function () {
      console.write(this.toString());
    },
    toString: function () {
      return `[${min}, ${max}]`;
    },
    length: function () {
      return max - min;
    },
    middlePoint: function () {
      return min + length() / 2;
    },
    shifted: function (shiftment) {
      return createInterval(min + shiftment, max + shiftment);
    },
    symmetrical: function () {
      return createInterval(-max, -min);
    },
    adjust: function (interval) {
      return createInterval(adjustValue(min), adjustValue(max));

      function adjustValue(value) {
        if (value < interval.min) {
          return interval.min;
        } else if (value > interval.max) {
          return interval.max;
        }
        return value;
      }
    },
    scale: function (value) {
      let scaledMiddle = min + this.length() / 2;
      let scaledHalfLength = this.length() * value / 2;
      return createInterval(scaledMiddle - scaledHalfLength, scaledMiddle + scaledHalfLength);
    },
    includes: function (value) {
      if (typeof value === `number`) {
        return min <= value && value <= max;
      }
      return this.includes(value.min) && this.includes(value.max);
    },
    intersected: function (interval) {
      return this.includes(interval.min)
        || this.includes(interval.max)
        || interval.includes(this);
    },
    intersection: function (interval) {
      if (this.includes(interval)) {
        return interval;
      }
      if (interval.includes(this)) {
        return this;
      }
      if (this.includes(interval.min)) {
        return createInterval(interval.min, max);
      }
      if (this.includes(interval.max)) {
        return createInterval(min, interval.max);
      }
      return null;
    },
    union: function (interval) {
      if (!this.intersected(interval)) {
        return null;
      }
      return createInterval(
        min < interval.min ? min : interval.min,
        max > interval.max ? max : interval.max
      );
    },
    values: function (amount) {
      if (amount === 1) {
        const middlePoint = (max - min) / 2;
        return [middlePoint];
      }
      let distance = this.length() / (amount - 1);
      let array = [min];
      for (let i = 1; i < amount - 1; i++) {
        array[i] = array[i - 1] + distance;
      }
      array[array.length] = max;
      return array;
    },
    split: function (amount) {
      let values = this.values(amount + 1);
      let array = [];
      for (let i = 0; i < amount; i++) {
        array[i] = createInterval(values[i], values[i + 1]);
      }
      return array;
    },
    equals: function (interval) {
      return min === interval.min && max === interval.max;
    },
    clone: function () {
      return createInterval(min, max);
    }
  };
}f