const { Console } = require("./console");

const console = new Console();
principal();

function principal(){
    auxliar();
}

function auxiliar(){
    console.writeln("primera");
}

function auxiliar(){
    console.writeln("segunda");
}
