const { Console } = require("./console");

const console = new Console();
let global = "inicialización global";
console.writeln(global);
{
  console.writeln("- Inicio secuencial");
  console.writeln(global);
  global += ", actualización local";
  console.writeln(global);
  console.writeln("- Fin secuencial");
}
console.writeln(global);
