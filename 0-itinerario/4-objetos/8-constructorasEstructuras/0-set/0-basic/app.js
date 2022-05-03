const { Console } = require("./console");

const console = new Console();
let set = new Set();
set.add(1);
set.add(1);
set.add(true);
set.add('cadena de caracteres');
set.add([1, true, 'cadena de caracteres']);
const array = [1, true, 'cadena de caracteres']; 
set.add(array);
set.add({a: 1, b: 2});
const object = {a: 1, b: 2};
set.add(object);
console.writeln(set.size); // 7
for (let item of set) {
  console.writeln(item); // 1 / true / cadena de caracteres / 1,true,cadena de caracteres / 1,true,cadena de caracteres / [object Object] / [object Object]
} 
console.writeln(set.has(0)); // false
console.writeln(set.has(2/2)); // true
console.writeln(set.has(true)); // true
console.writeln(set.has('cadena de caracteres')); // true
console.writeln(set.has([1, true, 'cadena de caracteres'])); // false
console.writeln(set.has(array)); // true
console.writeln(set.has({a: 1, b: 2})); // false
console.writeln(set.has(object)); // true

set = new Set([1, 1, true, 'cadena de caracteres', array, {a: 1, b: 2}, object]);
console.writeln(set.size); // 7
set.delete(1);
set.delete(true);
set.delete('cadena de caracteres');
set.delete(array);
set.delete(object);
console.writeln(set.size); // 2
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
set.clear();
console.writeln(set.size); // 0
for (let item of set) {
  console.writeln(item); //
} 
set = new Set([1,2,3]);
set.forEach(item => console.writeln(item)); // 1 / 2 / 3
for (let item of set.keys()) {
  console.writeln(item); // 1 / 2 / 3
} 
for (let item of set.values()) {
  console.writeln(item); // 1 / 2 / 3
} 
for (let [key, value] of set.entries()) {
  console.writeln(`${key}, ${value}`); // 1, 1 / 2, 2 / 3, 3
} 
