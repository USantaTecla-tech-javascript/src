const { Console } = require("./console");

const console = new Console();
let array = [];
for(let item of array){
    console.write(`${item}, `); // 
}
console.writeln(` with length: ${array.length}`); // with length: 0

array[0] = 10;
for(let item of array){
    console.write(`${item}, `); // 10,  ...
}
console.writeln(` with length: ${array.length}`); // ... with length: 1

array[1] = 11;
for(let item of array){
    console.write(`${item}, `); // 10, 11, ... 
}
console.writeln(` with length: ${array.length}`); // ... with length: 2

array[9] = 99;
for(let item of array){
    console.write(`${item}, `); // 10, 11, undefined, undefined, undefined, undefined, undefined, undefined, undefined, 99, ...
}
console.writeln(` with length: ${array.length}`); // ... with length: 10

array[-1] = -10;
for(let item of array){
    console.write(`${item}, `); // 10, 11, undefined, undefined, undefined, undefined, undefined, undefined, undefined, 99, ...
}
console.writeln(` with length: ${array.length}`); // ... with length: 10
console.writeln(array[-1]); // -10

