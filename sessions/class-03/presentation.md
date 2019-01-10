## Modular JavaScript

-   Why do we need modules?
-   CommonJS (`exports.foo` | `require`).
-   CJS (`module.exports` | `require`).
-   ES Modules (`export` | `import`).

## JavaScript Tooling

-   No tooling is needed for Nodejs development with CommonJS or CJS.
-   For browsers, we do not (yet) have a module system, hence we use module bundler.
-   The first one was `browserify` - Make CommonJS and CJS work.
-   Now we use ES Module and webpack or parcel.
-   We need a way to make ES6+ code work under older browsers, so we use babel.
-   Hands on demo.
