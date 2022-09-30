const { Console } = require("./console");

const console = new Console();

function read() {
  let interval = {};
  let error;
  do {
    interval.min = console.readNumber(`Introduzca el mínimo: `);
    interval.max = console.readNumber(`Introduzca el máximo: `);
    error = this.min > this.max;
    if (error) {
      console.writeln(`El mínimo debe ser menor o igual al máximo`);
    }
  } while (error);
  return interval;
}

function writeln(interval) {
  write(interval);
  console.writeln();
}

function write(interval) {
  console.write(toString(interval));
}


function toString({ min, max }) {
  return `[${min}, ${max}]`;
}

function length({ min, max }) {
  return max - min;
}

function middlePoint(interval){
  return interval.min + length(interval) / 2;
}

function shifted({ min, max }, shiftment) {
  return getInterval(min + shiftment, max + shiftment);
}

function getInterval(min, max) {
  return {
    min: min,
    max: max
  };
}

function symmetrical({ min, max }) {
  return getInterval(-max, -min);
}

function adjust({ min, max }) {
  return getInterval(adjustValue(min), adjustValue(max));

  function adjustValue(value) {
    if (value < min) {
      return min;
    } else if (value > max) {
      return max;
    }
    return value;
  }
}

function scale({ min, max }, value) {
  let scaledMiddle = min + length({ min, max }) / 2;
  let scaledHalfLength = length({ min, max }) * value / 2;
  return getInterval(scaledMiddle - scaledHalfLength, scaledMiddle + scaledHalfLength);
}

function includes(interval, value) {
  if (typeof value === `number`) {
    return interval.min <= value && value <= interval.max;
  }
  let { min, max } = value;
  return includes(interval, min) && includes(interval, max);
};

function intersected(left, right) {
  return includes(left, right.min)
    || includes(left, right.max)
    || includes(right, left);
};

function intersection(left, right) {
  if (includes(left, right)) {
    return clone(right);
  }
  if (includes(right, left)) {
    return clone(left);
  }
  if (includes(left, right.min)) {
    return getInterval(right.min, left.max);
  }
  if (includes(left, right.max)) {
    return getInterval(left.min, right.max);
  }
  return null;
};

function union(left, right) {
  if (!intersected(left, right)) {
    return null;
  }
  return getInterval(
    left.min < right.min ? left.min : right.min,
    left.max > right.max ? left.max : right.max
  );
};

function values(interval, amount) {
  if (amount === 1){
    return [middlePoint(interval)];
  }
  let distance = length(interval) / (amount - 1);
  let result = [interval.min];
  for (let i = 1; i < amount - 1; i++) {
    result[i] = result[i - 1] + distance;
  }
  result[result.length] = interval.max;
  return result;
};

function split(interval, amount) {
  let endPoints = values(interval, amount + 1);
  let result = [];
  for (let i = 0; i < amount; i++) {
    result[i] = getInterval(endPoints[i], endPoints[i + 1]);
  }
  return result;
};

function equals(left, rigth) {
  return left.min === rigth.min && left.max === rigth.max;
};

function clone({ min, max }) {
  return getInterval(min, max);
};

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
    intervals[i] = getInterval(min, max);
  }
  return intervals;

  function randomValue() {
    return parseInt(Math.random() * 100) - 50;
  }
}

const intervals = randomIntervals(3);
const tests = [
  interval =>
    `toString(${toString(interval)}) => ${toString(interval)}`,
  interval =>
    `length(${toString(interval)}) => ${length(interval)}`,
  (interval, index) => {
    let value = index - intervals.length / 2;
    return `shifted(${toString(interval)}, ${value}) => ${toString(shifted(interval, value))}`
  },
  interval =>
    `symmetrical(${toString(interval)}) => ${toString(symmetrical(interval))}`,
  (interval, index, intervals) => {
    let next = (index + 1) % intervals.length;
    return `adjust(${toString(interval)}, ${toString(intervals[next])}) => ${adjust(interval, intervals[next])}`;
  },
  (interval, index) =>
    `${toString(interval)}.scale(${index}) => ${scale(interval, index)}`,
  (interval, index, intervals) => {
    let value = index - intervals.length / 2;
    return `includes(${toString(interval)}, ${value}) => ${includes(interval, value)}`;
  },
  (interval, index, intervals) => {
    let next = (index + 1) % intervals.length;
    return `includes(${toString(interval)}, ${intervals[next].toString()}) => ${includes(interval, intervals[next])}`;
  },
  (interval, index, intervals) => {
    let next = (index + 1) % intervals.length;
    return `intersected(${toString(interval)}, ${intervals[next].toString()}) => ${intersected(interval, intervals[next])}`;
  },
  // (interval, index, intervals) => {
  //   let next = (index + 1) % intervals.length;
  //   return `intersection(${toString(interval)}, ${toString(intervals[next])}) => ${intersection(interval, intervals[next])}`;
  // },
  (interval, index, intervals) => {
    let next = (index + 1) % intervals.length;
    return `union(${toString(interval)}, ${toString(intervals[next])}) => ${union(interval, intervals[next])}`;
  },
  (interval, index) => {
    let amount = index + 1;
    return `values(${toString(interval)}, ${amount}) => ${values(interval, amount).reduce((previous, current) => `${previous}${current} `, ``)}`
  },
  (interval, index) => {
    let amount = index + 1;
    return `split(${toString(interval)}, ${amount}) => ${split(interval, amount).reduce((previous, current) => `${previous}${toString(current)} `, ``)}`
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