const { Console } = require("./console");

const console = new Console();
const promesa1 = new Promise((resolve, reject) => {
  let result = 0;
  for (let i = 0; i < 500000000; i++) {
    result += Math.random() * 10;
  }
  if (result % 3 === 0) {
    resolve(result);
  } else {
    reject("uf! Múltiplo de 3 ... buah");
  }
});

const result1Ok = (value) => {
  console.writeln(`Resultado: ${value}`);
};
const result1Error = (value) => {
  console.writeln(`Multiplo de 3: ${value}`);
};

promesa1.then(result1Ok, result1Error);

const task = () => {
  promesa1
    .then(result1Ok)
    .catch(result1Error);
};
task();
console.writeln("Yo soy sincrono!!!")
