const { Console } = require("./console");

const console = new Console();
let x = [];
x[3.3] = 2;
console.writeln(x[3.3]);

console.writeln(x instanceof Array);

let muchosIndefinidos = new Array(666);
for(let item of muchosIndefinidos){
    console.writeln(item);
}

/* eliminar elementos del array asociativo */
delete array[1];
for(let item of array){
    console.writeln(item);
}
for(let key in array){
    console.writeln(array[key]);
}
console.writeln("length: " + array.length);

delete array[99];
for(let item of array){
    console.writeln(item);
}
for(let key in array){
    console.writeln(array[key]);
}
console.writeln("length: " + array.length);

