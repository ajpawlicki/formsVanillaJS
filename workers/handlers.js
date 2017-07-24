'use strict';
const names = require('../data/names').names;

const filterNames = (req, res) => {
  let query = req.query.input;

  let filteredNames = names.filter((name) => {
    return name.toLowerCase().indexOf(query.toLowerCase()) === 0;
  });
  console.log(filteredNames);

  res.send(filteredNames);
};

module.exports.filterNames = filterNames;