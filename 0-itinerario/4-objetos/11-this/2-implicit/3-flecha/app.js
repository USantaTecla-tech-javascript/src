const { Console } = require("./console");

const console = new Console();

function Clazz(parameter){
  this.attribute = parameter;
  
  this.method = () => {
      console.writeln(`this.attribute: ${this.attribute}`);
  }

}

let object = new Clazz("nada");
object.method(); // this.attribute: nada
new Clazz(`lo que sea`).method(); // this.attribute: lo que sea
