const { Console } = require("./console");

const console = new Console();

function Base(attribute) {

    let methodA = function () {
        console.writeln(`Base - A: attribute: ${attribute}`);
    };

    let methodB = function () {
        console.writeln(`Base - B: attribute: ${attribute}`);
    };

    let methodC = function () {
        console.writeln(`Base - C: attribute: ${attribute}`);
    };

    return {
        methodA,
        methodB,
        methodC
    }
}

function Derived(attribute, other) {
    let returned = new Base(attribute)

    let methodB = function () {
        console.writeln(`Derived - B: other: ${other}`);
        returned.methodB.call(this);
    };

    let methodC = function () {
        console.writeln(`Derived - C: other: ${other}`);
    };

    let methodD = function () {
        console.writeln(`Derived - D: other: ${other}`);
    };

    return {
        ...returned,
        ... {
            methodB,
            methodC,
            methodD
        }
    }
}

let object = new Base(`base`);
object.methodA();
object.methodB();
object.methodC();
//console.writeln(object instanceof Base);
//console.writeln(object instanceof Derived);

object = new Derived(`derived`, `specializations`);
object.methodA();
object.methodB();
object.methodC();
object.methodD();
//console.writeln(object instanceof Base);
//console.writeln(object instanceof Derived);
