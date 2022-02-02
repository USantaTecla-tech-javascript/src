const { Console } = require("./console");

const console = new Console();
console.writeln(356); // 356
console.writeln(-66); // -66
console.writeln(34.45); // 34.45
console.writeln(-2.343e-5); // -0.00002343

console.writeln(0); // 0
console.writeln(-0); // -0
console.writeln(-024); // -20
console.writeln(0xA4); // 164
console.writeln(Infinity); // Infinity
console.writeln(NaN); // NaN
console.writeln(999999999999999999999); // 1e+21!!!
