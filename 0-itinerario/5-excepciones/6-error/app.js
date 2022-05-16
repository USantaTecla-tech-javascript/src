console.log(`Sentencia previa`);
try {
    if (Math.random() < 0.5) {
        throw new Error("descripcion");
    }
    console.log("Sentencia ejecutada?");
} catch (exception) {
    console.log("Acciones catch: " + exception.name + ": " + exception.message);
}
console.log(`Sentencia posterior`);
