const { Console } = require("./console");

const console = new Console();
// funcion constructora Function
let f = new Function("a", "b", "return a * b");         
console.writeln(f(2,4)); 
console.writeln(new Function("a", "b", "return a * b")(4,5)); 
