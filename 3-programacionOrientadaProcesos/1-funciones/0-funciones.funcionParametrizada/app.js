const { Console } = require("./console");

const console = new Console();
function funcion(x, y=0) {
    console.write(`x: ${x}, y: ${y} => `);
    x++;
    y++;
    console.writeln(`x: ${x}, y: ${y}`);
}

funcion(); // x: undefined, y: 0 => x: NaN, y: 1
funcion(-1); // x: -1, y: 0 => x: 0, y: 1
funcion(undefined); // x: undefined, y: 0 => x: NaN, y: 1
funcion(1,2); // x: 1, y: 2 => x: 2, y: 3
let x=1; // 
let y=2; // 
funcion(y,x); // x: 2, y: 1 => x: 3, y: 2
funcion(x+y*2,x*y-1); // x: 5, y: 1 => x: 6, y: 2
funcion(x,y,666); // x: 1, y: 2 => x: 2, y: 3






