module.exports = {
	// Verbose
	verbose: true,
	// We need jest-dom in our setup
	setupTestFrameworkScriptFile: '<rootDir>/jestSetup.js',
	// We need to mock static css, scss, sass and other asset imports
	moduleNameMapper: {
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
			'<rootDir>/__mocks__/fileMock.js',
		'\\.(sa|sc|c|le)ss$': '<rootDir>/__mocks__/styleMock.js',
	},
	// Finally we need a DOM like environment for our tests
	// So that we get document, window etc
	// This is also the default, so there is no need to explicitly
	// Set it.
	testEnvironment: 'jsdom',
};
