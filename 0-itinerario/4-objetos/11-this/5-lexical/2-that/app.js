const { Console } = require("./console");

const console = new Console();

function Clazz() {
  this.attribute = `lo que sea`;
  this.set = function(object){
    let that = this;
    object.method = function(){
      console.writeln(`this.attribute: ${that.attribute}`);
    }
  }
}

let setterObject = new Clazz();
let settedObject = {};
setterObject.set(settedObject);
settedObject.method(); // this.attribute: lo que sea
settedObject.attribute = `nada`;
settedObject.method(); // this.attribute: lo que sea

