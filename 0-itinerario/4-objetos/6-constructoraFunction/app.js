const { Console } = require("./console");

const console = new Console();

let object = {
    attribute: "Value",
    write() {
        console.write(`attribute: ${this.attribute}`);
    }
};

let superior = function (part){
    console.write(`Antes [ `);
    part();
    console.writeln(` ] Despues`);
}
superior(object.write, 1000); // Antes [ attribute: undefined ] Despues
superior(function () {
    object.write(); // Antes [ attribute: Value ] Despues
}, 1000);
superior(() => object.write(), 1000); // Antes [ attribute: Value ] Despues
let funcUser = object.write.bind(object);
superior(funcUser, 1000); // Antes [ attribute: Value ] Despues
 

let numbers = [5, 6, 2, 3, 7];
let max = Math.max(...numbers);
let min = Math.min(...numbers);
console.writeln(`Max: ${max} - Min: ${min}`);
max = Math.max.apply(null, numbers);
min = Math.min.apply(null, numbers);
console.writeln(`Max: ${max} - Min: ${min}`);
[max, min] = [Math.max, Math.min].map(f => f.apply(null, numbers));
console.writeln(`Max: ${max} - Min: ${min}`);
[max, min] = [Math.max, Math.min].map(f => f(...numbers));
console.writeln(`Max: ${max} - Min: ${min}`);
