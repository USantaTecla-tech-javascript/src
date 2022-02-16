const { Console } = require(`./console`);

const console = new Console();
console.writeln(parseFloat(`3.14`)); // 3.14
console.writeln(parseFloat(`314e-2`)); // 3.14
console.writeln(parseFloat(`0.0314E+2`)); // 3.14 
console.writeln(parseFloat(`3.1 error 4`)); // 3.1
console.writeln(parseFloat(`error`)); // NaN

console.writeln(parseInt("F", 16)); // 15
console.writeln(parseInt("12", 13)); // 15
console.writeln(parseInt("15", 10)); // 15
console.writeln(parseInt(15.99, 10)); // 15
console.writeln(parseInt("15*3", 10)); // 15
console.writeln(parseInt("17", 8)); // 15
console.writeln(parseInt("1111", 2)); // 15
console.writeln(parseInt("error", 8)); // NaN
console.writeln(("0x7", 10)); // NaN
console.writeln(parseInt("546", 2)); // NaN

console.writeln(isFinite(0)); // true
console.writeln(isFinite(2e64)); // true
console.writeln(isFinite("0")); // true!!!
console.writeln(isFinite(-Infinity)); // false
console.writeln(isFinite(Infinity)); // false
console.writeln(isFinite(NaN)); // false

console.writeln(isNaN(NaN)); //true
console.writeln(isNaN(0 / 0)); //true
console.writeln(isNaN('NaN')); //true
console.writeln(isNaN('Hello')); //true
console.writeln(isNaN('2005/12/12')); //true
console.writeln(isNaN(undefined)); //true
console.writeln(isNaN(0)); //false
console.writeln(isNaN('123')); //false
console.writeln(isNaN(true)); //false
console.writeln(isNaN('')); //false
