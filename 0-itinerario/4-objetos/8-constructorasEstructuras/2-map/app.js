const { Console } = require("./console");

const console = new Console();
let map = new Map()
map.set('x', {a: 1111, b: 2222});
console.writeln(map.has('x')); // true
console.writeln(map.get('y')) // undefined
map.set('y', {a: 3333, b: 4444});
console.writeln(map.get('y')); // [object Object]
console.writeln(map.delete('z')); // false
console.writeln(map.delete('y')) // true
console.writeln(map.size) // 1

new Map([['foo', 3], ['bar', {}], ['baz', undefined]])
map = new Map([['a', 1], ['b', 2], ['c', 3], ]);
map.forEach((value, key, map) => 
    { console.writeln(`map.get('${key}') = ${value}`) }); 
// map.get('a') = 1 / map.get('b') = 2 / map.get('c') = 3
for (let item of map.keys()) {
  console.writeln(item); // a / b / c
}
for (let item of map.values()) {
  console.writeln(item); // 1 / 2 / 3
}
for (let [key, value] of map.entries()) {
  console.writeln(`${key}, ${value}`); // a, 1 / b, 2 / c, 3
}