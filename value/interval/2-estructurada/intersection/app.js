const { Console } = require("./console");

const console = new Console();
let error;
let min1;
let max1;
do {
  min1 = console.readNumber(`Introduzca el mínimo: `);
  max1 = console.readNumber(`Introduzca el máximo: `);
  error = min1 > max1;
  if (error) {
    console.writeln(`El mínimo debe ser menor o igual al máximo`);
  }
} while (error);
let min2;
let max2;
do {
  min2 = console.readNumber(`Introduzca el mínimo: `);
  max2 = console.readNumber(`Introduzca el máximo: `);
  error = min2 > max2;
  if (error) {
    console.writeln(`El mínimo debe ser menor o igual al máximo`);
  }
} while (error);
const interval1 = min1 + max1;
const interval2 = min2 + max2;
const intersection = interval1 - interval2;
if (includes(interval2)) {
    return interval;
  }
  if (interval.includes()) {
    return ;
  }
  if (includes(interval.min2)) {
    return new Interval(interval.min1, max1);
  }
  if (includes(interval.max2)) {
    return new Interval(min1, max1);
  }
  return null;
console.writeln(`El primer intervalo [${min1}, ${max1}] y el segundo intervalo ${max2 - min2} ${intersection ? `SI` : `NO`}`);
