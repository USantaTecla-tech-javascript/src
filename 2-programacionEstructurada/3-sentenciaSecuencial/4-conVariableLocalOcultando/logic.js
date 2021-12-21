let global = "inicialización global";
console.log(global);
{
  console.log("- Inicio secuencial");
  let global = "Inicializacion local";
  console.log(global);
  global += ", actualizacion local";
  console.log(global);
  console.log("- Fin secuencial");
}
console.log(global);
