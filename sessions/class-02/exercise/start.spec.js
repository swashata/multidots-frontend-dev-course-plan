import { SomeFunction, State } from './start';

describe('SomeFunction is perfect conversion', () => {
	const dragon = new SomeFunction();
	test('name is own property', () => {
		expect(
			Object.prototype.hasOwnProperty.call(dragon, 'name')
		).toBeTruthy();
	});
	test('sayDragon is not own property', () => {
		expect(
			Object.prototype.hasOwnProperty.call(dragon, 'sayDragon')
		).not.toBeTruthy();
	});
});

describe('State', () => {
	const myState = new State({ firstName: 'Swashata', lastName: 'Ghosh' });
	test('has initial state', () => {
		expect(myState.getState()).toEqual({
			firstName: 'Swashata',
			lastName: 'Ghosh',
		});
	});
	test('setState works for existing values', () => {
		myState.setState('firstName', 'Chandler');
		myState.setState('lastName', 'Bing');
		expect(myState.getState()).toEqual({
			firstName: 'Chandler',
			lastName: 'Bing',
		});
	});
	test('setState works for new values', () => {
		myState.setState('middleName', 'Muriel');
		expect(myState.getState('middleName')).toBe('Muriel');
	});
	test('setState throws error for non string keys', () => {
		expect(() => {
			myState.setState(null, 'foo');
		}).toThrowError();
	});
	test('getState throws for non integer key', () => {
		expect(() => {
			myState.getState(10);
		}).toThrowError();
	});
});
