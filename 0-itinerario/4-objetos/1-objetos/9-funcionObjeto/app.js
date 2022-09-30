const { Console } = require("./console");

const console = new Console();
function next() {
    next.counter++;
    return next.counter
}
next = function () {
    next.counter++;
    return next.counter
}
next.counter = 0;
console.writeln(`${next()}`); // 1
console.writeln(`${next()}`); // 2
console.writeln(`${next()}`); // 3
next.counter = 1;
console.writeln(`${next()}`); // 2
console.writeln(`${next()}`); // 3
console.writeln(`${next()}`); // 4
