const { Console } = require("./console");

const console = new Console();
function Clazz(parameter){
  this.attribute = parameter;
  
  this.method = function() {
      console.writeln(`this.attribute: ${this.attribute}`);
  }

}

let object = {
  attribute : `lo que sea`
};

bindedMethod = new Clazz().method.bind(object);
bindedMethod(`otra cosa`);
