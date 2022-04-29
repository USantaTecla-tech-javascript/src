const { Console } = require("./console");

const console = new Console();
const patternObject = new RegExp(`abc`, `g`);
console.writeln(patternObject.exec(`ABCabcdef`)); // abc
console.writeln(patternObject.exec(`A B C a b c d e f`)); // null
console.writeln(patternObject.test(`ABCabcdef`)); // true
console.writeln(patternObject.test(`A B C a b c d e f`)); // false
const patternString = /(abc)/gi;
console.writeln(patternString.exec(`ABCabcdef`)); // abc
console.writeln(patternString.exec(`A B C a b c d e f`)); // null
console.writeln(patternString.test(`ABCabcdef`)); // true
console.writeln(patternString.test(`A B C a b c d e f`)); // false

