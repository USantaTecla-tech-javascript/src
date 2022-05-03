const { Console } = require("./console");

const console = new Console();
function getFibonacciIterator(maxIndex) {
  let index = 0;
  let previous = 0;
  let current = 1;
  return {
    next: () => {
      let result = {
        done: index === maxIndex
      };
      if (!result.done) {
        [previous, current] = [current, (previous + current)];
        result = {
          value: previous
        };
        index++;
      }
      return result;
    }
  }
}
let fibonacciIterator = getFibonacciIterator(1);
let item = fibonacciIterator.next();
let msg = ``;
while(!item.done){
  msg += `${item.value}, `;
  item = fibonacciIterator.next(); 
}
console.writeln(`:${msg.slice(0, msg.length - 2)}.`);
fibonacciIterator = getFibonacciIterator(10);
item = fibonacciIterator.next();
msg = ``;
while(!item.done){
  msg += `${item.value}, `;
  item = fibonacciIterator.next(); 
}
console.writeln(`:${msg.slice(0, msg.length - 2)}.`);

