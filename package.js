Package.describe({
	name: "mrt:ghost",
	summary: "Ghost blogging platform in meteor",
	author: "Daniel Qiu",
	version: "0.5.0",
	git: "https://github.com/danielqiu/meteor-ghost.git"
});

Npm.depends({ghost: "0.5"});

Package.on_use(function(api){
	api.versionsFrom('METEOR@0.9.1.1');
	api.add_files(['ghost.js'], 'server', 'client');
	if(api.export)
		api.export('ghost');
});
