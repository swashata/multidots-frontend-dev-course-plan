// A few Nodejs APIs
// These are all built-in
const path = require('path');

// Require some plugins we need for webpack
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// A flag to see if this is development or production
const isDev = process.env.NODE_ENV !== 'production';

// Feed webpack the configuration
module.exports = {
	// Our primary entrypoint
	entry: {
		app: './src/main.js',
	},
	// output
	output: {
		filename: isDev ? 'main.js' : 'main-[hash:6].js',
		path: path.resolve(__dirname, 'build/dist'),
		// This is the path of the output directory
		// Relative to our index.html file
		publicPath: '/dist/',
	},
	// How do we handle modules
	modules: {
		rules: [
			// How do we process .js files?
			{
				test: /\.js$/,
				// But we don't want to pass node_modules through babel
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						// It will read option from babel.config.js file
						// But we could've passed option to babel directly
						// https://github.com/babel/babel-loader#options
					},
				],
			},
			// How do we process .css, .sass and .scss files?
			{
				test: /\.s?(c|a)ss$/,
				use: [
					// Depending on dev mode, we use either
					// style-loader for CSS injected through JS
					// And thereby getting HMR
					// Or MiniCssExtractPlugin to extract css in files
					isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
					// css-loader to interpret @import and url etc
					{
						loader: 'css-loader',
						options: { sourceMap: true },
					},
					// post-css loader to do all autoprefixing
					// and minification
					{
						loader: 'postcss-loader',
						options: {
							sourceMap: true,
						},
					},
					// sass loader to parse all sass and scss files
					// since sass is superset of css
					// it works good for css files too
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true,
						},
					},
				],
			},
			// How do we process static image and font files?
			{
				test: /\.(woff|woff2|eot|ttf|otf|png|jpg|gif)(\?v=\d+\.\d+\.\d+)?$/,
				use: [
					{
						// With file loader which copies file
						// and brings in URL to the file
						loader: 'file-loader',
						options: {
							name: '[name]-[hash:6].[ext]',
							outputPath: 'assets/',
						},
					},
				],
			},
		],
	},

	// How modules are resolved
	resolve: {
		// Right now just .js extension is fine
		// But in case you are using react and want to import
		// .jsx files without extension, then include it
		extensions: ['.js', '.jsx'],
	},

	// Plugins
	plugins: [
		// Extract CSS into separate files
		new MiniCssExtractPlugin({
			// Options similar to the same options in webpackOptions.output
			// both options are optional
			filename: isDev ? '[name].css' : '[name].[hash:6].css',
			chunkFilename: isDev ? '[id].css' : '[id].[hash:6].css',
		}),
		// Lets use isDev from our scripts
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(
				isDev ? 'development' : 'production'
			),
		}),
	],

	// Development mode
	mode: isDev ? 'development' : 'production',

	// No need to specify watch because webpack-dev-server will take care of it

	// Sourcemap
	devtool: isDev ? 'eval' : 'source-map',
};
