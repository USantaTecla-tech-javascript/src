const { Console } = require("./console");

const console = new Console();
const object = createObject(7);
method(object);

function createObject(property) {
  return {
    property: property,
    other: 0
  };
}

function method(object) {
  private(object);
  console.writeln(`property: ${object.property} - other: ${object.other}`);
  
  function private(object){
    object.other++;
    object.property++;
  }

}



