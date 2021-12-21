function estado() {
    console.log(estado.variable);
    estado.variable++;
}
estado.variable = 0;
estado();
estado();
estado();
console.log(estado.variable);

let f1 = estado;
let f2 = estado;
let f3 = f1;
f2.variable = 666;
f1();
f2();
f3();
console.log(estado.variable);
