const { Console } = require("./console");

const console = new Console();
let x = 0;

if (x>=0)
    x++;
console.writeln(x); // 1
            
if (x>1)
    x++;
else
    x--;
console.writeln(x); // 0

switch(x){
    case 3:
        console.writeln("esperado"); // 
        break;
    case 2:
        console.writeln("vulgar"); // 
    case 0:
    case 1:
        console.writeln("mágico"); // mágico
        break;
    default:
        console.writeln("otro"); //    
}

