const { Console } = require("./console");

const console = new Console();
let object = {
    a : 666*7,
    b : `valor`,
    method : function(){
        console.writeln(`método c`);
    }
}
console.writeln(object);
console.writeln(typeof object);
for(let property in object){
    console.writeln(object[property]);
    console.writeln(typeof object[property]);
}
console.writeln(object.method());
console.writeln(typeof object.method());

let {a, b} = object;
console.writeln(`${a} - ${b}`);
({a, a} = { b : 666, a : "oh"});
console.writeln(`${a} - ${b}`);

function f({a, b}){
    console.writeln(`${a} - ${b}`);
}

f(object);
f({a:-1, b:true});
f({a:"que"});

console.writeln(JSON.parse('{"a":7,"aa":7,"y":{}}'));
console.writeln(typeof JSON.parse('{"a":7,"aa":7,"y":{}}'));
let jsonObject = {
    "a" : 666*7,
    "b" : "campo",
    "c" : function(){
        console.writeln("método c");
    }
}
console.writeln(jsonObject);
console.writeln(typeof jsonObject);
for(let property in jsonObject){
    console.writeln(jsonObject[property]);
    console.writeln(typeof jsonObject[property]);
}
console.writeln(jsonObject.method());
console.writeln(typeof jsonObject.method());
console.writeln(JSON.stringify(jsonObject));
console.writeln(typeof JSON.stringify(jsonObject));
