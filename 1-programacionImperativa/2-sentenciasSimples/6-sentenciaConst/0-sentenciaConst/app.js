const { Console } = require("./console");

const console = new Console();
const AGE_MAJORITY = 18;
let age = +console.readNumber("Qué años tienes? "); // Qué años tienes?  18
let isAdult = age >= AGE_MAJORITY;
console.writeln("Mayor de edad? " + isAdult); // Mayor de edad? true
