const { Console } = require("./console");

const console = new Console();
console.writeln('Hola, mundo!!!');
console.writeln(`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Donec rhoncus sollicitudin enim vitae tempor. 
Nullam dui lorem, vulputate varius sapien ac, malesuada dictum metus. 
...`);
console.write("abc");
console.write(123);
console.writeln();
console.writeln();
let n = console.readNumber("Numero: ");
console.writeln("numero: " + n);
console.writeln();
console.writeln("string: " + console.readString("string: "));
