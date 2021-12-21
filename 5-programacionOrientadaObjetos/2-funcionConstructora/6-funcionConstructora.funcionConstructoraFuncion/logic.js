// funcion constructora Function
let f = new Function("a", "b", "return a * b");         
console.log(f(2,4)); 
console.log(new Function("a", "b", "return a * b")(4,5)); 
