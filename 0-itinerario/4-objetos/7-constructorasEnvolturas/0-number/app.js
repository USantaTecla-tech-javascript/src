const { Console } = require("./console");

const console = new Console();
const expression = `123`;
console.writeln(Number(expression)); // 123
console.writeln(new Number(expression)); // 123
console.writeln(+(expression)); // 123

const numObj = 12345.6789;
console.writeln(numObj.toFixed()); // 12346
console.writeln(numObj.toFixed(1)); // 12345.7
console.writeln(numObj.toFixed(6)); // 12345.678900
console.writeln(1.23e+20.toFixed(2)); // 123000000000000000000.00
console.writeln(1.23e-10.toFixed(2)); // 0.00
console.writeln(2.34.toFixed(1)); // 2.3
console.writeln(2.35.toFixed(1)); // 2.4
console.writeln(-2.34.toFixed(1)); // -2.3
console.writeln(-2.35.toFixed(1)); // -2.4
console.writeln((2).toFixed(1)); // 2.0
