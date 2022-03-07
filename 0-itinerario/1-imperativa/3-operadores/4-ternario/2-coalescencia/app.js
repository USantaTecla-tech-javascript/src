const { Console } = require("./console");

const console = new Console();
console.writeln(null ?? `inicial`); // inicial
console.writeln(undefined ?? `inicial`); // inicial
console.writeln(false ?? `inicial`); // false
console.writeln(0 ?? `inicial`); // 0
console.writeln("" ?? `inicial`); // 
console.writeln(true ?? `inicial`); // true
console.writeln(1 ?? `inicial`); // 1
console.writeln("cadena" ?? `inicial`); // cadena

console.writeln(null || `inicial`); // inicial
console.writeln(undefined || `inicial`); // inicial
console.writeln(false || `inicial`); // inicial
console.writeln(0 || `inicial`); // inicial
console.writeln("" || `inicial`); // inicial
console.writeln(true || `inicial`); // true
console.writeln(1 || `inicial`); // 1
console.writeln("cadena" || `inicial`); // cadena

let x;
 // ...
console.writeln(x === null ? x : `inicial`); // inicial
console.writeln(x === undefined ? x : `inicial`); // inicial
console.writeln(x === false ? x : `inicial`); // inicial
