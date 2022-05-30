const { Console } = require("./console");

const console = new Console();
const values = [3, 6, 8, 2, 7, 9, 5, 2, 4, 6];

function sumDoubles(values) {
  let acu = 0;
  for (let value of values) {
    acu += value * 2;
  }
  return acu;
}
console.writeln(sumDoubles(values));

function sumTriples(values) {
  let acu = 0;
  for (let value of values) {
    acu += value * 3;
  }
  return acu;
}
console.writeln(sumTriples(values));
