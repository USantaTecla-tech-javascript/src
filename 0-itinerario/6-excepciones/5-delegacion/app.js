console.log(`Sentencia previa externa`);
try {
    console.log(`Sentencia previa`);
    try {
        if (Math.random() < 0.5) {
            throw "Error";
        }
        console.log("Sentencia ejecutada?");
    } catch (exception) {
        console.log("Acciones catch: " + exception);
        throw `re-${exception}`;
    }
    console.log(`Sentencia posterior`);
} catch (exception) {
    console.log("Acciones catch externa: " + exception);
}
console.log(`Sentencia posterior externa`);