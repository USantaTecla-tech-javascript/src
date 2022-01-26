const { Console } = require("./console");

const console = new Console();
function Coordenada(x, y) {
    this.x = x;
    this.y = y;
    this.isDiagonal = function () {
        return this.x == this.y;
    }
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
for (let coordenada of [new Coordenada(0, 1), new Coordenada(2, 3)]) {
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

console.writeln(new Coordenada(-234,345));
console.writeln(new Coordenada(9,7));
