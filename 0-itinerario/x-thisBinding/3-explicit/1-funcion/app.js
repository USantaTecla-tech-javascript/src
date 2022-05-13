function zunction(){
  console.log(`this.attribute: ${this.attribute}`);
}

let object1 = {
  attribute : `lo que sea`
};

let bindedZunction = zunction.bind(object1);
bindedZunction();

let object2 = {
  attribute : 666
};

bindedZunction = zunction.bind(object2);
bindedZunction();
