const { Console } = require("./console");

const console = new Console();

function Clazz(parameter) {
    this.publicAttributeX = parameter;
    this.publicAttributeY = 0;
}

Clazz.prototype.publicInstanceMethod = function () {
    privateFunction(this);
    console.writeln(`publicAttributeX: ${this.publicAttributeX} - publicAttributeY: ${this.publicAttributeY}`);

    function privateFunction(object) {
        object.publicAttributeX++;
        object.publicAttributeY++;
    }
}

const object = new Clazz(1);
object.publicInstanceMethod();
object.publicAttributeX = 666;
console.writeln(`object.publicAttributeX: ${object.publicAttributeX}`);
object.publicInstanceMethod();

