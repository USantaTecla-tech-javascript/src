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

console.writeln(null || `inicial`); // inicial
console.writeln(undefined || `inicial`); // inicial
console.writeln(false || `inicial`); // inicial
console.writeln(0 || `inicial`); // inicial
console.writeln("" || `inicial`); // inicial
console.writeln(true || `inicial`); // true
console.writeln(1 || `inicial`); // 1
console.writeln("cadena" || `inicial`); // cadena