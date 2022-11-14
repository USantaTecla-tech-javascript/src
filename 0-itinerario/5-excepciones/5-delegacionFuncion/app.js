function outside() {
    console.log(`Sentencia previa externa`);
    try {
        inside();
    } catch (exception) {
        console.log("Acciones catch externa: " + exception);
    }
    console.log(`Sentencia posterior externa`);
}

function inside() {
    console.log(`Sentencia previa interna`);
    try {
        if (Math.random() < 0.5) {
            throw "Error interna";
        }
        console.log("Sentencia ejecutada? interna");
    } catch (exception) {
        console.log("Acciones catch interna: " + exception);
        // no gestiona nada
        if (Math.random() < 0.5) {
            throw exception;
        }
        // gestiona parcialmente
        if (Math.random() < 0.5) {
            throw `re-${exception}`; 
        }
        // gestion completa
    }
    console.log(`Sentencia posterior interna`);
}

outside();
console.log("---");
//inside();
