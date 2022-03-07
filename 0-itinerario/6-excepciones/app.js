const { Console } = require("./0-programacionExcepciones/console");

const console = new Console();
/* captura */
try {
    let error = 5/0;
    console.writeln("no ejecutada");
} catch(exception){
    console.writeln("excepción capturada");
} finally {
    console.writeln("finally");
}
            
/* captura y delegación */
try {
    try {
        let error = 5/0;
        console.writeln("no ejecutada");
    } catch(exception){
        console.writeln("excepción capturada");
        throw excpetion;
    }
} catch(exception){
    console.writeln("excepcion delegada");
    console.writeln(exception);
}
            
/* elevación */
try {
    throw "exception elevada";
    console.writeln("no ejecutada");
} catch (expection){
    console.writeln(expection);
}
