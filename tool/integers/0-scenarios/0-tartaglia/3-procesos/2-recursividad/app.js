const { Console } = require("./console");

const console = new Console();
const height = console.readNumber(`Altura del Triangulo de Tartaglia: `);
console.writeln(rowsToText(getTartagliaTriangle(height)));

function getTartagliaTriangle(height) {
  if (typeof height !== `number` || isNaN(height) || height < 1)
    return null;
  if (height === 1) {
    return [[1]];
  }
  let rows = getTartagliaTriangle(height - 1);
  let lastRow = rows.at(-1);
  let newRow = [1];
  for (let i = 0; i < lastRow.length - 1; i++) {
    newRow[i + 1] = lastRow[i] + lastRow[i + 1];
  }
  return [...rows, [...newRow, 1]];
}

function rowsToText(rows) {
  let msg = ``;
  for (let row of rows) {
    for (let value of row) {
      msg += `${value} - `;
    }
    msg += `\n`;
  }
  return msg;
}
