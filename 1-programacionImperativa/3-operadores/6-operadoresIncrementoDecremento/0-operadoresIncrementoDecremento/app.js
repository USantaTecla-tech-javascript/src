const { Console } = require("./console");

const console = new Console();
x= 100;
console.writeln(x); // 100
console.writeln(x++); // 100
console.writeln(++x); // 102
console.writeln(x--); // 102
console.writeln(--x); // 100

console.writeln(- -x); // 100
