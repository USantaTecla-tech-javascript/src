const { Console } = require("./console");

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
console.writeln(`El intervalo [${min}, ${max}] es igual ${min === interval.min && max === interval.max}`);

