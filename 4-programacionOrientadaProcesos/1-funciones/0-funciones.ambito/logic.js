function contenedora() {
    let local = -1;
    function anidada(arg) {
        console.log("anidada" + arg);
    }
    console.log("contenedora");
    anidada(local);
    console.log("contenedora");
}
contenedora();
//local = ...; Error!!!
//anidada(); Error!!!


let global= 1;
console.log(global);
let igual = 2;
console.log(igual);
//console.log(local); Error!!! 

function ambito() {
    global--;
    console.log(global);
    let igual = 0;
    igual--;
    console.log(igual);
    let local = 3;
    console.log(local);
}     
console.log(global);
console.log(igual);
//console.log(local); Error!!! 
ambito();
console.log(global);
console.log(igual);
//console.log(local); Error!!! 

// hoisting    
withHoisting();

function withHoisting() {
    console.log("withHoisting");
    innerWithHoisting();
    console.log("withHoisting");

    function innerWithHoisting() {
        console.log("innerWithHoisting");
    }    
};

