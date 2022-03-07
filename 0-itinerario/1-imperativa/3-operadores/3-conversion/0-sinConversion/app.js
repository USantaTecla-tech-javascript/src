const { Console } = require("./console");

const console = new Console();
/* operador con conversión de tipos */
console.writeln(5 == "5"); // true
console.writeln(5 != "5"); // false
    
/* operador sin conversión de tipos */
console.writeln(5 === "5"); // false
console.writeln(5 !== "5"); // true   
