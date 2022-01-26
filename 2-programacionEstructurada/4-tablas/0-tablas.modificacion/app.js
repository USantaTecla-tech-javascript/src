const { Console } = require("./console");

const console = new Console();
let array = [1,2,3,4,5];
console.writeln(array);
console.writeln("length: " + array.length);
array[0] = 0;
console.writeln(array);
console.writeln("length: " + array.length);
array[4] = 6;
console.writeln(array);
console.writeln("length: " + array.length);
