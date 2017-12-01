var crypto = require('crypto');


//New async await
async function makeSecureRandom(size){
    const buffer = await crypto.randomBytes(size);
    return buffer.toString('hex');
}

//Old promise
function makeSecureRandomOld(size){
    return new Promise(function(resolve, reject){
        crypto.randomBytes(size, (err, buffer) => {
            if(err){
                reject(err);
            }

            resolve(buffer.toString('hex'));
        });
    });
};

async function writeOut(){
    const result = await makeSecureRandom(4);
    console.log(result);
}
writeOut();