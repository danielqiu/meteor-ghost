Package.describe({
	name: "mrt:ghost",
	summary: "Ghost blogging platform in meteor",
	author: "Daniel Qiu",
	version: "0.6.4",
	git: "https://github.com/danielqiu/meteor-ghost.git"
});

Package.on_use(function(api){
	api.versionsFrom('1.0');
	api.add_files(['ghost.js'], 'server', 'client');
	if(api.export)
		api.export('ghost');
});

Npm.depends({ghost: "0.6.4"});
