const { Console } = require("./console");

const console = new Console();
const object = createObject(1);
object.publicInstanceMethod();
object.publicAttributeX = 666;
console.writeln(`object.publicAttributeX: ${object.publicAttributeX}`);
object.publicInstanceMethod();

function createObject(parameter) {
    return {
        publicAttributeX: parameter,
        publicAttributeY: 0,
        publicInstanceMethod: function () {
            privateFunction(this);
            console.writeln(`publicAttributeX: ${this.publicAttributeX} - publicAttributeY: ${this.publicAttributeY}`);
        }
    };

    function privateFunction(object) {
        object.publicAttributeX++;
        object.publicAttributeY++;
    }
}
