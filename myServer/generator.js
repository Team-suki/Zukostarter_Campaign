const faker = require('faker');
const random = require('random');

const fs = require('fs');
// figure out some npm to write to csv file

var randomgif = [
  'https://sdc-media-data.s3-us-west-1.amazonaws.com/giphys/giphy+(1).webp',
  'https://sdc-media-data.s3-us-west-1.amazonaws.com/giphys/giphy+(2).webp',
  'https://sdc-media-data.s3-us-west-1.amazonaws.com/giphys/giphy+(3).webp',
  'https://sdc-media-data.s3-us-west-1.amazonaws.com/giphys/giphy+(4).webp',
  'https://sdc-media-data.s3-us-west-1.amazonaws.com/giphys/giphy+(5).webp',
  'https://sdc-media-data.s3-us-west-1.amazonaws.com/giphys/giphy+(6).webp',
  'https://sdc-media-data.s3-us-west-1.amazonaws.com/giphys/giphy+(7).webp',
  'https://sdc-media-data.s3-us-west-1.amazonaws.com/giphys/giphy+(8).webp',
  'https://sdc-media-data.s3-us-west-1.amazonaws.com/giphys/giphy+(9).webp',
  'https://sdc-media-data.s3-us-west-1.amazonaws.com/giphys/giphy+(10).webp'
];
var randomImg = [
  'https://sdc-media-data.s3-us-west-1.amazonaws.com/Images/download+(1).jpg',
  'https://sdc-media-data.s3-us-west-1.amazonaws.com/Images/download+(2).jpg',
  'https://sdc-media-data.s3-us-west-1.amazonaws.com/Images/download+(3).jpg',
  'https://sdc-media-data.s3-us-west-1.amazonaws.com/Images/download+(4).jpg',
  'https://sdc-media-data.s3-us-west-1.amazonaws.com/Images/download+(5).jpg',
  'https://sdc-media-data.s3-us-west-1.amazonaws.com/Images/download+(6).jpg',
  'https://sdc-media-data.s3-us-west-1.amazonaws.com/Images/download+(7).jpg',
  'https://sdc-media-data.s3-us-west-1.amazonaws.com/Images/download+(8).jpg',
  'https://sdc-media-data.s3-us-west-1.amazonaws.com/Images/download+(9).jpg',
  'https://sdc-media-data.s3-us-west-1.amazonaws.com/Images/download+(10).jpg',
  'https://sdc-media-data.s3-us-west-1.amazonaws.com/Images/download+(11).jpg',
  'https://sdc-media-data.s3-us-west-1.amazonaws.com/Images/download+(12).jpg',
  'https://sdc-media-data.s3-us-west-1.amazonaws.com/Images/download+(13).jpg',
  'https://sdc-media-data.s3-us-west-1.amazonaws.com/Images/download+(14).jpg',
  'https://sdc-media-data.s3-us-west-1.amazonaws.com/Images/download+(15).jpg',
  'https://sdc-media-data.s3-us-west-1.amazonaws.com/Images/download+(16).jpg',
  'https://sdc-media-data.s3-us-west-1.amazonaws.com/Images/download+(17).jpg',
  'https://sdc-media-data.s3-us-west-1.amazonaws.com/Images/download+(18).jpg',
  'https://sdc-media-data.s3-us-west-1.amazonaws.com/Images/download+(19).jpg',
  'https://sdc-media-data.s3-us-west-1.amazonaws.com/Images/download+(20).jpg',
];

let startTime = Date.now();

let writeStream = fs.createWriteStream('../example.csv')
  .on('error', (err) => { console.log('error occured:', err)});


var tenMil = 10000000;
for (let i = 0; i < tenMil; i++) {
  var data = {
    story: {
        gif1: randomgif[random.int(min=0, max=randomgif.length - 1)],
        gif2: randomgif[random.int(min=0, max=randomgif.length - 1)],
        gif3: randomgif[random.int(min=0, max=randomgif.length - 1)],
        image1: randomImg[random.int(min=0, max=randomImg.length - 1)],
        image2: randomImg[random.int(min=0, max=randomImg.length - 1)],
        image3: randomImg[random.int(min=0, max=randomImg.length - 1)],
        title1: faker.fake('{{hacker.ingverb}} {{hacker.noun}}'),
        title2: faker.fake('{{hacker.ingverb}} {{hacker.noun}}'),
        title3: faker.fake('{{hacker.ingverb}} {{hacker.noun}}'),
        title4: faker.fake('{{hacker.ingverb}} {{hacker.noun}}'),
        title5: faker.fake('{{hacker.ingverb}} {{hacker.noun}}'),
        text1: faker.fake('{{hacker.phrase}} {{hacker.phrase}}'),
        text2: faker.fake('{{hacker.phrase}} {{hacker.phrase}}'),
        text3: faker.fake('{{hacker.phrase}} {{hacker.phrase}}'),
        text4: faker.fake('{{hacker.phrase}} {{hacker.phrase}}'),
        text5: faker.fake('{{hacker.phrase}} {{hacker.phrase}}')
      },
    risks: {
      title1: faker.hacker.noun(),
      title2: faker.hacker.noun(),
      title3: faker.hacker.noun(),
      text1: faker.fake('{{hacker.phrase}} {{hacker.phrase}}'),
      text2: faker.fake('{{hacker.phrase}} {{hacker.phrase}}'),
      text3: faker.fake('{{hacker.phrase}} {{hacker.phrase}}')
    },
    commitment: {
      title1: faker.fake('{{hacker.ingverb}} {{hacker.noun}}'),
      title2: faker.fake('{{hacker.ingverb}} {{hacker.noun}}'),
      title3: faker.fake('{{hacker.ingverb}} {{hacker.noun}}'),
      text1: faker.fake('{{hacker.phrase}} {{hacker.phrase}}'),
      text2: faker.fake('{{hacker.phrase}} {{hacker.phrase}}'),
      text3: faker.fake('{{hacker.phrase}} {{hacker.phrase}}')
    }
  }

  if (i === 0) {
    data = "[" + JSON.stringify(data) + ",";
  } else if (i === tenMil - 1) {
    data = JSON.stringify(data) + "]";
  } else {
    data = JSON.stringify(data) + ",";
  }

  writeStream.write(JSON.stringify(data));
}

writeStream.end();

let endTime = Date.now();
console.log('start:', startTime);
console.log('end:', endTime)
console.log(endTime - startTime)

  // accumulate the data
  // use the csv file writer npm to write to file


