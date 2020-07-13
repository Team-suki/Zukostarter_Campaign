DROP TABLE IF EXISTS Story;
DROP TABLE IF EXISTS RisksAndChallenges;
DROP TABLE IF EXISTS Commitments;

CREATE TABLE Story(
  id SERIAL PRIMARY KEY,
  gif1 varchar(150) NOT NULL,
  gif2 varchar(150) NOT NULL,
  gif3 varchar(150) NOT NULL,
  image1 varchar(150) NOT NULL,
  image2 varchar(150) NOT NULL,
  image3 varchar(150) NOT NULL,
  storyT1 character varying(40) NOT NULL,
  storyT2 character varying(40) NOT NULL,
  storyT3 character varying(40) NOT NULL,
  storyT4 character varying(40) NOT NULL,
  storyT5 character varying(40) NOT NULL,
  storyText1 character varying(500) NOT NULL,
  storyText2 character varying(500) NOT NULL,
  storyText3 character varying(500) NOT NULL,
  storyText4 character varying(500) NOT NULL,
  storyText5 character varying(500) NOT NULL
);

CREATE TABLE RisksAndChallenges(
  id SERIAL PRIMARY KEY,
  riskT1 character varying(40) NOT NULL,
  riskT2 character varying(40) NOT NULL,
  riskT3 character varying(40) NOT NULL,
  riskT4 character varying(40) NOT NULL,
  riskT5 character varying(40) NOT NULL,
  riskText1 character varying(500) NOT NULL,
  riskText2 character varying(500) NOT NULL,
  riskText3 character varying(500) NOT NULL,
  riskText4 character varying(500) NOT NULL,
  riskText5 character varying(500) NOT NULL
);

CREATE TABLE Commitments(
  id SERIAL PRIMARY KEY,
  commitT1 character varying(40) NOT NULL,
  commitT2 character varying(40) NOT NULL,
  commitT3 character varying(40) NOT NULL,
  commitT4 character varying(40) NOT NULL,
  commitT5 character varying(40) NOT NULL,
  commitText1 character varying(500) NOT NULL,
  commitText2 character varying(500) NOT NULL,
  commitText3 character varying(500) NOT NULL,
  commitText4 character varying(500) NOT NULL,
  commitText5 character varying(500) NOT NULL
);