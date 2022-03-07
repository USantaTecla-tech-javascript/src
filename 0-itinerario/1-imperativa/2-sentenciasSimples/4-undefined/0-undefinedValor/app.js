const { Console } = require("./console");

const console = new Console();
console.writeln("Valor: " + undefined); // Valor: undefined
let variable;
console.writeln("Valor de variable: " + variable); // Valor de variable: undefined
variable = undefined; // no recomendado
console.writeln("Valor de variable: " + variable); // Valor de variable: undefined
