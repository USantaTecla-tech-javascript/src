const { Console } = require("./console");

const console = new Console();
console.writeln("cadena" == "cadena");
console.writeln("cadena" != "cadena distinta");
console.writeln("cadena" < "cadena mayor");
console.writeln("cadena" <= "cadena mayor o igual");
console.writeln("cadena" > "caden a menor ");
console.writeln("cadena" >= "caden a menor o igual");

console.writeln("ana" < "bernardo");
console.writeln("bernardo" < "carmen");
console.writeln("carmen" < "carmencita");

console.writeln("Ana" < "ana");
console.writeln(" ana" < "ana");
console.writeln("ana" < "ana ");
