var fs = require("fs");
var path = require("path");
var csv = require("fast-csv");
const { performance } = require("perf_hooks");

const loadIndex = function loadIndex(filename) {
  var content = fs
    .readFileSync(path.join(__dirname, filename), "utf8")
    .toString()
    .split("\n");
  var index = {};
  var array = [];

  content.forEach(function(line) {
    if (line.trim().length > 0) {
      index[line.trim()] = "";
    }
  });

  Object.keys(index).forEach(function(word) {
    array.push(word);
  });

  return {
    index: index,
    array: array
  };
};

const { index: personIndex, array: persons } = loadIndex("persons.csv");
const { index: maleIndex, array: males } = loadIndex("masculine_names.csv");
const { index: femaleIndex, array: females } = loadIndex("feminine_names.csv");
const { index: surnameIndex, array: surnames } = loadIndex("surnames.csv");
const { index: vehicleIndex, array: vehicles } = loadIndex("vehicles.csv");
const { index: bodyPartIndex, array: bodyParts } = loadIndex("body_parts.csv");

console.log(JSON.stringify(persons));
// console.log("number of persons", Object.keys(personsIndex).length, persons.length);
//
// var start = performance.now();
// var isPerson = personsIndex.hasOwnProperty('zymologist');
// console.log("index", isPerson, performance.now() - start);
//
// var start = performance.now();
// var isPerson = persons.indexOf('zymologist') > -1;
// console.log("search", isPerson, performance.now() - start);

module.exports = {
  personIndex,
  persons,
  maleIndex,
  males,
  femaleIndex,
  females,
  surnameIndex,
  surnames,
  vehicleIndex,
  vehicles
};
