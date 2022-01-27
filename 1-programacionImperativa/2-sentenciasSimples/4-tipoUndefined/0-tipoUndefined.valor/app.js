const { Console } = require("./console");

const console = new Console();
let variable = undefined;
console.writeln("Valor de variable: " + variable); // Valor de variable: undefined
console.writeln("Valor: " + undefined); // Valor: undefined
