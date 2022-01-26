const { Console } = require("./console");

const console = new Console();
var a = "a";
console.writeln(a);
console.writeln(this.a);
console.writeln(window.a);
console.writeln(this["a"]);
console.writeln(window["a"]);

b = "b";
console.writeln(b);
console.writeln(this.b);
console.writeln(window.b);
console.writeln(this["b"]);
console.writeln(window["b"]);

this.c = "c";
console.writeln(c);
console.writeln(this.c);
console.writeln(window.c);
console.writeln(this["c"]);
console.writeln(window["c"]);

window.d = "d";
console.writeln(d);
console.writeln(this.d);
console.writeln(window.d);
console.writeln(this["d"]);
console.writeln(window["d"]);

let e = "e";
console.writeln(e);
console.writeln(this.e);
console.writeln(window.e);
console.writeln(this["e"]);
console.writeln(window["e"]);

function f(){
  return "f";
}
console.writeln(f);
console.writeln(this.f);
console.writeln(window.f);
console.writeln(this["f"]);
console.writeln(window["f"]);
console.writeln(f());
console.writeln(this.f());
console.writeln(window.f());
console.writeln(this["f"]());
console.writeln(window["f"]());

var g = function(){
  return "f";
}
console.writeln(g);
console.writeln(this.g);
console.writeln(window.g);
console.writeln(g());
console.writeln(this.g());
console.writeln(window.g());

h = function(){
  return "h";
}
console.writeln(h);
console.writeln(this.h);
console.writeln(window.h);
console.writeln(h());
console.writeln(this.h());
console.writeln(window.h());

this.i = function(){
  return "i";
}
console.writeln(i);
console.writeln(this.i);
console.writeln(window.i);
console.writeln(i());
console.writeln(this.i());
console.writeln(window.i());

window.j = function(){
  return "j";
}
console.writeln(j);
console.writeln(this.j);
console.writeln(window.j);
console.writeln(j());
console.writeln(this.j());
console.writeln(window.j());
