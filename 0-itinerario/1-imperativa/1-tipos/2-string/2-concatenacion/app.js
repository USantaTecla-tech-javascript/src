const { Console } = require("./console");

const console = new Console();
console.writeln("Buenas" + 'Tardes'); // BuenasTardes
console.writeln("Buenas " + 'Tardes');  // Buenas Tardes
console.writeln("Buenas " + ' Tardes');  // Buenas  Tardes
console.writeln("1" + "2" + "3" + "...");  // 123...

console.writeln("Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n" +
  "Donec rhoncus sollicitudin enim vitae tempor.\n" +
  "Nullam dui lorem, vulputate varius sapien ac, malesuada dictum metus.\n" +
  "...");

console.writeln(
"Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n\
Donec rhoncus sollicitudin enim vitae tempor.\n\
Nullam dui lorem, vulputate varius sapien ac, malesuada dictum metus.\n\
...");
