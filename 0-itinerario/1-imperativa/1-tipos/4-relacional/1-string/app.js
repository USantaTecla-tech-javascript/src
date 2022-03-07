const { Console } = require("./console");

const console = new Console();
console.writeln("cadena" === "cadena"); // true
console.writeln("cadena" == "cadena"); // true

console.writeln("cadena" !== "cadena distinta"); // true
console.writeln("cadena" != "cadena distinta"); // true

console.writeln("ana" < "Ana"); // false
console.writeln("Ana" < "ana"); // true
console.writeln(" ana" < "ana"); // true
console.writeln("ana" < "ana "); // true

console.writeln("cadena" < "cadena mayor"); // true
console.writeln("cadena" <= "cadena mayor o igual"); // true
console.writeln("cadena" > "caden a menor "); // true
console.writeln("cadena" >= "caden a menor o igual"); // true

console.writeln("ana" < "bernardo"); // true
console.writeln("bernardo" < "carmen"); // true
console.writeln("carmen" < "carmencita"); // true
