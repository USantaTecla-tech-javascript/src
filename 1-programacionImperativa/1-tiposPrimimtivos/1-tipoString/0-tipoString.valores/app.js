const { Console } = require("./console");

const console = new Console();
console.writeln("cadena de caracteres con comillas dobles");
console.writeln('cadena de caracteres con comillas simples');
console.writeln("cadena de caracteres con comillas dobles 'con comillas simples' dentro");
console.writeln('cadena de caracteres con comillas simples "con comillas dobles" dentro');
console.writeln("cadena de caracteres\ncon salto de línea y \ttabulador");

console.writeln("");
console.writeln("1");
console.writeln("123");
console.writeln("Resultado:\t123");
console.writeln("string of ...\n... elephants");
console.writeln("alert!!!");
console.writeln("alert");
console.writeln("TRUE.");
console.writeln("false");
