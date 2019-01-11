/* eslint-disable strict */

'use strict';

// 🎙️ Class is a syntactic sugar for the prototypal inheritance we have seen before
// 🎙️ It eases up writing traditional OOP in JavaScript.
// 🎙️ The following code will not run by default in browser or Quokka
// 🎙️ Because we are using a bunch of experimental stuff
// 🎙️ I have commented out the experimental stuff so that it runs.

class MyClass {
	// ! Experimental - Public Class Field
	// ! https://github.com/tc39/proposal-class-fields
	// 🎙️ We have class/object properties
	// age = 28;

	// 🎙️ We have a constructor
	constructor(name) {
		// 🎙️ Constructor can assign object's own properties
		this.name = name;
		// 🎙️ Since we want sayName to be always bound to the instance
		// 🎙️ No matter how it is called
		// 🎙️ We can create a bind function
		this.sayName = this.sayName.bind(this);
		// 🎙️ Can you tell me how the above works?
		// 🧸 It has something to do with object own property and prototype
	}

	// 🎙️ We have class methods
	// 🎙️ When called through the instance of the class
	// 🎙️ Class methods are bound the instance
	// 🎙️ But it can be changed based on how it is called
	sayName() {
		console.log(this.name);
	}

	// ! Experimental - Public Class Field
	// 🎙️ If we always want to have a method bound to the instance
	// 🎙️ We can create class field and arrow functions
	// yellName = () => {
	// 	console.log(this.name);
	// };
	yellName() {
		console.log(this.name.toUpperCase());
	}

	// ! Experimental - Static Class Field
	// We have static properties
	// static objectifies = 'Person';

	// 🎙️ We have static methods
	static yellObjectifies() {
		console.log(MyClass.objectifies);
	}
}

const swas = new MyClass('Swashata Ghosh');
console.log(swas, '');

// 🎙️ Can you tell me how sayName is object's own property, but yellName is not?
console.log(Object.prototype.hasOwnProperty.call(swas, 'sayName'));
console.log(Object.prototype.hasOwnProperty.call(swas, 'yellName'));
