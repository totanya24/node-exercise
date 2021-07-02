const fs = require('fs');
const process = require('process');

fs.readFile('one.txt', 'utf8', function(err, data){
    if(err){
        console.log('ERROR', err);
        process.kill(1);
    }
    console.log( data);
})