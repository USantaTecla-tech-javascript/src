console.log(`Sentencia previa`);
try {
    if (Math.random() < 0.5) {
        let recover = function(){
            console.log(`Recuperando...`);
        }
        throw recover;
    }
    console.log("Sentencia ejecutada?");
} catch (exception) {
    console.log("Acciones catch: " + exception);
    exception();
} finally {
    console.log("Acciones finally");
}
console.log(`Sentencia posterior`);
