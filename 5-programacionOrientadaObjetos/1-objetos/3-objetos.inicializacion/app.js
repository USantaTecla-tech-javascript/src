const { Console } = require("./console");

const console = new Console();
/* inicilización de objetos */
let y = {
    a : 666*7,
    b : "campo",
    c : function(){
        console.writeln("método c");
    }
}
console.writeln(y);
console.writeln(typeof y);
for(campo in y){
    console.writeln(y[campo]);
    console.writeln(typeof y[campo]);
}
console.writeln(y.c());
console.writeln(typeof y.c());

/* inicilización de objetos por JSON */
console.writeln("JSON!!!!!!!!!!!!");
let z = {
    "a" : 666*7,
    "b" : "campo",
    "c" : function(){
        console.writeln("método c");
    }
}
console.writeln(y);
console.writeln(typeof y);
for(campo in y){
    console.writeln(y[campo]);
    console.writeln(typeof y[campo]);
}
console.writeln(y.c());
console.writeln(typeof y.c());

/* objeto JSON */
console.writeln(JSON.stringify(z));
console.writeln(typeof JSON.stringify(z));
console.writeln(JSON.parse('{"a":7,"aa":7,"y":{}}'));
console.writeln(typeof JSON.parse('{"a":7,"aa":7,"y":{}}'));

/* inicialización por desestructuración */
let { m, n } = {n : 666, m : true};
console.writeln(m);
console.writeln(n);
