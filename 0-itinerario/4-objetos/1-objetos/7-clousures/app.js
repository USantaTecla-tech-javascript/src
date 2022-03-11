const { Console } = require("./console");

const console = new Console();
const object = createObject(7);
object.method();

function createObject(property) {
  let other = 0;

  return {
    method: function () {
      private(this);
      console.writeln(`property: ${property} - other: ${other}`);
    }
  };

  function private(object) {
    property++;
    other++;
  }
}
