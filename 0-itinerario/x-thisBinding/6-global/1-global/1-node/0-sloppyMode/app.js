console.log(this === globalThis); // true
// console.log(this === this.globalThis); // TypeError: Cannot read properties of undefined

var first = 1;
console.log(first); // 1
console.log(this.first); // 1
console.log(globalThis.first); // 1
// console.log(this.globalThis.first); // TypeError: Cannot read properties of undefined

second = 2;
console.log(second); // Uncaught ReferenceError: second is not defined
console.log(this.second); // undefinded
console.log(globalThis.second); // undefinded
// console.log(this.globalThis.second); // TypeError: Cannot read properties of undefined

this.third = 3;
// console.log(third); // third is not defined 
console.log(this.third); // 3
console.log(globalThis.third); // 3
// console.log(this.globalThis.third); // TypeError: Cannot read properties of undefined

let fourth = 4;
console.log(fourth); // 4 
console.log(this.fourth); // undefinded
console.log(globalThis.fourth); // undefinded
// console.log(this.globalThis.fourth); // TypeError: Cannot read properties of undefined
