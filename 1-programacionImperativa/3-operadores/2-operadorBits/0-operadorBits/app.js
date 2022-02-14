const { Console } = require("./console");

const console = new Console();
console.writeln(~ 4); // -5
console.writeln(4 & 8); // 0
console.writeln(4 | 8); // 12
console.writeln(4 ^ 8); // 12
console.writeln(5 ^ 9); // 12
console.writeln(4 << 1); // 8
console.writeln(4 >> 1); // 2
console.writeln(4 >>> 1); // 2
