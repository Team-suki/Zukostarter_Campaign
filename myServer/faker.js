const faker = require('faker');
const random = require('random');

module.exports = {
  generateStoryData: () => {
    return {
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
      storyText1: faker.lorem.paragraph(),
      storyText2: faker.lorem.paragraph(),
      storyText3: faker.lorem.paragraph(),
      storyText4: faker.lorem.paragraph(),
      storyText5: faker.lorem.paragraph()
    }
  },

  generateRiskData: () => {
    return {
      riskT1: faker.hacker.noun(),
      riskT2: faker.hacker.noun(),
      riskT3: faker.hacker.noun(),
      riskT4: faker.hacker.noun(),
      riskT5: faker.hacker.noun(),
      riskText1: faker.lorem.paragraph(),
      riskText2: faker.lorem.paragraph(),
      riskText3: faker.lorem.paragraph(),
      riskText4: faker.lorem.paragraph(),
      riskText5: faker.lorem.paragraph()
    }
  },

  generateChallData: () => {
    return {
      commitT1: faker.fake('{{hacker.ingverb}} {{hacker.noun}}'),
      commitT2: faker.fake('{{hacker.ingverb}} {{hacker.noun}}'),
      commitT3: faker.fake('{{hacker.ingverb}} {{hacker.noun}}'),
      commitT4: faker.fake('{{hacker.ingverb}} {{hacker.noun}}'),
      commitT5: faker.fake('{{hacker.ingverb}} {{hacker.noun}}'),
      commitText1: faker.lorem.paragraph(),
      commitText2: faker.lorem.paragraph(),
      commitText3: faker.lorem.paragraph(),
      commitText4: faker.lorem.paragraph(),
      commitText5: faker.lorem.paragraph()
    }
  },
}