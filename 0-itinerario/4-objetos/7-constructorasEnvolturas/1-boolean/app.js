const { Console } = require("./console");

const console = new Console();
const expression = 0;
console.writeln(Boolean(expression)); // false
console.writeln(new Boolean(expression)); // false
console.writeln(!!(expression)); // false

console.writeln(true.toString()); // true
console.writeln(false.toString()); // false
console.writeln(true.valueOf()); // true
console.writeln(false.valueOf()); // false

console.writeln(new Boolean().valueOf()); // false
console.writeln(new Boolean(false).valueOf()); // false
console.writeln(new Boolean(0).valueOf()); // false
console.writeln(new Boolean('').valueOf()); // false
console.writeln(new Boolean(null).valueOf()); // false
if (new Boolean(false)){
  console.writeln(`Increible!!!`); // Increible!!!
}
console.writeln(new Boolean(true).valueOf()); // true
console.writeln(new Boolean(-1).valueOf()); // true
console.writeln(new Boolean('false').valueOf()); // true
console.writeln(new Boolean([]).valueOf()); // true
console.writeln(new Boolean({}).valueOf()); // true
console.writeln(new Boolean(new Boolean(false)).valueOf()); // true
