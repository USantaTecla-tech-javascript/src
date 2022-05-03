const { Console } = require("./console");

const console = new Console();
function* generator () {
  yield 1;
  yield 2;
  yield 3;
}
const iterator = generator();
let item = iterator.next();
while (!item.done){
  console.writeln(item.value); // 1,2,3
  item = iterator.next();
}
