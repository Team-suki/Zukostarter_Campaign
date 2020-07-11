// find out a way to read created .csv file

// 1. createReadStream


const parse = require('csv-parse');
const fs = require('fs');

let headers;

fs.createReadStream(__dirname + '/../trial.csv')
  .pipe(
      parse({
          delimiter: ','
        })
      )
      .on('data', (dataRaw) => {
          headers = dataRaw;
        })
        .on('end', () => {
            console.log(headers);
          })

