const { Console } = require("./console");

const console = new Console();
const Fibonacci = (maxIndex) => (
  {
    [Symbol.iterator]: () => {
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
  }
);
let msg = ``;
for (let item of Fibonacci(1)) {
  msg += `${item}, `;
}
console.writeln(`:${msg.slice(0, msg.length - 2)}.`);
msg = ``;
for (let item of Fibonacci(10)) {
  msg += `${item}, `;
}
console.writeln(`:${msg.slice(0, msg.length - 2)}.`);

const array = [...Fibonacci(5)];
msg = ``;
for (let item of array) {
  msg += `${item}, `;
}
console.writeln(`:${msg.slice(0, msg.length - 2)}.`);
