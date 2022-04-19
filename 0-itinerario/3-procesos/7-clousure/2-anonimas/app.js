const { Console } = require("./console");

const console = new Console();
function incGenerator(initial) {
  let counter = initial;
  return function () {
    counter++;
    return counter
  };
}

const incX = incGenerator(0);
console.writeln(`${incX()}`); // 1
console.writeln(`${incX()}`); // 2
console.writeln(`${incX()}`); // 3
const incY = incGenerator(1);
console.writeln(`${incY()}`); // 2
console.writeln(`${incY()}`); // 3
console.writeln(`${incY()}`); // 4
