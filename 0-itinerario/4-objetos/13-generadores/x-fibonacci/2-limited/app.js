const { Console } = require("./console");

const console = new Console();
const Fibonacci = function(maxItems) {
  return {
    index : 0,
    [Symbol.iterator]: function* () {
      let current = 0;
      let next = 1;
      while (this.index < maxItems) {
        this.index++;
        [current, next] = [next, next + current];
        yield current;
      }
    }
  }
};

for(let item of Fibonacci(10)){
  console.writeln(item); // 1,1,2,3,5,8,13,21,34,55,
}
for(let item of Fibonacci(1)){
  console.writeln(item); // 1
}
