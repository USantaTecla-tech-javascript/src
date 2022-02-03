const { Console } = require("./console");

const console = new Console();
/* precedencia */
console.writeln(100/(2-1)); // ¿100 o 49?
console.writeln(4>=7 && (2==4 || 5<6)); // ¿false o true?
    
/* asociatividad */
console.writeln(100/(2/2)); // ¿100 o 25?
console.writeln(1-(1-1)); // ¿1 o -1?

/* orden de evaluación ¿izquierda a derecha?*/
console.writeln(5 * (4+4) * 2); // ¿80 o 28?
console.writeln((5+4) / (4+2)); // ¿1.5 u 8?
