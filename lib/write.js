'use strict';

const fs = require('fs');
const readline = require('readline');




function writeFile(opts, data){
    fs.writeFile(opts.file, 'start!' + '\n', function(err) {
        if(err) return console.log(err);
    })
    
    data.list.forEach( line => {
        fs.appendFile(opts.file, line.name + '\n', error => {
            console.log(line.name);
            if(error) throw err;
        })
    })
    console.log(`wrote successfully to ${opts.file}`);
}

module.exports = writeFile;