var fs = require('fs');

if(process.env.EXIT_ON_CHANGES) {
	console.log("In development mode, will exit on file changes in cwd");
	fs.watch('.', {}, function(ev, filename) {
		if(/\.js$/.test(filename)) {
			console.log("Exiting because:", ev, filename);
			process.exit(0);
		}
	})
}
