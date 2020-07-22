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
      storyT1: faker.hacker.noun(),
      storyT2: faker.hacker.noun(),
      storyT3: faker.hacker.noun(),
      storyT4: faker.hacker.noun(),
      storyT5: faker.hacker.noun(),
      storyText1: faker.lorem.sentence(),
      storyText2: faker.lorem.sentence(),
      storyText3: faker.lorem.sentence(),
      storyText4: faker.lorem.sentence(),
      storyText5: faker.lorem.sentence()
    }
  },

  generateRiskData: () => {
    return {
      riskT1: faker.hacker.noun(),
      riskT2: faker.hacker.noun(),
      riskT3: faker.hacker.noun(),
      riskT4: faker.hacker.noun(),
      riskT5: faker.hacker.noun(),
      riskText1: faker.lorem.sentence(),
      riskText2: faker.lorem.sentence(),
      riskText3: faker.lorem.sentence(),
      riskText4: faker.lorem.sentence(),
      riskText5: faker.lorem.sentence()
    }
  },

  generateCommitData: () => {
    return {
      commitT1: faker.hacker.noun(),
      commitT2: faker.hacker.noun(),
      commitT3: faker.hacker.noun(),
      commitT4: faker.hacker.noun(),
      commitT5: faker.hacker.noun(),
      commitText1: faker.lorem.sentence(),
      commitText2: faker.lorem.sentence(),
      commitText3: faker.lorem.sentence(),
      commitText4: faker.lorem.sentence(),
      commitText5: faker.lorem.sentence()
    }
  },
}