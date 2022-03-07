const { Console } = require("./console");

const console = new Console();
function Coordenada(x, y) {
    this.x = x;
    this.y = y;
}
Coordenada.prototype.isDiagonal = function () {
    return this.x == this.y;
}
Coordenada.dimension = 3;
Coordenada.getDimension = function () {
    return Coordenada.dimension;
}
Coordenada.isValid = function (x, y) {
    if (0 <= x && x < Coordenada.dimension &&
        0 <= y && y < Coordenada.dimension) {
        return new Coordenada(x, y);
    }
    return undefined;
}

console.writeln(Coordenada);
console.writeln(typeof Coordenada);
for (campo in Coordenada) {
    console.writeln("propiedad: " + Coordenada[campo]);
}
console.writeln("---");
console.writeln(Coordenada.prototype);
console.writeln(typeof Coordenada.prototype);
for (campo in Coordenada.prototype) {
    console.writeln("propiedad: " + Coordenada.prototype[campo]);
}
console.writeln("---");
console.writeln(Coordenada.getDimension());
for (let coordenada of [Coordenada.isValid(0, 1), Coordenada.isValid(2, 3)]) {
    if (coordenada != undefined) {
        console.writeln(coordenada);
        console.writeln(typeof coordenada);
        console.writeln(coordenada.x);
        console.writeln(coordenada.y);
        console.writeln(coordenada.isDiagonal());
        coordenada.x = 2;
        coordenada.y = 2;
        console.writeln(coordenada.x);
        console.writeln(coordenada.y);
        console.writeln(coordenada.isDiagonal());
        for (let campo in coordenada) {
            console.writeln(coordenada[campo]);
        }
    }
    console.writeln("---");
}
