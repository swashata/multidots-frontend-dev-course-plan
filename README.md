<p align="center">
[![Build Status](https://travis-ci.com/swashata/multidots-frontend-dev-course-plan.svg?branch=master)](https://travis-ci.com/swashata/multidots-frontend-dev-course-plan)
</p>

Topics of every session can be found inside `sessions/class-{day}` directory.
The directory contains a `topics.md` file which will hold the key information
about the day.

## How to setup

#### Setup your computer

-   Install [Git](https://git-scm.com/).
-   Install [Nodejs](https://nodejs.org/en/) - LTS or Current (your choice).
-   Install [VSCode](https://code.visualstudio.com/) and [Quokka](https://marketplace.visualstudio.com/items?itemName=WallabyJs.quokka-vscode) extension.
-   Install the latest version of Chrome web browser.

`npm` comes with nodejs.

#### Clone repository

First fork and/or git clone this repo.

```bash
git clone https://github.com/swashata/multidots-frontend-dev-course-plan.git
```

Now checkout the `workshop` branch.

```bash
git checkout workshop
```

This will load unfinished files for you to complete.

#### Init the repo

From the root of the repo run

```bash
npm i
```

This will install all the dependencies.

#### Starting Demo

The modules of each classes can be found under `sessions/class-{day}/modules/`.
Each of them are either run with Quokka.js or browser as seen during the session.

> If the module has `index.html` file then it is meant to be run in browser.

From the root of the repository run

```bash
npm start
```

This will start a development server from where you can browse and run the `index.html`
files and check the console output from Chrome dev tool.

> If the module has no index.html file

Run Quokka on the file from VSCode. It will show the console output alongside
the code.

#### Going through the modules

I have annotated every module within the source code. Those are marked with
comments like

```js
// 🎙️
```

Read them and go through the code example and console output to revise the modules.

#### Starting exercise

Each day will hold it's own exercise. The exercise can be found inside
`sessions/class-{day}/exercise/start.js` file. Instructions will be written as
comments with the following legends

```js
// 🧸 - Implementation details / Guides.
// 💡 - Tip.
// 💰 - Additional tasks.
```

For class `01` through `04`, the exercise are about individual language features.
To get them started follow this process.

Say we want to complete exercise for `class 01`.

From terminal (or git bash if on windows), run

```bash
npm run test:01
```

This will open the tests in watch mode. At this point all the tests will fail.

Now edit `sessions/class-01/exercise/start.js` file and complete the tasks. As
you proceed the tests will start passing and once you are done all the tests will
pass.

Once done press <kbd>Ctrl</kbd>+<kbd>c</kbd> to quit the test watcher.

The finished exercise can be found under `sessions/class-01/exercise/start.js`
of the `master` branch of this repo.

Similarly when completing tasks for class 02, 03, 04 use the following commands

```bash
npm run test:02
npm run test:03
npm run test:04
```

## Running the App [Class 05]

On day 05, we build an app. First navigate to the directory

```bash
cd sessions/class-05/app
```

Now install dependencies

```bash
npm i
```

Start the development server with

```bash
npm start
```

Once done press <kbd>Ctrl</kbd>+<kbd>c</kbd> to quit the development server.

Run tests with

```bash
npm run test
```

Build production files with

```bash
npm run build
```

## What I need!

-   Linux Based or OSX based system for `Day 05`.
-   Notebook or personal laptops during other sessions.

## Some recommended readings

-   [Reintroduction to JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript).
-   [JavaScript 30](https://javascript30.com/).
-   [Developer Roadmap](https://github.com/kamranahmedse/developer-roadmap).
-   [Concept of JavaScript bundlers](https://medium.com/@gimenete/how-javascript-bundlers-work-1fc0d0caf2da).
-   [Testing with Kent C. Dodds](https://www.youtube.com/watch?v=z4DNlVlOfjU).
-   [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/) - Just the
    concepts.
-   [Babel](https://babeljs.io/docs/en/).
-   [Promises Fundamental](https://developers.google.com/web/fundamentals/primers/promises).

## Things I know

### 🚀 - Advanced

-   ES6+ JavaScript.
-   React.
-   WordPress.
-   JavaScript Tooling.
-   PHP - (PHP 5.6+).
-   CDN deployment (Netlify, Amazon S3 etc).
-   CSS-IN-JS.

### 👨‍💻 Intermediate

-   DevOps - CI/CD for build -> test -> deploy.
-   Server Administration.
-   Database administration.
-   GraphQL.
-   Serverless (firebase, netlify, auth0).
