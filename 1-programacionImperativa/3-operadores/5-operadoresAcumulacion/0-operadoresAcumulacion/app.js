const { Console } = require("./console");

const console = new Console();
let x = 234;
console.writeln(x += 2); // 236
console.writeln(x -= 2); // 234
console.writeln(x *= 2); // 468
console.writeln(x **= 2); // 219024
console.writeln(x /= 2); // 109512
console.writeln(x %= 7); // 4
console.writeln(x |= 2); // 6
console.writeln(x &= 2); // 2
console.writeln(x ^= 3); // 1
console.writeln(x <<= 2); // 4
console.writeln(x >>= 2); // 1
console.writeln(x >>>= 2); // 0
console.writeln(x += 1 * 5); // 5
console.writeln(x += 1 * 5); // 10
console.writeln(x); // 10
