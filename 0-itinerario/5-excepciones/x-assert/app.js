const { Console } = require("./console");

const console = new Console();

class AssertionError extends Error {

    constructor(description) {
        super(description);
        this.name = "AssertionError";
    }
}

function assert(value) {
    if (!value) {
        
        throw new AssertionError();
    }
}

function factorial(value) {
    assert(value >= 0);

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
