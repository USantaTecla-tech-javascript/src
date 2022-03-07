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

function map(array, transform) {
  let result = [];
  for (let item of array) {
    result.push(transform(item));
  }
  return result;
}

console.log("Media de areas: ", 
  getAverage(
    map(countries, 
      function (country) {
        return country.area;
      })));
console.log("Media de población: ", 
  getAverage(
    map(countries, 
      function (country) {
        return country.population;
      })));
