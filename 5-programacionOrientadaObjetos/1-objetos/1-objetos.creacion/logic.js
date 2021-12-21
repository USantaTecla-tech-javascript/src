/* creación de objeto */ 
let x = new Object();
console.log(x);
console.log(typeof x);
for(campo in x){
    console.log(campo);
    console.log(typeof campo);
}

let x = {};
console.log(x);
console.log(typeof x);
for(campo in x){
    console.log(campo);
    console.log(typeof campo);
}
