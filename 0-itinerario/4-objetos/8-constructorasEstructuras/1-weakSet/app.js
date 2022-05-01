const { Console } = require("./console");

const console = new Console();
let weakSet = new WeakSet();
let array = [1, true, 'cadena de caracteres']; 
weakSet.add(array);
weakSet.add(array);
weakSet.add([1, true, 'cadena de caracteres']);
let object = {a: 1, b: 2};
weakSet.add(object);
weakSet.add(object);
weakSet.add({a: 1, b: 2});
console.writeln(weakSet.has(array)); // true
console.writeln(weakSet.has([1, true, 'cadena de caracteres'])); // false
console.writeln(weakSet.has(object)); // true
console.writeln(weakSet.has({a: 1, b: 2})); // false

array = null;
object = null;
console.writeln(weakSet.size); // 0
console.writeln(weakSet.has(array)); // false
console.writeln(weakSet.has([1, true, 'cadena de caracteres'])); // false
console.writeln(weakSet.has(object)); // false
console.writeln(weakSet.has({a: 1, b: 2})); // false
