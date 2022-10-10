const { Console } = require("./console");

const console = new Console();

class Clazz {

    publicAttributeX
    publicAttributeY
    #privateAttribute

    constructor(parameter) {
        this.publicAttributeX = parameter;
        this.publicAttributeY = 0;
        this.#privateAttribute = "nuevo";
    }

    publicInstanceMethod() {
        this.#privateInstanceMethod();
        console.writeln(`publicAttributeX: ${this.publicAttributeX} - #publicAttributeY: ${this.publicAttributeY}`);
        console.writeln(`publicClazzAttribute: ${Clazz.publicClazzAttribute}`);
    }

    #privateInstanceMethod() {
        this.publicAttributeX++;
        this.publicAttributeY++;
    }

    static publicClazzAttribute = "global";
    static publicClazzMethod = function (value) {
        Clazz.publicClazzAttribute = value;
        Clazz.#privateClazzMethod(0);
    }
    static #privateClazzAttribute = "particular";
    static #privateClazzMethod = function (value) {
        Clazz.#privateClazzAttribute = value;
    }
}

const object = new Clazz(1);
object.publicInstanceMethod();
object.publicAttributeX = 666;
console.writeln(`object.publicAttributeX: ${object.publicAttributeX}`);
console.writeln(`Clazz.publicClazzAttribute: ${Clazz.publicClazzAttribute}`);
object.publicInstanceMethod();
Clazz.publicClazzMethod("nuevo");
object.publicInstanceMethod();
