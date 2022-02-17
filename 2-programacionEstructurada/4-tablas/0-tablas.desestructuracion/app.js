const { Console } = require("./console");

const console = new Console();
let [head, ...rest] = [1,2,3,4,5];
console.writeln(head); // 1
console.writeln(rest); // 2,3,4,5

[head, ...rest] = ["a", "e", "i", "o", "u"];
console.writeln(head); // a
console.writeln(rest); // e,i,o,u
[head, ...rest] = [true];
console.writeln(head); // true
console.writeln(rest); // []
[head, ...rest] = [];
console.writeln(head); // undefined
console.writeln(rest); // undefined
 // [head, ...rest] = null;

let [[first, second], ...tail] = [[1,2],[3],4];
console.writeln(first); // 1
console.writeln(second); // 2
console.writeln(tail); // 3,4
