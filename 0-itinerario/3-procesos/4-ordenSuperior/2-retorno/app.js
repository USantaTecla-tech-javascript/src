const { Console } = require("./console");

const console = new Console();
function selector(direction) {
  if (direction){
    return increment;
  } 
  return decrement;

  function increment(value) {
    return value + 1;
  }

  function decrement(value) {
    return value - 1;
  }
};

let operation = selector(true);
console.writeln(`${operation(1)}`); // 2
operation = selector(false);
console.writeln(`${operation(1)}`); // 0
