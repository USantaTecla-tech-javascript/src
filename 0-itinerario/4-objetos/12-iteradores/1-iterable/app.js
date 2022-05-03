const { Console } = require("./console");

const console = new Console();
function writelnSymbol(iterable) {
  const iterator = iterable[Symbol.iterator]();
  let item = iterator.next();
  let msg = ``;
  while (!item.done) {
    msg += `${item.value}, `;
    item = iterator.next();
  } 
  console.writeln(`:${msg.slice(0,msg.length-2)}.`);
}
writelnSymbol([]); // :.
writelnSymbol([1, 2, 3, 4, 5]); // :1, 2, 3, 4, 5.
writelnSymbol(``); // :.
writelnSymbol(`hola`); // :h, o, l, a.
writelnSymbol(new Set()); // :.
writelnSymbol(new Set([1, 1, 2, 2, 3, 4, 5])); // :1, 2, 3, 4, 5.
writelnSymbol(new Map([])); // :.
writelnSymbol(new Map([[1, `a`], [2, `b`], [3, `c`], [4, `d`], [5, `e`]])); // :1,a, 2,b, 3,c, 4,d, 5,e.

function writelnForOf(iterable) {
  let msg = ``;
  for (let item of [...iterable]) {
    msg += `${item}, `;
  }
  console.writeln(`:${msg.slice(0,msg.length-2)}.`);
}
writelnForOf([]); // :.
writelnForOf([1, 2, 3, 4, 5]); // :1, 2, 3, 4, 5.
writelnForOf(``); // :.
writelnForOf(`hola`); // :h, o, l, a.
writelnForOf(new Set()); // :.
writelnForOf(new Set([9, 9, 9, 8, 8, 7])); // :9, 8, 7.
writelnForOf(new Map([])); // :.
writelnForOf(new Map([[1, `a`], [2, `b`], [3, `c`], [4, `d`], [5, `e`]])); // :1,a, 2,b, 3,c, 4,d, 5,e.

let array;
array = [...new Set([9, 9, 9, 8, 8, 7])];
writelnForOf(array); // :9, 8, 7.
array = [...new Map([[1, `a`], [2, `b`], [3, `c`], [4, `d`], [5, `e`]])];
writelnForOf(array); // :1,a, 2,b, 3,c, 4,d, 5,e.


















