const https = require('https');

function getCountryInfo(code, callback) {
  const url = `https://restcountries.com/v3.1/alpha/${code}`;
  console.log("getCountryInfo " + url);
  https.get(url, (resp) => {
    let data = '';

    resp.on('data', (chunk) => {
      data += chunk;
    });

    resp.on('end', () => {
      let country = JSON.parse(data)[0];
      callback(undefined, country);
    });

  }).on("error", (err) => {
    callback(err);
  });
}

function showErrorOrCountry(err, country) {
  if (err) {
    console.log("Error: " + err.message);
  } else {
    for (let key in country) {
      console.log(`${key}: ${country[key]}`);
    }
    console.log(`\n`);
  }
}

getCountryInfo("ESP", showErrorOrCountry);
console.log("Petición realizada");
