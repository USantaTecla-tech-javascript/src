const { Console } = require("./console");

const console = new Console();

class Base {

    #attribute;

    constructor(parameter) {
        this.#attribute = parameter;
    }

    methodA() {
        console.writeln(`Base - A: attribute: ${this.#attribute}`);
    }

    methodB() {
        console.writeln(`Base - B: attribute: ${this.#attribute}`);
    }

    methodC() {
        console.writeln(`Base - C: attribute: ${this.#attribute}`);
    }

}

class Derived extends Base {

    #attribute;

    constructor(parameter, other){
        super(parameter);
        this.#attribute = other;
    }

    methodB() {
        console.writeln(`Derived - B: attribute: ${this.#attribute}`);
        super.methodB();
        console.writeln(`Derived - B: attribute: ${this.#attribute}`);
    }

    methodC() {
        console.writeln(`Derived - C: attribute: ${this.#attribute}`);
    }

    methodD() {
        console.writeln(`Derived - D: attribute: ${this.#attribute}`);
    }
}

let object = new Base(`base`);
object.methodA();
object.methodB();
object.methodC();

object = new Derived(`derived`, `specializations`);
object.methodA();
object.methodB();
object.methodC();
object.methodD();
