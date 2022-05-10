const { Console } = require("./console");

const console = new Console();
const task1 = function () {
  let result = 0;
  for (let i = 0; i < 500; i++) {
    result += Number.parseInt((Math.random() * 10).toFixed(0));
    console.write(`.`);
  }
  console.writeln();
  if (result % 3 !== 0) {
    return result;
  }
  return `Error!!! Múltiplo de 3: ${result}/3 = ${result / 3}`;
}
const task2 = function (task) {
  const value = task();
  if (typeof value === `string`) {
    return `${value}. Entrada no válida`;
  }
  let result = 0;
  for (let i = 0; i < value; i++) {
    result += i;
    console.write(`.`);
  }
  console.writeln();
  if (result % 7 !== 0) {
    return result;
  } 
  return `Error!!! Múltiplo de 7: ${result}/7 = ${result / 7}`;
}
console.writeln(task2(task1));
console.writeln(`Yo soy síncrono!!!`)
