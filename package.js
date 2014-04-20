Package.describe({
	summary: "Ghost blogging platform in meteor"
});

Npm.depends({ghost: "0.4.2"});

Package.on_use(function(api){
	api.add_files(['ghost.js'], 'server', 'client');
	if(api.export)
		api.export('ghost');
});
