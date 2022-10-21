const { Console } = require("./console");

const console = new Console();

class Clazz {

    constructor(string){
        this.attribute = string;
    }
    method() {
        console.writeln(this.attribute);
    }
}

let object = new Clazz(`Declaracion`);
object.method();

let clazz = class {

    constructor(string){
        this.attribute = string;
    }
    method() {
        console.writeln(this.attribute);
    }
}

console.writeln(typeof clazz);
object = new clazz(`Expresion`);
object.method();
new clazz(`Expresion`).method();
clazz = Clazz;
object = new clazz(`Flipping on the beach`);
object.method();
new clazz(`Flipping on fly`).method();
