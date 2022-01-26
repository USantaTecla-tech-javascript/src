const { Console } = require("./console");

const console = new Console();
/* Clases predefinidas */
console.writeln(true);
console.writeln(true.toString()==="true");
console.writeln(666);
console.writeln(Number.isNaN(666));
console.writeln(7.666.toFixed(2));
console.writeln("hola");
console.writeln("hola".toUpperCase());
console.writeln(Math.PI);
console.writeln(Math.sqrt(7));
let regExp = /[ABC][0-9]:([a-zA-Z0-9]+.)+/i;
console.writeln(regExp.test("a4:IB234.AE755"));
console.writeln(regExp.test("a4:a."));
console.writeln(/[ABC][0-9]:([a-zA-Z0-9]+.)+/i.test("a4:a.b."));
console.writeln(new Date().getHours());
try {
    7.7.toPrecision(666);
}
catch(exception) {
    console.writeln(exception.name);
    console.writeln(exception.message);
    console.writeln(exception);
    console.writeln(typeof exception);
    console.writeln(exception instanceof Error);
}
