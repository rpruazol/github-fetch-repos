'use strict';

// talk to github

const superagent = require('superagent');



function List() {}

function createList(opts) {
	let listObj = new List();
	return fetchList(opts.token, opts.user, opts.file)
		.then( result => {
			listObj.list = result;
			return listObj;
		})
}

function fetchList(token, user, file) {
		let output;
		const URL = `https://api.github.com/search/repositories?q=user:${user}`;
		console.log(URL);
		return superagent
			.get(URL)
			.set('Authorization', `Bearer ${token}`)
			.set('User-Agent', user)
			.then( response => response.body.items.map(repo => new Repo(repo)))
			// .then( value => {
			// 	// another superagent call to get forked repos
			// 	const forkURL = `https://api.github.com/users/${user}/repos`;
			// 	superagent
			// 		.get(forkURL)
			// 		.set('Authorization', `Bearer ${token}`)
			// 		.set('User-Agent', user)
			// 		.then( response => {
			// 			response.body.forEach(repo => {
			// 				if(repo.fork){
			// 					value.push(new Repo(repo));
			// 				}
			// 			})
			// 			return value;
			// 		})
			// 	// console.log(value);
			// 	return value;
			// })
			.catch( error => {
				console.log('error', error.response.error);
			})
}

function Repo(obj) {
	this.name = obj.full_name;
	this.private = obj.private;
	this.forked = obj.fork;
}

module.exports = createList;