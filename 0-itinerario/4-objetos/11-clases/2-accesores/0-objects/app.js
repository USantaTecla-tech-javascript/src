const { Console } = require("./console");

const console = new Console();

erson = {
    name: `Brendan`,
    surname: `Eich`,
    get completeName() {
      return `${this.name} ${this.surname}`
    },
    set completeName(nombre) {
      const words = nombre.split(` `);
      this.name = words[0] ?? ` `;
      this.surname = words[1] ?? ` `;
    }
  }
  
  console.writeln(person.name); // Brendan
  console.writeln(person.surname); // Eich
  console.writeln(person.completeName); // Brendan Eich
  person.completeName = `Luis Fernández`;  
  console.writeln(person.name); // Luis
  console.writeln(person.surname); // Fernández
  console.writeln(person.completeName); // Luis Fernández
  person.completeName = `Anonimo`;  
  console.writeln(person.name); // Anonimo
  console.writeln(person.surname); // 
  console.writeln(person.completeName); // Anonimo
  person.completeName = ``;  
  console.writeln(person.name); // 
  console.writeln(person.surname); // 
  console.writeln(person.completeName); // 

