const { Console } = require("./console");

const console = new Console();

const tartagliaTriangle = (rows, triangle = [[1]]) => {
  if (isNaN(rows))
    return null;
  if (rows < 2) 
    return triangle;
  const row = triangle.at(-1).map((row, index, triangle) => (index === 0) ? 1 : triangle[index - 1] + row).concat(1);
  return tartagliaTriangle(rows - 1, [...triangle, row]);
}
console.writeln(tartagliaTriangle(5));
