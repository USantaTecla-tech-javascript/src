const K = 0;

let o = {
  propertye: `atributo del objeto o del module`
};

function f() {
  console.log(`cuerpo de la función f del module`);
};

class c {
  constructor() {
    console.log(`objeto de la clase c del module`);
  }
};

export default { K, o, f, c};
