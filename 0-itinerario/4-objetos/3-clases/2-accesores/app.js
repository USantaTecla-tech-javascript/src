const { Console } = require("./console");

const console = new Console();

let persona = {
    nombre: 'Yeison',
    apellido: 'Daza',
    get nombreCompleto() {
      return `${nombre} ${apellido}`
    },
    set nombreCompleto(nom) {
      const palabras = nom.split(' ');
      this.nombre = palabras[0] || '';
      this.apellido = palabras[1] || '';
    }
  }
  
  console.writeln(persona.nombre); // Yeison
  console.writeln(persona.apellido); // Daza
  console.writeln(persona.nombreCompleto); // Yeison Daza
  persona.nombreCompleto = 'Camilo Sanchez';  
  console.writeln(persona.nombre); // Camilo
  console.writeln(persona.apellido); // Sanchez
  console.writeln(persona.nombreCompleto); // Camilo Sanchez

