const { Console } = require("./console");

const console = new Console();
class Clazz {

  constructor(parameter){
    this.attribute = parameter;
  }
  
  method() {
      console.writeln(`this.attribute: ${this.attribute}`);
  }

}

let object = {
  attribute : `lo que sea`
};

bindedMethod = new Clazz().method.bind(object);
bindedMethod(`otra cosa`);
