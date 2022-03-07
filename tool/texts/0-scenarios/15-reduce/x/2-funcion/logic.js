function reduce(array, combine, start) {
  let acum = start;
  for (let item of array) {
    acum = combine(acum, item);
  }
  return acum;
}

function max(values) {
  return reduce(values, 
    (acum, value) => acum > value ? acum : value, values[0]);
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
  reduce(
    countries.map(country => country.name),
    (acum, value) => acum + "\n" + value, ""));

console.log("Lista de nombres en HTML: ",
  reduce(
    countries.map(country => country.name),
    (acum, value) => acum + "\n\t<li>" + value + "</li>", "<ul>")
  + "\n</ul>");

  function acojoGen(countries, format){
    const FORMATS = {
      TXT : {
        start : "",
        combine : (acum, value) => acum + "\n" + value,
        finish : ""
      },
      HTML : {
        start : "<ul>",
        combine : (acum, value) => acum + "\n\t<li>" + value + "</li>",
        finish : "\n</ul>"
      }
    }
    return reduce(
      countries.map(country => country.name),
        FORMATS[format].combine, FORMATS[format].start)
    + FORMATS[format].finish;
  }
