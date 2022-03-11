const { Console } = require("./console");

const console = new Console();
const object = new Clazz(7);
object.method();

function Clazz(property) {
    let that = {
        property: property,
        other: 0,
        private: function () {
            this.property++;
            this.other++;
        }
    };

    return {
            method: function () {
                that.private();
                console.writeln(`property: ${that.property} - other: ${that.other}`);
            }
        }

    }
