const { Console } = require("./console");

const console = new Console();
let array = [1,2,3,4,5];
console.writeln(`${array} con ${array.length} items`); // 1,2,3,4,5 con 5 items 
array[0] = 0;
console.writeln(`${array} con ${array.length} items`); // 0,2,3,4,5 con 5 items
array = [`a`, `b`, `c`];
console.writeln(`${array} con ${array.length} items`); // a,b,c con 3 items
array[0] = `_`;
console.writeln(`${array} con ${array.length} items`); // _,b,c con 3 items
array = [];
console.writeln(`${array} con ${array.length} items`); //  con 0 items

let bidimensional = [
  [1,2,3],
  [],
  [true, false]
];
bidimensional[0] = bidimensional[1];
bidimensional[1] = bidimensional[2];
bidimensional[2] = [3,2,1];
console.writeln(`${bidimensional} con ${bidimensional.length} items`); // ,true,false,3,2,1 con 3 items

