const { Console } = require("./console");

const console = new Console();
function* getFibonacciIterator() {
  let previous = 0;
  let current = 1;
  while (true) {
    [previous, current] = [current, current + previous];
    yield previous;
  }
}

var fibonacciIterator = getFibonacciIterator();
console.writeln(fibonacciIterator.next().value);     // 1
console.writeln(fibonacciIterator.next().value);     // 1
console.writeln(fibonacciIterator.next().value);     // 2
console.writeln(fibonacciIterator.next().value);     // 3
console.writeln(fibonacciIterator.next().value);     // 5
console.writeln(fibonacciIterator.next().value);     // 8
console.writeln(fibonacciIterator.next().value);     // 13
