<h1 align="center">Welcome to WonderFund Campaign Service 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <img src="https://img.shields.io/badge/npm-%3E%3D6.14.5-blue.svg" />
  <img src="https://img.shields.io/badge/node-%3E%3D12.16.3-blue.svg" />
  <a href="https://github.com/team-suki/john-service/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/team-iroh/pledge-rewards/blob/master/LICENSE" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/github/license/xApnea/john-service" />
  </a>
</p>

> This module is one of 4 services for a crowdfunding website's Campaign page. This module specifically handles the Campaign Section.

![Project](https://i.imgur.com/iTM1P0W.jpg)



> A crowdfunding web application with inherited frontend codebase

## Usage

> Please use this module with related projects

## Related Projects
Services
- Video:            https://github.com/Team-suki/Quinn-Video-Overview
- Pledge Rewards:   https://github.com/Team-suki/Nick-pledges-rewards-service
- Comments/Reviews: https://github.com/Team-suki/John-Updates-Service


## Table of Contents

1. [Requirements](#requirements)
1. [Development](#development)
1. [Server Endpoints](#Server-Endpoints)
    * [/api/reviews](#GET)
    * [/api/reviews](#PATCH)


## Requirements

- Node 6.13.0

## Development

### Installing Dependencies

Within the root directory:

```sh
npm install
```

### Seeding Database

Within the root directory:

```sh
npm run seed:db
```

### Starting Server

Within the root directory:

```sh
npm start
```

## Server Endpoints

Getting campaign per id : /:id
  - GET Request
  - Expected Queries: id
  - Responses with Story, RisksAndChallenges, and EnvironmentalCommitments

Getting story per id : /api/Story/:id
  - GET Request
  - Expected Queries: id
  - Responses with Story
  
Getting RisksAndChallenges per id : /api/RisksAndChallenges/:id
  - GET Request
  - Expected Queries: id
  - Responses with RisksAndChallenges
  
  Getting EnvironmentalCommitments per id : /api/EnvironmentalCommitments/:id
  - GET Request
  - Expected Queries: id
  - Responses with EnvironmentalCommitments



