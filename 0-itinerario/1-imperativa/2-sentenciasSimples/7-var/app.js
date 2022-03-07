const { Console } = require("./console");

const console = new Console();
console.writeln(crazyVariable); // undefined
crazyVariable = "Esto es de locos!";
console.writeln(crazyVariable); // Esto es de locos!
crazyVariable = 666;
console.writeln(crazyVariable); // 666
crazyVariable = Infinity;
console.writeln(crazyVariable); // Infinity
var crazyVariable = NaN;
console.writeln(crazyVariable); // NaN
crazyVariable = false;
console.writeln(crazyVariable); // false
var crazyVariable = undefined;
console.writeln(crazyVariable); // undefined
