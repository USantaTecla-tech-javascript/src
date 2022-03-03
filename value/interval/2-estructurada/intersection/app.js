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
let intersectedMin = min1 > min2 ? min1 : min2; 
let intersectedMax = max1 < max2 ? max1 : max2;
console.writeln(`El intervalo [${min1}, ${max1}] intersección con el intervalo [${min2}, ${max2}] será [${intersectedMin}, ${intersectedMax}]`);
