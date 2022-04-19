const { Console } = require("./console");

const console = new Console();
let global = 3;
let collision = 2;
console.writeln(`global: ${global}`); // global: 3
console.writeln(`collision: ${collision}`);// collision: 2
outer();
console.writeln(`global: ${global}`); // global: 4
console.writeln(`collision: ${collision}`); // collision: 2

function outer() {
    let local = 1;
    let collision = 0;
    global++;
    local++;
    collision++;
    console.writeln(`global: ${global}`); // global: 4
    console.writeln(`local: ${local}`); // local: 2
    console.writeln(`collision: ${collision}`); // collision: 1
}
