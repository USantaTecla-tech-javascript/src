const { Console } = require("./console");

const console = new Console();
console.writeln(!false); // true
console.writeln(!true); // false