const csvParse = require('fast-csv');
const fs = require('fs');
const { Client } = require('pg');

const dbCreds = require('../postgres.json');
const connectionString = `postgressql://${dbCreds.username}:${dbCreds.pwd}@localhost:${dbCreds.port}/sdc`;


const client = new Client({ connectionString })
var readStream = fs.createReadStream('../trial.csv');

client.connect();

// client.query('SELECT * from commitments', (err, res) => {
//     console.log(res.rows);
//     client.end();
// })

let headers = [];

var s = 1;
csvParse
  .parseStream(readStream, {headers: true})
  .on('data', function(dataRaw) {
    client.query('Insert ')
    headers.push(dataRaw.commitT1);
    s++;
  })
  .on('end', function() {
    console.log('Seeding Sucessful!');
    client.end();
  })


