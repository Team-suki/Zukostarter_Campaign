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


let tableName = 'story';
let queryCommand = "INSERT INTO story ( gif1, gif2, gif3, image1, image2, image3, storyt1, storyt2, storyt3, storyt4, storyt5, storytext1, storytext2, storytext3, storytext4, storytext5 ) VALUES (?";

let data = [];
csvParse.parseStream(readStream)
  .on('data', function(rowOfData) {
    data.push(rowOfData);
    })
  .on('end', function() {
    console.log(data);
    console.log('Seeding Sucessful!');
    })



