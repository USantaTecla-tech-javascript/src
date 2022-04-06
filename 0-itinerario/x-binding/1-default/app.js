const { Console } = require("./console");

const console = new Console();
function zunction(parameter){
    console.writeln(`parameter: ${parameter}`);
    // console.writeln(this); !!!ERROR
}

zunction(`lo que sea`);
