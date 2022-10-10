const { Console } = require("./console");

const console = new Console();

function Base(parameter) {
    this.attribute = parameter;
}

Base.prototype.methodA = function () {
    console.writeln(`Base - A: attribute: ${this.attribute}`);
};

Base.prototype.methodB = function () {
    console.writeln(`Base - B: attribute: ${this.attribute}`);
};

Base.prototype.methodC = function () {
    console.writeln(`Base - C: attribute: ${this.attribute}`);
};

function Derived(parameter, other) {
    Base.call(this, parameter);
    this.other = other;
}

Derived.prototype = Object.create(Base.prototype);
Derived.prototype.constructor = Derived;

Derived.prototype.methodB = function () {
    console.writeln(`Derived - B: other: ${this.other}`);
    Base.prototype.methodB.call(this);
};

Derived.prototype.methodC = function () {
    console.writeln(`Derived - C: other: ${this.other}`);
};

Derived.prototype.methodD = function () {
    console.writeln(`Derived - D: other: ${this.other}`);
};

let object = new Base(`base`);
object.methodA();
object.methodB();
object.methodC();
console.writeln(object instanceof Base);
console.writeln(object instanceof Derived);

object = new Derived(`derived`, `specializations`);
object.methodA();
object.methodB();
object.methodC();
object.methodD();
console.writeln(object instanceof Base);
console.writeln(object instanceof Derived);
