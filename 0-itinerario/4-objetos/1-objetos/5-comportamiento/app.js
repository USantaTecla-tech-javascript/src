const { Console } = require("./console");

const console = new Console();

function createObject(parameter) {
    let returned = {
        publicAttributeX: parameter,
        publicAttributeY: 0,
        publicInstanceMethod: function () {
            privateFunction(returned);
            console.writeln(`publicAttributeX: ${returned.publicAttributeX} - publicAttributeY: ${returned.publicAttributeY}`);
        }
    };
    return returned;

    function privateFunction(object) {
        object.publicAttributeX++;
        object.publicAttributeY++;
    }
}

const object = createObject(1);
object.publicInstanceMethod();
object.publicAttributeX = 666;
console.writeln(`object.publicAttributeX: ${object.publicAttributeX}`);
object.publicInstanceMethod();