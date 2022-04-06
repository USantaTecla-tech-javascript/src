const { Console } = require("./console");

const console = new Console();
const height = console.readNumber(`Altura del Triangulo de Tartaglia: `);
console.writeln(rowsToText(getTartagliaTriangle(height)));

function getTartagliaTriangle(height, rows = [[1]]) {
  if (typeof height !== `number` || isNaN(height) || height < 1)
    return null;
  if (height === 1)
    return rows;
  const lastRow = rows.at(-1);
  const newRow = [...lastRow.map(
      (value, index, row) => 
        (index === 0) ? 1 : row[index - 1] + value), 1];
  return getTartagliaTriangle(height - 1, [...rows, newRow]);
}

function rowsToText(rows){
  return rows.reduce(
    (acum, row) => 
      `${acum}\n${row.reduce(
        (acum, value) => `${acum} ${value} -`,
        ``)}`, 
    ``);
}
