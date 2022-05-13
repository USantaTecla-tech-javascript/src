function X() {
  this.a = `lo que sea`;
  this.set = function(o){
    o.m = () => {
      console.log(this.a);
    }
  }
}

let o = {};
let x = new X();
x.set(o);
o.m();

