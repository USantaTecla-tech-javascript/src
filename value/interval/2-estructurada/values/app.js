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
  amount = console.readNumber(`Introduzca el número de puntos: `);
  error = amount < 2;
  if (error) {
    console.writeln(`El número de puntos debe ser mayor o igual a 2`);
  }
} while (error);
const distance = (max - min) / (amount - 1);
let currentMin = min;
for (let i = 0; i < amount; i++) {
  console.writeln(`Punto ${currentMin}`);
  currentMin += distance;
}

