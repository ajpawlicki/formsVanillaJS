const filterNames = (names, comparedName) => {
  return names.filter((name) => {
    return name.toLowerCase().indexOf(comparedName.toLowerCase()) === 0;
  });
};

module.exports.filterNames = filterNames;