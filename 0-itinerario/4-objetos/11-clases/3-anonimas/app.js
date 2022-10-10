const { Console } = require("./console");

const console = new Console();

class Clazz {

    method() {
        console.writeln(`metodo de Clazz`);
    }
}

const object = new Clazz(1);
object.method();

let clazz = class {

    method() {
        console.writeln(`metodo de anónima`);
    }
}

new clazz(1).method();