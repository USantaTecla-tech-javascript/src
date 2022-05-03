const { Console } = require("./console");

const console = new Console();
const symbol = Symbol(`symbol`);
let object = {
  [`property`] : 666,
  [symbol] : function() {
    return true;
  },
  identifier(){
    return false;
  }
};
console.writeln(object[symbol]());
