const { Console } = require("./console");

const console = new Console();
let global = "inicialización global";
console.writeln(global);
{
  console.writeln("- Inicio secuencial");
  let local = "Inicializacion local";
  console.writeln(local);
  local += ", actualizacion local";
  console.writeln(local);
  console.writeln(global);
  global += ", actualización local";
  console.writeln(global);
  console.writeln("- Fin secuencial");
}
console.writeln(global);
