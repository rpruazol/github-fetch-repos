'use strict';

// talk to github

const superagent = require('superagent');

function List(opts) {
    this.list = this.fetchList(opts.token, opts.user, opts.file);
}

List.prototype.fetchList = function(token, user, file) {
    
}