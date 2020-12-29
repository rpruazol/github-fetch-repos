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
    console.log(
        `
        'github-fetch-repo-list' - Generate a text file of your Github repositories.  Includes private and forked repos!

        usage: node index.js [-t <token>] [-u username>] [-f <file>]

        mandatory arguments:

            -t <token>:  your personal access token (PAC) GitHub
            -u <user>:  your GitHub username
            -f <file>:  the name of the output file that will be created
        `
        );
}