const { Console } = require("./console");

const console = new Console();

function sleep(millis){
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), millis);
  });
}

async function main(millis){
  await sleep(millis);
  console.writeln(`Estuve haciendo "nada" ${millis} segundos`);
}
  
main(3000);
console.writeln(`Acción posterior?!?`);
