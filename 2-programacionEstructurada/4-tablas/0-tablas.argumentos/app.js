const { Console } = require("./console");

const console = new Console();
function sum(){
    let sum = 0;
    for(argument of arguments){
        sum += argument;
    }
    console.writeln(sum);
}
console.writeln(sum()); // 0
console.writeln(sum(1)); // 1
console.writeln(sum(1,2,3,4,5)); // 15
