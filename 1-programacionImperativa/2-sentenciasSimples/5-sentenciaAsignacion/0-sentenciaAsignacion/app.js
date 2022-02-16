const { Console } = require("./console");

const console = new Console();
let crazyVariable;
console.writeln(crazyVariable); // undefined
crazyVariable = "Esto es de locos!";
console.writeln(crazyVariable); // Esto es de locos!
crazyVariable = 666;
console.writeln(crazyVariable); // 666
crazyVariable = Infinity;
console.writeln(crazyVariable); // Infinity
crazyVariable = NaN;
console.writeln(crazyVariable); // NaN
crazyVariable = false;
console.writeln(crazyVariable); // false

let x;
let y;
let z = 0;
// ...
x = y = z;
console.writeln(x); // 0
