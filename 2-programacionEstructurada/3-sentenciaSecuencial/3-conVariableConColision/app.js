const { Console } = require("./console");

const console = new Console();
let variable = "nivel0";
console.writeln(variable); // nivel0
{
  let variable = "nivel1";
  console.writeln(variable); // nivel1
  {
    let variable = "nivel2";
    console.writeln(variable); // nivel2
  }
  console.writeln(variable); // nivel1
}
console.writeln(variable); // nivel0

