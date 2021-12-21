/* métodos push y pop de arrays */ 
array.push("escondido");
array.push("otro");
array.push(false);
console.log(array);
console.log(array.find((x)=>(x==="escondido")));
console.log(array.pop());
console.log(array.pop());
console.log(array.pop());
console.log(array);
console.log(array.find((x)=>(x==="escondido")));
            
/* métodos indexOf, splice, find, map, ... */
let tt=[1,2,3,4,5,6,7,8,9,10];
console.log(tt.indexOf(7));
console.log(tt.splice(7,2));
console.log(tt);
console.log(tt.find(x => x>5));

console.log(tt.map(x =>x>5));                   
let t = [1,2,3,4];
console.log(array);
console.log(array.map(value => value**2));
array.forEach((value, index, array) => array[index]=value+1);
console.log(array);
