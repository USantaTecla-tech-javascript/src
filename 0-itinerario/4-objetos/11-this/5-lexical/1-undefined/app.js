const { Console } = require("./console");

const console = new Console();

function Clazz() {
  this.attribute = `lo que sea`;
  this.set = function(object){
    object.method = function(){
      console.writeln(`this.attribute: ${this.attribute}`);
    }
  }
}

let setterObject = new Clazz();
let settedObject = {};
setterObject.set(settedObject);
settedObject.method(); // this.attribute: undefined
settedObject.attribute = `nada`;
settedObject.method(); // this.attribute: nada

