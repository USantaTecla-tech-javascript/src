const https = require('https');

function getCountryInfo(code) {
  return new Promise((resolve, reject) => {
    const url = `https://restcountries.com/v3.1/alpha/${code}`;
    console.log("getCountryInfo " + url);
    https.get(url, (resp) => {
      let data = '';

      resp.on('data', (chunk) => {
        data += chunk;
      });

      resp.on('end', () => {
        let country = JSON.parse(data)[0];
        resolve(country);
      });

    }).on("error", (err) => {
      reject(err);
    });
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

async function getBordersInfo(code) {
  let country = await getCountryInfo(code);
  return Promise.all(country.borders.map(code => getCountryInfo(code)));
}

// function showErrorOrCountries(err, countries) {
//   if (err) {
//     console.log("Error: " + err.message);
//   } else {
//     for (let country of countries) {
//       showErrorOrCountry(null, country);
//     }
//   }
// }

async function main() {
  try {
    let countries = await getBordersInfo("ESP");
    for (let country of countries) {
      showErrorOrCountry(null, country);
    }
  } catch (err) {
    console.log("Error: " + err.message);
  };
  // console.log("Peticion realizada"); no tiene hueco
}

main();
