const { Console } = require("./console");

const console = new Console();
/* orden de evaluación */
console.writeln(5*(4 + 4)*2);  
console.writeln(5*(4/4*2));
    
/* rompe precedencia */
console.writeln(100/(2-1));
console.writeln(5>6 && (7<=4 || 2==4));
    
/* rompe asociatividad */
console.writeln(100/(2/2));
console.writeln(1-(1-1));
