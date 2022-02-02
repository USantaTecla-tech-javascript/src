const { Console } = require("./console");

const console = new Console();
/* creación de objeto */ 
let x = new Object();
console.writeln(x);
console.writeln(typeof x);
for(campo in x){
    console.writeln(campo);
    console.writeln(typeof campo);
}

let x = {};
console.writeln(x);
console.writeln(typeof x);
for(campo in x){
    console.writeln(campo);
    console.writeln(typeof campo);
}
