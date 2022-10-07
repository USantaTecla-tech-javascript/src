const { Console } = require("./console");

const console = new Console();

function Clazz() {
  this.attribute = `lo que sea`;
  this.set = function(object){
    object.method = () => {
      console.writeln(`this.attribute: ${this.attribute}`);
    }
  }
}

let setterObject = new Clazz();
let settedObject = {};
setterObject.set(settedObject);
settedObject.method(); // this.attribute: lo que sea
settedObject.attribute = `nada`;
settedObject.method(); // this.attribute: lo que sea

