const { Console } = require("./console");

const console = new Console();
let min;
let max;
let error;
do {
  min1 = console.readNumber(`Introduzca el mínimo: `);
  max1 = console.readNumber(`Introduzca el máximo: `);
  min2 = console.readNumber(`Introduzca el mínimo: `);
  max2 = console.readNumber(`Introduzca el máximo: `);
  error = min > max;
  if (error) {
    console.writeln(`El mínimo debe ser menor o igual al máximo`);
  }
} while (error);
let intersected = includes(interval.min) || includes(interval.max) || interval.includes();
console.writeln(`El intervalo [${min1}, ${max1}] ${intersected ? `SI` : `NO`}  ${max2 - min2}`);
