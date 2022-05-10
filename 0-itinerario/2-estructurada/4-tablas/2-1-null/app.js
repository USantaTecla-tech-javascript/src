const { Console } = require("./console");

const console = new Console();
let primitive1 = 1;
let primitive2 = primitive1;
console.writeln(primitive1); // 1
console.writeln(primitive2); // 1
primitive2 = 2;
console.writeln(primitive1); // 1
console.writeln(primitive2); // 2
primitive1 = 555;

let array1 = [1, 2, 3];
console.writeln(array1); // 1,2,3
let array2 = array1;
console.writeln(array2); // 1,2,3
array1[1] = 666;
console.writeln(array1); // 1,666,3
console.writeln(array2); // 1,666,3
console.writeln(array1 === array2); // true
array1 = [1, 666, 3];
console.writeln(array1); // 1,666,3
console.writeln(array2); // 1,666,3
console.writeln(array1 == array2); // false
array2[1] = 0;
console.writeln(array1); // 1,666,3
console.writeln(array2); // 1,0,3

array1 = null;
console.writeln(array1); // 
console.writeln(array2); // 1,0,3
array1 = [];
for(let i=0; i<array2.length; i++){
  array1[i] = array2[i];
}
console.writeln(array1); // 1,0,3
console.writeln(array2); // 1,0,3
console.writeln(array1 == array2); // false
array2 = null;
console.writeln(array1); // 1,0,3
console.writeln(array2); // 


