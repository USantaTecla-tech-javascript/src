const { Console } = require("./console");

const console = new Console();
const values = [3, 6, 8, 2, 7, 9, 5, 2, 4, 6];

function sum(values, operation) {
  let acu = 0;
  for (let value of values) {
    acu += operation(value);
  }
  return acu;
}
function double(value) {
  return value * 2;
}
function triple(value) {
  return value * 3;
}
console.writeln(sum(values, double));
console.writeln(sum(values, triple));
