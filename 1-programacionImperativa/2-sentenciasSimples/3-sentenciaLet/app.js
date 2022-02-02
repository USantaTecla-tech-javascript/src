const { Console } = require("./console");

const console = new Console();
let identificador = 0;
console.writeln(`.${identificador}.`); // .0.

let identificadorSinInicializacion;
console.writeln(`.${identificadorSinInicializacion}.`); // .undefined.

  //console.writeln( `.${ningunIdentificador}.`); // .undefined.


