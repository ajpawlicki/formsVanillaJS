'use strict';

let express = require('express');
let app = express();

let bodyParser = require('body-parser');

let names = require('../data/names').names;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

let port = 3000;

app.listen(port);
console.log(`Listening on port ${port}`);