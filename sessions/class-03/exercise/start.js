// Import some of our utility from previously completed exercise
import { safelyConvertToNumber } from '../../class-01/exercise/start';
import { type } from 'os';

/**
 * Inserts an item to an existing array at a particular position
 * shifting the rest of the items.
 *
 * This is a pure function and doesn't change the original
 * parameters.
 *
 * It should throw an error if index is less than 0
 * or greater than array.length
 *
 * @param {Array} arr Input array.
 * @param {number} index Index where to insert the item.
 * @param {any} item The item to insert.
 *
 * @return {Array} The new array with the item inserted.
 */
export function insertItemAtIndex(arr, index, item) {
	// 🧸 Make sure it checks for index and array.length
	if(index < 0 || index > arr.length){
		throw new Error('idex is less then 0 or greater then Array length '); 
	}
	 
	// 🧸 Use Array.prototype.slice to create two arrays		
	// 🧸 Use spread operator to join them with the new item
	return [...arr.slice(0,index),item,...arr.slice(index)];
	// 🧸 At the index.
}
/**
 * Reorder an array by taking an existing item at an index
 * and put it at a new index, shifting the rest of the items.
 *
 * @param {Array} arr Input array.
 * @param {number} from Index of the item to reorder.
 * @param {number} to The new position where to insert it.
 */
export function reOrderArray(arr, from, to) {
	// 🧸 If from and to are just the same, then just
	// 🧸 return a copy of the array
	if (from === to) {
		return arr;
	}
	// 🧸 If from or to are out of bound, then throw an error
	if (from >= arr.length || from < 0) {
		throw new Error('Out of bound');
	}
	if (to >= arr.length || to < 0) {
		throw new Error('Out of bound');
	}
	// Let's take the item to move
	// Now the parts of the array to move
	// differs based on whether from is greater than to or not
	if (from > to) {
		// The first part is 0 -> to - 1
		// Second part is the item to move
		// Third part is to -> from - 1
		// Last is from -> end
	}

	// Since from < to
	// First part is 0 -> from -1
	// Second part is from + 1 -> to
	// Third part is item to move
	// Last is to +1 -> end
}

/**
 * Get the email from all users and return them as an array.
 *
 * @param {Array} data Data of users.
 * @returns {string[]} Array of emails.
 */
export function getEmails(data) {
	return data.map((item) => item.email);
}

/**
 * Add any number of arguments passed to the function and return
 * the sum value.
 *
 * 🧸 - Use rest parameter.
 * 🧸 - Take into account if an argument is not a number.
 * 🧸 - Use array.reduce.
 *
 * @param {any[]} numbers Possibly numbers.
 * @returns {number} Summed up value or 0 if all NaN.
 */
export function addNumbers(...numbers) {
	const filteredNumbers = numbers.map((item)=> typeof item === 'number' || typeof item === 'string' ? Number(item) : 0);
	return filteredNumbers.reduce((acc,cur) => acc + cur,0);
}

/**
 * A function to reverse the characters of a string.
 *
 * 🧸 - Spread the string into array.
 * 🧸 - Use array methods to reverse it.
 *
 *
 * @param {string} str Input string.
 * @returns {string} Reversed string.
 */
export function reverseString(str) {
	return [...str].reverse().join('');
}

/**
 * A function to filter users by countries.
 *
 * It takes multiple countries and filters out users who are from those countries.
 *
 * 🧸 - Use Array.of if countries is not an Array.
 * 🧸 - Use array.filter to filter array by a callback function
 * 🧸 - Use array.includes to make sure the address matches the countries.
 *
 * @param {Array} users Array of users object.
 * @param {string[]} countries Array of countries.
 * @return {Array} Filtered users who belong to the mentioned country.
 */
export function getUsersFromCountries(users, countries) {}
