'use strict';

const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const filterNames = require('../workers/handlers').filterNames;
const addName = require('../workers/handlers').addName;

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

app.get('/getNames', filterNames);

app.post('/addName', addName);

const port = 3000;

app.listen(port);
console.log(`Listening on port ${port}`);