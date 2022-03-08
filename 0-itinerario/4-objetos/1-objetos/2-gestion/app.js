const { Console } = require("./console");

const console = new Console();
let object = {};
object.a = 666;
object["aa"] = 666; 
object.b = "campo";
object["bb"] = "campo";
object.c = function(){
        return "método c";
    };
object["cc"] = function(){
        return "método cc";
    };
object.y = {};
console.writeln(object); // [object Object]
console.writeln(typeof object); // object
for(campo in object){
    console.writeln(object[campo]); // 666 / 666 / campo / campo / function()... / function()... / [object Object]
    console.writeln(typeof object[campo]); // number / number / string / function / function / object
}

console.writeln(object.a); // 666
console.writeln(object["a"]); // 666
console.writeln(object.aa); // 666
console.writeln(object["aa"]); // 666
console.writeln(object.c); // function()...
console.writeln(typeof object.c); // function
console.writeln(object.c()); // método c
console.writeln(typeof object.c()); // string
console.writeln(object["c"]); // function()...
console.writeln(typeof object["c"]); // function
console.writeln(object["c"]()); // método c
console.writeln(typeof object["c"]()); // string
console.writeln(object["cc"]); // function()...
console.writeln(typeof object["cc"]); // function
console.writeln(object["cc"]()); // método cc
console.writeln(typeof object["cc"]()); // string
console.writeln(object.cc); // function()...
console.writeln(typeof object.cc); // function
console.writeln(object.cc()); // método cc
console.writeln(typeof object.cc()); // string
    
object.a = 7;
object["aa"] = 7;
object.c = function() {
    console.writeln("nueva");
}
console.writeln(object); // [object Object]
console.writeln(typeof object); // object
for(campo in object){
    console.writeln(object[campo]); // 7 / 7 / campo / campo / function()... / function()...
    console.writeln(typeof object[campo]); // number / number / string / string / function  / function
} 
    
delete object.b;
delete object["bb"];
console.writeln(object); // [object Object]
console.writeln(typeof object); // object
for(campo in object){
    console.writeln(object[campo]); // 7 / 7 / function()... / function()...
    console.writeln(typeof object[campo]); // number / number / function  / function
}
