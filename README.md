# Setting up Hello World server in NodeJS

An easy way to get started with a Express server offering a REST API with Node.js. [Read more about it.](https://www.robinwieruch.de/node-express-server-rest-api)

## Features

- Express
- REST API

## Requirements

- [node & npm](https://nodejs.org/en/)
- [git](https://www.robinwieruch.de/git-essential-commands/)

## Installation

- `git clone git@github.com:rwieruch/node-express-server-rest-api.git`
- `cd node-express-server-rest-api`
- `npm install`
- `npm run dev`


#### Postman

- Install [Postman](https://www.getpostman.com/apps) to interact with REST API
- Create a message with:
  - URL: http://localhost:3000
  - Method: POST
  - Body: raw + JSON (application/json)
  - Body Content: `{ "language":"ENG" }`
  
  Postman Collection: https://www.getpostman.com/collections/36b3f8ad61996eb78a70

#### Postman Perforance Test

- Right click on collection 
- Click on run collection 
<img src="img/Monosnap%20Postman%202022-10-08%2001-17-31.png" alt="Alt text" title="Optional title">


#### Load Test

- Install Jmeter
- Open hello_world.jmx on jmeter (Can be found in the root directory)
- CLick the play button
<img src="img/Screenshot%202022-10-08%20at%2001.20.37.png" alt="Alt text" title="Load Test with Jmeter">
