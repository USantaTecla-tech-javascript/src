const { Console } = require("./console");

const console = new Console();
const object = new Clazz(1);
object.publicInstanceMethod();
object.privateAttributeX = 666;
console.writeln(`object.privateAttributeX: ${object.privateAttributeX}`);
object.publicInstanceMethod();

function Clazz(privateAttributeX) {
    let privateAttributeY = 0;
    this.publicInstanceMethod = function () {
            privateFunction();
            console.writeln(`privateAttributeX: ${privateAttributeX} - privateAttributeY: ${privateAttributeY}`);
        }

    function privateFunction() {
        privateAttributeX++;
        privateAttributeY++;
    }
}
