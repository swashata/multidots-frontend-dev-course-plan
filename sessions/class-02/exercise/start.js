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
function SomeFunction(name) {
	console.log(name);
	this.name = name;
}

SomeFunction.prototype = {
	sayDragon() {
		return this.name.toUpperCase();
	}
};
const someName = new SomeFunction('Juhi');

console.log(Object.prototype.hasOwnProperty.call(SomeFunction, 'name'));
console.log(someName.sayDragon());

// 🧸 Let's create a class State
// 🧸 The class instantiation takes an initial state (an object).
// 🧸 The class provides two methods
// 🧸 setState(key, value) which sets the state for the key with the value.
//    If key is not a string, then it should throw an error.
// 🧸 getState(key = null) which gets all the state if key is null, or just the
//    specified property.
//    If key is not null and is not a string, then it should throw an error.
export class State {
	constructor(obj){
		this.state = obj;
	}
	setState(key, value){
		if(key !== 'string'){
			throw "Error";
		} else {
			this.setState ({
			 })
		}
	}
	getState(){
		if(key === null){
			return 'Juhi';
		}
		if(key !== 'string' && key !== null) {
			throw "Error";
		}
	}
}

// 🧸 We have a constructor function Cycle.
// 🧸 The purpose is to create a clock which will fire
// 🧸 A callback after given interval.
function Cycle() {

}
// 🧸 With it comes the following methods.
Cycle.prototype = {
	// 🧸 This one sets the interval and callback of the clock.
	init(interval, callback) {
		this.interval = interval;
		this.callback = callback;
		this.intervalId = null;
	},
	// 🧸 This one starts the clock.
	start() {
		this.intervalId = setInterval(this.callback, this.interval);
	},
	// 🧸 This one stops the clock.
	stop() {
		clearInterval(this.intervalId);
	},
};

// 🧸 Now the goal is to create another constructor function
function CycleEnhanced() {

}
// 🧸 This one should inherit from Cycle
// 🧸 And have its own methods
// 🧸 changeCallback - Which will change the callback on the go.
// 🧸 changeInterval - Which will change the interval on the go.
// 💡 The above two methods should clear old interval
//    set the new values and start the clock again.
// 💡 The prototype of CycleEnhanced should inherit the prototype of Cycle.
CycleEnhanced.prototype = Object.create(Cycle.prototype);
CycleEnhanced.prototype.changeCallback = function() {
	this.stop();
	this.callback = callback;
	this.start();
}
CycleEnhanced.prototype.changeInterval = function() {
	this.stop();
	this.interval = interval;
	this.start();
}
