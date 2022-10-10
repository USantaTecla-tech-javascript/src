const { Console } = require("./console");

const console = new Console();

class Person {

  #name;
  #surname;

    constructor(string){
      this.completeName = string;
    }

    get completeName() {
      return `${this.#name} ${this.#surname}`
    }

    set completeName(string) {
      const words = string.split(` `);
      this.#name = words[0] ?? ` `;
      this.#surname = words[1] ?? ` `;
    }

  }
  
  let javascript = new Person(`Eich Brendan`)
  console.writeln(javascript.completeName); 
  let java = new Person(``);
  java.completeName = `James Gosling`;  
  console.writeln(java.completeName); 


