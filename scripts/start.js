/* eslint-disable import/no-extraneous-dependencies */
const bs = require('browser-sync').create();

// Init the server
bs.init({
	server: {
		baseDir: 'sessions',
	},
	files: ['sessions/class-*/session/**/*.html'],
});
