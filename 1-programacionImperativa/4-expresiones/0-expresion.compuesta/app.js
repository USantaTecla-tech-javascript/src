const { Console } = require("./console");

const console = new Console();
console.writeln((04 >>> 1, 4 % 5, 5 >= 5, false || true)); //true
console.writeln(04 >>> 1, 4 % 5, 5 >= 5, false || true); //2 4 true true

/* efectos laterales */
let x = 0;
let y = 0;
console.writeln((x++, y++)); //1 1
console.writeln(x++, y++); //2
console.writeln(x); //2
console.writeln(y); //2
