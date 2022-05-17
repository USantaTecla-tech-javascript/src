const { Console } = require("console-mpds");
const console = new Console();

let min = 0;
let max = 100;
console.writeln(`Piensa un número entero entre ${min} y ${max}`);

let half;
let response;
do {
  half = (max + min) / 2;
  half -= half % 1;
  let isValidResponse;
  do {
    response = console.readString(`¿Cómo es ${half}:? (mayor, menor, igual)`);
    isValidResponse = response === "mayor" || response === "menor" || response === "igual";
    if (!isValidResponse) {
      console.writeln("¡¡Error!! respuesta inválida.");
    }
  } while (!isValidResponse);

  if (response === "menor") {
    min = half + 1;    
  } else if (response === "mayor") {
    max = half - 1;
  }
} while (response !== "igual" );