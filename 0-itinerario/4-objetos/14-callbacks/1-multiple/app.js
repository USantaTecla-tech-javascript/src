const { Console } = require("./console");

const console = new Console();
const task1 = function () {
  let result = 0;
  for (let i = 0; i < 500000000; i++) {
    result += (Math.random()*10).toFixed(0);
  }
  if (result % 3 === 0){
    return result;
  } else {
    return "uf! Múltiplo de 3 ... buah";
  }
}
const task2 = function(value){
  if (typeof value === `string`){
    return `Imposible`;
  } else {
    let result = 0;
    for(let i = 0; i< value; i++){
      result += i;
    }
    return result;
  }
}
console.writeln(task2(task1()));
console.writeln(`Yo soy síncrono!!!`)
