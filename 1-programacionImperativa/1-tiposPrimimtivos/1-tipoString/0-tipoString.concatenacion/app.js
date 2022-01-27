const { Console } = require("./console");

const console = new Console();
console.writeln("Buenas" + 'Tardes'); // BuenasTardes
console.writeln("Buenas " + 'Tardes');  // Buenas Tardes
console.writeln("Buenas " + ' Tardes');  // Buenas  Tardes
console.writeln("1" + "2" + "3" + "...");  // 123...
