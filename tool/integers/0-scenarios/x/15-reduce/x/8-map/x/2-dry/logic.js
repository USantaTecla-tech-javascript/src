function getAreaAverage(countries) {
  return getAverage(getAreas(countries));
}
console.log("Media de areas: ", 
  getAreaAverage(countries));

function getPopulationAverage(countries) {
  return getAverage(getPopulations(countries));
}
console.log("Media de población: ", 
  getPopulationAverage(countries));

function getAverage(amounts) {
  let sum = 0;
  let count = 0;
  for (let amount of amounts) {
    if (typeof amount == "number") {
      sum += amount;
      count++;
    }
  }
  return sum / count;
}

function getAreas(countries) {
  let result = [];
  for (let country of countries) {
    result.push(country.area);
  }
  return result;
}
console.log(getAreas(countries));

function getPopulations(countries) {
  let result = [];
  for (let country of countries) {
    result.push(country.population);
  }
  return result;
}
console.log(getPopulations(countries));
