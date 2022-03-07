const { Console } = require("./console");

const console = new Console();
x = 3;
while (x > 0)
    x--;
console.writeln(x); // 0

do {
    x++;
} while (x < 3);
console.writeln(x); // 3

for (let i = 0; i < 3; i++)
    console.writeln(i+1); // 1, 2, 3

for (let i = 3; 0 < i; i--)
    console.writeln(i); // 3, 2, 1

