const { Console } = require("./console");

const console = new Console();
let object = `lo que hubiere o hubiese`;
object = {
    a : 666*7,
    b : `valor`
}
console.writeln(object); // [object Object]
console.writeln(typeof object); // object
for(let property in object){
    console.writeln(object[property]); // 4662 / valor 
    console.writeln(typeof object[property]); // number / string
}

({a, b, c} = { b : 666, a : "oh", d : "ignorado"});
console.writeln(`${a} - ${b} - ${c}`); // oh - 666 - undefined
