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

let scaledMiddle = min + length() / 2;
let scaledHalfLength = length() * value / 2;
console.writeln(`El intervalo [${min}, ${max}] su ${scaledMiddle - scaledHalfLength}, ${scaledMiddle + scaledHalfLength}`);
