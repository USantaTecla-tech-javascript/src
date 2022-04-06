const { Console } = require("./console");

const console = new Console();
class Clazz{

  constructor(parameter){
    this.attribute = parameter;
  }
  
  method() {
      console.writeln(`this.attribute: ${this.attribute}`);
  }

}

new Clazz(`lo que sea`).method();
