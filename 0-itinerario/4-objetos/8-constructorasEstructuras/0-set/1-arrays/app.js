const { Console } = require("./console");

const console = new Console();
for(let item of Array.from(new Set([`a`, `b`, `c`]))) {
  console.writeln(item); // a / b / c
}
for(let item of [...new Set([`a`, `b`, `c`])]) {
  console.writeln(item); // a / b / c
}
