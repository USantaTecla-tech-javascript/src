const { Console } = require("./console");

const console = new Console();

function funcion() {
    console.writeln(`mensaje`);
}

console.writeln(funcion); // ...
console.writeln(typeof funcion); // function
console.writeln(funcion()); // mensaje
console.writeln(typeof funcion()); // string

auxiliar(); // segunda
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