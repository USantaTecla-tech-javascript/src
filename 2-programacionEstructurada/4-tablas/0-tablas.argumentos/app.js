const { Console } = require("./console");

const console = new Console();
writelnSum(); // 0
writelnSum(1); // 1
writelnSum(1,2,3,4,5); // 15

function writelnSum(){
    let sum = 0;
    for(argument of arguments){
        sum += argument;
    }
    console.writeln(sum);
}