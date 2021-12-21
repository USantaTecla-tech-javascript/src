let array = [1,2,3,4,5];
console.log(typeof array);
console.log(array[0]);
console.log(typeof array[0]);
console.log(array[4]);
console.log(typeof array[4]);
console.log(array[5]);
console.log(typeof array[5]);
for(let i = 0; i < array.length; i++){
    console.log(array[i]);
}
for(let item of array){
    console.log(item);
}
for(let key in array){
    console.log(array[key]);
}

for(let i = 0; i < [1,2,3].length; i++){
    console.log([1,2,3][i]);
}
for(let item of [1,2,3]){
    console.log(item);
}
for(let key in [1,2,3]){
    console.log(array[key]);
}

