const { Console } = require("console-mpds");
const console = new Console();


let numbersSerie = ``;
let number;
let previousNumber = 0;
let isOrdered = true;
do {
    number = console.readNumber("Escribe un número positivo (0 para terminar): ");
    if (isOrdered && number > 0){
        isOrdered = number >= previousNumber;
    }
    numbersSerie += number === 0 ? `` : `${number} `;
    previousNumber = number;
} while (number != 0);
console.writeln(`La serie ${numbersSerie}${isOrdered ? ` está ordenada` : ` no está ordenada`}`);