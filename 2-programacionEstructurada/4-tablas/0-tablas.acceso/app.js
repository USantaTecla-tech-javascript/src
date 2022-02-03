const { Console } = require("./console");

const console = new Console();
let array = [1,2,3,4,5];
console.writeln(typeof array);
console.writeln(array[0]);
console.writeln(typeof array[0]);
console.writeln(array[4]);
console.writeln(typeof array[4]);
console.writeln(array[5]);
console.writeln(typeof array[5]);
for(let i = 0; i < array.length; i++){
    console.writeln(array[i]);
}
for(let item of array){
    console.writeln(item);
}

for(let i = 0; i < [1,2,3].length; i++){
    console.writeln([1,2,3][i]);
}
for(let item of [1,2,3]){
    console.writeln(item);
}


