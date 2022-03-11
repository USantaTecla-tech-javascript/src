const { Console } = require("./console");

const console = new Console();
const object = createObject(7);
object.method();

function createObject(property) {
    const object = {
        property: property,
        other: 0
    };

    object.method = function () {
        private(object);
        console.writeln(`property: ${object.property} - other: ${object.other}`);
    }
    return object;

    function private(object){
        object.property++;
        object.other++;
    }
}
