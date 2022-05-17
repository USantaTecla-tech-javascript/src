const { Console } = require("console-mpds");
const console = new Console();

const phrase = console.readString("Escribe una frase: ");

let characters = [[`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `Ñ`, `O`, `P`, `Q`, `R`, `S`, `T`, `U`, `V`, `W`, `X`, `Y`, `Z`],
                  [`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`, `j`, `k`, `l`, `m`, `n`, `ñ`, `o`, `p`, `q`, `r`, `s`, `t`, `u`, `v`, `w`, `x`, `y`, `z`]];
let vowels = [[`á`, `é`, `í`, `ó`, `ú`],
              [`a`, `e`, `i`, `o`, `u`]];
let phraseWithOutSpaces = '';
let lengthWithOutSpaces = 0;
let index = 0;
let character;
do {
    character = phrase[index];
    if (character != undefined) {
        let found = false;
        if (character != ` `) {
            for (let i = 0; !found && i < characters[0].length; i++) {
                if (character == characters[0][i]) {
                    character = characters[1][i];
                    found = true;
                }
            }
            found = false;
            for (let i = 0; !found && i < vowels[0].length; i++) {
                if (character == vowels[0][i]) {
                    character = vowels[1][i];
                    found = true;
                }
            }
            phraseWithOutSpaces += character;
            lengthWithOutSpaces++;
        }
    }
    index++;
} while (character != undefined)
index = 0;
let isPalindrome;
do {
    isPalindrome = phraseWithOutSpaces[index] === phraseWithOutSpaces[lengthWithOutSpaces - 1 - index];
    index++;

} while (isPalindrome && index < lengthWithOutSpaces / 2);
console.writeln(`La frase ${phrase} ${isPalindrome ? `` : `no `}es palíndromo`);
