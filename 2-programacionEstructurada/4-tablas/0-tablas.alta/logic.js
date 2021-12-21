let array = [];
for(let item of array){
    console.log(item);
}
for(let key in array){
    console.log(array[key]);
}
console.log("length: " + array.length);

array[0] = 10;
for(let item of array){
    console.log(item);
}
for(let key in array){
    console.log(array[key]);
}
console.log("length: " + array.length);

array[1] = 11;
for(let item of array){
    console.log(item);
}
for(let key in array){
    console.log(array[key]);
}
console.log("length: " + array.length);

array[99] = 990;
for(let item of array){
    console.log(item);
}
for(let key in array){
    console.log(array[key]);
}
console.log("length: " + array.length);

array[-1] = -10;
for(let item of array){
    console.log(item);
}
console.log(array[-1]); 
for(let key in array){
    console.log(array[key]);
}
console.log("length: " + array.length);

array["zzz"] = "zzz";
for(let item of array){
    console.log(item);
}
console.log(array[-1]);
console.log(array["zzz"]);
for(let key in array){
    console.log(array[key]);
}
console.log("length: " + array.length);
