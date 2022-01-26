const { Console } = require("./console");

const console = new Console();
function doble(number){
    return 2*number;
}

function sumatorioDoble(ini, fin){
    let sum = 0;
    for(let i=ini; i<=fin; i++){
        sum += doble(i);
    }
    return sum;
}
console.writeln(sumatorioDoble(1,5));

function factorial(number){
    let result = 1;
    for(let i=1; i<=number; i++){
        result *= i;
    }
    return result;
}
function sumatorioFactorial(ini, fin){
    let sum = 0;
    for(let i=ini; i<=fin; i++){
        sum += factorial(i);
    }
    return sum;
}
console.writeln(sumatorioFactorial(1,5));
    
/* función de orden superior */
function sumatorio(ini, fin, f) {
    let sum = 0;
    for(let i=ini; i<=fin; i++){
        sum += f(i);
    }
    return sum;
}
console.writeln(sumatorio(1, 5, factorial));
console.writeln(sumatorio(1, 5, doble));

console.writeln(sumatorio(1, 5, function (x) {
    return x +1;
}));
console.writeln(sumatorio(1, 5, x => x +1));


