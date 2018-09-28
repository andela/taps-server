# taps-server

This is the core server side for [Andela Teams](https://andela-teams.herokuapp.com).

[![Andela](https://andela-badge.herokuapp.com/)](https://andela.com)
[![Build Status](https://travis-ci.org/andela/taps-server.svg?branch=staging)](https://travis-ci.org/andela/taps-server)
[![Coverage Status](https://coveralls.io/repos/github/andela/taps-server/badge.svg?branch=integrate-coveralls-160796474)](https://coveralls.io/github/andela/taps-server?branch=integrate-coveralls-160796474)
[![Hound CI](https://camo.githubusercontent.com/23ee7a697b291798079e258bbc25434c4fac4f8b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f50726f7465637465645f62792d486f756e642d6138373364312e737667)](https://houndci.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Andela Teams seeks to automate some of the routine actions taken by __simulations learning facilitators__ at Andela.

Here is a useful scenario. When a new cohort (class) begins simulations (*sims*) at Andela, the cohort is broken into teams, and each team is assigned to a learning facilitator. The learning facilitator then creates a few Slack channels, a Github repo, and a Pivotal Tracker board. For each of these, the facilitator has to add every member of the team to the channel/repo/board. This is obviously a task that should be automated, especially considering that even the names of the channels/repo/board are always in a particular format. Andela Teams seeks to automate these and many more routine tasks performed by facilitators.

This server contains (or should contain) endpoints that perform various actions like:
* view, create, edit, delete teams
* add members to teams, in various capacities (fellow, TTL, PO, ...)
* add events to the Google Calendar of team members
* generate various Google docs (like scorecards for fellows)
* send out email notifications to team members

## Technology Stack

To see the technology stack utilized by this project checkout [Technology Stack](https://github.com/andela-stuff/andela-teams-core/wiki/Technology-Stack).

## Third Party Integrations

To see how this project integrates with third party APIs checkout [Third Party Integrations](https://github.com/andela-stuff/andela-teams-core/wiki/Third-Party-Integrations).

## Usage

### Prerequisites ###
You are going to need
* Linux, macOS or Windows
* node version 9.7.1
* yarn version 1.5.1
* npm version 5.6.0
* Postgresql
* `sequelize-cli` installed globally


### Getting Set Up ###
* Clone this repository to your local machine
```
$ git clone https://github.com/andela/taps-server.git
```
* Change directory into the taps-server directory
```
$ cd taps-server
```
* Install all required dependencies by running
```
$ yarn install
```
* Once installation is done, create a .env file and fill it with the neccessary environment variables **(see .env-sample for the neccessary environment variables required)**
* Create a database to be used with the application
* Migrate database by running
```
$ sequelize db:migrate
```
* To start the application, run
```
npm run start:dev
```
## Testing

This project uses [Mocha](https://mochajs.org/), [Chai](http://chaijs.com/) and [Chai-Http](http://chaijs.com/plugins/chai-http/) for testing.
* Ensure you run `yarn` (or `npm install`) to install necessary packages.
* Run `npm test` to run tests and display code coverage results.
* Run `npm test:dev` to just run tests.

## API Docs

* [Swagger](https://ghoulies-taps-server.herokuapp.com/doc/).

## Contributing

To see how to go about contributing to this project checkout [contributing](contributing.md).

The Pivotal Tracker board for this project can be found [here](https://www.pivotaltracker.com/n/projects/2138610).

## Credits

## License

[MIT](LICENSE)

## FAQ

### Is this an Open-Source Application?

```
Yes it is, and contributing to the development of this application is by raising PRs.
```

### Who can contribute?

```
Anyone! This application is open to all those who want to contribute to open-source 
development and are willing to follow set standards for contributing.
```

### Is there a set standard for PRs to this repository?

```
Yes, there are set conventions for PRs to this repository and can be found in the 
project wiki.
```

### What language was used to develop this application?

```
This project is a full stack Javascript application.
```

### Can I clone this application for personal use?

```
Yes! This application is licensed under MIT, and is open for whatever you may choose 
to use it for.
```
