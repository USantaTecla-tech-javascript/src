const { Console } = require("./console");

const console = new Console();
function double(value) {
    return value * 2;
}
console.writeln(double(333))

function factorial(value) {
    if (value == 0) {
        return 1;
    }
    return value * factorial(value - 1);
}
console.writeln(factorial(6))
