const { Console } = require("./console");

const console = new Console();

function zunction(){
  console.writeln(`this.attribute: ${this.attribute}`);
}

let object1 = {
  attribute : `lo que sea`
};

let bindedZunction = zunction.bind(object1);
bindedZunction(); // this.attribute: lo que sea
// object1.bindedZunction(); ERROR

let object2 = {
  attribute : `nada`
};

bindedZunction = zunction.bind(object2);
bindedZunction(); // this.attribute: nada
// object2.bindedZunction(); ERROR