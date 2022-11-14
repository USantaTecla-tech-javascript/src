const https = require('https');

getCountryInfo("ESP", showErrorOrCountry);
console.log("Petición realizada");
console.log("---");
getCountryInfo("XXX", showErrorOrCountry);
console.log("Petición realizada");
console.log("---");

function getCountryInfo(code, callback) {
  const url = `https://restcountries.com/v3.1/alpha/${code}`;
  https
    .get(url, (resp) => {
      let data = '';

      resp.on('data', (chunk) => {
        data += chunk;
      });

      resp.on('end', () => {
        if (resp.statusCode === 404){
          callback(new Error("País no encontrado"));
        } else {
          let country = JSON.parse(data)[0];
          callback(undefined, country);
        }
      });
    })
    .on("error", (err) => {
      callback(err);
    });
}

function showErrorOrCountry(err, country) {
  if (err !== undefined) {
    console.log("Error: " + err.message);
  } else {
    for (let key in country) {
      console.log(`${key}: ${country[key]}`);
    }
    console.log(`\n`);
  }
}


