const { Console } = require("./console");

const console = new Console();
const CONSTANT = "constante";
console.writeln(`Esto es ${CONSTANT}!!!`); // Esto es constante
// CONSTANT = "mutacion" // Error!!!
