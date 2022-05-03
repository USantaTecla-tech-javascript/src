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
