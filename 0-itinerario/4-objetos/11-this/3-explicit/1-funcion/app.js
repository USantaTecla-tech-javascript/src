const { Console } = require("./console");

const console = new Console();

function zunction(value){
  console.write(`value: ${value}. `);
  console.writeln(`this.attribute: ${this.attribute}`);
}

let object1 = {
  attribute : `lo que sea`
};

zunction.call(object1, `algo`); // value: algo. this.attribute: lo que sea
zunction.apply(object1, [`algo`]); // value: algo. this.attribute: lo que sea
let bindedZunction = zunction.bind(object1);
bindedZunction(`algo`); // value: algo. this.attribute: lo que sea
// object1.bindedZunction(); ERROR

let object2 = {
  attribute : `nada`
};

zunction.call(object2, `algo`); // value: algo. this.attribute: nada
zunction.apply(object2, [`algo`]); // value: algo. this.attribute: nada
bindedZunction = zunction.bind(object2);
bindedZunction(`algo`); // value: algo. this.attribute: nada
// object2.bindedZunction(); ERROR