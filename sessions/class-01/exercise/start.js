/**
 * A utility function to safely convert a value
 * to number. If the value is not a number, then
 * return 0 instead.
 *
 * 🧸 - Make use of Number.parseFloat.
 * 🧸 - Make sure you account of Symbol.
 *
 * @param {any} possiblyNum Any value, possibly number.
 *
 * @returns {number} Value with "number" type, 0 if not a number.
 */
export function safelyConvertToNumber(possiblyNum) {
    if(typeof(possiblyNum) === 'symbol'){
        return 0;
    }  
    else{
        const num = Number.parseFloat(possiblyNum);
        if(Number.isNaN(num)){
            return 0;
        }
        else{
            return  num;
        }
    }

  
}
safelyConvertToNumber(2);
/**
 * Format a number into currency with a precision decimal.
 *
 * 🧸 - Make sure the input num is a number, make use of `safelyConvertToNumber`.
 * 🧸 - The return should also be a number.
 *
 * @param {number} num Input number.
 * @param {number} decimal Decimal precision.
 * @returns {number} Formatted currency value.
 */
export function formatCurrency(num, decimal) {
    return +safelyConvertToNumber(num).toFixed(decimal);
}
formatCurrency(23.5646456, 2);

/**
 * Get discounted price of an item, given the price and discount percentage.
 *
 * 🧸 - Make sure num is a number.
 * 🧸 - The return value should be formatted to 2 decimal point.
 *
 * @param {number} price Item price.
 * @param {number} percentage Discount percentage (like 25 for 25% discount).
 * @returns {number} formatted (2 decimal precision) value of discounted price.
 */
export function getDiscountedValue(price, percentage) {
    let itemprice = safelyConvertToNumber(price);
    let discounted_percent = safelyConvertToNumber(percentage)
    return formatCurrency( itemprice * (1 -  discounted_percent / 100) , 2);
}
getDiscountedValue(25.559 , 12);
/**
 * Check if a variable is falsy.
 * It should return true for any false like value, for eg, empty string, 0 etc.
 *
 * 🧸 - Use Boolean conversion.
 *
 * @param {any} item The item to check against.
 * @returns {boolean} True if the item is falsy.
 */
export function isFalsy(item) {
    return (!item);
}

console.log(isFalsy(null));
console.log(isFalsy(undefined));
console.log(isFalsy(0));
console.log(isFalsy(1));
console.log(isFalsy(-1));
console.log(isFalsy(''));
console.log(isFalsy('false'));
/**
 * Check if the value is not null and not undefined.
 * For everything else this should return true.
 *
 * @param {any} item The item to check against.
 * @returns {boolean} True if item has a value, false otherwise.
 */
export function hasValue(item) {
    return item !== null && item !== undefined;
}
console.log(hasValue(null));
console.log(hasValue(undefined));
console.log(hasValue('null'));
console.log(hasValue('himali'));
/**
 * Split a person's name and get an array of [firstName, lastName].
 *
 * 🧸 - If the name has a middlename, like 'Chandler Muriel Bing'
 *      then result should be ['Chandler', 'Muriel Bing'], so anything
 *      after the first name should go in the last name.
 * 🧸 - Use array.splice.
 *
 * @param {string} name Name of the person.
 * @returns {string[]} Array where firstName is in 0th position and last name is in 1st position.
 */
export function getFirstAndLastNames(name) {
    const names = name.split(' ');
    console.log(names);
    const firstname = names[0];
    names.splice(0 , 1);
    console.log(firstname);
    const lastName = names.join(' ');
    console.log(lastName);
    return [firstname , lastName];

}
getFirstAndLastNames('Chandler Muriel Bing');
/**
 * Get a property from an object. If the property doesn't exist then get the
 * default value instead.
 *
 * 🧸 - Should be able to handle null and undefined.
 * 🧸 - Should be able to handle numbers, strings and any other types.
 *
 * @param {object} obj Source object.
 * @param {string} key Property key.
 * @param {any} def Default value.
 * @returns {any} Property value.
 */
export function getValue(obj, key, def) {
    if (!hasValue(obj)) {
		return def;
	}
   else{
       return obj[key] || def;
   }

}
getValue({ name: 'Himali' }, 'name', 'default-value');












