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
	this.name = 'Dragons';
}

// 🧸 Also think about methods in prototype chain.
SomeFunction.prototype = {
	// 🧸 See what should come from prototype
	sayDragon() {
		return this.name.toUpperCase();
	},
};

// 🧸 Let's create a class State
// 🧸 The class instantiation takes an initial state (an object).
// 🧸 The class provides two methods
// 🧸 setState(key, value) which sets the state for the key with the value.
//    If key is not a string, then it should throw an error.
// 🧸 getState(key = null) which gets all the state if key is null, or just the
//    specified property.
//    If key is not null and is not a string, then it should throw an error.
export class State {
	constructor(initialState) {
		this.state = initialState;
	}

	setState(key, value) {
		if (typeof key !== 'string') {
			throw new Error('key has to be string');
		}
		this.state[key] = value;
	}

	getState(key = null) {
		if (key === null || key === undefined) {
			return this.state;
		}
		if (typeof key !== 'string') {
			throw new Error('key has to be string');
		}
		return this.state[key];
	}
}

export function Cycle(interval, callback) {}

Cycle.prototype = {
	init(interval, callback) {
		this.interval = interval;
		this.callback = callback;
		this.intervalId = null;
	},
	start() {
		this.intervalId = setInterval(this.callback, this.interval);
	},
	stop() {
		clearInterval(this.intervalId);
	},
};

export function CycleEnhanced() {}

CycleEnhanced.prototype = Object.create(Cycle.prototype);

CycleEnhanced.prototype.changeCallback = function changeCallback(callback) {
	this.stop();
	this.callback = callback;
	this.start();
};
CycleEnhanced.prototype.changeInterval = function changeInterval(interval) {
	this.stop();
	this.interval = interval;
	this.start();
};
