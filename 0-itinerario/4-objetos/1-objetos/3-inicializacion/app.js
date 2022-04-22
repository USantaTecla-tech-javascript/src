const { Console } = require("./console");

const console = new Console();
let object = {
    a : 666*7,
    b : `valor`,
    method : function(){
        console.writeln(`método`);
    }
}
console.writeln(object); // [object Object]
console.writeln(typeof object); // object
for(let property in object){
    console.writeln(object[property]); // 4662 / valor / function () ...
    console.writeln(typeof object[property]); // number / string / function
}

console.writeln(object.method()); // método
console.writeln(typeof object.method()); // método\nundefined

let {a, b} = object;
console.writeln(`${a} - ${b}`); // 4662 - valor
({a, b} = { b : 666, a : "oh"});
console.writeln(`${a} - ${b}`); // oh - 666

function f({a, b}){
    console.writeln(`${a} - ${b}`);
}

f(object); // 4662 - valor
f({a:-1, b:true}); // -1 - true
f({a:"que"}); // que - undefined

