const { Console } = require("./console");

const console = new Console();
console.writeln(typeof "cadena de caracteres con comillas dobles");
console.writeln(typeof 'cadena de caracteres con comillas simples');
console.writeln(typeof "");
console.writeln(typeof "123");
console.writeln(typeof "false");

console.writeln(typeof -66);
console.writeln(typeof -2.343e-5);
console.writeln(typeof -024);
console.writeln(typeof 0xA4);
console.writeln(typeof Infinity);
console.writeln(typeof NaN);

console.writeln(typeof true);

console.writeln(typeof undefined);
let variable = undefined;
console.writeln(typeof variable);
let constant = undefined;
console.writeln(typeof constant);
