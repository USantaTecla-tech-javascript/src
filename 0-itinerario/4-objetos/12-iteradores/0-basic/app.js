const { Console } = require("./console");

const console = new Console();
function getIterator(iterable) {
  let index = 0;

  return {
    next: function () {
      const item = {
        done: index == iterable.length
      };
      if (!item.done) {
        item.value = iterable[index];
        index++;
      }
      return item;
    }
  }
}

function writelnWhile(iterable) {
  const iterator = getIterator(iterable);
  let item = iterator.next();
  let msg = ``;
  while (!item.done) {
    msg += `${item.value}, `;
    item = iterator.next();
  }
  console.writeln(`:${msg.slice(0,msg.length-2)}.`);
}
writelnWhile([]);
writelnWhile([1, 2, 3, 4, 5]);
writelnWhile(``);
writelnWhile(`hola`);

function writelnDoWhile(iterable) {
  const iterator = getIterator(iterable);
  let item;
  let msg = ``;
  do {
    item = iterator.next();
    if (!item.done) {
      msg += `${item.value}, `;
    }
  } while (!item.done);
  console.writeln(`:${msg.slice(0,msg.length-2)}.`);
}
writelnDoWhile([]);
writelnDoWhile([1, 2, 3, 4, 5]);
writelnDoWhile(``);
writelnDoWhile(`hola`);

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
writelnSymbol([]);
writelnSymbol([1, 2, 3, 4, 5]);
writelnSymbol(``);
writelnSymbol(`hola`);
writelnSymbol(new Set());
writelnSymbol(new Set([1, 1, 2, 2, 3, 4, 5]));
writelnSymbol(new Map([]));
writelnSymbol(new Map([[1, `a`], [2, `b`], [3, `c`], [4, `d`], [5, `e`]]));

function writelnForOf(iterable) {
  let msg = ``;
  for (let item of [...iterable]) {
    msg += `${item}, `;
  }
  console.writeln(`:${msg.slice(0,msg.length-2)}.`);
}
writelnForOf([]);
writelnForOf([1, 2, 3, 4, 5]);
writelnForOf(``);
writelnForOf(`hola`);
writelnForOf(new Set());
writelnForOf(new Set([9, 9, 9, 8, 8, 7]));
writelnForOf(new Map([]));
writelnForOf(new Map([[1, `a`], [2, `b`], [3, `c`], [4, `d`], [5, `e`]]));


// Objetos_globales/TypedArray