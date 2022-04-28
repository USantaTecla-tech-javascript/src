const { Console } = require("./console");

const console = new Console();
let object = {
    a: 4662,
    b: "campo",
    c: [true, false, true],
    d: {
        x: 1,
        y: -1
    },
    e: x => x+1
};
let string = JSON.stringify(object);
console.writeln(typeof string); // string
console.writeln(string); // {"a":4662,"b":"campo","c":[true,false,true],"d":{"x":1,"y":-1}}

object = JSON.parse('{"a": 4662, "b": "campo", "c": [true, false, true], "d": { "x": 1, "y": -1}}');
console.writeln(typeof object); // object
console.writeln(object); // [object Object]
for (let property in object) {
    console.writeln(`${property}: ${object[property]}`); // a: 4662 // b: campo // c: true,false,true // d: [object Object] 
}
