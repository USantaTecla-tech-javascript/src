const { Console } = require("./console");

const console = new Console();
// console.writeln(patternObject.match(`abcdefabc`)); // 
// console.writeln(patternObject.match(`a b c d e f a b c`)); // 
// console.writeln(patternString.match(`abcdefabc`)); // 
// console.writeln(patternString.match(`a b c d e f a b c`)); // 
var cadena = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
//var expresion = /[A-E]/gi;
var expresion = new RegExp(`[A-E]`,`gi`);
var array_emparejamientos = cadena.match(expresion);
console.writeln(array_emparejamientos);

matchAll
search
replace
replaceAll
split
