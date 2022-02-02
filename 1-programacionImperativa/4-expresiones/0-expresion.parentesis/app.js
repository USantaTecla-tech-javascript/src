const { Console } = require("./console");

const console = new Console();
/* orden de evaluación */
console.writeln(5*(4 + 4)*2); // 80
console.writeln(5*(4/4*2)); // 10
    
/* rompe precedencia */
console.writeln(100/(2-1)); // 100
console.writeln(5>6 && (7<=4 || 2==4)); // false
    
/* rompe asociatividad */
console.writeln(100/(2/2)); // 100
console.writeln(1-(1-1)); // 1