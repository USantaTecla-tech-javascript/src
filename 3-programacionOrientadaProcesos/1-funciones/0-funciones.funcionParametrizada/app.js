const { Console } = require("./console");

const console = new Console();
function funcion(x, y=0) {
    console.writeln("entra:")
    console.writeln(x);
    console.writeln(y);
    x++;
    y++;
    console.writeln(x);
    console.writeln(y);
}

funcion(1,2);
let x=1;
let y=2;
funcion(x,y);
funcion(x+y*2,x*y-1);
funcion(undefined,"012a");
funcion(x,y,666);
funcion(-1);
funcion();
