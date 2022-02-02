const { Console } = require("./console");

const console = new Console();
let array = [];
array.push("escondido");
array.push("otro");
array.push(false);
console.writeln(array);
console.writeln(array.pop());
console.writeln(array.pop());
console.writeln(array.pop());
console.writeln(array);
            
/* métodos indexOf, splice, ... */
array = [1,2,3,4,5,6,7,8,9,10];
console.writeln(array.indexOf(7));
console.writeln(array.splice(7,2));
console.writeln(array);
