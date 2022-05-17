const { Console } = require("console-mpds");
const console = new Console();

const MAXINTERVALDEFAULT = 1000000;
let isFound = false;
let counterAttemps = 0;

let maxOfIntervalSearched = 1000000;
let minOfIntervalSearched = 0;
let middleInterval = maxOfIntervalSearched / 2;
do {
  let userAnswer = console.readString(`¿Es menor, igual o mayor que ${middleInterval}?:`);
  switch (userAnswer) {
    case "menor":
      maxOfIntervalSearched = middleInterval - 1;
      break;
    case "mayor":
      minOfIntervalSearched = middleInterval + 1;
      break;
    case "igual":
      isFound = true;
      break;
    default:
      console.writeln(`Escribe una respuesta de las posibles (menor/mayor/igual)`);
  }
  middleInterval = ((maxOfIntervalSearched + minOfIntervalSearched) - (maxOfIntervalSearched + minOfIntervalSearched) % 2) / 2;
  counterAttemps++;
} while (!isFound);

console.writeln(`He adivinado tu número ${maxOfIntervalSearched} en ${counterAttemps} intentos`);