const { Console } = require("./console");

const console = new Console();
console.writeln("cadena de caracteres con comillas dobles"); // cadena de caracteres con comillas dobles
console.writeln('cadena de caracteres con comillas simples'); // cadena de caracteres con comillas simples
console.writeln("cadena de caracteres con comillas dobles 'con comillas simples' dentro"); // cadena de caracteres con comillas dobles 'con comillas simples' dentro
console.writeln('cadena de caracteres con comillas simples "con comillas dobles" dentro'); // cadena de caracteres con comillas simples "con comillas dobles" dentro
// con salto de línea y    tabulador
console.writeln("cadena de caracteres\ncon salto de línea y \ttabulador"); // cadena de caracteres
console.writeln("¡¡¡ Alerta !!! \u0278 o \u{00000278}, \u{1F970}"); // ¡¡¡ Alerta !!! ɸ o ɸ, 🥰
console.writeln(""); //  
console.writeln("1"); // 1
console.writeln("123"); // 123
console.writeln("TRUE."); // TRUE.
console.writeln("false"); // false

console.writeln("Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n\
Donec rhoncus sollicitudin enim vitae tempor.\n\
Nullam dui lorem, vulputate varius sapien ac, malesuada dictum metus.\n\
...");
console.writeln(
`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Donec rhoncus sollicitudin enim vitae tempor. 
Nullam dui lorem, vulputate varius sapien ac, malesuada dictum metus. 
...`);

console.writeln(`Qué "comodo" usar comillas con normalidad sin 'escaparlas'!!!`);
console.writeln(`Qué "comodo" usar comillas con normalidad sin 'escaparlas'!!!`);
console.writeln(`Pero\tel salto\nde linea sí hace falta escaparlo!!!`);

console.writeln(`${535} * ${723} = ${535*723}.`);
console.writeln(535 + " * " + 723 + " = " + 535*723 + ".");
console.writeln(`esto es ${`innecesariamente`} innecesario, verdad?`);
