'use strict';

let express = require('express');
let app = express();

let bodyParser = require('body-parser');

let filterNames = require('../workers/handlers').filterNames;

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

app.get('/getNames', filterNames);

let port = 3000;

app.listen(port);
console.log(`Listening on port ${port}`);