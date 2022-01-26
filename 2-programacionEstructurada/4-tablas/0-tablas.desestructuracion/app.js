const { Console } = require("./console");

const console = new Console();
let [head, ...rest] = [1,2,3,4,5];
console.writeln(head);
console.writeln(rest);

let array = ["a", "e", "i", "o", "u"];
[head, ...rest] = array;
console.writeln(head);
console.writeln(rest);
