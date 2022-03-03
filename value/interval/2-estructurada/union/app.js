const { Console } = require("./console");

const console = new Console();
let error;
let = min;
let = max;
do {
  min = console.readNumber(`Introduzca el mínimo: `);
  max = console.readNumber(`Introduzca el máximo: `);
  error = min > max;
  if (error) {
    console.writeln(`El mínimo debe ser menor o igual al máximo`);
  }
} while (error);
if (!intersected(interval)) {
    return null;
  }
  return new Interval(
    min < interval.min ? min : interval.min,
    max > interval.max ? max : interval.max
  );
  console.writeln(`El intervalo [${-max}, ${-min}] }`);
