const { Console } = require("./console");

const console = new Console();
const getTask1 = function () {
  let result = 0;
  for (let i = 0; i < 500; i++) {
    result += Number.parseInt((Math.random()*10).toFixed(0));
    console.write(`.`);
  }
  console.writeln();
  if (result % 3 !== 0){
    return result;
  } else {
    return `Error!!! Múltiplo de 3: ${result}/3 = ${result/3}`;
  }
};

console.writeln(getTask1());
console.writeln(`Yo soy síncrono!!!`)
