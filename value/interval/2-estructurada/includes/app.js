const { Console } = require("./console");

const console = new Console();
let error;
let min;
let max;
do {
  min = console.readNumber(`Introduzca el mínimo: `);
  max = console.readNumber(`Introduzca el máximo: `);
  error = min > max;
  if (error) {
    console.writeln(`El mínimo debe ser menor o igual al máximo`);
  }
} while (error);
const value = console.readNumber(`Introduzca un valor: `);
const included = min <= value && value <= max;
console.writeln(`El intervalo [${min}, ${max}] ${included ? `SI` : `NO`} incluye el valor ${value}`);
