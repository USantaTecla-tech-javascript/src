const { Console } = require("./console");

const console = new Console();
const values = [3, 6, 8, 2, 7, 9, 5, 2, 4, 6];

function filter(values, condition) {
  let acu = [];
  for (let value of values) {
    if (condition(value)){
      acu[acu.length] = value;
    }
  }
  return acu;
}
function even(value) {
  return value % 2 === 0;
}
function odd(value) {
  return value % 2 !== 0;
}
console.writeln(filter(values, even));
console.writeln(filter(values, odd));
