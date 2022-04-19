const { Console } = require("./console");

const console = new Console();
console.writeln(typeof function () {
    console.writeln("anonima"); // function
});
console.writeln(function () {
    console.writeln("anonima");
}); // function () ...
console.writeln(function () {
    console.writeln("anonima");
}()); // anonima
console.writeln(typeof function () {
    console.writeln("anonima");
}()); // anonima\nundefined

function nominal() {
    console.writeln("nomimal");
    return true;
}

let f = nominal;
console.writeln(typeof f); // function
console.writeln(f); // function nominal() ...
console.writeln(f()); // nomimal\ntrue
console.writeln(typeof f()); // nomimal\nboolean

let g = function () {
    console.writeln("anonima g");
};
console.writeln(typeof g); // function
console.writeln(g); // function () ...
console.writeln(g()); // anonima g\n
console.writeln(typeof g()); // undefined

function gg() {
    console.writeln("nominal gg");
};
console.writeln(typeof gg); // function
console.writeln(gg); // function gg() ...
console.writeln(gg()); // anonimal gg\n
console.writeln(typeof gg()); // undefined

g = gg;
console.writeln(typeof g); // function
console.writeln(g); // function gg() ...
console.writeln(g()); // anonimal gg\n
console.writeln(typeof g()); // undefined
// operador de igualdad


nominal = function () {
    console.writeln("re-anomina");
};
console.writeln(typeof nominal); // function
console.writeln(nominal); // function () ...
console.writeln(nominal()); // re-anomina\n
console.writeln(typeof nominal()); // undefined
