const { Console } = require("./console");

const console = new Console();
const o = createObject(7);
o.method();

function createObject(property) {
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
