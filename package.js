Package.describe({
	summary: 'The Polite Javascript Color Library - makes a random pleasing color',
	version: "1.0.0",
	git: "https://github.com/rfox90/PleaseJS",
	name: "ahref:pleasejs"
});

Package.on_use(function (api) {
	api.add_files([
		'dist/Please.js',
	],["client", "server"]);
});