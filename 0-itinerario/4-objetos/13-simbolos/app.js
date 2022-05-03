const { Console } = require("./console");

const console = new Console();
console.writeln(Symbol); // function Symbol() ...
console.writeln(typeof Symbol); // function
// let symbol = new Symbol(); // TypeError

let withoutDescriptionSymbol1 = Symbol();
console.writeln(withoutDescriptionSymbol1.toString()); // Symbol()
console.writeln(typeof withoutDescriptionSymbol1); // symbol
let withoutDescriptionSymbol2 = Symbol();
console.writeln(withoutDescriptionSymbol2.toString()); // Symbol()
console.writeln(typeof withoutDescriptionSymbol2); // symbol
console.writeln(withoutDescriptionSymbol1 === withoutDescriptionSymbol2); // false

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

console.writeln(Symbol.keyFor(withoutDescriptionSymbol1) === undefined); // true
console.writeln(Symbol.keyFor(withoutDescriptionSymbol2) === undefined); // true
console.writeln(Symbol.keyFor(localSymbol1) === undefined); // true 
console.writeln(Symbol.keyFor(localSymbol2) === undefined); // true 
console.writeln(Symbol.keyFor(globalSymbol1).toString()); // Symbol(global description)
console.writeln(Symbol.keyFor(globalSymbol2).toString()); // Symbol(global description)

console.writeln(Symbol.keyFor(Symbol.iterator) === undefined); // true
console.writeln(Symbol.iterator.toString()); // Symbol(Symbol.iterator)

