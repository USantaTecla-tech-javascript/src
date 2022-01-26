const { Console } = require("./console");

const console = new Console();
console.writeln(false && false);
console.writeln(false && true);
console.writeln(true && false);
console.writeln(true && true);

console.writeln(false || false);
console.writeln(false || true);
console.writeln(true || false);
console.writeln(true || true);