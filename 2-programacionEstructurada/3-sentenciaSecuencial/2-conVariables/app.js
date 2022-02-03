const { Console } = require("./console");

const console = new Console();
let nivel0 = "nivel0";
console.writeln(nivel0);
 // console.writeln(nivel1);
 // console.writeln(nivel2);
{
  let nivel1 = "nivel1";
  console.writeln(nivel0);
  console.writeln(nivel1);
  // console.writeln(nivel2);
  {
    let nivel2 = "nivel2";
    console.writeln(nivel0);
    console.writeln(nivel1);
    console.writeln(nivel2);
    global =2;
    console.writeln(global);
  }
  console.writeln(nivel0);
  console.writeln(nivel1);
  // console.writeln(nivel2);
}
console.writeln(nivel0);
 // console.writeln(nivel1);
 // console.writeln(nivel2);
 console.writeln(global); // nivel0
 var global;
