module.exports = {
	presets: [
		[
			// We use preset-env
			'@babel/preset-env',
			{
				// Add polyfill as necessary
				useBuiltIns: 'usage',
				// Don't transform modules, because webpack handles it
				modules: false,
			},
		],
	],
	// In case when we use jest, we would like
	// the configuration to be a bit different
	env: {
		test: {
			presets: [
				[
					// We use preset-env
					'@babel/preset-env',
					{
						// Add polyfill as necessary
						useBuiltIns: 'usage',
						// Transform modules into commonjs
						modules: 'commonjs',
						// Specify a target
						targets: {
							node: 'current',
						},
					},
				],
			],
		},
	},
};
