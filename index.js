'use strict';


const Input = require('./lib/input.js');
const List = require('./lib/fetch.js');
const write = require('./lib/write.js');


const options = new Input();

function exec(args) {
    return args.user ? new List(args) : console.error('Invalid Argument');
}

options.valid() ? init() : help()


function init() {
    exec(options)
    .then(result => {
    write(options, result);
    })
    .catch(err => {
        console.log(err);
    })
}

function help() {
    console.log('help!');
}