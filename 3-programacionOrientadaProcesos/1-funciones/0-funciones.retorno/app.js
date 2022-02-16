const { Console } = require("./console");

const console = new Console();
sinRetorno(); // sin retorno. ...
console.writeln(sinRetorno() === undefined); // ... sin retorno. true
console.writeln(double(3)); // 6 
console.writeln(factorial(3)); // 6 
console.writeln(factorial(3)+double(3)); // 12
console.writeln(double(factorial(3))); // 12
console.writeln(factorial(double(3))); // 720
let x = 3;
console.writeln(x*factorial(x)); // 18 

function sinRetorno() {
    console.write(`sin retorno. `);
    return undefined;
}

function double(value) {
    return value * 2;
}

function factorial(value) {
    let result = 1;
    for (let i = 1; i <= value; i++) {
        result *= i;
    }
    return result;
}