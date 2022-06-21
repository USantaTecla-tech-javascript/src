const { Console } = require("./console");

const console = new Console();
const o = createObject(7);
o.method();

function createObject(property) {
    let returned = {
        property: property,
        other: 0,
        method: function () {
            private(returned);
            console.writeln(`property: ${returned.property} - other: ${returned.other}`);
        }
    };
    return returned;

    function private(object) {
        object.property++;
        object.other++;
    }
}
