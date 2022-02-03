const { Console } = require("./console");

const console = new Console();
let name;
//let name;
{
  console.writeln("- Inicio secuencial");
  {
    let name;
    // const name;
    console.writeln("- Inicio secuencial interno");
    {
      const name = "";
      console.writeln("- Hasta el infinito y más allá ... no!");
    }
    //let name;
    console.writeln("- Fin secuencial interno");
  }
  console.writeln("- Fin secuencial");
}

console.writeln("- Inicio secuencial");
console.writeln("- Inicio secuencial interno");
console.writeln("- Hasta el infinito y más allá ... no!");
console.writeln("- Fin secuencial interno");
console.writeln("- Fin secuencial");
