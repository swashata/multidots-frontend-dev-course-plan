/**
 * Beginner JavaScript
 */
// spread and array
// 💰 B2 [class 03 - revisit arrays - spread and shallow copy]
function somethingStringy(str) {
	return [...str].reverse();
}
console.log(somethingStringy('multidots'));

// rest, array.reduce and type safety
// 💰 B3 [class 03 - revisit array - array.reduce]
function sumItUp(...input) {
	return input.reduce((acc, i) => acc + i);
}
console.log(sumItUp('1', 2, 4));

// closure
// 💰 B4 [class 01 - variables and scope]
(function() {
	// eslint-disable-next-line no-var
	var a = 1;
})();
console.log(typeof a);

/**
 * Advanced JavaScript
 */
// scope and this
// 💰 A1 [class 02 - function - Scope of this.]
function hello() {
	this.getHello = function() {
		return 'Hello';
	};
}
const myHello = hello();
try {
	console.log(myHello.getHello());
} catch (e) {
	console.error(e);
}

// template string
// 💰 A2 [class 04 - template string - tagged template]
const info = {
	age: 28,
	name: 'Swas',
	gender: 'male',
};
const tagMd = (strings, ...values) =>
	strings.reduce(
		(acc, s, i) => `${acc}${s}${values[i] ? `*${values[i]}*` : ''}`,
		''
	);
console.log(
	tagMd`My name is ${info.name}, I am ${info.age} years old ${info.gender}.`
);

// destructure
// 💰 A3 [class 03 - Array/Object - Destructuring]
function destruct(obj, arr) {
	const { name, age = 100 } = obj;
	const [, { foo }] = arr;
	return age + foo;
}
console.log(destruct({ age: 28 }, [20, { foo: 10 }]));

// mutation
// 💰 A4 [class 03 - Array/Object - Shallow copy]
function updateAddr(person, lineTwo) {
	const newPerson = { ...person };
	newPerson.addr.lineTwo = lineTwo;
	return newPerson;
}
const flash = {
	name: 'Barry Allen',
	addr: {
		lineOne: 'West house',
		lineTwo: 'Star City',
	},
};
const flashFixed = updateAddr(flash, 'Central City');
console.log(flash === flashFixed, flash.addr.lineTwo);

// arrow function and this
// 💰 A5 [class 02 - Scope of this for arrow functions]
function Dog(name) {
	this.name = name;
	this.hungry = false;
	this.bark = () => {
		if (this.hungry) {
			console.log(`${name} barks`);
		} else {
			console.log(`${name} zzz`);
		}
	};
}
const scob = new Dog('Scooby');
scob.getHungry = () => {
	this.hungry = true;
};
scob.getHungry();
scob.bark();

// hoisting
// eslint-disable-next-line prefer-const
// 💰 A6 [class 01 - variables and scope]
const name = 'Scooby';
(function() {
	console.log(`My name is ${name}`);
	// eslint-disable-next-line no-var
	var name = 'Shelly';
	console.log(`My new name is ${name}`);
})();
