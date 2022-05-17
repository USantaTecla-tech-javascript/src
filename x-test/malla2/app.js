const { Console } = require("console-mpds");
const console = new Console();

const SQUARE_LENGTH = 5;
const SQUARE_BORDER = SQUARE_LENGTH - 1;
const BORDER_CHAR = "*";

const rows = console.readNumber("Ingresa el número de filas: ");
const columns = console.readNumber("Ingresa el número de columnas: ");

const tableWidth = columns * SQUARE_LENGTH - (columns - 1);
const tableHeight = rows * SQUARE_LENGTH - (rows - 1);

let table = "";
for (let i = 0; i < tableHeight; i++) {
  for (let j = 0; j < tableWidth; j++) {
    if (
      i % SQUARE_BORDER === 0 || 
      j % SQUARE_BORDER === 0
    ) {
      table += BORDER_CHAR;
    } else {
      table += " ";
    }
  }
  table += "\n";
}
console.writeln(table);