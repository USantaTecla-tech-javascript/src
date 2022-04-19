const { Console } = require("./console");

const console = new Console();
principal(); // última definición
auxiliar(); // última definición

function principal() {
    auxiliar();
}

function auxiliar() {
    console.writeln("primera definición");
}

function auxiliar() {
    console.writeln("última definición");
}
