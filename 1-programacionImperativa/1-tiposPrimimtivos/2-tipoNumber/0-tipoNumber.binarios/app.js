const { Console } = require("./console");

const console = new Console();
console.writeln(4 + 5); // 9
console.writeln(4 - 5); // -1  
console.writeln(4 * 5); // 20 
console.writeln(4 / 5); // 0.8 
console.writeln(4 % 5); // 4  
console.writeln(4 ** 5); // 1024  

console.writeln(4 / 0); // Infinity
console.writeln(4 % 0); // NaN  

console.writeln(Infinity + 5); // Infinity
console.writeln(Infinity - 5); // Infinity
console.writeln(Infinity * 5); // Infinity
console.writeln(Infinity / 5); // Infinity
console.writeln(Infinity % 5); // NaN
console.writeln(Infinity ** 5); // Infinity

console.writeln(4 + NaN); // NaN
console.writeln(4 - NaN); // NaN
console.writeln(4 * NaN); // NaN
console.writeln(4 / NaN); // NaN
console.writeln(4 % NaN); // NaN
console.writeln(4 ** NaN); // NaN

console.writeln(0.1e-7 + 1e7); // 10000000.00000001
console.writeln(0.1e-8 + 1e8); // 100000000
