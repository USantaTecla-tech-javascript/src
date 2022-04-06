const { Console } = require("./console");

const console = new Console();
global = `inicialización`; // !!!AVISO, no tiene efecto intentar cambiar la direccion del objeto global
variable = `inicialización`;

console.writeln(`global.variable: ${global.variable}`); 
console.writeln(`variable: ${variable}`); 
zunction(`lo que sea`);

function zunction(){
    console.writeln(`global.variable: ${global.variable}`); 
    console.writeln(`variable: ${variable}`); 
}

https://yeisondaza.com/entendiendo-scopes-de-variables-en-javascript
