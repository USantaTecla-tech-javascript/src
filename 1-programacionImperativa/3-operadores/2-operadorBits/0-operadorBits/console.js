let { input } = require('console-input');

class Console {
  constructor() {

  }
 readString(title) {
    let input2 = null;
    let ok = false;
    do {
      this.write(title);
      try {
        input2 = input(" ");
        ok = true;
      } catch (ex) {
        this.writeError('characte string');
      }
    } while (!ok);
    return input2;
  }

  readInt(title) {
    let input = 0;
    let ok = false;
    do {
      try {
        input = parseInt(this.readString(title));
        ok = true;
      } catch (ex) {
        this.writeError('integer');
      }
    } while (!ok);
    return input;
  }

  readChar(title) {
    let charValue = 32;
    let ok = false;
    do {
      let input = this.readString(title);
      if (input.length !== 1) {
        this.writeError('character');
      } else {
        charValue = input.charAt(0);
        ok = true;
      }
    } while (!ok);
    return charValue;
  }

  writeln$0() {
    console.log();
  }

  writeln$1(string) {
    console.log(string);
  }

  writeln(...args$) {
    switch (args$.length) {
      case 0:
        return this.writeln$0(...args$);
      case 1:
        return this.writeln$1(...args$);
    }
  }

  write(character) {
    process.stdout.write(`${character}`)
  }
  
  writeError(format) {
    console.log('FORMAT ERROR! ' + 'Enter a ' + format + ' formatted value.');
  }
}

module.exports.Console = Console;
