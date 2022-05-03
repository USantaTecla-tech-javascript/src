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

// function* hacedorIds() {
//   var indice = 0;
//   while (true)
//     yield indice++;
// }
// var gen = hacedorIds();

// console.log(gen.next().value); // 0
// console.log(gen.next().value); // 1
// console.log(gen.next().value); // 2
// // ...
