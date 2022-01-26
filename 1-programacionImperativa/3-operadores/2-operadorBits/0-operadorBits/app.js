const { Console } = require("./console");

const console = new Console();
console.writeln(04 & 08);
console.writeln(04 | 08);
console.writeln(04 ^ 08);
console.writeln(05 ^ 09);
console.writeln(~ 04);
console.writeln(04 << 1);
console.writeln(04 >> 1);
console.writeln(04 >>> 1);
