function getAverage(array, getValue) {
  let sum = 0;
  let count = 0;
  for (let item of array) {
    let value = getValue(item);
    if (typeof value == "number") {
      sum += value;
      count++;
    }
  }
  return sum / count;
}

function getArea(country) {
  return country.area;
}
console.log("Media de areas: ", 
  getAverage(countries, getArea));

function getPopulation(country) {
  return country.population;
}
console.log("Media de población: ", 
  getAverage(countries, getPopulation));

console.log("Media de areas: ", 
  getAverage(countries, function (country) {
    return country.area;
  }));
console.log("Media de población: ", 
  getAverage(countries, function (country) {
    return country.population;
  }));
console.log("Media de densidad: ", 
  getAverage(countries, 
    function (country) {
      if (typeof country.area != "number" 
          || typeof country.population != "number") {
        return null;
      }
      return country.population / country.area;
    }));

console.log("Media de areas: ", 
  getAverage(countries,
    country => country.area));
console.log("Media de población: ", 
  getAverage(countries,
    country => country.population));
console.log("Media de densidad: ", 
  getAverage(countries,
    country => typeof country.area != "number"
        || typeof country.population != "number" ?
      null
      : country.population / country.area));
