const { Console } = require("./console");

const console = new Console();
let x= 100;
console.writeln(x); // 100
console.writeln(x++); // 100
console.writeln(++x); // 102
console.writeln(x--); // 102
console.writeln(--x); // 100

console.writeln(- -x); // 100
console.writeln(+ +x); // 100

console.writeln(++x*2); // 202
console.writeln(++x*2); // 204
console.writeln(x++*2); // 204
console.writeln(x); // 103
