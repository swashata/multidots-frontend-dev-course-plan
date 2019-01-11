// 🧸 Here's a class with ES6 syntax
// 🧸 Remember it is just syntactic sugar around JavaScript's prototypal inheritance.
class SomeClass {
	constructor() {
		this.name = 'Dragons';
	}

	sayDragon() {
		return this.name.toUpperCase();
	}
}

// 💰 Convert the above class with JavaScript's Function
export function SomeFunction() {
	// 🧸 See what should be the object's own property
}

SomeFunction.prototype = {
	// 🧸 See what should come from prototype
};
