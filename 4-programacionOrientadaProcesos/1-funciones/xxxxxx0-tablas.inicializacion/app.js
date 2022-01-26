const { Console } = require("./console");

const console = new Console();
function sumDesestructurado ([head, ...rest]){
    if (rest.length==0) {
        return head;
    }
    return head + sumDesestructurado(rest);
}

console.writeln(sumDesestructurado([1,2,3,4,5]));
