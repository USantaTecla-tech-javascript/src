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
  result = {};
  result.min = min;
  result.max = max;

  result.read = function () {
    let error;
    do {
      result.min = console.readNumber(`Introduzca el mínimo: `);
      result.max = console.readNumber(`Introduzca el máximo: `);
      error = result.min > result.max;
      if (error) {
        console.writeln(`El mínimo debe ser menor o igual al máximo`);
      }
    } while (error);
  };

  result.writeln = function () {
    result.write();
    console.writeln();
  };

  result.write = function () {
    console.write(result.toString());
  };

  result.toString = function () {
    return `[${result.min}, ${result.max}]`;
  };

  result.length = function () {
    return result.max - result.min;
  };

  result.middlePoint = function () {
    return result.min + result.length() / 2;
  };

  result.shifted = function (shiftment) {
    return createInterval(result.min + shiftment, result.max + shiftment);
  };

  result.symmetrical = function () {
    return createInterval(-result.max, -result.min);
  };

  result.adjust = function (interval) {
    return createInterval(adjustValue(result.min), adjustValue(result.max));

    function adjustValue(value) {
      if (value < interval.min) {
        return interval.min;
      } else if (value > interval.max) {
        return interval.max;
      }
      return value;
    }
  };

  result.scale = function (value) {
    let scaledMiddle = result.min + result.length() / 2;
    let scaledHalfLength = result.length() * value / 2;
    return createInterval(scaledMiddle - scaledHalfLength, scaledMiddle + scaledHalfLength);
  };

  result.includes = function (value) {
    if (typeof value === `number`) {
      return result.min <= value && value <= result.max;
    }
    let { min, max } = value;
    return result.includes(min) && result.includes(max);
  };

  result.intersected = function (interval) {
    return result.includes(interval.min)
      || result.includes(interval.max)
      || interval.includes(result);
  };

  result.intersection = function (interval) {
    if (result.includes(interval)) {
      return interval;
    }
    if (interval.includes(result)) {
      return result;
    }
    if (result.includes(interval.min)) {
      return createInterval(interval.min, result.max);
    }
    if (result.includes(interval.max)) {
      return createInterval(result.min, interval.max);
    }
    return null;
  };

  result.union = function (interval) {
    if (!result.intersected(interval)) {
      return null;
    }
    return createInterval(
      result.min < interval.min ? result.min : interval.min,
      result.max > interval.max ? result.max : interval.max
    );
  };

  result.values = function (amount) {
    if (amount === 1) {
      const middlePoint = (result.max - result.min) / 2;
      return [middlePoint];
    }
    let distance = result.length() / (amount - 1);
    let array = [result.min];
    for (let i = 1; i < amount - 1; i++) {
      array[i] = array[i - 1] + distance;
    }
    array[array.length] = result.max;
    return array;
  };

  result.split = function (amount) {
    let values = result.values(amount + 1);
    let array = [];
    for (let i = 0; i < amount; i++) {
      array[i] = createInterval(values[i], values[i + 1]);
    }
    return array;
  };

  result.equals = function (interval) {
    return result.min === interval.min && result.max === interval.max;
  };

  result.clone = function () {
    return createInterval(result.min, result.max);
  };

  return result;
}