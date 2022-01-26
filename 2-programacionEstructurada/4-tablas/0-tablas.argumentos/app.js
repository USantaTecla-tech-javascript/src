const { Console } = require("./console");

const console = new Console();
function sum(){
    let sum = 0;
    for(argument of arguments){
        sum += argument;
    }
    return sum;
}
console.writeln(sum(1,2,3,2,3,2,3,2,3,2,3));
