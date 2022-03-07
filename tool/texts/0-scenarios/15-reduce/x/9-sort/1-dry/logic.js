function max(values) {
  let result = values[0];
  for (let value of values) {
    result = result < value ? value : result;
  }
  return result;
}

console.log("Maximo de numeros",
  max([1, 2, 3, 4]));

console.log("Maximo de areas",
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

function getLineList(values) {
  let result = "";
  for (let value of values) {
      result += "\n" + value;
  }
  return result;
}
console.log("Lista de nombres por linea: ",
  getLineList(
    countries.map(country => country.name)));

function getHTMLList(values) {
  let result = "<ul>";
  for (let value of values) {
      result += "\n\t<li>" + value +  "</li>";
  }
  return result + "\n</ul>";
}
console.log("Lista de nombres en HTML: ",
  getHTMLList(
    countries.map(country => country.name)));
