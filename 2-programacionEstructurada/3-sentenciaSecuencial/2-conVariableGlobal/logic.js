let global = "inicialización global";
console.log(global);
{
  console.log("- Inicio secuencial");
  console.log(global);
  global += ", actualización local";
  console.log(global);
  console.log("- Fin secuencial");
}
console.log(global);
