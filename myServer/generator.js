const fakeData = require('./faker.js');

// figure out some npm to write to csv file

var randomgif = [];
var randomImage = [];

// make three different objects and import it to generator.js
// store it into an object
// {
//   story: storyData,
//   risks: riskData,
//   commitment: commitData
// }

// Story
for (let i = 0; i < 10000; i++) {
  var data = {
    story: fakeData.story,
    risks: fakeData.risk,
    commitment: fakeData.commitment
  }

  // accumulate the data
  // use the csv file writer npm to write to file
}

