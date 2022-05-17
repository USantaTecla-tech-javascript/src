const { Console } = require("console-mpds");
const console = new Console();

const EXIT_NUMBER = 0;

let number;
let lastnumber;
let isOrdered = true;
do {
  lastnumber = number;
  number = console.readNumber("Ingresa un número: ");
  if (number !== EXIT_NUMBER && lastnumber !== undefined) {

    isOrdered &&= lastnumber < number;
  }
} while (number !== EXIT_NUMBER);

console.writeln(`La serie ${isOrdered ? "sí" : "no"} está ordenada`);
