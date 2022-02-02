const { Console } = require("./console");

const console = new Console();
function funcion() {
    console.writeln("nominal, arranque");
    console.writeln("nominal, medio");
    console.writeln("nominal, fin");
}
console.writeln(funcion);
console.writeln(typeof funcion);
console.writeln(funcion());
console.writeln(typeof funcion());
