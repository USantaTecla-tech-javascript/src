console.log(`Sentencia previa`);
try {
    if (Math.random() < 0.5) {
        throw "Error";
    }
    console.log("Sentencia ejecutada?");
} finally {
    console.log("Acciones finally");
}
console.log(`Sentencia posterior`);