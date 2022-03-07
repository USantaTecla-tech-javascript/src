const { Console } = require("./console");

const console = new Console();

console.writeln(undefined === undefined); // true
console.writeln(undefined == undefined); // true

console.writeln(undefined !== undefined); // false
console.writeln(undefined != undefined); // false

let variableUndefined;
console.writeln(variableUndefined === undefined); // true
console.writeln(variableUndefined !== undefined); // false

let variableDefined = "valor";
console.writeln(variableDefined === undefined); // false
console.writeln(variableDefined !== undefined); // true
