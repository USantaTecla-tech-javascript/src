const { Console } = require("./console");

const console = new Console();
function* getFibonacciIterator() {
  let previous = 0;
  let current = 1;
  while (true) {
    let returned = current;
    [previous, current] = [current, current + previous];
    let reset = yield returned;
    if (reset) {
      previous = 0;
      current = 1;
    }
  }
}

let fibonacciIterator = getFibonacciIterator();
console.writeln(fibonacciIterator.next().value);     // 1
console.writeln(fibonacciIterator.next().value);     // 1
console.writeln(fibonacciIterator.next().value);     // 2
console.writeln(fibonacciIterator.next().value);     // 3
console.writeln(fibonacciIterator.next().value);     // 5
console.writeln(fibonacciIterator.next().value);     // 8
console.writeln(fibonacciIterator.next().value);     // 13
console.writeln(fibonacciIterator.next(true).value); // 1
console.writeln(fibonacciIterator.next().value);     // 1
console.writeln(fibonacciIterator.next().value);     // 2
console.writeln(fibonacciIterator.next().value);     // 3
