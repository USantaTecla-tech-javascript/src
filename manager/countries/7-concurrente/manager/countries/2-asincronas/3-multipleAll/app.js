const https = require('https');

function getCountryInfo(code) {
  return new Promise((resolve, reject) => {
    const url = `https://restcountries.com/v3.1/alpha/${code}`;
    https.get(url, (resp) => {
      let data = '';

      resp.on('data', (chunk) => {
        data += chunk;
      });

      resp.on('end', () => {
        let country = JSON.parse(data)[0];
        console.log("!!!!!!!!!" + country.name.common);
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
  let bordersPromises = [];
  for (let code of country.borders) {
    bordersPromises.push(getCountryInfo(code));
  }
  return await Promise.all(bordersPromises);
}

async function main() {
  try {
    let countries = await getBordersInfo("ESP");
    for (let country of countries) {
      showErrorOrCountry(null, country);
    }
  } catch (err) {
    console.log("Error: " + err.message);
  };
}

main();
console.log("Peticion realizada");
