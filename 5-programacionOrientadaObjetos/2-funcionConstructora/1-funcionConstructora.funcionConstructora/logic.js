function Coordenada(x, y) {
    this.x = x;
    this.y = y;
    this.isDiagonal = function () {
        return this.x == this.y;
    }
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
for (let coordenada of [new Coordenada(0, 1), new Coordenada(2, 3)]) {
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

console.log(new Coordenada(-234,345));
console.log(new Coordenada(9,7));
