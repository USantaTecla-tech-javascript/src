const { Console } = require("./console");

const console = new Console();
const object = createObject(1);
object.publicInstanceMethod();
object.privateAttributeX = 666;
console.writeln(`object.privateAttributeX: ${object.privateAttributeX}`);
object.publicInstanceMethod();

function createObject(parameter) {
    let that = {
        privateAttributeX: parameter,
        privateAttributeY: 0,
        privateMethod: function () {
            this.privateAttributeX++;
            this.privateAttributeY++;
        }
    }
    return {
        publicInstanceMethod: function () {
            that.privateMethod();
            console.writeln(`privateAttributeX: ${that.privateAttributeX} - privateAttributeY: ${that.privateAttributeY}`);
        }
    }
};


