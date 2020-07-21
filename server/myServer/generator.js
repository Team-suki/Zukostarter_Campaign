const fs = require('fs');
const machine = require("./faker.js");
// Faker + Media Asset Generator




var storyHeaders = [
  'gif1', 'gif2', 'gif3', 'image1', 'image2', 'image3',
  'storyT1', 'storyT2', 'storyT3', 'storyT4', 'storyT5', 'storyText1', 'storyText2', 'storyText3', 'storyText4', 'storyText5'
];

var riskHeaders = ['riskT1', 'riskT2', 'riskT3', 'riskT4', 'riskT5', 'riskText1', 'riskText2', 'riskText3', 'riskText4', 'riskText5'];

var commitHeaders = ['commitT1', 'commitT2', 'commitT3', 'commitT4', 'commitT5', 'commitText1', 'commitText2', 'commitText3', 'commitText4', 'commitText5'];

function csvFormat(data) {
  return storyHeaders.reduce((acc, header, index) => {           // change
    if (item === 0) {
      if (index === storyHeaders.length - 1) {
        acc += header;
      } else {
        acc += header + ',';
      }
    } else {
      if (index === storyHeaders.length - 1) {
        acc += data[header];
      } else {
        acc += data[header] + ',';
      }
    }

    return acc;
  }, '');

}


// WriteStream
let writeStream = fs.createWriteStream('../siba.csv')                 // change
  .on('finsh', () => console.log('Finished'))
  .on('error', (err) => { console.log('error occured:', err)});

// Start Timer
let startTime = Date.now();

var item = 0;
var itemsLeft = 4; // 10000000

function writeToCSV() {
  let keepWriting = true;

  // while item is less than itemsLeft and writeStream.write(data, 'utf8')
  while (keepWriting && item <= itemsLeft) {
    keepWriting = writeStream.write(csvFormat(machine.generateStoryData(item)) + '\n', 'utf8');      // change
    item++;
  } // generateRiskData generateCommitData


  // exit while loop when keepWriting = false;
  // if itemsLeft > 0
  if (itemsLeft > item) {
    // drain so that it can keep writing
    writeStream.once('drain', writeToCSV);
  } else {
    // otherwise end it
    writeStream.end();
    let endTime = Date.now();
    console.log(`Time consumed: ${endTime - startTime} ms`)
  }
}

writeToCSV();


