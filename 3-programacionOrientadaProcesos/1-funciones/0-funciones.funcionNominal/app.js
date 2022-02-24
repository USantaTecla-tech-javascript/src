const { Console } = require("./console");

const console = new Console();

function funcion() {
    console.writeln(`mensaje`);
}

console.writeln(funcion); // function ...
console.writeln(typeof funcion); // function
console.writeln(funcion()); // mensaje
console.writeln(typeof funcion()); // undefined

auxiliar(); // primera
principal(); // segunda

function auxiliar(){
    console.writeln("primera");
}

function principal(){
    auxiliar();
}

function auxiliar(){
    console.writeln("segunda");
}