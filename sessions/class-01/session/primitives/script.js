/* eslint-disable no-self-compare */
/* eslint-disable eqeqeq */
/* eslint-disable no-restricted-syntax */
/**
 * * JavaScript Numbers
 * - Assignable with Number() or just as a literal.
 * - Could be an integer or a float.
 * - Internally is an object with many methods.
 * ! double-precision 64-bit format IEEE 754 values (kill math).
 */
// integer
const anInt = 12;
console.log('​aNumber', typeof anInt, anInt);

// float
const aFloat = 8.123;
console.log('​aFloat', typeof aFloat, aFloat);

// kill math
console.log(0.1 + 0.2 === 0.3, 0.1 + 0.2);
console.log(+(0.1 + 0.2).toFixed(2));

// Cast others to Number
const castedNumber = Number('20.22');
console.log('​castedNumber', castedNumber);
const anotherCastedNumber = Number.parseFloat('12.34');
console.log('​anotherCastedNumber', anotherCastedNumber);
console.log(Number(false));
console.log(Number(true));
// Works good for primitives only
console.log(Number({ foo: true }));

/**
 * * JavaScript Strings
 * - Assignable with String() or a literal.
 * - Internally is an object with many methods.
 * - Has @@iterator method, hence is iterable.
 */
const aString = 'Hello World';
console.log('​aString', typeof aString, aString);

// Length of a string
console.log(aString.length);

// charCode of a character of a string
console.log(aString.charCodeAt(1));

// Convert to upper case
console.log(aString.toUpperCase());

// Create an array from a string
console.log(Array.from(aString));
console.log([...aString]);

// Iterate through a string
console.log(aString[Symbol.iterator]);
for (const ch of aString) {
	console.log(ch);
}

// Cast others to number
console.log((12).toString());
console.log(String(12.34));
console.log(String(true));

// Works good for primitives only
console.log(
	String({
		foo: 'bar',
	})
);

/**
 * * JavaScript Booleans
 * - Assignable with Boolean or as literal true or false.
 * - Internally is an Object with only method valueOf.
 * - Doesn't
 */
const aBool = true;
console.log('​aBool', typeof aBool, aBool);
console.log(aBool.valueOf());

// Cast others to boolean
// 1. false, 0, empty strings (""), NaN, null, and undefined all become false.
// 2. All other values become true.
console.log(Boolean(''));
console.log(Boolean('hello'));
console.log(Boolean([]));
console.log(Boolean({}));
console.log(Boolean(1));

/**
 * * JavaScript Symbols
 * - Does not have a literal value.
 * - Is always unique.
 * - Mainly used to assign non-iterable unique properties to an object.
 */
const symOne = Symbol('My first symbol');
const symTwo = Symbol('My second symbol');
// types
console.log(typeof symOne);
console.log(typeof symTwo);

// never equal
console.log(symOne === symTwo);
// even with same description
console.log(Symbol('hello') === Symbol('hello'));

// Symbol as object properties
const mySecretiveObj = {
	fName: 'Swashata',
	lName: 'Ghosh',
	[symOne]: 'Dragons',
	[symTwo]: 'Shenanigans',
};
console.log(mySecretiveObj);
// is not found in regular or enumerable object keys
console.log(Object.keys(mySecretiveObj));
// can be accessed directly
console.log(mySecretiveObj[symOne]);
// to get all symbol properties, use Object.getOwnpropertySymbols
console.log(Object.getOwnPropertySymbols(mySecretiveObj));
console.log(Object.getOwnPropertySymbols(mySecretiveObj)[0] === symOne);

/**
 * * Other JavaScript primitives
 * - null - A deliberate non-value, i.e, set explicitly by the programmer.
 * - undefined - Uninitialized value, i.e, a varibale is declared, but no value has been given.
 */
console.log(typeof null);
console.log(typeof undefined);
let undefinedVariable;
console.log(undefinedVariable, typeof undefinedVariable);
console.log(undefinedVariable === null);
console.log(undefinedVariable === undefined);
undefinedVariable = null;
console.log(typeof undefinedVariable);
console.log(undefinedVariable === null);
console.log(undefinedVariable === undefined);

// null and undefined are loosely equal.
console.log(undefined == null);
console.log(null == 0);
console.log(null == 1);
console.log(null == false);
console.log(null == true);

console.log(undefined == 0);
console.log(undefined == 1);
console.log(undefined == true);
console.log(undefined == false);

// Hence, never use eqeq, always use eqeqeq
// if checking for unassigned or null value
let value;
console.log(value);
if (value === null || value === undefined) {
	value = 10;
}
console.log(value);
