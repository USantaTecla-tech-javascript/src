const { Console } = require("./console");

const console = new Console();
const set = new Set();
set.add(1);
set.add(1);
set.add(true);
set.add('cadena de caracteres');
const array = [1, true, 'cadena de caracteres']; 
set.add(array);
set.add([1, true, 'cadena de caracteres']);
const object = {a: 1, b: 2}
set.add(object);
set.add({a: 1, b: 2});
console.writeln(set.size); // 7
for (let item of set.keys()) {
  console.writeln(item); // 1 / true / cadena de caracteres / 1,true,cadena de caracteres / 1,true,cadena de caracteres / [object Object] / [object Object]
} 
for (let item of set.values()) {
  console.writeln(item); // 1 / true / cadena de caracteres / 1,true,cadena de caracteres / 1,true,cadena de caracteres / [object Object] / [object Object]
} 
for (let [key, value] of set.entries()) {
  console.writeln(`${key}, ${value}`); // 1, 1 / true, true / cadena de caracteres, cadena de caracteres / 1,true,cadena de caracteres, 1,true,cadena de caracteres / 1,true,cadena de caracteres, 1,true,cadena de caracteres / [object Object], [object Object] / [object Object], [object Object]
} 
for (let item of set) {
  console.writeln(item); // 1 / true / cadena de caracteres / 1,true,cadena de caracteres / 1,true,cadena de caracteres / [object Object] / [object Object]
} 
console.writeln(set.has(0)); // false
console.writeln(set.has(2/2)); // true
console.writeln(set.has(true)); // true
console.writeln(set.has('cadena de caracteres')); // true
console.writeln(set.has(array)); // true
console.writeln(set.has([1, true, 'cadena de caracteres'])); // false
console.writeln(set.has(object)); // true
console.writeln(set.has({a: 1, b: 2})); // false

set.delete(1);
set.delete(true);
set.delete('cadena de caracteres');
set.delete(array);
set.delete(object);
for (let item of set) {
  console.writeln(item); // 1,true,cadena de caracteres / [object Object]
} 
console.writeln(set.has(0)); // false
console.writeln(set.has(2/2)); // false
console.writeln(set.has(true)); // false
console.writeln(set.has('cadena de caracteres')); // false
console.writeln(set.has(array)); // false
console.writeln(set.has([1, true, 'cadena de caracteres'])); // false
console.writeln(set.has(object)); // false
console.writeln(set.has({a: 1, b: 2})); // false

for(let item of Array.from(new Set([`a`, `b`, `c`]))) {
  console.writeln(item); // a / b / c
}
for(let item of [...new Set([`a`, `b`, `c`])]) {
  console.writeln(item); // a / b / c
}
new Set([`a`, `b`, `c`])
  .forEach(item => console.writeln(item)); // a / b / c
