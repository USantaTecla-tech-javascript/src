const { Console } = require("./console");

const console = new Console();

class Clazz {

    #privateAttributeX;
    #privateAttributeY;
    static #privateClazzAttribute = "global";

    constructor(property) {
        this.#privateAttributeX = property;
        this.#privateAttributeY = 0;
    }

    #privateInstanceMethod() {
        this.#privateAttributeX++;
        this.#privateAttributeY++;
    }

    publicInstanceMethod() {
        this.#privateInstanceMethod();
        console.writeln(`privateAttributeX: ${this.#privateAttributeX} - privateAttributeY: ${this.#privateAttributeY}`);
        console.writeln(`privateClazzAttribute: ${Clazz.#privateClazzAttribute}`);
    }

    static publicClazzMethod(value){
        Clazz.#privateClazzAttribute = value;
    }
};

const object = new Clazz(1);
object.publicInstanceMethod(); // privateAttributeX: 2 - privateAttributeY: 1 / privateClazzAttribute: global
// object.#privateAttributeX = 666; // ERROR
// console.writeln(`object.#privateAttributeX: ${object.#privateAttributeX}`); // ERROR
// console.writeln(`Clazz.#privateClazzAttribute: ${Clazz.#privateClazzAttribute}`); // ERROR
Clazz.publicClazzMethod("nuevo");
object.publicInstanceMethod(); // privateAttributeX: 3 - privateAttributeY: 2 / privateClazzAttribute: nuevo


