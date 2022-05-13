function X() {
  this.a = `lo que sea`;
  this.set = function(o){
    let that = this;
    o.m = function(){
      console.log(that.a);
    }
  }
}

let o = {};
let x = new X();
x.set(o);
o.m();

