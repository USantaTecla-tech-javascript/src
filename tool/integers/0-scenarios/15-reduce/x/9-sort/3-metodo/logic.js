function max(values) {
  return values.reduce( 
    (left, right) => left > right ? left : right, values[0]);
}

console.log("Maximo de numeros: ", 
  max([1, 2, 3, 4]));

console.log("Maximo de areas: ",
  max(
    countries
      .map(country => country.area)));

console.log("Maximo de areas de la región asiatica: ",
  max(
    countries
      .filter(country => country.region == "Asia")
      .map(country => country.area)));

console.log("El maximo de las areas de la región asiatica: ",
  countries
    .filter(country => country.area == max(
      countries
        .filter(country => country.region == "Asia")
        .map(country => country.area)))[0].name);


console.log("Lista de nombres por linea: ",
  countries
    .map(country => country.name)
    .reduce((acum, item) => acum + "\n" + item, ""));

console.log("Lista de nombres en HTML: ",
  countries
    .map(country => country.name)
    .reduce((acum, item) => acum + "\n\t<li>" + item + "</li>", "<ul>")
  + "\n</ul>");

