const { Console } = require("./console");

const console = new Console();

let Base = function (parameter) {
    let that = {
        attribute: parameter,
    };

    return {
        methodA() {
            console.writeln(`Base - A: attribute: ${that.attribute}`);
        },
        methodB() {
            console.writeln(`Base - B: attribute: ${that.attribute}`);
        },
        methodC() {
            console.writeln(`Base - C: attribute: ${that.attribute}`);
        }
    };

}

let Derived = function (parameter, other) {
    let base = Base(parameter);
    let that = {        
            other: other
        };

    return Object.assign({},
        base, 
        {
        methodB() {
            console.writeln(`Derived - B: attribute: ${that.other}`);
            base.methodB.call(this);
        },
        methodC() {
            console.writeln(`Derived - C: attribute: ${that.other}`);
        },
        methodD() {
            console.writeln(`Derived - D: attribute: ${that.other}`);
        }
    });
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
