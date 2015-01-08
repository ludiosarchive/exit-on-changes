var fs = require('fs');

if(Number(process.env.EXIT_ON_CHANGES_ENABLED)) {
	console.log("[exit-on-changes] EXIT_ON_CHANGES_ENABLED");
	fs.watch('.', {}, function(ev, filename) {
		if(/\.(jsx?|es6?)$/.test(filename)) {
			console.log("[exit-on-changes] Exiting after:", ev, filename);
			process.exit(0);
		}
	})
}
