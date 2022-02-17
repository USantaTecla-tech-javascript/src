const { Console } = require("./console");

const console = new Console();
let array = [1,2,3,4,5];
console.writeln(typeof array); // object
console.writeln(array[0]); // 1
console.writeln(typeof array[0]); // number
console.writeln(array[4]); // 5
console.writeln(typeof array[4]); // number
console.writeln(array[array.length]); // 
console.writeln(typeof array[array.length]); // undefined

console.writeln([[`a`, `b`, `c`],[1,2],[true]][1][1]); // 2
console.writeln(typeof [[`a`, `b`, `c`],[1,2],[true]][1][1]); // number
console.writeln([[`a`, `b`, `c`],[1,2],[true]][1]); // 1,2
console.writeln(typeof [[`a`, `b`, `c`],[1,2],[true]][1]); // object
console.writeln([[`a`, `b`, `c`],[1,2],[true]]); // a,b,c,1,2,true
console.writeln(typeof [[`a`, `b`, `c`],[1,2],[true]]); // object

for(let i = 0; i < [1,2,3].length; i++){
    console.write(`${[1,2,3][i]}, `); // 1,2,3
}
console.writeln();
for(let item of [1,2,3]){
    console.write(`${item}, `); // 1,2,3
}
console.writeln();


