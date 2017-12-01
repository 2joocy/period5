var express = require('express');
var router = express.Router();
var crypto = require('crypto');
var randomHex = require('../modules/RandomHex');

var sixRandoms = {
    "title": "6 Secure Randoms",
    "randoms": [
        {"length:": 48, "random": ""},
        {"length:": 40, "random": ""},
        {"length:": 32, "random": ""},
        {"length:": 24, "random": ""},
        {"length:": 16, "random": ""},
        {"length:": 8, "random": ""},
    ]
};
  

//Nicer version with promises
router.get('/securerandoms', function(req, res, next){
    let promArr = [randomHex.makeSecureRandom(48), randomHex.makeSecureRandom(40), randomHex.makeSecureRandom(32), randomHex.makeSecureRandom(24), randomHex.makeSecureRandom(16), randomHex.makeSecureRandom(8)];
    Promise.all(promArr).then(function(result){
        for(var i = 0; i < sixRandoms.randoms.length; i++){
            sixRandoms.randoms[i].random = result[i];
        }
        res.send(sixRandoms);
    });
});


//Pyramid of doom example
router.get('/pyramid', function(req, res, next) {
    crypto.randomBytes(48, (err, buffer) => {
        sixRandoms.randoms[0].random = buffer.toString('hex');

        crypto.randomBytes(40, (err, buffer) => {
            sixRandoms.randoms[1].random = buffer.toString('hex');

            crypto.randomBytes(32, (err, buffer) => {
                sixRandoms.randoms[2].random = buffer.toString('hex');
                
                res.send(sixRandoms);
            });
        });
    });
});
  
module.exports = router;