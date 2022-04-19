const { Console } = require("./console");

const console = new Console();
let dynamic = first;
dynamic(`cualquiera`); // mensaje: cualquiera
dynamic = second;
dynamic(`cualquiera`); // MENSAJE: cualquiera

function first(msg) {
    console.writeln(`mensaje: ${msg}`);
}

function second(msg) {
    console.writeln(`MENSAJE: ${msg}`);
}

console.writeln(first === second); // false
second = first;
console.writeln(first === second); // true
