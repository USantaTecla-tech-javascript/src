function Clazz(parameter){
  this.attribute = parameter;
  
  this.method = function() {
      console.log(`this.attribute: ${this.attribute}`);
  }

}

new Clazz(`lo que sea`).method();
let o = new Clazz("ñlkjasd");
o.method();
