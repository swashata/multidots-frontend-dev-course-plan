## Copy over needed files

Start with the files under `project-start`. We will keep on writing code until
we reach the status at `project-end`.

## Init NPM

```bash
npm init --yes
```

And say yes or change as necessary.

## Install ESLint and Prettier

First we want to setup linting on our project. So let's install the dependencies.

```bash
npm i -D eslint prettier @wpquark/eslint-config
```

Now create a `.eslintrc` file on the root with

```json
{
	"extends": "@wpquark"
}
```

This will use our shared eslint config and prettier as
an ESLint plugin.

Also create a `prettier.config.js` with the following content

```js
/* eslint-disable import/no-extraneous-dependencies */
module.exports = require('@wpquark/eslint-config/prettier.config.js');
```

This will tell prettier about what kind of configuration
to use when styling our code.

If you want to know how things fit in together, do check
the [repository](https://github.com/WPQuark/eslint-config).

Now edit `package.json` file and put in the `lint` inside `scripts`.

```json
{
	"scripts": {
		"lint": "eslint 'src'",
		"test": "echo \"Error: no test specified\" && exit 1"
	}
}
```

From your terminal at the `project-start` directory run

```bash
npm run lint
```

And it should give you some sort of output. It means our
ESLint setup is working just fine.

## Install Project Dependencies

This project needs two dependencies to work

1. [Bulma](https://www.npmjs.com/package/bulma) - Primary styling library.
2. [core-js](https://www.npmjs.com/package/core-js) - To polyfill our code for older browsers.

Install them with

```bash
npm i bulma core-js
```

## Setup Webpack

Now we have used

-   ES6+ JavaScript language syntaxes and
    features.
-   SCSS for styling.
-   ES6 Modules within our codebase, for JavaScript, CSS and Assets.

So we need the following tooling

1. [Babel](https://babeljs.io/) - For compiling ES6+ language syntaxes.
2. [node-sass](https://www.npmjs.com/package/node-sass) - For compiling SASS/SCSS files to CSS.
3. [PostCSS](https://github.com/postcss/postcss) - To transform our CSS (add vendor prefixes, minify etc).
4. [Webpack](https://webpack.js.org/) - To handle our modules and use babel, node-sass etc to compile our files.

So let's install the development dependencies for our project.

```bash
npm i -D @babel/core @babel/plugin-proposal-class-properties @babel/preset-env autoprefixer babel-loader clean-webpack-plugin css-loader cssnano file-loader html-webpack-plugin mini-css-extract-plugin node-sass postcss-loader sass-loader style-loader webpack webpack-cli cross-env
```

Let's see what the dependencies are for:

#### Babel and JavaScript

1. `@babel/core @babel/plugin-proposal-class-properties @babel/preset-env` - To compile our JavaScript code.
1. `babel-loader` - To handle `.js` files from webpack and pass them to `@babel/core` for compilation.

#### CSS (SCSS -> PostCSS -> CSS -> Extract)

1. `node-sass` - To compile SCSS/SASS files to CSS.
1. `sass-loader` - To handle `.sass`/`.scss` files from webpack and pass them to `node-sass` for compilation.
1. `postcss-loader` - To pass compiled CSS files to PostCSS.
1. `autoprefixer` - To add prefixes to CSS through PostCSS.
1. `cssnano` - To minify CSS files during production.
1. `css-loader` - To handle the finally compiled and PostCSS-ed files.
1. `style-loader` - To handle CSS from JavaScript (development mode).
1. `mini-css-extract-plugin` - To extract CSS into separate files.

#### `.html` files

1. `html-webpack-plugin` - To handle the `index.html` file and insert `script` and `link` tags.

#### Other Webpack Loaders

1. `file-loader` - To handle static assets like images, fonts etc.

#### Other Webpack Plugins

1. `clean-webpack-plugin` - To clean our build directory.

#### Webpack

1. `webpack` - The main webpack library.
2. `webpack-cli` - To run `webpack` from CLI.

#### Other

1. `cross-env` - To set environment variables cross platform.

Now let's configure webpack to compile our project.

Our goal here is to

1. Take the `src/main.js` file and its dependencies and create a final set of JavaScript and CSS files.
2. Take the `src/index.html` file and automatically put necessary `script` and `link` tags.
3. Put all files inside `./build` directory.

The structure of the `build` directory would be

```
build/
├── dist/
│   ├── styles/
│   │    └── app.css
│   └── app.js
└── index.html
```

With this is mind let's configure webpack.

Create a `webpack.config.js` file in the root and put in

```js
// A few Nodejs APIs
// These are all built-in
const path = require('path');

// Require some plugins we need for webpack
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
		filename: isDev ? 'dist/[name].js' : 'dist/[name]-[hash:6].js',
		path: path.resolve(__dirname, 'build'),
		// This is the path of the output (build) directory
		// Relative to our index.html file
		publicPath: '/',
	},
	// How do we handle modules
	module: {
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
		// Clean the build directory
		new CleanWebpackPlugin(['dist', 'index.html'], {
			root: path.resolve(__dirname, 'build'),
			verbose: true,
		}),
		// Create Production HTML file
		new HtmlWebpackPlugin({
			title: 'Webpack Demo with Counter App',
			filename: 'index.html',
			template: './src/index.html',
		}),
		// Extract CSS into separate files
		new MiniCssExtractPlugin({
			// Options similar to the same options in webpackOptions.output
			// both options are optional
			filename: 'dist/styles/[name].[hash:6].css',
			chunkFilename: 'dist/styles/[id].[hash:6].css',
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
```

Now edit `package.json` file and add in another script.

```json
{
	"scripts": {
		"build": ""
	}
}
```

Run the command

```bash
npm run build
```

And watch it fail. This is because, we haven't really configured babel or
PostCSS yet.

Although webpack acts as a bundler which creates the assets, without babel
or postcss config, things won't get properly compiled.

## Configure toolchain

### Add Babel Config

Create `babel.config.js` file at root and put

```js
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
	plugins: ['@babel/plugin-proposal-class-properties'],
};
```

### Add Browserslist config

This will act as a common config between postcss and babel to
target our browsers.

Create a `.browserslistrc` file and put

```
> 0.25%
not dead
```

### Add PostCSS Config

Create a file `postcss.config.js` and put

```js
/* eslint-disable global-require, import/no-extraneous-dependencies */
const postcssConfig = {
	plugins: [require('autoprefixer')],
};

// If we are in production mode, then add cssnano
if (process.env.NODE_ENV === 'production') {
	postcssConfig.plugins.push(
		require('cssnano')({
			// use the safe preset so that it doesn't
			// mutate or remove code from our css
			preset: 'default',
		})
	);
}

module.exports = postcssConfig;
```

### Check build

Now let's run the command again

```bash
npm run build
```

And it should build. To check output

```bash
cd build
npx serve
```

Open the URL and it should show the counter app.

Let's also create a `.eslintignore` file to ignore files inside
`build` directory.

```
build
lib
```

## Configure Dev Server

To have a development server, we can make use of `webpack-dev-server`.

First install the dependency.

```bash
npm i -D webpack-dev-server
```

Now add another script to our `package.json` file

```json
{
	"scripts": {
		"start": "cross-env NODE_ENV=development webpack-dev-server --hot"
	}
}
```

And run

```bash
npm run start
```

And this will kick in the development server. In your
webpack configuration you have `output.path` to the
`build` directory so that where webpack-dev-server
serves the index.html file.

You can customize it through [different options](https://webpack.js.org/configuration/dev-server/).

## Tests

We shall use jest, jest-dom and dom-testing-library
for writing our tests.

First let's install the dependencies

```bash
npm i -D jest jest-dom dom-testing-library babel-jest
```

### Modify Babel Config

Now we have set `modules` to false in our babel config.

But jest wouldn't work with that. When jest is
run `process.env.NODE_ENV` is set to `test`.
We can leverage that and change our `babel.config.js` to

```js
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
```

### Create setup file

We need to include some library from `jest-dom`
to extend the default jest assertions. For that
create a file `jest/setup.js` and put

```js
/* eslint-disable import/no-extraneous-dependencies */
require('jest-dom/extend-expect');
```

### Create mocks for assets and styles

Through our codebase we have

```js
import './style.scss';
```

Jest doesn't understand `.scss` files and will throw errors. So we need to mock them.

Create these two files

**jest/**mocks**/styleMock.js**

```js
// Mock styles with empty exports

module.exports = {};
```

**jest/**mocks**/fileMock.js**

```js
// Mock asset files with a stub string
module.exports = 'test-file-stub';
```

### Configure Jest

Finally we need to tell jest about our setup and mocks.

Create a `jest.config.js` file and put

```js
module.exports = {
	// Verbose
	verbose: true,
	// We need jest-dom in our setup
	setupFilesAfterEnv: ['<rootDir>/jest/setup.js'],
	// We need to mock static css, scss, sass and other asset imports
	moduleNameMapper: {
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
			'<rootDir>/jest/__mocks__/fileMock.js',
		'\\.(sa|sc|c|le)ss$': '<rootDir>/jest/__mocks__/styleMock.js',
	},
	// Finally we need a DOM like environment for our tests
	// So that we get document, window etc
	// This is also the default, so there is no need to explicitly
	// Set it.
	testEnvironment: 'jsdom',
};
```

### Add script

Now edit `package.json` and put

```json
{
	"scripts": {
		"test": "jest"
	}
}
```

Run

```bash
npm run test
```

And it should fail saying no tests were executed.

## Write tests

Now copy over the test files and run

```bash
npm run test
```

And see them passing.
