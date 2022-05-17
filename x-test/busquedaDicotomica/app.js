const { Console } = require("console-mpds");
const console = new Console();

let minNumber = 0;
let maxNumber = 1000000;
let userNumber;
let response;
do {
  userNumber = ((minNumber + maxNumber) - ((minNumber + maxNumber) % 2)) / 2;
  do {
    response = console.readString(`El número que has pensado es mayor (+), igual (*) o menor (-) que ${userNumber}? `);
  } while (response != `+` && response != `-` && response != `*`);
  switch (response) {
    case `+`:
      minNumber = userNumber + 1;
      break;
    case `-`:
      maxNumber = userNumber - 1;
      break;
  }
} while (response != `*`);
console.writeln(`Tú número es ${userNumber} !!!`);