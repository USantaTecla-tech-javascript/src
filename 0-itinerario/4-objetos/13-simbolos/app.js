const { Console } = require("./console");

const console = new Console();
console.writeln(Symbol); // function Symbol() ...
console.writeln(typeof Symbol); // function
// let symbol = new Symbol(); // TypeError

let undefinedSymbol1 = Symbol();
console.writeln(undefinedSymbol1.toString()); // Symbol()
console.writeln(typeof undefinedSymbol1); // symbol
let undefinedSymbol2 = Symbol();
console.writeln(undefinedSymbol2.toString()); // Symbol()
console.writeln(typeof undefinedSymbol2); // symbol
console.writeln(undefinedSymbol1 === undefinedSymbol2); // false

let localSymbol1 = Symbol(`local description`);
console.writeln(localSymbol1.toString()); // Symbol(local description)
console.writeln(typeof localSymbol1); // symbol
let localSymbol2 = Symbol(`local description`);
console.writeln(localSymbol2.toString()); // Symbol(local description)
console.writeln(typeof localSymbol2); // symbol
console.writeln(localSymbol1 === localSymbol2); // false

let globalSymbol1 = Symbol.for(`global description`);
console.writeln(globalSymbol1.toString()); // Symbol(global description)
console.writeln(typeof globalSymbol1); // symbol
let globalSymbol2 = Symbol.for(`global description`);
console.writeln(globalSymbol2.toString()); // Symbol(global description)
console.writeln(typeof globalSymbol2); // symbol
console.writeln(globalSymbol1 === globalSymbol2); // true

console.writeln(Symbol.keyFor(undefinedSymbol1) === undefined); // true
console.writeln(Symbol.keyFor(undefinedSymbol2) === undefined); // true
console.writeln(Symbol.keyFor(localSymbol1) === undefined); // true 
console.writeln(Symbol.keyFor(localSymbol2) === undefined); // true 
console.writeln(Symbol.keyFor(globalSymbol1).toString()); // Symbol(global description)
console.writeln(Symbol.keyFor(globalSymbol2).toString()); // Symbol(global description)

console.writeln(Symbol.keyFor(Symbol.iterator) === undefined); // true
console.writeln(Symbol.iterator.toString()); // Symbol(Symbol.iterator)

var arr = ['w', 'y', 'k', 'o', 'p'];
var eArr = arr[Symbol.iterator]();
console.log(eArr.next().value); // w
console.log(eArr.next().value); // y
console.log(eArr.next().value); // k
console.log(eArr.next().value); // o
console.log(eArr.next().value); // p

[Symbol(`x`), Symbol(`y`), Symbol(`z`)]

const object = {
  Symbol(`x`) : `norte`,
}