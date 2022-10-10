var a = "a";
console.log(a);
console.log(this.a);
console.log(global.a);
console.log(this["a"]);
console.log(global["a"]);

b = "b";
console.log(b);
console.log(this.b);
console.log(global.b);
console.log(this["b"]);
console.log(global["b"]);

this.c = "c";
// console.log(c);
console.log(this.c);
console.log(global.c);
console.log(this["c"]);
console.log(global["c"]);

global.d = "d";
console.log(d);
console.log(this.d);
console.log(global.d);
console.log(this["d"]);
console.log(global["d"]);

let e = "e";
console.log(e);
console.log(this.e);
console.log(global.e);
console.log(this["e"]);
console.log(global["e"]);

function f(){
  return "f";
}
console.log(f);
console.log(this.f);
console.log(global.f);
console.log(this["f"]);
console.log(global["f"]);
console.log(f());
console.log(this.f());
console.log(global.f());
console.log(this["f"]());
console.log(global["f"]());

var g = function(){
  return "f";
}
console.log(g);
console.log(this.g);
console.log(global.g);
console.log(g());
console.log(this.g());
console.log(global.g());

h = function(){
  return "h";
}
console.log(h);
console.log(this.h);
console.log(global.h);
console.log(h());
console.log(this.h());
console.log(global.h());

this.i = function(){
  return "i";
}
console.log(i);
console.log(this.i);
console.log(global.i);
console.log(i());
console.log(this.i());
console.log(global.i());

global.j = function(){
  return "j";
}
console.log(j);
console.log(this.j);
console.log(global.j);
console.log(j());
console.log(this.j());
console.log(global.j());
