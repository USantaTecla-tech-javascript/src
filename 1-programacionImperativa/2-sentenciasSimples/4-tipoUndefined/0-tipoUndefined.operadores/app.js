const { Console } = require("./console");

const console = new Console();
console.writeln(undefined == undefined);
console.writeln(undefined != undefined);
let variable = undefined;
console.writeln(variable == undefined);
console.writeln(variable != undefined);
let variableDefined = "valor";
console.writeln(variableDefined == undefined);
console.writeln(variableDefined != undefined);
