const { Console } = require("./console");

const console = new Console();
{
  console.writeln("- Inicio secuencial");
  {
    console.writeln("  - Inicio secuencial interno");
    {
      console.writeln("    - Hasta el infinito");
      console.writeln("    - y más allá ... no!");
    }
    console.writeln("  - Fin secuencial interno");
  }
  console.writeln("- Fin secuencial");
}

console.writeln("- Inicio secuencial");
console.writeln("  - Inicio secuencial interno");
console.writeln("    - Hasta el infinito");
console.writeln("    - y más allá ... no!");
console.writeln("  - Fin secuencial interno");
console.writeln("- Fin secuencial");
