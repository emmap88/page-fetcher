const request = require('request');
const fs = require('fs');
const readline = require('readline');

const args = process.argv.slice(2);
const url = args[0];
const filetoSave = args[1];


//function that uses program args to accept a url and downloads and saves the webpage
async function fetchAndSavePage() {
  request(url, (error, response, body) => {
    if (!error && response.statusCode == 200) {
      fs.writeFile(filetoSave, body, (err) => {
        if (err) {
          return console.log(`error: ${err}`);
        }
        console.log(`Downloaded and saved ${fs.statSync(filetoSave).size} bytes to ${filetoSave}`);
      });
    }
  });
}

fetchAndSavePage();