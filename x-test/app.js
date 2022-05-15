const { Console } = require("console-mpds");
const console = new Console();
const max = 5;//numero de filas y columnas? no se si entiendo el ejercicio.si se refiere a
//hacer un rectangulo o cuadrado hecho con cuadrados tendriamos que usar funciones.

for (i = 0; i < max; i++) {
  for (j = 0; j < max; j++) {
    console.write(i === 0 || j === 0 || i === max - 1 || j === max - 1 ? "* " : "· ");
  }
  console.writeln("");

}

if (x){
  y = false;
} else {
  y = true;
}

y = !x;
