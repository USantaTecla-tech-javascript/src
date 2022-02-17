const { Console } = require("./console");

const console = new Console();
function funcion(x, y=0) {
    console.write(`x:${x}, y:${y} => `);
    x++;
    y++;
    console.writeln(`x:${x}, y:${y}`);
}

funcion(); // x:undefined, y:0 => x:NaN, y:1
funcion(-1); // x:-1, y:0 => x:0, y:1
funcion(undefined); // x:undefined, y:0 => x:NaN, y:1
funcion(1,2); // x:1, y:2 => x:2, y:3
let x=1; // 
let y=2; // 
funcion(y,x); // x:2, y:1 => x:3, y:2
funcion(x,y); // x:1, y:2 => x:2, y:3
funcion(y,x); // x:2, y:1 => x:3, y:2
funcion(x+y*2,x*y-1); // x:5, y:1 => x:6, y:2
funcion(x,y,666); // x:1, y:2 => x:2, y:3

function writelnSum(){
    let sum = 0;
    for(argument of arguments){
        sum += argument;
    }
    console.writeln(sum);
}
writelnSum(); // 0
writelnSum(1); // 1
writelnSum(1,2,3,4,5); // 15

function writeln([head, ...tail]){
    console.writeln(`${head} y ${tail.length} más`);
}
writeln([1,2,3,4,5,6,7,8]); // 1 y 7 más




