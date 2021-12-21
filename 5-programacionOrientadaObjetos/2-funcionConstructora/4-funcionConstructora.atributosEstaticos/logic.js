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

console.log(Coordenada);
console.log(typeof Coordenada);
for (campo in Coordenada) {
    console.log("propiedad: " + Coordenada[campo]);
}
console.log("---");
console.log(Coordenada.prototype);
console.log(typeof Coordenada.prototype);
for (campo in Coordenada.prototype) {
    console.log("propiedad: " + Coordenada.prototype[campo]);
}
console.log("---");
console.log(Coordenada.getDimension());
for (let coordenada of [Coordenada.isValid(0, 1), Coordenada.isValid(2, 3)]) {
    if (coordenada != undefined) {
        console.log(coordenada);
        console.log(typeof coordenada);
        console.log(coordenada.x);
        console.log(coordenada.y);
        console.log(coordenada.isDiagonal());
        coordenada.x = 2;
        coordenada.y = 2;
        console.log(coordenada.x);
        console.log(coordenada.y);
        console.log(coordenada.isDiagonal());
        for (let campo in coordenada) {
            console.log(coordenada[campo]);
        }
    }
    console.log("---");
}
