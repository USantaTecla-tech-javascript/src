const { Console } = require("./console");

const console = new Console();

function createObject(privateAttributeX) {
  let privateAttributeY = 0;
  return {
    publicInstanceMethod: function () {
      privateFunction();
      console.writeln(`privateAttributeX: ${privateAttributeX} - privateAttributeY: ${privateAttributeY}`);
    }
  };

  function privateFunction() {
    privateAttributeX++;
    privateAttributeY++;
  }
}

const object = createObject(1);
object.publicInstanceMethod();
object.privateAttributeX = 666;
console.writeln(`object.privateAttributeX: ${object.privateAttributeX}`); // Warning!!!
object.publicInstanceMethod();
