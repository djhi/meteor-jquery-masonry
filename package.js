Package.describe({
	summary: "jQuery Masonry repackaged for Meteor"
});

Package.on_use(function (api) {
	api.use('jquery', 'client');
	api.add_files(['helpers.js', 'lib/masonry/masonry.js'],'client');
});
