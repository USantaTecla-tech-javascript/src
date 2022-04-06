const { Console } = require("./console");

const console = new Console();
const object = new Clazz(7);
object.method();

function Clazz(property) {
    let other = 0;

    function private() {
        property++;
        other++;
    }

    this.method = function () {
        private();
        console.writeln(`property: ${property} - other: ${other}`);
    }

}
