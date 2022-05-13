console.log(`Sentencia previa`);
try {
    if (Math.random() < 0.5) {
        throw "Error";
    }
    console.log("Sentencia ejecutada?");
} catch (exception) {
    console.log("Acciones catch: " + exception);
} finally {
    console.log("Acciones finally");
}
console.log(`Sentencia posterior`);
