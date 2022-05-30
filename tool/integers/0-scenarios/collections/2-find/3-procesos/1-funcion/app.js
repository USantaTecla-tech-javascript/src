const { Console } = require("./console");

const console = new Console();
const values = [3, 6, 8, 2, 7, 9, 5, 2, 4, 6];

function findEven(values) {
  for (let value of values) {
    if (value % 2 === 0){
      return value;
    }
  }
  return undefined;
}
console.writeln(findEven(values));

function findOdd(values) {
  for (let value of values) {
    if (value % 2 !== 0){
      return value;
    }
  }
  return undefined;
}
console.writeln(findOdd(values));
