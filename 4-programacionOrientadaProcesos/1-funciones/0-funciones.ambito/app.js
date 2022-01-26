const { Console } = require("./console");

const console = new Console();
function contenedora() {
    let local = -1;
    function anidada(arg) {
        console.writeln("anidada" + arg);
    }
    console.writeln("contenedora");
    anidada(local);
    console.writeln("contenedora");
}
contenedora();
//local = ...; Error!!!
//anidada(); Error!!!


let global= 1;
console.writeln(global);
let igual = 2;
console.writeln(igual);
//console.writeln(local); Error!!! 

function ambito() {
    global--;
    console.writeln(global);
    let igual = 0;
    igual--;
    console.writeln(igual);
    let local = 3;
    console.writeln(local);
}     
console.writeln(global);
console.writeln(igual);
//console.writeln(local); Error!!! 
ambito();
console.writeln(global);
console.writeln(igual);
//console.writeln(local); Error!!! 

// hoisting    
withHoisting();

function withHoisting() {
    console.writeln("withHoisting");
    innerWithHoisting();
    console.writeln("withHoisting");

    function innerWithHoisting() {
        console.writeln("innerWithHoisting");
    }    
};

