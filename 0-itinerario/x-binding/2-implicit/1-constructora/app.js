const { Console } = require("./console");

const console = new Console();
function Clazz(parameter){
  this.attribute = parameter;
  
  this.method = function() {
      console.writeln(`this.attribute: ${this.attribute}`);
  }

}

new Clazz(`lo que sea`).method();
