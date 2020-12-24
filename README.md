# github-fetch-repo


github-fetch-repos

issue - two seperate api calls, one for private repos and one for forked repos.  one call can't do both?

issue - constructor that returns the array of the repos was returning a promise<pending>.  had to do a '.then' when calling it in index.js to get the actual array back

issue - write.js was writing [object Object] to a file.  needed to loop through the array using forEach and target the propery in the object to write