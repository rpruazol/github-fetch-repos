'use strict';

const minimist = require('minimist');


function Input(){
    const args = minimist(process.argv.slice(2));

    this.token = this.getToken(args.t);
    this.user = args.u;
    this.file = args.f;
}

Input.prototype.getToken = function(token = '') {
    return token.length === 40 ? token : undefined;
};

Input.prototype.userName = function(name = '') {
    return (name) ? name : undefined
};


module.exports = Input;