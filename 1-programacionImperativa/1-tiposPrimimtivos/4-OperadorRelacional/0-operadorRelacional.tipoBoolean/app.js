const { Console } = require("./console");

const console = new Console();
console.writeln(true == true);
console.writeln(true != false);
console.writeln(false < true);
console.writeln(false <= false);
console.writeln(true > false);
console.writeln(true >= true);
