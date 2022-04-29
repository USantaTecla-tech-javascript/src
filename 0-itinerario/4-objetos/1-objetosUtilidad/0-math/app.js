const { Console } = require("./console");

const console = new Console();
console.writeln(Math.E);  // 2.718281828459045
console.writeln(Math.PI); // 3.141592653589793
console.writeln(Math.sqrt(2)); // 1.414213562373095
console.writeln(Math.sin(Math.PI / 2)); // 1
console.writeln(Math.abs('no convertible a número')); // NaN
console.writeln(Math.abs('-1')); // 1
console.writeln(Math.sign('-999')); // -1
console.writeln(Math.ceil(0.5)); // 1
console.writeln(Math.round(0.5)); // 1
console.writeln(Math.floor(0.5)); // 0
console.writeln(Math.max(-1, 1)); // 1
console.writeln(Math.pow(2, 10)); // 1024
console.writeln(Math.random()); // ?
