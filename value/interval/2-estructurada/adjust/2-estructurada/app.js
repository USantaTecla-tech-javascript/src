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
let msg = `El intervalo [${min}, ${max}] `;
let minAdjust;
let maxAdjust;
do {
  minAdjust = console.readNumber(`Introduzca el mínimo: `);
  maxAdjust = console.readNumber(`Introduzca el máximo: `);
  error = min > max;
  if (error) {
    console.writeln(`El mínimo debe ser menor o igual al máximo`);
  }
} while (error);
msg += `ajustado a [${minAdjust}, ${maxAdjust}] `;
if (min < minAdjust) {
  min = minAdjust;
} else if (min > maxAdjust) {
  min = maxAdjust;
}
if (max < minAdjust) {
  max = minAdjust;
} else if (max > maxAdjust) {
  max = maxAdjust;
}
msg += `será  [${min}, ${max}]`;
console.writeln(msg);

