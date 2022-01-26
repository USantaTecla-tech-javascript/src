const { Console } = require("./console");

const console = new Console();
console.writeln(!false);
console.writeln(!true);