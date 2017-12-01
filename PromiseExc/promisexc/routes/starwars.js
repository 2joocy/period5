var express = require('express');
var starwarsModule = require('../modules/StarwarsModule');
var router = express.Router();

router.get('/', function(req, res, next) {
  starwarsModule.getPlanetforFirstSpeciesInFirstMovieForPerson(1).then(function(result){
      let resultObject = {"Name": result[0], "First Film": result[1], "First Species": result[2], "Homeworld for species": result[3]}
      res.send(resultObject);
  });
});

module.exports = router;
