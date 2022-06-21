const { Console } = require("./console");

const console = new Console();
const o = new Clazz(7);
o.method();

function Clazz(property) {
    this.property = property;
    this.other = 0;
    this.method = function () {
        private(this);
        console.writeln(`property: ${this.property} - other: ${this.other}`);
    }

    function private(object) {
        object.property++;
        object.other++;
    }

}
