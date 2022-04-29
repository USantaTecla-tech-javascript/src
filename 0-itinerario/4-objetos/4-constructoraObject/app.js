const { Console } = require("./console");

const console = new Console();
const object = { a: 1, b: 2 };
for(let property in object){
  console.writeln(object[property]); // 1 / 2
}
Object.assign(object, { b: -2, c: -3 });
for(let property in object){
  console.writeln(object[property]); // 1 / -2 / -3 
}
const copy = Object.create(object);
for(let property in copy){
  console.writeln(copy[property]); // 1 / -2 / -3 
}
Object.defineProperty(copy, 'd', {
  enumerable: true,
  configurable: true,
  writable: true,
  value: 'valor'
});
for(let property in copy){
  console.writeln(copy[property]); // 1 / -2 / -3 / valor
}
for(let value of Object.values(copy)){
  console.writeln(value); // 1 / -2 / -3 / valor
}
for(let name of Object.keys(copy)){
  console.writeln(name); // a / b / c / d
}
console.writeln(copy.toString());
copy.toString = function() {
  let string = `{\n`;
  for(let property in this){
    string += `${property} = ${this[property]}\n`;
  }
  return `${string}}\n`;
}
console.writeln(copy.toString()); // {
// d = valor
// toString = function() {
//   let string = `{\n`;
//   for(let property in this){
//     string += `${property} = ${this[property]}\n`;
//   }
//   return `${string}}\n`;
// }
// a = 1
// b = -2
// c = -3
// }
