const { Console } = require("./console");

const console = new Console();

let object = new function(value){
  this.attribute = value;
}(`lo que sea`);
console.writeln(`object.attribute: ${object.attribute}`); // object.attribute: lo que sea

function Clazz(value){
  this.attribute = value;
}
console.writeln(`object.attribute: ${new Clazz(`nada`).attribute}`); // object.attribute: nada
