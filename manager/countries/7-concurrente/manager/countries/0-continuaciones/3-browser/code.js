function getCountryInfo(code, callback) {
  let httpRequest = new XMLHttpRequest();
  httpRequest.open("GET", encodeURI(`https://restcountries.com/v3.1/alpha/${code}`), true);
  httpRequest.responseType = "json";
  httpRequest.onload = () => {
    if (httpRequest.status === 200) {
      let country = httpRequest.response[0];
      callback(undefined, country);
    } else {
      callback("Error status !== 200");
    }
  };
  httpRequest.send();
}

function showErrorOrCountry(err, country) {
  if (err) {
    console.log(err);
  } else {
    for (let key in country) {
      console.log(`${key}: ${country[key]}`);
    }
    console.log(`\n`);
  }
}

function main() {
  getCountryInfo("xxx", showErrorOrCountry);
  console.log("Petición realizada");
}

main();
