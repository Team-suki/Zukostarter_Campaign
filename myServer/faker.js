const faker = require('faker');

console.log(faker.hacker.phrase());
var story = {
//   gif1: ,
//   gif2: ,
//   gif3: ,
//   image1: ,
//   image2: ,
//   image3: ,
  title1: faker.fake('{{hacker.ingverb}} {{hacker.adjective}} {{hacker.noun}}'),
  title2: faker.fake('{{hacker.ingverb}} {{hacker.adjective}} {{hacker.noun}}'),
  title3: faker.fake('{{hacker.ingverb}} {{hacker.adjective}} {{hacker.noun}}'),
  title4: faker.fake('{{hacker.ingverb}} {{hacker.adjective}} {{hacker.noun}}'),
  title5: faker.fake('{{hacker.ingverb}} {{hacker.adjective}} {{hacker.noun}}'),
  text1: faker.fake('{{hacker.phrase}} {{hacker.phrase}}'),
  text2: faker.fake('{{hacker.phrase}} {{hacker.phrase}}'),
  text3: faker.fake('{{hacker.phrase}} {{hacker.phrase}}'),
  text4: faker.fake('{{hacker.phrase}} {{hacker.phrase}}'),
  text5: faker.fake('{{hacker.phrase}} {{hacker.phrase}}')
}

var risk = {
  title1: faker.hacker.noun(),
  title2: faker.hacker.noun(),
  title3: faker.hacker.noun(),
  title4: faker.hacker.noun(),
  title5: faker.hacker.noun(),
  text1: faker.fake('{{hacker.phrase}} {{hacker.phrase}}'),
  text2: faker.fake('{{hacker.phrase}} {{hacker.phrase}}'),
  text3: faker.fake('{{hacker.phrase}} {{hacker.phrase}}'),
  text4: faker.fake('{{hacker.phrase}} {{hacker.phrase}}'),
  text5: faker.fake('{{hacker.phrase}} {{hacker.phrase}}')
}

var commitment = {
  title1: faker.fake('{{hacker.ingverb}} {{hacker.adjective}} {{hacker.noun}}'),
  title2: faker.fake('{{hacker.ingverb}} {{hacker.adjective}} {{hacker.noun}}'),
  title3: faker.fake('{{hacker.ingverb}} {{hacker.adjective}} {{hacker.noun}}'),
  title4: faker.fake('{{hacker.ingverb}} {{hacker.adjective}} {{hacker.noun}}'),
  title5: faker.fake('{{hacker.ingverb}} {{hacker.adjective}} {{hacker.noun}}'),
  text1: faker.fake('{{hacker.phrase}} {{hacker.phrase}}'),
  text2: faker.fake('{{hacker.phrase}} {{hacker.phrase}}'),
  text3: faker.fake('{{hacker.phrase}} {{hacker.phrase}}'),
  text4: faker.fake('{{hacker.phrase}} {{hacker.phrase}}'),
  text5: faker.fake('{{hacker.phrase}} {{hacker.phrase}}')
}