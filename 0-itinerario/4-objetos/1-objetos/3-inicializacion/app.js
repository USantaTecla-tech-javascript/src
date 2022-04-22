const { Console } = require("./console");

const console = new Console();
let object = {
    a : 666*7,
    b : `cadena`,
}
console.writeln(object); // [object Object]
console.writeln(typeof object); // object
for(let property in object){
    console.writeln(property); // a / b
    console.writeln(object[property]); // 4662 / cadena 
    console.writeln(typeof object[property]); // number / string 
}

let {a, b} = object;
console.writeln(`${a} - ${b}`); // 4662 - cadena
({a, b} = { b : 666, a : "oh"});
console.writeln(`${a} - ${b}`); // oh - 666

function f({b, a}){
    console.writeln(`${a} - ${b}`);
}
f(object); // cadena - 4662 
f({a:-1, b:true}); // -1 - true
f({a:"aceptado",c:"ingnorado"}); // que - undefined

