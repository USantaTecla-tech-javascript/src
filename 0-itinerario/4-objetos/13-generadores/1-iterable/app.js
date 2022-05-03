const { Console } = require("./console");

const console = new Console();
const iterableObject = {
  [Symbol.iterator] : function* () {
    yield 1;
    yield 2;
    yield 3;
  }
};

for (let item of iterableObject) {
  console.writeln(item); // 1,2,3
}
for (let item of [...iterableObject, ...iterableObject]) {
  console.writeln(item); // 1,2,3,1,2,3
}
