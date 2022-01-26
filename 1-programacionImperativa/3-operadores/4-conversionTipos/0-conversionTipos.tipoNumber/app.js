const { Console } = require("./console");

const console = new Console();
console.writeln(- "-666"); //666
console.writeln(- "sin formato numérico"); //NaN
console.writeln(- false); //-0
console.writeln(- true); //-1
console.writeln(- undefined); //NaN
