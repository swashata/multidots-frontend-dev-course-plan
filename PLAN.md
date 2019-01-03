- Using jQuery, not really a challenge.
- Get modern clients.
- JavaScript is primary priority.

# Plan

1. Quiz before-hand.
2. Preface for what to learn before-hand.

# Day 1

> Intro to modern JavaScript.

### About ES6

- Better to go through all new APIs.
- Better to go through DOM APIs.
- Go through a few browser APIs.

### Modular code-base

- First implementation on node.js (cjs).
- Browser implementation (browserify, webpack, parcel).
- Which module should we use today.
- How babel can help us with interpolation of modules.

### Why React?

- In demo projects.
- For JAMStack. (They think react is the only way to go).
- No idea why UI as function of state.

### Q/A

Ask.

### Task

Rewrite a legacy application with modern ES6+ code.

# Day 2

> Hands on demo of setting up front-end tooling.

- Linter with ESLint.
- Webpack, webpack-dev-server
- wpack.io build tool.

### How do we use ES6 Modules

- We have focus on tools and bundlers, no skipping that part.
- You know about the task runners.
- underlying apps behind task-runners and bundlers.

### Why do we need tooling

- Difference task runners and specific tools.
- Why do we even need a bundler.
- Where the inspiration came from?

### Q/A

#### Why with just babel, we can not use ES Modules?

To be answered!

### Task

Take the result from Day 1, rewrite using React and split codebase into modules.

# Day 3

Promise and Async+Await.

### Promise

```js
// Promise API
const prom = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Done"), 3000);
}).then(res => console.log(res));
```

### Async+Await

```js
// Async+Await
async function doIt() {
  const res = await somePromiseFunc();
  console.log(res);
}
```

### Task

Take result from Day 2 and convert selected parts to async+await pattern.

# Day 4

Testing JavaScript application.

### Unit testing

- Which part to unit test.
- Why we shouldn't unit test react components.

### Integration Tests

- What is it?
- How to integration test legacy application (dom-testing-library).
- Integration test React apps (react-testing-library).

### e2e Tests

- With cypress.io.

### Task

Take result from Day 3 and write tests.

# Day 5

> Intro to a simple JAMStack App structure.

### Intro to a React App

- file structure. (wasting time).
- beginners syndrome.
- not so sure about security.

### Firebase Demo App

- Realtime Database.
- It supports authentication through their own APIs (Social Login, password-less login).
- Show only relevant data based on login.

> ## Go with this
>
> Create a task list, where you have to login first. Then as you
> add tasks, it will be saved in real-time?
> If you have the same app open in some other device with the same
> login, then you can see it live.

### Q/A

#### Why storing global variables in .env

Where to store access token for APIs. DevOps related in CI.

#### How much JAMStack cost

Check with individual providers. Better to choose one single provider at start
like Netlify or firebase or now.sh and scale up.

### Task

Extend the task list to add task progress and expiry date. Have some majestic
UI to warn user about expiring tasks.
