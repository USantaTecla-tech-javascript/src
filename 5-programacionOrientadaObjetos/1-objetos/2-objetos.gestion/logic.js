/* añadir propiedades */
x.a = 666;
x["aa"] = 666; 
x.b = "campo";
x["bb"] = "campo";
x.c = function(){
        return "método c";
    };
x["cc"] = function(){
        return "método cc";
    };
x.y = {};
console.log(x);
console.log(typeof x);
for(campo in x){
    console.log(x[campo]);
    console.log(typeof x[campo]);
}

/* acceso a propiedades */
console.log(x.a);
console.log(x["a"]);
console.log(x.aa);
console.log(x["aa"]);
console.log(x.c);
console.log(typeof x.c);
console.log(x.c());
console.log(typeof x.c());
console.log(x["c"]);
console.log(typeof x["c"]);
console.log(x["c"]());
console.log(typeof x["c"]());
console.log(x["cc"]);
console.log(typeof x["cc"]);    
console.log(x["cc"]());
console.log(typeof x["cc"]());
console.log(x.cc);
console.log(typeof x.cc);    
console.log(x.cc());
console.log(typeof x.cc());
    
/* modificación de propiedades */
x.a = 7;
x["aa"] = 7;
x.c = function() {
    console.log("nueva");
}
console.log(x);
console.log(typeof x);
for(campo in x){
    console.log(x[campo]);
    console.log(typeof x[campo]);
} 
    
/* eliminación de propiedades */
delete x.b;
delete x["bb"];
console.log(x);
console.log(typeof x);
for(campo in x){
    console.log(x[campo]);
    console.log(typeof x[campo]);
}
