const { Console } = require("./console");

const console = new Console();
let crazyVariable = "Esto es de locos!";
console.writeln(crazyVariable);
crazyVariable = 666;
console.writeln(crazyVariable);
crazyVariable = Infinity;
console.writeln(crazyVariable);
crazyVariable = NaN;
console.writeln(crazyVariable);
crazyVariable = false;
console.writeln(crazyVariable);
crazyVariable = undefined;
console.writeln(crazyVariable);
