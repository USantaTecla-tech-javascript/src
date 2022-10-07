const { Console } = require("./console");

const console = new Console();

function highOrderFunction(zunction){
  for(let value of [1,2,3]){
    zunction(value);
  }
}

class Clazz {

  #attribute;

  constructor(value){
    this.#attribute = value;
  }

  method(value){
    console.writeln(this.#attribute);
    console.writeln(value);
  }

  goodMethod() {
    highOrderFunction(this.method.bind(this));
  }

  badMethod(){
    // highOrderFunction(this.method) // ERROR undefined
    // highOrderFunction(X.method) // ERROR undefined
  }

}

let object = new Clazz(`lo que sea`);
object.goodMethod();
object.badMethod(); 





