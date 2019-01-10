/* eslint-disable func-names */
/* eslint-disable strict */

'use strict';

/**
 * General Function
 */

// Defining a function
// Parsetime
function parsetimeFunction() {
	return 1;
}
parsetimeFunction();

// Assigning a function to a variable
// Runtime, could be anonymous
const runtimeFunction = function() {
	return 1;
};
console.log(runtimeFunction());

// Arrow Functions
// Always runtime and anonymous
const coolFunc = () => 1;
// Or even shorter
// const coolFunc = () => 1;

/**
 * Prototypal inheritance
 */
function Name(name) {
	if (!(this instanceof Name)) {
		throw new TypeError('Name can only be instantiated');
	}
	this.name = name;
}
Name.prototype = {
	getFirstName() {
		return this.name.split(' ')[0];
	},
	getLastName() {
		return this.name.split(' ')[1];
	},
};
