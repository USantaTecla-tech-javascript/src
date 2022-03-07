const { Console } = require("./console");

const console = new Console();
console.writeln(true === true); // true
console.writeln(true == true); // true

console.writeln(true !== false); // true
console.writeln(true != false); // true

console.writeln(false < true); // true
console.writeln(false <= false); // true
console.writeln(true > false); // true
console.writeln(true >= true); // true
