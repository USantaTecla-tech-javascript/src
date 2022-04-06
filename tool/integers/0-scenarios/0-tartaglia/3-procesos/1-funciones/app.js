const { Console } = require("./console");

const console = new Console();
const height = console.readNumber(`Altura del Triangulo de Tartaglia: `);
console.writeln(rowsToText(getTartagliaTriangle(height)));

function getTartagliaTriangle(height) {
  if (typeof height !== `number` || isNaN(height) || height < 1)
    return null;
  let rows = [[1]];
  if (height === 1) {
    return rows;
  }
  for (let i = 0; i < height - 1; i++) {
    let row = [1];
    for (let j = 0; j < rows[i].length - 1; j++) {
      row[j + 1] = rows[i][j] + rows[i][j + 1];
    }
    rows = [...rows, [...row, 1]];
  }
  return rows;
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
