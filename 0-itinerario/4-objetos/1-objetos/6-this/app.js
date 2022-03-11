const { Console } = require("./console");

const console = new Console();
const object = createObject(7);
object.method();

function createObject(property) {
    return {
        property: property,
        other: 0,
        method: function () {
            private(object);
            console.writeln(`property: ${object.property} - other: ${object.other}`);
        }
    };

    function private(object) {
        object.property++;
        object.other++;
    }
}
