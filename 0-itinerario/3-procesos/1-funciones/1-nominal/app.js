const { Console } = require("./console");

const console = new Console();
function example() {
    const constant = `acción intermedia`;
    console.writeln(`primera acción`);
    console.writeln(constant);
    console.writeln(`segunda acción`);
}

example(); // primera acción\nacción intermedia\nsegunda acción
console.writeln(typeof example()); // primera acción\nacción intermedia\nsegunda acción\nundefined
console.writeln(example()); // primera acción\nacción intermedia\nsegunda acción\n
console.writeln(typeof example); // function
console.writeln(example); // function ...
