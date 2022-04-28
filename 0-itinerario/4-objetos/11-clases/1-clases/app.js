const { Console } = require("./console");

const console = new Console();

class Clazz {

    constructor(property){
        this.property = property;
        this.other = 0;
    }

    #privateMethod() {
        this.property++;
        this.other++;
    }

    method() {
        this.privateMethod();
        console.writeln(`property: ${object.property} - other: ${object.other}`);
    }
}

const o = new Clazz(7);
o.method();
