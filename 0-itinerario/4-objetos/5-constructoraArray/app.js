const { Console } = require("./console");

const console = new Console();
let array = [];
array.push("escondido");
array.push("otro");
array.push(false);
console.writeln(array); // escondido,otro,false
console.writeln(array.find(x => x === "escondido")); // escondido
console.writeln(array.pop()); // false
console.writeln(array.pop()); // otro
console.writeln(array.pop()); // escondido
console.writeln(array); // 
console.writeln(array.find(x => x === "escondido")); // 

let tt = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.writeln(tt.indexOf(7)); // 6
console.writeln(tt.splice(7, 2)); // 8,9
console.writeln(tt); // 1,2,3,4,5,6,7,10
console.writeln(tt.find(x => x > 5)); // 6
console.writeln(tt.map(x => x > 5)); // false,false,false,false,false,true,true,true

let t = [1, 2, 3, 4];
console.writeln(t); // 1,2,3,4
console.writeln(t.map(value => value ** 2));  // 1,4,9,16
array.forEach((value, index, t) => t[index] = value + 1);
console.writeln(t);  // 1,2,3,4
