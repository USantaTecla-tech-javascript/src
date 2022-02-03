const { Console } = require("./console");

const console = new Console();
let array = [];
for(let item of array){
    console.writeln(item);
}
console.writeln("length: " + array.length);

array[0] = 10;
for(let item of array){
    console.writeln(item);
}
console.writeln("length: " + array.length);

array[1] = 11;
for(let item of array){
    console.writeln(item);
}
console.writeln("length: " + array.length);

array[99] = 990;
for(let item of array){
    console.writeln(item);
}
console.writeln("length: " + array.length);

array[-1] = -10;
for(let item of array){
    console.writeln(item);
}
console.writeln(array[-1]); 
console.writeln("length: " + array.length);

array["zzz"] = "zzz";
for(let item of array){
    console.writeln(item);
}
console.writeln(array[-1]);
console.writeln(array["zzz"]);
console.writeln("length: " + array.length);
