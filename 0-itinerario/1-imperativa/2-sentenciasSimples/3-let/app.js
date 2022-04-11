const { Console } = require("./console");

const console = new Console();
let identifier = 0;
console.writeln(`.${identifier}.`); // .0.

let identifierWithoutInitialization;
console.writeln( `.${identifierWithoutInitialization}.`); // .undefined.

//console.writeln( `.${whithoutDeclaration}.`); // .undefined.
  
