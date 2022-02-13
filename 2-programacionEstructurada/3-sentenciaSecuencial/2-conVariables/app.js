const { Console } = require("./console");

const console = new Console();
let nivel0 = 100;
console.writeln(`---`);
 // nivel2++;
 // console.writeln(nivel2);
 // nivel1++;
 // console.writeln(nivel1);
nivel0++;
console.writeln(nivel0); // 101

{
  let nivel1 = 200;    
  console.writeln(`---`);
  // nivel2++;
  // console.writeln(nivel2);
  nivel1++;
  console.writeln(nivel1); // 201
  nivel0++;
  console.writeln(nivel0); // 102

  {
    let nivel2 = 300;
    console.writeln(`---`);
    nivel2++;
    console.writeln(nivel2); // 301
    nivel1++;
    console.writeln(nivel1); // 202
    nivel0++;
    console.writeln(nivel0); // 103
  }    
   console.writeln(`---`);
  // nivel2++;
  // console.writeln(nivel2);
  nivel1++;
  console.writeln(nivel1); // 203
  nivel0++;
  console.writeln(nivel0); // 104
}
console.writeln(`---`);
 // nivel2++;
 // console.writeln(nivel2);
 // nivel1++;
 // console.writeln(nivel1);
nivel0++;
console.writeln(nivel0); // 105


{
  console.writeln(`---`);
 // nivel2++;
 // console.writeln(nivel2);
 // nivel1++;
 // console.writeln(nivel1);
  nivel0++;
  console.writeln(nivel0); // 106
}

