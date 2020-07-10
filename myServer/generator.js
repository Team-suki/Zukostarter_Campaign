const faker = require('faker');
const random = require('random');

const fs = require('fs');

// Faker + Media Asset Generator
function generateFakeData() {
  return {
    gif1: `https://sdc-media-data.s3-us-west-1.amazonaws.com/giphys/giphy+(${random.int(min=1, max=10)}).webp`,
    gif2: `https://sdc-media-data.s3-us-west-1.amazonaws.com/giphys/giphy+(${random.int(min=1, max=10)}).webp`,
    gif3: `https://sdc-media-data.s3-us-west-1.amazonaws.com/giphys/giphy+(${random.int(min=1, max=10)}).webp`,
    image1: `https://sdc-media-data.s3-us-west-1.amazonaws.com/Images/download+(${random.int(min=1, max=20)}).jpg`,
    image2: `https://sdc-media-data.s3-us-west-1.amazonaws.com/Images/download+(${random.int(min=1, max=20)}).jpg`,
    image3: `https://sdc-media-data.s3-us-west-1.amazonaws.com/Images/download+(${random.int(min=1, max=20)}).jpg`,
    storyTitle1: faker.fake('{{hacker.ingverb}} {{hacker.noun}}'),
    storyTitle2: faker.fake('{{hacker.ingverb}} {{hacker.noun}}'),
    storyTitle3: faker.fake('{{hacker.ingverb}} {{hacker.noun}}'),
    storyTitle4: faker.fake('{{hacker.ingverb}} {{hacker.noun}}'),
    storyTitle5: faker.fake('{{hacker.ingverb}} {{hacker.noun}}'),
    storyText1: faker.fake('{{hacker.phrase}} {{hacker.phrase}}'),
    storyText2: faker.fake('{{hacker.phrase}} {{hacker.phrase}}'),
    storyText3: faker.fake('{{hacker.phrase}} {{hacker.phrase}}'),
    storyText4: faker.fake('{{hacker.phrase}} {{hacker.phrase}}'),
    storyText5: faker.fake('{{hacker.phrase}} {{hacker.phrase}}'),

    riskTitle1: faker.hacker.noun(),
    riskTitle2: faker.hacker.noun(),
    riskTitle3: faker.hacker.noun(),
    riskTitle4: faker.hacker.noun(),
    riskTitle5: faker.hacker.noun(),
    riskText1: faker.fake('{{hacker.phrase}} {{hacker.phrase}}'),
    riskText2: faker.fake('{{hacker.phrase}} {{hacker.phrase}}'),
    riskText3: faker.fake('{{hacker.phrase}} {{hacker.phrase}}'),
    riskText4: faker.fake('{{hacker.phrase}} {{hacker.phrase}}'),
    riskText5: faker.fake('{{hacker.phrase}} {{hacker.phrase}}'),

    commitTitle1: faker.fake('{{hacker.ingverb}} {{hacker.noun}}'),
    commitTitle2: faker.fake('{{hacker.ingverb}} {{hacker.noun}}'),
    commitTitle3: faker.fake('{{hacker.ingverb}} {{hacker.noun}}'),
    commitTitle4: faker.fake('{{hacker.ingverb}} {{hacker.noun}}'),
    commitTitle5: faker.fake('{{hacker.ingverb}} {{hacker.noun}}'),
    commitText1: faker.fake('{{hacker.phrase}} {{hacker.phrase}}'),
    commitText2: faker.fake('{{hacker.phrase}} {{hacker.phrase}}'),
    commitText3: faker.fake('{{hacker.phrase}} {{hacker.phrase}}'),
    commitText4: faker.fake('{{hacker.phrase}} {{hacker.phrase}}'),
    commitText5: faker.fake('{{hacker.phrase}} {{hacker.phrase}}')
  }
}


// WriteStream
let writeStream = fs.createWriteStream('../example.csv')
  .on('error', (err) => { console.log('error occured:', err)});

// Start Timer
let startTime = Date.now();

var itemsLeft = 3; // 10,000,000

function writeToCSV() {
  let keepWriting = true;

  // while item is less than itemsLeft and writeStream.write(data, 'utf8')
  while (keepWriting && 0 < itemsLeft) {
    keepWriting = writeStream.write(JSON.stringify(generateFakeData()) + '\n', 'utf8');
    itemsLeft--;
  }

  // exit while loop when keepWriting = false;
  // if itemsLeft > 0
  if (itemsLeft > 0) {
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



