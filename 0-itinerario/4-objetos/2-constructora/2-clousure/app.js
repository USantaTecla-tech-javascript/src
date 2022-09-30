const { Console } = require("./console");

const console = new Console();

function Clazz(privateAttributeX) {
    let privateAttributeY = 0;
    this.publicInstanceMethod = function () {
            privateFunction();
            console.writeln(`privateAttributeX: ${privateAttributeX} - privateAttributeY: ${privateAttributeY}`);
            console.writeln(`publicClazzAttribute: ${Clazz.publicClazzAttribute}`);
        }

    function privateFunction() {
        privateAttributeX++;
        privateAttributeY++;
    }
}

Clazz.publicClazzAttribute = "global";
Clazz.publicClazzMethod = function(value){
    Clazz.publicClazzAttribute = value;
}

const object = new Clazz(1);
object.publicInstanceMethod();
object.publicAttributeX = 666;
console.writeln(`object.publicAttributeX: ${object.publicAttributeX}`);
console.writeln(`Clazz.publicClazzAttribute: ${Clazz.publicClazzAttribute}`);
object.publicInstanceMethod();
Clazz.publicClazzMethod("nuevo");
object.publicInstanceMethod();
