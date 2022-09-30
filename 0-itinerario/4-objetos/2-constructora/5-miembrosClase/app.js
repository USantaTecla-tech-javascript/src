const { Console } = require("./console");

const console = new Console();
function zunction() {
    console.writeln(zunction.variable);
    zunction.variable++;
}
zunction.variable = 0;
zunction();
zunction();
zunction();
console.writeln(zunction.variable);

let f1 = zunction;
let f2 = zunction;
let f3 = f1;
f2.variable = 666;
f1();
f2();
f3();
console.writeln(zunction.variable);
