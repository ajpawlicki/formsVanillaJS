'use strict';
const names = require('../data/names').names;
const filterNames = require('./helpers').filterNames;

const getNames = (req, res) => {
  let query = req.query.input;

  let filteredNames = Object.keys(names).filter((name) => {
    return name.toLowerCase().indexOf(query.toLowerCase()) === 0;
  });

  // let filteredNames = filterNames(Object.keys(names), query);

  res.send(filteredNames);
};

const addName = (req, res) => {
  let submittedName = req.body.submittedName;

  if (!names[submittedName]) names[submittedName] = true;

  let filteredNames = Object.keys(names)
    .filter((name) => name.indexOf(submittedName) === 0);

  res.end(JSON.stringify(filteredNames));
};

module.exports.addName = addName;
module.exports.getNames = getNames;