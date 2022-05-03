const { Console } = require("./console");

const console = new Console();
let regExp = /[A-E][A-E]/gi; 
const string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
console.writeln(string.match(regExp)); // AB,CD,ab,cd

// matchAll
// search
// replace
// replaceAll
// split
