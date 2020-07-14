DROP TABLE IF EXISTS Story;
DROP TABLE IF EXISTS RisksAndChallenges;
DROP TABLE IF EXISTS Commitments;

CREATE TABLE Story(
  id int PRIMARY KEY,
  gif1 varchar,
  gif2 varchar,
  gif3 varchar,
  image1 varchar,
  image2 varchar,
  image3 varchar,
  storyT1 varchar,
  storyT2 varchar,
  storyT3 varchar,
  storyT4 varchar,
  storyT5 varchar,
  storyText1 varchar,
  storyText2 varchar,
  storyText3 varchar,
  storyText4 varchar,
  storyText5 varchar
);

CREATE TABLE RisksAndChallenges(
  id int PRIMARY KEY,
  riskT1 varchar,
  riskT2 varchar,
  riskT3 varchar,
  riskT4 varchar,
  riskT5 varchar,
  riskText1 varchar,
  riskText2 varchar,
  riskText3 varchar,
  riskText4 varchar,
  riskText5 varchar
);

CREATE TABLE Commitments(
  id int PRIMARY KEY,
  commitT1 varchar,
  commitT2 varchar,
  commitT3 varchar,
  commitT4 varchar,
  commitT5 varchar,
  commitText1 varchar,
  commitText2 varchar,
  commitText3 varchar,
  commitText4 varchar,
  commitText5 varchar
);