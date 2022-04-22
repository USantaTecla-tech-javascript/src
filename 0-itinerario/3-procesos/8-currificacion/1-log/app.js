const { Console } = require("./console");

const console = new Console();
function log(date, importance, message) {
    console.writeln(`[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`);
}
log(new Date(), "DEBUG", "parametro no válido");
log(new Date(), "DEBUG", "formato incorrecto");
log(new Date(), "WARNING", "valor undefined");
log(new Date(), "WARNING", "cuidadito");
console.writeln();

const logCurry = date => importance => message => 
    console.writeln(`[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`);
const logWithDate = logCurry(new Date());
log = logWithDate("DEBUG");
log("parámetro no válido");
log("formato incorrecto");
log = logWithDate("WARNING");
log("valor undefined");
log("cuidadito");
console.writeln();
