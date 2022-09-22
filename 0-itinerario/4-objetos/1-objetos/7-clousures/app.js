const { Console } = require("./console");

const console = new Console();
const object = createObject(1);
object.publicInstanceMethod();
object.privateAttributeX = 666;
console.writeln(`object.privateAttributeX: ${object.privateAttributeX}`); // Warning!!!
object.publicInstanceMethod();

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


// const { Console } = require("./console");

// const console = new Console();
// const object = createObject(7);
// object.method();

// function createObject(property) {
//   let other = 0;

//   return {
//     method: function () {
//       private(this);
//       console.writeln(`property: ${property} - other: ${other}`);
//     }
//   };

//   function private(object) {
//     property++;
//     other++;
//   }
// }
