let global = "inicialización global";
console.log(global);
{
  console.log("- Inicio secuencial");
  let local = "Inicializacion local";
  console.log(local);
  local += ", actualizacion local";
  console.log(local);
  console.log(global);
  global += ", actualización local";
  console.log(global);
  console.log("- Fin secuencial");
}
console.log(global);
