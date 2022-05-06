const { Console } = require("./console");

const console = new Console();
const getTask1 = function () {
  let result = 0;
  for (let i = 0; i < 5; i++) {
    result += Number.parseInt((Math.random()*10).toFixed(0));
    console.writeln(`...`);
  }
  console.writeln(`${result} !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!`);
  if (result % 3 === 0){
    return result;
  } else {
    return `uf! Múltiplo de 3 ... buah: ${result}/3 = ${result/3}`;
  }
};

console.writeln(getTask1());
console.writeln(`Yo soy síncrono!!!`)
