const { Console } = require("./console");

const console = new Console();

class Clazz {

    #publicAttributeX;
    #publicAttributeY;

    constructor(property) {
        this.#publicAttributeX = property;
        this.#publicAttributeY = 0;
    }

    #privateMethod() {
        this.#publicAttributeX++;
        this.#publicAttributeY++;
    }

    publicInstanceMethod() {
        this.#privateMethod();
        console.writeln(`publicAttributeX: ${this.#publicAttributeX} - publicAttributeY: ${this.#publicAttributeY}`);
        console.writeln(`publicClazzAttribute: ${Clazz.#publicClazzAttribute}`);
    }

    static #publicClazzAttribute = "global";

    static publicClazzMethod(value){
        Clazz.#publicClazzAttribute = value;
    }
};

const object = new Clazz(1);
object.publicInstanceMethod();
object.publicAttributeX = 666;
console.writeln(`object.publicAttributeX: ${object.publicAttributeX}`);
console.writeln(`Clazz.publicClazzAttribute: ${Clazz.publicClazzAttribute}`);
object.publicInstanceMethod();
Clazz.publicClazzMethod("nuevo");
object.publicInstanceMethod();


