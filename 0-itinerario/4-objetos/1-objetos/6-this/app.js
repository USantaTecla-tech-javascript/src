const { Console } = require("./console");

const console = new Console();
const o = createObject(7);
o.method();

function createObject(property) {
    return {
        property: property,
        other: 0,
        method: function () {
            private(this);
            console.writeln(`property: ${this.property} - other: ${this.other}`);
        }
    };

    function private(object) {
        object.property++;
        object.other++;
    }
}
