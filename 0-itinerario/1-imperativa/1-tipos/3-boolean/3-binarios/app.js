const { Console } = require("./console");

const console = new Console();
console.writeln(false && false); // false
console.writeln(false && true); // false
console.writeln(true && false); // false
console.writeln(true && true); // true

console.writeln(false || false); // false
console.writeln(false || true); // true
console.writeln(true || false); // true
console.writeln(true || true); // true
