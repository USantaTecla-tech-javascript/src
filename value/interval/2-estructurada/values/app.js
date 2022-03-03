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
let distance = length() / (amount - 1);
let result = [min];
for (let i = 1; i < amount - 1; i++) {
  result[i] = result[i - 1] + distance;
}
result[result.length] = max;
return result;
