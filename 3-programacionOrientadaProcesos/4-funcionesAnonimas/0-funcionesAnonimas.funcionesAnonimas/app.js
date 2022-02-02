const { Console } = require("./console");

const console = new Console();
console.writeln(typeof function() {
    console.writeln("anonima");
});
console.writeln(function() {
    console.writeln("anonima");
});
console.writeln(function() {
    console.writeln("anonima");
}());
console.writeln(typeof function() {
    console.writeln("anonima");
}());

/* variables de tipo función */
function nominal(){
    console.writeln("nomima");
    return true;
}

let f = nominal;
console.writeln(typeof f);
console.writeln(f);
console.writeln(f());
console.writeln(typeof f());

let g = function() {
        console.writeln("anonima g");
    };
console.writeln(typeof g);
console.writeln(g);
console.writeln(g());
console.writeln(typeof g());

function gg() {
    console.writeln("nominal gg");
};
console.writeln(typeof gg);
console.writeln(gg);
console.writeln(gg());
console.writeln(typeof gg());

g = gg;
console.writeln(typeof g);
console.writeln(g);
console.writeln(g());
console.writeln(typeof g());

nominal = function() {
    console.writeln("re-nominal");
};
console.writeln(typeof nominal);
console.writeln(nominal);
console.writeln(nominal());
console.writeln(typeof nominal());

/* igualdad por referencia */
function una() { 
console.writeln("mensaje");
}
function otra() { 
console.writeln("mensaje");
}
console.writeln(una==otra);
otra = una;
console.writeln(otra==una); 
