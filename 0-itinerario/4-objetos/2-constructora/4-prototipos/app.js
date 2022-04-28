const { Console } = require("./console");

const console = new Console();
function Clazz(property) {
    this.property = property;
    this.other = 0;
}

Clazz.prototype.method = function () {
    private(this);
    console.writeln(`property: ${this.property} - other: ${this.other}`);
}

private = function (object) {
    object.property++;
    object.other++;
};

const o = new Clazz(7);
o.method();
