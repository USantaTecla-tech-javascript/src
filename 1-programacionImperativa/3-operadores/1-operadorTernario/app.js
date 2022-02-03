const { Console } = require("./console");

const console = new Console();
console.writeln(true ? `izquierda y/o entonces ...` : `derecha y/o si no ...`); // `izquierda y/o entonces ...`
console.writeln(false ? -1 : +1); // 1