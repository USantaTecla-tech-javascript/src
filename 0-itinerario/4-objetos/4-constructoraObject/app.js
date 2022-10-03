const { Console } = require("./console");

const console = new Console();
let object = { a: 1, b: 2 };
for (let property in object) {
  console.writeln(object[property]); // 1 / 2
}
console.writeln(Object.values(object)); // 1, 2
console.writeln(Object.getOwnPropertyNames(object)); // a,b

Object.assign(object, { b: -2, c: -3 });
console.writeln(Object.values(object)); // 1, -2, 3
console.writeln(Object.getOwnPropertyNames(object)); // a,b,c

let copy = {};
Object.assign(copy, object);
console.writeln(Object.values(copy)); // 1, -2, 3
console.writeln(Object.getOwnPropertyNames(copy)); // a,b,c

Object.defineProperty(copy, 'd', {
  enumerable: true,
  configurable: true,
  writable: true,
  value: 'valor'
});

console.writeln(Object.values(copy)); // 1, -2, 3
console.writeln(Object.getOwnPropertyNames(copy)); // a,b,c,d

console.writeln(copy.toString()); // [object Object]
copy.toString = function () {
  let string = `{\n`;
  for (let property in this) {
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

function createObject(value) {
  this.attribute = value;
}
createObject.prototype.write = function () {
  console.writeln(`this.attribute: ${this.attribute}.`);
}

object = new createObject(true);
object.write(); // this.attribute: true.
console.writeln(Object.values(object)); // true
console.writeln(Object.getOwnPropertyNames(object)); // attribute

copy = Object.create(object);
copy.attribute = false; 
copy.write(); // this.attribute: false.
console.writeln(Object.values(copy)); // false
console.writeln(Object.getOwnPropertyNames(copy)); // attribute
