const { Console } = require("./console");

const console = new Console();
console.writeln([]);
console.writeln([1,2,3,4,5]);
console.writeln(["Javascript", "Java", "Scala"]);
console.writeln([false, true]);
console.writeln([undefined]);
let x = "un valor";
console.writeln([7, undefined, x, 5+6>5-6]);

console.writeln([
    ["a","e","i","o","u"], 
    ["A","E","I","O","U"]]);
console.writeln([
    ["x"," ","o"],
    ["x","o","o"],
    [" "," ","x"],
]);
console.writeln([
    [
        [0,0,0],
        [0,0,0],
        [0,0,0],
    ],  
    [
        [0,0,0],
        [0,0,0],
        [0,0,0],
    ],
    [
        [0,0,0],
        [0,0,0],
        [0,0,0],
    ]  
]);
