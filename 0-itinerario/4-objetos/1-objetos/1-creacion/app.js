const { Console } = require("./console");

const console = new Console();
let object = {};
console.writeln(object); // [object Object]
console.writeln(typeof object); // object
for(let property in object){
    console.writeln(property); //
    console.writeln(typeof property); //
}

object = new Object();
console.writeln(object); // [object Object]
console.writeln(typeof object); // object
for(let property in object){
    console.writeln(property); //
    console.writeln(typeof property); //
}


