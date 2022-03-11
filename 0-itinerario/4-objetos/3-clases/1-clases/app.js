const { Console } = require("./console");

const console = new Console();

class Clazz {

    constructor(property){
        this.property = property;
        this.other = 0;
    }

    method() {
        private(object);
        console.writeln(`property: ${object.property} - other: ${object.other}`);
    }

    private(object) {
        object.property++;
        object.other++;
    }

}

const object = new Clazz(7);
object.method();
