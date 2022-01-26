const { Console } = require("./console");

const console = new Console();
<<<<<<< HEAD
console.writeln(04 & 08);
console.writeln(04 | 08);
console.writeln(04 ^ 08);
console.writeln(05 ^ 09);
console.writeln(~ 04);
console.writeln(04 << 1);
console.writeln(04 >> 1);
console.writeln(04 >>> 1);
=======
console.writeln(5 & 3); // ... 0000 0101 & ... 0000 0011 -> ... 0000 0001 : 1
console.writeln(5 | 3); // ... 0000 0101 | ... 0000 0011 -> ... 0000 0111 : 7
console.writeln(5 ^ 3); // ... 0000 0101 ^ ... 0000 0011 -> ... 0000 0110 : 6
console.writeln(~ 5); // ~ ... 0000 0101 -> 1111 1111 1111 1111 1111 1111 1111 1010 : -6
console.writeln(5 << 1); // ... 0000 0101 << 1 -> ... 0000 1010 : 10
console.writeln(5 >> 1); // ... 0000 0101 >> 1 -> ... 0000 0010 : 2
console.writeln(5 >>> 1); // ... 0000 0101 >>> 1 -> ... 0000 0010 : 2
console.writeln(-5 << 1); // 1111 1111 1111 1111 1111 1111 1111 1011 << 1 -> 1111 1111 1111 1111 1111 1111 1111 0110 : -10
console.writeln(-5 >> 1); // 1111 1111 1111 1111 1111 1111 1111 1011 >> 1 -> 1111 1111 1111 1111 1111 1111 1111 1101 : -3
console.writeln(-5 >>> 3); // 1111 1111 1111 1111 1111 1111 1111 1011 >>> 1 -> 0111 1111 1111 1111 1111 1111 1111 1101 : 2147483645
>>>>>>> 4d9ecdd3491369056cd3f33d3f3e19e78cedd35e
