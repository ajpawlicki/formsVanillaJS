'use strict';
const names = require('../data/names').names;
const filterNames = require('./helpers').filterNames;

const getNames = (req, res) => {
  let query = req.query.input;

  let filteredNames = filterNames(Object.keys(names), query);

  res.send(filteredNames);
};

const addName = (req, res) => {
  let submittedName = req.body.submittedName;

  if (!names[submittedName]) names[submittedName] = true;

  let filteredNames = filterNames(Object.keys(names), submittedName);

  res.end(JSON.stringify(filteredNames));
};

module.exports.addName = addName;
module.exports.getNames = getNames;