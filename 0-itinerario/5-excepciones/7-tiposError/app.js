class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = 'CustomError';
    }
}

console.log(`Sentencia previa`);
try {
    if (Math.random() < 0.5) {
        throw new RangeError("descripcion");
    } if (Math.random() < 0.5) {
        throw new CustomError("descripcion");
    }
    console.log("Sentencia ejecutada?");
} catch (exception) {
    if (exception instanceof RangeError) {
        console.log("Acciones catch: " + exception.name + ": " + exception.message);
    } else if (exception instanceof CustomError) {
        console.log("Acciones catch: " + exception.name + ": " + exception.message);
    }
}
console.log(`Sentencia posterior`);
