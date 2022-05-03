const { Console } = require("./console");

const console = new Console();
const propertySymbol = Symbol(`symbol`);
const functionSymbol = Symbol(`symbol`);
let object = {
  property : 666,
  function : () => `retorno de propiedad identificador`,
  [propertySymbol] : 333,
  [functionSymbol] : () => `retorno de propiedad símbolo`
};
for(let property in object){
  console.writeln(object[property]); // 666 / () => `retorno de propiedad identificador`
}
console.writeln(object[propertySymbol]); // 333
console.writeln(typeof object[propertySymbol]); // number

console.writeln(object[functionSymbol]); // () => `retorno de propiedad símbolo`
console.writeln(typeof object[functionSymbol]); // function

console.writeln(object[functionSymbol]()); // retorno de propiedad símbolo
console.writeln(typeof object[functionSymbol]()); // string
