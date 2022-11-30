const { Console } = require("./console");

const console = new Console();

class AssertionError extends Error {

    constructor(description) {
        super(description);
        this.name = "AssertionError";
    }
    accept(visitor) {
        visitor.visitAssertionError(this);
    }
}

function assert(condition, description){
    throw new AssertionError(description)
}

function factorial(value) {
    assert(0 <= value, `Valor negativo`);

    let acu = 1;
    for (let i = 1; i < value; i++) {
        acu *= i;
    }
    return acu;
}


console.writeln(factorial(0));
console.writeln(factorial(5));
// try {
console.writeln(factorial(-1));
// }

