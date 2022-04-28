const { Console } = require("./console");

const console = new Console();
let object = {};
object.a = 666;
object["aa"] = 666; 
object.b = "campo";
object["bb"] = "campo";
object.y = {};
object.yy = {};

console.writeln(object.a); // 666
console.writeln(object["a"]); // 666
console.writeln(object.aa); // 666
console.writeln(object["aa"]); // 666
console.writeln(object.b); // "campo"
console.writeln(object["b"]); // "campo"
console.writeln(object.bb); // "campo"
console.writeln(object["bb"]); // "campo"
console.writeln(object.y); // [object Object]
console.writeln(object["y"]); // [object Object]
console.writeln(object.yy); // [object Object]
console.writeln(object["yy"]); // [object Object]

for(let property in object){
    console.writeln(object[property]); // 666 / 666 / campo / campo / [object Object] / [object Object]
    console.writeln(typeof object[property]); // number / number / string / object / object
}

object.a = 7;
object["aa"] = 7;
for(campo in object){
    console.writeln(object[campo]); // 7 / 7 / campo / campo / [object Object] / [object Object]
    console.writeln(typeof object[campo]); // number / number / string / string / object / object 
} 
    
delete object.b;
delete object["bb"];
console.writeln(object); // [object Object]
console.writeln(typeof object); // object
for(campo in object){
    console.writeln(object[campo]); // 7 / 7  / [object Object] / [object Object]
    console.writeln(typeof object[campo]); // number / number / object / object 
}
