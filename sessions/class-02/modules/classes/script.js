/* eslint-disable strict */

'use strict';

// 🎙️ Class is a syntactic sugar for the prototypal inheritance we have seen before
// 🎙️ It eases up writing traditional OOP in JavaScript.
// 🎙️ The following code will not run by default in browser or Quokka
// 🎙️ Because we are using a bunch of experimental stuff
// 🎙️ I have commented out the experimental stuff so that it runs.

class MyClass {
	// ✅ class properties.
	// ! Experimental - Public Class Field
	// ! https://github.com/tc39/proposal-class-fields
	// 🎙️ We have class/object properties
	// age = 28;

	// ✅ constructor.
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

	// ✅ class methods.
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

	// ✅ static methods and properties.
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

// ✅ Inheritance.

// 🎙️ Now let's see how we use inheritance with classes
// 🎙️ Say we have a base class, Staff from the last example
class Staff {
	// 🎙️ Instead of a separate init function, we can just have
	// 🎙️ the initialization inside the constructor
	constructor(fName, lName) {
		this.fName = fName;
		this.lName = lName;
	}

	// 🎙️ And we have the same methods
	getName() {
		return `${this.fName} ${this.lName}`;
	}

	checkIn() {
		return `${this.getName()} checking in`;
	}

	checkOut() {
		return `${this.getName()} checking out`;
	}
}

// 🎙️ Now we want to create a Manager class
// 🎙️ Which would inherit all functionalities from Staff
class Manager extends Staff {
	// 🎙️ We need to initialize the fName and lName in constructor too
	constructor(fName, lName, activeProject) {
		// 🎙️ Now here's the important part
		// 🎙️ We need to pass the fName and lName to the parent class
		// 🎙️ And we need to store activeProject too
		// 🎙️ In JavaScript constructor function
		// 🎙️ This isn't available until we call a special method
		// 🎙️ super
		// 🎙️ super is the constructor function of the class it extends
		// 🎙️ And it can have the same arguments
		super(fName, lName);
		// 🎙️ Now we have access to this
		this.activeProjects = activeProject;
	}

	// 🎙️ Now we can have other methods too
	updateProjectStatus(done = true) {
		return `Project ${this.activeProjects} is ${
			done ? 'done' : 'not done'
		}`;
	}
}

// 🎙️ Let's take it for a spin
const mrMayur = new Manager('Mayur', 'Keshwani', 'frontend training');
console.log(mrMayur.getName());
console.log(mrMayur.checkIn());
console.log(mrMayur.updateProjectStatus(true));
console.log(mrMayur.checkOut());

// ✅ Using rest and spread on constructor.
// 🎙️ Here's a tip
// 🎙️ If the child class and parent class has the same arguments
// 🎙️ in the constructor, then we can use rest and spread
class TeamLead extends Staff {
	constructor(members, ...args) {
		super(...args);
		this.teamMembers = members;
	}

	listTeamMembers() {
		return this.teamMembers;
	}
}

const mrAmin = new TeamLead(
	[
		'ROHIT',
		'Juhi',
		'Himali',
		'Anuja',
		'Nishit',
		'Sadik',
		'Asad',
		'Mayur',
		'Monark',
		'Smit',
		'Anis',
		'Chirag',
		'Mansi',
		'Mansi',
		'shashank',
		'Sagar',
	],
	'Amin',
	'Charoliya'
);
console.log(mrAmin.getName());
console.log(mrAmin.listTeamMembers());
