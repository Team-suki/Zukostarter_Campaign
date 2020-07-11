const faker = require('faker');
const random = require('random');

const fs = require('fs');

// Faker + Media Asset Generator
function generateFakeData(itemID) {
  return {
    id: itemID,

    gif1: `https://sdc-media-data.s3-us-west-1.amazonaws.com/giphys/giphy+(${random.int(min=1, max=10)}).webp`,
    gif2: `https://sdc-media-data.s3-us-west-1.amazonaws.com/giphys/giphy+(${random.int(min=1, max=10)}).webp`,
    gif3: `https://sdc-media-data.s3-us-west-1.amazonaws.com/giphys/giphy+(${random.int(min=1, max=10)}).webp`,
    image1: `https://sdc-media-data.s3-us-west-1.amazonaws.com/Images/download+(${random.int(min=1, max=20)}).jpg`,
    image2: `https://sdc-media-data.s3-us-west-1.amazonaws.com/Images/download+(${random.int(min=1, max=20)}).jpg`,
    image3: `https://sdc-media-data.s3-us-west-1.amazonaws.com/Images/download+(${random.int(min=1, max=20)}).jpg`,
    storyT1: faker.fake('{{hacker.ingverb}} {{hacker.noun}}'),
    storyT2: faker.fake('{{hacker.ingverb}} {{hacker.noun}}'),
    storyT3: faker.fake('{{hacker.ingverb}} {{hacker.noun}}'),
    storyT4: faker.fake('{{hacker.ingverb}} {{hacker.noun}}'),
    storyT5: faker.fake('{{hacker.ingverb}} {{hacker.noun}}'),
    storyText1: faker.hacker.phrase(),
    storyText2: faker.hacker.phrase(),
    storyText3: faker.hacker.phrase(),
    storyText4: faker.hacker.phrase(),
    storyText5: faker.hacker.phrase(),

    riskT1: faker.hacker.noun(),
    riskT2: faker.hacker.noun(),
    riskT3: faker.hacker.noun(),
    riskT4: faker.hacker.noun(),
    riskT5: faker.hacker.noun(),
    riskText1: faker.hacker.phrase(),
    riskText2: faker.hacker.phrase(),
    riskText3: faker.hacker.phrase(),
    riskText4: faker.hacker.phrase(),
    riskText5: faker.hacker.phrase(),

    commitT1: faker.fake('{{hacker.ingverb}} {{hacker.noun}}'),
    commitT2: faker.fake('{{hacker.ingverb}} {{hacker.noun}}'),
    commitT3: faker.fake('{{hacker.ingverb}} {{hacker.noun}}'),
    commitT4: faker.fake('{{hacker.ingverb}} {{hacker.noun}}'),
    commitT5: faker.fake('{{hacker.ingverb}} {{hacker.noun}}'),
    commitText1: faker.hacker.phrase(),
    commitText2: faker.hacker.phrase(),
    commitText3: faker.hacker.phrase(),
    commitText4: faker.hacker.phrase(),
    commitText5: faker.hacker.phrase(),
  }
}

function csvFormat(data) {
  return headers.reduce((acc, header, index) => {
    if (item === 0) {
      if (index === headers.length - 1) {
        acc += header;
      } else {
        acc += header + ',';
      }
    } else {
      if (index === headers.length - 1) {
        acc += data[header];
      } else {
        acc += data[header] + ',';
      }
    }

    return acc;
  }, '');

}

// WriteStream
let writeStream = fs.createWriteStream('../data.csv')
  .on('finsh', () => console.log('Finished'))
  .on('error', (err) => { console.log('error occured:', err)});

// Start Timer
let startTime = Date.now();

var item = 0;
var itemsLeft = 10000000; // 10000000
var headers = [
  'id', 'gif1', 'gif2', 'gif3', 'image1', 'image2', 'image3',
  'storyT1', 'storyT2', 'storyT3', 'storyT4', 'storyT5', 'storyText1', 'storyText2', 'storyText3', 'storyText4', 'storyText5',
  'riskT1', 'riskT2', 'riskT3', 'riskT4', 'riskT5', 'riskText1', 'riskText2', 'riskText3', 'riskText4', 'riskText5',
  'commitT1', 'commitT2', 'commitT3', 'commitT4', 'commitT5', 'commitText1', 'commitText2', 'commitText3', 'commitText4', 'commitText5'
];

function writeToCSV() {
  let keepWriting = true;

  // while item is less than itemsLeft and writeStream.write(data, 'utf8')
  while (keepWriting && item <= itemsLeft) {
    keepWriting = writeStream.write(csvFormat(generateFakeData(item)) + '\n', 'utf8');
    item++;
  }

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



