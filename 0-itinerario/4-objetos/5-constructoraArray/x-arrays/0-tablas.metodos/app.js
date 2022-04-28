const { Console } = require("./console");

const console = new Console();
/* métodos push y pop de arrays */ 
array.push("escondido");
array.push("otro");
array.push(false);
console.writeln(array);
console.writeln(array.find((x)=>(x==="escondido")));
console.writeln(array.pop());
console.writeln(array.pop());
console.writeln(array.pop());
console.writeln(array);
console.writeln(array.find((x)=>(x==="escondido")));
            
/* métodos indexOf, splice, find, map, ... */
let tt=[1,2,3,4,5,6,7,8,9,10];
console.writeln(tt.indexOf(7));
console.writeln(tt.splice(7,2));
console.writeln(tt);
console.writeln(tt.find(x => x>5));

console.writeln(tt.map(x =>x>5));                   
let t = [1,2,3,4];
console.writeln(array);
console.writeln(array.map(value => value**2));
array.forEach((value, index, array) => array[index]=value+1);
console.writeln(array);
