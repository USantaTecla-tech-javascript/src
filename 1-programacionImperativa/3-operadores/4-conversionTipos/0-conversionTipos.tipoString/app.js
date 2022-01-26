const { Console } = require("./console");

const console = new Console();
console.writeln("" + -1.2345e4); // "-12345"
console.writeln("" + NaN);
console.writeln("1" + 2); // "12"
console.writeln(1 + "2"); // "12"
console.writeln("" + true); // "true"
console.writeln("" + false); // "false"
console.writeln("" + undefined); // "undefined"
