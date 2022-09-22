const { Console } = require("./console");

const console = new Console();
function incGenerator(initial) {
  let counter = initial;
  return { next };

  function next() {
    counter++;
    return counter
  }
}

const incX = incGenerator(0);
console.writeln(`${incX.next()}`); // 1
console.writeln(`${incX.next()}`); // 2
console.writeln(`${incX.next()}`); // 3
console.writeln(incX.counter);
const incY = incGenerator(1);
console.writeln(`${incY.next()}`); // 2
console.writeln(`${incY.next()}`); // 3
console.writeln(`${incY.next()}`); // 4
