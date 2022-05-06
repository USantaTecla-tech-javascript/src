const { Console } = require("./console");

const console = new Console();
let array1 = [1, 2, 3];
console.writeln(array1); // 1,2,3
let array2 = array1;
array1[1] = 666;
console.writeln(array1); // 1,666,3
console.writeln(array2); // 1,666,3
console.writeln(array1 == array2); // true
array1 = [1, 666, 3];
console.writeln(array1); // 1,666,3
console.writeln(array2); // 1,666,3
console.writeln(array1 == array2); // false
array2[1] = 0;
console.writeln(array1); // 1,0,3
console.writeln(array2); // 1,666,3
