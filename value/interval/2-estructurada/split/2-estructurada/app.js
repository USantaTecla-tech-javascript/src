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
let amount;
do {
  amount = console.readNumber(`Introduzca el número de intervalos: `);
  error = amount < 1;
  if (error) {
    console.writeln(`El número de intervalos debe ser mayor o igual a 1`);
  }
} while (error);
const distance = (max - min) / amount;
let currentMin = min;
let currentMax = min + distance;
for (let i = 0; i < amount; i++) {
  console.writeln(`Intervalo [${currentMin}, ${currentMax}]`);
  currentMin += distance;
  currentMax += distance;  
}
