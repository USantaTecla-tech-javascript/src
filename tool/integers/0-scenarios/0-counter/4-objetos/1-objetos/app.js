const { Console } = require("./console");

const console = new Console();
function counterGenerator(value) {
  return {
    increment: function () {
      value++;
    },
    decrement: function () {
      value--;
    },
    value: function () {
      return value;
    }
  };
}

let counter = counterGenerator(0);
console.writeln(counter.value()); // 0 
counter.increment();
counter.increment();
console.writeln(counter.value()); // 2 
counter.decrement();
console.writeln(counter.value()); // 1 

counter = counterGenerator(1);
console.writeln(counter.value()); // 1 
counter.increment();
counter.increment();
console.writeln(counter.value()); // 3 
counter.decrement();
console.writeln(counter.value()); // 2 