const { Console } = require("./console");

const console = new Console();
console.writeln(`Tú número es ${console.readNumber(`Dame un número: `)}`);
console.writeln(`${console.readNumber()}`);
