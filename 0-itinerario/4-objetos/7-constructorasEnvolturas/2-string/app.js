const { Console } = require("./console");

const console = new Console();
// console.writeln(patternObject.match(`abcdefabc`)); // 
// console.writeln(patternObject.match(`a b c d e f a b c`)); // 
// console.writeln(patternString.match(`abcdefabc`)); // 
// console.writeln(patternString.match(`a b c d e f a b c`)); // 
const string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
//var expresion = /[A-E]/gi;
var regExp = new RegExp(`[A-E]`,`gi`);
console.writeln(string.match(regExp));

// matchAll
// search
// replace
// replaceAll
// split
