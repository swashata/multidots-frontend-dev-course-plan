/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/**
 * * JavaScript Declaration
 * - Declare variables.
 * - And that's it.
 */
// declare variables with primitive value.
let a = 10;
const b = 20;
// declare a function variable
const func = function() {};
// declare a function
function mySweetFunc() {}

/**
 * * JavaScript Expression
 * - Produces a value.
 * - Like operation on variables.
 * - Arguments passed to a function.
 */
a + b;
func('hello', 'world');

// function expression
(function() {});

// named function expression
(function foo() {
	// foo is visible only here
});
// foo is not visible here
console.log(typeof foo);
// more practical example
const factorial = function me(x) {
	// me is visible here
	console.log(typeof me);
	return x <= 1 ? 1 : x * me(x - 1);
};
// but me is not visible here
console.log(typeof me);
console.log(factorial(1));

/**
 * * JavaScript Statements
 * - Roughly performs an action.
 * - Calling a function.
 * - if, while, for blocks.
 */

if (a) {
	console.log(b);
}
for (let i = 0; i < b; i++) {
	console.log(a);
}

// Only a function expression can be invoked immediately, not a function declaration
(function() {
	// do something
})(); // okay

// function isItIffie() {}(); // not okay

// Read more: http://2ality.com/2012/09/expressions-vs-statements.html
