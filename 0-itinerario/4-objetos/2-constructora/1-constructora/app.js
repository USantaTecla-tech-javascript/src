const { Console } = require("./console");

const console = new Console();
const object = new Clazz(7);
object.method();

function Clazz(property) {
    this.property = property;
    this.other = 0;
    this.method = function () {
        private(object);
        console.writeln(`property: ${object.property} - other: ${object.other}`);
    }

    function private(object) {
        object.property++;
        object.other++;
    }

}
