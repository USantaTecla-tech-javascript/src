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
  const rows = getTartagliaTriangle(height - 1);
  const lastRow = rows.at(-1);
  let newRow = [1];
  for (let i = 0; i < lastRow.length - 1; i++) {
    newRow[i + 1] = lastRow[i] + lastRow[i + 1];
  }
  return [...rows, [...newRow, 1]];
}

function rowsToText(rows){
  return rows.reduce(
    (acum, row) => 
      `${acum}\n${row.reduce(
        (acum, value) => `${acum} ${value} -`,
        ``)}`, 
    ``);
}
