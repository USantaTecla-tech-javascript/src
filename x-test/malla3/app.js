const { Console } = require(`console-mpds`);
const console = new Console();

const SIZE_OF_SIDE = 5;
const BORDER_CHARACTER = ` * `;
const INTERIOR_CHARACTER = ` · `;
const rows = console.readNumber(`Escribe el número de filas: `);
const columns = console.readNumber(`Escribe el número de columnas: `);
for (let i = 0; i <  SIZE_OF_SIDE * rows - (rows - 1); i++) {
    let isTopOrBottomRow = i % (SIZE_OF_SIDE - 1) === 0;
    for (let j = 0; j < SIZE_OF_SIDE * columns - (columns - 1); j++) {
        let isAsterisk = isTopOrBottomRow || j % (SIZE_OF_SIDE - 1) === 0;
        console.write(isAsterisk ? BORDER_CHARACTER : INTERIOR_CHARACTER);
    }
    console.writeln();
}
