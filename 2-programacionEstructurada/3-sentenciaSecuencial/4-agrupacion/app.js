const { Console } = require("./console");

const console = new Console();
x = 3;
while (x > 0) {
  console.write(`${x}, `); // 3, 2, 1
  x--;
}
console.writeln(`${x}.`); // 0

do {
  console.write(`${x}, `); // 0, 1, 2
  x++;
} while (x < 3);
console.writeln(`${x}.`); // 3

for (let i = 0; i < x; i++){
  console.write(`${i} `); // 0, 1, 2
  console.write(`(${i+1}), `); // 1, 2, 3
}
console.writeln();

for (let i = x; 0 < i; i--){
  console.write(`${i} `); // 3, 2, 1
  console.write(`(${i-1}), `); // 2, 1, 0
}
console.writeln();

