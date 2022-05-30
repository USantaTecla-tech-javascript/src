const { Console } = require("./console");

const console = new Console();
const values = [3, 6, 8, 2, 7, 9, 5, 2, 4, 6];

function find(values, condition) {
  for (let value of values) {
    if (condition(value)){
      return value;
    }
  }
  return undefined;
}
console.writeln(find(values, value => value % 2 === 0));
console.writeln(find(values, value => value % 2 !== 0));

