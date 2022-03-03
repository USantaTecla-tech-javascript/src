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
let values = values(amount + 1);
let result = [];
for (let i = 0; i < amount; i++) {
  result[i] = new Interval(values[i], values[i + 1]);
}
console.writeln(`El intervalo [${min}, ${max}] la separacion es ${result}`);