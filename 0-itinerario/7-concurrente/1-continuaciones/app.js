const { Console } = require("./console");

const console = new Console();

function main(millis){
  setTimeout(() => {
    console.writeln(`Estuve haciendo "nada" durante ${millis} segundos`);
  }, millis);
}

main(3000);
console.writeln(`Acción posterior?!?`);
