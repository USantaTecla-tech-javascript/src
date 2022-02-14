const { Console } = require("./console");

const console = new Console();
console.writeln(true ? `si / entonces / segundo / izquierda` : `no / en caso contrario / tercero / derecha `); // si / entonces / segundo / izquierda
console.writeln(false ? -1 : +1); // 1