const { Console } = require("./console");

const console = new Console();
let nivel0 = 100;
console.writeln(`---`);
 // nivel2++;
 // console.writeln(nivel2);
 // nivel1++;
 // console.writeln(nivel1);
nivel0++;
console.writeln(nivel0);

{
  let nivel1 = 200;    
  console.writeln(`---`);
  // nivel2++;
  // console.writeln(nivel2);
  nivel1++;
  console.writeln(nivel1);
  nivel0++;
  console.writeln(nivel0);

  {
    let nivel2 = 300;
    console.writeln(`---`);
    nivel2++;
    console.writeln(nivel2);
    nivel1++;
    console.writeln(nivel1);
    nivel0++;
    console.writeln(nivel0);
  }    
   console.writeln(`---`);
  // nivel2++;
  // console.writeln(nivel2);
  nivel1++;
  console.writeln(nivel1);
  nivel0++;
  console.writeln(nivel0);
}
console.writeln(`---`);
 // nivel2++;
 // console.writeln(nivel2);
 // nivel1++;
 // console.writeln(nivel1);
nivel0++;
console.writeln(nivel0);

console.writeln(`---`);
{
  console.writeln(nivel0);
  // console.writeln(nivel1);
  // console.writeln(nivel2);
}

