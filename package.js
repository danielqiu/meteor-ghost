Package.describe({
	name: "ghost",
	summary: "Ghost blogging platform in meteor"
	author: "Daniel Qiu",
	version: "0.4.3",
	git: "https://github.com/danielqiu/meteor-ghost.git"
});

Npm.depends({ghost: "0.4.2"});

Package.on_use(function(api){
	api.add_files(['ghost.js'], 'server', 'client');
	if(api.export)
		api.export('ghost');
});
