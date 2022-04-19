const { Console } = require("./console");

const console = new Console();
console.writeln(`El siguiente es ${console.readNumber(`Dame un número: `) + 1}`);
