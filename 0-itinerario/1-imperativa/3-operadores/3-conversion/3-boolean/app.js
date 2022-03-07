const { Console } = require("./console");

const console = new Console();
console.writeln(! -55.55); // false
console.writeln(! 0); //true
console.writeln(! NaN); //true
console.writeln(! ""); //true
console.writeln(! "cadena"); //false 
console.writeln(! undefined); //true  
