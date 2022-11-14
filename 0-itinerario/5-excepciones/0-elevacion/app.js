const { Console } = require("./console");

const console = new Console();
throw "Error: 404" // no capturada
console.writeln("no ejecutada");
throw 404; // no ejecutada

