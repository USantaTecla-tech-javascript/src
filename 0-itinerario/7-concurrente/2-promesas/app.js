const { Console } = require("./console");

const console = new Console();

function sleep(millis) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), millis);
  });
}

function main(millis) {
  sleep(millis)
    .then(() => console.writeln(`Estuve haciendo "nada" ${millis} segundos`));
  sleep(millis)
    .then(() => console.writeln(`XXXXX`));

}

main(3000);
console.writeln(`Acción posterior?!?`);