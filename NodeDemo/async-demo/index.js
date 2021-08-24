console.log("Before");
//getUser(1, (user) => {
//	getRepos(user.githubUsername, (repos) => {
//		getCommit(repo, (commit) => {
//			console.log(commit);
//		});
//	});
//});

//getUser(1)
//	.then(user => getRepos(user.githubUsername))
//	.then(repos => getCommits(repos[0]))
//	.then(commits => console.log(commits))
//	.catch(err => console.log(err.message));

async function displayCommits() {
	try {
		const user = await getUser(1);
		const repos = await getRepos(user.githubUsername);
		const commits = await getCommits(repos[0]);
		console.log(commits);
	} catch (error) {
		console.log(error.message);
	}
}

displayCommits();

console.log("After");

function getUser(id) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve({ id: id, githubUsername: 'jmilthedude' });
		}, 2000);
	});
}

function getRepos(username) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			reject(new Error('blah'));
			//resolve({ user: username, repos: ['repo1', 'repo2', 'repo3'] });
		}, 2000);
	});
}

function getCommits(repo) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(['commit']);
		}, 2000);
	});
}