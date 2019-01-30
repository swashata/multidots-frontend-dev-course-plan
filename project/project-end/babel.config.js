module.exports = api => {
	const isTest = api.env('test');

	return {
		presets: [
			[
				// We use preset-env
				'@babel/preset-env',
				{
					// Add polyfill as necessary
					useBuiltIns: 'usage',
					// Don't transform modules, because webpack handles it
					// But if it is test environment, then change it
					modules: isTest ? 'commonjs' : false,
				},
			],
		],
		plugins: ['@babel/plugin-proposal-class-properties'],
	};
};
