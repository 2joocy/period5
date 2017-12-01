var express    = require('express');        
var app        = express();                 
var bodyParser = require('body-parser');
var crypto     = require('crypto');
var randomHex = require('./modules/randomHex');

  
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var secureHex = "";

var randoms = [];
var port = process.env.PORT || 8080;        

var sixRandoms = {
    "title": "6 Secure Randoms",
    "randoms": []
};

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              

router.get('/', function(req, res) {
    res.json({ message: 'skyyyt' });   
});

router.get('/securerandoms', (req, res)=>{
    sixRandoms = {
        "title": "6 Secure Randoms",
        "randoms": []
    };
    var randomPromise = Promise.all([randomHex.makeSecureRandom(48), randomHex.makeSecureRandom(40), randomHex.makeSecureRandom(32), randomHex.makeSecureRandom(24), randomHex.makeSecureRandom(16), randomHex.makeSecureRandom(8)]).then((result)=>{
        for(var i = 0; i<6; i++){
            sixRandoms.randoms.push({"length": i * 8, "randoms": result[i]});
        }
    res.send(sixRandoms);    
    });
    
})

app.use('/api', router);

app.listen(port);
console.log('Listening at ' + port);