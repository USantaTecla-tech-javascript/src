const { Console } = require("./console");

const console = new Console();
let arrayCorchete = [];
console.writeln(arrayCorchete);
console.writeln(typeof arrayCorchete);
console.writeln(arrayCorchete instanceof Array);
console.writeln(arrayCorchete.length);
for(let item of arrayCorchete){
    console.writeln(item);
}
