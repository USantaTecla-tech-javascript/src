const { Console } = require("./console");

const console = new Console();
let object = {
    a: 666 * 7,
    b: `cadena`,
}
console.writeln(object); // [object Object]
console.writeln(typeof object); // object
for (let property in object) {
    console.writeln(property); // a / b
    console.writeln(object[property]); // 4662 / cadena 
    console.writeln(typeof object[property]); // number / string 
}

let { a, b, c } = object;
console.writeln(`${a} - ${b} - ${c}`); // 4662 - cadena

function f({ b, a }) {
    console.writeln(`${a} - ${b}`);
}
f(object); // cadena - 4662 
f({ a: -1, b: true }); // -1 - true
f({ a: "aceptado", c: "ignorado" }); // que - undefined

let array = [
    {
        x: -1,
        y: 1
    },
    {
        x: -2,
        y: 2
    }
];
for (let object of array) {
    console.writeln(object); // [object Object] / [object Object]
    for (let property in object) {
        console.writeln(`${property} : ${object[property]}`) // x : -1 / y : 1 // x : -2 / y : 2
    }
}
