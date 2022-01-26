const { Console } = require("./console");

const console = new Console();
/* while */
x = 3;
while (x>0){
    console.writeln("while");
    x--;
}
            
/* do-while */
x = 3;
do {
    console.writeln("do/while");
    x--;
} while (x>0);
            
/* for */
for(let i=0; i<3; i++) {
    console.writeln(i);
}
for(let i=0; i<3; i++) {
    console.writeln(i);
}
