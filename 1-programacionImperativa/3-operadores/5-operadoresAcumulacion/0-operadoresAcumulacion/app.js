const { Console } = require("./console");

const console = new Console();
x=100;
console.writeln(x += 2); 
console.writeln(x -= 2);
console.writeln(x *= 2);
console.writeln(x **= 2);
console.writeln(x /= 2);
console.writeln(x %= 7);
console.writeln(x &= 2);
console.writeln(x |= 2);
console.writeln(x ^= 2);
console.writeln(x <<= 2);
console.writeln(x >>= 2);
console.writeln(x >>>= 2);
