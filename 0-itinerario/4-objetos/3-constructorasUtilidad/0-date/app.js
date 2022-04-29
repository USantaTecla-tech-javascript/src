const { Console } = require("./console");

const console = new Console();
console.writeln(Date.now()); // ?
let date = new Date(Date.now());
console.writeln(date.toString()); // ?
date = new Date(0);
console.writeln(date.toString()); // Thu Jan 01 1970 01:00:00 GMT+0100 (hora estándar de Europa central)
date = new Date('August 19, 1975 23:15:30');
console.writeln(date.toString()); // Tue Aug 19 1975 23:15:30 GMT+0200 (hora de verano de Europa central)
console.writeln(date.getTime()); // 177714930000
console.writeln(date.getDate()); // 19
console.writeln(date.getDay()); // 2
console.writeln(date.getHours()); // 23
date.setHours(1);
console.writeln(date.toString()); // Tue Aug 19 1975 01:15:30 GMT+0200 (hora de verano de Europa central)
date = new Date(Date.parse('August 19, 1975 23:15:30'));
console.writeln(date.toString()); // Tue Aug 19 1975 01:15:30 GMT+0200 (hora de verano de Europa central)
