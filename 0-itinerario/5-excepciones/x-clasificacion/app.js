const { Console } = require("./console");

const console = new Console();

class CustomError extends Error {
    constructor(description) {
        super(description);
        this.name = 'CustomError';
    }
    accept(visitor) {
        visitor.visitCustomError(this);
    }
}
class MyRangeError extends RangeError {
    constructor(description) {
        super(description);
        this.name = "MyRangeError";
    }
    accept(visitor) {
        visitor.visitMyRangeError(this);
    }

}

class ErrorVisitor {
    visitCustomError(customError) {
    }
    visitMyRangeError(myRangeError) {
    }
    visitAssertionError(assertionError) {
    }
}

class ErrorThrower extends ErrorVisitor {

    constructor() {
        super();
    }

    interact() {
        console.writeln(`--- Sentencia previa`);
        try {
            if (Math.random() < 0.5) {
                throw new MyRangeError("Error por fuera de rango la mitad de las veces");
            }
            if (Math.random() < 0.5) {
                throw new CustomError("Error que se provoca 1/4 de las veces");
            }
            if (Math.random() < 0.5) {
                throw "descuidado";
            }
            console.writeln("--- Sentencia ejecutada?");

        } catch (exception) {
            if (exception !== "descuidado") {
                exception.accept(this);
            }
            else {
                console.writeln("Acciones catch: descuidado");
            }
        }
        console.writeln(`Sentencia posterior`);
    }

    visitCustomError(customError) {
        console.writeln("Acciones catch: " + customError.name + ": " + customError.message);
    }

    visitMyRangeError(myRangeError) {
        console.writeln("Acciones catch: " + myRangeError.name + ": " + myRangeError.message);
    }

    visitAssertionError(assertionError) {
        console.writeln("Acciones catch: " + assertionError.name + ": " + assertionError.message); //No estaría cumpliendo con la teoría de Assertion.
    }

}

const errorThrower = new ErrorThrower();

for (let i = 0; i < 5; i++) {
    errorThrower.interact();
}
