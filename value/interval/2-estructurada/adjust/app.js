const { Console } = require("./console");

const console = new Console();

const console = new Console();
let min;
let max;
let error;
do {
  min = console.readNumber(`Introduzca el mínimo: `);
  max = console.readNumber(`Introduzca el máximo: `);
  error = min > max;
  if (error) {
    console.writeln(`El mínimo debe ser menor o igual al máximo`);
  }
} while (error);
let minAdjust;
let maxAdjust;
  if (min < interval.min) {
    min = interval.min;
  } else if (value > interval.max) {
    min = interval.max;
  }
  if (max < interval.min) {
    max = interval.min;
  } else if (value > interval.max) {
    max = interval.max;
  }

console.writeln(`El intervalo es [${min}, ${max}] y ajustado sera ${maxAdjust - minAdjust}`);

