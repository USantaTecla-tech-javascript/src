class Clazz{

  constructor(parameter){
    this.attribute = parameter;
  }
  
  method() {
      console.log(`this.attribute: ${this.attribute}`);
  }

}

new Clazz(`lo que sea`).method();
let o = new Clazz("ñlkjasd");
o.method();
