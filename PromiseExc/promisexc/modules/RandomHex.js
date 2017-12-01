var crypto = require('crypto');

function makeSecureRandom(size){
    return new Promise(function(resolve, reject){
        crypto.randomBytes(size, (err, buffer) => {
            if(err){
                reject(err);
            }

            resolve(buffer.toString('hex'));
        });
    });
};

module.exports = {
    makeSecureRandom: makeSecureRandom
};