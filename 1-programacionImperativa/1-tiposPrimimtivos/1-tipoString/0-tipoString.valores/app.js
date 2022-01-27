const { Console } = require("./console");

const console = new Console();
console.writeln("cadena de caracteres con comillas dobles"); // cadena de caracteres con comillas dobles
console.writeln('cadena de caracteres con comillas simples'); // cadena de caracteres con comillas simples
console.writeln("cadena de caracteres con comillas dobles 'con comillas simples' dentro"); // cadena de caracteres con comillas dobles 'con comillas simples' dentro
console.writeln('cadena de caracteres con comillas simples "con comillas dobles" dentro'); // cadena de caracteres con comillas simples "con comillas dobles" dentro
console.writeln("cadena de caracteres\ncon salto de línea y \ttabulador"); // cadena de caracteres
                                                                           // con salto de línea y    tabulador
console.writeln(""); //  
console.writeln("1"); // 1
console.writeln("123"); // 123
console.writeln("Resultado:\t123"); // Resultado:      123
console.writeln("string of ...\n... elephants"); // string of ...
                                                 // ... elephants
console.writeln("alert!!!"); // alert!!!
console.writeln("alert"); // alert
console.writeln("TRUE."); // TRUE.
console.writeln("false"); // false
