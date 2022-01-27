const { Console } = require("./console");

const console = new Console();
/* orden de evaluación */
console.writeln(5*4 + 4*2); // 28
console.writeln(5*4/4*2); // 10
    
/* precedencia */
console.writeln(100/2-1); // 49
console.writeln(5>6 && 7<=4 || 2==4); // false
    
/* asociatividad */
console.writeln(100/2/2); // 25
console.writeln(1-1-1); // -1
