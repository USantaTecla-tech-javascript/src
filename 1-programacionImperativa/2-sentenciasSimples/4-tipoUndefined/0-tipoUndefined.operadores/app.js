const { Console } = require("./console");

const console = new Console();
console.writeln(undefined == undefined); // true
console.writeln(undefined != undefined); // false
let variable = undefined;
console.writeln(variable == undefined); // true
console.writeln(variable != undefined); // false
let variableDefined = "valor";
console.writeln(variableDefined == undefined); // false
console.writeln(variableDefined != undefined); // true
