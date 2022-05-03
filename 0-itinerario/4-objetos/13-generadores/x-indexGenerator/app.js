const { Console } = require("./console");

const console = new Console();
const indexGenerator = function* () {
  let index = 0;
  while (true) {
    yield index;
    index++;
  }
};
const iterator = indexGenerator();
console.writeln(iterator.next().value); // 0
console.writeln(iterator.next().value); // 1
console.writeln(iterator.next().value); // 2
 // ...
