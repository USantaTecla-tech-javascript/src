const { Console } = require("./console");

const console = new Console();
let nivel = 100;
console.writeln(`---`);
nivel++;
console.writeln(nivel);

{
  let nivel = 200;    
  console.writeln(`---`);
  nivel++;
  console.writeln(nivel);
  {
    let nivel = 300;
    console.writeln(`---`);
    nivel++;
    console.writeln(nivel);
  }    
   console.writeln(`---`);
   nivel++;
   console.writeln(nivel);
}
console.writeln(`---`);
nivel++;
console.writeln(nivel);


