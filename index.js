// Use chokidar instead of fs.watch because fs.watch doesn't watch recursively
var chokidar = require('chokidar');

if(Number(process.env.EXIT_ON_CHANGES_ENABLED)) {
	console.log("[exit-on-changes] EXIT_ON_CHANGES_ENABLED");
	var watcher = chokidar.watch('.', {ignoreInitial: true, ignorePermissionErrors: true});
	watcher.on('all', function(ev, filename) {
		if(/\.(jsx?|es6?)$/.test(filename)) {
			console.log("[exit-on-changes] Exiting after:", ev, filename);
			process.exit(0);
		}
	})
}
