const { Console } = require("./console");

const console = new Console();
let array = [];
array.push("escondido");
array.push("otro");
array.push(false);
console.writeln(array);
console.writeln(array.pop());
console.writeln(array.pop());
console.writeln(array.pop());
console.writeln(array);
            
/* métodos indexOf, splice, ... */
array = [1,2,3,4,5,6,7,8,9,10];
console.writeln(array.indexOf(7));
console.writeln(array.splice(7,2));
console.writeln(array);

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

