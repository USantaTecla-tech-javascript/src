const { Console } = require("./console");

const console = new Console();
let nivel = 100;
console.writeln(`---`);
nivel++;
console.writeln(nivel); // 101
{
  let nivel = 200;
  console.writeln(`---`);
  nivel++;
  console.writeln(nivel); // 201
  {
    let nivel = 300;
    console.writeln(`---`);
    nivel++;
    console.writeln(nivel); // 301
  }
  console.writeln(`---`);
  nivel++;
  console.writeln(nivel); // 202
}
console.writeln(`---`);
nivel++;
console.writeln(nivel); // 102
