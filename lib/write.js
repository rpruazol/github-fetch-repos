'use strict';

const fs = require('fs');
const readline = require('readline');




function writeFile(opts, data){
    fs.writeFile(opts.file, 'start!' + '\n', function(err) {
        if(err) return console.log(err);
        console.log(`wrote successfully to ${opts.file}`);
    })
    
    data.list.forEach( line => {
        fs.appendFile(opts.file, line.name + '\n', error => {
            console.log(line);
            if(error) throw err;
        })
    })
    console.log('done');
}

module.exports = writeFile;