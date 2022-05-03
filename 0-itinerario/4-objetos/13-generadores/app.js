const { Console } = require("./console");

const console = new Console();
const iterable1 = {};

iterable1[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield 3;
};

console.log([...iterable1]);

function* hacedorIds() {
  var indice = 0;
  while(true)
    yield indice++;
}

var gen = hacedorIds();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
// ...

var miIterable = {}
miIterable[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
};

for (let valor of miIterable) {
    console.log(valor);
}

[...miIterable] // [1, 2, 3]