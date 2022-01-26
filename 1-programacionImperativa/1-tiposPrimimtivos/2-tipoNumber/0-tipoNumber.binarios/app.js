const { Console } = require("./console");

const console = new Console();
console.writeln(4 + 5);
console.writeln(4 - 5);
console.writeln(4 * 5);
console.writeln(4 / 5);
console.writeln(4 % 5);
console.writeln(4 ** 5);

console.writeln(4 / 0);
console.writeln(4 % 0);

console.writeln(Infinity + 5);
console.writeln(Infinity - 5);
console.writeln(Infinity * 5);
console.writeln(Infinity / 5);
console.writeln(Infinity % 5);
console.writeln(Infinity ** 5);

console.writeln(4 + NaN);
console.writeln(4 - NaN);
console.writeln(4 * NaN);
console.writeln(4 / NaN);
console.writeln(4 % NaN);
console.writeln(4 ** NaN);

console.writeln(0.1e-7 + 1e7);
console.writeln(0.1e-8 + 1e8);
