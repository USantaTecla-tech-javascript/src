const { Console } = require("./console");

const console = new Console();
console.writeln((04 >>> 1, 4 % 5, 5 >= 5, false || true)); //true
console.writeln(04 >>> 1, 4 % 5, 5 >= 5, false || true); //2 4 true true

/* efectos laterales */
let x = 0;
let y = 0;
console.writeln((x++, y++)); // 0
console.writeln("la la la");
console.writeln(x++, y++, "gggg"); //2
console.writeln("la la la");
console.writeln(x); //2
console.writeln("la la la");
console.writeln(y); //2
console.writeln("la la la");
// LA RESPUESTA ES DISTINTA 
// true
// 0
// 2
// 2
