function getThis(){
  return this;
}
console.log(getThis() === this); // false
console.log(getThis() === globalThis); // true

function getData(){
  return `${this.data} - ${globalThis.data}`;
}

var data = "global value";
// console.log(getData()); // Uncaught TypeError: Cannot read properties of undefined (reading 'data')

let object = {
  data : "property value"
}
console.log(getData.call(object)); // property value - global value
console.log(getData.apply(object)); // property value - global value
