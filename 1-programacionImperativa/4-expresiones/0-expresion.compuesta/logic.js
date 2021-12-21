console.log((04 >>> 1, 4 % 5, 5 >= 5, false || true)); //true
console.log(04 >>> 1, 4 % 5, 5 >= 5, false || true); //2 4 true true

/* efectos laterales */
let x = 0;
let y = 0;
console.log((x++, y++)); //1 1
console.log(x++, y++); //2
console.log(x); //2
console.log(y); //2
