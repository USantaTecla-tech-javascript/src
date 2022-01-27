const { Console } = require("./console");

const console = new Console();
console.writeln(typeof "cadena de caracteres con comillas dobles"); // string
console.writeln(typeof 'cadena de caracteres con comillas simples'); // string
console.writeln(typeof ""); // string
console.writeln(typeof "123"); // string
console.writeln(typeof "false"); // string

console.writeln(typeof -66); // number
console.writeln(typeof -2.343e-5); // number
console.writeln(typeof -024); // number
console.writeln(typeof 0xA4); // number
console.writeln(typeof Infinity); // number
console.writeln(typeof NaN); // number

console.writeln(typeof true); // boolean

console.writeln(typeof undefined); // undefined
let variable = undefined; 
console.writeln(typeof variable); // undefined
let constant = undefined;
console.writeln(typeof constant); // undefined
