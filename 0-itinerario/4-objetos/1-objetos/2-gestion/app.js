const { Console } = require("./console");

const console = new Console();
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
console.writeln(x);
console.writeln(typeof x);
for(campo in x){
    console.writeln(x[campo]);
    console.writeln(typeof x[campo]);
}

/* acceso a propiedades */
console.writeln(x.a);
console.writeln(x["a"]);
console.writeln(x.aa);
console.writeln(x["aa"]);
console.writeln(x.c);
console.writeln(typeof x.c);
console.writeln(x.c());
console.writeln(typeof x.c());
console.writeln(x["c"]);
console.writeln(typeof x["c"]);
console.writeln(x["c"]());
console.writeln(typeof x["c"]());
console.writeln(x["cc"]);
console.writeln(typeof x["cc"]);    
console.writeln(x["cc"]());
console.writeln(typeof x["cc"]());
console.writeln(x.cc);
console.writeln(typeof x.cc);    
console.writeln(x.cc());
console.writeln(typeof x.cc());
    
/* modificación de propiedades */
x.a = 7;
x["aa"] = 7;
x.c = function() {
    console.writeln("nueva");
}
console.writeln(x);
console.writeln(typeof x);
for(campo in x){
    console.writeln(x[campo]);
    console.writeln(typeof x[campo]);
} 
    
/* eliminación de propiedades */
delete x.b;
delete x["bb"];
console.writeln(x);
console.writeln(typeof x);
for(campo in x){
    console.writeln(x[campo]);
    console.writeln(typeof x[campo]);
}
