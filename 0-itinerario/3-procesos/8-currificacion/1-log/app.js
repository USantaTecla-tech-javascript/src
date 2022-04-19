const { Console } = require("./console");

const console = new Console();
function log(date, importance, message) {
    console.writeln(`[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`);
}

log(new Date(), "DEBUG", "parametro no válido");

const logCurry = date => importance => message => { console.writeln(`[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`); }
let logWithDate = logCurry(new Date());
let logWithDateDebug = logWithDate("DEBUG");
logWithDateDebug("parámetro no válido");
logWithDateDebug("formato incorrecto");

let logWithDateWarning = logWithDate("WARNING");
logWithDateWarning("valor undefined");
logWithDateWarning("cuidadito");
