const { Console } = require("./console");

const console = new Console();
const AGE_MAJORITY = 18;
let age = +console.readInt("Qué años tienes? ");
let isAdult = age >= AGE_MAJORITY;
console.writeln("Mayor de edad? " + isAdult);
