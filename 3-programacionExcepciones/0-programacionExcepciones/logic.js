/* captura */
try {
    let error = 5/0;
    console.log("no ejecutada");
} catch(exception){
    console.log("excepción capturada");
} finally {
    console.log("finally");
}
            
/* captura y delegación */
try {
    try {
        let error = 5/0;
        console.log("no ejecutada");
    } catch(exception){
        console.log("excepción capturada");
        throw excpetion;
    }
} catch(exception){
    console.log("excepcion delegada");
    console.log(exception);
}
            
/* elevación */
try {
    throw "exception elevada";
    console.log("no ejecutada");
} catch (expection){
    console.log(expection);
}
