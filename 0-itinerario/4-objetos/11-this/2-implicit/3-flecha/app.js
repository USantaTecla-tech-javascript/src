function Clazz(parameter){
  this.attribute = parameter;
  
  this.method = () => {
      console.log(`this.attribute: ${this.attribute}`);
  }

}

new Clazz(`lo que sea`).method();
