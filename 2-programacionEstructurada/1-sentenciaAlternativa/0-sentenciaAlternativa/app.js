const { Console } = require("./console");

const console = new Console();
let x;

/* if */
if (x>0){
    x++;
}
console.writeln(x);
            
/* if-else */
if (x>0){
    x++;
} else {
    x--;
}
console.writeln(x);

/* switch */
x = 2;
switch(x){
    case 3:
        console.writeln("esperado");
        break;
    case 2:
        console.writeln("vulgar");
    case 0:
    case 1:
        console.writeln("mágico");
    default:
        console.writeln("otro");    
}

// EL RESULTADO NO ES EL ESPERADO
// undefined
// NaN
// vulgar
// mágico
// otro
