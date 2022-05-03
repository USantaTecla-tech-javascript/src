const { Console } = require("./console");

const console = new Console();
function* getFibonacciIterator() {
  let current = 0;
  let next = 1;
  while (true) {
    [current, next] = [next, next + current];
    yield current;
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
