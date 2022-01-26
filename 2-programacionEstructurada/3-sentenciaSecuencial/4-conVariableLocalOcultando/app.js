const { Console } = require("./console");

const console = new Console();
let global = "inicialización global";
console.writeln(global);
{
  console.writeln("- Inicio secuencial");
  let global = "Inicializacion local";
  console.writeln(global);
  global += ", actualizacion local";
  console.writeln(global);
  console.writeln("- Fin secuencial");
}
console.writeln(global);
