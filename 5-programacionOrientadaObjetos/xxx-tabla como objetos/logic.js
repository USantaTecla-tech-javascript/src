
let x = [];
x[3.3] = 2;
console.log(x[3.3]);

console.log(x instanceof Array);

let muchosIndefinidos = new Array(666);
for(let item of muchosIndefinidos){
    console.log(item);
}

/* eliminar elementos del array asociativo */
delete array[1];
for(let item of array){
    console.log(item);
}
for(let key in array){
    console.log(array[key]);
}
console.log("length: " + array.length);

delete array[99];
for(let item of array){
    console.log(item);
}
for(let key in array){
    console.log(array[key]);
}
console.log("length: " + array.length);

